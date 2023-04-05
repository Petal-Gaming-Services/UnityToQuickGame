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
using CRWASM;

public class DeviceScene : MonoBehaviour
{
    private Action<RTNetworkStatus> _networkStatusChangeAction = null;
    private Text _txtNetworkResult = null;
    private Text _txtVibrateResult = null;

    private void Awake()
    {
        RT.Init();
    }

    // Use this for initialization
    private void Start()
    {
        _txtNetworkResult = GameObject.Find("txtNetworkResult").GetComponent<Text>();
        _txtVibrateResult = GameObject.Find("txtVibrateResult").GetComponent<Text>();
        if (_networkStatusChangeAction == null)
        {
            _networkStatusChangeAction = new Action<RTNetworkStatus>(_onNetworkStatusChange);
            RT.OnNetworkStatusChange(_networkStatusChangeAction);
        }
    }

    private void OnDestroy()
    {
        if (_networkStatusChangeAction != null)
        {
            RT.OffNetworkStatusChange(_networkStatusChangeAction);
            _networkStatusChangeAction = null;
        }
    }

    private void _onNetworkStatusChange(RTNetworkStatus res)
    {
        Debug.Log("on NetworkStatusChange");
        if (res.isConnected)
        {
            _txtNetworkResult.text = "网络状态: " + res.networkType;
        }
        else
        {
            _txtNetworkResult.text = "网络状态: 断开";
        }
    }

    public void onBackClick()
    {
        SceneManager.LoadScene("MainScene");
    }

    public void onNetworkTypeGetClick()
    {
        RT.GetNetworkType(
            (RTNetworkType res) =>
            {
                Debug.Log("on GetNetworkType: success");
                _txtNetworkResult.text = "网络状态: " + res.networkType;
            },
            (RTNetworkType res) =>
            {
                Debug.Log("on GetNetworkType: fail");
                _txtNetworkResult.text = "获取网络状态失败";
            },
            () => { Debug.Log("on GetNetworkType: complete"); }
        );
    }

    public void onVibrateShortClick()
    {
        RT.VibrateShort(
            () =>
            {
                Debug.Log("on VibrateShort: success");
                _txtVibrateResult.text = "短振动成功!";
            },
            () =>
            {
                Debug.Log("on VibrateShort: fail");
                _txtVibrateResult.text = "调用短振动失败!";
            },
            () => { Debug.Log("on VibrateShort: complete"); }
        );
    }

    public void onVibrateLongClick()
    {
        RT.VibrateLong(
            () =>
            {
                Debug.Log("on VibrateLong: success");
                _txtVibrateResult.text = "长振动成功!";
            },
            () =>
            {
                Debug.Log("on VibrateLong: fail");
                _txtVibrateResult.text = "调用长振动失败!";
            },
            () => { Debug.Log("on VibrateLong: complete"); }
        );
    }
}
