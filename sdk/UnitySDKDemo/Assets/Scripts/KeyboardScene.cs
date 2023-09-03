using System;
using HWWASM;
using UnityEngine;
using UnityEngine.SceneManagement;
using UnityEngine.UI;
using System.Collections;

public class KeyboardScene : MonoBehaviour
{
    private Action<string> _inputAction = null;
    private Action<string> _confirmAction = null;
    private Action<string> _completeAction = null;
    private Text _txtInputResult = null;
    private Text _txtConfirmResult = null;
    private Text _txtCompleteResult = null;
    private Text _txtConfirmButton = null;
    private Text _txtCompleteButton = null;
    private Text _txtInputButton = null;
    private InputField _ifdDefault = null;
    private InputField _ifdConfirm = null;
    private InputField _ifdLength = null;
    private InputField _ifdContent = null;
    private Toggle _tgeMultiple = null;
    private Toggle _tgeConfirmHold = null;
    private Coroutine _coroutineKeyboard = null;

    // Start is called before the first frame update
    void Start()
    {
        _txtConfirmResult = GameObject.Find("txtConfirmResult").GetComponent<Text>();
        _txtCompleteResult = GameObject.Find("txtCompleteResult").GetComponent<Text>();
        _txtInputResult = GameObject.Find("txtInputResult").GetComponent<Text>();
        GameObject btnShowKeyboard = GameObject.Find("btnShowKeyboard");
        Text txtShowKeyboardButton = btnShowKeyboard.GetComponentInChildren<Text>();
        txtShowKeyboardButton.text = "弹出\n键盘";
        GameObject btnConfirm = GameObject.Find("btnConfirm");
        _txtConfirmButton = btnConfirm.GetComponentInChildren<Text>();
        GameObject btnComplete = GameObject.Find("btnComplete");
        _txtCompleteButton = btnComplete.GetComponentInChildren<Text>();
        GameObject btnInput = GameObject.Find("btnInput");
        _txtInputButton = btnInput.GetComponentInChildren<Text>();
        _ifdDefault = GameObject.Find("ifdDefault").GetComponent<InputField>();
        _ifdConfirm = GameObject.Find("ifdConfirm").GetComponent<InputField>();
        _ifdLength = GameObject.Find("ifdLength").GetComponent<InputField>();
        _ifdContent = GameObject.Find("ifdContent").GetComponent<InputField>();
        _tgeMultiple = GameObject.Find("tgeMultiple").GetComponent<Toggle>();
        _tgeConfirmHold = GameObject.Find("tgeConfirmHold").GetComponent<Toggle>();
    }

    // Update is called once per frame
    void Update()
    {
    }

    public void OnBackClick()
    {
        SceneManager.LoadScene("MainScene");
    }

    private void OnDestroy()
    {
        if (_confirmAction != null)
        {
            QG.OffKeyboardConfirm(_confirmAction);
            _confirmAction = null;
        }

        if (_completeAction != null)
        {
            QG.OffKeyboardComplete(_completeAction);
            _completeAction = null;
        }

        if (_inputAction != null)
        {
            QG.OffKeyboardInput(_inputAction);
            _inputAction = null;
        }
    }

    private void _onConfirm(string res)
    {
        Debug.Log("on KeyboardConfirm");
        _txtConfirmResult.text = res;
    }

    private void _onComplete(string res)
    {
        Debug.Log("on KeyboardComplete");
        _txtCompleteResult.text = res;
    }

    private void _onInput(string res)
    {
        Debug.Log("on KeyboardInput");
        _txtInputResult.text = res;
    }

    // ReSharper disable Unity.PerformanceAnalysis
    IEnumerator _coroutineHideKeyboard()
    {
        // wait for 2 second
        yield return new WaitForSeconds(2.0f);
        HideKeyboardOption hideKeyboardOption = new HideKeyboardOption
        {
            success = () => { Debug.Log("TestHideKeyboard success."); },
            fail = () => { Debug.Log("TestHideKeyboard fail."); },
            complete = () => { Debug.Log("TestHideKeyboard Complete."); }
        };
        QG.HideKeyboard(hideKeyboardOption);
        _coroutineKeyboard = null;
    }

    public void TestHideKeyboard()
    {
        if (_coroutineKeyboard != null)
        {
            StopCoroutine(_coroutineKeyboard);
        }

        ShowKeyboardOption showKeyboardOption = new ShowKeyboardOption
        {
            defaultValue = "2秒后隐藏键盘",
            maxLength = 100,
            multiple = true,
            confirmHold = false,
            confirmType = null,
            success = () => { Debug.Log("TestShowKeyboard success."); },
            fail = () => { Debug.Log("TestShowKeyboard fail."); },
            complete = () => { Debug.Log("TestShowKeyboard Complete."); }
        };
        QG.ShowKeyboard(showKeyboardOption);
        _coroutineKeyboard = StartCoroutine(_coroutineHideKeyboard());
    }

    public void TestShowKeyboard()
    {
        string defaultStr = _ifdDefault.text;
        string confirmStr = _ifdConfirm.text;
        string lengthStr = _ifdLength.text;
        string contentStr = _ifdContent.text;
        bool multiple = _tgeMultiple.isOn;
        bool confirmHold = !_tgeConfirmHold.isOn;
        ShowKeyboardOption showKeyboardOption = new ShowKeyboardOption
        {
            defaultValue = defaultStr,
            maxLength = string.IsNullOrEmpty(lengthStr) ? 0 : int.Parse(lengthStr),
            multiple = multiple,
            confirmHold = confirmHold,
            confirmType = confirmStr,
            success = () => { Debug.Log("TestShowKeyboard success."); },
            fail = () => { Debug.Log("TestShowKeyboard fail."); },
            complete = () => { Debug.Log("TestShowKeyboard Complete."); }
        };
        QG.ShowKeyboard(showKeyboardOption);
        if (!string.IsNullOrEmpty(contentStr))
        {
            UpdateKeyboardOption updateKeyboardOption = new UpdateKeyboardOption
            {
                value = contentStr,
                success = (res) => { Debug.Log("UpdateKeyboard success " +res.errMsg); },
                fail = (res) => { Debug.Log("UpdateKeyboard fail " + res.errMsg); },
                complete = () => { Debug.Log("UpdateKeyboard Complete."); }
            };
            QG.UpdateKeyboard(updateKeyboardOption);
        }
    }

    public void TestOnKeyboardInput()
    {
        Debug.Log("TestOnKeyboardInput.");
        if (_inputAction == null)
        {
            _inputAction = new Action<string>(_onInput);
            QG.OnKeyboardInput(_inputAction);
            _txtInputButton.text = "取消绑定";
            _txtInputResult.text = "绑定成功";
        }
        else
        {
            QG.OffKeyboardInput(_inputAction);
            _inputAction = null;
            _txtInputButton.text = "绑定";
            _txtInputResult.text = "";
        }
    }

    public void TestOnKeyboardConfirm()
    {
        Debug.Log("TestOnKeyboardConfirm.");
        if (_confirmAction == null)
        {
            _confirmAction = new Action<string>(_onConfirm);
            QG.OnKeyboardConfirm(_confirmAction);
            _txtConfirmButton.text = "取消绑定";
            _txtConfirmResult.text = "绑定成功";
        }
        else
        {
            QG.OffKeyboardConfirm(_confirmAction);
            _confirmAction = null;
            _txtConfirmButton.text = "绑定";
            _txtConfirmResult.text = "";
        }
    }

    public void TestOnKeyboardComplete()
    {
        Debug.Log("TestOnKeyboardComplete.");
        if (_completeAction == null)
        {
            _completeAction = new Action<string>(_onComplete);
            QG.OnKeyboardComplete(_completeAction);
            _txtCompleteButton.text = "取消绑定";
            _txtCompleteResult.text = "绑定成功";
        }
        else
        {
            QG.OffKeyboardComplete(_completeAction);
            _completeAction = null;
            _txtCompleteButton.text = "绑定";
            _txtCompleteResult.text = "";
        }
    }
}