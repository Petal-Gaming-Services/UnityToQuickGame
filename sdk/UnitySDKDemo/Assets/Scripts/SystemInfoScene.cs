using HWWASM;
using UnityEngine;
using UnityEngine.SceneManagement;
using UnityEngine.UI;

public class SystemInfoScene : MonoBehaviour
{
    private Text _textResult;

    // Start is called before the first frame update
    void Start()
    {
        _textResult = GameObject.Find("textResult").GetComponent<Text>();
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

    public void TestGetSystemInfo()
    {
        ResetTextResult();
        GetSystemInfoOption getSystemInfoOption = new GetSystemInfoOption
        {
            success = (res) =>
            {
                Debug.Log("TestGetSystemInfo success 手机品牌brand: "+ res.brand + ", 手机型号model: " + res.model + ", 设备像素比pixelRatio: " +
                          res.pixelRatio + ", 屏幕宽度screenWidth: " +
                          res.screenWidth + ", 屏幕高度screenHeight: " + res.screenHeight + ", 可使用窗口宽度windowWidth: " +
                          res.windowWidth
                          + ", 可使用窗口高度windowHeight: " + res.windowHeight + ", 系统语言language: " + res.language +
                          ", 系统地区region: " + res.region +
                          ", 系统语言书写方式script: " + res.script + ", 渲染引擎版本号coreVersion: " + res.coreVersion +
                          ", 渲染引擎版本号COREVersion: " +
                          res.COREVersion + ", 操作系统版本system: " + res.system
                          + ", 客户端平台platform: " + res.platform + ", 快应用中心版本version: " + res.version +
                          ", 状态栏高度statusBarHeight: " +
                          res.statusBarHeight + ", 运行平台版本名称platformVersionName: " + res.platformVersionName +
                          ", 运行平台标准版本号platformVersionCode: " +
                          res.platformVersionCode + ", 安全区域SafeArea: " + JsonUtility.ToJson(res.safeArea));
                _textResult.text = "GetSystemInfo 手机品牌brand: " + res.brand + ", 手机型号model: " + res.model + ", 设备像素比pixelRatio: " +
                                  res.pixelRatio + ", 屏幕宽度screenWidth: " +
                                  res.screenWidth + ", 屏幕高度screenHeight: " + res.screenHeight + ", 可使用窗口宽度windowWidth: " +
                                  res.windowWidth
                                  + ", 可使用窗口高度windowHeight: " + res.windowHeight + ", 系统语言language: " + res.language +
                                  ", 系统地区region: " + res.region +
                                  ", 系统语言书写方式script: " + res.script + ", 渲染引擎版本号coreVersion: " + res.coreVersion +
                                  ", 渲染引擎版本号COREVersion: " +
                                  res.COREVersion + ", 操作系统版本system: " + res.system
                                  + ", 客户端平台platform: " + res.platform + ", 快应用中心版本version: " + res.version +
                                  ", 状态栏高度statusBarHeight: " +
                                  res.statusBarHeight + ", 运行平台版本名称platformVersionName: " + res.platformVersionName +
                                  ", 运行平台标准版本号platformVersionCode: " +
                                  res.platformVersionCode + ", 安全区域SafeArea: " + JsonUtility.ToJson(res.safeArea);
            },
            fail = () => { Debug.Log("GetSystemInfoOption fail."); },
            complete = () => { Debug.Log("GetSystemInfoOption Complete."); }
        };
        QG.GetSystemInfo(getSystemInfoOption);
    }

    public void TestGetSystemInfoSync()
    {
        ResetTextResult();
        Debug.Log("TestGetSystemInfoSync success.");
        GetSystemInfoSuccessResult res = QG.GetSystemInfoSync();
        _textResult.text = "GetSystemInfoSync 手机品牌brand: " + res.brand + ", 手机型号model: " + res.model + ", 设备像素比pixelRatio: " + res.pixelRatio +
                          ", 屏幕宽度screenWidth: " +
                          res.screenWidth + ", 屏幕高度screenHeight: " + res.screenHeight + ", 可使用窗口宽度windowWidth: " +
                          res.windowWidth
                          + ", 可使用窗口高度windowHeight: " + res.windowHeight + ", 系统语言language: " + res.language +
                          ", 系统地区region: " + res.region +
                          ", 系统语言书写方式script: " + res.script + ", 渲染引擎版本号coreVersion: " + res.coreVersion +
                          ", 渲染引擎版本号COREVersion: " +
                          res.COREVersion + ", 操作系统版本system: " + res.system
                          + ", 客户端平台platform: " + res.platform + ", 快应用中心版本version: " + res.version +
                          ", 状态栏高度statusBarHeight: " +
                          res.statusBarHeight + ", 运行平台版本名称platformVersionName: " + res.platformVersionName +
                          ", 运行平台标准版本号platformVersionCode: " +
                          res.platformVersionCode + ", 安全区域SafeArea: " + JsonUtility.ToJson(res.safeArea);
        Debug.Log("TestGetSystemInfoSync success 手机品牌brand: "+ res.brand + ", 手机型号model: " + res.model + ", 设备像素比pixelRatio: " +
                  res.pixelRatio + ", 屏幕宽度screenWidth: " +
                  res.screenWidth + ", 屏幕高度screenHeight: " + res.screenHeight + ", 可使用窗口宽度windowWidth: " +
                  res.windowWidth
                  + ", 可使用窗口高度windowHeight: " + res.windowHeight + ", 系统语言language: " + res.language +
                  ", 系统地区region: " + res.region +
                  ", 系统语言书写方式script: " + res.script + ", 渲染引擎版本号coreVersion: " + res.coreVersion +
                  ", 渲染引擎版本号COREVersion: " +
                  res.COREVersion + ", 操作系统版本system: " + res.system
                  + ", 客户端平台platform: " + res.platform + ", 快应用中心版本version: " + res.version +
                  ", 状态栏高度statusBarHeight: " +
                  res.statusBarHeight + ", 运行平台版本名称platformVersionName: " + res.platformVersionName +
                  ", 运行平台标准版本号platformVersionCode: " +
                  res.platformVersionCode + ", 安全区域SafeArea: " + JsonUtility.ToJson(res.safeArea));
    }
}