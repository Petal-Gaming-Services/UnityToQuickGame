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

namespace CRWASM
{
    class RTNetwork : MonoBehaviour
    {
        #region C# 调用 JS 方法

#if UNITY_WEBGL && !UNITY_EDITOR

        [DllImport("__Internal")]
        private static extern void RTGetNetworkType(string callbackId);

        [DllImport("__Internal")]
        private static extern void RTOnNetworkStatusChange();

        [DllImport("__Internal")]
        private static extern void RTOffNetworkStatusChange();

#else

        private static void RTGetNetworkType(string callbackId)
        {
            Debug.Log("RTGetNetworkType not support");
        }

        private static void RTOnNetworkStatusChange()
        {
            Debug.Log("RTOnNetworkStatusChange not support");
        }

        private static void RTOffNetworkStatusChange()
        {
            Debug.Log("RTOffNetworkStatusChange not support");
        }

#endif

        #endregion

        #region 实例创建

        private RTNetwork()
        {
        }

        public static RTNetwork Create()
        {
            RTNetwork instance = new GameObject(typeof(RTNetwork).Name).AddComponent<RTNetwork>();
            DontDestroyOnLoad(instance.gameObject);
            return instance;
        }

        public static void Destroy(RTNetwork instance)
        {
            Destroy(instance.gameObject);
        }

        #endregion

        #region 私有变量

        private Action<RTNetworkStatus> _onNetworkStatusChangeAction = null;

        #endregion

        #region JS 回调

        private void _onNetworkStatusChangeCallback(string res)
        {
            if (_onNetworkStatusChangeAction != null)
            {
                RTNetworkStatus networkStatus = JsonUtility.FromJson<RTNetworkStatus>(res);
                _onNetworkStatusChangeAction.Invoke(networkStatus);
            }
        }

        private void _onGetNetworkType(string res)
        {
            RTCallback<RTNetworkType>.OnCallback(res);
        }

        #endregion

        #region 网络

        public void onNetworkStatusChange(Action<RTNetworkStatus> action)
        {
            if (action == null)
            {
                return;
            }
            _onNetworkStatusChangeAction += action;
            if (_onNetworkStatusChangeAction.GetInvocationList().Length == 1)
            {
                RTOnNetworkStatusChange();
            }
        }

        public void offNetworkStatusChange(Action<RTNetworkStatus> action)
        {
            if (_onNetworkStatusChangeAction == null)
            {
                return;
            }
            if (action == null)
            {
                _onNetworkStatusChangeAction = null;
                RTOffNetworkStatusChange();
            }
            else
            {
                _onNetworkStatusChangeAction -= action;
                if (_onNetworkStatusChangeAction == null)
                {
                    RTOffNetworkStatusChange();
                }
            }
        }

        public void getNetworkType(Action<RTNetworkType> successCallback,
            Action<RTNetworkType> failCallback,
            Action completeCallback)
        {
            string callbackId = RTCallback<RTNetworkType>.AddCallback(successCallback, failCallback, completeCallback);
            RTGetNetworkType(callbackId);
        }

        #endregion
    }

    public class RTNetworkStatus : RTCallbackBase
    {
        public bool isConnected = false;
        public string networkType = null;
    }

    public class RTNetworkType : RTCallbackBase
    {
        public string networkType = null;
        public string errMsg = null;
    }
}
