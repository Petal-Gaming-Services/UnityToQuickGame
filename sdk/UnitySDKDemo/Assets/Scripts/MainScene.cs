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
}