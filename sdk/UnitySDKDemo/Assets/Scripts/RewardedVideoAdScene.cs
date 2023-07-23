using HWWASM;
using UnityEngine;
using UnityEngine.SceneManagement;

public class RewardedVideoAdScene : MonoBehaviour
{
    // Start is called before the first frame update
    void Start()
    {
    }

    // Update is called once per frame
    void Update()
    {
    }

    public void OnBackClick()
    {
        SceneManager.LoadScene("MainScene");
    }

    //预加载操作激励视频，创建视频对象，加载视频load，监听调用onload，监听关闭onclose
    private RewardedVideoAd rewardedVideoAd;

    public void ReLoadVideo()
    {
        CreateRewardedVideoAdOption option = new CreateRewardedVideoAdOption
        {
            adUnitId = "testx9dtjwj8hp",
            success = res => { Debug.Log("CreateRewardedVideoAd success"); },
            fail = res => { Debug.Log("CreateRewardedVideoAd fail data: " + res.data + ", code: " + res.code); },
            complete = () => { Debug.Log("CreateRewardedVideoAd complete"); }
        };
        rewardedVideoAd = QG.CreateRewardedVideoAd(option);
        rewardedVideoAd.OnLoad(() => { Debug.Log("ad loaded."); });
        rewardedVideoAd.OnError((e) => { Debug.Log("load ad error errCode: " + e.errCode + ", errMsg: " + e.errMsg); });
        rewardedVideoAd.OnClose((res) =>
        {
            Debug.Log("ad onClose isEnded: " + res.isEnded);
            if (res.isEnded)
            {
                Debug.Log("播放激励视频结束，给予奖励");
            }
            else
            {
                Debug.Log("播放没结束，不给予奖励");
            }
        });
        rewardedVideoAd.Load();
    }

    //由于激励广告要求预加载，可在进入游戏时立即触发上述逻辑。在onLoad触发成功回调时，可以展示视频广告组件。
    //玩家每次点击视频按钮时调用rewardedVideoAd.Show()播放广告。在播放期间或者关闭视频前调用rewardedVideoAd.Load()请求下一次广告
    public void RequestRewardAd()
    {
        rewardedVideoAd.Show();
        rewardedVideoAd.Load();
    }
}