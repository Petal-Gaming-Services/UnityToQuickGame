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
using System.Runtime.InteropServices;
using CRWASM;

public class SystemScene : MonoBehaviour
{

#if UNITY_WEBGL && !UNITY_EDITOR

    [DllImport("__Internal")]
    private static extern void SimulateJSError();

#else

    private static void SimulateJSError()
    {
        Debug.Log("SimulateJSError not support");
    }

#endif

    private Action _audioInterruptionBeginAction = null;
    private Action _audioInterruptionEndAction = null;
    private Action<string> _errorAction = null;
    private Action _hideAction = null;
    private Action _showAction = null;
    private Text _txtAudioInterruptionBeginResult = null;
    private Text _txtAudioInterruptionEndResult = null;
    private Text _txtErrorResult = null;
    private Text _txtHideResult = null;
    private Text _txtShowResult = null;
    private Text _txtAudioInterruptionBeginButton = null;
    private Text _txtAudioInterruptionEndButton = null;
    private Text _txtErrorButton = null;
    private Text _txtHideButton = null;
    private Text _txtShowButton = null;

    private void Awake()
    {
        RT.Init();
    }

    // Use this for initialization
    private void Start()
    {
        _txtAudioInterruptionBeginResult = GameObject.Find("txtAudioInterruptionBeginResult").GetComponent<Text>();
        _txtAudioInterruptionEndResult = GameObject.Find("txtAudioInterruptionEndResult").GetComponent<Text>();
        _txtErrorResult = GameObject.Find("txtErrorResult").GetComponent<Text>();
        _txtHideResult = GameObject.Find("txtHideResult").GetComponent<Text>();
        _txtShowResult = GameObject.Find("txtShowResult").GetComponent<Text>();
        GameObject btnAudioInterruptionBegin = GameObject.Find("btnAudioInterruptionBegin");
        _txtAudioInterruptionBeginButton = btnAudioInterruptionBegin.GetComponentInChildren<Text>();
        GameObject btnAudioInterruptionEnd = GameObject.Find("btnAudioInterruptionEnd");
        _txtAudioInterruptionEndButton = btnAudioInterruptionEnd.GetComponentInChildren<Text>();
        GameObject btnError = GameObject.Find("btnError");
        _txtErrorButton = btnError.GetComponentInChildren<Text>();
        GameObject btnHide = GameObject.Find("btnHide");
        _txtHideButton = btnHide.GetComponentInChildren<Text>();
        GameObject btnShow = GameObject.Find("btnShow");
        _txtShowButton = btnShow.GetComponentInChildren<Text>();
    }

    private void OnDestroy()
    {
        if (_audioInterruptionBeginAction != null)
        {
            RT.OffAudioInterruptionBegin(_audioInterruptionBeginAction);
            _audioInterruptionBeginAction = null;
        }
        if (_audioInterruptionEndAction != null)
        {
            RT.OffAudioInterruptionEnd(_audioInterruptionEndAction);
            _audioInterruptionEndAction = null;
        }
        if (_showAction != null)
        {
            RT.OffShow(_showAction);
            _showAction = null;
        }
        if (_hideAction != null)
        {
            RT.OffHide(_hideAction);
            _hideAction = null;
        }
        if (_errorAction != null)
        {
            RT.OffError(_errorAction);
            _errorAction = null;
        }
    }

    private void _onAudioInterruptionBegin()
    {
        Debug.Log("on AudioInterruptionBegin");
        _txtAudioInterruptionBeginResult.text = "收到中断开始回调:\n" + DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss");
    }

    private void _onAudioInterruptionEnd()
    {
        Debug.Log("on AudioInterruptionEnd");
        _txtAudioInterruptionEndResult.text = "收到中断结束回调:\n" + DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss");
    }

    private void _onError(string error)
    {
        Debug.Log("on Error");
        Debug.Log(error);
        _txtErrorResult.text = error;
    }

    private void _onHide()
    {
        Debug.Log("on Hide");
        _txtHideResult.text = "收到 onHide 回调:\n" + DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss");
    }

    private void _onShow()
    {
        Debug.Log("on Show");
        _txtShowResult.text = "收到 onShow 回调:\n" + DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss");
    }

    public void onBackClick()
    {
        SceneManager.LoadScene("MainScene");
    }

    public void onAudioInterruptionBeginClick()
    {
        if (_audioInterruptionBeginAction == null)
        {
            _audioInterruptionBeginAction = new Action(_onAudioInterruptionBegin);
            RT.OnAudioInterruptionBegin(_audioInterruptionBeginAction);
            _txtAudioInterruptionBeginButton.text = "取消绑定";
            _txtAudioInterruptionBeginResult.text = "绑定成功";
        }
        else
        {
            RT.OffAudioInterruptionBegin(_audioInterruptionBeginAction);
            _audioInterruptionBeginAction = null;
            _txtAudioInterruptionBeginButton.text = "绑定";
            _txtAudioInterruptionBeginResult.text = "";
        }
    }

    public void onAudioInterruptionEndClick()
    {
        if (_audioInterruptionEndAction == null)
        {
            _audioInterruptionEndAction = new Action(_onAudioInterruptionEnd);
            RT.OnAudioInterruptionEnd(_audioInterruptionEndAction);
            _txtAudioInterruptionEndButton.text = "取消绑定";
            _txtAudioInterruptionEndResult.text = "绑定成功";
        }
        else
        {
            RT.OffAudioInterruptionEnd(_audioInterruptionEndAction);
            _audioInterruptionEndAction = null;
            _txtAudioInterruptionEndButton.text = "绑定";
            _txtAudioInterruptionEndResult.text = "";
        }
    }

    public void onErrorClick()
    {
        if (_errorAction == null)
        {
            _errorAction = new Action<string>(_onError);
            RT.OnError(_errorAction);
            _txtErrorButton.text = "取消绑定";
            _txtErrorResult.text = "绑定成功";
        }
        else
        {
            RT.OffError(_errorAction);
            _errorAction = null;
            _txtErrorButton.text = "绑定";
            _txtErrorResult.text = "";
        }
    }

    public void onThrowErrorClick()
    {
        SimulateJSError();
    }

    public void onHideClick()
    {
        if (_hideAction == null)
        {
            _hideAction = new Action(_onHide);
            RT.OnHide(_hideAction);
            _txtHideButton.text = "取消绑定";
            _txtHideResult.text = "绑定成功";
        }
        else
        {
            RT.OffHide(_hideAction);
            _hideAction = null;
            _txtHideButton.text = "绑定";
            _txtHideResult.text = "";
        }
    }

    public void onShowClick()
    {
        if (_showAction == null)
        {
            _showAction = new Action(_onShow);
            RT.OnShow(_showAction);
            _txtShowButton.text = "取消绑定";
            _txtShowResult.text = "绑定成功";
        }
        else
        {
            RT.OffShow(_showAction);
            _showAction = null;
            _txtShowButton.text = "绑定";
            _txtShowResult.text = "";
        }
    }
}
