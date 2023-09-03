using UnityEngine;
using UnityEngine.EventSystems;
using UnityEngine.UI;
using System;
using HWWASM;

public class InputFieldKeyboard : MonoBehaviour, ISelectHandler, IDeselectHandler, IPointerDownHandler
{
    private InputField _inputField = null;
    private bool _isSelected = false;
    private Action<string> _confirmAction = null;
    private Action<string> _completeAction = null;
    private Action<string> _inputAction = null;

    // Use this for initialization
    private void Start()
    {
        _inputField = GetComponent<InputField>();
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
        if (_isSelected)
        {
            _inputField.text = res;
            _inputField.DeactivateInputField();
        }
    }

    private void _onComplete(string res)
    {
        if (_isSelected)
        {
            _inputField.text = res;
        }
    }

    private void _onInput(string res)
    {
        if (_isSelected)
        {
            _inputField.text = res;
        }
    }

    private void _showKeyboard()
    {
        _isSelected = true;
        if (_confirmAction == null)
        {
            _confirmAction = new Action<string>(_onConfirm);
            QG.OnKeyboardConfirm(_confirmAction);
        }
        if (_completeAction == null)
        {
            _completeAction = new Action<string>(_onComplete);
            QG.OnKeyboardComplete(_completeAction);
        }
        if (_inputAction == null)
        {
            _inputAction = new Action<string>(_onInput);
            QG.OnKeyboardInput(_inputAction);
        }
        ShowKeyboardOption showKeyboardOption = new ShowKeyboardOption
        {
            defaultValue = _inputField.text,
            maxLength = 666,
            multiple = false,
            confirmHold = false,
            confirmType = "done",
            success = () => { Debug.Log("TestShowKeyboard success."); },
            fail = () => { Debug.Log("TestShowKeyboard fail."); },
            complete = () => { Debug.Log("TestShowKeyboard Complete."); }
        };
        QG.ShowKeyboard(showKeyboardOption);
    }

    public void OnSelect(BaseEventData eventData)
    {
        _showKeyboard();
    }

    public void OnDeselect(BaseEventData eventData)
    {
        _isSelected = false;
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
        HideKeyboardOption hideKeyboardOption = new HideKeyboardOption
        {
            success = () => { Debug.Log("TestHideKeyboard success."); },
            fail = () => { Debug.Log("TestHideKeyboard fail."); },
            complete = () => { Debug.Log("TestHideKeyboard Complete."); }
        };
        QG.HideKeyboard(hideKeyboardOption);
    }

    public void OnPointerDown(PointerEventData eventData)
    {
        _showKeyboard();
    }
}
