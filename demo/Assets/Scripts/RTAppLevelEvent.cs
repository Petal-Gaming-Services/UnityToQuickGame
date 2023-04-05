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
    class RTAppLevelEvent : MonoBehaviour
    {
        #region C# 调用 JS 方法

#if UNITY_WEBGL && !UNITY_EDITOR

        [DllImport("__Internal")]
        private static extern void RTOnAudioInterruptionBegin();

        [DllImport("__Internal")]
        private static extern void RTOffAudioInterruptionBegin();

        [DllImport("__Internal")]
        private static extern void RTOnAudioInterruptionEnd();

        [DllImport("__Internal")]
        private static extern void RTOffAudioInterruptionEnd();

        [DllImport("__Internal")]
        private static extern void RTOnError();

        [DllImport("__Internal")]
        private static extern void RTOffError();

#else

        private static void RTOnAudioInterruptionBegin()
        {
            Debug.Log("RTOnAudioInterruptionBegin not support");
        }

        private static void RTOffAudioInterruptionBegin()
        {
            Debug.Log("RTOffAudioInterruptionBegin not support");
        }

        private static void RTOnAudioInterruptionEnd()
        {
            Debug.Log("RTOnAudioInterruptionEnd not support");
        }

        private static void RTOffAudioInterruptionEnd()
        {
            Debug.Log("RTOffAudioInterruptionEnd not support");
        }

        private static void RTOnError()
        {
            Debug.Log("RTOnError not support");
        }

        private static void RTOffError()
        {
            Debug.Log("RTOffError not support");
        }

#endif

        #endregion

        #region 实例创建

        private RTAppLevelEvent()
        {
        }

        public static RTAppLevelEvent Create()
        {
            RTAppLevelEvent instance = new GameObject(typeof(RTAppLevelEvent).Name).AddComponent<RTAppLevelEvent>();
            DontDestroyOnLoad(instance.gameObject);
            return instance;
        }

        public static void Destroy(RTAppLevelEvent instance)
        {
            Destroy(instance.gameObject);
        }

        #endregion

        #region 私有变量

        private Action _onAudioInterruptionEndAction = null;

        private Action _onAudioInterruptionBeginAction = null;

        private Action<string> _onErrorAction = null;

        #endregion

        #region JS 回调

        private void _onAudioInterruptionEndCallback()
        {
            if (_onAudioInterruptionEndAction != null)
            {
                _onAudioInterruptionEndAction.Invoke();
            }
        }

        private void _onAudioInterruptionBeginCallback()
        {
            if (_onAudioInterruptionBeginAction != null)
            {
                _onAudioInterruptionBeginAction.Invoke();
            }
        }

        private void _onErrorCallback(string res)
        {
            if (_onErrorAction != null)
            {
                _onErrorAction.Invoke(res);
            }
        }

        #endregion

        #region 应用级事件

        public void onAudioInterruptionEnd(Action action)
        {
            if (action == null)
            {
                return;
            }
            _onAudioInterruptionEndAction += action;
            if (_onAudioInterruptionEndAction.GetInvocationList().Length == 1)
            {
                RTOnAudioInterruptionEnd();
            }
        }

        public void offAudioInterruptionEnd(Action action)
        {
            if (_onAudioInterruptionEndAction == null)
            {
                return;
            }
            if (action == null)
            {
                _onAudioInterruptionEndAction = null;
                RTOffAudioInterruptionEnd();
            }
            else
            {
                _onAudioInterruptionEndAction -= action;
                if (_onAudioInterruptionEndAction == null)
                {
                    RTOffAudioInterruptionEnd();
                }
            }
        }

        public void onAudioInterruptionBegin(Action action)
        {
            if (action == null)
            {
                return;
            }
            _onAudioInterruptionBeginAction += action;
            if (_onAudioInterruptionBeginAction.GetInvocationList().Length == 1)
            {
                RTOnAudioInterruptionBegin();
            }
        }

        public void offAudioInterruptionBegin(Action action)
        {
            if (_onAudioInterruptionBeginAction == null)
            {
                return;
            }
            if (action == null)
            {
                _onAudioInterruptionBeginAction = null;
                RTOffAudioInterruptionBegin();
            }
            else
            {
                _onAudioInterruptionBeginAction -= action;
                if (_onAudioInterruptionBeginAction == null)
                {
                    RTOffAudioInterruptionBegin();
                }
            }
        }

        public void onError(Action<string> action)
        {
            if (action == null)
            {
                return;
            }
            _onErrorAction += action;
            if (_onErrorAction.GetInvocationList().Length == 1)
            {
                RTOnError();
            }
        }

        public void offError(Action<string> action)
        {
            if (_onErrorAction == null)
            {
                return;
            }
            if (action == null)
            {
                _onErrorAction = null;
                RTOffError();
            }
            else
            {
                _onErrorAction -= action;
                if (_onErrorAction == null)
                {
                    RTOffError();
                }
            }
        }

        #endregion
    }
}
