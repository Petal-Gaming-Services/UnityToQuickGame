using UnityEngine;
using UnityEngine.SceneManagement;
using UnityEngine.UI;
using System;
using CRWASM;

public class NativeAdScene : MonoBehaviour
{
    private Text _textCreateNativeAdResult = null;
    private Text _textOnErrorResult = null;
    private Text _textOnLoadSucc = null;
    private void Awake()
    {
        RT.Init();
    }

    // Use this for initialization
    private void Start()
    {
        _textCreateNativeAdResult = GameObject.Find("textAdStatus").GetComponent<Text>();
        _textOnErrorResult = GameObject.Find("textOnErrorStatus").GetComponent<Text>();
        _textOnLoadSucc = GameObject.Find("textOnLoadSuccStatus").GetComponent<Text>();
    }

    public void onBackClick()
    {
        SceneManager.LoadScene("MainScene");
    }

    public void onCreateNativeAdClick()
    {
        RTNativeAdver nativead = RT.CreateNativeAd(
            "a5sz2rxpaj", // adUnitId
            (RTCreateNativeAdStatus res) =>
            {
                Debug.Log("on onCreateNativeAdClick: success");
                _textCreateNativeAdResult.text = "CreateNativeAd success, code: " + res.code;
            },
            (RTCreateNativeAdStatus res) =>
            {
                Debug.Log("on onCreateNativeAdClick: fail" + " data: " + res.data + "\n code: " + res.code);
                _textCreateNativeAdResult.text = "CreateNativeAd fail, code: " + res.code + " data: " + res.data;
            },
            () => { Debug.Log("on onCreateNativeAdClick: complete"); }
        );

        Start();

        nativead.OnLoad(
            (RTLoadSuccStatus res) =>
            {
                Debug.Log("OnLoad success " + res.adList[0].adId);
                if (_textOnLoadSucc != null && _textOnErrorResult != null) {
                    _textOnLoadSucc.text = "on load success" + 
                    "\n adId: " + res.adList[0].adId + 
                    "\n titile: " + res.adList[0].title +
                    "\n icon: " + res.adList[0].icon + 
                    "\n imgUrlList: " + res.adList[0].imgUrlList[0] +
                    "\n creativeType: " + res.adList[0].creativeType +
                    "\n interactionType: " + res.adList[0].interactionType +
                    "\n clickBtnTxt: " + res.adList[0].clickBtnTxt;
                    _textOnErrorResult.text = "OnError";
                }
            }
        );

        nativead.OnError(
            (RTLoadErrorStatus res) =>
            {
                Debug.Log("OnError, errCode: " + res.errCode + " errMsg: " + res.errMsg);
                if (_textOnLoadSucc != null && _textOnErrorResult != null) {
                    _textOnErrorResult.text = "load nativeAd error. errCode: " + res.errCode + "\n errMsg: " + res.errMsg;
                    _textOnLoadSucc.text = "OnLoad";
                }
            }
        );

        nativead.Load();
    }
}