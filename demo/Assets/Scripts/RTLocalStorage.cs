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
    public interface RTLocalStorage
    {
        string getItem(string key);

        void setItem(string key, string value);

        void removeItem(string key);

        void clear();

        string key(int index);

        int length { get; }
    }

    class RTLocalStorageImpl : MonoBehaviour, RTLocalStorage
    {
        #region C# 调用 JS 方法

#if UNITY_WEBGL && !UNITY_EDITOR

        [DllImport("__Internal")]
        private static extern string RTLocalStorageGetItem(string key);

        [DllImport("__Internal")]
        private static extern void RTLocalStorageSetItem(string key, string value);

        [DllImport("__Internal")]
        private static extern void RTLocalStorageRemoveItem(string key);

        [DllImport("__Internal")]
        private static extern void RTLocalStorageClear();

        [DllImport("__Internal")]
        private static extern string RTLocalStorageKey(int index);

        [DllImport("__Internal")]
        private static extern int RTLocalStorageLength();

#else

        private static string RTLocalStorageGetItem(string key)
        {
            Debug.Log("RTLocalStorageGetItem not support");
            return null;
        }

        private static void RTLocalStorageSetItem(string key, string value)
        {
            Debug.Log("RTLocalStorageSetItem not support");
        }

        private static void RTLocalStorageRemoveItem(string key)
        {
            Debug.Log("RTLocalStorageRemoveItem not support");
        }

        private static void RTLocalStorageClear()
        {
            Debug.Log("RTLocalStorageClear not support");
        }

        private static string RTLocalStorageKey(int index)
        {
            Debug.Log("RTLocalStorageKey not support");
            return null;
        }

        private static int RTLocalStorageLength()
        {
            Debug.Log("RTLocalStorageLength not support");
            return 0;
        }

#endif

        #endregion

        #region 实例创建

        private RTLocalStorageImpl()
        {
        }

        public static RTLocalStorageImpl Create()
        {
            RTLocalStorageImpl instance = new GameObject("RTLocalStorage").AddComponent<RTLocalStorageImpl>();
            DontDestroyOnLoad(instance.gameObject);
            return instance;
        }

        public static void Destroy(RTLocalStorageImpl instance)
        {
            Destroy(instance.gameObject);
        }

        #endregion

        #region 本地存储

        private class _StorageJSON
        {
            public int errCode = 0;
            public string data = null;
        }
        public string getItem(string key)
        {
            if (string.IsNullOrEmpty(key))
            {
                return null;
            }
            string res = RTLocalStorageGetItem(key);
            if (string.IsNullOrEmpty(res))
            {
                return null;
            }
            else
            {
                _StorageJSON storage = JsonUtility.FromJson<_StorageJSON>(res);
                if (storage.errCode == 0)
                {
                    return storage.data;
                }
                else
                {
                    return null;
                }
            }
        }

        public void setItem(string key, string value)
        {
            if (string.IsNullOrEmpty(key))
            {
                return;
            }
            RTLocalStorageSetItem(key, value);
        }

        public void removeItem(string key)
        {
            if (string.IsNullOrEmpty(key))
            {
                return;
            }
            RTLocalStorageRemoveItem(key);
        }

        public void clear()
        {
            RTLocalStorageClear();
        }

        public string key(int index)
        {
            string res = RTLocalStorageKey(index);
            if (string.IsNullOrEmpty(res))
            {
                return null;
            }
            else
            {
                _StorageJSON storage = JsonUtility.FromJson<_StorageJSON>(res);
                if (storage.errCode == 0)
                {
                    return storage.data;
                }
                else
                {
                    return null;
                }
            }
        }

        public int length
        {
            get
            {
                return RTLocalStorageLength();
            }
        }

        #endregion
    }
}
