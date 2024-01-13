using HWWASM;
using UnityEngine;
using UnityEngine.SceneManagement;
using UnityEngine.UI;

public class ClipboardScene : MonoBehaviour
{
    private Text _textResult;
    private Text _textClipboardDataResult;
    private InputField _ifdSetClipboardData = null;

    // Start is called before the first frame update
    void Start()
    {
        _textResult = GameObject.Find("textResult").GetComponent<Text>();
        _textClipboardDataResult = GameObject.Find("textClipboardDataResult").GetComponent<Text>();
        _ifdSetClipboardData = GameObject.Find("ifdSetClipboardData").GetComponent<InputField>();
    }

    // Update is called once per frame
    void Update()
    {
    }

    public void OnBackClick()
    {
        SceneManager.LoadScene("MainScene");
    }

    private void ResetTextResult()
    {
        _textResult.text = "";
    }

    public void TestGetClipboardData()
    {
        Debug.Log("TestGetClipboardData.");
        GetClipboardDataOption getClipboardDataOption = new GetClipboardDataOption
        {
            success = (res) =>
            {
                Debug.Log("GetClipboardDataOption success." + res.data);
                _textResult.text = "GetClipboardDataOption success data: " + res.data;
            },
            fail = () => { Debug.Log("GetClipboardDataOption fail."); },
            complete = () => { Debug.Log("GetClipboardDataOption Complete."); }
        };
        QG.GetClipboardData(getClipboardDataOption);
        ResetTextResult();
    }

    public void TestSetClipboardData()
    {
        Debug.Log("TestSetClipboardData.");
        string setClipboardData = _ifdSetClipboardData.text;
        if (string.IsNullOrEmpty(setClipboardData))
        {
            _textClipboardDataResult.text = "设置内容不能为空";
            return;
        }

        _textClipboardDataResult.text = "设置成功";
        SetClipboardDataOption setClipboardDataOption = new SetClipboardDataOption
        {
            data = setClipboardData,
            success = () => { Debug.Log("SetClipboardDataOption success."); },
            fail = () => { Debug.Log("SetClipboardDataOption fail."); },
            complete = () => { Debug.Log("SetClipboardDataOption Complete."); }
        };
        QG.SetClipboardData(setClipboardDataOption);
        _ifdSetClipboardData.text = "";
    }
}