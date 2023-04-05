using UnityEngine;
using UnityEngine.SceneManagement;
using UnityEngine.UI;
using System;
using CRWASM;

public class AccountScene : MonoBehaviour
{
    private Text _txtLoginResult = null;
    private void Awake()
    {
        RT.Init();
    }

    // Use this for initialization
    private void Start()
    {
        _txtLoginResult = GameObject.Find("textLoginStatus").GetComponent<Text>();

    }

    public void onBackClick()
    {
        SceneManager.LoadScene("MainScene");
    }
    public void onGameLoginClick()
    {
        RT.GameLogin(
            1,
            "105692913",
            (RTLoginStatus res) =>
            {
                Debug.Log("on GameLogin: success");
                _txtLoginResult.text = "登录成功" +
                "\n playerId:" + res.playerId + 
                "\n displayName: " + res.displayName +
                "\n playerLevel: " + res.playerLevel +
                "\n isAuth: " + res.isAuth +
                "\n ts: " + res.ts +
                "\n gameAuthSign: " + res.gameAuthSign;

            },
            (RTLoginStatus res) =>
            {
                Debug.Log("on GameLogin: fail" + " data: " + res.data + "\n code: " + res.code);
                _txtLoginResult.text = "登录失败, " + "data: " + res.data + "\n code: " + res.code;
            },
            () => { Debug.Log("on GameLogin: complete"); }
        );
    }
}