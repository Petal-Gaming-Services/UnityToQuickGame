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
using System.Collections;
using CRWASM;

public class KeyboardScene : MonoBehaviour
{
    private Action<string> _confirmAction = null;
    private Action<string> _completeAction = null;
    private Action<string> _inputAction = null;
    private Text _txtConfirmResult = null;
    private Text _txtCompleteResult = null;
    private Text _txtInputResult = null;
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

    private void Awake()
    {
        RT.Init();
    }

    // Use this for initialization
    private void Start()
    {
        _txtConfirmResult = GameObject.Find("txtConfirmResult").GetComponent<Text>();
        _txtCompleteResult = GameObject.Find("txtCompleteResult").GetComponent<Text>();
        _txtInputResult = GameObject.Find("txtInputResult").GetComponent<Text>();
        GameObject btnShowKeyboard = GameObject.Find("btnShowKeyboard");
        Text txtShowKeyboardButton = btnShowKeyboard.GetComponentInChildren<Text>();
        txtShowKeyboardButton.text = "弹出\n测试\n键盘";
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

    private void OnDestroy()
    {
        if (_confirmAction != null)
        {
            RT.OffKeyboardConfirm(_confirmAction);
            _confirmAction = null;
        }
        if (_completeAction != null)
        {
            RT.OffKeyboardComplete(_completeAction);
            _completeAction = null;
        }
        if (_inputAction != null)
        {
            RT.OffKeyboardInput(_inputAction);
            _inputAction = null;
        }
    }

    IEnumerator _coroutineHideKeyboard()
    {
        // wait for 2 second
        yield return new WaitForSeconds(2.0f);
        RT.HideKeyboard(
            () => { Debug.Log("on HideKeyboard: success"); },
            () => { Debug.Log("on HideKeyboard: fail"); },
            () => { Debug.Log("on HideKeyboard: complete"); }
        );
        _coroutineKeyboard = null;
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

    public void onBackClick()
    {
        SceneManager.LoadScene("MainScene");
    }

    public void onShowKeyboardClick()
    {
        string defaultStr = _ifdDefault.text;
        string confirmStr = _ifdConfirm.text;
        string lengthStr = _ifdLength.text;
        string contentStr = _ifdContent.text;
        bool multiple = _tgeMultiple.isOn;
        bool confirmHold = !_tgeConfirmHold.isOn;

        RT.ShowKeyboard(
            defaultStr,
            string.IsNullOrEmpty(lengthStr) ? (int?)null : int.Parse(lengthStr),
            multiple,
            confirmHold,
            confirmStr,
            () => { Debug.Log("on ShowKeyboard: success"); },
            () => { Debug.Log("on ShowKeyboard: fail"); },
            () => { Debug.Log("on ShowKeyboard: complete"); }
        );

        if (!string.IsNullOrEmpty(contentStr))
        {
            RT.UpdateKeyboard(
                (RTMessage res) =>
                {
                    Debug.Log("on UpdateKeyboard: success");
                    Debug.Log(res.message);
                },
                (RTMessage res) =>
                {
                    Debug.Log("on UpdateKeyboard: fail");
                    Debug.Log(res.message);
                },
                () => { Debug.Log("on UpdateKeyboard: complete"); },
                contentStr
            );
        }
    }

    public void onHideKeyboardClick()
    {
        if (_coroutineKeyboard != null)
        {
            StopCoroutine(_coroutineKeyboard);
        }
        RT.ShowKeyboard("2秒后隐藏键盘", 100, true, false, null, null, null, null);
        _coroutineKeyboard = StartCoroutine(_coroutineHideKeyboard());
    }

    public void onConfirmClick()
    {
        if (_confirmAction == null)
        {
            _confirmAction = new Action<string>(_onConfirm);
            RT.OnKeyboardConfirm(_confirmAction);
            _txtConfirmButton.text = "取消绑定";
            _txtConfirmResult.text = "绑定成功";
        }
        else
        {
            RT.OffKeyboardConfirm(_confirmAction);
            _confirmAction = null;
            _txtConfirmButton.text = "绑定";
            _txtConfirmResult.text = "";
        }
    }

    public void onCompleteClick()
    {
        if (_completeAction == null)
        {
            _completeAction = new Action<string>(_onComplete);
            RT.OnKeyboardComplete(_completeAction);
            _txtCompleteButton.text = "取消绑定";
            _txtCompleteResult.text = "绑定成功";
        }
        else
        {
            RT.OffKeyboardComplete(_completeAction);
            _completeAction = null;
            _txtCompleteButton.text = "绑定";
            _txtCompleteResult.text = "";
        }
    }

    public void onInputClick()
    {
        if (_inputAction == null)
        {
            _inputAction = new Action<string>(_onInput);
            RT.OnKeyboardInput(_inputAction);
            _txtInputButton.text = "取消绑定";
            _txtInputResult.text = "绑定成功";
        }
        else
        {
            RT.OffKeyboardInput(_inputAction);
            _inputAction = null;
            _txtInputButton.text = "绑定";
            _txtInputResult.text = "";
        }
    }
}
