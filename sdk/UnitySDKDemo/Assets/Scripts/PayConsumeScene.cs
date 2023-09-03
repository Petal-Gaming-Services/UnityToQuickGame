using HWWASM;
using UnityEngine;
using UnityEngine.SceneManagement;
using System.Collections.Generic;

public class PayConsumeScene : MonoBehaviour
{
    // Start is called before the first frame update
    void Start()
    {
    }

    // Update is called once per frame
    void Update()
    {
    }

    public void OnBackClick()
    {
        SceneManager.LoadScene("MainScene");
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
                ObtainOwnedPurchases(null);
                ObtainProductInfo();
                PayForConsumable();
            },
            fail = res => { Debug.Log("IsEnvReady fail data: " + res.data + ", code: " + res.code); },
        };
        QG.IsEnvReady(isEnvReadyOption);
    }

    public void ObtainOwnedPurchases(string token)
    {
        ObtainOwnedPurchasesOption obtainOwnedPurchasesOption = new ObtainOwnedPurchasesOption
        {
            applicationID = "101***751",
            priceType = 0,
            continuationToken = token,
            // 华为开发者联盟添加支付服务时生成的支付公钥
            publicKey = "MIIBojANBgkqhkiG9w0*************************EeKlAgMBAAE",
            success = res => { ParseOwnedPurchases(res); },
            fail = res => { Debug.Log("obtainOwnedPurchases fail data: " + res.data + ", code: " + res.code); },
        };
        QG.ObtainOwnedPurchases(obtainOwnedPurchasesOption);
    }

    public void ParseOwnedPurchases(ObtainOwnedPurchasesSuccessResult res)
    {
        List<string> inAppPurchaseDataListStr = res.inAppPurchaseDataList;
        List<string> inAppSignature = res.inAppSignature;
        if (inAppPurchaseDataListStr != null && inAppPurchaseDataListStr.Count != 0 && inAppSignature != null &&
            inAppSignature.Count == inAppPurchaseDataListStr.Count)
        {
            for (int i = 0; i < inAppPurchaseDataListStr.Count; i++)
            {
                InAppPurchaseData inAppPurchaseData =
                    JsonUtility.FromJson<InAppPurchaseData>(inAppPurchaseDataListStr[i]);
                CheckSign(inAppPurchaseData.purchaseState, inAppSignature[i],
                    inAppPurchaseData.purchaseToken);
            }
        }

        if (!string.IsNullOrEmpty(res.continuationToken))
        {
            ObtainOwnedPurchases(res.continuationToken);
        }
    }

    public void ObtainProductInfo()
    {
        ObtainProductInfoOption obtainProductInfoOption = new ObtainProductInfoOption
        {
            applicationID = "101***751",
            priceType = 0,
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
        {
            ConfirmTransct(token, purchaseState);
        }
    }

    public void ConfirmTransct(string token, int purchaseState)
    {
        Debug.Log("ConfirmTransct success token: " + token + ", purchaseState: " + purchaseState);
        // 根据inAppPurchaseData中的purchaseState字段检查订单是否已成功支付。付款成功后，提供相应的产品或服务，并向华为IAP发送发货确认请求。
        if (purchaseState != 0)
        {
            return;
        }

        //在消耗品交付给完成支付的用户后消耗该消耗品。
        ConsumeOwnedPurchaseOption consumeOwnedPurchaseOption = new ConsumeOwnedPurchaseOption
        {
            purchaseToken = token,
            applicationID = "101***751",
            // 华为开发者联盟添加支付服务时生成的支付公钥
            publicKey = "MIIBojANBgkqhkiG9w0*************************EeKlAgMBAAE",
            success = res =>
            {
                string consumePurchaseDataStr = res.consumePurchaseData;
                ConsumePurchaseData consumePurchaseData = null;
                if (!string.IsNullOrEmpty(consumePurchaseDataStr))
                {
                    consumePurchaseData = JsonUtility.FromJson<ConsumePurchaseData>(consumePurchaseDataStr);
                }

                Debug.Log("ConfirmTransct ConsumeOwnedPurchase returnCode: " + res.returnCode + ", errMsg: " +
                          res.errMsg + ", consumePurchaseData: " + (consumePurchaseData != null
                              ? JsonUtility.ToJson(consumePurchaseData)
                              : "") + ", dataSignature: " +
                          res.dataSignature);
            },
            fail = res =>
            {
                Debug.Log("ConfirmTransct ConsumeOwnedPurchase fail data: " + res.data + ", code: " + res.code);
            },
        };
        QG.ConsumeOwnedPurchase(consumeOwnedPurchaseOption);
    }

    public void PayForConsumable()
    {
        CreatePurchaseIntentOption createPurchaseIntentOption = new CreatePurchaseIntentOption
        {
            applicationID = "101***751",
            priceType = 0,
            productId = "202***19",
            // 华为开发者联盟添加支付服务时生成的支付公钥
            publicKey = "MIIBojANBgkqhkiG9w0*************************EeKlAgMBAAE",
            success = res =>
            {
                string sign = res.inAppDataSignature;
                string inAppPurchaseDataStr = res.inAppPurchaseData;
                InAppPurchaseData inAppPurchaseData = null;
                if (!string.IsNullOrEmpty(inAppPurchaseDataStr))
                {
                    inAppPurchaseData = JsonUtility.FromJson<InAppPurchaseData>(inAppPurchaseDataStr);
                }

                Debug.Log("PayForConsumable CreatePurchaseIntent success returnCode: " + res.returnCode + ", errMsg: " +
                          res.errMsg + ", inAppDataSignature: " + sign + ", inAppPurchaseData: " +
                          (inAppPurchaseData != null ? JsonUtility.ToJson(inAppPurchaseData) : ""));
                if (inAppPurchaseData != null)
                {
                    string token = inAppPurchaseData.purchaseToken;
                    Debug.Log("PayForConsumable CreatePurchaseIntent token: " + token);
                    CheckSign(inAppPurchaseData.purchaseState, sign, token);
                }
            },
            fail = res =>
            {
                Debug.Log("PayForConsumable CreatePurchaseIntent fail data: " + res.data + ", code: " + res.code);
                if (res.code == 60051 || res.code == -1)
                {
                    //如果返回的是消耗品信息，则可能是由于某些异常导致消耗品无法发货
                    // 在这种情况下，你的应用程序需要检查消耗品是否被成功支付。如果没有，应用程序需要提供这些信息并重新支付。然后调用consumeOwnedPurchase API来消耗它们。
                    ObtainOwnedPurchases(null);
                }
            },
        };
        QG.CreatePurchaseIntent(createPurchaseIntentOption);
    }
}