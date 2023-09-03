using UnityEngine;
using UnityEngine.SceneManagement;

public class MainScene : MonoBehaviour
{
    // Start is called before the first frame update
    void Start()
    {
    }

    // Update is called once per frame
    void Update()
    {
    }

    public void OnAccountClick()
    {
        SceneManager.LoadScene("AccountScene");
    }

    public void OnRewardedVideoAdClick()
    {
        SceneManager.LoadScene("RewardedVideoAdScene");
    }

    public void OnPayClick()
    {
        SceneManager.LoadScene("PayScene");
    }

    public void OnKeyboardClick()
    {
        SceneManager.LoadScene("KeyboardScene");
    }

    public void OnLocalStorageClick()
    {
        SceneManager.LoadScene("LocalStorageScene");
    }

    public void OnPlayerPrefsClick()
    {
        SceneManager.LoadScene("PlayerPrefsScene");
    }

    public void OnFrameRateClick()
    {
        SceneManager.LoadScene("FrameRateScene");
    }
}