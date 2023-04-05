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
using UnityEngine.UI;
using System;
using System.Text;
using CRWASM;

public class FileSystemScene : MonoBehaviour
{
    private Text _txtMessage = null;
    private RTFileSystemManager _fileSystemManager = null;
    private string _filePath = null;

    private void Awake()
    {
        RT.Init();
    }

    // Use this for initialization
    private void Start()
    {
        _txtMessage = GameObject.Find("txtMessage").GetComponent<Text>();
        _fileSystemManager = RT.GetFileSystemManager();
        _filePath = string.Format("{0}/file.txt", RT.Env.USER_DATA_PATH);
    }

    private string _byteArrayToString(byte[] array)
    {
        StringBuilder result = new StringBuilder();
        result.Append('[');
        foreach (byte element in array)
        {
            if (result.Length > 1)
            {
                result.Append(',');
            }
            result.Append((char)element);
        }
        result.Append(']');
        return result.ToString();
    }

    private void _writeBigFile(int sizeOnM)
    {
        string filePath = string.Format("{0}/file{1}m.txt", RT.Env.USER_DATA_PATH, sizeOnM);
        _fileSystemManager.writeFile(
            filePath,
            new byte[1024 * 1024 * sizeOnM],
            (RTFile res) =>
            {
                Debug.Log("on writeFile: success");
                _txtMessage.text = "写入成功:" + DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss");
            },
            (RTFile res) =>
            {
                Debug.Log("on writeFile: fail");
                _txtMessage.text = res.errMsg;
            },
            () => { Debug.Log("on writeFile: complete"); }
        );
    }

    public void onBackClick()
    {
        SceneManager.LoadScene("MainScene");
    }

    public void onWriteSyncClick()
    {
        string errorMsg;
        if (_fileSystemManager.writeFileSync(_filePath, "Hello world", out errorMsg))
        {
            _txtMessage.text = "写文件成功:" + DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss");
        }
        else
        {
            _txtMessage.text = errorMsg;
        }
    }

    public void onWriteAsyncClick()
    {
        _fileSystemManager.writeFile(
            _filePath,
            "Hello world",
            (RTFile res) =>
            {
                Debug.Log("on writeFile: success");
                _txtMessage.text = "写文件成功:" + DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss");
            },
            (RTFile res) =>
            {
                Debug.Log("on writeFile: fail");
                _txtMessage.text = res.errMsg;
            },
            () => { Debug.Log("on writeFile: complete"); }
        );
    }

    public void onReadSyncStringClick()
    {
        string result, errorMsg;
        if (_fileSystemManager.readFileSync(_filePath, out result, out errorMsg))
        {
            _txtMessage.text = "内容为:" + result;
        }
        else
        {
            _txtMessage.text = "读取文件错误:" + errorMsg;
        }
    }

    public void onReadAsyncStringClick()
    {
        _fileSystemManager.readFile(
            _filePath,
            (RTFileReadString res) =>
            {
                Debug.Log("on readFile: success");
                _txtMessage.text = "内容为:" + res.data;
            },
            (RTFileReadString res) =>
            {
                Debug.Log("on readFile: fail");
                _txtMessage.text = "读取文件错误:" + res.errMsg;
            },
            () => { Debug.Log("on readFile: complete"); }
        );
    }

    public void onReadSyncBinaryClick()
    {
        string errorMsg;
        byte[] result;
        if (_fileSystemManager.readFileSync(_filePath, out result, out errorMsg))
        {
            _txtMessage.text = "内容为:" + _byteArrayToString(result);
        }
        else
        {
            _txtMessage.text = "读取文件错误:" + errorMsg;
        }
    }

    public void onReadAsyncBinaryClick()
    {
        _fileSystemManager.readFile(
            _filePath,
            (RTFileReadBinary res) =>
            {
                Debug.Log("on readFile: success");
                _txtMessage.text = "内容为:" + _byteArrayToString(res.data);
            },
            (RTFileReadBinary res) =>
            {
                Debug.Log("on readFile: fail");
                _txtMessage.text = "读取文件错误:" + res.errMsg;
            },
            () => { Debug.Log("on readFile: complete"); }
        );
    }

    public void onAccessSyncClick()
    {
        string errorMsg;
        if (_fileSystemManager.accessSync(_filePath, out errorMsg))
        {
            _txtMessage.text = "文件存在:" + DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss");
        }
        else
        {
            _txtMessage.text = "文件不存在:" + DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss");
        }
    }

    public void onAccessAsyncClick()
    {
        _fileSystemManager.access(
            _filePath,
            (RTFile res) =>
            {
                Debug.Log("on access: success");
                _txtMessage.text = "文件存在:" + DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss");
            },
            (RTFile res) =>
            {
                Debug.Log("on access: fail");
                _txtMessage.text = "文件不存在:" + DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss");
            },
            () => { Debug.Log("on access: complete"); }
        );
    }

    public void onCopySyncClick()
    {
        string destPath = string.Format("{0}/file1.txt", RT.Env.USER_DATA_PATH), errorMsg;
        if (_fileSystemManager.copyFileSync(_filePath, destPath, out errorMsg))
        {
            _txtMessage.text = "拷贝成功:" + DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss");
        }
        else
        {
            _txtMessage.text = errorMsg;
        }
    }

    public void onCopyAsyncClick()
    {
        string destPath = string.Format("{0}/file1.txt", RT.Env.USER_DATA_PATH);
        _fileSystemManager.copyFile(
            _filePath,
            destPath,
            (RTFile res) =>
            {
                Debug.Log("on copyFile: success");
                _txtMessage.text = "拷贝成功:" + DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss");
            },
            (RTFile res) =>
            {
                Debug.Log("on copyFile: fail");
                _txtMessage.text = res.errMsg;
            },
            () => { Debug.Log("on copyFile: complete"); }
        );
    }

    public void onUnlinkSyncClick()
    {
        string errorMsg;
        if (_fileSystemManager.unlinkSync(_filePath, out errorMsg))
        {
            _txtMessage.text = "删除成功:" + DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss");
        }
        else
        {
            _txtMessage.text = "删除失败:" + errorMsg;
        }
    }

    public void onUnlinkAsyncClick()
    {
        _fileSystemManager.unlink(
            _filePath,
            (RTFile res) =>
            {
                Debug.Log("on unlink: success");
                _txtMessage.text = "删除成功:" + DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss");
            },
            (RTFile res) =>
            {
                Debug.Log("on unlink: fail");
                _txtMessage.text = "删除失败:" + res.errMsg;
            },
            () => { Debug.Log("on unlink: complete"); }
        );
    }

    public void onWriteAsync1MClick()
    {
        _writeBigFile(1);
    }

    public void onWriteAsync10MClick()
    {
        _writeBigFile(10);
    }
}
