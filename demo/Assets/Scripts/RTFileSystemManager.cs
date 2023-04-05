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
    public interface RTFileSystemManager
    {
        void access(string path, Action<RTFile> successCallback,
            Action<RTFile> failCallback,
            Action completeCallback);

        bool accessSync(string path, out string errMsg);

        void copyFile(string srcPath,
            string destPath,
            Action<RTFile> successCallback,
            Action<RTFile> failCallback,
            Action completeCallback);

        bool copyFileSync(string srcPath, string destPath, out string errMsg);

        void readFile(string filePath,
            Action<RTFileReadBinary> successCallback,
            Action<RTFileReadBinary> failCallback,
            Action completeCallback);

        void readFile(string filePath,
            Action<RTFileReadString> successCallback,
            Action<RTFileReadString> failCallback,
            Action completeCallback);

        bool readFileSync(string filePath, out byte[] data, out string errMsg);

        bool readFileSync(string filePath, out string data, out string errMsg);

        void unlink(string filePath,
            Action<RTFile> successCallback,
            Action<RTFile> failCallback,
            Action completeCallback);

        bool unlinkSync(string filePath, out string errMsg);

        void writeFile(string filePath,
            byte[] data,
            Action<RTFile> successCallback,
            Action<RTFile> failCallback,
            Action completeCallback);

        void writeFile(string filePath,
            string data,
            Action<RTFile> successCallback,
            Action<RTFile> failCallback,
            Action completeCallback);

        bool writeFileSync(string filePath, byte[] data, out string errMsg);

        bool writeFileSync(string filePath, string data, out string errMsg);
    }

    class RTFileSystemManagerImpl : MonoBehaviour, RTFileSystemManager
    {
        private const string _ERROR_NOT_SUPPORT = "not support";

        #region C# 调用 JS 方法

#if UNITY_WEBGL && !UNITY_EDITOR

        [DllImport("__Internal")]
        private static extern void RTCopyDataFromJS(string callbackId, byte[] data);

        [DllImport("__Internal")]
        private static extern void RTAccess(string callbackId, string path);

        [DllImport("__Internal")]
        private static extern string RTAccessSync(string path);

        [DllImport("__Internal")]
        private static extern void RTCopyFile(string callbackId, string srcPath, string destPath);

        [DllImport("__Internal")]
        private static extern string RTCopyFileSync(string srcPath, string destPath);

        [DllImport("__Internal")]
        private static extern void RTReadFileBinary(string callbackId, string filePath);

        [DllImport("__Internal")]
        private static extern void RTReadFileString(string callbackId, string filePath);

        [DllImport("__Internal")]
        private static extern string RTReadFileBinarySync(string callbackId, string filePath);

        [DllImport("__Internal")]
        private static extern string RTReadFileStringSync(string filePath);

        [DllImport("__Internal")]
        private static extern void RTUnlink(string callbackId, string filePath);

        [DllImport("__Internal")]
        private static extern string RTUnlinkSync(string filePath);

        [DllImport("__Internal")]
        private static extern void RTWriteFileBinary(string callbackId, string filePath, byte[] data, int dataLength);

        [DllImport("__Internal")]
        private static extern void RTWriteFileString(string callbackId, string filePath, string data);

        [DllImport("__Internal")]
        private static extern string RTWriteFileBinarySync(string filePath, byte[] data, int dataLength);

        [DllImport("__Internal")]
        private static extern string RTWriteFileStringSync(string filePath, string data);

#else

        private static void RTCopyDataFromJS(string callbackId, byte[] data)
        {
            Debug.Log("RTCopyDataFromJS not support");
        }

        private static void RTAccess(string callbackId, string path)
        {
            Debug.Log("RTAccess not support");
        }

        private static string RTAccessSync(string path)
        {
            Debug.Log("RTAccessSync not support");
            return _ERROR_NOT_SUPPORT;
        }

        private static void RTCopyFile(string callbackId, string srcPath, string destPath)
        {
            Debug.Log("RTCopyFile not support");
        }

        private static string RTCopyFileSync(string srcPath, string destPath)
        {
            Debug.Log("RTCopyFileSync not support");
            return _ERROR_NOT_SUPPORT;
        }

        private static void RTReadFileBinary(string callbackId, string filePath)
        {
            Debug.Log("RTReadFileBinary not support");
        }

        private static void RTReadFileString(string callbackId, string filePath)
        {
            Debug.Log("RTReadFileString not support");
        }

        private static string RTReadFileBinarySync(string callbackId, string filePath)
        {
            Debug.Log("RTReadFileBinarySync not support");
            return null;
        }

        private static string RTReadFileStringSync(string filePath)
        {
            Debug.Log("RTReadFileStringSync not support");
            return null;
        }

        private static void RTUnlink(string callbackId, string filePath)
        {
            Debug.Log("RTUnlink not support");
        }

        private static string RTUnlinkSync(string filePath)
        {
            Debug.Log("RTUnlinkSync not support");
            return _ERROR_NOT_SUPPORT;
        }

        private static void RTWriteFileBinary(string callbackId, string filePath, byte[] data, int dataLength)
        {
            Debug.Log("RTWriteFileBinary not support");
        }

        private static void RTWriteFileString(string callbackId, string filePath, string data)
        {
            Debug.Log("RTWriteFileString not support");
        }

        private static string RTWriteFileBinarySync(string filePath, byte[] data, int dataLength)
        {
            Debug.Log("RTWriteFileBinarySync not support");
            return _ERROR_NOT_SUPPORT;
        }

        private static string RTWriteFileStringSync(string filePath, string data)
        {
            Debug.Log("RTWriteFileStringSync not support");
            return _ERROR_NOT_SUPPORT;
        }

#endif

        #endregion

        #region 实例创建

        private RTFileSystemManagerImpl()
        {
        }

        public static RTFileSystemManagerImpl Create()
        {
            RTFileSystemManagerImpl instance = new GameObject("RTFileSystemManager").AddComponent<RTFileSystemManagerImpl>();
            DontDestroyOnLoad(instance.gameObject);
            return instance;
        }

        public static void Destroy(RTFileSystemManagerImpl instance)
        {
            Destroy(instance.gameObject);
        }

        #endregion

        #region 私有成员

        private class _ReadFileCallback
        {
            public Action<RTFileReadBinary> successCallback = null;
            public Action<RTFileReadBinary> failCallback = null;
            public Action completeCallback = null;
        }

        private class _ReadFileJSON : RTCallbackBase
        {
            public int errCode = 0;
            public string errMsg = null;
            public int data = 0;
        }

        private Dictionary<string, _ReadFileCallback> _readFileCallbackDict = new Dictionary<string, _ReadFileCallback>();

        private class _ReadFileSyncJSON
        {
            public int errCode = 0;
            public string errMsg = null;
        }

        private class _ReadFileStringSyncJSON : _ReadFileSyncJSON
        {
            public string data = null;
        }

        private class _ReadFileBinarySyncJSON : _ReadFileSyncJSON
        {
            public int data = 0;
        }

        #endregion

        #region JS 回调

        private void _onFile(string res)
        {
            RTCallback<RTFile>.OnCallback(res);
        }

        private void _onFileReadBinary(string res)
        {
            _ReadFileJSON json = JsonUtility.FromJson<_ReadFileJSON>(res);
            string callbackId = json._callbackId;
            _ReadFileCallback callback = _readFileCallbackDict[callbackId];
            switch (json._callbackType)
            {
                case RTCallbackType.SUCCESS:
                    if (callback.successCallback != null)
                    {
                        byte[] buffer = new byte[json.data];
                        if (json.data > 0)
                        {
                            RTCopyDataFromJS(callbackId, buffer);
                        }
                        RTFileReadBinary obj = new RTFileReadBinary()
                        {
                            _callbackId = callbackId,
                            _callbackType = json._callbackType,
                            errCode = json.errCode,
                            errMsg = json.errMsg,
                            data = buffer
                        };
                        callback.successCallback.Invoke(obj);
                        callback.successCallback = null;
                    }
                    break;
                case RTCallbackType.FAIL:
                    if (callback.failCallback != null)
                    {
                        RTFileReadBinary obj = new RTFileReadBinary()
                        {
                            _callbackId = callbackId,
                            _callbackType = json._callbackType,
                            errCode = json.errCode,
                            errMsg = json.errMsg,
                            data = null
                        };
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
                    _readFileCallbackDict.Remove(callbackId);
                    break;
            }
        }

        private void _onFileReadString(string res)
        {
            RTCallback<RTFileReadString>.OnCallback(res);
        }

        #endregion

        #region 文件系统

        public void access(string path, Action<RTFile> successCallback,
            Action<RTFile> failCallback,
            Action completeCallback)
        {
            if (string.IsNullOrEmpty(path))
            {
                return;
            }
            string callbackId = RTCallback<RTFile>.AddCallback(successCallback, failCallback, completeCallback);
            RTAccess(callbackId, path);
        }

        public bool accessSync(string path, out string errMsg)
        {
            if (string.IsNullOrEmpty(path))
            {
                errMsg = "path is null or empty";
                return false;
            }
            errMsg = RTAccessSync(path);
            return string.IsNullOrEmpty(errMsg);
        }

        public void copyFile(string srcPath,
            string destPath,
            Action<RTFile> successCallback,
            Action<RTFile> failCallback,
            Action completeCallback)
        {
            if (string.IsNullOrEmpty(srcPath) || string.IsNullOrEmpty(destPath))
            {
                return;
            }
            string callbackId = RTCallback<RTFile>.AddCallback(successCallback, failCallback, completeCallback);
            RTCopyFile(callbackId, srcPath, destPath);
        }

        public bool copyFileSync(string srcPath, string destPath, out string errMsg)
        {
            if (string.IsNullOrEmpty(srcPath))
            {
                errMsg = "srcPath is null or empty";
                return false;
            }
            if (string.IsNullOrEmpty(destPath))
            {
                errMsg = "destPath is null or empty";
                return false;
            }
            errMsg = RTCopyFileSync(srcPath, destPath);
            return string.IsNullOrEmpty(errMsg);
        }

        public void readFile(string filePath,
            Action<RTFileReadBinary> successCallback,
            Action<RTFileReadBinary> failCallback,
            Action completeCallback)
        {
            if (string.IsNullOrEmpty(filePath))
            {
                return;
            }
            _ReadFileCallback callback = new _ReadFileCallback();
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
            _readFileCallbackDict.Add(callbackId, callback);
            RTReadFileBinary(callbackId, filePath);
        }

        public void readFile(string filePath,
            Action<RTFileReadString> successCallback,
            Action<RTFileReadString> failCallback,
            Action completeCallback)
        {
            if (string.IsNullOrEmpty(filePath))
            {
                return;
            }
            string callbackId = RTCallback<RTFileReadString>.AddCallback(successCallback, failCallback, completeCallback);
            RTReadFileString(callbackId, filePath);
        }

        public bool readFileSync(string filePath, out byte[] data, out string errMsg)
        {
            if (string.IsNullOrEmpty(filePath))
            {
                data = null;
                errMsg = "filePath is null or empty";
                return false;
            }
            string callbackId = Guid.NewGuid().ToString();
            string res = RTReadFileBinarySync(callbackId, filePath);
            if (res == null)
            {
                data = null;
                errMsg = "unknown error";
                return false;
            }
            _ReadFileBinarySyncJSON readFileJSON = JsonUtility.FromJson<_ReadFileBinarySyncJSON>(res);
            if (readFileJSON.errCode == 0)
            {
                data = new byte[readFileJSON.data];
                if (readFileJSON.data > 0)
                {
                    RTCopyDataFromJS(callbackId, data);
                }
                errMsg = null;
                return true;
            }
            else
            {
                data = null;
                errMsg = readFileJSON.errMsg;
                return false;
            }
        }

        public bool readFileSync(string filePath, out string data, out string errMsg)
        {
            if (string.IsNullOrEmpty(filePath))
            {
                data = null;
                errMsg = "filePath is null or empty";
                return false;
            }
            string res = RTReadFileStringSync(filePath);
            if (res == null)
            {
                data = null;
                errMsg = "unknown error";
                return false;
            }
            _ReadFileStringSyncJSON readFileJSON = JsonUtility.FromJson<_ReadFileStringSyncJSON>(res);
            if (readFileJSON.errCode == 0)
            {
                data = readFileJSON.data;
                errMsg = null;
                return true;
            }
            else
            {
                data = null;
                errMsg = readFileJSON.errMsg;
                return false;
            }
        }

        public void unlink(string filePath,
            Action<RTFile> successCallback,
            Action<RTFile> failCallback,
            Action completeCallback)
        {
            if (string.IsNullOrEmpty(filePath))
            {
                return;
            }
            string callbackId = RTCallback<RTFile>.AddCallback(successCallback, failCallback, completeCallback);
            RTUnlink(callbackId, filePath);
        }

        public bool unlinkSync(string filePath, out string errMsg)
        {
            if (string.IsNullOrEmpty(filePath))
            {
                errMsg = "filePath is null or empty";
                return false;
            }
            errMsg = RTUnlinkSync(filePath);
            return string.IsNullOrEmpty(errMsg);
        }

        public void writeFile(string filePath,
            byte[] data,
            Action<RTFile> successCallback,
            Action<RTFile> failCallback,
            Action completeCallback)
        {
            if (string.IsNullOrEmpty(filePath))
            {
                return;
            }
            if (data == null || data.Length <= 0)
            {
                return;
            }
            string callbackId = RTCallback<RTFile>.AddCallback(successCallback, failCallback, completeCallback);
            RTWriteFileBinary(callbackId, filePath, data, data.Length);
        }

        public void writeFile(string filePath,
            string data,
            Action<RTFile> successCallback,
            Action<RTFile> failCallback,
            Action completeCallback)
        {
            if (string.IsNullOrEmpty(filePath) || string.IsNullOrEmpty(data))
            {
                return;
            }
            string callbackId = RTCallback<RTFile>.AddCallback(successCallback, failCallback, completeCallback);
            RTWriteFileString(callbackId, filePath, data);
        }

        public bool writeFileSync(string filePath, byte[] data, out string errMsg)
        {
            if (string.IsNullOrEmpty(filePath))
            {
                errMsg = "filePath is null or empty";
                return false;
            }
            if (data == null || data.Length <= 0)
            {
                errMsg = "data is null or empty";
                return false;
            }
            errMsg = RTWriteFileBinarySync(filePath, data, data.Length);
            return string.IsNullOrEmpty(errMsg);
        }

        public bool writeFileSync(string filePath, string data, out string errMsg)
        {
            if (string.IsNullOrEmpty(filePath))
            {
                errMsg = "filePath is null or empty";
                return false;
            }
            if (string.IsNullOrEmpty(data))
            {
                errMsg = "data is null or empty";
                return false;
            }
            errMsg = RTWriteFileStringSync(filePath, data);
            return string.IsNullOrEmpty(errMsg);
        }

        #endregion
    }

    public class RTFile : RTCallbackBase
    {
        public int errCode = 0;
        public string errMsg = null;
    }

    public class RTFileReadString : RTFile
    {
        public string data = null;
    }

    public class RTFileReadBinary : RTFile
    {
        public byte[] data = null;
    }
}
