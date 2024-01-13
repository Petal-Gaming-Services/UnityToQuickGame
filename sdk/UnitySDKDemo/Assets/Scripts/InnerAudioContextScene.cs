using System;
using HWWASM;
using UnityEngine;
using UnityEngine.SceneManagement;
using UnityEngine.UI;

public class InnerAudioContextScene : MonoBehaviour
{
    private InnerAudioContext _innerAudioContext;
    private InputField _ifdSrc = null;
    private InputField _ifdStartTime = null;
    private InputField _ifdVolume = null;
    private InputField _ifdPosition = null;
    private Toggle _tgeAutoplay = null;
    private Toggle _tgeLoop = null;
    private Toggle _tgeObeyMuteSwitch = null;
    private Text _textAudioAttribute;

    // Start is called before the first frame update
    void Start()
    {
        _ifdSrc = GameObject.Find("ifdSrc").GetComponent<InputField>();
        _ifdStartTime = GameObject.Find("ifdStartTime").GetComponent<InputField>();
        _ifdVolume = GameObject.Find("ifdVolume").GetComponent<InputField>();
        _ifdPosition = GameObject.Find("ifdPosition").GetComponent<InputField>();
        _tgeAutoplay = GameObject.Find("tgeAutoplay").GetComponent<Toggle>();
        _tgeLoop = GameObject.Find("tgeLoop").GetComponent<Toggle>();
        _tgeObeyMuteSwitch = GameObject.Find("tgeObeyMuteSwitch").GetComponent<Toggle>();
        _textAudioAttribute = GameObject.Find("textAudioAttribute").GetComponent<Text>();
    }

    // Update is called once per frame
    void Update()
    {
       
    }

    public void OnBackClick()
    {
        _innerAudioContext?.Destroy();
        SceneManager.LoadScene("MainScene");
    }

    private void ResetTextAudioAttribute()
    {
        _textAudioAttribute.text = "";
    }

    public void TestCreateInnerAudioContext()
    {
        Debug.Log("InnerAudioContext TestCreateInnerAudioContext.");
        string src = _ifdSrc.text;
        string startTime = _ifdStartTime.text;
        string volume = _ifdVolume.text;
        bool autoplay = _tgeAutoplay.isOn;
        bool loop = _tgeLoop.isOn;
        bool obeyMuteSwitch = _tgeObeyMuteSwitch.isOn;
        _innerAudioContext = QG.CreateInnerAudioContext();
        _innerAudioContext.Src = src;
        _innerAudioContext.Autoplay = autoplay;
        _innerAudioContext.Loop = loop;
        _innerAudioContext.StartTime = string.IsNullOrEmpty(startTime) ? 0 : float.Parse(startTime);
        _innerAudioContext.Volume = string.IsNullOrEmpty(volume) ? 1 : float.Parse(volume);
        _innerAudioContext.ObeyMuteSwitch = obeyMuteSwitch;
        Debug.Log("TestCreateInnerAudioContext Src." + _innerAudioContext.Src);
        Debug.Log("InnerAudioContext StartTime." + _innerAudioContext.StartTime);
        Debug.Log("InnerAudioContext Autoplay." + _innerAudioContext.Autoplay);
        Debug.Log("InnerAudioContext Loop." + _innerAudioContext.Loop);
        Debug.Log("InnerAudioContext ObeyMuteSwitch." + _innerAudioContext.ObeyMuteSwitch);
        Debug.Log("InnerAudioContext Volume." + _innerAudioContext.Volume);
        Debug.Log("InnerAudioContext Duration." + _innerAudioContext.Duration);
        Debug.Log("InnerAudioContext CurrentTime." + _innerAudioContext.CurrentTime);
        Debug.Log("InnerAudioContext Paused." + _innerAudioContext.Paused);
        Debug.Log("InnerAudioContext Buffered." + _innerAudioContext.Buffered);
    }

    public void TestGetSrc()
    {
        ResetTextAudioAttribute();
        _textAudioAttribute.text = "Src: " + _innerAudioContext.Src;
    }
    
    public void TestGetStartTime()
    {
        ResetTextAudioAttribute();
        _textAudioAttribute.text = "StartTime: " + _innerAudioContext.StartTime;
    }
    
    public void TestGetAutoplay()
    {
        ResetTextAudioAttribute();
        _textAudioAttribute.text = "Autoplay: " + _innerAudioContext.Autoplay;
    }
    
    public void TestGetLoop()
    {
        ResetTextAudioAttribute();
        _textAudioAttribute.text = "Loop: " + _innerAudioContext.Loop;
    }
    
    public void TestGetObeyMuteSwitch()
    {
        ResetTextAudioAttribute();
        _textAudioAttribute.text = "ObeyMuteSwitch: " + _innerAudioContext.ObeyMuteSwitch;
    }
    
    public void TestGetVolume()
    {
        ResetTextAudioAttribute();
        _textAudioAttribute.text = "Volume: " + _innerAudioContext.Volume;
    }
    
    public void TestGetDuration()
    {
        ResetTextAudioAttribute();
        _textAudioAttribute.text = "Duration: " + _innerAudioContext.Duration;
    }
    
    public void TestGetCurrentTime()
    {
        ResetTextAudioAttribute();
        _textAudioAttribute.text = "CurrentTime: " + _innerAudioContext.CurrentTime;
    }
    
    public void TestGetPaused()
    {
        ResetTextAudioAttribute();
        _textAudioAttribute.text = "Paused: " + _innerAudioContext.Paused;
    }
    
    public void TestGetBuffered()
    {
        ResetTextAudioAttribute();
        _textAudioAttribute.text = "Buffered: " + _innerAudioContext.Buffered;
    }

    public void TestPlay()
    {
        Debug.Log("InnerAudioContext TestPlay.");
        _innerAudioContext?.Play();
    }

    public void TestPause()
    {
        Debug.Log("InnerAudioContext TestPause.");
        _innerAudioContext?.Pause();
    }

    public void TestStop()
    {
        Debug.Log("InnerAudioContext TestStop.");
        _innerAudioContext?.Stop();
    }

    public void TestSeek()
    {
        Debug.Log("InnerAudioContext TestSeek.");
        string position = _ifdPosition.text;
        _innerAudioContext?.Seek(float.Parse(position));
    }

    public void TestOnPlay()
    {
        Debug.Log("InnerAudioContext TestOnPlay.");
        _innerAudioContext?.OnPlay(() => { Debug.Log("InnerAudioContext OnPlay."); });
    }

    public void TestOffPlay()
    {
        Debug.Log("InnerAudioContext TestOffPlay.");
        _innerAudioContext?.OffPlay();
    }

    public void TestOnPause()
    {
        Debug.Log("InnerAudioContext TestOnPause.");
        _innerAudioContext?.OnPause(() => { Debug.Log("InnerAudioContext OnPause."); });
    }

    public void TestOffPause()
    {
        Debug.Log("InnerAudioContext TestOffPause.");
        _innerAudioContext?.OffPause();
    }

    public void TestOnStop()
    {
        Debug.Log("InnerAudioContext TestOnStop.");
        _innerAudioContext?.OnStop(() => { Debug.Log("InnerAudioContext OnStop."); });
    }

    public void TestOffStop()
    {
        Debug.Log("InnerAudioContext TestOffStop.");
        _innerAudioContext?.OffStop();
    }

    public void TestOnCanPlay()
    {
        Debug.Log("InnerAudioContext TestOnCanPlay.");
        _innerAudioContext?.OnCanPlay(() => { Debug.Log("InnerAudioContext OnCanPlay."); });
    }

    public void TestOffCanPlay()
    {
        Debug.Log("InnerAudioContext TestOffCanPlay.");
        _innerAudioContext?.OffCanPlay();
    }

    public void TestOnWaiting()
    {
        Debug.Log("InnerAudioContext TestOnWaiting.");
        _innerAudioContext?.OnWaiting(() => { Debug.Log("InnerAudioContext OnWaiting."); });
    }

    public void TestOffWaiting()
    {
        Debug.Log("InnerAudioContext TestOffWaiting.");
        _innerAudioContext?.OffWaiting();
    }

    public void TestOnEnded()
    {
        Debug.Log("InnerAudioContext TestOnEnded.");
        _innerAudioContext?.OnEnded(() => { Debug.Log("InnerAudioContext OnEnded."); });
    }

    public void TestOffEnded()
    {
        Debug.Log("InnerAudioContext TestOffEnded.");
        _innerAudioContext?.OffEnded();
    }

    public void TestOnSeeking()
    {
        Debug.Log("InnerAudioContext TestOnSeeking.");
        _innerAudioContext?.OnSeeking(() => { Debug.Log("InnerAudioContext OnSeeking."); });
    }

    public void TestOffSeeking()
    {
        Debug.Log("InnerAudioContext TestOffSeeking.");
        _innerAudioContext?.OffSeeking();
    }

    public void TestOnSeeked()
    {
        Debug.Log("InnerAudioContext TestOnSeeked.");
        _innerAudioContext?.OnSeeked(() => { Debug.Log("InnerAudioContext OnSeeked."); });
    }

    public void TestOffSeeked()
    {
        Debug.Log("InnerAudioContext TestOffSeeked.");
        _innerAudioContext?.OffSeeked();
    }

    public void TestOnError()
    {
        Debug.Log("InnerAudioContext TestOnError.");
        _innerAudioContext?.OnError(
            (res) => { Debug.Log("InnerAudioContext TestOnError errCode: " + res.errCode); }
        );
    }

    public void TestOffError()
    {
        Debug.Log("InnerAudioContext TestOffError.");
        _innerAudioContext?.OffError();
    }

    public void TestDestroy()
    {
        Debug.Log("InnerAudioContext TestDestroy.");
        _innerAudioContext?.Destroy();
        _innerAudioContext = null;
    }
}