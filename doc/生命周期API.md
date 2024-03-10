# 生命周期API<a name="ZH-CN_TOPIC_0000001822400137"></a>

-   [接口定义](#section183503126613)
    -   [static void ExitApplication\(ExitApplicationOption exitApplicationOption\)](#section121941641135120)
    -   [static GetLaunchOptionsSyncResult GetLaunchOptionsSync\(\)](#section1783175518529)
    -   [static void OnHide\(Action action\)](#section737313179228)
    -   [static void OffHide\(Action action\)](#section155251633182217)
    -   [static void OnShow\(Action<string\> action\)](#section5526534102216)
    -   [static void OffShow\(Action<string\> action\)](#section769445893011)

## 接口定义<a name="section183503126613"></a>

<a name="table892310973612"></a>
<table><thead align="left"><tr id="row19232993618"><th class="cellrowborder" valign="top" width="50%" id="mcps1.1.3.1.1"><p id="p49246933615"><a name="p49246933615"></a><a name="p49246933615"></a>接口</p>
</th>
<th class="cellrowborder" valign="top" width="50%" id="mcps1.1.3.1.2"><p id="p592499133614"><a name="p592499133614"></a><a name="p592499133614"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="row19241298367"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.1 "><p id="p1223435204515"><a name="p1223435204515"></a><a name="p1223435204515"></a><a href="#section121941641135120">static void ExitApplication(ExitApplicationOption exitApplicationOption)</a></p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.2 "><p id="p18234195214453"><a name="p18234195214453"></a><a name="p18234195214453"></a>退出当前快游戏。</p>
</td>
</tr>
<tr id="row043620214017"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.1 "><p id="p2106151718449"><a name="p2106151718449"></a><a name="p2106151718449"></a><a href="#section1783175518529">static GetLaunchOptionsSyncResult GetLaunchOptionsSync()</a></p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.2 "><p id="p384191719444"><a name="p384191719444"></a><a name="p384191719444"></a>获取快游戏启动时的参数。</p>
</td>
</tr>
<tr id="row11844125219468"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.1 "><p id="p168451552144612"><a name="p168451552144612"></a><a name="p168451552144612"></a><a href="#section737313179228">static void OnHide(Action action)</a></p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.2 "><p id="p1684517522463"><a name="p1684517522463"></a><a name="p1684517522463"></a>监听后台事件，在快游戏切换到后台时触发回调。</p>
</td>
</tr>
<tr id="row11733514134712"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.1 "><p id="p173361417472"><a name="p173361417472"></a><a name="p173361417472"></a><a href="#section155251633182217">static void OffHide(Action action)</a></p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.2 "><p id="p14733151416478"><a name="p14733151416478"></a><a name="p14733151416478"></a>取消监听后台事件。</p>
</td>
</tr>
<tr id="row1198911263477"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.1 "><p id="p699092624717"><a name="p699092624717"></a><a name="p699092624717"></a><a href="#section5526534102216">static void OnShow(Action&lt;string&gt; action)</a></p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.2 "><p id="p199901626134715"><a name="p199901626134715"></a><a name="p199901626134715"></a>监听前台事件，在快游戏切换回前台时触发回调。</p>
</td>
</tr>
<tr id="row156052027184713"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.1 "><p id="p146055276475"><a name="p146055276475"></a><a name="p146055276475"></a><a href="#section769445893011">static void OffShow(Action&lt;string&gt; action)</a></p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.2 "><p id="p76061227194712"><a name="p76061227194712"></a><a name="p76061227194712"></a>取消监听前台事件。</p>
</td>
</tr>
</tbody>
</table>

### static void ExitApplication\(ExitApplicationOption exitApplicationOption\)<a name="section121941641135120"></a>

-   描述

    退出当前快游戏。

-   请求参数ExitApplicationOption

    <a name="table1814161071117"></a>
    <table><thead align="left"><tr id="row1681420101112"><th class="cellrowborder" valign="top" width="20%" id="mcps1.1.5.1.1"><p id="p138141210131115"><a name="p138141210131115"></a><a name="p138141210131115"></a>参数</p>
    </th>
    <th class="cellrowborder" valign="top" width="25%" id="mcps1.1.5.1.2"><p id="p381431011119"><a name="p381431011119"></a><a name="p381431011119"></a>类型</p>
    </th>
    <th class="cellrowborder" valign="top" width="15%" id="mcps1.1.5.1.3"><p id="p48141510171111"><a name="p48141510171111"></a><a name="p48141510171111"></a>必填(M)/选填(O)</p>
    </th>
    <th class="cellrowborder" valign="top" width="40%" id="mcps1.1.5.1.4"><p id="p381411013117"><a name="p381411013117"></a><a name="p381411013117"></a>说明</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row1681518103113"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.5.1.1 "><p id="p16815610181111"><a name="p16815610181111"></a><a name="p16815610181111"></a>success</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.2 "><p id="p1581571091112"><a name="p1581571091112"></a><a name="p1581571091112"></a>Action</p>
    </td>
    <td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.5.1.3 "><p id="p1881511106114"><a name="p1881511106114"></a><a name="p1881511106114"></a>O</p>
    </td>
    <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p7815191081115"><a name="p7815191081115"></a><a name="p7815191081115"></a>接口调用成功的回调函数。</p>
    </td>
    </tr>
    <tr id="row68151310181113"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.5.1.1 "><p id="p1681561051116"><a name="p1681561051116"></a><a name="p1681561051116"></a>fail</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.2 "><p id="p7815161010116"><a name="p7815161010116"></a><a name="p7815161010116"></a>Action</p>
    </td>
    <td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.5.1.3 "><p id="p5815151071115"><a name="p5815151071115"></a><a name="p5815151071115"></a>O</p>
    </td>
    <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p138151410101113"><a name="p138151410101113"></a><a name="p138151410101113"></a>接口调用失败的回调函数。</p>
    </td>
    </tr>
    <tr id="row13815201031118"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.5.1.1 "><p id="p8815111091112"><a name="p8815111091112"></a><a name="p8815111091112"></a>complete</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.2 "><p id="p1281571013119"><a name="p1281571013119"></a><a name="p1281571013119"></a>Action</p>
    </td>
    <td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.5.1.3 "><p id="p1781571019115"><a name="p1781571019115"></a><a name="p1781571019115"></a>O</p>
    </td>
    <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p1981551010114"><a name="p1981551010114"></a><a name="p1981551010114"></a>若有函数传入，将在成功、失败后调用该函数。</p>
    </td>
    </tr>
    </tbody>
    </table>

-   示例代码

    ```
    public void ExitApplication()
    {
        ExitApplicationOption exitApplicationOption = new ExitApplicationOption
        {
            success = () => { Debug.Log("ExitApplicationOption success."); },
            fail = () => { Debug.Log("ExitApplicationOption fail."); },
            complete = () => { Debug.Log("ExitApplicationOption Complete."); }
        };
        QG.ExitApplication(exitApplicationOption);
    }
    ```

### static GetLaunchOptionsSyncResult GetLaunchOptionsSync\(\)<a name="section1783175518529"></a>

-   描述

    获取快游戏启动时的参数。

-   返回参数GetLaunchOptionsSyncResult

    <a name="table79971937102811"></a>
    <table><thead align="left"><tr id="row599514377285"><th class="cellrowborder" valign="top" width="25%" id="mcps1.1.4.1.1"><p id="p7995137192819"><a name="p7995137192819"></a><a name="p7995137192819"></a>参数</p>
    </th>
    <th class="cellrowborder" valign="top" width="25%" id="mcps1.1.4.1.2"><p id="p199951637162814"><a name="p199951637162814"></a><a name="p199951637162814"></a>类型</p>
    </th>
    <th class="cellrowborder" valign="top" width="50%" id="mcps1.1.4.1.3"><p id="p17995737132816"><a name="p17995737132816"></a><a name="p17995737132816"></a>说明</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row499514371282"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p174387615516"><a name="p174387615516"></a><a name="p174387615516"></a>query</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p14437361451"><a name="p14437361451"></a><a name="p14437361451"></a>string</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p124361764519"><a name="p124361764519"></a><a name="p124361764519"></a>启动快游戏时携带的参数，详情请参见<a href="#li12799155191119">query</a>。</p>
    </td>
    </tr>
    <tr id="row129955372288"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p443613612513"><a name="p443613612513"></a><a name="p443613612513"></a>referrerInfo</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p2435462513"><a name="p2435462513"></a><a name="p2435462513"></a><a href="#li1754245012125">ReferrerInfo</a></p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p8434136855"><a name="p8434136855"></a><a name="p8434136855"></a>来源信息。从另一个快游戏、桌面图标等方式启动。</p>
    </td>
    </tr>
    </tbody>
    </table>

    -   <a name="li12799155191119"></a>query

        >![](public_sys-resources/icon-note.gif) **说明：** 
        >[DeepLink API](DeepLink-API.md)支持携带自定义参数，使用GetLaunchOptionsSync接口可以获取如下参数以及携带的自定义参数。

        <a name="table179251242111413"></a>
        <table><thead align="left"><tr id="row592512424149"><th class="cellrowborder" valign="top" width="25%" id="mcps1.1.4.1.1"><p id="p11925204261410"><a name="p11925204261410"></a><a name="p11925204261410"></a>参数</p>
        </th>
        <th class="cellrowborder" valign="top" width="25%" id="mcps1.1.4.1.2"><p id="p129251442131412"><a name="p129251442131412"></a><a name="p129251442131412"></a>类型</p>
        </th>
        <th class="cellrowborder" valign="top" width="50%" id="mcps1.1.4.1.3"><p id="p1792519422147"><a name="p1792519422147"></a><a name="p1792519422147"></a>说明</p>
        </th>
        </tr>
        </thead>
        <tbody><tr id="row209261342111418"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p1134068122018"><a name="p1134068122018"></a><a name="p1134068122018"></a>gameGiftId</p>
        </td>
        <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p193406817208"><a name="p193406817208"></a><a name="p193406817208"></a>string</p>
        </td>
        <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p7340583200"><a name="p7340583200"></a><a name="p7340583200"></a>游戏礼包ID。</p>
        </td>
        </tr>
        <tr id="row199261042201416"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p334016818204"><a name="p334016818204"></a><a name="p334016818204"></a>giftUri</p>
        </td>
        <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p2340480206"><a name="p2340480206"></a><a name="p2340480206"></a>string</p>
        </td>
        <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p83407813205"><a name="p83407813205"></a><a name="p83407813205"></a>礼包页面地址，即您在创建礼包时设置的跳转地址。启动后由快游戏自行根据礼包地址展示相应礼包页面。</p>
        </td>
        </tr>
        <tr id="row1292165113196"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p73401581206"><a name="p73401581206"></a><a name="p73401581206"></a>userEntry</p>
        </td>
        <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p93408816208"><a name="p93408816208"></a><a name="p93408816208"></a>string</p>
        </td>
        <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p1134018812019"><a name="p1134018812019"></a><a name="p1134018812019"></a>渠道平台，取值如下：</p>
        <a name="ul143402814206"></a><a name="ul143402814206"></a><ul id="ul143402814206"><li>101：巨量平台。</li><li>102：腾讯平台。</li><li>900~999：自定义的渠道平台。</li></ul>
        </td>
        </tr>
        </tbody>
        </table>

    -   <a name="li1754245012125"></a>ReferrerInfo

        <a name="table110818450145"></a>
        <table><thead align="left"><tr id="row171082045141411"><th class="cellrowborder" valign="top" width="25%" id="mcps1.1.4.1.1"><p id="p191081145111411"><a name="p191081145111411"></a><a name="p191081145111411"></a>参数</p>
        </th>
        <th class="cellrowborder" valign="top" width="25%" id="mcps1.1.4.1.2"><p id="p10108184518142"><a name="p10108184518142"></a><a name="p10108184518142"></a>类型</p>
        </th>
        <th class="cellrowborder" valign="top" width="50%" id="mcps1.1.4.1.3"><p id="p141081745191416"><a name="p141081745191416"></a><a name="p141081745191416"></a>说明</p>
        </th>
        </tr>
        </thead>
        <tbody><tr id="row1109144561416"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p19237132891513"><a name="p19237132891513"></a><a name="p19237132891513"></a>type</p>
        </td>
        <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p142361928111512"><a name="p142361928111512"></a><a name="p142361928111512"></a>string</p>
        </td>
        <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p18118105541517"><a name="p18118105541517"></a><a name="p18118105541517"></a>来源类型：</p>
        <a name="ul71301579157"></a><a name="ul71301579157"></a><ul id="ul71301579157"><li>shortcut：桌面图标。</li><li>url：网页。</li><li>app：原生应用。</li><li>quickapp：快应用或快游戏。</li><li>deeplink：链接。</li><li>other：其它。</li></ul>
        </td>
        </tr>
        <tr id="row18109144511146"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p1223519283152"><a name="p1223519283152"></a><a name="p1223519283152"></a>extraData</p>
        </td>
        <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p1234228181519"><a name="p1234228181519"></a><a name="p1234228181519"></a><a href="#li717511436137">ExtraData</a></p>
        </td>
        <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p4213112821515"><a name="p4213112821515"></a><a name="p4213112821515"></a>若来源类型为app或quickapp时，通过packageName标识调用方的包名信息。</p>
        </td>
        </tr>
        </tbody>
        </table>

        -   <a name="li717511436137"></a>ExtraData

            <a name="table8438734161710"></a>
            <table><thead align="left"><tr id="row124381334181717"><th class="cellrowborder" valign="top" width="25%" id="mcps1.1.4.1.1"><p id="p114381634111717"><a name="p114381634111717"></a><a name="p114381634111717"></a>参数</p>
            </th>
            <th class="cellrowborder" valign="top" width="25%" id="mcps1.1.4.1.2"><p id="p1043893421710"><a name="p1043893421710"></a><a name="p1043893421710"></a>类型</p>
            </th>
            <th class="cellrowborder" valign="top" width="50%" id="mcps1.1.4.1.3"><p id="p8439934201719"><a name="p8439934201719"></a><a name="p8439934201719"></a>说明</p>
            </th>
            </tr>
            </thead>
            <tbody><tr id="row443917345172"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p18616104220173"><a name="p18616104220173"></a><a name="p18616104220173"></a>packageName</p>
            </td>
            <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p76151242131712"><a name="p76151242131712"></a><a name="p76151242131712"></a>string</p>
            </td>
            <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p9614204211177"><a name="p9614204211177"></a><a name="p9614204211177"></a>调用方的包名信息。</p>
            </td>
            </tr>
            </tbody>
            </table>

-   示例代码

    ```
    public void GetLaunchOptionsSync()
    {
        GetLaunchOptionsSyncResult res = QG.GetLaunchOptionsSync();
        Debug.Log("GetLaunchOptionsSyncResult." + JsonUtility.ToJson(res));
    }
    ```

### static void OnHide\(Action action\)<a name="section737313179228"></a>

-   描述

    监听隐藏到后台事件，快游戏切换到后台时触发回调。

-   请求参数

    <a name="table162191243182316"></a>
    <table><thead align="left"><tr id="row10220243182313"><th class="cellrowborder" valign="top" width="20%" id="mcps1.1.5.1.1"><p id="p16220164310239"><a name="p16220164310239"></a><a name="p16220164310239"></a>参数</p>
    </th>
    <th class="cellrowborder" valign="top" width="25%" id="mcps1.1.5.1.2"><p id="p62202434237"><a name="p62202434237"></a><a name="p62202434237"></a>类型</p>
    </th>
    <th class="cellrowborder" valign="top" width="15%" id="mcps1.1.5.1.3"><p id="p112205437237"><a name="p112205437237"></a><a name="p112205437237"></a>必填(M)/选填(O)</p>
    </th>
    <th class="cellrowborder" valign="top" width="40%" id="mcps1.1.5.1.4"><p id="p9220543162318"><a name="p9220543162318"></a><a name="p9220543162318"></a>说明</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row13220243132318"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.5.1.1 "><p id="p122201743202310"><a name="p122201743202310"></a><a name="p122201743202310"></a>action</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.2 "><p id="p922034317232"><a name="p922034317232"></a><a name="p922034317232"></a>Action</p>
    </td>
    <td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.5.1.3 "><p id="p182209431231"><a name="p182209431231"></a><a name="p182209431231"></a>M</p>
    </td>
    <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p9900124043812"><a name="p9900124043812"></a><a name="p9900124043812"></a>后台事件的回调函数。</p>
    </td>
    </tr>
    </tbody>
    </table>

-   示例代码

    ```
    private Action _onHideAction = null;
    public void OnHide()
    {
        Debug.Log("LifecycleScene OnHide.");
        if (_onHideAction == null)
        {
            _onHideAction = new Action(_onHide);
            QG.OnHide(_onHideAction);
        }
        else
        {
            QG.OffHide(_onHideAction);
            _onHideAction = null;
        }
    }
    private void _onHide()
    {
        Debug.Log("_onHide.");
    }
    ```

### static void OffHide\(Action action\)<a name="section155251633182217"></a>

-   描述

    取消监听快游戏隐藏到后台事件。

-   请求参数

    <a name="table884815312365"></a>
    <table><thead align="left"><tr id="row178485317360"><th class="cellrowborder" valign="top" width="20%" id="mcps1.1.5.1.1"><p id="p148480314368"><a name="p148480314368"></a><a name="p148480314368"></a>参数</p>
    </th>
    <th class="cellrowborder" valign="top" width="25%" id="mcps1.1.5.1.2"><p id="p128481631103612"><a name="p128481631103612"></a><a name="p128481631103612"></a>类型</p>
    </th>
    <th class="cellrowborder" valign="top" width="15%" id="mcps1.1.5.1.3"><p id="p1884819316361"><a name="p1884819316361"></a><a name="p1884819316361"></a>必填(M)/选填(O)</p>
    </th>
    <th class="cellrowborder" valign="top" width="40%" id="mcps1.1.5.1.4"><p id="p1484863143617"><a name="p1484863143617"></a><a name="p1484863143617"></a>说明</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row1284883173618"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.5.1.1 "><p id="p10848131103613"><a name="p10848131103613"></a><a name="p10848131103613"></a>action</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.2 "><p id="p1884833173619"><a name="p1884833173619"></a><a name="p1884833173619"></a>Action</p>
    </td>
    <td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.5.1.3 "><p id="p48484311362"><a name="p48484311362"></a><a name="p48484311362"></a>M</p>
    </td>
    <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p39622104416"><a name="p39622104416"></a><a name="p39622104416"></a>OnHide传入的监听函数，不传此参数将默认传null，则移除所有监听函数。</p>
    </td>
    </tr>
    </tbody>
    </table>

### static void OnShow\(Action<string\> action\)<a name="section5526534102216"></a>

-   描述

    监听快游戏回到前台的事件。

-   请求参数

    <a name="table4599102643719"></a>
    <table><thead align="left"><tr id="row359942612371"><th class="cellrowborder" valign="top" width="20%" id="mcps1.1.5.1.1"><p id="p259915262373"><a name="p259915262373"></a><a name="p259915262373"></a>参数</p>
    </th>
    <th class="cellrowborder" valign="top" width="25%" id="mcps1.1.5.1.2"><p id="p1660042616374"><a name="p1660042616374"></a><a name="p1660042616374"></a>类型</p>
    </th>
    <th class="cellrowborder" valign="top" width="15%" id="mcps1.1.5.1.3"><p id="p10600426153717"><a name="p10600426153717"></a><a name="p10600426153717"></a>必填(M)/选填(O)</p>
    </th>
    <th class="cellrowborder" valign="top" width="40%" id="mcps1.1.5.1.4"><p id="p360012615374"><a name="p360012615374"></a><a name="p360012615374"></a>说明</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row86002261372"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.5.1.1 "><p id="p5600426193718"><a name="p5600426193718"></a><a name="p5600426193718"></a>action</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.2 "><p id="p17600726123710"><a name="p17600726123710"></a><a name="p17600726123710"></a>Action&lt;string&gt;</p>
    </td>
    <td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.5.1.3 "><p id="p360042619379"><a name="p360042619379"></a><a name="p360042619379"></a>M</p>
    </td>
    <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p660092614374"><a name="p660092614374"></a><a name="p660092614374"></a>前台事件的回调函数。</p>
    </td>
    </tr>
    </tbody>
    </table>

-   示例代码

    ```
    private Action<string> _onShowAction = null;
    public void OnShow()
    {
        Debug.Log("LifecycleScene OnShow.");
        if (_onShowAction == null)
        {
            _onShowAction = new Action<string>(_onShow);
            QG.OnShow(_onShowAction);
        }
        else
        {
            QG.OffShow(_onShowAction);
            _onShowAction = null;
        }
    }
    private void _onShow(string res)
    {
        Debug.Log("_onShow." + res);
    }
    ```

### static void OffShow\(Action<string\> action\)<a name="section769445893011"></a>

-   描述

    取消监听快游戏回到前台的事件。

-   请求参数

    <a name="table7529161684216"></a>
    <table><thead align="left"><tr id="row14529616134218"><th class="cellrowborder" valign="top" width="20%" id="mcps1.1.5.1.1"><p id="p1352911614216"><a name="p1352911614216"></a><a name="p1352911614216"></a>参数</p>
    </th>
    <th class="cellrowborder" valign="top" width="25%" id="mcps1.1.5.1.2"><p id="p5529151614422"><a name="p5529151614422"></a><a name="p5529151614422"></a>类型</p>
    </th>
    <th class="cellrowborder" valign="top" width="15%" id="mcps1.1.5.1.3"><p id="p16529201664211"><a name="p16529201664211"></a><a name="p16529201664211"></a>必填(M)/选填(O)</p>
    </th>
    <th class="cellrowborder" valign="top" width="40%" id="mcps1.1.5.1.4"><p id="p75291616144218"><a name="p75291616144218"></a><a name="p75291616144218"></a>说明</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row175291116134217"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.5.1.1 "><p id="p35295169420"><a name="p35295169420"></a><a name="p35295169420"></a>action</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.2 "><p id="p9530101624211"><a name="p9530101624211"></a><a name="p9530101624211"></a>Action&lt;string&gt;</p>
    </td>
    <td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.5.1.3 "><p id="p75303160424"><a name="p75303160424"></a><a name="p75303160424"></a>M</p>
    </td>
    <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p1653041614425"><a name="p1653041614425"></a><a name="p1653041614425"></a>OnShow传入的监听函数，不传此参数将默认传null，则移除所有监听函数。</p>
    </td>
    </tr>
    </tbody>
    </table>

