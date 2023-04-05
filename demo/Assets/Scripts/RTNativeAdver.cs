using UnityEngine;
using UnityEngine.SceneManagement;
using System;
using System.Runtime.InteropServices;
using System.Collections.Generic;
using System.Linq;

namespace CRWASM
{
    public class RTNativeAdver : MonoBehaviour
    {
        #region C# 调用 JS 方法

#if UNITY_WEBGL && !UNITY_EDITOR
        [DllImport("__Internal")]
        private static extern void RTCreateNativeAd(string objname, string adUnitId, string callbackId);

        [DllImport("__Internal")]
        private static extern void RTLoad();

        [DllImport("__Internal")]
        private static extern void RTOnLoadError();

        [DllImport("__Internal")]
        private static extern void RTOnLoad();
#else

        private static void RTCreateNativeAd(string objname, string adUnitId, string callbackId)
        {
            Debug.Log("RTCreateNativeAd not support");
        }

        private static void RTLoad()
        {
            Debug.Log("RTLoad not support");
        }

        private static void RTOnLoadError()
        {
            Debug.Log("RTOnLoadError not support");
        }

        private static void RTOnLoad()
        {
            Debug.Log("RTOnLoad not support");
        }
#endif
        #endregion

        #region 实例创建

        private RTNativeAdver()
        {
        }

        public static RTNativeAdver Create(string objname)
        {
            RTNativeAdver instance = new GameObject(objname).AddComponent<RTNativeAdver>();
            DontDestroyOnLoad(instance.gameObject);
            return instance;
        }

        public void Destroy(RTNativeAdver instance)
        {
            Destroy(instance.gameObject);
        }

        #endregion


        private Action<RTLoadErrorStatus> _onLoadError = null;

        private Action<RTLoadSuccStatus> _onLoadSucc = null;

        #region JS 回调

        private void _onCreateNativeAd(string res)
        {
            RTCallback<RTCreateNativeAdStatus>.OnCallback(res);
        }

        private void _onLoadErrorCallback(string res)
        {
            if (_onLoadError != null)
            {
                RTLoadErrorStatus loadErrorStatus = JsonUtility.FromJson<RTLoadErrorStatus>(res);
                _onLoadError.Invoke(loadErrorStatus);
            }
        }

        private void _onLoadSuccCallback(string res)
        {
            if (_onLoadSucc != null)
            {
                RTLoadSuccStatus successStatus = JsonUtility.FromJson<RTLoadSuccStatus>(res);
                _onLoadSucc.Invoke(successStatus);
            }
        }
        #endregion


        #region 原生广告

        public void InitNativeAd(string objname, string adUnitId, Action<RTCreateNativeAdStatus> success, Action<RTCreateNativeAdStatus> fail,
                                 Action complete)
        {
            string callbackId = RTCallback<RTCreateNativeAdStatus>.AddCallback(success, fail, complete);
            RTCreateNativeAd(objname, adUnitId, callbackId);
        }

        public void Load()
        {
            RTLoad();
        }

        public void OnError(Action<RTLoadErrorStatus> action)
        {
            if (action == null)
            {
                return;
            }
            _onLoadError += action;
            Debug.Log("chenkang _onLoadError.GetInvocationList().Length " + _onLoadError.GetInvocationList().Length);
            if (_onLoadError.GetInvocationList().Length == 1)
            {
                RTOnLoadError();
            }
        }

        public void OnLoad(Action<RTLoadSuccStatus> action)
        {
            if (action == null)
            {
                return;
            }
            _onLoadSucc += action;
            Debug.Log("chenkang _onLoadSucc.GetInvocationList().Length " + _onLoadSucc.GetInvocationList().Length);
            if (_onLoadSucc.GetInvocationList().Length == 1)
            {
                RTOnLoad();
            }
        }

        #endregion

    }

    public class NativeAdFactory
    {
        static int i = 0;

        public static RTNativeAdver CreatNaviteAd(string adUnitId, Action<RTCreateNativeAdStatus> success, Action<RTCreateNativeAdStatus> fail, Action complete)
        {
            string obj = "RTNativeAdver" + (i++);

            RTNativeAdver instance = RTNativeAdver.Create(obj);
            instance.InitNativeAd(obj, adUnitId, success, fail, complete);
            return instance;
        }
    }


    public class RTCreateNativeAdStatus : RTCallbackBase
    {
        public int code;
        public string data;
    }

    public class RTLoadErrorStatus : RTCallbackBase
    {
        public int errCode;
        public string errMsg;
    }

    public class RTLoadSuccStatus : RTCallbackBase
    {
        public List<RTAdItem> adList;
    }

    [System.Serializable]
    public class RTAdItem
    {
        public string adId;
        public string title;
        public string desc;
        public string source;
        public string icon;
        public List<string> imgUrlList;
        public List<string> videoUrlList;
        public List<string> videoRatio;
        public string logoUrl;
        public string clickBtnTxt;
        public int creativeType;
        public int interactionType;
    }
}
