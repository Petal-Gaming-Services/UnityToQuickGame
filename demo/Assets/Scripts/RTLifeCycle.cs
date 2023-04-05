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
    class RTLifeCycle : MonoBehaviour
    {
        #region C# 调用 JS 方法

#if UNITY_WEBGL && !UNITY_EDITOR

        [DllImport("__Internal")]
        private static extern void RTInit();

        [DllImport("__Internal")]
        private static extern void RTExitApplication(string callbackId, string data);

        [DllImport("__Internal")]
        private static extern string RTGetLaunchOptionsSync();

        [DllImport("__Internal")]
        private static extern void RTOnHide();

        [DllImport("__Internal")]
        private static extern void RTOffHide();

        [DllImport("__Internal")]
        private static extern void RTOnShow();

        [DllImport("__Internal")]
        private static extern void RTOffShow();

#else

        private static void RTInit()
        {
            Debug.Log("RTInit not support");
        }

        private static void RTExitApplication(string callbackId, string data)
        {
            Debug.Log("RTExitApplication not support");
        }

        private static string RTGetLaunchOptionsSync()
        {
            Debug.Log("RTGetLaunchOptionsSync not support");
            return null;
        }

        private static void RTOnHide()
        {
            Debug.Log("RTOnHide not support");
        }

        private static void RTOffHide()
        {
            Debug.Log("RTOffHide not support");
        }

        private static void RTOnShow()
        {
            Debug.Log("RTOnShow not support");
        }

        private static void RTOffShow()
        {
            Debug.Log("RTOffShow not support");
        }

#endif

        #endregion

        #region 实例创建

        private RTLifeCycle()
        {
        }

        public static RTLifeCycle Create()
        {
            RTLifeCycle instance = new GameObject(typeof(RTLifeCycle).Name).AddComponent<RTLifeCycle>();
            DontDestroyOnLoad(instance.gameObject);
            RTInit();
            return instance;
        }

        public static void Destroy(RTLifeCycle instance)
        {
            Destroy(instance.gameObject);
        }

        #endregion

        #region 私有变量

        private bool _isExiting = false;

        private Action _onHideAction = null;

        private Action _onShowAction = null;

        #endregion

        #region JS 回调

        private void _onCallbackNoParameter(string res)
        {
            RTCallback.OnCallback(res);
        }

        private void _onExitApplicaiton(string res)
        {
            RTCallbackBase obj = JsonUtility.FromJson<RTCallbackBase>(res);
            if (obj._callbackType == RTCallbackType.COMPLETE)
            {
                _isExiting = false;
            }
            RTCallback.OnCallback(res);
        }

        private void _onHideCallback()
        {
            if (_onHideAction != null)
            {
                _onHideAction.Invoke();
            }
        }

        private void _onShowCallback()
        {
            if (_onShowAction != null)
            {
                _onShowAction.Invoke();
            }
        }

        #endregion

        #region 生命周期

        public void exitApplication(Action successCallback,
            Action failCallback,
            Action completeCallback,
            string data)
        {
            if (_isExiting)
            {
                return;
            }
            _isExiting = true;
            string callbackId = RTCallback.AddCallback(successCallback, failCallback, completeCallback);
            RTExitApplication(callbackId, data);
        }

        public string getLaunchOptionsSync()
        {
            string res = RTGetLaunchOptionsSync();
            if (string.IsNullOrEmpty(res))
            {
                return null;
            }
            else
            {
                return res;
            }
        }

        public void onHide(Action action)
        {
            if (action == null)
            {
                return;
            }
            _onHideAction += action;
            if (_onHideAction.GetInvocationList().Length == 1)
            {
                RTOnHide();
            }
        }

        public void offHide(Action action)
        {
            if (_onHideAction == null)
            {
                return;
            }
            if (action == null)
            {
                _onHideAction = null;
                RTOffHide();
            }
            else
            {
                _onHideAction -= action;
                if (_onHideAction == null)
                {
                    RTOffHide();
                }
            }
        }

        public void onShow(Action action)
        {
            if (action == null)
            {
                return;
            }
            _onShowAction += action;
            if (_onShowAction.GetInvocationList().Length == 1)
            {
                RTOnShow();
            }
        }

        public void offShow(Action action)
        {
            if (_onShowAction == null)
            {
                return;
            }
            if (action == null)
            {
                _onShowAction = null;
                RTOffShow();
            }
            else
            {
                _onShowAction -= action;
                if (_onShowAction == null)
                {
                    RTOffShow();
                }
            }
        }

        #endregion
    }
}
