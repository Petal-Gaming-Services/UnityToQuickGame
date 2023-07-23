using HWWASM;
using UnityEngine;
using UnityEngine.SceneManagement;
using UnityEngine.UI;

public class AccountScene : MonoBehaviour
{
    private Text _txtLoginStatus;

    // Start is called before the first frame update
    void Start()
    {
        _txtLoginStatus = GameObject.Find("txtLoginStatus").GetComponent<Text>();
    }

    // Update is called once per frame
    void Update()
    {
    }

    public void OnBackClick()
    {
        SceneManager.LoadScene("MainScene");
    }

    public void GameLogin()
    {
        Debug.Log("GameLogin");
        GameLoginOption gameLoginOption = new GameLoginOption
        {
            forceLogin = 1,
            appid = "103***5",
            success = res =>
            {
                Debug.Log("GameLogin success playerId: " + res.playerId + ", displayName: " + res.displayName +
                          ", playerLevel: " + res.playerLevel + ", isAuth: " + res.isAuth + ", ts: " + res.ts +
                          ", gameAuthSign: " + res.gameAuthSign + ", hiResImageUri: " + res.hiResImageUri +
                          ", imageUri: " + res.imageUri);
            },
            fail = res =>
            {
                Debug.Log("GameLogin fail data: " + res.data + ", code: " + res.code);
                //根据状态码处理游戏的逻辑。
                //状态码为7004或者2012，表示玩家取消登录。
                //此时，建议返回游戏界面，可以让玩家重新进行登录操作。
                if (res.code == 7004 || res.code == 2012)
                {
                    Debug.Log("玩家取消登录，返回游戏界面让玩家重新登录。");
                }

                //状态码为7021表示玩家取消实名认证。
                //在中国大陆的情况下，此时需要禁止玩家进入游戏。
                if (res.code == 7021)
                {
                    Debug.Log(
                        "The player has canceled identity verification. Forbid the player from entering the game.");
                }
            },
        };
        QG.GameLogin(gameLoginOption);
    }
}