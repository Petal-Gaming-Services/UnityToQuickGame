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
using CRWASM;

public class LocalStorageScene : MonoBehaviour
{
    private Text _txtSetMessage = null;
    private Text _txtGetContent = null;
    private Text _txtIndexMessage = null;
    private Text _txtRemoveMessage = null;
    private Text _txtCountMessage = null;
    private Text _txtClearMessage = null;
    private InputField _ifdSetKey = null;
    private InputField _ifdGetKey = null;
    private InputField _ifdRemoveKey = null;
    private InputField _ifdSetContent = null;
    private InputField _ifdIndex = null;

    private void Awake()
    {
        RT.Init();
    }

    // Use this for initialization
    private void Start()
    {
        _txtSetMessage = GameObject.Find("txtSetMessage").GetComponent<Text>();
        _txtGetContent = GameObject.Find("txtGetContent").GetComponent<Text>();
        _txtRemoveMessage = GameObject.Find("txtRemoveMessage").GetComponent<Text>();
        _txtIndexMessage = GameObject.Find("txtIndexMessage").GetComponent<Text>();
        _txtCountMessage = GameObject.Find("txtCountMessage").GetComponent<Text>();
        _txtClearMessage = GameObject.Find("txtClearMessage").GetComponent<Text>();
        _ifdSetKey = GameObject.Find("ifdSetKey").GetComponent<InputField>();
        _ifdSetContent = GameObject.Find("ifdSetContent").GetComponent<InputField>();
        _ifdGetKey = GameObject.Find("ifdGetKey").GetComponent<InputField>();
        _ifdRemoveKey = GameObject.Find("ifdRemoveKey").GetComponent<InputField>();
        _ifdIndex = GameObject.Find("ifdIndex").GetComponent<InputField>();
    }

    public void onBackClick()
    {
        SceneManager.LoadScene("MainScene");
    }

    public void onSetClick()
    {
        string key = _ifdSetKey.text;
        string content = _ifdSetContent.text;
        if (string.IsNullOrEmpty(key))
        {
            _txtSetMessage.text = "标签设置为空";
        }
        else if (string.IsNullOrEmpty(content))
        {
            _txtSetMessage.text = "储存内容为空";
        }
        else
        {
            _txtSetMessage.text = "设置储存内容成功";
            RT.LocalStorage.setItem(key, content);
            _ifdSetKey.text = "";
            _ifdSetContent.text = "";
        }
    }

    public void onGetClick()
    {
        string key = _ifdGetKey.text;
        if (string.IsNullOrEmpty(key))
        {
            _txtGetContent.text = "标签为空";
        }
        else
        {
            string content = RT.LocalStorage.getItem(key);
            _ifdGetKey.text = "";
            if (content == null)
            {
                _txtGetContent.text = "当前标签未储存内容";
            }
            else
            {
                _txtGetContent.text = content;
            }
        }
    }

    public void onIndexClick()
    {
        string indexStr = _ifdIndex.text;
        if (string.IsNullOrEmpty(indexStr))
        {
            _txtIndexMessage.text = "输入空";
            return;
        }
        int index = 0;
        if (!int.TryParse(indexStr, out index))
        {
            _ifdIndex.text = "";
            _txtIndexMessage.text = "不是数字";
            return;
        }
        if (index >= RT.LocalStorage.length)
        {
            _txtIndexMessage.text = "输入的数字大于储存个数";
        }
        else if (index < 0)
        {
            _txtIndexMessage.text = "输入的数字是负数";
        }
        else
        {
            string key = RT.LocalStorage.key(index);
            if (key == null)
            {
                _txtIndexMessage.text = "输入的数字大于储存个数";
            }
            else
            {
                _txtIndexMessage.text = string.Format("输入索引:{0} 获取标签为:{1}", index, key);
            }
        }
        _ifdIndex.text = "";
    }

    public void onRemoveClick()
    {
        string key = _ifdRemoveKey.text;
        if (string.IsNullOrEmpty(key))
        {
            _txtRemoveMessage.text = "标签为空";
        }
        else
        {
            string content = RT.LocalStorage.getItem(key);
            if (content == null)
            {
                _txtRemoveMessage.text = "当前标签未储存内容";
            }
            else
            {
                _txtRemoveMessage.text = "移除储存 " + key + " 成功";
                RT.LocalStorage.removeItem(key);
            }
            _ifdRemoveKey.text = "";
        }
    }

    public void onCountClick()
    {
        _txtCountMessage.text = string.Format("当前账号本地数据缓存个数: {0}", RT.LocalStorage.length);
    }

    public void onClearClick()
    {
        RT.LocalStorage.clear();
        _txtClearMessage.text = "清空所有储存内容";
    }
}
