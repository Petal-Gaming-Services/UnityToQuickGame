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
using CRWASM;

public class SystemInfoScene : MonoBehaviour
{
    private Text _txtResult = null;
    private Text _txtBrand = null;
    private Text _txtModel = null;
    private Text _txtPixelRatio = null;
    private Text _txtScreenWidth = null;
    private Text _txtScreenHeight = null;
    private Text _txtWindowWidth = null;
    private Text _txtWindowHeight = null;
    private Text _txtLanguage = null;
    private Text _txtCOREVersion = null;
    private Text _txtSystem = null;
    private Text _txtPlatform = null;

    private void Awake()
    {
        RT.Init();
    }

    // Use this for initialization
    private void Start()
    {
        _txtResult = GameObject.Find("txtResult").GetComponent<Text>();
        _txtBrand = GameObject.Find("txtBrand").GetComponent<Text>();
        _txtModel = GameObject.Find("txtModel").GetComponent<Text>();
        _txtPixelRatio = GameObject.Find("txtPixelRatio").GetComponent<Text>();
        _txtScreenWidth = GameObject.Find("txtScreenWidth").GetComponent<Text>();
        _txtScreenHeight = GameObject.Find("txtScreenHeight").GetComponent<Text>();
        _txtWindowWidth = GameObject.Find("txtWindowWidth").GetComponent<Text>();
        _txtWindowHeight = GameObject.Find("txtWindowHeight").GetComponent<Text>();
        _txtLanguage = GameObject.Find("txtLanguage").GetComponent<Text>();
        _txtCOREVersion = GameObject.Find("txtCOREVersion").GetComponent<Text>();
        _txtSystem = GameObject.Find("txtSystem").GetComponent<Text>();
        _txtPlatform = GameObject.Find("txtPlatform").GetComponent<Text>();
    }

    private void _showSystemInfo(RTSystemInfo systemInfo)
    {
        _txtBrand.text = "手机品牌: " + systemInfo.brand;
        _txtModel.text = "手机型号: " + systemInfo.model;
        _txtPixelRatio.text = string.Format("设备像素比: {0}", systemInfo.pixelRatio);
        _txtScreenWidth.text = "屏幕宽度: " + systemInfo.screenWidth;
        _txtScreenHeight.text = "屏幕高度: " + systemInfo.screenHeight;
        _txtWindowWidth.text = "可使用窗口宽度: " + systemInfo.windowWidth;
        _txtWindowHeight.text = "可使用窗口高度: " + systemInfo.windowHeight;
        _txtLanguage.text = "系统语言: " + systemInfo.language;
        _txtCOREVersion.text = "客户端基础库版本: " + systemInfo.COREVersion;
        _txtSystem.text = "操作系统版本: " + systemInfo.system;
        _txtPlatform.text = "客户端平台: " + systemInfo.platform;
    }

    public void onBackClick()
    {
        SceneManager.LoadScene("MainScene");
    }

    public void onAsyncGetClick()
    {
        RT.GetSystemInfo(
            (RTSystemInfo systemInfo) =>
            {
                Debug.Log("on GetSystemInfo: success");
                _txtResult.text = "获取成功！";
                _showSystemInfo(systemInfo);
            },
            (string errMsg) =>
            {
                Debug.Log("on GetSystemInfo: fail");
                _txtResult.text = "获取失败！";
            },
            () => { Debug.Log("on GetSystemInfo: complete"); }
        );
    }

    public void onSyncGetClick()
    {
        RTSystemInfo systemInfo = RT.GetSystemInfoSync();
        if (systemInfo == null)
        {
            _txtResult.text = "获取失败！";
        }
        else
        {
            _txtResult.text = "获取成功！";
            _showSystemInfo(systemInfo);
        }
    }
}
