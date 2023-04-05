/*******************************************************************************
Xiamen Yaji Software Co., Ltd., (the “Licensor”) grants the user (the “Licensee”
) non-exclusive and non-transferable rights to use the software according to
the following conditions:
a.  The Licensee shall pay royalties to the Licensor, and the amount of those
    royalties and the payment method are subject to separate negotiations
    between the parties.
b.  The software is licensed for use rather than sold, and the Licensor reserves
    all rights over the software that are not expressly granted (whether by
    implication, reservation or prohibition).
c.  The open source codes contained in the software are subject to the MIT Open
    Source Licensing Agreement (see the attached for the details);
d.  The Licensee acknowledges and consents to the possibility that errors may
    occur during the operation of the software for one or more technical
    reasons, and the Licensee shall take precautions and prepare remedies for
    such events. In such circumstance, the Licensor shall provide software
    patches or updates according to the agreement between the two parties. the
    Licensor will not assume any liability beyond the explicit wording of this
    Licensing Agreement.
e.  Where the Licensor must assume liability for the software according to
    relevant laws, the Licensor’s entire liability is limited to the annual
    royalty payable by the Licensee.
f.  The Licensor owns the portions listed in the root directory and subdirectory
    (if any) in the software and enjoys the intellectual property rights over
    those portions. As for the portions owned by the Licensor, the Licensee
    shall not:
    i.  Bypass or avoid any relevant technical protection measures in the
        products or services;
    ii. Release the source codes to any other parties;
    iii.Disassemble, decompile, decipher, attack, emulate, exploit or
        reverse-engineer these portion of code;
    iv. Apply it to any third-party products or services without Licensor’s
        permission;
    v.  Publish, copy, rent, lease, sell, export, import, distribute or lend any
        products containing these portions of code;
    vi. Allow others to use any services relevant to the technology of these
        codes; and
    vii.Conduct any other act beyond the scope of this Licensing Agreement.
g.  This Licensing Agreement terminates immediately if the Licensee breaches
    this Agreement. The Licensor may claim compensation from the Licensee where
    the Licensee’s breach causes any damage to the Licensor.
h.  The laws of the People's Republic of China apply to this Licensing Agreement.
i.  This Agreement is made in both Chinese and English, and the Chinese version
    shall prevail the event of conflict.

*******************************************************************************/
using UnityEngine;
using UnityEngine.SceneManagement;
using System;
using System.Runtime.InteropServices;
using System.Collections.Generic;

namespace CRWASM
{
    class RTSystemInfoGet : MonoBehaviour
    {
        #region C# 调用 JS 方法

#if UNITY_WEBGL && !UNITY_EDITOR

        [DllImport("__Internal")]
        private static extern void RTGetSystemInfo(string callbackId);

        [DllImport("__Internal")]
        private static extern string RTGetSystemInfoSync();

#else

        private static void RTGetSystemInfo(string callbackId)
        {
            Debug.Log("RTGetSystemInfo not support");
        }

        private static string RTGetSystemInfoSync()
        {
            Debug.Log("RTGetSystemInfoSync not support");
            return null;
        }

#endif

        #endregion

        #region 实例创建

        private RTSystemInfoGet()
        {
        }

        public static RTSystemInfoGet Create()
        {
            RTSystemInfoGet instance = new GameObject(typeof(RTSystemInfoGet).Name).AddComponent<RTSystemInfoGet>();
            DontDestroyOnLoad(instance.gameObject);
            return instance;
        }

        public static void Destroy(RTSystemInfoGet instance)
        {
            Destroy(instance.gameObject);
        }

        #endregion

        #region 私有成员

        private class _GetSystemInfoCallback
        {
            public Action<RTSystemInfo> successCallback = null;
            public Action<string> failCallback = null;
            public Action completeCallback = null;
        }

        private Dictionary<string, _GetSystemInfoCallback> _getSystemInfoCallbackDict = new Dictionary<string, _GetSystemInfoCallback>();

        #endregion

        #region JS 回调

        private void _onGetSystemInfo(string res)
        {
            RTCallbackBase obj = JsonUtility.FromJson<RTCallbackBase>(res);
            _GetSystemInfoCallback callback = _getSystemInfoCallbackDict[obj._callbackId];
            switch (obj._callbackType)
            {
                case RTCallbackType.SUCCESS:
                    if (callback.successCallback != null)
                    {
                        RTSystemInfo systemInfo = JsonUtility.FromJson<RTSystemInfo>(res);
                        callback.successCallback.Invoke(systemInfo);
                        callback.successCallback = null;
                    }
                    break;
                case RTCallbackType.FAIL:
                    if (callback.failCallback != null)
                    {
                        RTMessage message = JsonUtility.FromJson<RTMessage>(res);
                        callback.failCallback.Invoke(message.message);
                        callback.failCallback = null;
                    }
                    break;
                case RTCallbackType.COMPLETE:
                    if (callback.completeCallback != null)
                    {
                        callback.completeCallback.Invoke();
                        callback.completeCallback = null;
                    }
                    _getSystemInfoCallbackDict.Remove(obj._callbackId);
                    break;
            }
        }

        #endregion

        #region 系统信息

        public void getSystemInfo(Action<RTSystemInfo> successCallback,
            Action<string> failCallback,
            Action completeCallback)
        {
            _GetSystemInfoCallback callback = new _GetSystemInfoCallback();
            if (successCallback != null)
            {
                callback.successCallback += successCallback;
            }
            if (failCallback != null)
            {
                callback.failCallback += failCallback;
            }
            if (completeCallback != null)
            {
                callback.completeCallback += completeCallback;
            }
            string callbackId = Guid.NewGuid().ToString();
            _getSystemInfoCallbackDict.Add(callbackId, callback);
            RTGetSystemInfo(callbackId);
        }

        public RTSystemInfo getSystemInfoSync()
        {
            string res = RTGetSystemInfoSync();
            if (string.IsNullOrEmpty(res))
            {
                return null;
            }
            else
            {
                RTSystemInfo systemInfo = JsonUtility.FromJson<RTSystemInfo>(res);
                return systemInfo;
            }
        }

        #endregion
    }

    public class RTSystemInfo : RTCallbackBase
    {
        public string brand = null;
        public string model = null;
        public int pixelRatio = 0;
        public int screenWidth = 0;
        public int screenHeight = 0;
        public int windowWidth = 0;
        public int windowHeight = 0;
        public string language = null;
        public string COREVersion = null;
        public string system = null;
        public string platform = null;
    }
}
