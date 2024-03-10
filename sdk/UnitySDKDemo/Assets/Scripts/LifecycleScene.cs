using System;
using System.Collections.Generic;
using HWWASM;
using UnityEngine;
using UnityEngine.SceneManagement;
using UnityEngine.UI;

public class LifecycleScene : MonoBehaviour
{
    private Action _onHideAction = null;
    private Action<string> _onShowAction = null;
    private Text _txtOnHideResult = null;
    private Text _txtOnShowResult = null;
    private Text _txtOnHide = null;
    private Text _txtOnShow = null;
    private InputField _ifdPackageName = null;
    private Text _txtSetMessage = null;

    // Start is called before the first frame update
    void Start()
    {
        _txtOnHideResult = GameObject.Find("txtOnHideResult").GetComponent<Text>();
        _txtOnShowResult = GameObject.Find("txtOnShowResult").GetComponent<Text>();
        GameObject btnOnHide = GameObject.Find("btnOnHide");
        _txtOnHide = btnOnHide.GetComponentInChildren<Text>();
        GameObject btnOnShow = GameObject.Find("btnOnShow");
        _txtOnShow = btnOnShow.GetComponentInChildren<Text>();
        _ifdPackageName = GameObject.Find("ifdPackageName").GetComponent<InputField>();
        _txtSetMessage = GameObject.Find("txtSetMessage").GetComponent<Text>();
    }

    // Update is called once per frame
    void Update()
    {
    }

    public void OnBackClick()
    {
        SceneManager.LoadScene("MainScene");
    }

    private void _onHide()
    {
        Debug.Log("_onHide.");
    }

    private void _onShow(string res)
    {
        Debug.Log("_onShow." + res);
    }

    public void TestExitApplication()
    {
        ExitApplicationOption exitApplicationOption = new ExitApplicationOption
        {
            success = () => { Debug.Log("ExitApplicationOption success."); },
            fail = () => { Debug.Log("ExitApplicationOption fail."); },
            complete = () => { Debug.Log("ExitApplicationOption Complete."); }
        };
        QG.ExitApplication(exitApplicationOption);
    }

    public void TestGetLaunchOptionsSync()
    {
        GetLaunchOptionsSyncResult res = QG.GetLaunchOptionsSync();
        Debug.Log("GetLaunchOptionsSyncResult." + JsonUtility.ToJson(res));
    }

    public void TestOnHide()
    {
        Debug.Log("LifecycleScene TestOnHide.");
        if (_onHideAction == null)
        {
            Debug.Log("LifecycleScene TestOnHide OnHide.");
            _onHideAction = new Action(_onHide);
            QG.OnHide(_onHideAction);
            _txtOnHide.text = "取消绑定";
            _txtOnHideResult.text = "绑定成功";
        }
        else
        {
            Debug.Log("LifecycleScene TestOnHide OffHide.");
            QG.OffHide(_onHideAction);
            _onHideAction = null;
            _txtOnHide.text = "绑定";
            _txtOnHideResult.text = "";
        }
    }

    public void TestOnShow()
    {
        Debug.Log("LifecycleScene TestOnShow.");
        if (_onShowAction == null)
        {
            Debug.Log("LifecycleScene TestOnShow OnShow.");
            _onShowAction = new Action<string>(_onShow);
            QG.OnShow(_onShowAction);
            _txtOnShow.text = "取消绑定";
            _txtOnShowResult.text = "绑定成功";
        }
        else
        {
            Debug.Log("LifecycleScene TestOnShow OffShow.");
            QG.OffShow(_onShowAction);
            _onShowAction = null;
            _txtOnShow.text = "绑定";
            _txtOnShowResult.text = "";
        }
    }

    public void TestNavigateToQuickApp()
    {
        List<string> list = new List<string>();
        list.Add("AAA");
        list.Add("BBB");
        ExtraData extraData = new ExtraData
        {
            game = "abc",
            code = 123,
            userList = list
        };
        string packageName = _ifdPackageName.text;
        if (string.IsNullOrEmpty(packageName))
        {
            _txtSetMessage.text = "输入为空";
            return;
        }

        _txtSetMessage.text = "";
        NavigateToQuickAppOption<ExtraData> navigateToQuickAppOption = new NavigateToQuickAppOption<ExtraData>
        {
            packageName = packageName,
            extraData = extraData,
            success = () => { Debug.Log("NavigateToQuickAppOption success."); },
            fail = () => { Debug.Log("NavigateToQuickAppOption fail."); },
            complete = () => { Debug.Log("NavigateToQuickAppOption Complete."); }
        };
        QG.NavigateToQuickApp(navigateToQuickAppOption);
        _ifdPackageName.text = "";
    }

    /// <summary>
    /// 注意：自定义数据类型需要添加注解[Serializable]才能正常传递参数
    /// </summary>
    [Serializable]
    public class ExtraData
    {
        public string game;
        public int code;
        public List<string> userList;
    }
}