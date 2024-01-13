using System;
using System.Collections.Generic;
using HWWASM;
using UnityEngine;
using UnityEngine.SceneManagement;
using UnityEngine.UI;


public class TouchScene : MonoBehaviour
{
    private Action<OnTouchStartCallbackResult> _touchStartAction = null;
    private Action<OnTouchStartCallbackResult> _touchMoveAction = null;
    private Action<OnTouchStartCallbackResult> _touchEndAction = null;
    private Action<OnTouchStartCallbackResult> _touchCancelAction = null;
    private Text _txtTouchStartResult = null;
    private Text _txtTouchMoveResult = null;
    private Text _txtTouchEndResult = null;
    private Text _txtTouchCancelResult = null;
    private Text _txtOnTouchStart = null;
    private Text _txtOnTouchMove = null;
    private Text _txtOnTouchEnd = null;
    private Text _txtOnTouchCancel = null;
    private Text _txtResult;

    // Start is called before the first frame update
    void Start()
    {
        _txtTouchStartResult = GameObject.Find("txtTouchStartResult").GetComponent<Text>();
        _txtTouchMoveResult = GameObject.Find("txtTouchMoveResult").GetComponent<Text>();
        _txtTouchEndResult = GameObject.Find("txtTouchEndResult").GetComponent<Text>();
        _txtTouchCancelResult = GameObject.Find("txtTouchCancelResult").GetComponent<Text>();
        GameObject btnTouchStart = GameObject.Find("btnTouchStart");
        _txtOnTouchStart = btnTouchStart.GetComponentInChildren<Text>();
        GameObject btnTouchMove = GameObject.Find("btnTouchMove");
        _txtOnTouchMove = btnTouchMove.GetComponentInChildren<Text>();
        GameObject btnTouchEnd = GameObject.Find("btnTouchEnd");
        _txtOnTouchEnd = btnTouchEnd.GetComponentInChildren<Text>();
        GameObject btnTouchCancel = GameObject.Find("btnTouchCancel");
        _txtOnTouchCancel = btnTouchCancel.GetComponentInChildren<Text>();
        _txtResult = GameObject.Find("txtResult").GetComponent<Text>();
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
        _txtResult.text = "";
    }

    private string ConvertListToString<T>(List<T> list)
    {
        if (list == null || list.Count == 0)
        {
            return "";
        }

        string result = "[";
        foreach (var item in list)
        {
            if (item is string)
            {
                result += item + ",";
            }
            else
            {
                result += JsonUtility.ToJson(item) + ",";
            }
        }

        result = result.Substring(0, result.Length - 1);
        result += "]";
        return result;
    }

    private void _onTouchStart(OnTouchStartCallbackResult res)
    {
        ResetTextResult();
        _txtResult.text = "_onTouchStart touches: " + ConvertListToString(res.touches) + ", timeStamp: " +
                           res.timeStamp + ", changedTouches: " + ConvertListToString(res.changedTouches);
        string obj = JsonUtility.ToJson(res);
        Debug.Log("_onTouchStart." + obj);
    }

    private void _onTouchMove(OnTouchStartCallbackResult res)
    {
        ResetTextResult();
        _txtResult.text = "_onTouchMove touches: " + ConvertListToString(res.touches) + ", timeStamp: " +
                           res.timeStamp + ", changedTouches: " + ConvertListToString(res.changedTouches);
        string obj = JsonUtility.ToJson(res);
        Debug.Log("_onTouchMove." + obj);
    }

    private void _onTouchEnd(OnTouchStartCallbackResult res)
    {
        ResetTextResult();
        _txtResult.text = "_onTouchEnd touches: " + ConvertListToString(res.touches) + ", timeStamp: " +
                           res.timeStamp + ", changedTouches: " + ConvertListToString(res.changedTouches);
        string obj = JsonUtility.ToJson(res);
        Debug.Log("_onTouchEnd." + obj);
    }
    
    private void _onTouchCancel(OnTouchStartCallbackResult res)
    {
        ResetTextResult();
        _txtResult.text = "_onTouchCancel touches: " + ConvertListToString(res.touches) + ", timeStamp: " +
                          res.timeStamp + ", changedTouches: " + ConvertListToString(res.changedTouches);
        string obj = JsonUtility.ToJson(res);
        Debug.Log("_onTouchCancel." + obj);
    }

    public void TestOnTouchStart()
    {
        Debug.Log("TouchScene TestOnTouchStart.");
        if (_touchStartAction == null)
        {
            Debug.Log("TouchScene TestOnTouchStart OnTouchStart.");
            _touchStartAction = new Action<OnTouchStartCallbackResult>(_onTouchStart);
            QG.OnTouchStart(_touchStartAction);
            _txtOnTouchStart.text = "取消绑定";
            _txtTouchStartResult.text = "绑定成功";
        }
        else
        {
            Debug.Log("TouchScene TestOnTouchStart OffTouchStart.");
            QG.OffTouchStart(_touchStartAction);
            _touchStartAction = null;
            _txtOnTouchStart.text = "绑定";
            _txtTouchStartResult.text = "";
        }
    }

    public void TestOnTouchMove()
    {
        Debug.Log("TouchScene TestOnTouchMove.");
        if (_touchMoveAction == null)
        {
            Debug.Log("TouchScene TestOnTouchMove OnTouchMove.");
            _touchMoveAction = new Action<OnTouchStartCallbackResult>(_onTouchMove);
            QG.OnTouchMove(_touchMoveAction);
            _txtOnTouchMove.text = "取消绑定";
            _txtTouchMoveResult.text = "绑定成功";
        }
        else
        {
            Debug.Log("TouchScene TestOnTouchMove OffTouchMove.");
            QG.OffTouchMove(_touchMoveAction);
            _touchMoveAction = null;
            _txtOnTouchMove.text = "绑定";
            _txtTouchMoveResult.text = "";
        }
    }

    public void TestOnTouchEnd()
    {
        Debug.Log("TouchScene TestOnTouchEnd.");
        if (_touchEndAction == null)
        {
            Debug.Log("TouchScene TestOnTouchEnd OnTouchEnd.");
            _touchEndAction = new Action<OnTouchStartCallbackResult>(_onTouchEnd);
            QG.OnTouchEnd(_touchEndAction);
            _txtOnTouchEnd.text = "取消绑定";
            _txtTouchEndResult.text = "绑定成功";
        }
        else
        {
            Debug.Log("TouchScene TestOnTouchEnd OffTouchEnd.");
            QG.OffTouchEnd(_touchEndAction);
            _touchEndAction = null;
            _txtOnTouchEnd.text = "绑定";
            _txtTouchEndResult.text = "";
        }
    }
    
    public void TestOnTouchCancel()
    {
        Debug.Log("TouchScene TestOnTouchCancel.");
        if (_touchCancelAction == null)
        {
            Debug.Log("TouchScene TestOnTouchCancel OnTouchCancel.");
            _touchCancelAction = new Action<OnTouchStartCallbackResult>(_onTouchCancel);
            QG.OnTouchCancel(_touchCancelAction);
            _txtOnTouchCancel.text = "取消绑定";
            _txtTouchCancelResult.text = "绑定成功";
        }
        else
        {
            Debug.Log("TouchScene TestOnTouchCancel OffTouchCancel.");
            QG.OffTouchCancel(_touchCancelAction);
            _touchCancelAction = null;
            _txtOnTouchCancel.text = "绑定";
            _txtTouchCancelResult.text = "";
        }
    }
}