using System;
using HWWASM;
using UnityEngine;
using UnityEngine.SceneManagement;
using UnityEngine.UI;

public class SystemEventsScene : MonoBehaviour
{
    private Action<OnErrorResult> _errorAction = null;
    private Text _txtOnError = null;
    private Text _txtOnErrorResult = null;

    // Start is called before the first frame update
    void Start()
    {
        _txtOnErrorResult = GameObject.Find("txtOnErrorResult").GetComponent<Text>();
        GameObject btnOnError = GameObject.Find("btnOnError");
        _txtOnError = btnOnError.GetComponentInChildren<Text>();
    }

    // Update is called once per frame
    void Update()
    {
    }

    public void OnBackClick()
    {
        SceneManager.LoadScene("MainScene");
    }

    private void _onError(OnErrorResult res)
    {
        string obj = JsonUtility.ToJson(res);
        Debug.Log("on Error" + obj);
    }

    public void TestOnError()
    {
        Debug.Log("SystemEventsScene TestOnError.");
        if (_errorAction == null)
        {
            Debug.Log("SystemEventsScene TestOnError OnError.");
            _errorAction = new Action<OnErrorResult>(_onError);
            QG.OnError(_errorAction);
            _txtOnError.text = "取消绑定";
            _txtOnErrorResult.text = "绑定成功";
        }
        else
        {
            Debug.Log("SystemEventsScene TestOnError OffError.");
            QG.OffError(_errorAction);
            _errorAction = null;
            _txtOnError.text = "绑定";
            _txtOnErrorResult.text = "";
        }
    }
}