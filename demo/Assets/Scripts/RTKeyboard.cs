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
    class RTKeyboard : MonoBehaviour
    {
        #region C# 调用 JS 方法

#if UNITY_WEBGL && !UNITY_EDITOR

        [DllImport("__Internal")]
        private static extern void RTHideKeyboard(string callbackId);

        [DllImport("__Internal")]
        private static extern void RTShowKeyboard(string callbackId,
            string defaultValue,
            int maxLength,
            int multiple,
            int confirmHold,
            string confirmType);

        [DllImport("__Internal")]
        private static extern void RTUpdateKeyboard(string callbackId, string value);

        [DllImport("__Internal")]
        private static extern void RTOnKeyboardInput();

        [DllImport("__Internal")]
        private static extern void RTOffKeyboardInput();

        [DllImport("__Internal")]
        private static extern void RTOnKeyboardConfirm();

        [DllImport("__Internal")]
        private static extern void RTOffKeyboardConfirm();

        [DllImport("__Internal")]
        private static extern void RTOnKeyboardComplete();

        [DllImport("__Internal")]
        private static extern void RTOffKeyboardComplete();

#else

        private static void RTHideKeyboard(string callbackId)
        {
            Debug.Log("RTHideKeyboard not support");
        }

        private static void RTShowKeyboard(string callbackId,
            string defaultValue,
            int maxLength,
            int multiple,
            int confirmHold,
            string confirmType)
        {
            Debug.Log("RTShowKeyboard not support");
        }

        private static void RTUpdateKeyboard(string callbackId, string value)
        {
            Debug.Log("RTUpdateKeyboard not support");
        }

        private static void RTOnKeyboardInput()
        {
            Debug.Log("RTOnKeyboardInput not support");
        }

        private static void RTOffKeyboardInput()
        {
            Debug.Log("RTOffKeyboardInput not support");
        }

        private static void RTOnKeyboardConfirm()
        {
            Debug.Log("RTOnKeyboardConfirm not support");
        }

        private static void RTOffKeyboardConfirm()
        {
            Debug.Log("RTOffKeyboardConfirm not support");
        }

        private static void RTOnKeyboardComplete()
        {
            Debug.Log("RTOnKeyboardComplete not support");
        }

        private static void RTOffKeyboardComplete()
        {
            Debug.Log("RTOffKeyboardComplete not support");
        }

#endif

        #endregion

        #region 实例创建

        private RTKeyboard()
        {
        }

        public static RTKeyboard Create()
        {
            RTKeyboard instance = new GameObject(typeof(RTKeyboard).Name).AddComponent<RTKeyboard>();
            DontDestroyOnLoad(instance.gameObject);
            return instance;
        }

        public static void Destroy(RTKeyboard instance)
        {
            Destroy(instance.gameObject);
        }

        #endregion

        #region 私有变量

        private Action<string> _onKeyboardInputAction = null;

        private Action<string> _onKeyboardConfirmAction = null;

        private Action<string> _onKeyboardCompleteAction = null;

        #endregion

        #region JS 回调

        private void _onUpdateKeyboard(string res)
        {
            RTCallback<RTMessage>.OnCallback(res);
        }

        private void _onKeyboardInputCallback(string res)
        {
            if (_onKeyboardInputAction != null)
            {
                _onKeyboardInputAction.Invoke(res);
            }
        }

        private void _onKeyboardConfirmCallback(string res)
        {
            if (_onKeyboardConfirmAction != null)
            {
                _onKeyboardConfirmAction.Invoke(res);
            }
        }

        private void _onKeyboardCompleteCallback(string res)
        {
            if (_onKeyboardCompleteAction != null)
            {
                _onKeyboardCompleteAction.Invoke(res);
            }
        }

        #endregion

        #region 键盘

        public void hideKeyboard(Action successCallback, Action failCallback, Action completeCallback)
        {
            string callbackId = RTCallback.AddCallback(successCallback, failCallback, completeCallback);
            RTHideKeyboard(callbackId);
        }

        private static readonly string[] _CONFIRM_TYPE = { "done", "next", "search", "go", "send" };
        public void showKeyboard(string defaultValue,
            int? maxLength,
            bool? multiple,
            bool? confirmHold,
            string confirmType,
            Action successCallback,
            Action failCallback,
            Action completeCallback)
        {
            if (maxLength == null)
            {
                maxLength = 100;
            }
            if (multiple == null)
            {
                multiple = false;
            }
            if (confirmHold == null)
            {
                confirmHold = true;
            }
            if (!string.IsNullOrEmpty(confirmType))
            {
                bool success = false;
                foreach (string type in _CONFIRM_TYPE)
                {
                    if (type == confirmType)
                    {
                        success = true;
                        break;
                    }
                }
                if (!success)
                {
                    confirmType = "";
                }
            }
            string callbackId = RTCallback.AddCallback(successCallback, failCallback, completeCallback);
            RTShowKeyboard(callbackId,
                defaultValue,
                (int)maxLength,
                (multiple == true) ? 1 : 0,
                (confirmHold == true) ? 1 : 0,
                confirmType);
        }

        public void updateKeyboard(Action<RTMessage> successCallback,
            Action<RTMessage> failCallback,
            Action completeCallback,
            string value)
        {
            string callbackId = RTCallback<RTMessage>.AddCallback(successCallback, failCallback, completeCallback);
            RTUpdateKeyboard(callbackId, value);
        }

        public void onKeyboardInput(Action<string> action)
        {
            if (action == null)
            {
                return;
            }
            _onKeyboardInputAction += action;
            if (_onKeyboardInputAction.GetInvocationList().Length == 1)
            {
                RTOnKeyboardInput();
            }
        }

        public void offKeyboardInput(Action<string> action)
        {
            if (_onKeyboardInputAction == null)
            {
                return;
            }
            if (action == null)
            {
                _onKeyboardInputAction = null;
                RTOffKeyboardInput();
            }
            else
            {
                _onKeyboardInputAction -= action;
                if (_onKeyboardInputAction == null)
                {
                    RTOffKeyboardInput();
                }
            }
        }

        public void onKeyboardConfirm(Action<string> action)
        {
            if (action == null)
            {
                return;
            }
            _onKeyboardConfirmAction += action;
            if (_onKeyboardConfirmAction.GetInvocationList().Length == 1)
            {
                RTOnKeyboardConfirm();
            }
        }

        public void offKeyboardConfirm(Action<string> action)
        {
            if (_onKeyboardConfirmAction == null)
            {
                return;
            }
            if (action == null)
            {
                _onKeyboardConfirmAction = null;
                RTOffKeyboardConfirm();
            }
            else
            {
                _onKeyboardConfirmAction -= action;
                if (_onKeyboardConfirmAction == null)
                {
                    RTOffKeyboardConfirm();
                }
            }
        }

        public void onKeyboardComplete(Action<string> action)
        {
            if (action == null)
            {
                return;
            }
            _onKeyboardCompleteAction += action;
            if (_onKeyboardCompleteAction.GetInvocationList().Length == 1)
            {
                RTOnKeyboardComplete();
            }
        }

        public void offKeyboardComplete(Action<string> action)
        {
            if (_onKeyboardCompleteAction == null)
            {
                return;
            }
            if (action == null)
            {
                _onKeyboardCompleteAction = null;
                RTOffKeyboardComplete();
            }
            else
            {
                _onKeyboardCompleteAction -= action;
                if (_onKeyboardCompleteAction == null)
                {
                    RTOffKeyboardComplete();
                }
            }
        }

        #endregion
    }
}
