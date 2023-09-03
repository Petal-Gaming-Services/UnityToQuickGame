using UnityEngine;
using UnityEngine.SceneManagement;
using UnityEngine.UI;
// 注意：快游戏如果要用PlayerPrefs，需使用HWWASM.PlayerPrefs
using PlayerPrefs = HWWASM.PlayerPrefs;

public class PlayerPrefsScene : MonoBehaviour
{
    private Text _txtSetIntMessage;
    private InputField _ifdSetIntKey;
    private InputField _ifdSetIntContent;
    private Text _txtGetIntContent;
    private InputField _ifdGetIntKey;

    private Text _txtSetStringMessage;
    private InputField _ifdSetStringKey;
    private InputField _ifdSetStringContent;
    private Text _txtGetStringContent;
    private InputField _ifdGetStringKey;

    private Text _txtSetFloatMessage;
    private InputField _ifdSetFloatKey;
    private InputField _ifdSetFloatContent;
    private Text _txtGetFloatContent;
    private InputField _ifdGetFloatKey;

    private InputField _ifdHasKey;
    private Text _txtHasKeyMessage;

    private InputField _ifdDeleteKey;
    private Text _txtDeleteKeyMessage;

    private Text _txtDeleteAllMessage;

    void Start()
    {
        _txtSetIntMessage = GameObject.Find("txtSetIntMessage").GetComponent<Text>();
        _ifdSetIntKey = GameObject.Find("ifdSetIntKey").GetComponent<InputField>();
        _ifdSetIntContent = GameObject.Find("ifdSetIntContent").GetComponent<InputField>();
        _ifdGetIntKey = GameObject.Find("ifdGetIntKey").GetComponent<InputField>();
        _txtGetIntContent = GameObject.Find("txtGetIntContent").GetComponent<Text>();

        _txtSetStringMessage = GameObject.Find("txtSetStringMessage").GetComponent<Text>();
        _ifdSetStringKey = GameObject.Find("ifdSetStringKey").GetComponent<InputField>();
        _ifdSetStringContent = GameObject.Find("ifdSetStringContent").GetComponent<InputField>();
        _ifdGetStringKey = GameObject.Find("ifdGetStringKey").GetComponent<InputField>();
        _txtGetStringContent = GameObject.Find("txtGetStringContent").GetComponent<Text>();

        _txtSetFloatMessage = GameObject.Find("txtSetFloatMessage").GetComponent<Text>();
        _ifdSetFloatKey = GameObject.Find("ifdSetFloatKey").GetComponent<InputField>();
        _ifdSetFloatContent = GameObject.Find("ifdSetFloatContent").GetComponent<InputField>();
        _ifdGetFloatKey = GameObject.Find("ifdGetFloatKey").GetComponent<InputField>();
        _txtGetFloatContent = GameObject.Find("txtGetFloatContent").GetComponent<Text>();

        _ifdHasKey = GameObject.Find("ifdHasKey").GetComponent<InputField>();
        _txtHasKeyMessage = GameObject.Find("txtHasKeyMessage").GetComponent<Text>();

        _ifdDeleteKey = GameObject.Find("ifdDeleteKey").GetComponent<InputField>();
        _txtDeleteKeyMessage = GameObject.Find("txtDeleteKeyMessage").GetComponent<Text>();

        _txtDeleteAllMessage = GameObject.Find("txtDeleteAllMessage").GetComponent<Text>();
    }

    public void OnBackClick()
    {
        SceneManager.LoadScene("MainScene");
    }

    public void OnSetIntClick()
    {
        string key = _ifdSetIntKey.text;
        string content = _ifdSetIntContent.text;
        if (string.IsNullOrEmpty(key))
        {
            _txtSetIntMessage.text = "标签设置为空";
        }
        else if (string.IsNullOrEmpty(content))
        {
            _txtSetIntMessage.text = "储存内容为空";
        }
        else
        {
            int defaultValue;
            bool isInt = int.TryParse(content, out defaultValue);
            if (isInt)
            {
                _txtSetIntMessage.text = "设置储存内容成功";
                PlayerPrefs.SetInt(key, defaultValue);
                _ifdSetIntKey.text = "";
                _ifdSetIntContent.text = "";
            }
            else
            {
                _txtSetIntMessage.text = "存储的内容不是int类型";
            }
        }
    }

    public void OnGetIntClick()
    {
        string key = _ifdGetIntKey.text;
        if (string.IsNullOrEmpty(key))
        {
            _txtGetIntContent.text = "标签为空";
        }
        else
        {
            int content = PlayerPrefs.GetInt(key);
            _txtGetIntContent.text = content.ToString();
            _ifdGetIntKey.text = "";
        }
    }

    public void OnSetStringClick()
    {
        string key = _ifdSetStringKey.text;
        string content = _ifdSetStringContent.text;
        if (string.IsNullOrEmpty(key))
        {
            _txtSetStringMessage.text = "标签设置为空";
        }
        else if (string.IsNullOrEmpty(content))
        {
            _txtSetStringMessage.text = "储存内容为空";
        }
        else
        {
            _txtSetStringMessage.text = "设置储存内容成功";
            PlayerPrefs.SetString(key, content);
            _ifdSetStringKey.text = "";
            _ifdSetStringContent.text = "";
        }
    }

    public void OnGetStringClick()
    {
        string key = _ifdGetStringKey.text;
        if (string.IsNullOrEmpty(key))
        {
            _txtGetStringContent.text = "标签为空";
        }
        else
        {
            string content = PlayerPrefs.GetString(key);
            _txtGetStringContent.text = content;
            _ifdGetStringKey.text = "";
        }
    }

    public void OnSetFloatClick()
    {
        string key = _ifdSetFloatKey.text;
        string content = _ifdSetFloatContent.text;
        if (string.IsNullOrEmpty(key))
        {
            _txtSetFloatMessage.text = "标签设置为空";
        }
        else if (string.IsNullOrEmpty(content))
        {
            _txtSetFloatMessage.text = "储存内容为空";
        }
        else
        {
            float defaultValue;
            bool isFloat = float.TryParse(content, out defaultValue);
            if (isFloat)
            {
                _txtSetFloatMessage.text = "设置储存内容成功";
                PlayerPrefs.SetFloat(key, defaultValue);
                _ifdSetFloatKey.text = "";
                _ifdSetFloatContent.text = "";
            }
            else
            {
                _txtSetFloatMessage.text = "存储的内容不是float类型";
            }
        }
    }

    public void OnGetFloatClick()
    {
        string key = _ifdGetFloatKey.text;
        if (string.IsNullOrEmpty(key))
        {
            _txtGetFloatContent.text = "标签为空";
        }
        else
        {
            float content = PlayerPrefs.GetFloat(key);
            _txtGetFloatContent.text = content.ToString();
            _ifdGetFloatKey.text = "";
        }
    }

    public void OnHasKeyClick()
    {
        string key = _ifdHasKey.text;
        if (string.IsNullOrEmpty(key))
        {
            _txtHasKeyMessage.text = "标签为空";
        }
        else
        {
            _txtHasKeyMessage.text = PlayerPrefs.HasKey(key) ? "标签存在" : "标签不存在";
            _ifdHasKey.text = "";
        }
    }

    public void OnDeleteKeyClick()
    {
        string key = _ifdDeleteKey.text;
        if (string.IsNullOrEmpty(key))
        {
            _txtDeleteKeyMessage.text = "标签为空";
        }
        else
        {
            bool hasKey = PlayerPrefs.HasKey(key);
            if (!hasKey)
            {
                _txtDeleteKeyMessage.text = "当前标签未储存内容";
            }
            else
            {
                _txtDeleteKeyMessage.text = "移除储存 " + key + " 成功";
                PlayerPrefs.DeleteKey(key);
            }

            _ifdDeleteKey.text = "";
        }
    }

    public void OnDeleteAllClick()
    {
        PlayerPrefs.DeleteAll();
        _txtDeleteAllMessage.text = "清空所有储存内容";
    }
}