using System.Collections.Generic;
using UnityEngine;
using HWWASM;

public class PaySubscribeScene : MonoBehaviour
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
                PayForSubs();
            },
            fail = res => { Debug.Log("IsEnvReady fail data: " + res.data + ", code: " + res.code); },
        };
        QG.IsEnvReady(isEnvReadyOption);
    }

    public void PayForSubs()
    {
        CreatePurchaseIntentOption createPurchaseIntentOption = new CreatePurchaseIntentOption
        {
            applicationID = "101***751",
            priceType = 2,
            productId = "2023***902",
            // 华为开发者联盟添加支付服务时生成的支付公钥
            publicKey = "MIIBojANBgkqhkiG9w0*************************EeKlAgMBAAE",
            success = res =>
            {
                string sign = res.inAppDataSignature;
                InAppPurchaseData inAppPurchaseData = res.inAppPurchaseData;
                Debug.Log("PayForSubs CreatePurchaseIntent success returnCode: " + res.returnCode + ", errMsg: " +
                          res.errMsg + ", inAppDataSignature: " + sign + ", inAppPurchaseData: " +
                          (inAppPurchaseData != null ? JsonUtility.ToJson(inAppPurchaseData) : ""));
                if (inAppPurchaseData != null)
                {
                    string token = inAppPurchaseData.purchaseToken;
                    Debug.Log("PayForSubs CreatePurchaseIntent token: " + token);
                    CheckSign(inAppPurchaseData.purchaseState, sign, inAppPurchaseData);
                }
            },
            fail = res =>
            {
                Debug.Log("PayForSubs CreatePurchaseIntent fail data: " + res.data + ", code: " + res.code);
                if (res.code == 60051 || res.code == -1)
                {
                    Debug.Log(
                        "You have subscribed. Please do not need to subscribe again. view the subscription details.");
                    GotoSysSubManagerPage(3, "2023***902");
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
            priceType = 2,
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

    public void CheckSign(int purchaseState, string sign, InAppPurchaseData inAppPurchaseData)
    {
        Debug.Log("CheckSign purchaseState: " + purchaseState + ", sign: " + sign + ", inAppPurchaseData: " +
                  inAppPurchaseData);
        bool subValid = inAppPurchaseData.subIsvalid;
        //对购买结果进行验签。为方便起见，将result设置为true.
        bool result = true;
        if (result)
        {
            if (subValid)
            {
                Debug.Log("The product is successfully purchased and the product service is provided.");
                GotoSysSubManagerPage(2, null);
            }
        }
        else
        {
            Debug.Log("Subscription failed.");
        }
    }

    public void GotoSysSubManagerPage(int pType, string subid)
    {
        StartIapActivityOption startIapActivityOption = new StartIapActivityOption
        {
            applicationID = "101***751",
            type = pType,
            subscribeProductId = subid,
            success = () => { Debug.Log("GotoSysSubManagerPage success!"); },
            fail = res => { Debug.Log("GotoSysSubManagerPage fail data: " + res.data + ", code: " + res.code); },
        };
        QG.StartIapActivity(startIapActivityOption);
    }
}