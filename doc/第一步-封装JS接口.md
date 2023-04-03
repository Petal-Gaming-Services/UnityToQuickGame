# 第一步：封装JS接口<a name="ZH-CN_TOPIC_0000001475697493"></a>

-   [接入帐号服务](#section41611482350)

## 接入帐号服务<a name="section41611482350"></a>

您可以根据实际需求，在Unity游戏的基础上接入快游戏的相关服务。此处以接入快游戏的帐号服务为例。若想接入更多服务请参考**Demo**。

1.  您需在jslib脚本文件中封装帐号接口，并在帐号接口中自定义success、fail、complete处理回调。示例代码如下：

    ```
    // jslib脚本文件中js示例代码
    var rt_account = {
      $RTAccountModule: {
          handleLoginCallback: function(callbackId) {
          return {
            success: function(res) {
              RTModule.onCallbackParameter(
                "RTAccount",
                callbackId,
                0,
                "_onLogin",
                res);
            },
            fail: function(data, code) {
              var args = {
                data:data,
                code:code
              };
              RTModule.onCallbackParameter(
                "RTAccount",
                callbackId,
                1,
                "_onLogin",
                args);
            },
            complete: function() {
              RTModule.onCallbackNoParameter(
                "RTAccount",
                callbackId,
                2,
                "_onLogin");
            }
          };
        }
      },
      RTGameLogin: function(forcelogin, appid, callbackId) {
        var args = RTAccountModule.handleLoginCallback(Pointer_stringify(callbackId));
        args.forcelogin = forcelogin;
        args.appid = Pointer_stringify(appid);
        RTModule.runtime.gameLogin(args);
      }
    };
    autoAddDeps(rt_account, "$RTAccountModule");
    mergeInto(LibraryManager.library, rt_account);
    ```

2.  您需在cs脚本文件中调用jslib脚本文件的帐号接口。

    ```
    // cs脚本文件中c#示例代码
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
            [DllImport("__Internal")]
            private static extern void RTGameLogin(int forceLogin, string appid, string callbackId);
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
            #region 帐号
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
            public string data = null;
        }
    }
    ```

    >![](public_sys-resources/icon-note.gif) **说明：** 
    >后续需调用已封装的接口，才能使用快游戏服务。


