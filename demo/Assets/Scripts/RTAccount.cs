using UnityEngine;
using UnityEngine.SceneManagement;
using System;
using System.Runtime.InteropServices;
using System.Collections.Generic;


namespace CRWASM
{
    class RTAccount : MonoBehaviour
    {
        #region C# 调用 JS 方法

#if UNITY_WEBGL && !UNITY_EDITOR
        [DllImport("__Internal")]
        private static extern void RTGameLogin(int forceLogin, string appid, string callbackId);
#else

        private static void RTGameLogin(int forceLogin, string appid, string callbackId)
        {
            Debug.Log("RTGameLogin not support");
        }
#endif
        #endregion

        #region 实例创建

        private RTAccount()
        {
        }

        public static RTAccount Create()
        {
            RTAccount instance = new GameObject("RTAccount").AddComponent<RTAccount>();
            DontDestroyOnLoad(instance.gameObject);
            return instance;
        }

        public static void Destroy(RTAccount instance)
        {
            Destroy(instance.gameObject);
        }

        #endregion


        #region JS 回调

        private void _onLogin(string res)
        {
            RTCallback<RTLoginStatus>.OnCallback(res);
        }

        #endregion

        #region 账号
        public void gameLogin(int forceLogin, string appid, Action<RTLoginStatus> successCallback,
            Action<RTLoginStatus> failCallback,
            Action completeCallback)
        {
            string callbackId = RTCallback<RTLoginStatus>.AddCallback(successCallback, failCallback, completeCallback);
            RTGameLogin(forceLogin, appid, callbackId);
        }

        #endregion
    }


    public class RTLoginStatus : RTCallbackBase
    {
        public string playerId = null;
        public string displayName = null;
        public int playerLevel;
        public int isAuth;
        public string ts = null;
        public string gameAuthSign = null;

        // 异常
        public int code;
        public string data;
    }

}