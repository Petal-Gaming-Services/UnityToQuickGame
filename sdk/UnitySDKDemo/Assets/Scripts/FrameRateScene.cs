using HWWASM;
using UnityEngine;
using UnityEngine.SceneManagement;
using UnityEngine.UI;

public class FrameRateScene : MonoBehaviour
{
    private Text _txtSetMessage = null;

    private InputField _ifdFrame = null;

    // Start is called before the first frame update
    void Start()
    {
        _txtSetMessage = GameObject.Find("txtSetMessage").GetComponent<Text>();
        _ifdFrame = GameObject.Find("ifdFrame").GetComponent<InputField>();
    }

    // Update is called once per frame
    void Update()
    {
    }

    public void OnBackClick()
    {
        SceneManager.LoadScene("MainScene");
    }

    public void TestSetPreferredFramesPerSecond()
    {
        string fps = _ifdFrame.text;
        if (string.IsNullOrEmpty(fps))
        {
            _txtSetMessage.text = "输入为空";
            return;
        }

        int index = 0;
        if (!int.TryParse(fps, out index))
        {
            _ifdFrame.text = "";
            _txtSetMessage.text = "不是数字";
            return;
        }

        if (index <= 0 || index > 60)
        {
            _ifdFrame.text = "";
            _txtSetMessage.text = "输入的数字超出范围";
            return;
        }

        _txtSetMessage.text = "设置帧率成功";
        Debug.Log("SetPreferredFramesPerSecond success fps: " + fps);
        int res = int.Parse(fps);
        QG.SetPreferredFramesPerSecond(res);
    }
}