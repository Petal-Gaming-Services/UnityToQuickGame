using HWWASM;
using UnityEngine;
using UnityEngine.SceneManagement;
using UnityEngine.UI;

public class DeeplinkScene : MonoBehaviour
{
    private Text _txtSetMessage = null;
    private InputField _ifdDeeplink = null;

    // Start is called before the first frame update
    void Start()
    {
        _txtSetMessage = GameObject.Find("txtSetMessage").GetComponent<Text>();
        _ifdDeeplink = GameObject.Find("ifdDeeplink").GetComponent<InputField>();
    }

    // Update is called once per frame
    void Update()
    {
    }

    public void OnBackClick()
    {
        SceneManager.LoadScene("MainScene");
    }

    public void TestOpenDeeplink()
    {
        string uri = _ifdDeeplink.text;
        if (string.IsNullOrEmpty(uri))
        {
            _txtSetMessage.text = "输入为空";
            return;
        }

        _txtSetMessage.text = "";
        OpenDeeplinkOption openDeeplinkOption = new OpenDeeplinkOption
        {
            uri = uri,
        };
        QG.OpenDeeplink(openDeeplinkOption);
        _ifdDeeplink.text = "";
    }
}