using HWWASM;
using System.Collections.Generic;
using UnityEngine;

public class PayNoConsumeScene : MonoBehaviour
{
    // Start is called before the first frame update
    void Start()
    {
    }

    // Update is called once per frame
    void Update()
    {
    }

    public void IsEnvReady()
    {
        Debug.Log("IsEnvReady start");
        IsEnvReadyOption isEnvReadyOption = new IsEnvReadyOption
        {
            applicationID = "101***751",
            success = res =>
            {
                Debug.Log("IsEnvReady success returnCode: " + res.returnCode);
                ObtainProductInfo();
                PayForNonConsumable();
            },
            fail = res => { Debug.Log("IsEnvReady fail data: " + res.data + ", code: " + res.code); },
        };
        QG.IsEnvReady(isEnvReadyOption);
    }

    public void PayForNonConsumable()
    {
        CreatePurchaseIntentOption createPurchaseIntentOption = new CreatePurchaseIntentOption
        {
            applicationID = "101***751",
            priceType = 1,
            productId = "202***901",
            // 华为开发者联盟添加支付服务时生成的支付公钥
            publicKey = "MIIBojANBgkqhkiG9w0*************************EeKlAgMBAAE",
            success = res =>
            {
                string sign = res.inAppDataSignature;
                InAppPurchaseData inAppPurchaseData = res.inAppPurchaseData;
                Debug.Log("PayForNonConsumable CreatePurchaseIntent success returnCode: " + res.returnCode +
                          ", errMsg: " + res.errMsg + ", inAppDataSignature: " + sign +
                          ", inAppPurchaseData: " +
                          (inAppPurchaseData != null ? JsonUtility.ToJson(inAppPurchaseData) : ""));
                if (inAppPurchaseData != null)
                {
                    string token = inAppPurchaseData.purchaseToken;
                    Debug.Log("PayForNonConsumable CreatePurchaseIntent token: " + token);
                    CheckSign(inAppPurchaseData.purchaseState, sign, token);
                }
            },
            fail = res =>
            {
                Debug.Log("PayForNonConsumable CreatePurchaseIntent fail data: " + res.data + ", code: " + res.code);
                if (res.code == 60051 || res.code == -1)
                {
                    ObtainProductInfo(null);
                }
            },
        };
        QG.CreatePurchaseIntent(createPurchaseIntentOption);
    }

    public void ObtainProductInfo()
    {
        ObtainProductInfoOption obtainProductInfoOption = new ObtainProductInfoOption
        {
            applicationID = "101***751",
            priceType = 1,
            // 来自agc管理台的配置
            productIds = new List<string> { "202***19" },
            success = res =>
            {
                Debug.Log("ObtainProductInfo success returnCode: " + res.returnCode + ", errMsg: " + res.errMsg);
                if (res.productInfoList != null && res.productInfoList.Count != 0)
                {
                    foreach (ProductInfo item in res.productInfoList)
                    {
                        Debug.Log("ObtainProductInfo ProductInfo productId: " + item.productId +
                                  ", priceType: " + item.priceType);
                    }
                }
            },
            fail = res => { Debug.Log("ObtainProductInfo fail data: " + res.data + ", code: " + res.code); },
        };
        QG.ObtainProductInfo(obtainProductInfoOption);
    }

    public void CheckSign(int purchaseState, string sign, string token)
    {
        Debug.Log("CheckSign purchaseState: " + purchaseState + ", sign: " + sign + ", token: " + token);
        //对购买结果进行验签。为方便起见，将result设置为true.
        bool result = true;
        if (result)
            // 支付完成后，开发人员需要根据inAppPurchaseData中的purchaseState字段确定订单是否已成功支付。付款成功后，提供相应的产品或服务，并向华为IAP发送发货确认请求。
        {
            ConfirmTransct(token, purchaseState);
        }
    }

    public void ConfirmTransct(string token, int purchaseState)
    {
        Debug.Log("ConfirmTransct success token: " + token + ", purchaseState: " + purchaseState);
        // 根据inAppPurchaseData中的purchaseState字段检查订单是否已成功支付。付款成功后，提供相应的产品或服务，并向华为IAP发送发货确认请求。
        if (purchaseState == 0)
        {
            Debug.Log("You have purchased it and can use it permanently. You do not need to purchase it again.");
        }
    }

    public void ObtainProductInfo(string token)
    {
        ObtainOwnedPurchasesOption obtainOwnedPurchasesOption = new ObtainOwnedPurchasesOption
        {
            applicationID = "101***751",
            priceType = 1,
            continuationToken = token,
            // 华为开发者联盟添加支付服务时生成的支付公钥
            publicKey = "MIIBojANBgkqhkiG9w0*************************EeKlAgMBAAE",
            success = res => { ParseOwnedPurchases(res); },
            fail = res => { Debug.Log("ObtainOwnedPurchases fail data: " + res.data + ", code: " + res.code); },
        };
        QG.ObtainOwnedPurchases(obtainOwnedPurchasesOption);
    }

    public void ParseOwnedPurchases(ObtainOwnedPurchasesSuccessResult res)
    {
        List<InAppPurchaseData> inAppPurchaseDataList = res.inAppPurchaseDataList;
        List<string> inAppSignature = res.inAppSignature;
        if (inAppPurchaseDataList != null && inAppPurchaseDataList.Count != 0 && inAppSignature != null &&
            inAppSignature.Count == inAppPurchaseDataList.Count)
        {
            for (int i = 0; i < inAppPurchaseDataList.Count; i++)
            {
                CheckSign(inAppPurchaseDataList[i].purchaseState, inAppSignature[i],
                    inAppPurchaseDataList[i].purchaseToken);
            }
        }

        if (!string.IsNullOrEmpty(res.continuationToken))
        {
            ObtainProductInfo(res.continuationToken);
        }
    }
}