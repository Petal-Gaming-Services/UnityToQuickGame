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
using System;

namespace CRWASM
{
    public class RT
    {
        private const string _LOG_CALL_INIT = "please call init()";

        #region 初始化及结束

        private static RTAppLevelEvent _AppLevelEvent = null;
        private static RTEnvImpl _Env = null;
        private static RTFileSystemManagerImpl _FileSystemManager = null;
        private static RTKeyboard _Keyboard = null;
        private static RTLifeCycle _LifeCycle = null;
        private static RTLocalStorageImpl _LocalStorage = null;
        private static RTNetwork _Network = null;
        private static RTSystemInfoGet _SystemInfoGet = null;
        private static RTVibrate _Vibrate = null;
        private static RTAccount _Account = null;
        public static void Init()
        {
            if (_LifeCycle == null)
            {
                _LifeCycle = RTLifeCycle.Create();
            }
            if (_AppLevelEvent == null)
            {
                _AppLevelEvent = RTAppLevelEvent.Create();
            }
            if (_Env == null)
            {
                _Env = RTEnvImpl.Create();
            }
            if (_FileSystemManager == null)
            {
                _FileSystemManager = RTFileSystemManagerImpl.Create();
            }
            if (_Keyboard == null)
            {
                _Keyboard = RTKeyboard.Create();
            }
            if (_LocalStorage == null)
            {
                _LocalStorage = RTLocalStorageImpl.Create();
            }
            if (_Network == null)
            {
                _Network = RTNetwork.Create();
            }
            if (_SystemInfoGet == null)
            {
                _SystemInfoGet = RTSystemInfoGet.Create();
            }
            if (_Vibrate == null)
            {
                _Vibrate = RTVibrate.Create();
            }
            if (_Account == null)
            {
                _Account = RTAccount.Create();
            }
        }

        public static void Done()
        {
            if (_AppLevelEvent != null)
            {
                RTAppLevelEvent.Destroy(_AppLevelEvent);
                _AppLevelEvent = null;
            }
            if (_Env != null)
            {
                RTEnvImpl.Destroy(_Env);
                _Env = null;
            }
            if (_FileSystemManager != null)
            {
                RTFileSystemManagerImpl.Destroy(_FileSystemManager);
                _FileSystemManager = null;
            }
            if (_Keyboard != null)
            {
                RTKeyboard.Destroy(_Keyboard);
                _Keyboard = null;
            }
            if (_LocalStorage != null)
            {
                RTLocalStorageImpl.Destroy(_LocalStorage);
                _LocalStorage = null;
            }
            if (_Network != null)
            {
                RTNetwork.Destroy(_Network);
                _Network = null;
            }
            if (_SystemInfoGet != null)
            {
                RTSystemInfoGet.Destroy(_SystemInfoGet);
                _SystemInfoGet = null;
            }
            if (_Vibrate != null)
            {
                RTVibrate.Destroy(_Vibrate);
                _Vibrate = null;
            }
            if (_Account != null)
            {
                RTAccount.Destroy(_Account);
                _Account = null;
            }
            if (_LifeCycle != null)
            {
                RTLifeCycle.Destroy(_LifeCycle);
                _LifeCycle = null;
            }
        }

        #endregion

        #region Env

        public static RTEnv Env
        {
            get
            {
                if (_Env == null)
                {
                    Debug.Log(_LOG_CALL_INIT);
                    return null;
                }
                return _Env;
            }
        }

        #endregion

        #region 生命周期

        public static void ExitApplication(Action successCallback, Action failCallback, Action completeCallback, string data)
        {
            if (_LifeCycle == null)
            {
                Debug.Log(_LOG_CALL_INIT);
                return;
            }
            _LifeCycle.exitApplication(successCallback, failCallback, completeCallback, data);
        }

        public static string GetLaunchOptionsSync()
        {
            if (_LifeCycle == null)
            {
                Debug.Log(_LOG_CALL_INIT);
                return null;
            }
            return _LifeCycle.getLaunchOptionsSync();
        }

        public static void GetSystemInfo(Action<RTSystemInfo> successCallback,
            Action<string> failCallback,
            Action completeCallback)
        {
            if (_SystemInfoGet == null)
            {
                Debug.Log(_LOG_CALL_INIT);
                return;
            }
            _SystemInfoGet.getSystemInfo(successCallback, failCallback, completeCallback);
        }

        public static RTSystemInfo GetSystemInfoSync()
        {
            if (_SystemInfoGet == null)
            {
                Debug.Log(_LOG_CALL_INIT);
                return null;
            }
            return _SystemInfoGet.getSystemInfoSync();
        }

        public static void OnHide(Action action)
        {
            if (_LifeCycle == null)
            {
                Debug.Log(_LOG_CALL_INIT);
                return;
            }
            _LifeCycle.onHide(action);
        }

        public static void OffHide(Action action)
        {
            if (_LifeCycle == null)
            {
                Debug.Log(_LOG_CALL_INIT);
                return;
            }
            _LifeCycle.offHide(action);
        }

        public static void OnShow(Action action)
        {
            if (_LifeCycle == null)
            {
                Debug.Log(_LOG_CALL_INIT);
                return;
            }
            _LifeCycle.onShow(action);
        }

        public static void OffShow(Action action)
        {
            if (_LifeCycle == null)
            {
                Debug.Log(_LOG_CALL_INIT);
                return;
            }
            _LifeCycle.offShow(action);
        }

        #endregion

        #region 应用级事件

        public static void OnAudioInterruptionEnd(Action action)
        {
            if (_AppLevelEvent == null)
            {
                Debug.Log(_LOG_CALL_INIT);
                return;
            }
            _AppLevelEvent.onAudioInterruptionEnd(action);
        }

        public static void OffAudioInterruptionEnd(Action action)
        {
            if (_AppLevelEvent == null)
            {
                Debug.Log(_LOG_CALL_INIT);
                return;
            }
            _AppLevelEvent.offAudioInterruptionEnd(action);
        }

        public static void OnAudioInterruptionBegin(Action action)
        {
            if (_AppLevelEvent == null)
            {
                Debug.Log(_LOG_CALL_INIT);
                return;
            }
            _AppLevelEvent.onAudioInterruptionBegin(action);
        }

        public static void OffAudioInterruptionBegin(Action action)
        {
            if (_AppLevelEvent == null)
            {
                Debug.Log(_LOG_CALL_INIT);
                return;
            }
            _AppLevelEvent.offAudioInterruptionBegin(action);
        }

        public static void OnError(Action<string> action)
        {
            if (_AppLevelEvent == null)
            {
                Debug.Log(_LOG_CALL_INIT);
                return;
            }
            _AppLevelEvent.onError(action);
        }

        public static void OffError(Action<string> action)
        {
            if (_AppLevelEvent == null)
            {
                Debug.Log(_LOG_CALL_INIT);
                return;
            }
            _AppLevelEvent.offError(action);
        }

        #endregion

        #region 振动

        public static void VibrateShort(Action successCallback, Action failCallback, Action completeCallback)
        {
            if (_Vibrate == null)
            {
                Debug.Log(_LOG_CALL_INIT);
                return;
            }
            _Vibrate.vibrateShort(successCallback, failCallback, completeCallback);
        }

        public static void VibrateLong(Action successCallback, Action failCallback, Action completeCallback)
        {
            if (_Vibrate == null)
            {
                Debug.Log(_LOG_CALL_INIT);
                return;
            }
            _Vibrate.vibrateLong(successCallback, failCallback, completeCallback);
        }

        #endregion

        #region 网络

        public static void OnNetworkStatusChange(Action<RTNetworkStatus> action)
        {
            if (_Network == null)
            {
                Debug.Log(_LOG_CALL_INIT);
                return;
            }
            _Network.onNetworkStatusChange(action);
        }

        public static void OffNetworkStatusChange(Action<RTNetworkStatus> action)
        {
            if (_Network == null)
            {
                Debug.Log(_LOG_CALL_INIT);
                return;
            }
            _Network.offNetworkStatusChange(action);
        }

        public static void GetNetworkType(Action<RTNetworkType> successCallback,
            Action<RTNetworkType> failCallback,
            Action completeCallback)
        {
            if (_Network == null)
            {
                Debug.Log(_LOG_CALL_INIT);
                return;
            }
            _Network.getNetworkType(successCallback, failCallback, completeCallback);
        }

        #endregion

        #region 键盘

        public static void HideKeyboard(Action successCallback, Action failCallback, Action completeCallback)
        {
            if (_Keyboard == null)
            {
                Debug.Log(_LOG_CALL_INIT);
                return;
            }
            _Keyboard.hideKeyboard(successCallback, failCallback, completeCallback);
        }

        public static void ShowKeyboard(string defaultValue,
            int? maxLength,
            bool? multiple,
            bool? confirmHold,
            string confirmType,
            Action successCallback,
            Action failCallback,
            Action completeCallback)
        {
            if (_Keyboard == null)
            {
                Debug.Log(_LOG_CALL_INIT);
                return;
            }
            _Keyboard.showKeyboard(defaultValue,
                maxLength,
                multiple,
                confirmHold,
                confirmType,
                successCallback,
                failCallback,
                completeCallback);
        }

        public static void UpdateKeyboard(Action<RTMessage> successCallback,
            Action<RTMessage> failCallback,
            Action completeCallback,
            string value)
        {
            if (_Keyboard == null)
            {
                Debug.Log(_LOG_CALL_INIT);
                return;
            }
            _Keyboard.updateKeyboard(successCallback, failCallback, completeCallback, value);
        }

        public static void OnKeyboardInput(Action<string> action)
        {
            if (_Keyboard == null)
            {
                Debug.Log(_LOG_CALL_INIT);
                return;
            }
            _Keyboard.onKeyboardInput(action);
        }

        public static void OffKeyboardInput(Action<string> action)
        {
            if (_Keyboard == null)
            {
                Debug.Log(_LOG_CALL_INIT);
                return;
            }
            _Keyboard.offKeyboardInput(action);
        }

        public static void OnKeyboardConfirm(Action<string> action)
        {
            if (_Keyboard == null)
            {
                Debug.Log(_LOG_CALL_INIT);
                return;
            }
            _Keyboard.onKeyboardConfirm(action);
        }

        public static void OffKeyboardConfirm(Action<string> action)
        {
            if (_Keyboard == null)
            {
                Debug.Log(_LOG_CALL_INIT);
                return;
            }
            _Keyboard.offKeyboardConfirm(action);
        }

        public static void OnKeyboardComplete(Action<string> action)
        {
            if (_Keyboard == null)
            {
                Debug.Log(_LOG_CALL_INIT);
                return;
            }
            _Keyboard.onKeyboardComplete(action);
        }

        public static void OffKeyboardComplete(Action<string> action)
        {
            if (_Keyboard == null)
            {
                Debug.Log(_LOG_CALL_INIT);
                return;
            }
            _Keyboard.offKeyboardComplete(action);
        }

        #endregion

        #region 本地存储

        public static RTLocalStorage LocalStorage
        {
            get
            {
                if (_LocalStorage == null)
                {
                    Debug.Log(_LOG_CALL_INIT);
                    return null;
                }
                return _LocalStorage;
            }
        }

        #endregion

        #region 文件

        public static RTFileSystemManager GetFileSystemManager()
        {
            if (_FileSystemManager == null)
            {
                Debug.Log(_LOG_CALL_INIT);
                return null;
            }
            return _FileSystemManager;
        }

        #endregion

        #region 账号
        public static void GameLogin(int forceLogin, string appid, Action<RTLoginStatus> successCallback,
            Action<RTLoginStatus> failCallback,
            Action completeCallback)
        {
            if (_Account == null)
            {
                Debug.Log(_LOG_CALL_INIT);
                return;
            }
            _Account.gameLogin(forceLogin, appid, successCallback, failCallback, completeCallback);
        }

        #endregion


        #region 原生广告

        public static RTNativeAdver CreateNativeAd(string adUnitId, Action<RTCreateNativeAdStatus> success, Action<RTCreateNativeAdStatus> fail,
                                          Action complete)
        {
            RTNativeAdver nativead = NativeAdFactory.CreatNaviteAd(adUnitId, success, fail, complete);
            if (nativead == null) {
                Debug.Log(_LOG_CALL_INIT);
                return null;
            }
            return nativead;
        }

        #endregion
    }
}
