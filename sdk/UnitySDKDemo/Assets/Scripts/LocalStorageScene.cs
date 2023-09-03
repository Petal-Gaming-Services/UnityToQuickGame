using UnityEngine;
using UnityEngine.SceneManagement;
using UnityEngine.UI;
using HWWASM;

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

    // Use this for initialization
    void Start()
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

    // Update is called once per frame
    void Update()
    {
    }

    public void OnBackClick()
    {
        SceneManager.LoadScene("MainScene");
    }

    public void OnSetClick()
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
            QG.LocalStorage.SetItem(key, content);
            _ifdSetKey.text = "";
            _ifdSetContent.text = "";
        }
    }

    public void OnGetClick()
    {
        string key = _ifdGetKey.text;
        if (string.IsNullOrEmpty(key))
        {
            _txtGetContent.text = "标签为空";
        }
        else
        {
            string content = QG.LocalStorage.GetItem(key);
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

    public void OnIndexClick()
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

        if (index >= QG.LocalStorage.Length)
        {
            _txtIndexMessage.text = "输入的数字大于储存个数";
        }
        else if (index < 0)
        {
            _txtIndexMessage.text = "输入的数字是负数";
        }
        else
        {
            string key = QG.LocalStorage.Key(index);
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

    public void OnRemoveClick()
    {
        string key = _ifdRemoveKey.text;
        if (string.IsNullOrEmpty(key))
        {
            _txtRemoveMessage.text = "标签为空";
        }
        else
        {
            string content = QG.LocalStorage.GetItem(key);
            if (content == null)
            {
                _txtRemoveMessage.text = "当前标签未储存内容";
            }
            else
            {
                _txtRemoveMessage.text = "移除储存 " + key + " 成功";
                QG.LocalStorage.RemoveItem(key);
            }

            _ifdRemoveKey.text = "";
        }
    }

    public void OnCountClick()
    {
        _txtCountMessage.text = string.Format("当前账号本地数据缓存个数: {0}", QG.LocalStorage.Length);
    }

    public void OnClearClick()
    {
        QG.LocalStorage.Clear();
        _txtClearMessage.text = "清空所有储存内容";
    }
}