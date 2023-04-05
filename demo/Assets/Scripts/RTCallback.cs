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
using System.Collections.Generic;

namespace CRWASM
{
    public class RTCallbackBase
    {
        public string _callbackId = null;
        public RTCallbackType _callbackType = RTCallbackType.SUCCESS;
    }

    public class RTMessage : RTCallbackBase
    {
        public string message = null;
    }

    public enum RTCallbackType
    {
        SUCCESS = 0,
        FAIL = 1,
        COMPLETE = 2
    }

    class RTCallback
    {
        public Action successCallback = null;
        public Action failCallback = null;
        public Action completeCallback = null;

        private static Dictionary<string, RTCallback> _callbackDict = new Dictionary<string, RTCallback>();
        public static string AddCallback(Action successCallback, Action failCallback, Action completeCallback)
        {
            RTCallback callback = new RTCallback();
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
            _callbackDict.Add(callbackId, callback);
            return callbackId;
        }

        public static void OnCallback(string res)
        {
            RTCallbackBase obj = JsonUtility.FromJson<RTCallbackBase>(res);
            RTCallback callback = _callbackDict[obj._callbackId];
            switch (obj._callbackType)
            {
                case RTCallbackType.SUCCESS:
                    if (callback.successCallback != null)
                    {
                        callback.successCallback.Invoke();
                        callback.successCallback = null;
                    }
                    break;
                case RTCallbackType.FAIL:
                    if (callback.failCallback != null)
                    {
                        callback.failCallback.Invoke();
                        callback.failCallback = null;
                    }
                    break;
                case RTCallbackType.COMPLETE:
                    if (callback.completeCallback != null)
                    {
                        callback.completeCallback.Invoke();
                        callback.completeCallback = null;
                    }
                    _callbackDict.Remove(obj._callbackId);
                    break;
            }
        }
    }

    class RTCallback<T> where T : RTCallbackBase    
    {
        public Action<T> successCallback = null;
        public Action<T> failCallback = null;
        public Action completeCallback = null;

        private static Dictionary<string, RTCallback<T>> _callbackDict = new Dictionary<string, RTCallback<T>>();
        public static string AddCallback(Action<T> successCallback, Action<T> failCallback, Action completeCallback)
        {
            RTCallback<T> callback = new RTCallback<T>();
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
            _callbackDict.Add(callbackId, callback);
            return callbackId;
        }

        public static void OnCallback(string res)
        {
            T obj = JsonUtility.FromJson<T>(res);
            RTCallback<T> callback = _callbackDict[obj._callbackId];
            switch (obj._callbackType)
            {
                case RTCallbackType.SUCCESS:
                    if (callback.successCallback != null)
                    {
                        callback.successCallback.Invoke(obj);
                        callback.successCallback = null;
                    }
                    break;
                case RTCallbackType.FAIL:
                    if (callback.failCallback != null)
                    {
                        callback.failCallback.Invoke(obj);
                        callback.failCallback = null;
                    }
                    break;
                case RTCallbackType.COMPLETE:
                    if (callback.completeCallback != null)
                    {
                        callback.completeCallback.Invoke();
                        callback.completeCallback = null;
                    }
                    _callbackDict.Remove(obj._callbackId);
                    break;
            }
        }
    }
}
