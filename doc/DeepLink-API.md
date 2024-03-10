# DeepLink API<a name="ZH-CN_TOPIC_0000001775800222"></a>

-   [接口定义](#section183503126613)
    -   [static void NavigateToQuickApp<T\>\(NavigateToQuickAppOption<T\> navigateToQuickAppOption\)](#section16342019479)
    -   [static void OpenDeeplink\(OpenDeeplinkOption openDeeplinkOption\)](#section1512143214557)

## 接口定义<a name="section183503126613"></a>

<a name="table892310973612"></a>
<table><thead align="left"><tr id="row19232993618"><th class="cellrowborder" valign="top" width="50%" id="mcps1.1.3.1.1"><p id="p49246933615"><a name="p49246933615"></a><a name="p49246933615"></a>接口</p>
</th>
<th class="cellrowborder" valign="top" width="50%" id="mcps1.1.3.1.2"><p id="p592499133614"><a name="p592499133614"></a><a name="p592499133614"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="row19241298367"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.1 "><p id="p15451341124511"><a name="p15451341124511"></a><a name="p15451341124511"></a><a href="#section16342019479">static void NavigateToQuickApp&lt;T&gt;(NavigateToQuickAppOption&lt;T&gt; navigateToQuickAppOption)</a></p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.2 "><p id="p8544194174512"><a name="p8544194174512"></a><a name="p8544194174512"></a>打开另一个快游戏。</p>
</td>
</tr>
<tr id="row043620214017"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.1 "><p id="p6544194134519"><a name="p6544194134519"></a><a name="p6544194134519"></a><a href="#section1512143214557">static void OpenDeeplink(OpenDeeplinkOption openDeeplinkOption)</a></p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.2 "><p id="p1754312413454"><a name="p1754312413454"></a><a name="p1754312413454"></a>跳转至其它场景的页面。</p>
</td>
</tr>
</tbody>
</table>

### static void NavigateToQuickApp<T\>\(NavigateToQuickAppOption<T\> navigateToQuickAppOption\)<a name="section16342019479"></a>

-   描述

    打开另一个快游戏。

-   请求参数NavigateToQuickAppOption<T\>

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
    <tbody><tr id="row175291116134217"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.5.1.1 "><p id="p1286410373499"><a name="p1286410373499"></a><a name="p1286410373499"></a>packageName</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.2 "><p id="p5864193794915"><a name="p5864193794915"></a><a name="p5864193794915"></a>string</p>
    </td>
    <td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.5.1.3 "><p id="p486313716491"><a name="p486313716491"></a><a name="p486313716491"></a>M</p>
    </td>
    <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p1784119372499"><a name="p1784119372499"></a><a name="p1784119372499"></a>快游戏包名。</p>
    </td>
    </tr>
    <tr id="row937413914919"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.5.1.1 "><p id="p1637573954911"><a name="p1637573954911"></a><a name="p1637573954911"></a>extraData</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.2 "><p id="p3375439124920"><a name="p3375439124920"></a><a name="p3375439124920"></a>T</p>
    </td>
    <td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.5.1.3 "><p id="p43751395499"><a name="p43751395499"></a><a name="p43751395499"></a>O</p>
    </td>
    <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p12375339144919"><a name="p12375339144919"></a><a name="p12375339144919"></a>传递给快游戏的数据，可在<a href="生命周期API.md#section1783175518529">static GetLaunchOptionsSyncResult GetLaunchOptionsSync()</a>获取extraData传递的数据。</p>
    </td>
    </tr>
    <tr id="row9621940204910"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.5.1.1 "><p id="p16815610181111"><a name="p16815610181111"></a><a name="p16815610181111"></a>success</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.2 "><p id="p1581571091112"><a name="p1581571091112"></a><a name="p1581571091112"></a>Action</p>
    </td>
    <td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.5.1.3 "><p id="p1881511106114"><a name="p1881511106114"></a><a name="p1881511106114"></a>O</p>
    </td>
    <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p7815191081115"><a name="p7815191081115"></a><a name="p7815191081115"></a>接口调用成功的回调函数。</p>
    </td>
    </tr>
    <tr id="row1938314455494"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.5.1.1 "><p id="p1681561051116"><a name="p1681561051116"></a><a name="p1681561051116"></a>fail</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.2 "><p id="p7815161010116"><a name="p7815161010116"></a><a name="p7815161010116"></a>Action</p>
    </td>
    <td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.5.1.3 "><p id="p5815151071115"><a name="p5815151071115"></a><a name="p5815151071115"></a>O</p>
    </td>
    <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p138151410101113"><a name="p138151410101113"></a><a name="p138151410101113"></a>接口调用失败的回调函数。</p>
    </td>
    </tr>
    <tr id="row13591466491"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.5.1.1 "><p id="p8815111091112"><a name="p8815111091112"></a><a name="p8815111091112"></a>complete</p>
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
    public void NavigateToQuickApp()
    {
        List<string> list = new List<string>();
        list.Add("AAA");
        list.Add("BBB");
        ExtraData extraData = new ExtraData
        {
            game = "abc",
            code = 123,
            userList = list
        };
        NavigateToQuickAppOption<ExtraData> navigateToQuickAppOption = new NavigateToQuickAppOption<ExtraData>
        {
            packageName = "com.xxx.quickgame",
            extraData = extraData,
            success = () => { Debug.Log("NavigateToQuickAppOption success."); },
            fail = () => { Debug.Log("NavigateToQuickAppOption fail."); },
            complete = () => { Debug.Log("NavigateToQuickAppOption Complete."); }
        };
        QG.NavigateToQuickApp(navigateToQuickAppOption);
    }
    /// <summary>
    /// 注意：自定义数据类型需要添加注解[Serializable]才能正常传递参数
    /// </summary>
    [Serializable]
    public class ExtraData
    {
        public string game;
        public int code;
        public List<string> userList;
    }
    ```

### static void OpenDeeplink\(OpenDeeplinkOption openDeeplinkOption\)<a name="section1512143214557"></a>

-   描述

    跳转至网页。

-   请求参数OpenDeeplinkOption

    <a name="table14766736125810"></a>
    <table><thead align="left"><tr id="row18766183695810"><th class="cellrowborder" valign="top" width="20%" id="mcps1.1.5.1.1"><p id="p11766163665810"><a name="p11766163665810"></a><a name="p11766163665810"></a>参数</p>
    </th>
    <th class="cellrowborder" valign="top" width="25%" id="mcps1.1.5.1.2"><p id="p876623615815"><a name="p876623615815"></a><a name="p876623615815"></a>类型</p>
    </th>
    <th class="cellrowborder" valign="top" width="15%" id="mcps1.1.5.1.3"><p id="p13766133675820"><a name="p13766133675820"></a><a name="p13766133675820"></a>必填(M)/选填(O)</p>
    </th>
    <th class="cellrowborder" valign="top" width="40%" id="mcps1.1.5.1.4"><p id="p876615365582"><a name="p876615365582"></a><a name="p876615365582"></a>说明</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row576633610581"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.5.1.1 "><p id="p53611854597"><a name="p53611854597"></a><a name="p53611854597"></a>uri</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.2 "><p id="p1136055105917"><a name="p1136055105917"></a><a name="p1136055105917"></a>string</p>
    </td>
    <td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.5.1.3 "><p id="p13601555597"><a name="p13601555597"></a><a name="p13601555597"></a>M</p>
    </td>
    <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p399313614554"><a name="p399313614554"></a><a name="p399313614554"></a>支持跳转网页http(s)，例如https://developer.huawei.com/consumer/cn/。http(s)默认使用内置webview加载网页，若默认策略不能处理，将尝试使用系统中的应用来处理请求，若没有系统应用，将抛弃请求。</p>
    </td>
    </tr>
    </tbody>
    </table>

-   示例代码

    ```
    public void OpenDeeplink()
    {
        OpenDeeplinkOption openDeeplinkOption = new OpenDeeplinkOption
        {
            uri = "hap://app/com.xxx.quickgame/?source=net&name=aa",
        };
        QG.OpenDeeplink(openDeeplinkOption);
    }
    ```

