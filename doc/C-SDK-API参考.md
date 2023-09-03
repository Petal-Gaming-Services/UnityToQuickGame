# C\# SDK API参考<a name="ZH-CN_TOPIC_0000001595319586"></a>

-   [帐号](#section9858153414811)
    -   [GameLogin\(GameLoginOption gameLoginOption\)\(1070+\)](#section188811956609)

-   [支付](#section19618190118)
    -   [IsEnvReady\(IsEnvReadyOption isEnvReadyOption\)\(1103+\)](#section154996918335)
    -   [IsSandboxActivated\(IsSandboxActivatedOption isSandboxActivatedOption\)\(1103+\)](#section95831230133715)
    -   [ObtainOwnedPurchases\(ObtainOwnedPurchasesOption obtainOwnedPurchasesOption\)\(1103+\)](#section155052321436)
    -   [ObtainProductInfo\(ObtainProductInfoOption obtainProductInfoOption\)\(1103+\)](#section15871165154311)
    -   [CreatePurchaseIntent\(CreatePurchaseIntentOption createPurchaseIntentOption\)\(1103+\)](#section515110599437)
    -   [ConsumeOwnedPurchase\(ConsumeOwnedPurchaseOption consumeOwnedPurchaseOption\)\(1103+\)](#section20910454444)
    -   [ObtainOwnedPurchaseRecord\(ObtainOwnedPurchaseRecordOption obtainOwnedPurchaseRecordOption\)\(1103+\)](#section12911414124411)
    -   [StartIapActivity\(StartIapActivityOption startIapActivityOption\)\(1103+\)](#section287142113449)
    -   [错误码](#section0935245195318)

-   [激励视频广告](#section5728122526)
    -   [CreateRewardedVideoAd\(CreateRewardedVideoAdOption createRewardedVideoAdOption\)](#section13878271210)
    -   [RewardedVideoAd.Load\(\)](#section19572164142515)
    -   [RewardedVideoAd.Show\(\)](#section20692740182817)
    -   [RewardedVideoAd.OnLoad\(Action callback\)](#section209021742162914)
    -   [RewardedVideoAd.OffLoad\(\)](#section167341133133018)
    -   [RewardedVideoAd.OnClose\(Action< RewardedVideoAdCloseResult \> callback\)](#section075011393305)
    -   [RewardedVideoAd.OffClose\(\)](#section16606134583017)
    -   [RewardedVideoAd.OnError\(Action< AdErrorResult \> callback\)](#section119501653173011)
    -   [RewardedVideoAd.OffError\(\)](#section6598558173013)
    -   [RewardedVideoAd.SetTagForChildProtection\(int childProtection\)](#section145098563115)
    -   [RewardedVideoAd.SetTagForUnderAgeOfPromise\(int underAgeOfPromiseStr\)](#section15967121010318)
    -   [RewardedVideoAd.SetAdContentClassification\(string adContentClassification\)](#section161829123117)
    -   [RewardedVideoAd.SetNonPersonalizedAd\(int personalizedAd\)](#section1830923403118)
    -   [RewardedVideoAd.Destroy\(\)](#section59891439183110)


## 帐号<a name="section9858153414811"></a>

<a name="table46651241195814"></a>
<table><thead align="left"><tr id="row106661541205818"><th class="cellrowborder" valign="top" width="50%" id="mcps1.1.3.1.1"><p id="p96661941195810"><a name="p96661941195810"></a><a name="p96661941195810"></a>接口</p>
</th>
<th class="cellrowborder" valign="top" width="50%" id="mcps1.1.3.1.2"><p id="p146661641195815"><a name="p146661641195815"></a><a name="p146661641195815"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="row10666741105812"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.1 "><p id="p14493345175811"><a name="p14493345175811"></a><a name="p14493345175811"></a><a href="#section188811956609">GameLogin(GameLoginOption gameLoginOption)(1070+)</a></p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.2 "><p id="p18493194514586"><a name="p18493194514586"></a><a name="p18493194514586"></a>快游戏防沉迷登录。</p>
</td>
</tr>
</tbody>
</table>

### GameLogin\(GameLoginOption gameLoginOption\)\(1070+\)<a name="section188811956609"></a>

-   描述

    快游戏防沉迷登录。

-   请求参数

    <a name="table14547721105"></a>
    <table><thead align="left"><tr id="row0548122114013"><th class="cellrowborder" valign="top" width="20%" id="mcps1.1.5.1.1"><p id="p175489211005"><a name="p175489211005"></a><a name="p175489211005"></a>参数</p>
    </th>
    <th class="cellrowborder" valign="top" width="25%" id="mcps1.1.5.1.2"><p id="p25481921300"><a name="p25481921300"></a><a name="p25481921300"></a>类型</p>
    </th>
    <th class="cellrowborder" valign="top" width="15%" id="mcps1.1.5.1.3"><p id="p145481821904"><a name="p145481821904"></a><a name="p145481821904"></a>必填(M)/选填(O)</p>
    </th>
    <th class="cellrowborder" valign="top" width="40%" id="mcps1.1.5.1.4"><p id="p11548192113020"><a name="p11548192113020"></a><a name="p11548192113020"></a>说明</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row1654816210013"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.5.1.1 "><p id="p8956222449"><a name="p8956222449"></a><a name="p8956222449"></a>forceLogin</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.2 "><p id="p159561622545"><a name="p159561622545"></a><a name="p159561622545"></a>int</p>
    </td>
    <td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.5.1.3 "><p id="p79558221247"><a name="p79558221247"></a><a name="p79558221247"></a>M</p>
    </td>
    <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p2094513231732"><a name="p2094513231732"></a><a name="p2094513231732"></a>玩家未登录华为帐号、或鉴权失败时，是否会拉起登录场景：</p>
    <a name="ul2977172195418"></a><a name="ul2977172195418"></a><ul id="ul2977172195418"><li>0：不会主动拉起帐号登录场景，适用于单机游戏的登录场景。</li><li>1：会主动拉起帐号登录场景，适用于网游的登录场景、或单机游戏支付前强制登录场景。</li></ul>
    </td>
    </tr>
    <tr id="row1354932119019"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.5.1.1 "><p id="p18953172212419"><a name="p18953172212419"></a><a name="p18953172212419"></a>appid</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.2 "><p id="p19521221443"><a name="p19521221443"></a><a name="p19521221443"></a>string</p>
    </td>
    <td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.5.1.3 "><p id="p1952822748"><a name="p1952822748"></a><a name="p1952822748"></a>M</p>
    </td>
    <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p89512229417"><a name="p89512229417"></a><a name="p89512229417"></a>快游戏APP ID，在华为开发者联盟上创建快游戏后分配的唯一标识。</p>
    </td>
    </tr>
    <tr id="row254915212006"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.5.1.1 "><p id="p1950142211413"><a name="p1950142211413"></a><a name="p1950142211413"></a>success</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.2 "><p id="p49501221842"><a name="p49501221842"></a><a name="p49501221842"></a>Action&lt;<a href="#li775075785920">LoginSuccessResult</a>&gt;</p>
    </td>
    <td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.5.1.3 "><p id="p35451314555"><a name="p35451314555"></a><a name="p35451314555"></a>O</p>
    </td>
    <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p109491225414"><a name="p109491225414"></a><a name="p109491225414"></a>接口调用成功的回调函数。</p>
    </td>
    </tr>
    <tr id="row754912211504"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.5.1.1 "><p id="p119481022445"><a name="p119481022445"></a><a name="p119481022445"></a>fail</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.2 "><p id="p149486221847"><a name="p149486221847"></a><a name="p149486221847"></a>Action&lt;<a href="#li3925836248">LoginFailResult</a>&gt;</p>
    </td>
    <td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.5.1.3 "><p id="p155452316555"><a name="p155452316555"></a><a name="p155452316555"></a>O</p>
    </td>
    <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p1194652217418"><a name="p1194652217418"></a><a name="p1194652217418"></a>接口调用失败的回调函数。</p>
    </td>
    </tr>
    <tr id="row8550321403"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.5.1.1 "><p id="p1594620225412"><a name="p1594620225412"></a><a name="p1594620225412"></a>complete</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.2 "><p id="p394510221441"><a name="p394510221441"></a><a name="p394510221441"></a>Action</p>
    </td>
    <td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.5.1.3 "><p id="p1952315313552"><a name="p1952315313552"></a><a name="p1952315313552"></a>O</p>
    </td>
    <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p49222221445"><a name="p49222221445"></a><a name="p49222221445"></a>接口成功、失败均会调用的回调函数。</p>
    </td>
    </tr>
    </tbody>
    </table>

-   <a name="li775075785920"></a>LoginSuccessResult参数

    <a name="table6702115111211"></a>
    <table><thead align="left"><tr id="row11703125115212"><th class="cellrowborder" valign="top" width="25%" id="mcps1.1.4.1.1"><p id="p32768371310"><a name="p32768371310"></a><a name="p32768371310"></a>参数</p>
    </th>
    <th class="cellrowborder" valign="top" width="25%" id="mcps1.1.4.1.2"><p id="p72760371338"><a name="p72760371338"></a><a name="p72760371338"></a>类型</p>
    </th>
    <th class="cellrowborder" valign="top" width="50%" id="mcps1.1.4.1.3"><p id="p16277837035"><a name="p16277837035"></a><a name="p16277837035"></a>说明</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row57037517211"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p0703251425"><a name="p0703251425"></a><a name="p0703251425"></a>playerId</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p12703751924"><a name="p12703751924"></a><a name="p12703751924"></a>string</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p9703195119219"><a name="p9703195119219"></a><a name="p9703195119219"></a>帐号ID，若游戏不需要华为帐号的登录结果进行鉴权，那么当返回playgerId的时候就可以使用该值进入游戏。</p>
    </td>
    </tr>
    <tr id="row8703551728"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p197033517213"><a name="p197033517213"></a><a name="p197033517213"></a>displayName</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p10393932017"><a name="p10393932017"></a><a name="p10393932017"></a>string</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p16704165114217"><a name="p16704165114217"></a><a name="p16704165114217"></a>用户昵称。</p>
    </td>
    </tr>
    <tr id="row770435113216"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p1170420511426"><a name="p1170420511426"></a><a name="p1170420511426"></a>playerLevel</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p47049511728"><a name="p47049511728"></a><a name="p47049511728"></a>int</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p137048511429"><a name="p137048511429"></a><a name="p137048511429"></a>玩家等级。</p>
    </td>
    </tr>
    <tr id="row167045518210"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p1070413511823"><a name="p1070413511823"></a><a name="p1070413511823"></a>isAuth</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p9704251622"><a name="p9704251622"></a><a name="p9704251622"></a>int</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p117041551425"><a name="p117041551425"></a><a name="p117041551425"></a>若isAuth为1时，应用需要校验返回的参数鉴权签名。</p>
    </td>
    </tr>
    <tr id="row13704651124"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p1670419511323"><a name="p1670419511323"></a><a name="p1670419511323"></a>ts</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p127041151829"><a name="p127041151829"></a><a name="p127041151829"></a>string</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p1370410512212"><a name="p1370410512212"></a><a name="p1370410512212"></a>时间戳，用于鉴权签名校验。</p>
    </td>
    </tr>
    <tr id="row147044515212"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p13704175110219"><a name="p13704175110219"></a><a name="p13704175110219"></a>gameAuthSign</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p19704151128"><a name="p19704151128"></a><a name="p19704151128"></a>string</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p17704751525"><a name="p17704751525"></a><a name="p17704751525"></a>鉴权签名。</p>
    </td>
    </tr>
    <tr id="row9704195120216"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p1079522615510"><a name="p1079522615510"></a><a name="p1079522615510"></a>hiResImageUri</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p1370417511024"><a name="p1370417511024"></a><a name="p1370417511024"></a>string</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p57051451220"><a name="p57051451220"></a><a name="p57051451220"></a>高清头像链接。若没有则为空字符串。</p>
    </td>
    </tr>
    <tr id="row1080363516519"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p280363514516"><a name="p280363514516"></a><a name="p280363514516"></a>imageUri</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p1080323518511"><a name="p1080323518511"></a><a name="p1080323518511"></a>string</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p1580318352516"><a name="p1580318352516"></a><a name="p1580318352516"></a>头像链接。若没有则为空字符串。</p>
    </td>
    </tr>
    </tbody>
    </table>

-   <a name="li3925836248"></a>LoginFailResult参数

    <a name="table15925153612410"></a>
    <table><thead align="left"><tr id="row49269361146"><th class="cellrowborder" valign="top" width="25%" id="mcps1.1.4.1.1"><p id="p6926203616418"><a name="p6926203616418"></a><a name="p6926203616418"></a>参数</p>
    </th>
    <th class="cellrowborder" valign="top" width="25%" id="mcps1.1.4.1.2"><p id="p9926163615415"><a name="p9926163615415"></a><a name="p9926163615415"></a>类型</p>
    </th>
    <th class="cellrowborder" valign="top" width="50%" id="mcps1.1.4.1.3"><p id="p199267362417"><a name="p199267362417"></a><a name="p199267362417"></a>说明</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row792610361444"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p1192663616413"><a name="p1192663616413"></a><a name="p1192663616413"></a>code</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p5926173610410"><a name="p5926173610410"></a><a name="p5926173610410"></a>int</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p738594517361"><a name="p738594517361"></a><a name="p738594517361"></a><a href="#li168459561140">错误码</a>。</p>
    </td>
    </tr>
    <tr id="row189262361146"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p392617368410"><a name="p392617368410"></a><a name="p392617368410"></a>data</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p792617369413"><a name="p792617369413"></a><a name="p792617369413"></a>string</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p638517453361"><a name="p638517453361"></a><a name="p638517453361"></a>错误码描述信息。</p>
    </td>
    </tr>
    </tbody>
    </table>

-   <a name="li168459561140"></a>错误码

    <a name="table12151107550"></a>
    <table><thead align="left"><tr id="row121522076515"><th class="cellrowborder" valign="top" width="50%" id="mcps1.1.3.1.1"><p id="p171521710510"><a name="p171521710510"></a><a name="p171521710510"></a>类型</p>
    </th>
    <th class="cellrowborder" valign="top" width="50%" id="mcps1.1.3.1.2"><p id="p715212718511"><a name="p715212718511"></a><a name="p715212718511"></a>说明</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row5152187852"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.1 "><p id="p43881331154"><a name="p43881331154"></a><a name="p43881331154"></a>通用错误码</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.2 "><p id="p113891331857"><a name="p113891331857"></a><a name="p113891331857"></a>参见“<a href="https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-error-code" target="_blank" rel="noopener noreferrer">通用错误码</a>”。</p>
    </td>
    </tr>
    <tr id="row1217202915384"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.1 "><p id="p1238919317512"><a name="p1238919317512"></a><a name="p1238919317512"></a>业务错误码</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.2 "><p id="p13895311453"><a name="p13895311453"></a><a name="p13895311453"></a>参见“<a href="https://developer.huawei.com/consumer/cn/doc/development/HMS-References/game-return-code-v4" target="_blank" rel="noopener noreferrer">游戏错误码</a>”和“<a href="https://developer.huawei.com/consumer/cn/doc/development/HMS-References/account-error-code" target="_blank" rel="noopener noreferrer">帐号错误码</a>”。</p>
    </td>
    </tr>
    </tbody>
    </table>

-   示例代码

    ```
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
    ```


## 支付<a name="section19618190118"></a>

<a name="table39452381592"></a>
<table><thead align="left"><tr id="row189467381693"><th class="cellrowborder" valign="top" width="50%" id="mcps1.1.3.1.1"><p id="p494693817918"><a name="p494693817918"></a><a name="p494693817918"></a>接口</p>
</th>
<th class="cellrowborder" valign="top" width="50%" id="mcps1.1.3.1.2"><p id="p17946138292"><a name="p17946138292"></a><a name="p17946138292"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="row495118381915"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.1 "><p id="p35790179494"><a name="p35790179494"></a><a name="p35790179494"></a><a href="#section154996918335">IsEnvReady(IsEnvReadyOption isEnvReadyOption)(1103+)</a></p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.2 "><p id="p1038852916110"><a name="p1038852916110"></a><a name="p1038852916110"></a>判断当前华为帐号所属国家或地区是否支持华为IAP支付。</p>
</td>
</tr>
<tr id="row16951138394"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.1 "><p id="p1357812173497"><a name="p1357812173497"></a><a name="p1357812173497"></a><a href="#section95831230133715">IsSandboxActivated(IsSandboxActivatedOption isSandboxActivatedOption)(1103+)</a></p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.2 "><p id="p1957634812313"><a name="p1957634812313"></a><a name="p1957634812313"></a>判断华为帐号和快游戏RPK版本是否满足沙盒条件。</p>
</td>
</tr>
<tr id="row69517381199"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.1 "><p id="p05771217164920"><a name="p05771217164920"></a><a name="p05771217164920"></a><a href="#section155052321436">ObtainOwnedPurchases(ObtainOwnedPurchasesOption obtainOwnedPurchasesOption)(1103+)</a></p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.2 "><p id="p11284231586"><a name="p11284231586"></a><a name="p11284231586"></a>查询用户的已购买数据，包括消耗型商品、非消耗型商品和订阅类商品。</p>
</td>
</tr>
<tr id="row19515381591"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.1 "><p id="p11576181744916"><a name="p11576181744916"></a><a name="p11576181744916"></a><a href="#section15871165154311">ObtainProductInfo(ObtainProductInfoOption obtainProductInfoOption)(1103+)</a></p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.2 "><p id="p197492216616"><a name="p197492216616"></a><a name="p197492216616"></a>查询在AGC控制台配置的商品详情。</p>
</td>
</tr>
<tr id="row795213819916"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.1 "><p id="p1857511175496"><a name="p1857511175496"></a><a name="p1857511175496"></a><a href="#section515110599437">CreatePurchaseIntent(CreatePurchaseIntentOption createPurchaseIntentOption)(1103+)</a></p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.2 "><p id="p1836132171313"><a name="p1836132171313"></a><a name="p1836132171313"></a>创建在AGC控制台配置的商品购买订单，支持购买消耗型商品、非消耗型商品、订阅类商品。</p>
</td>
</tr>
<tr id="row8952038193"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.1 "><p id="p165741717134913"><a name="p165741717134913"></a><a name="p165741717134913"></a><a href="#section20910454444">ConsumeOwnedPurchase(ConsumeOwnedPurchaseOption consumeOwnedPurchaseOption)(1103+)</a></p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.2 "><p id="p4980125675"><a name="p4980125675"></a><a name="p4980125675"></a>消耗已支付成功的消耗型商品。</p>
</td>
</tr>
<tr id="row895218389918"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.1 "><p id="p19573121716491"><a name="p19573121716491"></a><a name="p19573121716491"></a><a href="#section12911414124411">ObtainOwnedPurchaseRecord(ObtainOwnedPurchaseRecordOption obtainOwnedPurchaseRecordOption)(1103+)</a></p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.2 "><p id="p9777122412818"><a name="p9777122412818"></a><a name="p9777122412818"></a>查询消耗型商品的历史消耗商品信息或订阅类商品的订阅收据。</p>
</td>
</tr>
<tr id="row159521538498"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.1 "><p id="p14572141714917"><a name="p14572141714917"></a><a name="p14572141714917"></a><a href="#section287142113449">StartIapActivity(StartIapActivityOption startIapActivityOption)(1103+)</a></p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.2 "><p id="p1222817245920"><a name="p1222817245920"></a><a name="p1222817245920"></a>打开华为应用内支付相关页面。</p>
</td>
</tr>
</tbody>
</table>

### IsEnvReady\(IsEnvReadyOption isEnvReadyOption\)\(1103+\)<a name="section154996918335"></a>

-   描述

    通过该接口可以判断当前华为帐号所在的服务国家/地区是否支持IAP支付。

-   请求参数

    <a name="table1849914993314"></a>
    <table><thead align="left"><tr id="row1049917993316"><th class="cellrowborder" valign="top" width="20%" id="mcps1.1.5.1.1"><p id="p20499179173313"><a name="p20499179173313"></a><a name="p20499179173313"></a>参数</p>
    </th>
    <th class="cellrowborder" valign="top" width="25%" id="mcps1.1.5.1.2"><p id="p124991198334"><a name="p124991198334"></a><a name="p124991198334"></a>类型</p>
    </th>
    <th class="cellrowborder" valign="top" width="15%" id="mcps1.1.5.1.3"><p id="p6499179153319"><a name="p6499179153319"></a><a name="p6499179153319"></a>必填(M)/选填(O)</p>
    </th>
    <th class="cellrowborder" valign="top" width="40%" id="mcps1.1.5.1.4"><p id="p84991293337"><a name="p84991293337"></a><a name="p84991293337"></a>说明</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row44997917336"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.5.1.1 "><p id="p4367227183420"><a name="p4367227183420"></a><a name="p4367227183420"></a>applicationID</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.2 "><p id="p193666273342"><a name="p193666273342"></a><a name="p193666273342"></a>string</p>
    </td>
    <td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.5.1.3 "><p id="p20365227153418"><a name="p20365227153418"></a><a name="p20365227153418"></a>M</p>
    </td>
    <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p136522713414"><a name="p136522713414"></a><a name="p136522713414"></a>快游戏APP ID，在华为开发者联盟上创建快游戏后分配的唯一标识。</p>
    </td>
    </tr>
    <tr id="row125009983313"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.5.1.1 "><p id="p950011913317"><a name="p950011913317"></a><a name="p950011913317"></a>success</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.2 "><p id="p6660027143215"><a name="p6660027143215"></a><a name="p6660027143215"></a>Action&lt;<a href="#li5501599332">IsEnvReadySuccessResult</a>&gt;</p>
    </td>
    <td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.5.1.3 "><p id="p5500109173314"><a name="p5500109173314"></a><a name="p5500109173314"></a>O</p>
    </td>
    <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p1250013983319"><a name="p1250013983319"></a><a name="p1250013983319"></a>接口调用成功的回调函数。</p>
    </td>
    </tr>
    <tr id="row7500179103319"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.5.1.1 "><p id="p95008983317"><a name="p95008983317"></a><a name="p95008983317"></a>fail</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.2 "><p id="p165001095334"><a name="p165001095334"></a><a name="p165001095334"></a>Action&lt;<a href="#li050311963316">IsEnvReadyFailResult</a>&gt;</p>
    </td>
    <td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.5.1.3 "><p id="p20500159143314"><a name="p20500159143314"></a><a name="p20500159143314"></a>O</p>
    </td>
    <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p16500129153315"><a name="p16500129153315"></a><a name="p16500129153315"></a>接口调用失败的回调函数。</p>
    </td>
    </tr>
    <tr id="row95001992338"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.5.1.1 "><p id="p19500129183320"><a name="p19500129183320"></a><a name="p19500129183320"></a>complete</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.2 "><p id="p155005918335"><a name="p155005918335"></a><a name="p155005918335"></a>Action</p>
    </td>
    <td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.5.1.3 "><p id="p650012933316"><a name="p650012933316"></a><a name="p650012933316"></a>O</p>
    </td>
    <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p35006918333"><a name="p35006918333"></a><a name="p35006918333"></a>接口成功、失败均会调用的回调函数。</p>
    </td>
    </tr>
    </tbody>
    </table>

-   <a name="li5501599332"></a>IsEnvReadySuccessResult参数

    <a name="table105011913314"></a>
    <table><thead align="left"><tr id="row155018923315"><th class="cellrowborder" valign="top" width="25%" id="mcps1.1.4.1.1"><p id="p250115911339"><a name="p250115911339"></a><a name="p250115911339"></a>参数</p>
    </th>
    <th class="cellrowborder" valign="top" width="25%" id="mcps1.1.4.1.2"><p id="p17501391337"><a name="p17501391337"></a><a name="p17501391337"></a>类型</p>
    </th>
    <th class="cellrowborder" valign="top" width="50%" id="mcps1.1.4.1.3"><p id="p11501179163316"><a name="p11501179163316"></a><a name="p11501179163316"></a>说明</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row55014920339"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p66765503356"><a name="p66765503356"></a><a name="p66765503356"></a>returnCode</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p18675175023518"><a name="p18675175023518"></a><a name="p18675175023518"></a>int</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p1267405063518"><a name="p1267405063518"></a><a name="p1267405063518"></a>成功返回码。若当前用户的华为帐号支持IAP支付，则返回值0。</p>
    </td>
    </tr>
    </tbody>
    </table>

-   <a name="li050311963316"></a>IsEnvReadyFailResult参数

    <a name="table12503593336"></a>
    <table><thead align="left"><tr id="row1850311953314"><th class="cellrowborder" valign="top" width="25%" id="mcps1.1.4.1.1"><p id="p165031910334"><a name="p165031910334"></a><a name="p165031910334"></a>参数</p>
    </th>
    <th class="cellrowborder" valign="top" width="25%" id="mcps1.1.4.1.2"><p id="p1850313915334"><a name="p1850313915334"></a><a name="p1850313915334"></a>类型</p>
    </th>
    <th class="cellrowborder" valign="top" width="50%" id="mcps1.1.4.1.3"><p id="p11503398334"><a name="p11503398334"></a><a name="p11503398334"></a>说明</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row17503189173315"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p65031398333"><a name="p65031398333"></a><a name="p65031398333"></a>code</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p15031912335"><a name="p15031912335"></a><a name="p15031912335"></a>int</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p16504190337"><a name="p16504190337"></a><a name="p16504190337"></a><a href="#section0935245195318">错误码</a>。</p>
    </td>
    </tr>
    <tr id="row1550410933313"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p155044916337"><a name="p155044916337"></a><a name="p155044916337"></a>data</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p2050415912338"><a name="p2050415912338"></a><a name="p2050415912338"></a>string</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p1550412913337"><a name="p1550412913337"></a><a name="p1550412913337"></a>错误码描述信息。</p>
    </td>
    </tr>
    </tbody>
    </table>

-   示例代码

    ```
    public void IsEnvReady()
        {
            Debug.Log("PayScene IsEnvReady.");
            IsEnvReadyOption isEnvReadyOption = new IsEnvReadyOption
            {
                // 在华为开发者联盟上获取真实有效的APP ID
                applicationID = "1021**433",
                success = res =>
                {
                    Debug.Log("IsEnvReady returnCode:" + res.returnCode);
                },
                fail = res =>
                {
                    Debug.Log("IsEnvReady data:" + res.data + ", code:" + res.code);
                },
                complete = () => { Debug.Log("IsEnvReady complete."); }
            };
            QG.IsEnvReady(isEnvReadyOption);
    }
    ```


### IsSandboxActivated\(IsSandboxActivatedOption isSandboxActivatedOption\)\(1103+\)<a name="section95831230133715"></a>

-   描述

    通过该接口可以判断当前设备登录的华为帐号及快游戏的RPK版本是否满足沙盒条件。

-   请求参数

    <a name="table1858303016371"></a>
    <table><thead align="left"><tr id="row1758383014379"><th class="cellrowborder" valign="top" width="20%" id="mcps1.1.5.1.1"><p id="p7583113023714"><a name="p7583113023714"></a><a name="p7583113023714"></a>参数</p>
    </th>
    <th class="cellrowborder" valign="top" width="25%" id="mcps1.1.5.1.2"><p id="p11583730153714"><a name="p11583730153714"></a><a name="p11583730153714"></a>类型</p>
    </th>
    <th class="cellrowborder" valign="top" width="15%" id="mcps1.1.5.1.3"><p id="p1158315301376"><a name="p1158315301376"></a><a name="p1158315301376"></a>必填(M)/选填(O)</p>
    </th>
    <th class="cellrowborder" valign="top" width="40%" id="mcps1.1.5.1.4"><p id="p3583183020378"><a name="p3583183020378"></a><a name="p3583183020378"></a>说明</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row1758393017372"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.5.1.1 "><p id="p12583630103711"><a name="p12583630103711"></a><a name="p12583630103711"></a>applicationID</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.2 "><p id="p8583930163711"><a name="p8583930163711"></a><a name="p8583930163711"></a>string</p>
    </td>
    <td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.5.1.3 "><p id="p058423033716"><a name="p058423033716"></a><a name="p058423033716"></a>M</p>
    </td>
    <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p3584830133712"><a name="p3584830133712"></a><a name="p3584830133712"></a>快游戏APP ID。创建快游戏后分配的游戏唯一标识。</p>
    </td>
    </tr>
    <tr id="row858483023710"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.5.1.1 "><p id="p14584173093718"><a name="p14584173093718"></a><a name="p14584173093718"></a>success</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.2 "><p id="p19584153012372"><a name="p19584153012372"></a><a name="p19584153012372"></a>Action&lt;<a href="#li155841630103716">IsSandboxActivatedSuccessResult</a>&gt;</p>
    </td>
    <td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.5.1.3 "><p id="p10584123010370"><a name="p10584123010370"></a><a name="p10584123010370"></a>O</p>
    </td>
    <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p1958416302378"><a name="p1958416302378"></a><a name="p1958416302378"></a>接口调用成功的回调函数。</p>
    </td>
    </tr>
    <tr id="row1658463083711"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.5.1.1 "><p id="p165841130123719"><a name="p165841130123719"></a><a name="p165841130123719"></a>fail</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.2 "><p id="p105846307377"><a name="p105846307377"></a><a name="p105846307377"></a>Action&lt;<a href="#li6585173018375">IsSandboxActivatedFailResult</a>&gt;</p>
    </td>
    <td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.5.1.3 "><p id="p25841130143713"><a name="p25841130143713"></a><a name="p25841130143713"></a>O</p>
    </td>
    <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p6584133013373"><a name="p6584133013373"></a><a name="p6584133013373"></a>接口调用失败的回调函数。</p>
    </td>
    </tr>
    <tr id="row358483053710"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.5.1.1 "><p id="p12584163018371"><a name="p12584163018371"></a><a name="p12584163018371"></a>complete</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.2 "><p id="p155841830123715"><a name="p155841830123715"></a><a name="p155841830123715"></a>Action</p>
    </td>
    <td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.5.1.3 "><p id="p95849306376"><a name="p95849306376"></a><a name="p95849306376"></a>O</p>
    </td>
    <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p858473016372"><a name="p858473016372"></a><a name="p858473016372"></a>接口成功、失败均会调用的回调函数。</p>
    </td>
    </tr>
    </tbody>
    </table>

-   <a name="li155841630103716"></a>IsSandboxActivatedSuccessResult参数

    <a name="table358493013712"></a>
    <table><thead align="left"><tr id="row14585530143717"><th class="cellrowborder" valign="top" width="25%" id="mcps1.1.4.1.1"><p id="p25851230123715"><a name="p25851230123715"></a><a name="p25851230123715"></a>参数</p>
    </th>
    <th class="cellrowborder" valign="top" width="25%" id="mcps1.1.4.1.2"><p id="p2585133018373"><a name="p2585133018373"></a><a name="p2585133018373"></a>类型</p>
    </th>
    <th class="cellrowborder" valign="top" width="50%" id="mcps1.1.4.1.3"><p id="p158523053716"><a name="p158523053716"></a><a name="p158523053716"></a>说明</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row158553013373"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p175851030203712"><a name="p175851030203712"></a><a name="p175851030203712"></a>returnCode</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p11585830103717"><a name="p11585830103717"></a><a name="p11585830103717"></a>int</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p10585183018371"><a name="p10585183018371"></a><a name="p10585183018371"></a>成功返回码。</p>
    </td>
    </tr>
    <tr id="row12880927144112"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p15880927114117"><a name="p15880927114117"></a><a name="p15880927114117"></a>errMsg</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p5881162774117"><a name="p5881162774117"></a><a name="p5881162774117"></a>string</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p696914274111"><a name="p696914274111"></a><a name="p696914274111"></a>成功返回码的描述信息。</p>
    </td>
    </tr>
    <tr id="row865317590418"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p1065335913418"><a name="p1065335913418"></a><a name="p1065335913418"></a>isSandboxUser</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p665365964114"><a name="p665365964114"></a><a name="p665365964114"></a>bool</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p13653115964116"><a name="p13653115964116"></a><a name="p13653115964116"></a>是否是沙盒帐号。</p>
    </td>
    </tr>
    <tr id="row097614199425"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p897601994211"><a name="p897601994211"></a><a name="p897601994211"></a>isSandboxApk</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p199765193429"><a name="p199765193429"></a><a name="p199765193429"></a>bool</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p8977161918426"><a name="p8977161918426"></a><a name="p8977161918426"></a>快游戏相关客户端的APK版本，例如“快应用中心”、“花瓣轻游”等是否满足沙盒条件，固定返回true。</p>
    </td>
    </tr>
    <tr id="row1753518408429"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p13535134018426"><a name="p13535134018426"></a><a name="p13535134018426"></a>versionInApk</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p2535140134218"><a name="p2535140134218"></a><a name="p2535140134218"></a>string</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p19535540144213"><a name="p19535540144213"></a><a name="p19535540144213"></a>快游戏相关客户端的版本信息。</p>
    </td>
    </tr>
    <tr id="row8406564429"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p640956194213"><a name="p640956194213"></a><a name="p640956194213"></a>versionFrMarket</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p1340856174217"><a name="p1340856174217"></a><a name="p1340856174217"></a>string</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p124125610424"><a name="p124125610424"></a><a name="p124125610424"></a>快游戏在华为应用市场最新的版本信息。</p>
    </td>
    </tr>
    </tbody>
    </table>

-   <a name="li6585173018375"></a>IsSandboxActivatedFailResult参数

    <a name="table15585430173715"></a>
    <table><thead align="left"><tr id="row125854307377"><th class="cellrowborder" valign="top" width="25%" id="mcps1.1.4.1.1"><p id="p1058517300379"><a name="p1058517300379"></a><a name="p1058517300379"></a>参数</p>
    </th>
    <th class="cellrowborder" valign="top" width="25%" id="mcps1.1.4.1.2"><p id="p6585123010377"><a name="p6585123010377"></a><a name="p6585123010377"></a>类型</p>
    </th>
    <th class="cellrowborder" valign="top" width="50%" id="mcps1.1.4.1.3"><p id="p958617308371"><a name="p958617308371"></a><a name="p958617308371"></a>说明</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row14586133017372"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p2586163015371"><a name="p2586163015371"></a><a name="p2586163015371"></a>code</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p7586123083716"><a name="p7586123083716"></a><a name="p7586123083716"></a>int</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p1758653016379"><a name="p1758653016379"></a><a name="p1758653016379"></a><a href="#section0935245195318">错误码</a>。</p>
    </td>
    </tr>
    <tr id="row1958663015372"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p1658683033710"><a name="p1658683033710"></a><a name="p1658683033710"></a>data</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p8586530123717"><a name="p8586530123717"></a><a name="p8586530123717"></a>string</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p19586173013372"><a name="p19586173013372"></a><a name="p19586173013372"></a>错误码描述信息。</p>
    </td>
    </tr>
    </tbody>
    </table>

-   示例代码

    ```
    public void IsSandboxActivated()
    {
            Debug.Log("PayScene IsSandboxActivated.");
            IsSandboxActivatedOption isSandboxActivatedOption = new IsSandboxActivatedOption
            {
                // 在华为开发者联盟上获取真实有效的APP ID
                applicationID = "1021**433",
                success = res =>
                {
                    Debug.Log("IsSandboxActivated returnCode:" + res.returnCode+", errMsg:" + res.errMsg+", isSandboxUser:"
                    + res.isSandboxUser +", isSandboxApk:"+ res.isSandboxApk +", versionInApk:" + res.versionInApk +", versionFrMarket:" + 
                    res.versionFrMarket);
                },
                fail = res =>
                {
                    Debug.Log("IsSandboxActivated data:" + res.data + ", code:" + res.code);
                },
                complete = () => { Debug.Log("IsSandboxActivated complete."); }
            };
            QG.IsSandboxActivated(isSandboxActivatedOption);
    }
    ```


### ObtainOwnedPurchases\(ObtainOwnedPurchasesOption obtainOwnedPurchasesOption\)\(1103+\)<a name="section155052321436"></a>

-   描述

    查询用户已购买的商品数据，且一次请求只能查询一种类型的商品。

    <a name="table1531337103213"></a>
    <table><thead align="left"><tr id="row15313571323"><th class="cellrowborder" valign="top" width="24.72%" id="mcps1.1.3.1.1"><p id="p13131671324"><a name="p13131671324"></a><a name="p13131671324"></a>待查询的商品类型</p>
    </th>
    <th class="cellrowborder" valign="top" width="75.28%" id="mcps1.1.3.1.2"><p id="p1231307113210"><a name="p1231307113210"></a><a name="p1231307113210"></a>返回结果</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row14313137153211"><td class="cellrowborder" valign="top" width="24.72%" headers="mcps1.1.3.1.1 "><p id="p133136763212"><a name="p133136763212"></a><a name="p133136763212"></a>消耗型商品</p>
    </td>
    <td class="cellrowborder" valign="top" width="75.28%" headers="mcps1.1.3.1.2 "><p id="p173137743210"><a name="p173137743210"></a><a name="p173137743210"></a>用户已购未消耗的商品信息，此时需要：</p>
    <a name="ol19995963313"></a><a name="ol19995963313"></a><ol id="ol19995963313"><li>判断是否发货。若未发货，请先补发商品。</li><li>确认发货后，调用<a href="#section20910454444">ConsumeOwnedPurchase</a>进行消耗处理。</li></ol>
    </td>
    </tr>
    <tr id="row1931416733213"><td class="cellrowborder" valign="top" width="24.72%" headers="mcps1.1.3.1.1 "><p id="p1831413723219"><a name="p1831413723219"></a><a name="p1831413723219"></a>非消耗型商品</p>
    </td>
    <td class="cellrowborder" valign="top" width="75.28%" headers="mcps1.1.3.1.2 "><p id="p11314673324"><a name="p11314673324"></a><a name="p11314673324"></a>用户所有已购买的商品数据。</p>
    </td>
    </tr>
    <tr id="row133141370321"><td class="cellrowborder" valign="top" width="24.72%" headers="mcps1.1.3.1.1 "><p id="p153141573321"><a name="p153141573321"></a><a name="p153141573321"></a>订阅类商品</p>
    </td>
    <td class="cellrowborder" valign="top" width="75.28%" headers="mcps1.1.3.1.2 "><div class="p" id="p1242814093513"><a name="p1242814093513"></a><a name="p1242814093513"></a>用户在当前应用下正生效的订阅：<a name="ul376171733419"></a><a name="ul376171733419"></a><ul id="ul376171733419"><li>续期：正常使用，且下个周期自动续费。</li><li>到期：下个周期未续费，当前周期过后变成“已到期”关系。</li><li>已到期：不能再使用订阅服务，但可查看历史订阅记录。</li></ul>
    </div>
    </td>
    </tr>
    </tbody>
    </table>

-   请求参数

    <a name="table1884215455462"></a>
    <table><thead align="left"><tr id="row1884216457468"><th class="cellrowborder" valign="top" width="20%" id="mcps1.1.5.1.1"><p id="p19842124514612"><a name="p19842124514612"></a><a name="p19842124514612"></a>参数</p>
    </th>
    <th class="cellrowborder" valign="top" width="25%" id="mcps1.1.5.1.2"><p id="p148421845164614"><a name="p148421845164614"></a><a name="p148421845164614"></a>类型</p>
    </th>
    <th class="cellrowborder" valign="top" width="15%" id="mcps1.1.5.1.3"><p id="p18842104524611"><a name="p18842104524611"></a><a name="p18842104524611"></a>必填(M)/选填(O)</p>
    </th>
    <th class="cellrowborder" valign="top" width="40%" id="mcps1.1.5.1.4"><p id="p16842184514611"><a name="p16842184514611"></a><a name="p16842184514611"></a>说明</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row7842104574619"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.5.1.1 "><p id="p784214457468"><a name="p784214457468"></a><a name="p784214457468"></a>applicationID</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.2 "><p id="p138421645124611"><a name="p138421645124611"></a><a name="p138421645124611"></a>string</p>
    </td>
    <td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.5.1.3 "><p id="p15842144513464"><a name="p15842144513464"></a><a name="p15842144513464"></a>M</p>
    </td>
    <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p3842154574612"><a name="p3842154574612"></a><a name="p3842154574612"></a>快游戏APP ID，在华为开发者联盟上创建快游戏后分配的唯一标识。</p>
    </td>
    </tr>
    <tr id="row19167121013485"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.5.1.1 "><p id="p51671710194816"><a name="p51671710194816"></a><a name="p51671710194816"></a>priceType</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.2 "><p id="p17167210194818"><a name="p17167210194818"></a><a name="p17167210194818"></a>int</p>
    </td>
    <td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.5.1.3 "><p id="p416781014483"><a name="p416781014483"></a><a name="p416781014483"></a>M</p>
    </td>
    <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p7544122954817"><a name="p7544122954817"></a><a name="p7544122954817"></a>商品类型：</p>
    <a name="ul343153284815"></a><a name="ul343153284815"></a><ul id="ul343153284815"><li>0：消耗型商品。</li><li>1：非消耗型商品。</li><li>2：订阅类商品。</li></ul>
    </td>
    </tr>
    <tr id="row1226419719480"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.5.1.1 "><p id="p152649710488"><a name="p152649710488"></a><a name="p152649710488"></a>publicKey</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.2 "><p id="p1226410764810"><a name="p1226410764810"></a><a name="p1226410764810"></a>string</p>
    </td>
    <td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.5.1.3 "><p id="p626413754810"><a name="p626413754810"></a><a name="p626413754810"></a>M</p>
    </td>
    <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p226497154819"><a name="p226497154819"></a><a name="p226497154819"></a>开通应用内支付服务时的公钥。</p>
    </td>
    </tr>
    <tr id="row26812415485"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.5.1.1 "><p id="p186911411486"><a name="p186911411486"></a><a name="p186911411486"></a>continuationToken</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.2 "><p id="p1693410489"><a name="p1693410489"></a><a name="p1693410489"></a>string</p>
    </td>
    <td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.5.1.3 "><p id="p56944124817"><a name="p56944124817"></a><a name="p56944124817"></a>O</p>
    </td>
    <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p116911417480"><a name="p116911417480"></a><a name="p116911417480"></a>数据定位标志。首次请求时无需传入。</p>
    </td>
    </tr>
    <tr id="row184212453461"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.5.1.1 "><p id="p684274518463"><a name="p684274518463"></a><a name="p684274518463"></a>success</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.2 "><p id="p168431745184615"><a name="p168431745184615"></a><a name="p168431745184615"></a>Action&lt;<a href="#li88432045144610">ObtainOwnedPurchasesSuccessResult</a>&gt;</p>
    </td>
    <td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.5.1.3 "><p id="p128435451460"><a name="p128435451460"></a><a name="p128435451460"></a>O</p>
    </td>
    <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p12843145104613"><a name="p12843145104613"></a><a name="p12843145104613"></a>接口调用成功的回调函数。</p>
    </td>
    </tr>
    <tr id="row2084314554616"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.5.1.1 "><p id="p584315457464"><a name="p584315457464"></a><a name="p584315457464"></a>fail</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.2 "><p id="p9843124544615"><a name="p9843124544615"></a><a name="p9843124544615"></a>Action&lt;<a href="#li108454454467">ObtainOwnedPurchasesFailResult</a>&gt;</p>
    </td>
    <td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.5.1.3 "><p id="p9843124515465"><a name="p9843124515465"></a><a name="p9843124515465"></a>O</p>
    </td>
    <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p68431645114616"><a name="p68431645114616"></a><a name="p68431645114616"></a>接口调用失败的回调函数。</p>
    </td>
    </tr>
    <tr id="row168431345204610"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.5.1.1 "><p id="p16843124594620"><a name="p16843124594620"></a><a name="p16843124594620"></a>complete</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.2 "><p id="p20843144554614"><a name="p20843144554614"></a><a name="p20843144554614"></a>Action</p>
    </td>
    <td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.5.1.3 "><p id="p9843144516466"><a name="p9843144516466"></a><a name="p9843144516466"></a>O</p>
    </td>
    <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p2843124584610"><a name="p2843124584610"></a><a name="p2843124584610"></a>接口成功、失败均会调用的回调函数。</p>
    </td>
    </tr>
    </tbody>
    </table>

-   <a name="li88432045144610"></a>ObtainOwnedPurchasesSuccessResult参数

    <a name="table1784324574612"></a>
    <table><thead align="left"><tr id="row12843194514462"><th class="cellrowborder" valign="top" width="25%" id="mcps1.1.4.1.1"><p id="p14844345134616"><a name="p14844345134616"></a><a name="p14844345134616"></a>参数</p>
    </th>
    <th class="cellrowborder" valign="top" width="25%" id="mcps1.1.4.1.2"><p id="p1184444515466"><a name="p1184444515466"></a><a name="p1184444515466"></a>类型</p>
    </th>
    <th class="cellrowborder" valign="top" width="50%" id="mcps1.1.4.1.3"><p id="p3844174519465"><a name="p3844174519465"></a><a name="p3844174519465"></a>说明</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row784415459465"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p178445459465"><a name="p178445459465"></a><a name="p178445459465"></a>returnCode</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p1984484564615"><a name="p1984484564615"></a><a name="p1984484564615"></a>int</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p19844194554617"><a name="p19844194554617"></a><a name="p19844194554617"></a>成功返回码。</p>
    </td>
    </tr>
    <tr id="row17844345164610"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p1984434534619"><a name="p1984434534619"></a><a name="p1984434534619"></a>errMsg</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p78449452466"><a name="p78449452466"></a><a name="p78449452466"></a>string</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p984474514469"><a name="p984474514469"></a><a name="p984474514469"></a>成功返回码的描述信息。</p>
    </td>
    </tr>
    <tr id="row10844134544615"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p1349172517507"><a name="p1349172517507"></a><a name="p1349172517507"></a>itemList</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p104901225165012"><a name="p104901225165012"></a><a name="p104901225165012"></a>List&lt;string&gt;</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p548952525019"><a name="p548952525019"></a><a name="p548952525019"></a>商品ID列表。</p>
    </td>
    </tr>
    <tr id="row148451445124611"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p13488182515019"><a name="p13488182515019"></a><a name="p13488182515019"></a>inAppPurchaseDataList</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p548752595014"><a name="p548752595014"></a><a name="p548752595014"></a>List&lt;<a href="#p4588528145718">InAppPurchaseData</a>&gt;</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p174862253505"><a name="p174862253505"></a><a name="p174862253505"></a>商品信息详情。</p>
    </td>
    </tr>
    <tr id="row884594512464"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p12485192545014"><a name="p12485192545014"></a><a name="p12485192545014"></a>inAppSignature</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p587473215514"><a name="p587473215514"></a><a name="p587473215514"></a>List&lt;string&gt;</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p13976444105119"><a name="p13976444105119"></a><a name="p13976444105119"></a>与“inAppPurchaseDataList”中每条商品信息一一对应的签名字符串：</p>
    <a name="ul2210175810513"></a><a name="ul2210175810513"></a><ul id="ul2210175810513"><li>使用IAP私钥签名算法为“SHA256WITHRSA”。</li><li>应用需对每条商品信息进行验签，若验签失败需重新获取商品信息。</li></ul>
    </td>
    </tr>
    <tr id="row184516454461"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p14482825165012"><a name="p14482825165012"></a><a name="p14482825165012"></a>continuationToken</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p115539216526"><a name="p115539216526"></a><a name="p115539216526"></a>string</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p54571254508"><a name="p54571254508"></a><a name="p54571254508"></a>数据定位标志。用户拥有非常大的商品数量时，若返回continuationToken时，应用必须继续调用当前方法，并传入当前continuationToken值，直到调用后不再返回continuationToken。</p>
    </td>
    </tr>
    <tr id="row16337113755311"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p533715375530"><a name="p533715375530"></a><a name="p533715375530"></a>placedInappPurchaseDataList</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p2278683315"><a name="p2278683315"></a><a name="p2278683315"></a>List&lt;<a href="#p4588528145718">InAppPurchaseData</a>&gt;</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p123372037185314"><a name="p123372037185314"></a><a name="p123372037185314"></a>订阅类商品切换时的订阅关系信息。</p>
    </td>
    </tr>
    <tr id="row98542316541"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p188551734548"><a name="p188551734548"></a><a name="p188551734548"></a>placedInappSignatureList</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p566511465415"><a name="p566511465415"></a><a name="p566511465415"></a>List&lt;string&gt;</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p411852725410"><a name="p411852725410"></a><a name="p411852725410"></a>与“placedInappPurchaseDataList”中每个订阅关系一一对应的签名字符串：</p>
    <a name="ul1181430165414"></a><a name="ul1181430165414"></a><ul id="ul1181430165414"><li>使用IAP私钥签名算法为“SHA256WITHRSA”。</li><li>应用需要对每个订阅关系进行验签，若验签失败需重新获取订阅关系。</li></ul>
    <a name="ul111691078557"></a><a name="ul111691078557"></a><ul id="ul111691078557"><li>仅在查询订阅类商品且用户存在订阅类商品时返回。</li></ul>
    </td>
    </tr>
    </tbody>
    </table>

    InAppPurchaseData参数

    <a name="table11473151783113"></a>
    <table><thead align="left"><tr id="row164731017153115"><th class="cellrowborder" valign="top" width="25%" id="mcps1.1.4.1.1"><p id="p14473161733111"><a name="p14473161733111"></a><a name="p14473161733111"></a>参数</p>
    </th>
    <th class="cellrowborder" valign="top" width="25%" id="mcps1.1.4.1.2"><p id="p11473171712315"><a name="p11473171712315"></a><a name="p11473171712315"></a>类型</p>
    </th>
    <th class="cellrowborder" valign="top" width="50%" id="mcps1.1.4.1.3"><p id="p747341763111"><a name="p747341763111"></a><a name="p747341763111"></a>说明</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row204735175317"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p1197123513319"><a name="p1197123513319"></a><a name="p1197123513319"></a>applicationId</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p7197535153117"><a name="p7197535153117"></a><a name="p7197535153117"></a>long</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p4197143543114"><a name="p4197143543114"></a><a name="p4197143543114"></a>快游戏APP ID，在华为开发者联盟上创建快游戏后分配的唯一标识。</p>
    </td>
    </tr>
    <tr id="row14473121717315"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p019743513111"><a name="p019743513111"></a><a name="p019743513111"></a>autoRenewing</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p15197143512317"><a name="p15197143512317"></a><a name="p15197143512317"></a>bool</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p992154614417"><a name="p992154614417"></a><a name="p992154614417"></a>是否自动续订：</p>
    <a name="ul1857020121656"></a><a name="ul1857020121656"></a><ul id="ul1857020121656"><li>非订阅类商品返回false。</li><li>订阅类商品：<a name="ul175362575518"></a><a name="ul175362575518"></a><ul id="ul175362575518"><li>ture：处于订阅状态，且在下一个续费周期自动续订。</li><li>false：订阅类商品已取消订阅。用户可在下个续费周期之前访问历史订阅内容。</li></ul>
    </li></ul>
    <div class="note" id="note7610103747"><a name="note7610103747"></a><a name="note7610103747"></a><span class="notetitle"> 说明： </span><div class="notebody"><p id="p15020359363"><a name="p15020359363"></a><a name="p15020359363"></a>只要未过订阅类商品的宽限期，就会返回true。</p>
    </div></div>
    </td>
    </tr>
    <tr id="row15474317153110"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p1519743533116"><a name="p1519743533116"></a><a name="p1519743533116"></a>orderId</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p91976358312"><a name="p91976358312"></a><a name="p91976358312"></a>string</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p61971035153112"><a name="p61971035153112"></a><a name="p61971035153112"></a>华为支付的订单ID，在成功支付后生成。</p>
    </td>
    </tr>
    <tr id="row4474161763117"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p20197123583110"><a name="p20197123583110"></a><a name="p20197123583110"></a>kind</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p1319873593113"><a name="p1319873593113"></a><a name="p1319873593113"></a>int</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p10198133515311"><a name="p10198133515311"></a><a name="p10198133515311"></a>商品类型：</p>
    <a name="ul1419863510311"></a><a name="ul1419863510311"></a><ul id="ul1419863510311"><li>0 : 消耗型商品。</li><li>1 : 非消耗型商品。</li><li>2 : 订阅类商品。</li></ul>
    </td>
    </tr>
    <tr id="row247471743112"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p191981035123114"><a name="p191981035123114"></a><a name="p191981035123114"></a>packageName</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p17767625163312"><a name="p17767625163312"></a><a name="p17767625163312"></a>string</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p51985351317"><a name="p51985351317"></a><a name="p51985351317"></a>快游戏包名。</p>
    </td>
    </tr>
    <tr id="row4474151723116"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p7198183519318"><a name="p7198183519318"></a><a name="p7198183519318"></a>productId</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p9892125133311"><a name="p9892125133311"></a><a name="p9892125133311"></a>string</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p4198123516314"><a name="p4198123516314"></a><a name="p4198123516314"></a>商品ID。</p>
    </td>
    </tr>
    <tr id="row9474617193119"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p11198163510314"><a name="p11198163510314"></a><a name="p11198163510314"></a>productName</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p8141526163317"><a name="p8141526163317"></a><a name="p8141526163317"></a>string</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p141981735133117"><a name="p141981735133117"></a><a name="p141981735133117"></a>商品名称。</p>
    </td>
    </tr>
    <tr id="row647531753118"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p11198183593111"><a name="p11198183593111"></a><a name="p11198183593111"></a>purchaseTime</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p191238267338"><a name="p191238267338"></a><a name="p191238267338"></a>long</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p4198173533117"><a name="p4198173533117"></a><a name="p4198173533117"></a>商品购买的时间戳。从1970年1月1日0时起到商品购买时间的毫秒数。</p>
    </td>
    </tr>
    <tr id="row114751179315"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p18198435143112"><a name="p18198435143112"></a><a name="p18198435143112"></a>purchaseState</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p1223282616336"><a name="p1223282616336"></a><a name="p1223282616336"></a>int</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p1919923511310"><a name="p1919923511310"></a><a name="p1919923511310"></a>订单交易状态：</p>
    <a name="ul13199173543116"></a><a name="ul13199173543116"></a><ul id="ul13199173543116"><li>-1：初始化。</li><li>0：已购买。</li><li>1：已取消。</li><li>2：已退款。</li></ul>
    </td>
    </tr>
    <tr id="row8475121711314"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p9199143593119"><a name="p9199143593119"></a><a name="p9199143593119"></a>developerPayload</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p83428264334"><a name="p83428264334"></a><a name="p83428264334"></a>string</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p19199135193111"><a name="p19199135193111"></a><a name="p19199135193111"></a>商户侧保留信息，调用接口时传入。</p>
    </td>
    </tr>
    <tr id="row1147521718317"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p3199113514314"><a name="p3199113514314"></a><a name="p3199113514314"></a>developerChallenge</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p1645211260337"><a name="p1645211260337"></a><a name="p1645211260337"></a>string</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p1199113512310"><a name="p1199113512310"></a><a name="p1199113512310"></a>应用请求消耗商品时自定义的挑战字，唯一标识本次消耗请求。消耗成功后此挑战字会记录在购买信息中并返回。如果挑战字与已有挑战字重复，表示重复消耗，同样会原样返回该挑战字。</p>
    </td>
    </tr>
    <tr id="row04751017143117"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p41991352311"><a name="p41991352311"></a><a name="p41991352311"></a>consumptionState</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p13825135153317"><a name="p13825135153317"></a><a name="p13825135153317"></a>int</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p18199535123111"><a name="p18199535123111"></a><a name="p18199535123111"></a>消费状态：</p>
    <a name="ul2199173533114"></a><a name="ul2199173533114"></a><ul id="ul2199173533114"><li>0：未消费。</li><li>1：已消费。</li></ul>
    </td>
    </tr>
    <tr id="row124761417123119"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p1819973513118"><a name="p1819973513118"></a><a name="p1819973513118"></a>purchaseToken</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p494943518338"><a name="p494943518338"></a><a name="p494943518338"></a>string</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p1420063593116"><a name="p1420063593116"></a><a name="p1420063593116"></a>标识商品和用户对应关系的购买令牌，长度92位，完成支付后由华为支付服务器生成，若您需要存储此信息，建议预留128位的长度。</p>
    <div class="note" id="note07221013103412"><a name="note07221013103412"></a><a name="note07221013103412"></a><span class="notetitle"> 说明： </span><div class="notebody"><p id="p117224130347"><a name="p117224130347"></a><a name="p117224130347"></a>订阅类商品正常订阅不会发生改变。</p>
    </div></div>
    </td>
    </tr>
    <tr id="row0476111703117"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p182002354315"><a name="p182002354315"></a><a name="p182002354315"></a>purchaseType</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p02004350316"><a name="p02004350316"></a><a name="p02004350316"></a>int</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p5200103583116"><a name="p5200103583116"></a><a name="p5200103583116"></a>购买类型：</p>
    <a name="ul9208114955816"></a><a name="ul9208114955816"></a><ul id="ul9208114955816"><li>0：沙盒环境。</li><li>1：促销（暂不支持）。</li></ul>
    <div class="note" id="note20973415716"><a name="note20973415716"></a><a name="note20973415716"></a><span class="notetitle"> 说明： </span><div class="notebody"><p id="p89733151811"><a name="p89733151811"></a><a name="p89733151811"></a>正常购买不返回此参数。</p>
    </div></div>
    </td>
    </tr>
    <tr id="row447631753119"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p9200203515311"><a name="p9200203515311"></a><a name="p9200203515311"></a>currency</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p1120083573111"><a name="p1120083573111"></a><a name="p1120083573111"></a>string</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p1120083518312"><a name="p1120083518312"></a><a name="p1120083518312"></a>支付商品的币种。中国大陆传值为CNY，其他国家/地区请参见<a href="https://developer.huawei.com/consumer/cn/doc/development/HMSCore-Guides/huawei-iap-coverage-0000001050438753" target="_blank" rel="noopener noreferrer">华为IAP范围覆盖</a>。</p>
    </td>
    </tr>
    <tr id="row5476201719316"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p1420013512318"><a name="p1420013512318"></a><a name="p1420013512318"></a>price</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p620013573116"><a name="p620013573116"></a><a name="p620013573116"></a>long</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p12008359313"><a name="p12008359313"></a><a name="p12008359313"></a>商品展示价格。</p>
    </td>
    </tr>
    <tr id="row124764171317"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p1120033553114"><a name="p1120033553114"></a><a name="p1120033553114"></a>country</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p72001035173114"><a name="p72001035173114"></a><a name="p72001035173114"></a>string</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p82000354317"><a name="p82000354317"></a><a name="p82000354317"></a>国家/地区码。中国大陆为CN，其他国家/地区请参见<a href="https://developer.huawei.com/consumer/cn/doc/development/HMSCore-Guides/huawei-iap-coverage-0000001050438753" target="_blank" rel="noopener noreferrer">华为IAP范围覆盖</a>。</p>
    </td>
    </tr>
    <tr id="row94766176316"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p1200535173112"><a name="p1200535173112"></a><a name="p1200535173112"></a>payType</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p520083583120"><a name="p520083583120"></a><a name="p520083583120"></a>string</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p5200035163118"><a name="p5200035163118"></a><a name="p5200035163118"></a>支付方式：</p>
    <a name="ul8200183511317"></a><a name="ul8200183511317"></a><ul id="ul8200183511317"><li>0：花币。</li><li>3：信用卡。</li><li>4：支付宝。</li><li>6：话费。</li><li>13：PayPal。</li><li>16：借记卡。</li><li>17：微信。</li><li>19：礼品卡。</li><li>20：零钱。</li><li>21：花币卡。</li><li>24：WP。</li><li>31：华为Pay。</li><li>32：花呗。</li><li>200：MPESA。</li></ul>
    </td>
    </tr>
    <tr id="row1347710176313"><td class="cellrowborder" colspan="3" valign="top" headers="mcps1.1.4.1.1 mcps1.1.4.1.2 mcps1.1.4.1.3 "><p id="p162012035123118"><a name="p162012035123118"></a><a name="p162012035123118"></a>以下参数只有查询订阅类商品时才返回</p>
    </td>
    </tr>
    <tr id="row20477101783115"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p11201203563118"><a name="p11201203563118"></a><a name="p11201203563118"></a>lastOrderId</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p120143513310"><a name="p120143513310"></a><a name="p120143513310"></a>string</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p1720111356315"><a name="p1720111356315"></a><a name="p1720111356315"></a>续期订阅类商品的订单ID，由支付服务器在续期扣费时生成。</p>
    <div class="note" id="note9403237132519"><a name="note9403237132519"></a><a name="note9403237132519"></a><span class="notetitle"> 说明： </span><div class="notebody"><p id="p17403037192520"><a name="p17403037192520"></a><a name="p17403037192520"></a>仅首次购买订阅类商品时，“lastOrderId”与“orderId”相同。</p>
    </div></div>
    </td>
    </tr>
    <tr id="row184776174313"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p2201635193118"><a name="p2201635193118"></a><a name="p2201635193118"></a>productGroup</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p620193523110"><a name="p620193523110"></a><a name="p620193523110"></a>string</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p1420112358319"><a name="p1420112358319"></a><a name="p1420112358319"></a>订阅类商品所属订阅组ID。</p>
    </td>
    </tr>
    <tr id="row5477181723113"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p162021335163114"><a name="p162021335163114"></a><a name="p162021335163114"></a>oriPurchaseTime</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p920212350313"><a name="p920212350313"></a><a name="p920212350313"></a>long</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p2020253510315"><a name="p2020253510315"></a><a name="p2020253510315"></a>首次购买时间戳，从1970年1月1日0时起到本订阅类商品首次成功收费的毫秒数。</p>
    </td>
    </tr>
    <tr id="row1547851743110"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p162022354316"><a name="p162022354316"></a><a name="p162022354316"></a>subscriptionId</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p62025354317"><a name="p62025354317"></a><a name="p62025354317"></a>string</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p420273515315"><a name="p420273515315"></a><a name="p420273515315"></a>订阅ID。</p>
    </td>
    </tr>
    <tr id="row147801763118"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p122028357310"><a name="p122028357310"></a><a name="p122028357310"></a>oriSubscriptionId</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p4202935133110"><a name="p4202935133110"></a><a name="p4202935133110"></a>string</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p82024358312"><a name="p82024358312"></a><a name="p82024358312"></a>原订阅ID。返回该参数信息时，表示当前订阅从其他商品切换而来，该参数可关联商品切换前的订阅信息。</p>
    </td>
    </tr>
    <tr id="row5478917203116"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p4202123514312"><a name="p4202123514312"></a><a name="p4202123514312"></a>quantity</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p3202163513317"><a name="p3202163513317"></a><a name="p3202163513317"></a>int</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p1202103553115"><a name="p1202103553115"></a><a name="p1202103553115"></a>订阅类商品购买数量。</p>
    </td>
    </tr>
    <tr id="row347841783112"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p1120213593113"><a name="p1120213593113"></a><a name="p1120213593113"></a>daysLasted</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p321813567342"><a name="p321813567342"></a><a name="p321813567342"></a>long</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p32021358315"><a name="p32021358315"></a><a name="p32021358315"></a>已付费订阅的天数，免费试用期限和优惠续费周期除外。</p>
    </td>
    </tr>
    <tr id="row12478171720316"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p1620210351315"><a name="p1620210351315"></a><a name="p1620210351315"></a>numOfPeriods</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p53402056103413"><a name="p53402056103413"></a><a name="p53402056103413"></a>long</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p3202123563120"><a name="p3202123563120"></a><a name="p3202123563120"></a>自动续费周期数，优惠续费周期除外。若值为0或不存在，表示还没有成功续期。</p>
    </td>
    </tr>
    <tr id="row54782176310"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p3203183543115"><a name="p3203183543115"></a><a name="p3203183543115"></a>numOfDiscount</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p1446655610345"><a name="p1446655610345"></a><a name="p1446655610345"></a>long</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p10203103517310"><a name="p10203103517310"></a><a name="p10203103517310"></a>成功续费周期数。</p>
    </td>
    </tr>
    <tr id="row1747971743118"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p10203135193115"><a name="p10203135193115"></a><a name="p10203135193115"></a>expirationDate</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p257705614348"><a name="p257705614348"></a><a name="p257705614348"></a>long</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p86701529381"><a name="p86701529381"></a><a name="p86701529381"></a>订阅类商品过期的时间戳：</p>
    <a name="ul12576185423820"></a><a name="ul12576185423820"></a><ul id="ul12576185423820"><li>若是一个将来时间，表示是一个已成功续费订单的续期日期或超期日期。</li><li>若是一个过去时间，表示订阅类商品已过期。</li></ul>
    </td>
    </tr>
    <tr id="row9479141716311"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p220333553118"><a name="p220333553118"></a><a name="p220333553118"></a>expirationIntent</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p8685456203415"><a name="p8685456203415"></a><a name="p8685456203415"></a>int</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p6203133523115"><a name="p6203133523115"></a><a name="p6203133523115"></a>订阅类商品已过期的原因：</p>
    <a name="ol290915347436"></a><a name="ol290915347436"></a><ol id="ol290915347436"><li>用户取消。</li><li>商品不可用。</li><li>用户签约信息异常。</li><li>Billing错误。</li><li>用户未同意涨价。</li><li>未知错误。</li></ol>
    <div class="note" id="note1243873116443"><a name="note1243873116443"></a><a name="note1243873116443"></a><span class="notetitle"> 说明： </span><div class="notebody"><p id="p957174114443"><a name="p957174114443"></a><a name="p957174114443"></a>若同时有多个过期原因，根据升序的优先级原则，返回优先级较高的原因。</p>
    </div></div>
    </td>
    </tr>
    <tr id="row1247918174319"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p172037359311"><a name="p172037359311"></a><a name="p172037359311"></a>retryFlag</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p197947567343"><a name="p197947567343"></a><a name="p197947567343"></a>int</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p10510384467"><a name="p10510384467"></a><a name="p10510384467"></a>系统是否仍在尝试自动完成续期订阅类商品：</p>
    <a name="ul320320357317"></a><a name="ul320320357317"></a><ul id="ul320320357317"><li>0：终止尝试。</li><li>1：仍在尝试。</li></ul>
    </td>
    </tr>
    <tr id="row3479517143112"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p320414356313"><a name="p320414356313"></a><a name="p320414356313"></a>introductoryFlag</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p1890365616348"><a name="p1890365616348"></a><a name="p1890365616348"></a>int</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p1520423516313"><a name="p1520423516313"></a><a name="p1520423516313"></a>订阅类商品是否在优惠续费周期内过期：</p>
    <a name="ul520403517315"></a><a name="ul520403517315"></a><ul id="ul520403517315"><li>0：否。</li><li>1：是。</li></ul>
    </td>
    </tr>
    <tr id="row8479101716315"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p420463583113"><a name="p420463583113"></a><a name="p420463583113"></a>trialFlag</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p1813105713348"><a name="p1813105713348"></a><a name="p1813105713348"></a>int</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p15204163517311"><a name="p15204163517311"></a><a name="p15204163517311"></a>订阅类商品是否在免费试用期限内过期：</p>
    <a name="ul1720411354316"></a><a name="ul1720411354316"></a><ul id="ul1720411354316"><li>0：否。</li><li>1：是。</li></ul>
    </td>
    </tr>
    <tr id="row174800179318"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p1620419354317"><a name="p1620419354317"></a><a name="p1620419354317"></a>cancelTime</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p17121457123410"><a name="p17121457123410"></a><a name="p17121457123410"></a>long</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p18204103517319"><a name="p18204103517319"></a><a name="p18204103517319"></a>订阅取消时间。在用户通过客服取消订阅，或用户升级、跨级到同组其它商品且立即生效时，需取消原有订阅的上次收据。</p>
    <div class="note" id="note2058718557347"><a name="note2058718557347"></a><a name="note2058718557347"></a><span class="notetitle"> 说明： </span><div class="notebody"><p id="p18587115519348"><a name="p18587115519348"></a><a name="p18587115519348"></a>已经取消的收据等同于没有完成购买。</p>
    </div></div>
    </td>
    </tr>
    <tr id="row3480111720311"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p1820483519317"><a name="p1820483519317"></a><a name="p1820483519317"></a>cancelReason</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p023685710349"><a name="p023685710349"></a><a name="p023685710349"></a>int</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p3204203512318"><a name="p3204203512318"></a><a name="p3204203512318"></a>用户取消订阅的原因：</p>
    <a name="ul2204123523116"></a><a name="ul2204123523116"></a><ul id="ul2204123523116"><li>2：用户升级、跨级等。</li><li>1：用户应用内遇到问题而取消订阅。</li><li>0：其它原因取消，例如用户不小心订阅了商品。<div class="note" id="note143951420153519"><a name="note143951420153519"></a><a name="note143951420153519"></a><span class="notetitle"> 说明： </span><div class="notebody"><p id="p1539562018358"><a name="p1539562018358"></a><a name="p1539562018358"></a>若该参数为空且cancelTime有值，表示是升级等操作导致的取消。</p>
    </div></div>
    </li></ul>
    </td>
    </tr>
    <tr id="row12480617103113"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p720563514317"><a name="p720563514317"></a><a name="p720563514317"></a>renewStatus</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p123491757133412"><a name="p123491757133412"></a><a name="p123491757133412"></a>int</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p42051135163119"><a name="p42051135163119"></a><a name="p42051135163119"></a>订阅类商品的续期状态：</p>
    <a name="ul122051535143116"></a><a name="ul122051535143116"></a><ul id="ul122051535143116"><li>1：当前周期到期后自动续期。</li><li>0：用户主动停止续期。应用可以给用户提供其它订阅选项，例如推荐同组更低级别的商品。</li></ul>
    </td>
    </tr>
    <tr id="row3480617203112"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p232859133214"><a name="p232859133214"></a><a name="p232859133214"></a>priceConsentStatus</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p2046055793419"><a name="p2046055793419"></a><a name="p2046055793419"></a>int</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p1932820918329"><a name="p1932820918329"></a><a name="p1932820918329"></a>订阅类商品提价时的用户意见：</p>
    <a name="ul1232810918323"></a><a name="ul1232810918323"></a><ul id="ul1232810918323"><li>1：用户已经同意提价。</li><li>0：用户未采取动作，超期后订阅失效。</li></ul>
    </td>
    </tr>
    <tr id="row24800170315"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p132879203212"><a name="p132879203212"></a><a name="p132879203212"></a>renewPrice</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p1256917574348"><a name="p1256917574348"></a><a name="p1256917574348"></a>long</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p1032914913324"><a name="p1032914913324"></a><a name="p1032914913324"></a>下次续期价格。若有priceConsentStatus，提示用户新的续期价格。</p>
    </td>
    </tr>
    <tr id="row65749468313"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p1632916918324"><a name="p1632916918324"></a><a name="p1632916918324"></a>subIsvalid</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p9329179143211"><a name="p9329179143211"></a><a name="p9329179143211"></a>bool</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p1355211151679"><a name="p1355211151679"></a><a name="p1355211151679"></a>订阅类商品提价后的状态：</p>
    <a name="ul732910983216"></a><a name="ul732910983216"></a><ul id="ul732910983216"><li>true：已收费且未过期，也未退款，您可以为用户提供对应的服务。</li><li>false：未购买，已过期，或购买后已退款。<div class="note" id="note0138151493610"><a name="note0138151493610"></a><a name="note0138151493610"></a><span class="notetitle"> 说明： </span><div class="notebody"><p id="p1713821413610"><a name="p1713821413610"></a><a name="p1713821413610"></a>若用户已经取消订阅，在已购买的订阅类商品过期之前，subIsvalid仍然为true。</p>
    </div></div>
    </li></ul>
    </td>
    </tr>
    <tr id="row13714114893118"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p15329392327"><a name="p15329392327"></a><a name="p15329392327"></a>cancelledSubKeepDays</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p203442034173514"><a name="p203442034173514"></a><a name="p203442034173514"></a>int</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p232916913217"><a name="p232916913217"></a><a name="p232916913217"></a>用户取消订阅后订阅关系保留的天数，不表示当前订阅类商品已取消。</p>
    </td>
    </tr>
    <tr id="row1466755012311"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p17329491329"><a name="p17329491329"></a><a name="p17329491329"></a>resumeTime</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p745614341358"><a name="p745614341358"></a><a name="p745614341358"></a>long</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p1932919919321"><a name="p1932919919321"></a><a name="p1932919919321"></a>重新订阅商品的恢复时间。</p>
    </td>
    </tr>
    </tbody>
    </table>

-   <a name="li108454454467"></a>ObtainOwnedPurchasesFailResult参数

    <a name="table128451545194619"></a>
    <table><thead align="left"><tr id="row1284634510466"><th class="cellrowborder" valign="top" width="25%" id="mcps1.1.4.1.1"><p id="p7846164504614"><a name="p7846164504614"></a><a name="p7846164504614"></a>参数</p>
    </th>
    <th class="cellrowborder" valign="top" width="25%" id="mcps1.1.4.1.2"><p id="p1184634594616"><a name="p1184634594616"></a><a name="p1184634594616"></a>类型</p>
    </th>
    <th class="cellrowborder" valign="top" width="50%" id="mcps1.1.4.1.3"><p id="p18467452461"><a name="p18467452461"></a><a name="p18467452461"></a>说明</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row1484654511468"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p784604511467"><a name="p784604511467"></a><a name="p784604511467"></a>code</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p10846445134615"><a name="p10846445134615"></a><a name="p10846445134615"></a>int</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p1846545104614"><a name="p1846545104614"></a><a name="p1846545104614"></a><a href="#section0935245195318">错误码</a>。</p>
    </td>
    </tr>
    <tr id="row484664544614"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p3846114574612"><a name="p3846114574612"></a><a name="p3846114574612"></a>data</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p684664504615"><a name="p684664504615"></a><a name="p684664504615"></a>string</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p4846164513465"><a name="p4846164513465"></a><a name="p4846164513465"></a>错误码描述信息。</p>
    </td>
    </tr>
    </tbody>
    </table>

-   示例代码

    ```
    public void ObtainOwnedPurchases()
    {
            Debug.Log("PayScene ObtainOwnedPurchases.");
            ObtainOwnedPurchasesOption obtainOwnedPurchasesOption = new ObtainOwnedPurchasesOption
            {
                // 在华为开发者联盟上获取真实有效的APP ID
                applicationID = "1021**433",
                // 0：消耗 1：非消耗 2：订阅
                priceType = 0,
                // 替换为真实有效的支付公钥
                publicKey = "sdsdff****affdsf",
                success = res =>
                {
                    Debug.Log("ObtainOwnedPurchases returnCode:"+ res.returnCode+", errMsg:"+ res.errMsg+", itemList:"+ res.itemList+", inAppPurchaseDataList:"
                    + res.inAppPurchaseDataList+", inAppSignature:" + res.inAppSignature+", continuationToken:"+
                     res.continuationToken+", placedInappPurchaseDataList:"+ res.placedInappPurchaseDataList+", placedInappSignatureList:"+ 
                     res.placedInappSignatureList);
                },
                fail = res =>
                {
                    Debug.Log("ObtainOwnedPurchases data:" + res.data + ", code:" + res.code);
                },
                complete = () => { Debug.Log("ObtainOwnedPurchases complete."); }
            };
            QG.ObtainOwnedPurchases(obtainOwnedPurchasesOption);
    }
    ```


### ObtainProductInfo\(ObtainProductInfoOption obtainProductInfoOption\)\(1103+\)<a name="section15871165154311"></a>

-   描述

    查询在AGC控制台配置的商品详情。

-   请求参数

    <a name="table111321528469"></a>
    <table><thead align="left"><tr id="row31321952114616"><th class="cellrowborder" valign="top" width="20%" id="mcps1.1.5.1.1"><p id="p51321752134620"><a name="p51321752134620"></a><a name="p51321752134620"></a>参数</p>
    </th>
    <th class="cellrowborder" valign="top" width="25%" id="mcps1.1.5.1.2"><p id="p141321452104613"><a name="p141321452104613"></a><a name="p141321452104613"></a>类型</p>
    </th>
    <th class="cellrowborder" valign="top" width="15%" id="mcps1.1.5.1.3"><p id="p171321352114613"><a name="p171321352114613"></a><a name="p171321352114613"></a>必填(M)/选填(O)</p>
    </th>
    <th class="cellrowborder" valign="top" width="40%" id="mcps1.1.5.1.4"><p id="p11132452154611"><a name="p11132452154611"></a><a name="p11132452154611"></a>说明</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row14132052204613"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.5.1.1 "><p id="p1313245254614"><a name="p1313245254614"></a><a name="p1313245254614"></a>applicationID</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.2 "><p id="p71332052194619"><a name="p71332052194619"></a><a name="p71332052194619"></a>string</p>
    </td>
    <td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.5.1.3 "><p id="p51331452164610"><a name="p51331452164610"></a><a name="p51331452164610"></a>M</p>
    </td>
    <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p1133185214612"><a name="p1133185214612"></a><a name="p1133185214612"></a>快游戏APP ID，在华为开发者联盟上创建快游戏后分配的唯一标识。</p>
    </td>
    </tr>
    <tr id="row14496182917473"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.5.1.1 "><p id="p14490203513569"><a name="p14490203513569"></a><a name="p14490203513569"></a>priceType</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.2 "><p id="p249013510567"><a name="p249013510567"></a><a name="p249013510567"></a>int</p>
    </td>
    <td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.5.1.3 "><p id="p4490123517569"><a name="p4490123517569"></a><a name="p4490123517569"></a>M</p>
    </td>
    <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p1232174818"><a name="p1232174818"></a><a name="p1232174818"></a>商品类型：</p>
    <a name="ul6733756125718"></a><a name="ul6733756125718"></a><ul id="ul6733756125718"><li>0：消耗型商品。</li><li>1：非消耗型商品。</li><li>2：订阅类商品。</li></ul>
    </td>
    </tr>
    <tr id="row9901153414712"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.5.1.1 "><p id="p976312917574"><a name="p976312917574"></a><a name="p976312917574"></a>productIds</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.2 "><p id="p39016344477"><a name="p39016344477"></a><a name="p39016344477"></a>List&lt;string&gt;</p>
    </td>
    <td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.5.1.3 "><p id="p9901234174716"><a name="p9901234174716"></a><a name="p9901234174716"></a>M</p>
    </td>
    <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p390133415474"><a name="p390133415474"></a><a name="p390133415474"></a>商品ID列表。</p>
    </td>
    </tr>
    <tr id="row14133115274618"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.5.1.1 "><p id="p613325211466"><a name="p613325211466"></a><a name="p613325211466"></a>success</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.2 "><p id="p7133115211467"><a name="p7133115211467"></a><a name="p7133115211467"></a>Action&lt;<a href="#li12133165216466">ObtainProductInfoSuccessResult</a>&gt;</p>
    </td>
    <td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.5.1.3 "><p id="p61331852134615"><a name="p61331852134615"></a><a name="p61331852134615"></a>O</p>
    </td>
    <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p131331352164617"><a name="p131331352164617"></a><a name="p131331352164617"></a>接口调用成功的回调函数。</p>
    </td>
    </tr>
    <tr id="row1133125214611"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.5.1.1 "><p id="p101335528461"><a name="p101335528461"></a><a name="p101335528461"></a>fail</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.2 "><p id="p7133185216466"><a name="p7133185216466"></a><a name="p7133185216466"></a>Action&lt;<a href="#li7135165215464">ObtainProductInfoFailResult</a>&gt;</p>
    </td>
    <td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.5.1.3 "><p id="p813318523461"><a name="p813318523461"></a><a name="p813318523461"></a>O</p>
    </td>
    <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p7133155294612"><a name="p7133155294612"></a><a name="p7133155294612"></a>接口调用失败的回调函数。</p>
    </td>
    </tr>
    <tr id="row11133175213466"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.5.1.1 "><p id="p313312524467"><a name="p313312524467"></a><a name="p313312524467"></a>complete</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.2 "><p id="p101335523468"><a name="p101335523468"></a><a name="p101335523468"></a>Action</p>
    </td>
    <td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.5.1.3 "><p id="p101331552204620"><a name="p101331552204620"></a><a name="p101331552204620"></a>O</p>
    </td>
    <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p8133252134611"><a name="p8133252134611"></a><a name="p8133252134611"></a>接口成功、失败均会调用的回调函数。</p>
    </td>
    </tr>
    </tbody>
    </table>

-   <a name="li12133165216466"></a>ObtainProductInfoSuccessResult参数

    <a name="table31331852144616"></a>
    <table><thead align="left"><tr id="row14134175215467"><th class="cellrowborder" valign="top" width="25%" id="mcps1.1.4.1.1"><p id="p12134752114617"><a name="p12134752114617"></a><a name="p12134752114617"></a>参数</p>
    </th>
    <th class="cellrowborder" valign="top" width="25%" id="mcps1.1.4.1.2"><p id="p1413445244615"><a name="p1413445244615"></a><a name="p1413445244615"></a>类型</p>
    </th>
    <th class="cellrowborder" valign="top" width="50%" id="mcps1.1.4.1.3"><p id="p1813465211465"><a name="p1813465211465"></a><a name="p1813465211465"></a>说明</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row213445264613"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p101341652114618"><a name="p101341652114618"></a><a name="p101341652114618"></a>returnCode</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p113416524469"><a name="p113416524469"></a><a name="p113416524469"></a>int</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p41341852184615"><a name="p41341852184615"></a><a name="p41341852184615"></a>成功返回码。</p>
    </td>
    </tr>
    <tr id="row1713425211461"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p81341652134613"><a name="p81341652134613"></a><a name="p81341652134613"></a>errMsg</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p1213495264617"><a name="p1213495264617"></a><a name="p1213495264617"></a>string</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p1913485294611"><a name="p1913485294611"></a><a name="p1913485294611"></a>成功返回码的描述信息。</p>
    </td>
    </tr>
    <tr id="row7134155254614"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p17138156195114"><a name="p17138156195114"></a><a name="p17138156195114"></a>productInfoList</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p1813711655118"><a name="p1813711655118"></a><a name="p1813711655118"></a>List&lt;<a href="#p52161457115316">productInfo</a>&gt;</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p21361610511"><a name="p21361610511"></a><a name="p21361610511"></a>商品详细信息。</p>
    </td>
    </tr>
    </tbody>
    </table>

    productInfo参数

    <a name="table1641114332545"></a>
    <table><thead align="left"><tr id="row4412033145418"><th class="cellrowborder" valign="top" width="25%" id="mcps1.1.4.1.1"><p id="p111862575513"><a name="p111862575513"></a><a name="p111862575513"></a>参数</p>
    </th>
    <th class="cellrowborder" valign="top" width="25%" id="mcps1.1.4.1.2"><p id="p141861450559"><a name="p141861450559"></a><a name="p141861450559"></a>类型</p>
    </th>
    <th class="cellrowborder" valign="top" width="50%" id="mcps1.1.4.1.3"><p id="p4186458550"><a name="p4186458550"></a><a name="p4186458550"></a>说明</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row1841217333542"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p189321336105412"><a name="p189321336105412"></a><a name="p189321336105412"></a>productId</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p1932136135415"><a name="p1932136135415"></a><a name="p1932136135415"></a>string</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p179321836135410"><a name="p179321836135410"></a><a name="p179321836135410"></a>商品ID。</p>
    </td>
    </tr>
    <tr id="row1941213319545"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p993253612543"><a name="p993253612543"></a><a name="p993253612543"></a>priceType</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p9932636105410"><a name="p9932636105410"></a><a name="p9932636105410"></a>int</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p13932936195415"><a name="p13932936195415"></a><a name="p13932936195415"></a>商品类型：</p>
    <a name="ul1093273675417"></a><a name="ul1093273675417"></a><ul id="ul1093273675417"><li>0 : 消耗型商品。</li><li>1 : 非消耗型商品。</li><li>2 : 订阅类商品。</li></ul>
    </td>
    </tr>
    <tr id="row44129335547"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p6933836145411"><a name="p6933836145411"></a><a name="p6933836145411"></a>price</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p20933123616544"><a name="p20933123616544"></a><a name="p20933123616544"></a>string</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p19933163613549"><a name="p19933163613549"></a><a name="p19933163613549"></a>商品展示价格（含税）。格式为“币种 商品价格”，例如“EUR 0.15”；部分国家/地区格式为“货币符号 商品价格”，例如中国大陆“￥0.15”。</p>
    <div class="note" id="note1254462814529"><a name="note1254462814529"></a><a name="note1254462814529"></a><span class="notetitle"> 说明： </span><div class="notebody"><p id="p1854302815525"><a name="p1854302815525"></a><a name="p1854302815525"></a>若用户已为非订阅类商品设置促销价格，则返回商品的促销价格。</p>
    </div></div>
    </td>
    </tr>
    <tr id="row18413133314541"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p179331936175418"><a name="p179331936175418"></a><a name="p179331936175418"></a>microsPrice</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p993363695411"><a name="p993363695411"></a><a name="p993363695411"></a>long</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p1893314363542"><a name="p1893314363542"></a><a name="p1893314363542"></a>商品微单位价格。商品实际价格乘以1,000,000后的微单位价格，例如实际价格是1.99美元，则对应的微单位价格为：1.99*1000000=1990000。</p>
    </td>
    </tr>
    <tr id="row13413233155412"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p9933153685419"><a name="p9933153685419"></a><a name="p9933153685419"></a>currency</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p1693353618546"><a name="p1693353618546"></a><a name="p1693353618546"></a>string</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p79331236135411"><a name="p79331236135411"></a><a name="p79331236135411"></a>支付商品的币种。</p>
    </td>
    </tr>
    <tr id="row10413133315418"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p1793383616541"><a name="p1793383616541"></a><a name="p1793383616541"></a>productName</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p18933163665412"><a name="p18933163665412"></a><a name="p18933163665412"></a>string</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p7933153615415"><a name="p7933153615415"></a><a name="p7933153615415"></a>商品名称。</p>
    </td>
    </tr>
    <tr id="row1441353315544"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p19933336155418"><a name="p19933336155418"></a><a name="p19933336155418"></a>productDesc</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p593333625415"><a name="p593333625415"></a><a name="p593333625415"></a>string</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p15933636105412"><a name="p15933636105412"></a><a name="p15933636105412"></a>商品简介。</p>
    </td>
    </tr>
    <tr id="row441383319542"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p5933103615543"><a name="p5933103615543"></a><a name="p5933103615543"></a>subPeriod</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p19933143695411"><a name="p19933143695411"></a><a name="p19933143695411"></a>string</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p764514526124"><a name="p764514526124"></a><a name="p764514526124"></a>订阅类商品的自动续费周期单位。例如P1W：1周；P1M：1个月 ；P2M：2个月；P6M：6个月；P1Y：1年。</p>
    </td>
    </tr>
    <tr id="row1741463315410"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p15934036115417"><a name="p15934036115417"></a><a name="p15934036115417"></a>subSpecialPrice</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p14934153610549"><a name="p14934153610549"></a><a name="p14934153610549"></a>string</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p6934636155417"><a name="p6934636155417"></a><a name="p6934636155417"></a>订阅类商品的优惠价格（不含税）。格式为“币种 商品价格”，例如“EUR 0.15”；部分国家/地区格式为“货币符号 商品价格”，例如中国大陆“￥0.15”。</p>
    </td>
    </tr>
    <tr id="row74141933165413"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p39342362546"><a name="p39342362546"></a><a name="p39342362546"></a>subSpecialPriceMicros</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p109341836195413"><a name="p109341836195413"></a><a name="p109341836195413"></a>long</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p1493443665417"><a name="p1493443665417"></a><a name="p1493443665417"></a>订阅类商品的优惠微单位价格。商品优惠价格乘以1,000,000后的微单位价格，例如优惠价格是1.99美元，则对应的优惠微单位价格为：1.99*1000000=1990000。</p>
    </td>
    </tr>
    <tr id="row1641493325412"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p15934123635410"><a name="p15934123635410"></a><a name="p15934123635410"></a>subSpecialPeriod</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p79341436175414"><a name="p79341436175414"></a><a name="p79341436175414"></a>string</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p7934143618547"><a name="p7934143618547"></a><a name="p7934143618547"></a>订阅类商品的优惠周期单位。例如P1W：1周；P1M：1个月 ；P2M：2个月；P6M：6个月；P1Y：1年。</p>
    </td>
    </tr>
    <tr id="row11414143325419"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p169341736135416"><a name="p169341736135416"></a><a name="p169341736135416"></a>subSpecialPeriodCycles</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p0934193635419"><a name="p0934193635419"></a><a name="p0934193635419"></a>string</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p3377114013415"><a name="p3377114013415"></a><a name="p3377114013415"></a>订阅类商品的优惠续费周期。</p>
    </td>
    </tr>
    <tr id="row74141833165419"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p159351336135413"><a name="p159351336135413"></a><a name="p159351336135413"></a>subsFreeTrialPeriod</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p8935103610547"><a name="p8935103610547"></a><a name="p8935103610547"></a>string</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p993593665411"><a name="p993593665411"></a><a name="p993593665411"></a>订阅类商品的免费试用期限。</p>
    </td>
    </tr>
    <tr id="row14415143312548"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p109351736195418"><a name="p109351736195418"></a><a name="p109351736195418"></a>subsGroupId</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p7935123611548"><a name="p7935123611548"></a><a name="p7935123611548"></a>string</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p093516365545"><a name="p093516365545"></a><a name="p093516365545"></a>订阅类商品所属订阅组ID。</p>
    </td>
    </tr>
    <tr id="row64151335547"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p179351936205417"><a name="p179351936205417"></a><a name="p179351936205417"></a>subsGroupTitle</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p14935136175412"><a name="p14935136175412"></a><a name="p14935136175412"></a>string</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p13935183618546"><a name="p13935183618546"></a><a name="p13935183618546"></a>订阅类商品所属订阅组名称。</p>
    </td>
    </tr>
    <tr id="row1241613395410"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p493516366549"><a name="p493516366549"></a><a name="p493516366549"></a>subsProductLevel</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p1593543625417"><a name="p1593543625417"></a><a name="p1593543625417"></a>string</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p1993518369546"><a name="p1993518369546"></a><a name="p1993518369546"></a>订阅类商品在订阅组的级别。</p>
    </td>
    </tr>
    <tr id="row10416103311547"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p1935936135410"><a name="p1935936135410"></a><a name="p1935936135410"></a>originalMicroPrice</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p1593583615413"><a name="p1593583615413"></a><a name="p1593583615413"></a>string</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p9936836175412"><a name="p9936836175412"></a><a name="p9936836175412"></a>商品原价的微单位价格。商品原价乘以1,000,000后的微单位价格，例如原价是1.99美元，则对应的微单位价格为：1.99*1000000=1990000。</p>
    </td>
    </tr>
    <tr id="row104161333105415"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p10936436135411"><a name="p10936436135411"></a><a name="p10936436135411"></a>originalLocalPrice</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p18936236135417"><a name="p18936236135417"></a><a name="p18936236135417"></a>string</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p693713665414"><a name="p693713665414"></a><a name="p693713665414"></a>商品原价（含税）。格式为“币种 商品价格”，例如“EUR 0.15”；部分国家/地区格式为“货币符号 商品价格”，例如中国大陆“￥0.15”。</p>
    </td>
    </tr>
    <tr id="row1441616336546"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p13937236135414"><a name="p13937236135414"></a><a name="p13937236135414"></a>status</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p1393713615542"><a name="p1393713615542"></a><a name="p1393713615542"></a>int</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p593793635417"><a name="p593793635417"></a><a name="p593793635417"></a>订阅类商品状态：</p>
    <a name="ul1893783635414"></a><a name="ul1893783635414"></a><ul id="ul1893783635414"><li>0：商品有效。</li><li>1：商品无法订阅，且无法续订。</li><li>3：商品下线，无法订阅，但支持老用户续订。</li></ul>
    </td>
    </tr>
    </tbody>
    </table>

-   <a name="li7135165215464"></a>ObtainProductInfoFailResult参数

    <a name="table81351052184615"></a>
    <table><thead align="left"><tr id="row2136165254612"><th class="cellrowborder" valign="top" width="25%" id="mcps1.1.4.1.1"><p id="p41361452114611"><a name="p41361452114611"></a><a name="p41361452114611"></a>参数</p>
    </th>
    <th class="cellrowborder" valign="top" width="25%" id="mcps1.1.4.1.2"><p id="p1613615522464"><a name="p1613615522464"></a><a name="p1613615522464"></a>类型</p>
    </th>
    <th class="cellrowborder" valign="top" width="50%" id="mcps1.1.4.1.3"><p id="p3136852164610"><a name="p3136852164610"></a><a name="p3136852164610"></a>说明</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row12136115216465"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p19136165212468"><a name="p19136165212468"></a><a name="p19136165212468"></a>code</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p413685224612"><a name="p413685224612"></a><a name="p413685224612"></a>int</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p1913611521463"><a name="p1913611521463"></a><a name="p1913611521463"></a><a href="#section0935245195318">错误码</a>。</p>
    </td>
    </tr>
    <tr id="row41369522468"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p4136145219465"><a name="p4136145219465"></a><a name="p4136145219465"></a>data</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p31360529466"><a name="p31360529466"></a><a name="p31360529466"></a>string</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p12137752194617"><a name="p12137752194617"></a><a name="p12137752194617"></a>错误码描述信息。</p>
    </td>
    </tr>
    </tbody>
    </table>

-   示例代码

    ```
    public void ObtainProductInfo()
    {
            Debug.Log("PayScene ObtainProductInfo.");
            ObtainProductInfoOption obtainProductInfoOption = new ObtainProductInfoOption
            {
                // 在华为开发者联盟上获取真实有效的APP ID
                applicationID = "1021**433",
                // 0：消耗 1：非消耗 2：订阅
                priceType = 0,
                // 替换为真实有效的待支付商品ID
                productIds = "202**619",
                success = res =>
                {
                    Debug.Log("ObtainProductInfo returnCode:" + res.returnCode + ", errMsg:"+ res.errMsg + ", productInfoList:" + res.productInfoList);
                },
                fail = res =>
                {
                     Debug.Log("ObtainProductInfo data:" + res.data + ", code:" + res.code);
                },
                complete = () => { Debug.Log("ObtainProductInfo complete."); }
            };
    
            QG.ObtainProductInfo(obtainProductInfoOption);
    }
    ```


### CreatePurchaseIntent\(CreatePurchaseIntentOption createPurchaseIntentOption\)\(1103+\)<a name="section515110599437"></a>

-   描述

    创建在AGC控制台配置的商品购买订单，支持购买消耗型商品、非消耗型商品、订阅类商品。

-   请求参数

    <a name="table8638145614460"></a>
    <table><thead align="left"><tr id="row11638165644616"><th class="cellrowborder" valign="top" width="20%" id="mcps1.1.5.1.1"><p id="p1563815614617"><a name="p1563815614617"></a><a name="p1563815614617"></a>参数</p>
    </th>
    <th class="cellrowborder" valign="top" width="25%" id="mcps1.1.5.1.2"><p id="p1263820563466"><a name="p1263820563466"></a><a name="p1263820563466"></a>类型</p>
    </th>
    <th class="cellrowborder" valign="top" width="15%" id="mcps1.1.5.1.3"><p id="p14638165664610"><a name="p14638165664610"></a><a name="p14638165664610"></a>必填(M)/选填(O)</p>
    </th>
    <th class="cellrowborder" valign="top" width="40%" id="mcps1.1.5.1.4"><p id="p1063813561463"><a name="p1063813561463"></a><a name="p1063813561463"></a>说明</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row1363818569468"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.5.1.1 "><p id="p1016216164209"><a name="p1016216164209"></a><a name="p1016216164209"></a>applicationID</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.2 "><p id="p11162111602013"><a name="p11162111602013"></a><a name="p11162111602013"></a>string</p>
    </td>
    <td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.5.1.3 "><p id="p7162121622018"><a name="p7162121622018"></a><a name="p7162121622018"></a>M</p>
    </td>
    <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p1116221611208"><a name="p1116221611208"></a><a name="p1116221611208"></a>快游戏APP ID，在华为开发者联盟上创建快游戏后分配的唯一标识。</p>
    </td>
    </tr>
    <tr id="row126395565469"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.5.1.1 "><p id="p2163201622014"><a name="p2163201622014"></a><a name="p2163201622014"></a>publicKey</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.2 "><p id="p816331620204"><a name="p816331620204"></a><a name="p816331620204"></a>string</p>
    </td>
    <td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.5.1.3 "><p id="p13163516112010"><a name="p13163516112010"></a><a name="p13163516112010"></a>M</p>
    </td>
    <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p181631616192012"><a name="p181631616192012"></a><a name="p181631616192012"></a>开通应用内支付服务时的公钥。</p>
    </td>
    </tr>
    <tr id="row12639456114616"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.5.1.1 "><p id="p916371602015"><a name="p916371602015"></a><a name="p916371602015"></a>productId</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.2 "><p id="p2016321619201"><a name="p2016321619201"></a><a name="p2016321619201"></a>string</p>
    </td>
    <td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.5.1.3 "><p id="p3163116202020"><a name="p3163116202020"></a><a name="p3163116202020"></a>M</p>
    </td>
    <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p6163181622015"><a name="p6163181622015"></a><a name="p6163181622015"></a>待支付商品ID。</p>
    </td>
    </tr>
    <tr id="row1640656174619"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.5.1.1 "><p id="p5163316142017"><a name="p5163316142017"></a><a name="p5163316142017"></a>priceType</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.2 "><p id="p91631016172010"><a name="p91631016172010"></a><a name="p91631016172010"></a>int</p>
    </td>
    <td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.5.1.3 "><p id="p61631616122017"><a name="p61631616122017"></a><a name="p61631616122017"></a>M</p>
    </td>
    <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p1116351652012"><a name="p1116351652012"></a><a name="p1116351652012"></a>商品类型：</p>
    <a name="ul171632163209"></a><a name="ul171632163209"></a><ul id="ul171632163209"><li>0 : 消耗型商品。</li><li>1 : 非消耗型商品。</li><li>2 : 订阅类商品。</li></ul>
    </td>
    </tr>
    <tr id="row520342716531"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.5.1.1 "><p id="p1316311616209"><a name="p1316311616209"></a><a name="p1316311616209"></a>developerPayload</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.2 "><p id="p3163141692011"><a name="p3163141692011"></a><a name="p3163141692011"></a>string</p>
    </td>
    <td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.5.1.3 "><p id="p116351672014"><a name="p116351672014"></a><a name="p116351672014"></a>O</p>
    </td>
    <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p6163121662012"><a name="p6163121662012"></a><a name="p6163121662012"></a>商户侧保留信息，长度限制为[0, 256]。若传入值，在成功支付后的回调结果中原样返回给应用。</p>
    </td>
    </tr>
    <tr id="row847472817535"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.5.1.1 "><p id="p1721824105418"><a name="p1721824105418"></a><a name="p1721824105418"></a>success</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.2 "><p id="p16721102455410"><a name="p16721102455410"></a><a name="p16721102455410"></a>Action&lt;<a href="#li1564005613469">CreatePurchaseIntentSuccessResult</a>&gt;</p>
    </td>
    <td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.5.1.3 "><p id="p13721024135415"><a name="p13721024135415"></a><a name="p13721024135415"></a>O</p>
    </td>
    <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p1372113248542"><a name="p1372113248542"></a><a name="p1372113248542"></a>接口调用成功的回调函数。</p>
    </td>
    </tr>
    <tr id="row235962955313"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.5.1.1 "><p id="p972152455418"><a name="p972152455418"></a><a name="p972152455418"></a>fail</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.2 "><p id="p1872152405413"><a name="p1872152405413"></a><a name="p1872152405413"></a>Action&lt;<a href="#li1764315613465">CreatePurchaseIntentFailResult</a>&gt;</p>
    </td>
    <td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.5.1.3 "><p id="p137220243546"><a name="p137220243546"></a><a name="p137220243546"></a>O</p>
    </td>
    <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p9722924145410"><a name="p9722924145410"></a><a name="p9722924145410"></a>接口调用失败的回调函数。</p>
    </td>
    </tr>
    <tr id="row191131330105318"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.5.1.1 "><p id="p1472262415546"><a name="p1472262415546"></a><a name="p1472262415546"></a>complete</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.2 "><p id="p472202465415"><a name="p472202465415"></a><a name="p472202465415"></a>Action</p>
    </td>
    <td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.5.1.3 "><p id="p372222418549"><a name="p372222418549"></a><a name="p372222418549"></a>O</p>
    </td>
    <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p12722182485411"><a name="p12722182485411"></a><a name="p12722182485411"></a>接口成功、失败均会调用的回调函数。</p>
    </td>
    </tr>
    </tbody>
    </table>

-   <a name="li1564005613469"></a>CreatePurchaseIntentSuccessResult参数

    <a name="table16640356194617"></a>
    <table><thead align="left"><tr id="row11640656124617"><th class="cellrowborder" valign="top" width="25%" id="mcps1.1.4.1.1"><p id="p764065684617"><a name="p764065684617"></a><a name="p764065684617"></a>参数</p>
    </th>
    <th class="cellrowborder" valign="top" width="24.990000000000002%" id="mcps1.1.4.1.2"><p id="p18641956124615"><a name="p18641956124615"></a><a name="p18641956124615"></a>类型</p>
    </th>
    <th class="cellrowborder" valign="top" width="50.01%" id="mcps1.1.4.1.3"><p id="p1641456134610"><a name="p1641456134610"></a><a name="p1641456134610"></a>说明</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row6641105616469"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p364115617467"><a name="p364115617467"></a><a name="p364115617467"></a>returnCode</p>
    </td>
    <td class="cellrowborder" valign="top" width="24.990000000000002%" headers="mcps1.1.4.1.2 "><p id="p7641256164616"><a name="p7641256164616"></a><a name="p7641256164616"></a>int</p>
    </td>
    <td class="cellrowborder" valign="top" width="50.01%" headers="mcps1.1.4.1.3 "><p id="p16411656134610"><a name="p16411656134610"></a><a name="p16411656134610"></a>成功返回码。</p>
    </td>
    </tr>
    <tr id="row0641556154611"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p14641175619469"><a name="p14641175619469"></a><a name="p14641175619469"></a>errMsg</p>
    </td>
    <td class="cellrowborder" valign="top" width="24.990000000000002%" headers="mcps1.1.4.1.2 "><p id="p2064155674615"><a name="p2064155674615"></a><a name="p2064155674615"></a>string</p>
    </td>
    <td class="cellrowborder" valign="top" width="50.01%" headers="mcps1.1.4.1.3 "><p id="p12641185634613"><a name="p12641185634613"></a><a name="p12641185634613"></a>成功返回码的描述信息。</p>
    </td>
    </tr>
    <tr id="row19641115624616"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p15287019142820"><a name="p15287019142820"></a><a name="p15287019142820"></a>inAppDataSignature</p>
    </td>
    <td class="cellrowborder" valign="top" width="24.990000000000002%" headers="mcps1.1.4.1.2 "><p id="p9287419112817"><a name="p9287419112817"></a><a name="p9287419112817"></a>string</p>
    </td>
    <td class="cellrowborder" valign="top" width="50.01%" headers="mcps1.1.4.1.3 "><p id="p11417112117534"><a name="p11417112117534"></a><a name="p11417112117534"></a>使用私钥签名购买的签名字符串，签名算法为“SHA256WITHRSA”。支付成功后，需使用支付公钥对购买信息进行验签。</p>
    </td>
    </tr>
    <tr id="row864245610463"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p13287101932813"><a name="p13287101932813"></a><a name="p13287101932813"></a>inAppPurchaseData</p>
    </td>
    <td class="cellrowborder" valign="top" width="24.990000000000002%" headers="mcps1.1.4.1.2 "><p id="p108701513203913"><a name="p108701513203913"></a><a name="p108701513203913"></a><a href="#p4588528145718">InAppPurchaseData</a></p>
    </td>
    <td class="cellrowborder" valign="top" width="50.01%" headers="mcps1.1.4.1.3 "><p id="p62874194281"><a name="p62874194281"></a><a name="p62874194281"></a>购买订单详情信息。</p>
    </td>
    </tr>
    </tbody>
    </table>

-   <a name="li1764315613465"></a>CreatePurchaseIntentFailResult参数

    <a name="table126435560466"></a>
    <table><thead align="left"><tr id="row86431056194615"><th class="cellrowborder" valign="top" width="25%" id="mcps1.1.4.1.1"><p id="p5643155618469"><a name="p5643155618469"></a><a name="p5643155618469"></a>参数</p>
    </th>
    <th class="cellrowborder" valign="top" width="25%" id="mcps1.1.4.1.2"><p id="p164415616465"><a name="p164415616465"></a><a name="p164415616465"></a>类型</p>
    </th>
    <th class="cellrowborder" valign="top" width="50%" id="mcps1.1.4.1.3"><p id="p1564455694619"><a name="p1564455694619"></a><a name="p1564455694619"></a>说明</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row1764417564466"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p764475674611"><a name="p764475674611"></a><a name="p764475674611"></a>code</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p106441567463"><a name="p106441567463"></a><a name="p106441567463"></a>int</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p1164445618462"><a name="p1164445618462"></a><a name="p1164445618462"></a><a href="#section0935245195318">错误码</a>。</p>
    </td>
    </tr>
    <tr id="row264415664620"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p36441556134614"><a name="p36441556134614"></a><a name="p36441556134614"></a>data</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p564425664614"><a name="p564425664614"></a><a name="p564425664614"></a>string</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p1964418563462"><a name="p1964418563462"></a><a name="p1964418563462"></a>错误码描述信息。</p>
    </td>
    </tr>
    </tbody>
    </table>

-   示例代码

    ```
    public void CreatePurchaseIntent()
    {
            Debug.Log("PayScene CreatePurchaseIntent.");
            CreatePurchaseIntentOption createPurchaseIntentOption = new CreatePurchaseIntentOption
            {
                // 在华为开发者联盟上获取真实有效的APP ID
                applicationID = "1021**433",
                // 替换为真实有效的支付公钥
                publicKey = "sdsdff****affdsf",
                // 替换为真实有效的待支付商品ID
                productIds = "202**619",
                // 0：消耗 1：非消耗 2：订阅
                priceType = 0,
                success = res =>
                {
                    Debug.Log("CreatePurchaseIntent returnCode:" + res.returnCode + ", errMsg:"+ res.errMsg + ", inAppDataSignature:" + 
                    res.inAppDataSignature + ", inAppPurchaseData:" + res.inAppPurchaseData);
                },
                fail = res =>
                {
                    Debug.Log("CreatePurchaseIntent data:" + res.data + ", code:" + res.code);
                },
                complete = () => { Debug.Log("CreatePurchaseIntent complete."); }
            };
            QG.CreatePurchaseIntent(createPurchaseIntentOption);
    }
    ```


### ConsumeOwnedPurchase\(ConsumeOwnedPurchaseOption consumeOwnedPurchaseOption\)\(1103+\)<a name="section20910454444"></a>

-   描述

    在商品支付成功后，应用需要在发放商品成功之后调用此接口对消耗型商品执行消耗操作。您需把已发货的购买Token传至您的服务器，后续即使消耗失败也可以从您的服务器拉取数据进行对比，避免出现异常。

-   请求参数

    <a name="table169753589465"></a>
    <table><thead align="left"><tr id="row109751658204616"><th class="cellrowborder" valign="top" width="20%" id="mcps1.1.5.1.1"><p id="p0975135874618"><a name="p0975135874618"></a><a name="p0975135874618"></a>参数</p>
    </th>
    <th class="cellrowborder" valign="top" width="25%" id="mcps1.1.5.1.2"><p id="p1497565834614"><a name="p1497565834614"></a><a name="p1497565834614"></a>类型</p>
    </th>
    <th class="cellrowborder" valign="top" width="15%" id="mcps1.1.5.1.3"><p id="p13975195810468"><a name="p13975195810468"></a><a name="p13975195810468"></a>必填(M)/选填(O)</p>
    </th>
    <th class="cellrowborder" valign="top" width="40%" id="mcps1.1.5.1.4"><p id="p17975185814464"><a name="p17975185814464"></a><a name="p17975185814464"></a>说明</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row14975115854610"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.5.1.1 "><p id="p16975758104610"><a name="p16975758104610"></a><a name="p16975758104610"></a>applicationID</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.2 "><p id="p1975558204619"><a name="p1975558204619"></a><a name="p1975558204619"></a>string</p>
    </td>
    <td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.5.1.3 "><p id="p18975185815465"><a name="p18975185815465"></a><a name="p18975185815465"></a>M</p>
    </td>
    <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p169751258194619"><a name="p169751258194619"></a><a name="p169751258194619"></a>快游戏APP ID，在华为开发者联盟上创建快游戏后分配的唯一标识。</p>
    </td>
    </tr>
    <tr id="row59765582462"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.5.1.1 "><p id="p17356153474519"><a name="p17356153474519"></a><a name="p17356153474519"></a>developerChallenge</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.2 "><p id="p6356113414514"><a name="p6356113414514"></a><a name="p6356113414514"></a>string</p>
    </td>
    <td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.5.1.3 "><p id="p1335623410458"><a name="p1335623410458"></a><a name="p1335623410458"></a>M</p>
    </td>
    <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p14377193782713"><a name="p14377193782713"></a><a name="p14377193782713"></a>应用请求消耗商品时自定义的挑战字。消耗成功后此挑战字会记录在购买信息中返回，不超过64个字符。若与已有挑战字重复，表示重复消耗，同样会原样返回该挑战字。</p>
    </td>
    </tr>
    <tr id="row169766581464"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.5.1.1 "><p id="p16356183424513"><a name="p16356183424513"></a><a name="p16356183424513"></a>purchaseToken</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.2 "><p id="p410438183617"><a name="p410438183617"></a><a name="p410438183617"></a>string</p>
    </td>
    <td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.5.1.3 "><p id="p8357143494510"><a name="p8357143494510"></a><a name="p8357143494510"></a>M</p>
    </td>
    <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p1699381051018"><a name="p1699381051018"></a><a name="p1699381051018"></a>用户购买商品的标识。</p>
    </td>
    </tr>
    <tr id="row1976145824614"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.5.1.1 "><p id="p3357734174513"><a name="p3357734174513"></a><a name="p3357734174513"></a>publicKey</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.2 "><p id="p122157833618"><a name="p122157833618"></a><a name="p122157833618"></a>string</p>
    </td>
    <td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.5.1.3 "><p id="p1235783419453"><a name="p1235783419453"></a><a name="p1235783419453"></a>M</p>
    </td>
    <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p6357153414457"><a name="p6357153414457"></a><a name="p6357153414457"></a>开通应用内支付服务时的公钥。</p>
    </td>
    </tr>
    <tr id="row1606919164114"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.5.1.1 "><p id="p1897620586461"><a name="p1897620586461"></a><a name="p1897620586461"></a>success</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.2 "><p id="p1097615814613"><a name="p1097615814613"></a><a name="p1097615814613"></a>Action&lt;<a href="#li149767583460">ConsumeOwnedPurchaseSuccessResult</a>&gt;</p>
    </td>
    <td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.5.1.3 "><p id="p139761058164613"><a name="p139761058164613"></a><a name="p139761058164613"></a>O</p>
    </td>
    <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p097625864616"><a name="p097625864616"></a><a name="p097625864616"></a>接口调用成功的回调函数。</p>
    </td>
    </tr>
    <tr id="row10365172084116"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.5.1.1 "><p id="p197685813466"><a name="p197685813466"></a><a name="p197685813466"></a>fail</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.2 "><p id="p89761258124614"><a name="p89761258124614"></a><a name="p89761258124614"></a>Action&lt;<a href="#li139781058144617">ConsumeOwnedPurchaseFailResult</a>&gt;</p>
    </td>
    <td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.5.1.3 "><p id="p189761258164614"><a name="p189761258164614"></a><a name="p189761258164614"></a>O</p>
    </td>
    <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p5976105894610"><a name="p5976105894610"></a><a name="p5976105894610"></a>接口调用失败的回调函数。</p>
    </td>
    </tr>
    <tr id="row844311211411"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.5.1.1 "><p id="p14976165854610"><a name="p14976165854610"></a><a name="p14976165854610"></a>complete</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.2 "><p id="p1197655812461"><a name="p1197655812461"></a><a name="p1197655812461"></a>Action</p>
    </td>
    <td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.5.1.3 "><p id="p89767582465"><a name="p89767582465"></a><a name="p89767582465"></a>O</p>
    </td>
    <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p89765583460"><a name="p89765583460"></a><a name="p89765583460"></a>接口成功、失败均会调用的回调函数。</p>
    </td>
    </tr>
    </tbody>
    </table>

-   <a name="li149767583460"></a>ConsumeOwnedPurchaseSuccessResult参数

    <a name="table1097625812465"></a>
    <table><thead align="left"><tr id="row097605814610"><th class="cellrowborder" valign="top" width="25%" id="mcps1.1.4.1.1"><p id="p1897765834612"><a name="p1897765834612"></a><a name="p1897765834612"></a>参数</p>
    </th>
    <th class="cellrowborder" valign="top" width="25%" id="mcps1.1.4.1.2"><p id="p10977158114615"><a name="p10977158114615"></a><a name="p10977158114615"></a>类型</p>
    </th>
    <th class="cellrowborder" valign="top" width="50%" id="mcps1.1.4.1.3"><p id="p59771358154615"><a name="p59771358154615"></a><a name="p59771358154615"></a>说明</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row197795816464"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p1977155884617"><a name="p1977155884617"></a><a name="p1977155884617"></a>returnCode</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p797716589461"><a name="p797716589461"></a><a name="p797716589461"></a>int</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p397717587469"><a name="p397717587469"></a><a name="p397717587469"></a>成功返回码。</p>
    </td>
    </tr>
    <tr id="row797745815466"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p1697775884618"><a name="p1697775884618"></a><a name="p1697775884618"></a>errMsg</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p69778588462"><a name="p69778588462"></a><a name="p69778588462"></a>string</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p15977145815465"><a name="p15977145815465"></a><a name="p15977145815465"></a>成功返回码的描述信息。</p>
    </td>
    </tr>
    <tr id="row19977125813461"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p633643031112"><a name="p633643031112"></a><a name="p633643031112"></a>consumePurchaseData</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p1470765973617"><a name="p1470765973617"></a><a name="p1470765973617"></a><a href="#p318990131612">ConsumePurchaseData</a></p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p15336730141116"><a name="p15336730141116"></a><a name="p15336730141116"></a>消耗结果信息。</p>
    </td>
    </tr>
    <tr id="row097811589466"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p19336203001118"><a name="p19336203001118"></a><a name="p19336203001118"></a>dataSignature</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p14826185917364"><a name="p14826185917364"></a><a name="p14826185917364"></a>string</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p18336153013115"><a name="p18336153013115"></a><a name="p18336153013115"></a>使用IAP私钥生成的签名字符串。</p>
    </td>
    </tr>
    </tbody>
    </table>

    ConsumePurchaseData参数

    <a name="table1822732641614"></a>
    <table><thead align="left"><tr id="row2022815264167"><th class="cellrowborder" valign="top" width="24.51%" id="mcps1.1.4.1.1"><p id="p1793705319258"><a name="p1793705319258"></a><a name="p1793705319258"></a>参数</p>
    </th>
    <th class="cellrowborder" valign="top" width="20.09%" id="mcps1.1.4.1.2"><p id="p89371753142517"><a name="p89371753142517"></a><a name="p89371753142517"></a>类型</p>
    </th>
    <th class="cellrowborder" valign="top" width="55.400000000000006%" id="mcps1.1.4.1.3"><p id="p293705392519"><a name="p293705392519"></a><a name="p293705392519"></a>说明</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row722818267166"><td class="cellrowborder" valign="top" width="24.51%" headers="mcps1.1.4.1.1 "><p id="p5853162913162"><a name="p5853162913162"></a><a name="p5853162913162"></a>applicationId</p>
    </td>
    <td class="cellrowborder" valign="top" width="20.09%" headers="mcps1.1.4.1.2 "><p id="p18853162915168"><a name="p18853162915168"></a><a name="p18853162915168"></a>long</p>
    </td>
    <td class="cellrowborder" valign="top" width="55.400000000000006%" headers="mcps1.1.4.1.3 "><p id="p3840184634610"><a name="p3840184634610"></a><a name="p3840184634610"></a>创建快游戏后分配的唯一标识。</p>
    </td>
    </tr>
    <tr id="row1228726151616"><td class="cellrowborder" valign="top" width="24.51%" headers="mcps1.1.4.1.1 "><p id="p4853132911616"><a name="p4853132911616"></a><a name="p4853132911616"></a>autoRenewing</p>
    </td>
    <td class="cellrowborder" valign="top" width="20.09%" headers="mcps1.1.4.1.2 "><p id="p158532293165"><a name="p158532293165"></a><a name="p158532293165"></a>bool</p>
    </td>
    <td class="cellrowborder" valign="top" width="55.400000000000006%" headers="mcps1.1.4.1.3 "><p id="p9885191231918"><a name="p9885191231918"></a><a name="p9885191231918"></a>是否自动续订：</p>
    <a name="ul88851212111920"></a><a name="ul88851212111920"></a><ul id="ul88851212111920"><li>非订阅类商品返回false。</li><li>订阅类商品：<a name="ul14885131210194"></a><a name="ul14885131210194"></a><ul id="ul14885131210194"><li>ture：处于订阅状态，且在下一个续费周期自动续订。</li><li>false：订阅类商品已取消订阅。用户可在下个续费周期之前访问历史订阅内容。</li></ul>
    </li></ul>
    <div class="note" id="note0886181261920"><a name="note0886181261920"></a><a name="note0886181261920"></a><span class="notetitle"> 说明： </span><div class="notebody"><p id="p688621219194"><a name="p688621219194"></a><a name="p688621219194"></a>只要未过订阅类商品的宽限期，就会返回true。</p>
    </div></div>
    </td>
    </tr>
    <tr id="row172291226171618"><td class="cellrowborder" valign="top" width="24.51%" headers="mcps1.1.4.1.1 "><p id="p3853102951620"><a name="p3853102951620"></a><a name="p3853102951620"></a>orderId</p>
    </td>
    <td class="cellrowborder" valign="top" width="20.09%" headers="mcps1.1.4.1.2 "><p id="p10789773711"><a name="p10789773711"></a><a name="p10789773711"></a>string</p>
    </td>
    <td class="cellrowborder" valign="top" width="55.400000000000006%" headers="mcps1.1.4.1.3 "><p id="p1785382961610"><a name="p1785382961610"></a><a name="p1785382961610"></a>华为支付的订单ID，在成功支付后生成。</p>
    </td>
    </tr>
    <tr id="row52291526131612"><td class="cellrowborder" valign="top" width="24.51%" headers="mcps1.1.4.1.1 "><p id="p885318291166"><a name="p885318291166"></a><a name="p885318291166"></a>packageName</p>
    </td>
    <td class="cellrowborder" valign="top" width="20.09%" headers="mcps1.1.4.1.2 "><p id="p81844733718"><a name="p81844733718"></a><a name="p81844733718"></a>string</p>
    </td>
    <td class="cellrowborder" valign="top" width="55.400000000000006%" headers="mcps1.1.4.1.3 "><p id="p1285332911612"><a name="p1285332911612"></a><a name="p1285332911612"></a>客户端应用包名。</p>
    </td>
    </tr>
    <tr id="row12291526141614"><td class="cellrowborder" valign="top" width="24.51%" headers="mcps1.1.4.1.1 "><p id="p13854112910166"><a name="p13854112910166"></a><a name="p13854112910166"></a>productId</p>
    </td>
    <td class="cellrowborder" valign="top" width="20.09%" headers="mcps1.1.4.1.2 "><p id="p4292127183712"><a name="p4292127183712"></a><a name="p4292127183712"></a>string</p>
    </td>
    <td class="cellrowborder" valign="top" width="55.400000000000006%" headers="mcps1.1.4.1.3 "><p id="p20854132941612"><a name="p20854132941612"></a><a name="p20854132941612"></a>商品ID。</p>
    </td>
    </tr>
    <tr id="row4230102617161"><td class="cellrowborder" valign="top" width="24.51%" headers="mcps1.1.4.1.1 "><p id="p1854122941619"><a name="p1854122941619"></a><a name="p1854122941619"></a>purchaseTime</p>
    </td>
    <td class="cellrowborder" valign="top" width="20.09%" headers="mcps1.1.4.1.2 "><p id="p138921328191617"><a name="p138921328191617"></a><a name="p138921328191617"></a>long</p>
    </td>
    <td class="cellrowborder" valign="top" width="55.400000000000006%" headers="mcps1.1.4.1.3 "><p id="p12854529151612"><a name="p12854529151612"></a><a name="p12854529151612"></a>商品购买的时间戳。从1970年1月1日0时起到商品购买时间的毫秒数。</p>
    </td>
    </tr>
    <tr id="row723062601615"><td class="cellrowborder" valign="top" width="24.51%" headers="mcps1.1.4.1.1 "><p id="p18854192931616"><a name="p18854192931616"></a><a name="p18854192931616"></a>purchaseState</p>
    </td>
    <td class="cellrowborder" valign="top" width="20.09%" headers="mcps1.1.4.1.2 "><p id="p2870162814167"><a name="p2870162814167"></a><a name="p2870162814167"></a>int</p>
    </td>
    <td class="cellrowborder" valign="top" width="55.400000000000006%" headers="mcps1.1.4.1.3 "><p id="p88547299169"><a name="p88547299169"></a><a name="p88547299169"></a>订单状态：</p>
    <a name="ul178547294167"></a><a name="ul178547294167"></a><ul id="ul178547294167"><li>-1：初始化，不可见。</li><li>0：已购买。</li><li>1：已取消。</li><li>2：已退款。</li></ul>
    </td>
    </tr>
    <tr id="row523022631616"><td class="cellrowborder" valign="top" width="24.51%" headers="mcps1.1.4.1.1 "><p id="p785452921618"><a name="p785452921618"></a><a name="p785452921618"></a>developerPayload</p>
    </td>
    <td class="cellrowborder" valign="top" width="20.09%" headers="mcps1.1.4.1.2 "><p id="p11415121815376"><a name="p11415121815376"></a><a name="p11415121815376"></a>string</p>
    </td>
    <td class="cellrowborder" valign="top" width="55.400000000000006%" headers="mcps1.1.4.1.3 "><p id="p1785422911165"><a name="p1785422911165"></a><a name="p1785422911165"></a>商户侧保留信息，调用接口时传入。</p>
    </td>
    </tr>
    <tr id="row182309264166"><td class="cellrowborder" valign="top" width="24.51%" headers="mcps1.1.4.1.1 "><p id="p78543299162"><a name="p78543299162"></a><a name="p78543299162"></a>purchaseToken</p>
    </td>
    <td class="cellrowborder" valign="top" width="20.09%" headers="mcps1.1.4.1.2 "><p id="p19536718123714"><a name="p19536718123714"></a><a name="p19536718123714"></a>string</p>
    </td>
    <td class="cellrowborder" valign="top" width="55.400000000000006%" headers="mcps1.1.4.1.3 "><p id="p128542298169"><a name="p128542298169"></a><a name="p128542298169"></a>用于唯一标识商品和用户对应关系的购买令牌，在支付完成时由华为支付服务器生成。</p>
    </td>
    </tr>
    <tr id="row723182621610"><td class="cellrowborder" valign="top" width="24.51%" headers="mcps1.1.4.1.1 "><p id="p78554292166"><a name="p78554292166"></a><a name="p78554292166"></a>developerChallenge</p>
    </td>
    <td class="cellrowborder" valign="top" width="20.09%" headers="mcps1.1.4.1.2 "><p id="p5654151823717"><a name="p5654151823717"></a><a name="p5654151823717"></a>string</p>
    </td>
    <td class="cellrowborder" valign="top" width="55.400000000000006%" headers="mcps1.1.4.1.3 "><p id="p17855142911162"><a name="p17855142911162"></a><a name="p17855142911162"></a>应用请求消耗商品时自定义的挑战字，唯一标识本次消耗请求。消耗成功后此挑战字会记录在购买信息中并返回。如果挑战字与已有挑战字重复，表示重复消耗，同样会原样返回该挑战字。</p>
    </td>
    </tr>
    <tr id="row20231122621613"><td class="cellrowborder" valign="top" width="24.51%" headers="mcps1.1.4.1.1 "><p id="p15855102919164"><a name="p15855102919164"></a><a name="p15855102919164"></a>consumptionState</p>
    </td>
    <td class="cellrowborder" valign="top" width="20.09%" headers="mcps1.1.4.1.2 "><p id="p4601123061619"><a name="p4601123061619"></a><a name="p4601123061619"></a>int</p>
    </td>
    <td class="cellrowborder" valign="top" width="55.400000000000006%" headers="mcps1.1.4.1.3 "><p id="p16855192921618"><a name="p16855192921618"></a><a name="p16855192921618"></a>消费状态：</p>
    <a name="ul15855122912166"></a><a name="ul15855122912166"></a><ul id="ul15855122912166"><li>0：未消费。</li><li>1：已消费。</li></ul>
    </td>
    </tr>
    <tr id="row15231192681613"><td class="cellrowborder" valign="top" width="24.51%" headers="mcps1.1.4.1.1 "><p id="p7855122910166"><a name="p7855122910166"></a><a name="p7855122910166"></a>currency</p>
    </td>
    <td class="cellrowborder" valign="top" width="20.09%" headers="mcps1.1.4.1.2 "><p id="p785517297167"><a name="p785517297167"></a><a name="p785517297167"></a>string</p>
    </td>
    <td class="cellrowborder" valign="top" width="55.400000000000006%" headers="mcps1.1.4.1.3 "><p id="p19855162921610"><a name="p19855162921610"></a><a name="p19855162921610"></a>支付商品的币种。</p>
    </td>
    </tr>
    <tr id="row1223132611612"><td class="cellrowborder" valign="top" width="24.51%" headers="mcps1.1.4.1.1 "><p id="p17855829171610"><a name="p17855829171610"></a><a name="p17855829171610"></a>price</p>
    </td>
    <td class="cellrowborder" valign="top" width="20.09%" headers="mcps1.1.4.1.2 "><p id="p4785103231611"><a name="p4785103231611"></a><a name="p4785103231611"></a>long</p>
    </td>
    <td class="cellrowborder" valign="top" width="55.400000000000006%" headers="mcps1.1.4.1.3 "><p id="p17185236415"><a name="p17185236415"></a><a name="p17185236415"></a>商品展示价格（含税）。格式为“币种 商品价格”，例如“EUR 0.15”；部分国家/地区格式为“货币符号 商品价格”，例如中国大陆“￥0.15”。</p>
    </td>
    </tr>
    <tr id="row19231132615169"><td class="cellrowborder" valign="top" width="24.51%" headers="mcps1.1.4.1.1 "><p id="p98551229141618"><a name="p98551229141618"></a><a name="p98551229141618"></a>country</p>
    </td>
    <td class="cellrowborder" valign="top" width="20.09%" headers="mcps1.1.4.1.2 "><p id="p1119185513719"><a name="p1119185513719"></a><a name="p1119185513719"></a>string</p>
    </td>
    <td class="cellrowborder" valign="top" width="55.400000000000006%" headers="mcps1.1.4.1.3 "><p id="p6986639124210"><a name="p6986639124210"></a><a name="p6986639124210"></a>国家/地区码。中国大陆为CN，其他国家/地区请参见<a href="https://developer.huawei.com/consumer/cn/doc/development/HMSCore-Guides/huawei-iap-coverage-0000001050438753" target="_blank" rel="noopener noreferrer">华为IAP范围覆盖</a>。</p>
    </td>
    </tr>
    <tr id="row1923202611163"><td class="cellrowborder" valign="top" width="24.51%" headers="mcps1.1.4.1.1 "><p id="p28551529131616"><a name="p28551529131616"></a><a name="p28551529131616"></a>responseCode</p>
    </td>
    <td class="cellrowborder" valign="top" width="20.09%" headers="mcps1.1.4.1.2 "><p id="p10227175512379"><a name="p10227175512379"></a><a name="p10227175512379"></a>string</p>
    </td>
    <td class="cellrowborder" valign="top" width="55.400000000000006%" headers="mcps1.1.4.1.3 "><p id="p11856192971612"><a name="p11856192971612"></a><a name="p11856192971612"></a>返回码，成功返回为0。</p>
    </td>
    </tr>
    <tr id="row523220268162"><td class="cellrowborder" valign="top" width="24.51%" headers="mcps1.1.4.1.1 "><p id="p16856112961616"><a name="p16856112961616"></a><a name="p16856112961616"></a>responseMessage</p>
    </td>
    <td class="cellrowborder" valign="top" width="20.09%" headers="mcps1.1.4.1.2 "><p id="p0339145517379"><a name="p0339145517379"></a><a name="p0339145517379"></a>string</p>
    </td>
    <td class="cellrowborder" valign="top" width="55.400000000000006%" headers="mcps1.1.4.1.3 "><p id="p885622951615"><a name="p885622951615"></a><a name="p885622951615"></a>返回码描述信息。</p>
    </td>
    </tr>
    </tbody>
    </table>

-   <a name="li139781058144617"></a>ConsumeOwnedPurchaseFailResult参数

    <a name="table14978115884611"></a>
    <table><thead align="left"><tr id="row1797985884611"><th class="cellrowborder" valign="top" width="25%" id="mcps1.1.4.1.1"><p id="p209798587469"><a name="p209798587469"></a><a name="p209798587469"></a>参数</p>
    </th>
    <th class="cellrowborder" valign="top" width="25%" id="mcps1.1.4.1.2"><p id="p7979195844619"><a name="p7979195844619"></a><a name="p7979195844619"></a>类型</p>
    </th>
    <th class="cellrowborder" valign="top" width="50%" id="mcps1.1.4.1.3"><p id="p29791158154613"><a name="p29791158154613"></a><a name="p29791158154613"></a>说明</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row1297955814616"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p1897915589465"><a name="p1897915589465"></a><a name="p1897915589465"></a>code</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p12979115824618"><a name="p12979115824618"></a><a name="p12979115824618"></a>int</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p1697915844617"><a name="p1697915844617"></a><a name="p1697915844617"></a><a href="#section0935245195318">错误码</a>。</p>
    </td>
    </tr>
    <tr id="row1397935844620"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p189791858174615"><a name="p189791858174615"></a><a name="p189791858174615"></a>data</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p1697945815460"><a name="p1697945815460"></a><a name="p1697945815460"></a>string</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p12979185811464"><a name="p12979185811464"></a><a name="p12979185811464"></a>错误码描述信息。</p>
    </td>
    </tr>
    </tbody>
    </table>

-   示例代码

    ```
    public void ConsumeOwnedPurchase()
    {
            Debug.Log("PayScene ConsumeOwnedPurchase.");
            ConsumeOwnedPurchaseOption consumeOwnedPurchaseOption = new ConsumeOwnedPurchaseOption
            {
                // 在华为开发者联盟上获取真实有效的APP ID
                applicationID = "1021**433",
                // 替换为真实有效的购买令牌
                purchaseToken = "asafagaghh23424***dgsg2222",
                // 替换为真实有效的支付公钥
                publicKey = "sdsdff****affdsf",
                success = res =>
                {
                    Debug.Log("ConsumeOwnedPurchase returnCode:" + res.returnCode+", errMsg:"+ res.errMsg+", consumePurchaseData:"+ res.consumePurchaseData+", 
                    dataSignature:" + res.dataSignature);
                },
                fail = res =>
                {
                    Debug.Log("ConsumeOwnedPurchase data:" + res.data + ", code:" + res.code);
                },
                complete = () => { Debug.Log("ConsumeOwnedPurchase complete."); }
            };
            QG.ConsumeOwnedPurchase(consumeOwnedPurchaseOption);
    }
    ```


### ObtainOwnedPurchaseRecord\(ObtainOwnedPurchaseRecordOption obtainOwnedPurchaseRecordOption\)\(1103+\)<a name="section12911414124411"></a>

-   描述

    此接口用于获取消耗型商品的历史消耗商品信息或订阅类商品的所有订阅收据：

    -   若是消耗型商品，此接口返回商品列表中执行过发货和消耗操作的商品信息。
    -   若是订阅类商品，此接口返回在应用中所有的订阅收据。

-   请求参数

    <a name="table82701012473"></a>
    <table><thead align="left"><tr id="row14270111471"><th class="cellrowborder" valign="top" width="15%" id="mcps1.1.5.1.1"><p id="p3270915475"><a name="p3270915475"></a><a name="p3270915475"></a>参数</p>
    </th>
    <th class="cellrowborder" valign="top" width="30%" id="mcps1.1.5.1.2"><p id="p1927011174711"><a name="p1927011174711"></a><a name="p1927011174711"></a>类型</p>
    </th>
    <th class="cellrowborder" valign="top" width="15%" id="mcps1.1.5.1.3"><p id="p2270171154715"><a name="p2270171154715"></a><a name="p2270171154715"></a>必填(M)/选填(O)</p>
    </th>
    <th class="cellrowborder" valign="top" width="40%" id="mcps1.1.5.1.4"><p id="p1827041114712"><a name="p1827041114712"></a><a name="p1827041114712"></a>说明</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row17754938194310"><td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.5.1.1 "><p id="p103464101511"><a name="p103464101511"></a><a name="p103464101511"></a>applicationID</p>
    </td>
    <td class="cellrowborder" valign="top" width="30%" headers="mcps1.1.5.1.2 "><p id="p133461106515"><a name="p133461106515"></a><a name="p133461106515"></a>string</p>
    </td>
    <td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.5.1.3 "><p id="p5346810185117"><a name="p5346810185117"></a><a name="p5346810185117"></a>M</p>
    </td>
    <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p1134631020518"><a name="p1134631020518"></a><a name="p1134631020518"></a>快游戏APP ID，在华为开发者联盟上创建快游戏后分配的唯一标识。</p>
    </td>
    </tr>
    <tr id="row1846673904315"><td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.5.1.1 "><p id="p10346201012515"><a name="p10346201012515"></a><a name="p10346201012515"></a>priceType</p>
    </td>
    <td class="cellrowborder" valign="top" width="30%" headers="mcps1.1.5.1.2 "><p id="p10346111015512"><a name="p10346111015512"></a><a name="p10346111015512"></a>int</p>
    </td>
    <td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.5.1.3 "><p id="p183461810205116"><a name="p183461810205116"></a><a name="p183461810205116"></a>M</p>
    </td>
    <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p1634611095116"><a name="p1634611095116"></a><a name="p1634611095116"></a>商品类型：</p>
    <a name="ul6346210125118"></a><a name="ul6346210125118"></a><ul id="ul6346210125118"><li>0 : 消耗型商品。</li><li>1 : 非消耗型商品。</li><li>2 : 自动续订商品。</li></ul>
    </td>
    </tr>
    <tr id="row1717404074317"><td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.5.1.1 "><p id="p7346171012512"><a name="p7346171012512"></a><a name="p7346171012512"></a>publicKey</p>
    </td>
    <td class="cellrowborder" valign="top" width="30%" headers="mcps1.1.5.1.2 "><p id="p134621025114"><a name="p134621025114"></a><a name="p134621025114"></a>string</p>
    </td>
    <td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.5.1.3 "><p id="p10346131016519"><a name="p10346131016519"></a><a name="p10346131016519"></a>M</p>
    </td>
    <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p2034781012518"><a name="p2034781012518"></a><a name="p2034781012518"></a>开通应用内支付服务时的公钥。</p>
    </td>
    </tr>
    <tr id="row1187410401433"><td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.5.1.1 "><p id="p4347121011514"><a name="p4347121011514"></a><a name="p4347121011514"></a>continuationToken</p>
    </td>
    <td class="cellrowborder" valign="top" width="30%" headers="mcps1.1.5.1.2 "><p id="p1334761005114"><a name="p1334761005114"></a><a name="p1334761005114"></a>string</p>
    </td>
    <td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.5.1.3 "><p id="p434710100517"><a name="p434710100517"></a><a name="p434710100517"></a>O</p>
    </td>
    <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p13473104513"><a name="p13473104513"></a><a name="p13473104513"></a>数据定位标志。首次请求时无需传入。</p>
    </td>
    </tr>
    <tr id="row1170055344314"><td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.5.1.1 "><p id="p15271611475"><a name="p15271611475"></a><a name="p15271611475"></a>success</p>
    </td>
    <td class="cellrowborder" valign="top" width="30%" headers="mcps1.1.5.1.2 "><p id="p22718154719"><a name="p22718154719"></a><a name="p22718154719"></a>Action&lt;<a href="#li527117118470">ObtainOwnedPurchaseRecordSuccessResult</a>&gt;</p>
    </td>
    <td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.5.1.3 "><p id="p627111194720"><a name="p627111194720"></a><a name="p627111194720"></a>O</p>
    </td>
    <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p32716114713"><a name="p32716114713"></a><a name="p32716114713"></a>接口调用成功的回调函数。</p>
    </td>
    </tr>
    <tr id="row1047416548437"><td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.5.1.1 "><p id="p027171194710"><a name="p027171194710"></a><a name="p027171194710"></a>fail</p>
    </td>
    <td class="cellrowborder" valign="top" width="30%" headers="mcps1.1.5.1.2 "><p id="p3271316474"><a name="p3271316474"></a><a name="p3271316474"></a>Action&lt;<a href="#li192738119472">ObtainOwnedPurchaseRecordFailResult</a>&gt;</p>
    </td>
    <td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.5.1.3 "><p id="p827119114716"><a name="p827119114716"></a><a name="p827119114716"></a>O</p>
    </td>
    <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p02713174711"><a name="p02713174711"></a><a name="p02713174711"></a>接口调用失败的回调函数。</p>
    </td>
    </tr>
    <tr id="row8674165514319"><td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.5.1.1 "><p id="p122714134711"><a name="p122714134711"></a><a name="p122714134711"></a>complete</p>
    </td>
    <td class="cellrowborder" valign="top" width="30%" headers="mcps1.1.5.1.2 "><p id="p92713134714"><a name="p92713134714"></a><a name="p92713134714"></a>Action</p>
    </td>
    <td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.5.1.3 "><p id="p1827112113476"><a name="p1827112113476"></a><a name="p1827112113476"></a>O</p>
    </td>
    <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p152711115470"><a name="p152711115470"></a><a name="p152711115470"></a>接口成功、失败均会调用的回调函数。</p>
    </td>
    </tr>
    </tbody>
    </table>

-   <a name="li527117118470"></a>ObtainOwnedPurchaseRecordSuccessResult参数

    <a name="table6271115472"></a>
    <table><thead align="left"><tr id="row427119111473"><th class="cellrowborder" valign="top" width="25%" id="mcps1.1.4.1.1"><p id="p527231144717"><a name="p527231144717"></a><a name="p527231144717"></a>参数</p>
    </th>
    <th class="cellrowborder" valign="top" width="25%" id="mcps1.1.4.1.2"><p id="p5272141164717"><a name="p5272141164717"></a><a name="p5272141164717"></a>类型</p>
    </th>
    <th class="cellrowborder" valign="top" width="50%" id="mcps1.1.4.1.3"><p id="p1927212115479"><a name="p1927212115479"></a><a name="p1927212115479"></a>说明</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row327281124714"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p152721310477"><a name="p152721310477"></a><a name="p152721310477"></a>returnCode</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p152721514475"><a name="p152721514475"></a><a name="p152721514475"></a>int</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p12272418476"><a name="p12272418476"></a><a name="p12272418476"></a>成功返回码。</p>
    </td>
    </tr>
    <tr id="row1927211174719"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p102726114479"><a name="p102726114479"></a><a name="p102726114479"></a>errMsg</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p327216174719"><a name="p327216174719"></a><a name="p327216174719"></a>string</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p527218117475"><a name="p527218117475"></a><a name="p527218117475"></a>成功返回码的描述信息。</p>
    </td>
    </tr>
    <tr id="row162723124718"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p109271829105210"><a name="p109271829105210"></a><a name="p109271829105210"></a>itemList</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p69276295527"><a name="p69276295527"></a><a name="p69276295527"></a>List&lt;string&gt;</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p792711297520"><a name="p792711297520"></a><a name="p792711297520"></a>已购买的商品ID列表。</p>
    </td>
    </tr>
    <tr id="row82739117479"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p4927112955212"><a name="p4927112955212"></a><a name="p4927112955212"></a>inAppPurchaseDataList</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p153144217316"><a name="p153144217316"></a><a name="p153144217316"></a>List&lt;<a href="#p4588528145718">InAppPurchaseData</a>&gt;</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p1092712916522"><a name="p1092712916522"></a><a name="p1092712916522"></a>已购买的商品详情信息。</p>
    </td>
    </tr>
    <tr id="row3273815474"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p15927329145217"><a name="p15927329145217"></a><a name="p15927329145217"></a>inAppSignature</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p7696856164517"><a name="p7696856164517"></a><a name="p7696856164517"></a>List&lt;string&gt;</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p165432055161112"><a name="p165432055161112"></a><a name="p165432055161112"></a>与“inAppPurchaseDataList”中每条商品信息一一对应的签名字符串：</p>
    <a name="ul654315561114"></a><a name="ul654315561114"></a><ul id="ul654315561114"><li>使用IAP私钥签名算法为“SHA256WITHRSA”。</li><li>应用需对每条商品信息进行验签，若验签失败需重新获取商品信息。</li></ul>
    </td>
    </tr>
    <tr id="row1727381114713"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p1392717298528"><a name="p1392717298528"></a><a name="p1392717298528"></a>continuationToken</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p5927182995210"><a name="p5927182995210"></a><a name="p5927182995210"></a>string</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p892752914529"><a name="p892752914529"></a><a name="p892752914529"></a>数据定位标志。若返回continuationToken时，应用必须继续调用当前方法，并传入当前continuationToken值，直到调用后不再返回continuationToken。</p>
    </td>
    </tr>
    <tr id="row180212864416"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p17927929175219"><a name="p17927929175219"></a><a name="p17927929175219"></a>placedInappPurchaseDataList</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p583411471136"><a name="p583411471136"></a><a name="p583411471136"></a>List&lt;<a href="#p4588528145718">InAppPurchaseData</a>&gt;</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p1910324182116"><a name="p1910324182116"></a><a name="p1910324182116"></a>商品切换后的商品详情信息。</p>
    <div class="note" id="note1410324152111"><a name="note1410324152111"></a><a name="note1410324152111"></a><span class="notetitle"> 说明： </span><div class="notebody"><p id="p01052420211"><a name="p01052420211"></a><a name="p01052420211"></a>“商品切换”是用户先购买了订阅类商品A，在下个续费周期购买了同一订阅组的商品B后，将取消与商品A的订阅关系，用户与商品B建立订阅关系，此时将返回商品B的详情信息。</p>
    </div></div>
    </td>
    </tr>
    <tr id="row145882914419"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p19927129185211"><a name="p19927129185211"></a><a name="p19927129185211"></a>placedInappSignatureList</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p18927629135211"><a name="p18927629135211"></a><a name="p18927629135211"></a>List&lt;string&gt;</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p33161310115014"><a name="p33161310115014"></a><a name="p33161310115014"></a>与“placedInappPurchaseDataList”中每个订阅关系一一对应的签名字符串：</p>
    <a name="ul18316310185010"></a><a name="ul18316310185010"></a><ul id="ul18316310185010"><li>仅在查询订阅类商品且用户存在订阅类商品时返回。</li><li>使用IAP私钥签名算法为“SHA256WITHRSA”。</li><li>应用需要对每个订阅关系进行验签，若验签失败需重新获取订阅关系。</li></ul>
    </td>
    </tr>
    </tbody>
    </table>

-   <a name="li192738119472"></a>ObtainOwnedPurchaseRecordFailResult参数

    <a name="table1427418194714"></a>
    <table><thead align="left"><tr id="row627421104711"><th class="cellrowborder" valign="top" width="25%" id="mcps1.1.4.1.1"><p id="p1227481144719"><a name="p1227481144719"></a><a name="p1227481144719"></a>参数</p>
    </th>
    <th class="cellrowborder" valign="top" width="25%" id="mcps1.1.4.1.2"><p id="p027416115475"><a name="p027416115475"></a><a name="p027416115475"></a>类型</p>
    </th>
    <th class="cellrowborder" valign="top" width="50%" id="mcps1.1.4.1.3"><p id="p62743114711"><a name="p62743114711"></a><a name="p62743114711"></a>说明</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row5274191114712"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p92740164713"><a name="p92740164713"></a><a name="p92740164713"></a>code</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p142741184715"><a name="p142741184715"></a><a name="p142741184715"></a>int</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p027418134719"><a name="p027418134719"></a><a name="p027418134719"></a><a href="#section0935245195318">错误码</a>。</p>
    </td>
    </tr>
    <tr id="row22741819478"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p1827431104718"><a name="p1827431104718"></a><a name="p1827431104718"></a>data</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p1627415112474"><a name="p1627415112474"></a><a name="p1627415112474"></a>string</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p1227431164714"><a name="p1227431164714"></a><a name="p1227431164714"></a>错误码描述信息。</p>
    </td>
    </tr>
    </tbody>
    </table>

-   示例代码

    ```
    public void ObtainOwnedPurchaseRecord()
    {
            Debug.Log("PayScene ObtainOwnedPurchaseRecord.");
            ObtainOwnedPurchaseRecordOption obtainOwnedPurchaseRecordOption = new ObtainOwnedPurchaseRecordOption
            {
                // 在华为开发者联盟上获取真实有效的APP ID
                applicationID = "1021**433",
                // 0：消耗 1：非消耗 2：订阅
                priceType = 0,
                // 替换为真实有效的支付公钥
                publicKey = "sdsdff****affdsf",
                success = res =>
                {
                    Debug.Log("ObtainOwnedPurchaseRecord returnCode:"+ res.returnCode+", errMsg:"+ res.errMsg+", itemList:"+ res.itemList+", 
                    inAppPurchaseDataList:"+ res.inAppPurchaseDataList+", inAppSignature:" + res.inAppSignature+", continuationToken:" + 
                    res.continuationToken+", placedInappPurchaseDataList:"+ res.placedInappPurchaseDataList+", placedInappSignatureList:"+ 
                    res.placedInappSignatureList);
                },
                fail = res =>
                {
                    Debug.Log("ObtainOwnedPurchaseRecord data:" + res.data + ", code:" + res.code);
                },
                complete = () => { Debug.Log("ObtainOwnedPurchaseRecord complete."); }
            };
            QG.ObtainOwnedPurchaseRecord(obtainOwnedPurchaseRecordOption);
    }
    ```


### StartIapActivity\(StartIapActivityOption startIapActivityOption\)\(1103+\)<a name="section287142113449"></a>

-   描述

    跳转至华为应用内支付的相关订阅页：

    -   可跳转至华为编辑订阅页。
    -   可跳转至华为管理订阅页。

-   请求参数

    <a name="table14475631474"></a>
    <table><thead align="left"><tr id="row1747519364716"><th class="cellrowborder" valign="top" width="20%" id="mcps1.1.5.1.1"><p id="p1947513144714"><a name="p1947513144714"></a><a name="p1947513144714"></a>参数</p>
    </th>
    <th class="cellrowborder" valign="top" width="25%" id="mcps1.1.5.1.2"><p id="p1947510313474"><a name="p1947510313474"></a><a name="p1947510313474"></a>类型</p>
    </th>
    <th class="cellrowborder" valign="top" width="15%" id="mcps1.1.5.1.3"><p id="p164753364715"><a name="p164753364715"></a><a name="p164753364715"></a>必填(M)/选填(O)</p>
    </th>
    <th class="cellrowborder" valign="top" width="40%" id="mcps1.1.5.1.4"><p id="p1047515314710"><a name="p1047515314710"></a><a name="p1047515314710"></a>说明</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row2604195515470"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.5.1.1 "><p id="p15924205419"><a name="p15924205419"></a><a name="p15924205419"></a>applicationID</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.2 "><p id="p10924110746"><a name="p10924110746"></a><a name="p10924110746"></a>string</p>
    </td>
    <td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.5.1.3 "><p id="p2092420044"><a name="p2092420044"></a><a name="p2092420044"></a>M</p>
    </td>
    <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p1392410013410"><a name="p1392410013410"></a><a name="p1392410013410"></a>快游戏APP ID，在华为开发者联盟上创建快游戏后分配的唯一标识。</p>
    </td>
    </tr>
    <tr id="row164761456154719"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.5.1.1 "><p id="p09242004415"><a name="p09242004415"></a><a name="p09242004415"></a>type</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.2 "><p id="p1192415012410"><a name="p1192415012410"></a><a name="p1192415012410"></a>int</p>
    </td>
    <td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.5.1.3 "><p id="p29241601643"><a name="p29241601643"></a><a name="p29241601643"></a>M</p>
    </td>
    <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p13924801346"><a name="p13924801346"></a><a name="p13924801346"></a>跳转的页面类型：</p>
    <a name="ul149242019412"></a><a name="ul149242019412"></a><ul id="ul149242019412"><li>2：华为管理订阅页。</li><li>3：华为编辑订阅页。</li></ul>
    </td>
    </tr>
    <tr id="row929116575476"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.5.1.1 "><p id="p15924509412"><a name="p15924509412"></a><a name="p15924509412"></a>subscribeProductId</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.2 "><p id="p4924301942"><a name="p4924301942"></a><a name="p4924301942"></a>string</p>
    </td>
    <td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.5.1.3 "><p id="p139241906420"><a name="p139241906420"></a><a name="p139241906420"></a>O</p>
    </td>
    <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p6924302414"><a name="p6924302414"></a><a name="p6924302414"></a>已订阅的商品ID。仅当跳转至华为编辑订阅页时传入参数值。</p>
    </td>
    </tr>
    <tr id="row168436591478"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.5.1.1 "><p id="p5476739479"><a name="p5476739479"></a><a name="p5476739479"></a>success</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.2 "><p id="p1547683104712"><a name="p1547683104712"></a><a name="p1547683104712"></a>Action</p>
    </td>
    <td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.5.1.3 "><p id="p11476531472"><a name="p11476531472"></a><a name="p11476531472"></a>O</p>
    </td>
    <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p1447611316470"><a name="p1447611316470"></a><a name="p1447611316470"></a>接口调用成功的回调函数。</p>
    </td>
    </tr>
    <tr id="row4732170204811"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.5.1.1 "><p id="p34763334718"><a name="p34763334718"></a><a name="p34763334718"></a>fail</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.2 "><p id="p194761316479"><a name="p194761316479"></a><a name="p194761316479"></a>Action&lt;<a href="#li1447917312475">StartIapActivityFailResu...</a>&gt;</p>
    </td>
    <td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.5.1.3 "><p id="p184765364713"><a name="p184765364713"></a><a name="p184765364713"></a>O</p>
    </td>
    <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p134764324719"><a name="p134764324719"></a><a name="p134764324719"></a>接口调用失败的回调函数。</p>
    </td>
    </tr>
    <tr id="row1159716114488"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.5.1.1 "><p id="p747617304715"><a name="p747617304715"></a><a name="p747617304715"></a>complete</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.2 "><p id="p34761315478"><a name="p34761315478"></a><a name="p34761315478"></a>Action</p>
    </td>
    <td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.5.1.3 "><p id="p13476123144711"><a name="p13476123144711"></a><a name="p13476123144711"></a>O</p>
    </td>
    <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p34769394713"><a name="p34769394713"></a><a name="p34769394713"></a>接口成功、失败均会调用的回调函数。</p>
    </td>
    </tr>
    </tbody>
    </table>

-   <a name="li1447917312475"></a>StartIapActivityFailResult参数

    <a name="table1547913313478"></a>
    <table><thead align="left"><tr id="row124791735477"><th class="cellrowborder" valign="top" width="25%" id="mcps1.1.4.1.1"><p id="p134791332475"><a name="p134791332475"></a><a name="p134791332475"></a>参数</p>
    </th>
    <th class="cellrowborder" valign="top" width="25%" id="mcps1.1.4.1.2"><p id="p12479133124715"><a name="p12479133124715"></a><a name="p12479133124715"></a>类型</p>
    </th>
    <th class="cellrowborder" valign="top" width="50%" id="mcps1.1.4.1.3"><p id="p847993104710"><a name="p847993104710"></a><a name="p847993104710"></a>说明</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row7479173134710"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p154791435470"><a name="p154791435470"></a><a name="p154791435470"></a>code</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p16479133114712"><a name="p16479133114712"></a><a name="p16479133114712"></a>int</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p14796304714"><a name="p14796304714"></a><a name="p14796304714"></a><a href="#section0935245195318">错误码</a>。</p>
    </td>
    </tr>
    <tr id="row164791318477"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p5479739479"><a name="p5479739479"></a><a name="p5479739479"></a>data</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p14479833470"><a name="p14479833470"></a><a name="p14479833470"></a>string</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p64805344713"><a name="p64805344713"></a><a name="p64805344713"></a>错误码描述信息。</p>
    </td>
    </tr>
    </tbody>
    </table>

-   示例代码

    ```
    public void StartIapActivity()
    {
            Debug.Log("PayScene StartIapActivity.");
            StartIapActivityOption startIapActivityOption = new StartIapActivityOption
            {
                // 在华为开发者联盟上获取真实有效的APP ID
                applicationID = "1021**433",
                // 跳转的页面类型：2：华为管理订阅页。3：华为编辑订阅页。
                type = 2,
                // 已订阅的真实有效的商品ID。仅当跳转至华为编辑订阅页时传入参数值。
                subscribeProductId = "202***902",
                success = () => { Debug.Log("StartIapActivity success"); },
                fail = res =>
                {
                    Debug.Log("StartIapActivity data:" + res.data + ", code:" + res.code);
                },
                complete = () => { Debug.Log("StartIapActivity complete."); }
            };
            QG.StartIapActivity(startIapActivityOption);
    }
    ```


### 错误码<a name="section0935245195318"></a>

更多错误码可参考[通用错误码](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/client-error-code-0000001050746111)。

<a name="table3109851131612"></a>
<table><thead align="left"><tr id="row13110185131612"><th class="cellrowborder" valign="top" width="50%" id="mcps1.1.3.1.1"><p id="p10110145141615"><a name="p10110145141615"></a><a name="p10110145141615"></a>错误码</p>
</th>
<th class="cellrowborder" valign="top" width="50%" id="mcps1.1.3.1.2"><p id="p13110651101615"><a name="p13110651101615"></a><a name="p13110651101615"></a>说明</p>
</th>
</tr>
</thead>
<tbody><tr id="row19110155121612"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.1 "><p id="p1675915116177"><a name="p1675915116177"></a><a name="p1675915116177"></a>200</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.2 "><p id="p1675921171715"><a name="p1675921171715"></a><a name="p1675921171715"></a>一般错误。</p>
</td>
</tr>
<tr id="row1111025121620"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.1 "><p id="p37592113171"><a name="p37592113171"></a><a name="p37592113171"></a>202</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.2 "><p id="p27591715174"><a name="p27591715174"></a><a name="p27591715174"></a>传参错误。</p>
</td>
</tr>
<tr id="row14110951131619"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.1 "><p id="p1576016115170"><a name="p1576016115170"></a><a name="p1576016115170"></a>1002</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.2 "><p id="p2760312172"><a name="p2760312172"></a><a name="p2760312172"></a>应用鉴权失败。</p>
</td>
</tr>
<tr id="row21106516161"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.1 "><p id="p167601117176"><a name="p167601117176"></a><a name="p167601117176"></a>1001</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.2 "><p id="p2760181151718"><a name="p2760181151718"></a><a name="p2760181151718"></a>公钥验签失败。</p>
</td>
</tr>
</tbody>
</table>

## 激励视频广告<a name="section5728122526"></a>

<a name="table132564532038"></a>
<table><thead align="left"><tr id="row182568531634"><th class="cellrowborder" valign="top" width="50%" id="mcps1.1.3.1.1"><p id="p1625615532318"><a name="p1625615532318"></a><a name="p1625615532318"></a>接口</p>
</th>
<th class="cellrowborder" valign="top" width="50%" id="mcps1.1.3.1.2"><p id="p102561053037"><a name="p102561053037"></a><a name="p102561053037"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="row325619531336"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.1 "><p id="p1151012565315"><a name="p1151012565315"></a><a name="p1151012565315"></a><a href="#section13878271210">CreateRewardedVideoAd(CreateRewardedVideoAdOption createRewardedVideoAdOption)</a></p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.2 "><p id="p725635316319"><a name="p725635316319"></a><a name="p725635316319"></a>创建激励视频广告。</p>
</td>
</tr>
<tr id="row14088161664"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.1 "><p id="p1774618512097"><a name="p1774618512097"></a><a name="p1774618512097"></a><a href="#section19572164142515">RewardedVideoAd.Load()</a></p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.2 "><p id="p9746951594"><a name="p9746951594"></a><a name="p9746951594"></a>手动拉取广告，用于刷新广告。成功回调OnLoad设置的回调，失败回调OnError设置的回调。</p>
</td>
</tr>
<tr id="row1139619177610"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.1 "><p id="p67461751197"><a name="p67461751197"></a><a name="p67461751197"></a><a href="#section20692740182817">RewardedVideoAd.Show()</a></p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.2 "><p id="p117469511299"><a name="p117469511299"></a><a name="p117469511299"></a>激励视频广告组件默认是隐藏的，调用 show 方法展示广告。失败回调OnError设置的回调。</p>
</td>
</tr>
<tr id="row9535018969"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.1 "><p id="p127461514914"><a name="p127461514914"></a><a name="p127461514914"></a><a href="#section209021742162914">RewardedVideoAd.OnLoad(Action callback)</a></p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.2 "><p id="p1574745112914"><a name="p1574745112914"></a><a name="p1574745112914"></a>设置广告加载成功回调。</p>
</td>
</tr>
<tr id="row536716191467"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.1 "><p id="p10747165117918"><a name="p10747165117918"></a><a name="p10747165117918"></a><a href="#section167341133133018">RewardedVideoAd.OffLoad()</a></p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.2 "><p id="p1274710512914"><a name="p1274710512914"></a><a name="p1274710512914"></a>移除激励视频广告加载成功监听。</p>
</td>
</tr>
<tr id="row204727201467"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.1 "><p id="p1274719511799"><a name="p1274719511799"></a><a name="p1274719511799"></a><a href="#section075011393305">RewardedVideoAd.OnClose(Action&lt; RewardedVideoAdCloseResult &gt; callback)</a></p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.2 "><p id="p1774745117910"><a name="p1774745117910"></a><a name="p1774745117910"></a>监听激励视频广告关闭事件。只有在用户主动关闭激励视频广告时，广告才会关闭。</p>
</td>
</tr>
<tr id="row1720792117620"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.1 "><p id="p1274775112915"><a name="p1274775112915"></a><a name="p1274775112915"></a><a href="#section16606134583017">RewardedVideoAd.OffClose()</a></p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.2 "><p id="p1774715111910"><a name="p1774715111910"></a><a name="p1774715111910"></a>移除激励视频广告关闭监听。</p>
</td>
</tr>
<tr id="row680192212618"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.1 "><p id="p1374785114917"><a name="p1374785114917"></a><a name="p1374785114917"></a><a href="#section119501653173011">RewardedVideoAd.OnError(Action&lt; AdErrorResult &gt; callback)</a></p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.2 "><p id="p167471051191"><a name="p167471051191"></a><a name="p167471051191"></a>监听激励视频广告加载错误事件。</p>
</td>
</tr>
<tr id="row1683920221765"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.1 "><p id="p1747151493"><a name="p1747151493"></a><a name="p1747151493"></a><a href="#section6598558173013">RewardedVideoAd.OffError()</a></p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.2 "><p id="p117478515914"><a name="p117478515914"></a><a name="p117478515914"></a>移除激励视频广告加载错误监听。</p>
</td>
</tr>
<tr id="row665510237613"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.1 "><p id="p674725110913"><a name="p674725110913"></a><a name="p674725110913"></a><a href="#section145098563115">RewardedVideoAd.SetTagForChildProtection(int childProtection)</a></p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.2 "><p id="p574713511995"><a name="p574713511995"></a><a name="p574713511995"></a>设置儿童保护标签。</p>
</td>
</tr>
<tr id="row194631724465"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.1 "><p id="p874710511791"><a name="p874710511791"></a><a name="p874710511791"></a><a href="#section15967121010318">RewardedVideoAd.SetTagForUnderAgeOfPromise(int underAgeOfPromiseStr)</a></p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.2 "><p id="p774717512910"><a name="p774717512910"></a><a name="p774717512910"></a>设置面向未达到法定承诺年龄用户标签。</p>
</td>
</tr>
<tr id="row331118258610"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.1 "><p id="p9748155114911"><a name="p9748155114911"></a><a name="p9748155114911"></a><a href="#section161829123117">RewardedVideoAd.SetAdContentClassification(string adContentClassification)</a></p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.2 "><p id="p7748125113919"><a name="p7748125113919"></a><a name="p7748125113919"></a>设置广告内容分级上限。</p>
</td>
</tr>
<tr id="row1720719261761"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.1 "><p id="p07481551599"><a name="p07481551599"></a><a name="p07481551599"></a><a href="#section1830923403118">RewardedVideoAd.SetNonPersonalizedAd(int personalizedAd)</a></p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.2 "><p id="p274865114911"><a name="p274865114911"></a><a name="p274865114911"></a>设置是否请求非个性化广告。</p>
</td>
</tr>
<tr id="row129372216715"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.1 "><p id="p97481251693"><a name="p97481251693"></a><a name="p97481251693"></a><a href="#section59891439183110">RewardedVideoAd.Destroy()</a></p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.2 "><p id="p1874845113918"><a name="p1874845113918"></a><a name="p1874845113918"></a>销毁激励视频广告。</p>
</td>
</tr>
</tbody>
</table>

### CreateRewardedVideoAd\(CreateRewardedVideoAdOption createRewardedVideoAdOption\)<a name="section13878271210"></a>

-   描述

    创建激励视频广告。

-   请求参数

    <a name="table4949532162220"></a>
    <table><thead align="left"><tr id="row6950113252214"><th class="cellrowborder" valign="top" width="20%" id="mcps1.1.5.1.1"><p id="p2950103219222"><a name="p2950103219222"></a><a name="p2950103219222"></a>参数</p>
    </th>
    <th class="cellrowborder" valign="top" width="25%" id="mcps1.1.5.1.2"><p id="p1295033232214"><a name="p1295033232214"></a><a name="p1295033232214"></a>类型</p>
    </th>
    <th class="cellrowborder" valign="top" width="15%" id="mcps1.1.5.1.3"><p id="p119504322227"><a name="p119504322227"></a><a name="p119504322227"></a>必填(M)/选填(O)</p>
    </th>
    <th class="cellrowborder" valign="top" width="40%" id="mcps1.1.5.1.4"><p id="p17950732172210"><a name="p17950732172210"></a><a name="p17950732172210"></a>说明</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row189501732122213"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.5.1.1 "><p id="p0820165741114"><a name="p0820165741114"></a><a name="p0820165741114"></a>adUnitId</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.2 "><p id="p104572653714"><a name="p104572653714"></a><a name="p104572653714"></a>string</p>
    </td>
    <td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.5.1.3 "><p id="p78207574110"><a name="p78207574110"></a><a name="p78207574110"></a>M</p>
    </td>
    <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p282005781112"><a name="p282005781112"></a><a name="p282005781112"></a>激励视频广告位标识。</p>
    </td>
    </tr>
    <tr id="row1695215324226"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.5.1.1 "><p id="p14952193272218"><a name="p14952193272218"></a><a name="p14952193272218"></a>success</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.2 "><p id="p49521532182210"><a name="p49521532182210"></a><a name="p49521532182210"></a>Action&lt;<a href="#li116535765213">CreateRewardedVideoAdSuccessResult</a>&gt;</p>
    </td>
    <td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.5.1.3 "><p id="p7952732142215"><a name="p7952732142215"></a><a name="p7952732142215"></a>O</p>
    </td>
    <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p1695217323224"><a name="p1695217323224"></a><a name="p1695217323224"></a>接口调用成功的回调函数。</p>
    </td>
    </tr>
    <tr id="row1095273212212"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.5.1.1 "><p id="p11952932102217"><a name="p11952932102217"></a><a name="p11952932102217"></a>fail</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.2 "><p id="p79523323229"><a name="p79523323229"></a><a name="p79523323229"></a>Action&lt;<a href="#li16365436192112">CreateRewardedVideoAdFailResult</a>&gt;</p>
    </td>
    <td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.5.1.3 "><p id="p5952143212216"><a name="p5952143212216"></a><a name="p5952143212216"></a>O</p>
    </td>
    <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p5953332162216"><a name="p5953332162216"></a><a name="p5953332162216"></a>接口调用失败的回调函数。</p>
    </td>
    </tr>
    <tr id="row129531532152210"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.5.1.1 "><p id="p6953133216228"><a name="p6953133216228"></a><a name="p6953133216228"></a>complete</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.2 "><p id="p16953143210228"><a name="p16953143210228"></a><a name="p16953143210228"></a>Action</p>
    </td>
    <td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.5.1.3 "><p id="p39537322225"><a name="p39537322225"></a><a name="p39537322225"></a>O</p>
    </td>
    <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p1195333216229"><a name="p1195333216229"></a><a name="p1195333216229"></a>接口成功、失败均会调用的回调函数。</p>
    </td>
    </tr>
    </tbody>
    </table>

-   <a name="li116535765213"></a>CreateRewardedVideoAdSuccessResult参数

    <a name="table1332713267527"></a>
    <table><thead align="left"><tr id="row11327526155211"><th class="cellrowborder" valign="top" width="25%" id="mcps1.1.4.1.1"><p id="p113271226195210"><a name="p113271226195210"></a><a name="p113271226195210"></a>参数</p>
    </th>
    <th class="cellrowborder" valign="top" width="25%" id="mcps1.1.4.1.2"><p id="p832782615211"><a name="p832782615211"></a><a name="p832782615211"></a>类型</p>
    </th>
    <th class="cellrowborder" valign="top" width="50%" id="mcps1.1.4.1.3"><p id="p632732685211"><a name="p632732685211"></a><a name="p632732685211"></a>说明</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row1032712618529"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p1132872685216"><a name="p1132872685216"></a><a name="p1132872685216"></a>code</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p0328526165217"><a name="p0328526165217"></a><a name="p0328526165217"></a>int</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p163282262527"><a name="p163282262527"></a><a name="p163282262527"></a>返回码。0表示成功。</p>
    </td>
    </tr>
    </tbody>
    </table>

-   <a name="li16365436192112"></a>CreateRewardedVideoAdFailResult参数

    <a name="table4524742102320"></a>
    <table><thead align="left"><tr id="row752404215239"><th class="cellrowborder" valign="top" width="25%" id="mcps1.1.4.1.1"><p id="p1552584252312"><a name="p1552584252312"></a><a name="p1552584252312"></a>参数</p>
    </th>
    <th class="cellrowborder" valign="top" width="25%" id="mcps1.1.4.1.2"><p id="p55251942122312"><a name="p55251942122312"></a><a name="p55251942122312"></a>类型</p>
    </th>
    <th class="cellrowborder" valign="top" width="50%" id="mcps1.1.4.1.3"><p id="p152516420232"><a name="p152516420232"></a><a name="p152516420232"></a>说明</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row13525204217230"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p552554222313"><a name="p552554222313"></a><a name="p552554222313"></a>code</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p10525242172318"><a name="p10525242172318"></a><a name="p10525242172318"></a>int</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p85253422233"><a name="p85253422233"></a><a name="p85253422233"></a>错误码。</p>
    </td>
    </tr>
    <tr id="row852594282311"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p145260428238"><a name="p145260428238"></a><a name="p145260428238"></a>data</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p75267426232"><a name="p75267426232"></a><a name="p75267426232"></a>string</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p75261342152311"><a name="p75261342152311"></a><a name="p75261342152311"></a>错误码描述信息。</p>
    </td>
    </tr>
    </tbody>
    </table>

-   示例代码

    ```
    public void CreateRewardedVideoAd()
    {
            Debug.Log("RewardedVideoAd CreateRewardedVideoAd.");
            CreateRewardedVideoAdOption option = new CreateRewardedVideoAdOption
            {
                // 测试使用的广告位标识，开发者需要自行申请广告位标识
                adUnitId = "testx9dtjwj8hp",
                success = result => { Debug.Log("RewardedVideoAd CreateRewardedVideoAd success code: " + result.code); },
                fail = result =>
                {
                    Debug.Log("RewardedVideoAd CreateRewardedVideoAd fail code: " + result.code + ", data: " +
                              result.data);
                },
                complete = () => { Debug.Log("RewardedVideoAd CreateRewardedVideoAd complete."); }
            };
    
            _rewardedVideoAd = QG.CreateRewardedVideoAd(option);
    }
    ```


### RewardedVideoAd.Load\(\)<a name="section19572164142515"></a>

-   描述

    手动拉取广告，用于刷新广告。成功回调OnLoad设置的回调，失败回调OnError设置的回调。

-   示例代码

    ```
    public void Load()
    {
            Debug.Log("RewardedVideoAd Load.");
            _rewardedVideoAd?.Load();
    }
    ```


### RewardedVideoAd.Show\(\)<a name="section20692740182817"></a>

-   描述

    激励视频广告组件默认是隐藏的，调用show方法展示广告。失败回调OnError设置的回调。

-   示例代码

    ```
    public void Show()
    {
            Debug.Log("RewardedVideoAd Show.");
            _rewardedVideoAd?.Show();
    }
    ```


### RewardedVideoAd.OnLoad\(Action callback\)<a name="section209021742162914"></a>

-   描述

    设置广告加载成功回调。

-   请求参数

    <a name="table1692175511331"></a>
    <table><thead align="left"><tr id="row96921255143316"><th class="cellrowborder" valign="top" width="20%" id="mcps1.1.5.1.1"><p id="p12693955113311"><a name="p12693955113311"></a><a name="p12693955113311"></a>参数</p>
    </th>
    <th class="cellrowborder" valign="top" width="20%" id="mcps1.1.5.1.2"><p id="p46932055193313"><a name="p46932055193313"></a><a name="p46932055193313"></a>类型</p>
    </th>
    <th class="cellrowborder" valign="top" width="20%" id="mcps1.1.5.1.3"><p id="p169310551339"><a name="p169310551339"></a><a name="p169310551339"></a>必填(M)/选填(O)</p>
    </th>
    <th class="cellrowborder" valign="top" width="40%" id="mcps1.1.5.1.4"><p id="p156931655193313"><a name="p156931655193313"></a><a name="p156931655193313"></a>说明</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row6693155103312"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.5.1.1 "><p id="p3697101173420"><a name="p3697101173420"></a><a name="p3697101173420"></a>callback</p>
    </td>
    <td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.5.1.2 "><p id="p250764812346"><a name="p250764812346"></a><a name="p250764812346"></a>Action</p>
    </td>
    <td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.5.1.3 "><p id="p116963113349"><a name="p116963113349"></a><a name="p116963113349"></a>M</p>
    </td>
    <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p767216118349"><a name="p767216118349"></a><a name="p767216118349"></a>广告加载完成触发执行的函数。</p>
    </td>
    </tr>
    </tbody>
    </table>

-   示例代码

    ```
    public void OnLoad()
    {
            Debug.Log("RewardedVideoAd OnLoad.");
            _rewardedVideoAd?.OnLoad(() => { Debug.Log("RewardedVideoAd OnLoad ad loaded."); });
    }
    ```


### RewardedVideoAd.OffLoad\(\)<a name="section167341133133018"></a>

-   描述

    移除激励视频广告加载成功监听。

-   示例代码

    ```
    public void OffLoad()
    {
            Debug.Log("RewardedVideoAd OffLoad.");
            _rewardedVideoAd?.OffLoad();
    }
    ```


### RewardedVideoAd.OnClose\(Action< RewardedVideoAdCloseResult \> callback\)<a name="section075011393305"></a>

-   描述

    监听激励视频广告关闭事件。只有在用户主动关闭激励视频广告时，广告才会关闭。

-   请求参数

    <a name="table3488832183518"></a>
    <table><thead align="left"><tr id="row94884323356"><th class="cellrowborder" valign="top" width="20%" id="mcps1.1.5.1.1"><p id="p1148943243517"><a name="p1148943243517"></a><a name="p1148943243517"></a>参数</p>
    </th>
    <th class="cellrowborder" valign="top" width="25%" id="mcps1.1.5.1.2"><p id="p1048918325358"><a name="p1048918325358"></a><a name="p1048918325358"></a>类型</p>
    </th>
    <th class="cellrowborder" valign="top" width="15%" id="mcps1.1.5.1.3"><p id="p1248913220353"><a name="p1248913220353"></a><a name="p1248913220353"></a>必填(M)/选填(O)</p>
    </th>
    <th class="cellrowborder" valign="top" width="40%" id="mcps1.1.5.1.4"><p id="p164891432183514"><a name="p164891432183514"></a><a name="p164891432183514"></a>说明</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row7489332153513"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.5.1.1 "><p id="p10489332183514"><a name="p10489332183514"></a><a name="p10489332183514"></a>callback</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.2 "><p id="p1648963213519"><a name="p1648963213519"></a><a name="p1648963213519"></a>Action&lt;<a href="#li116581034165518">RewardedVideoAdCloseResult</a>&gt;</p>
    </td>
    <td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.5.1.3 "><p id="p1148973216359"><a name="p1148973216359"></a><a name="p1148973216359"></a>M</p>
    </td>
    <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p4489133203514"><a name="p4489133203514"></a><a name="p4489133203514"></a>监听激励视频广告关闭事件。只有在用户主动关闭激励视频广告时，广告才会关闭。</p>
    </td>
    </tr>
    </tbody>
    </table>

-   <a name="li116581034165518"></a>RewardedVideoAdCloseResult参数

    <a name="table3762133816016"></a>
    <table><thead align="left"><tr id="row476223811016"><th class="cellrowborder" valign="top" width="25%" id="mcps1.1.4.1.1"><p id="p7762113816019"><a name="p7762113816019"></a><a name="p7762113816019"></a>参数</p>
    </th>
    <th class="cellrowborder" valign="top" width="25%" id="mcps1.1.4.1.2"><p id="p1576214383020"><a name="p1576214383020"></a><a name="p1576214383020"></a>类型</p>
    </th>
    <th class="cellrowborder" valign="top" width="50%" id="mcps1.1.4.1.3"><p id="p476210382016"><a name="p476210382016"></a><a name="p476210382016"></a>说明</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row37621381606"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p869218471602"><a name="p869218471602"></a><a name="p869218471602"></a>isEnded</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p126928471105"><a name="p126928471105"></a><a name="p126928471105"></a>bool</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p146926472012"><a name="p146926472012"></a><a name="p146926472012"></a>视频关闭的情况：</p>
    <a name="ul116921647705"></a><a name="ul116921647705"></a><ul id="ul116921647705"><li>true：用户是在视频播放完以后关闭的。</li><li>false：用户在视频播放过程中关闭的。</li></ul>
    </td>
    </tr>
    </tbody>
    </table>

-   示例代码

    ```
    public void OnClose()
    {
            Debug.Log("RewardedVideoAd OnClose.");
            _rewardedVideoAd.OnClose((res) =>
            {
                Debug.Log("RewardedVideoAd OnClose res: " + res.isEnded);
                if (res.isEnded)
                {
                    Debug.Log("播放视频结束，给予奖励.");
                }
                else
                {
                    Debug.Log("未播放完视频，不给予奖励.");
                }
            });
    }
    ```


### RewardedVideoAd.OffClose\(\)<a name="section16606134583017"></a>

-   描述

    移除激励视频广告关闭监听。

-   示例代码

    ```
    public void OffClose()
    {
            Debug.Log("RewardedVideoAd OffClose.");
            _rewardedVideoAd?.OffClose();
    }
    ```


### RewardedVideoAd.OnError\(Action< AdErrorResult \> callback\)<a name="section119501653173011"></a>

-   描述

    监听激励视频广告加载错误事件。

-   请求参数

    <a name="table639283619"></a>
    <table><thead align="left"><tr id="row1541123361"><th class="cellrowborder" valign="top" width="20%" id="mcps1.1.5.1.1"><p id="p1843293611"><a name="p1843293611"></a><a name="p1843293611"></a>参数</p>
    </th>
    <th class="cellrowborder" valign="top" width="25%" id="mcps1.1.5.1.2"><p id="p15402143618"><a name="p15402143618"></a><a name="p15402143618"></a>类型</p>
    </th>
    <th class="cellrowborder" valign="top" width="15%" id="mcps1.1.5.1.3"><p id="p18472113619"><a name="p18472113619"></a><a name="p18472113619"></a>必填(M)/选填(O)</p>
    </th>
    <th class="cellrowborder" valign="top" width="40%" id="mcps1.1.5.1.4"><p id="p17416216366"><a name="p17416216366"></a><a name="p17416216366"></a>说明</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row1441224369"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.5.1.1 "><p id="p1741729360"><a name="p1741729360"></a><a name="p1741729360"></a>callback</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.2 "><p id="p101751459193516"><a name="p101751459193516"></a><a name="p101751459193516"></a>Action&lt;<a href="#li136250112017">AdErrorResult</a>&gt;</p>
    </td>
    <td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.5.1.3 "><p id="p20516212368"><a name="p20516212368"></a><a name="p20516212368"></a>M</p>
    </td>
    <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p1851524361"><a name="p1851524361"></a><a name="p1851524361"></a>监听激励视频广告加载错误事件。</p>
    </td>
    </tr>
    </tbody>
    </table>

-   <a name="li136250112017"></a>AdErrorResult参数

    <a name="table511817377312"></a>
    <table><thead align="left"><tr id="row1711913371132"><th class="cellrowborder" valign="top" width="25%" id="mcps1.1.4.1.1"><p id="p18119143716313"><a name="p18119143716313"></a><a name="p18119143716313"></a>参数</p>
    </th>
    <th class="cellrowborder" valign="top" width="25%" id="mcps1.1.4.1.2"><p id="p17119337333"><a name="p17119337333"></a><a name="p17119337333"></a>类型</p>
    </th>
    <th class="cellrowborder" valign="top" width="50%" id="mcps1.1.4.1.3"><p id="p191191237139"><a name="p191191237139"></a><a name="p191191237139"></a>说明</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row141196372311"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p3669174918315"><a name="p3669174918315"></a><a name="p3669174918315"></a>errCode</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p1666916495310"><a name="p1666916495310"></a><a name="p1666916495310"></a>int</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p766915491639"><a name="p766915491639"></a><a name="p766915491639"></a>错误码。</p>
    </td>
    </tr>
    <tr id="row1732613453318"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p166912491833"><a name="p166912491833"></a><a name="p166912491833"></a>errMsg</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p196697496310"><a name="p196697496310"></a><a name="p196697496310"></a>string</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p13669949339"><a name="p13669949339"></a><a name="p13669949339"></a>错误码描述信息。</p>
    </td>
    </tr>
    </tbody>
    </table>

-   示例代码

    ```
    public void OnError()
    {
            Debug.Log("RewardedVideoAd OnError.");
            _rewardedVideoAd.OnError((res) =>
            {
                Debug.Log("RewardedVideoAd OnError errCode: " + res.errCode + ", errMsg: " + res.errMsg);
            });
    }
    ```


### RewardedVideoAd.OffError\(\)<a name="section6598558173013"></a>

-   描述

    移除激励视频广告加载错误监听。

-   示例代码

    ```
    public void OffError()
    {
            Debug.Log("RewardedVideoAd OffError.");
            _rewardedVideoAd?.OffError();
    }
    ```


### RewardedVideoAd.SetTagForChildProtection\(int childProtection\)<a name="section145098563115"></a>

-   描述

    设置儿童保护标签。

-   请求参数

    <a name="table12937164016418"></a>
    <table><thead align="left"><tr id="row1393719401049"><th class="cellrowborder" valign="top" width="20%" id="mcps1.1.5.1.1"><p id="p1793794014420"><a name="p1793794014420"></a><a name="p1793794014420"></a>参数</p>
    </th>
    <th class="cellrowborder" valign="top" width="20%" id="mcps1.1.5.1.2"><p id="p199373400420"><a name="p199373400420"></a><a name="p199373400420"></a>类型</p>
    </th>
    <th class="cellrowborder" valign="top" width="20%" id="mcps1.1.5.1.3"><p id="p1293815401417"><a name="p1293815401417"></a><a name="p1293815401417"></a>必填(M)/选填(O)</p>
    </th>
    <th class="cellrowborder" valign="top" width="40%" id="mcps1.1.5.1.4"><p id="p593811409413"><a name="p593811409413"></a><a name="p593811409413"></a>说明</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row17938174014410"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.5.1.1 "><p id="p221312531445"><a name="p221312531445"></a><a name="p221312531445"></a>childProtection</p>
    </td>
    <td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.5.1.2 "><p id="p521395317415"><a name="p521395317415"></a><a name="p521395317415"></a>int</p>
    </td>
    <td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.5.1.3 "><p id="p112131553146"><a name="p112131553146"></a><a name="p112131553146"></a>M</p>
    </td>
    <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p12213145312410"><a name="p12213145312410"></a><a name="p12213145312410"></a>儿童保护标签：</p>
    <a name="ul1221325316414"></a><a name="ul1221325316414"></a><ul id="ul1221325316414"><li>-1：您不希望表明您的广告内容是否需要符合COPPA的规定。</li><li>0：表明您的广告内容不需要符合COPPA的规定。</li><li>1：表明您的广告内容需要符合COPPA的规定（该广告请求无法获取到任何广告）。</li></ul>
    </td>
    </tr>
    </tbody>
    </table>

-   示例代码

    ```
    public void SetTagForChildProtection()
    {
            Debug.Log("RewardedVideoAd SetTagForChildProtection.");
            _rewardedVideoAd?.SetTagForChildProtection();
    }
    ```


### RewardedVideoAd.SetTagForUnderAgeOfPromise\(int underAgeOfPromiseStr\)<a name="section15967121010318"></a>

-   描述

    设置面向未达到法定承诺年龄用户标签。

-   请求参数

    <a name="table10635121374"></a>
    <table><thead align="left"><tr id="row363111218372"><th class="cellrowborder" valign="top" width="20%" id="mcps1.1.5.1.1"><p id="p156312123379"><a name="p156312123379"></a><a name="p156312123379"></a>参数</p>
    </th>
    <th class="cellrowborder" valign="top" width="20%" id="mcps1.1.5.1.2"><p id="p18631212133714"><a name="p18631212133714"></a><a name="p18631212133714"></a>类型</p>
    </th>
    <th class="cellrowborder" valign="top" width="20%" id="mcps1.1.5.1.3"><p id="p146321213376"><a name="p146321213376"></a><a name="p146321213376"></a>必填(M)/选填(O)</p>
    </th>
    <th class="cellrowborder" valign="top" width="40%" id="mcps1.1.5.1.4"><p id="p363141210376"><a name="p363141210376"></a><a name="p363141210376"></a>说明</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row1363181214376"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.5.1.1 "><p id="p183785341474"><a name="p183785341474"></a><a name="p183785341474"></a>underAgeOfPromiseStr</p>
    </td>
    <td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.5.1.2 "><p id="p1737811341718"><a name="p1737811341718"></a><a name="p1737811341718"></a>int</p>
    </td>
    <td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.5.1.3 "><p id="p109541045183810"><a name="p109541045183810"></a><a name="p109541045183810"></a>M</p>
    </td>
    <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p11565133412717"><a name="p11565133412717"></a><a name="p11565133412717"></a>未达到法定承诺年龄用户的设置。</p>
    <a name="ul15651434273"></a><a name="ul15651434273"></a><ul id="ul15651434273"><li>-1: 表明您尚未指定广告请求是否要符合未达到法定承诺年龄用户的广告标准。</li><li>0: 表明您不希望广告请求符合未达到法定承诺年龄用户的广告标准。</li><li>1: 表明您希望广告请求符合未达到法定承诺年龄用户的广告标准。</li></ul>
    </td>
    </tr>
    </tbody>
    </table>

-   示例代码

    ```
    public void SetTagForUnderAgeOfPromise()
    {
            Debug.Log("RewardedVideoAd SetTagForUnderAgeOfPromise.");
            _rewardedVideoAd?.SetTagForUnderAgeOfPromise();
    }
    ```


### RewardedVideoAd.SetAdContentClassification\(string adContentClassification\)<a name="section161829123117"></a>

-   描述

    设置广告内容分级上限。

-   请求参数

    <a name="table14214858143710"></a>
    <table><thead align="left"><tr id="row1321415820371"><th class="cellrowborder" valign="top" width="20%" id="mcps1.1.5.1.1"><p id="p22140588374"><a name="p22140588374"></a><a name="p22140588374"></a>参数</p>
    </th>
    <th class="cellrowborder" valign="top" width="20%" id="mcps1.1.5.1.2"><p id="p52155586373"><a name="p52155586373"></a><a name="p52155586373"></a>类型</p>
    </th>
    <th class="cellrowborder" valign="top" width="20%" id="mcps1.1.5.1.3"><p id="p12151658203714"><a name="p12151658203714"></a><a name="p12151658203714"></a>必填(M)/选填(O)</p>
    </th>
    <th class="cellrowborder" valign="top" width="40%" id="mcps1.1.5.1.4"><p id="p8215758183711"><a name="p8215758183711"></a><a name="p8215758183711"></a>说明</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row1121514583379"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.5.1.1 "><p id="p149401591591"><a name="p149401591591"></a><a name="p149401591591"></a>adContentClassification</p>
    </td>
    <td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.5.1.2 "><p id="p59411491999"><a name="p59411491999"></a><a name="p59411491999"></a>string</p>
    </td>
    <td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.5.1.3 "><p id="p1694114916919"><a name="p1694114916919"></a><a name="p1694114916919"></a>M</p>
    </td>
    <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p494169792"><a name="p494169792"></a><a name="p494169792"></a>广告内容类型。</p>
    <a name="ul199416918912"></a><a name="ul199416918912"></a><ul id="ul199416918912"><li>W：适合幼儿及以上年龄段观众的内容。</li><li>PI：适合少儿及以上年龄段观众的内容。</li><li>J：适合青少年及以上年龄段观众的内容。</li><li>A：仅适合成人观众的内容。</li></ul>
    </td>
    </tr>
    </tbody>
    </table>

-   示例代码

    ```
    public void SetAdContentClassification()
    {
            Debug.Log("RewardedVideoAd SetAdContentClassification.");
            _rewardedVideoAd?.SetAdContentClassification();
    }
    ```


### RewardedVideoAd.SetNonPersonalizedAd\(int personalizedAd\)<a name="section1830923403118"></a>

-   描述

    设置是否请求非个性化广告。

-   请求参数

    <a name="table9522143163920"></a>
    <table><thead align="left"><tr id="row1652393113919"><th class="cellrowborder" valign="top" width="20%" id="mcps1.1.5.1.1"><p id="p152311311394"><a name="p152311311394"></a><a name="p152311311394"></a>参数</p>
    </th>
    <th class="cellrowborder" valign="top" width="20%" id="mcps1.1.5.1.2"><p id="p13523731390"><a name="p13523731390"></a><a name="p13523731390"></a>类型</p>
    </th>
    <th class="cellrowborder" valign="top" width="20%" id="mcps1.1.5.1.3"><p id="p15238316390"><a name="p15238316390"></a><a name="p15238316390"></a>必填(M)/选填(O)</p>
    </th>
    <th class="cellrowborder" valign="top" width="40%" id="mcps1.1.5.1.4"><p id="p1452314310396"><a name="p1452314310396"></a><a name="p1452314310396"></a>说明</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row1523336392"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.5.1.1 "><p id="p7529730181212"><a name="p7529730181212"></a><a name="p7529730181212"></a>personalizedAd</p>
    </td>
    <td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.5.1.2 "><p id="p13529183012127"><a name="p13529183012127"></a><a name="p13529183012127"></a>int</p>
    </td>
    <td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.5.1.3 "><p id="p125295301121"><a name="p125295301121"></a><a name="p125295301121"></a>M</p>
    </td>
    <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p145294303120"><a name="p145294303120"></a><a name="p145294303120"></a>非个性化广告标记。</p>
    <a name="ul16529133019126"></a><a name="ul16529133019126"></a><ul id="ul16529133019126"><li>0：请求个性化广告与非个性化广告。</li><li>1：请求非个性化广告。</li></ul>
    </td>
    </tr>
    </tbody>
    </table>

-   示例代码

    ```
    public void SetNonPersonalizedAd()
    {
            Debug.Log("RewardedVideoAd SetNonPersonalizedAd.");
            _rewardedVideoAd?.SetNonPersonalizedAd();
    }
    ```


### RewardedVideoAd.Destroy\(\)<a name="section59891439183110"></a>

-   描述

    销毁激励视频广告。

-   示例代码

    ```
    public void Destroy()
    {
            Debug.Log("RewardedVideoAd Destroy.");
            _rewardedVideoAd?.Destroy();
            _rewardedVideoAd = null;
    }
    ```


