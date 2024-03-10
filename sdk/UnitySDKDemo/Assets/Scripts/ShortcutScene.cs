using HWWASM;
using UnityEngine;
using UnityEngine.SceneManagement;
using UnityEngine.UI;

public class ShortcutScene : MonoBehaviour
{
    private Text _txtMessage = null;
    private InputField _ifdMessage = null;
    private Text _textResult;

    // Start is called before the first frame update
    void Start()
    {
        _txtMessage = GameObject.Find("txtMessage").GetComponent<Text>();
        _textResult = GameObject.Find("textResult").GetComponent<Text>();
        _ifdMessage = GameObject.Find("ifdMessage").GetComponent<InputField>();
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

    public void TestHasShortcutInstalled()
    {
        HasShortcutInstalledOption hasShortcutInstalledOption = new HasShortcutInstalledOption
        {
            success = (res) => { Debug.Log("HasShortcutInstalledOption success." + res.hasShortcut); },
            fail = (res) => { Debug.Log("HasShortcutInstalledOption fail." + res.errorMsg); },
            complete = () => { Debug.Log("HasShortcutInstalledOption Complete."); }
        };
        QG.HasShortcutInstalled(hasShortcutInstalledOption);
    }

    public void TestInstallShortcut()
    {
        string message = _ifdMessage.text;
        if (string.IsNullOrEmpty(message))
        {
            _txtMessage.text = "输入为空";
            return;
        }

        _txtMessage.text = "";
        InstallShortcutOption installShortcutOption = new InstallShortcutOption
        {
            message = message,
            success = (res) =>
            {
                ResetTextResult();
                _textResult.text = "InstallShortcut success: " + res.message;
                Debug.Log("InstallShortcutOption success." + res.message);
            },
            fail = (res) =>
            {
                ResetTextResult();
                _textResult.text = "InstallShortcut fail errocode: " + res.errocode + ", erromsg: " + res.erromsg;
                Debug.Log("InstallShortcutOption fail errocode: " + res.errocode + ", erromsg: " + res.erromsg);
            },
            complete = () => { Debug.Log("InstallShortcutOption Complete."); }
        };
        QG.InstallShortcut(installShortcutOption);
        _ifdMessage.text = "";
    }
}