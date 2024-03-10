# 帐号API<a name="ZH-CN_TOPIC_0000001646407724"></a>

-   [接口定义](#section151401344104518)
    -   [static void GameLogin\(GameLoginOption gameLoginOption\)\(1070+\)](#section188811956609)

## 接口定义<a name="section151401344104518"></a>

<a name="table46651241195814"></a>
<table><thead align="left"><tr id="row106661541205818"><th class="cellrowborder" valign="top" width="50%" id="mcps1.1.3.1.1"><p id="p96661941195810"><a name="p96661941195810"></a><a name="p96661941195810"></a>接口</p>
</th>
<th class="cellrowborder" valign="top" width="50%" id="mcps1.1.3.1.2"><p id="p146661641195815"><a name="p146661641195815"></a><a name="p146661641195815"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="row10666741105812"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.1 "><p id="p14493345175811"><a name="p14493345175811"></a><a name="p14493345175811"></a><a href="#section188811956609">static void GameLogin(GameLoginOption gameLoginOption)(1070+)</a></p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.2 "><p id="p18493194514586"><a name="p18493194514586"></a><a name="p18493194514586"></a>快游戏防沉迷登录。</p>
</td>
</tr>
</tbody>
</table>

### static void GameLogin\(GameLoginOption gameLoginOption\)\(1070+\)<a name="section188811956609"></a>

-   描述

    快游戏防沉迷登录。

-   请求参数GameLoginOption

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
    <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p165588357412"><a name="p165588357412"></a><a name="p165588357412"></a>在玩家未登录华为帐号或鉴权失败时主动打开华为帐号登录页面，此参数固定传入“1”。</p>
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
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.2 "><p id="p49501221842"><a name="p49501221842"></a><a name="p49501221842"></a>Action&lt;<a href="#li15997143714281">LoginSuccessResult</a>&gt;</p>
    </td>
    <td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.5.1.3 "><p id="p35451314555"><a name="p35451314555"></a><a name="p35451314555"></a>O</p>
    </td>
    <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p109491225414"><a name="p109491225414"></a><a name="p109491225414"></a>接口调用成功的回调函数。</p>
    </td>
    </tr>
    <tr id="row754912211504"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.5.1.1 "><p id="p119481022445"><a name="p119481022445"></a><a name="p119481022445"></a>fail</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.2 "><p id="p149486221847"><a name="p149486221847"></a><a name="p149486221847"></a>Action&lt;<a href="#li29976373283">LoginFailResult</a>&gt;</p>
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
    <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p49222221445"><a name="p49222221445"></a><a name="p49222221445"></a>若有函数传入，将在成功、失败后调用该函数。</p>
    </td>
    </tr>
    </tbody>
    </table>

    -   <a name="li15997143714281"></a>LoginSuccessResult

        <a name="table79971937102811"></a>
        <table><thead align="left"><tr id="row599514377285"><th class="cellrowborder" valign="top" width="25%" id="mcps1.1.4.1.1"><p id="p7995137192819"><a name="p7995137192819"></a><a name="p7995137192819"></a>参数</p>
        </th>
        <th class="cellrowborder" valign="top" width="25%" id="mcps1.1.4.1.2"><p id="p199951637162814"><a name="p199951637162814"></a><a name="p199951637162814"></a>类型</p>
        </th>
        <th class="cellrowborder" valign="top" width="50%" id="mcps1.1.4.1.3"><p id="p17995737132816"><a name="p17995737132816"></a><a name="p17995737132816"></a>说明</p>
        </th>
        </tr>
        </thead>
        <tbody><tr id="row499514371282"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p1399503772817"><a name="p1399503772817"></a><a name="p1399503772817"></a>playerId</p>
        </td>
        <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p1699583772818"><a name="p1699583772818"></a><a name="p1699583772818"></a>string</p>
        </td>
        <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p1199583714283"><a name="p1199583714283"></a><a name="p1199583714283"></a>游戏的玩家标识，若游戏不需要华为帐号的登录结果进行鉴权，那么当返回playgerId的时候就可以使用该值进入游戏。</p>
        </td>
        </tr>
        <tr id="row129955372288"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p1899516371286"><a name="p1899516371286"></a><a name="p1899516371286"></a>displayName</p>
        </td>
        <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p1399543732815"><a name="p1399543732815"></a><a name="p1399543732815"></a>string</p>
        </td>
        <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p1199503782810"><a name="p1199503782810"></a><a name="p1199503782810"></a>用户昵称。</p>
        </td>
        </tr>
        <tr id="row8996193722815"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p14995153742811"><a name="p14995153742811"></a><a name="p14995153742811"></a>playerLevel</p>
        </td>
        <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p12995133772812"><a name="p12995133772812"></a><a name="p12995133772812"></a>int</p>
        </td>
        <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p18995113720286"><a name="p18995113720286"></a><a name="p18995113720286"></a>玩家等级。</p>
        </td>
        </tr>
        <tr id="row699611371280"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p20996837132812"><a name="p20996837132812"></a><a name="p20996837132812"></a>isAuth</p>
        </td>
        <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p10996203714281"><a name="p10996203714281"></a><a name="p10996203714281"></a>int</p>
        </td>
        <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p159961737182814"><a name="p159961737182814"></a><a name="p159961737182814"></a>若isAuth为1时，游戏需要校验返回的参数鉴权签名。</p>
        </td>
        </tr>
        <tr id="row7996173762816"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p1299643720287"><a name="p1299643720287"></a><a name="p1299643720287"></a>ts</p>
        </td>
        <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p8996183711283"><a name="p8996183711283"></a><a name="p8996183711283"></a>string</p>
        </td>
        <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p2996737112814"><a name="p2996737112814"></a><a name="p2996737112814"></a>时间戳，用于鉴权签名校验。</p>
        </td>
        </tr>
        <tr id="row799613373284"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p119961837142816"><a name="p119961837142816"></a><a name="p119961837142816"></a>gameAuthSign</p>
        </td>
        <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p3996123711282"><a name="p3996123711282"></a><a name="p3996123711282"></a>string</p>
        </td>
        <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p10996123722815"><a name="p10996123722815"></a><a name="p10996123722815"></a>鉴权签名。</p>
        </td>
        </tr>
        <tr id="row49962037132811"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p179961537102810"><a name="p179961537102810"></a><a name="p179961537102810"></a>hiResImageUri</p>
        </td>
        <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p2996737162814"><a name="p2996737162814"></a><a name="p2996737162814"></a>string</p>
        </td>
        <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p699643742810"><a name="p699643742810"></a><a name="p699643742810"></a>高清头像链接。若没有则为空字符串。</p>
        </td>
        </tr>
        <tr id="row699714378285"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p20996937182820"><a name="p20996937182820"></a><a name="p20996937182820"></a>imageUri</p>
        </td>
        <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p1799603710287"><a name="p1799603710287"></a><a name="p1799603710287"></a>string</p>
        </td>
        <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p2099693732814"><a name="p2099693732814"></a><a name="p2099693732814"></a>头像链接。若没有则为空字符串。</p>
        </td>
        </tr>
        </tbody>
        </table>

    -   <a name="li29976373283"></a>LoginFailResult

        <a name="table18997937102814"></a>
        <table><thead align="left"><tr id="row16997123742812"><th class="cellrowborder" valign="top" width="25%" id="mcps1.1.4.1.1"><p id="p13997103722817"><a name="p13997103722817"></a><a name="p13997103722817"></a>参数</p>
        </th>
        <th class="cellrowborder" valign="top" width="25%" id="mcps1.1.4.1.2"><p id="p129971437172818"><a name="p129971437172818"></a><a name="p129971437172818"></a>类型</p>
        </th>
        <th class="cellrowborder" valign="top" width="50%" id="mcps1.1.4.1.3"><p id="p139971037192812"><a name="p139971037192812"></a><a name="p139971037192812"></a>说明</p>
        </th>
        </tr>
        </thead>
        <tbody><tr id="row09973378286"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p6997133722816"><a name="p6997133722816"></a><a name="p6997133722816"></a>code</p>
        </td>
        <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p1299714379285"><a name="p1299714379285"></a><a name="p1299714379285"></a>int</p>
        </td>
        <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p099713792815"><a name="p099713792815"></a><a name="p099713792815"></a><a href="#li168459561140">错误码</a>。</p>
        </td>
        </tr>
        <tr id="row99971237152818"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p20997163710289"><a name="p20997163710289"></a><a name="p20997163710289"></a>data</p>
        </td>
        <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p119979372286"><a name="p119979372286"></a><a name="p119979372286"></a>string</p>
        </td>
        <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p5997183762810"><a name="p5997183762810"></a><a name="p5997183762810"></a>错误码描述信息。</p>
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
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.2 "><p id="p113891331857"><a name="p113891331857"></a><a name="p113891331857"></a>参见<a href="https://developer.huawei.com/consumer/cn/doc/HMS-References/hms-error-code" target="_blank" rel="noopener noreferrer">通用错误码</a>。</p>
    </td>
    </tr>
    <tr id="row1217202915384"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.1 "><p id="p1238919317512"><a name="p1238919317512"></a><a name="p1238919317512"></a>业务错误码</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.2 "><p id="p13895311453"><a name="p13895311453"></a><a name="p13895311453"></a>参见<a href="https://developer.huawei.com/consumer/cn/doc/HMS-References/game-return-code-v4" target="_blank" rel="noopener noreferrer">游戏错误码</a>和<a href="https://developer.huawei.com/consumer/cn/doc/HMS-References/account-error-code" target="_blank" rel="noopener noreferrer">帐号错误码</a>。</p>
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

