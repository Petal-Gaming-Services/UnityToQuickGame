# 激励视频广告API<a name="ZH-CN_TOPIC_0000001694726689"></a>

-   [接口和类定义](#section194051121182710)
    -   [static RewardedVideoAd CreateRewardedVideoAd\(CreateRewardedVideoAdOption createRewardedVideoAdOption\)](#section13878271210)
    -   [void Load\(\)](#section19572164142515)
    -   [void Show\(\)](#section20692740182817)
    -   [void OnLoad\(Action callback\)](#section209021742162914)
    -   [void OffLoad\(\)](#section167341133133018)
    -   [void OnClose\(Action<RewardedVideoAdCloseResult\> callback\)](#section075011393305)
    -   [void OffClose\(\)](#section16606134583017)
    -   [void OnError\(Action<AdErrorResult\> callback\)](#section119501653173011)
    -   [void OffError\(\)](#section6598558173013)
    -   [void SetTagForChildProtection\(int childProtection\)](#section145098563115)
    -   [void SetTagForUnderAgeOfPromise\(int underAgeOfPromiseStr\)](#section15967121010318)
    -   [void SetAdContentClassification\(string adContentClassification\)](#section161829123117)
    -   [void SetNonPersonalizedAd\(int personalizedAd\)](#section1830923403118)
    -   [void Destroy\(\)](#section59891439183110)

## 接口和类定义<a name="section194051121182710"></a>

<a name="table132564532038"></a>
<table><thead align="left"><tr id="row182568531634"><th class="cellrowborder" valign="top" width="15%" id="mcps1.1.4.1.1"><p id="p297054614198"><a name="p297054614198"></a><a name="p297054614198"></a>类别</p>
</th>
<th class="cellrowborder" valign="top" width="40%" id="mcps1.1.4.1.2"><p id="p1625615532318"><a name="p1625615532318"></a><a name="p1625615532318"></a>定义</p>
</th>
<th class="cellrowborder" valign="top" width="45%" id="mcps1.1.4.1.3"><p id="p102561053037"><a name="p102561053037"></a><a name="p102561053037"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="row325619531336"><td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.4.1.1 "><p id="p1697014611199"><a name="p1697014611199"></a><a name="p1697014611199"></a>接口</p>
</td>
<td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.4.1.2 "><p id="p1151012565315"><a name="p1151012565315"></a><a name="p1151012565315"></a><a href="#section13878271210">static RewardedVideoAd CreateRewardedVideoAd(CreateRewardedVideoAdOption createRewardedVideoAdOption)</a></p>
</td>
<td class="cellrowborder" valign="top" width="45%" headers="mcps1.1.4.1.3 "><p id="p725635316319"><a name="p725635316319"></a><a name="p725635316319"></a>创建激励视频广告对象。</p>
</td>
</tr>
<tr id="row8325145118197"><td class="cellrowborder" rowspan="13" valign="top" width="15%" headers="mcps1.1.4.1.1 "><p id="p832635111194"><a name="p832635111194"></a><a name="p832635111194"></a>RewardedVideoAd类</p>
</td>
<td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.4.1.2 "><p id="p0281122512010"><a name="p0281122512010"></a><a name="p0281122512010"></a><a href="#section19572164142515">void Load()</a></p>
</td>
<td class="cellrowborder" valign="top" width="45%" headers="mcps1.1.4.1.3 "><p id="p528152516208"><a name="p528152516208"></a><a name="p528152516208"></a>手动拉取广告，用于刷新广告。成功回调OnLoad设置的回调，失败回调OnError设置的回调。</p>
</td>
</tr>
<tr id="row7283252171911"><td class="cellrowborder" valign="top" headers="mcps1.1.4.1.1 "><p id="p2281225202017"><a name="p2281225202017"></a><a name="p2281225202017"></a><a href="#section20692740182817">void Show()</a></p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.4.1.2 "><p id="p7282525182015"><a name="p7282525182015"></a><a name="p7282525182015"></a>激励视频广告组件默认是隐藏的，调用 show 方法展示广告。失败回调OnError设置的回调。</p>
</td>
</tr>
<tr id="row91651953151913"><td class="cellrowborder" valign="top" headers="mcps1.1.4.1.1 "><p id="p132821125112015"><a name="p132821125112015"></a><a name="p132821125112015"></a><a href="#section209021742162914">void OnLoad(Action callback)</a></p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.4.1.2 "><p id="p7282625112020"><a name="p7282625112020"></a><a name="p7282625112020"></a>监听激励视频广告<strong id="b433153143513"><a name="b433153143513"></a><a name="b433153143513"></a>加载成功</strong>事件。</p>
</td>
</tr>
<tr id="row4306111915207"><td class="cellrowborder" valign="top" headers="mcps1.1.4.1.1 "><p id="p9282182542012"><a name="p9282182542012"></a><a name="p9282182542012"></a><a href="#section167341133133018">void OffLoad()</a></p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.4.1.2 "><p id="p2282102582016"><a name="p2282102582016"></a><a name="p2282102582016"></a>取消监听激励视频广告<strong id="b229093523512"><a name="b229093523512"></a><a name="b229093523512"></a>加载成功</strong>事件。</p>
</td>
</tr>
<tr id="row8889161962011"><td class="cellrowborder" valign="top" headers="mcps1.1.4.1.1 "><p id="p22821525102018"><a name="p22821525102018"></a><a name="p22821525102018"></a><a href="#section075011393305">void OnClose(Action&lt;RewardedVideoAdCloseResult&gt; callback)</a></p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.4.1.2 "><p id="p428212257203"><a name="p428212257203"></a><a name="p428212257203"></a>监听激励视频<strong id="b12427144017354"><a name="b12427144017354"></a><a name="b12427144017354"></a>广告关闭</strong>事件。只有在用户主动关闭激励视频广告时，广告才会关闭。</p>
</td>
</tr>
<tr id="row44111520182017"><td class="cellrowborder" valign="top" headers="mcps1.1.4.1.1 "><p id="p11282725162016"><a name="p11282725162016"></a><a name="p11282725162016"></a><a href="#section16606134583017">void OffClose()</a></p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.4.1.2 "><p id="p1928282517204"><a name="p1928282517204"></a><a name="p1928282517204"></a>取消监听激励视频<strong id="b6425443133511"><a name="b6425443133511"></a><a name="b6425443133511"></a>广告关闭</strong>事件。</p>
</td>
</tr>
<tr id="row20103212203"><td class="cellrowborder" valign="top" headers="mcps1.1.4.1.1 "><p id="p2282182517208"><a name="p2282182517208"></a><a name="p2282182517208"></a><a href="#section119501653173011">void OnError(Action&lt;AdErrorResult&gt; callback)</a></p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.4.1.2 "><p id="p1928212511203"><a name="p1928212511203"></a><a name="p1928212511203"></a>监听激励视频广告<strong id="b178652463357"><a name="b178652463357"></a><a name="b178652463357"></a>加载错误</strong>事件。</p>
</td>
</tr>
<tr id="row14529221132011"><td class="cellrowborder" valign="top" headers="mcps1.1.4.1.1 "><p id="p428219253206"><a name="p428219253206"></a><a name="p428219253206"></a><a href="#section6598558173013">void OffError()</a></p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.4.1.2 "><p id="p9282325172019"><a name="p9282325172019"></a><a name="p9282325172019"></a>取消监听激励视频广告<strong id="b143545507353"><a name="b143545507353"></a><a name="b143545507353"></a>加载错误</strong>事件。</p>
</td>
</tr>
<tr id="row75622218203"><td class="cellrowborder" valign="top" headers="mcps1.1.4.1.1 "><p id="p122828255209"><a name="p122828255209"></a><a name="p122828255209"></a><a href="#section145098563115">void SetTagForChildProtection(int childProtection)</a></p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.4.1.2 "><p id="p192828259201"><a name="p192828259201"></a><a name="p192828259201"></a>设置儿童保护标签。</p>
</td>
</tr>
<tr id="row76270225203"><td class="cellrowborder" valign="top" headers="mcps1.1.4.1.1 "><p id="p19283325152016"><a name="p19283325152016"></a><a name="p19283325152016"></a><a href="#section15967121010318">void SetTagForUnderAgeOfPromise(int underAgeOfPromiseStr)</a></p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.4.1.2 "><p id="p728314258201"><a name="p728314258201"></a><a name="p728314258201"></a>设置面向未达到法定承诺年龄用户标签。</p>
</td>
</tr>
<tr id="row1420232314208"><td class="cellrowborder" valign="top" headers="mcps1.1.4.1.1 "><p id="p62836251208"><a name="p62836251208"></a><a name="p62836251208"></a><a href="#section161829123117">void SetAdContentClassification(string adContentClassification)</a></p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.4.1.2 "><p id="p18283625132017"><a name="p18283625132017"></a><a name="p18283625132017"></a>设置广告内容分级上限。</p>
</td>
</tr>
<tr id="row37294234205"><td class="cellrowborder" valign="top" headers="mcps1.1.4.1.1 "><p id="p52831725152020"><a name="p52831725152020"></a><a name="p52831725152020"></a><a href="#section1830923403118">void SetNonPersonalizedAd(int personalizedAd)</a></p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.4.1.2 "><p id="p10283142542016"><a name="p10283142542016"></a><a name="p10283142542016"></a>设置是否请求非个性化广告。</p>
</td>
</tr>
<tr id="row1282112482018"><td class="cellrowborder" valign="top" headers="mcps1.1.4.1.1 "><p id="p62831725182019"><a name="p62831725182019"></a><a name="p62831725182019"></a><a href="#section59891439183110">void Destroy()</a></p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.4.1.2 "><p id="p1283125102012"><a name="p1283125102012"></a><a name="p1283125102012"></a>销毁激励视频广告。</p>
</td>
</tr>
</tbody>
</table>

### static RewardedVideoAd CreateRewardedVideoAd\(CreateRewardedVideoAdOption createRewardedVideoAdOption\)<a name="section13878271210"></a>

-   描述

    创建激励视频广告。

-   请求参数CreateRewardedVideoAdOption

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
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.2 "><p id="p49521532182210"><a name="p49521532182210"></a><a name="p49521532182210"></a>Action&lt;<a href="#li932313361059">CreateRewardedVideoAdSuccessResult</a>&gt;</p>
    </td>
    <td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.5.1.3 "><p id="p7952732142215"><a name="p7952732142215"></a><a name="p7952732142215"></a>O</p>
    </td>
    <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p1695217323224"><a name="p1695217323224"></a><a name="p1695217323224"></a>接口调用成功的回调函数。</p>
    </td>
    </tr>
    <tr id="row1095273212212"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.5.1.1 "><p id="p11952932102217"><a name="p11952932102217"></a><a name="p11952932102217"></a>fail</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.2 "><p id="p79523323229"><a name="p79523323229"></a><a name="p79523323229"></a>Action&lt;<a href="#li152791321526">CreateRewardedVideoAdFailResult</a>&gt;</p>
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
    <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p1195333216229"><a name="p1195333216229"></a><a name="p1195333216229"></a>若有函数传入，将在成功、失败后调用该函数。</p>
    </td>
    </tr>
    </tbody>
    </table>

    -   <a name="li932313361059"></a>CreateRewardedVideoAdSuccessResult

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
        <tr id="row4564111025311"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p133484117530"><a name="p133484117530"></a><a name="p133484117530"></a>data</p>
        </td>
        <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p1534831175313"><a name="p1534831175313"></a><a name="p1534831175313"></a>string</p>
        </td>
        <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p13348171135320"><a name="p13348171135320"></a><a name="p13348171135320"></a>错误码描述信息。</p>
        </td>
        </tr>
        </tbody>
        </table>

    -   <a name="li152791321526"></a>CreateRewardedVideoAdFailResult

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

-   返回参数

    激励视频广告组件。

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

### void Load\(\)<a name="section19572164142515"></a>

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

### void Show\(\)<a name="section20692740182817"></a>

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

### void OnLoad\(Action callback\)<a name="section209021742162914"></a>

-   描述

    监听激励视频广告**加载成功**事件。

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
    <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p767216118349"><a name="p767216118349"></a><a name="p767216118349"></a>激励视频广告加载成功后执行的函数。</p>
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

### void OffLoad\(\)<a name="section167341133133018"></a>

-   描述

    取消监听激励视频广告**加载成功**事件。

-   示例代码

    ```
    public void OffLoad()
    {
        Debug.Log("RewardedVideoAd OffLoad.");
        _rewardedVideoAd?.OffLoad();
    }
    ```

### void OnClose\(Action<RewardedVideoAdCloseResult\> callback\)<a name="section075011393305"></a>

-   描述

    监听激励视频**广告关闭**事件。只有在用户主动关闭激励视频广告时，广告才会关闭。

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
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.2 "><p id="p1648963213519"><a name="p1648963213519"></a><a name="p1648963213519"></a>Action&lt;<a href="#li136661921774">RewardedVideoAdCloseResult</a>&gt;</p>
    </td>
    <td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.5.1.3 "><p id="p1148973216359"><a name="p1148973216359"></a><a name="p1148973216359"></a>M</p>
    </td>
    <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p14595465395"><a name="p14595465395"></a><a name="p14595465395"></a>激励视频广告关闭后执行的函数。</p>
    </td>
    </tr>
    </tbody>
    </table>

    -   <a name="li136661921774"></a>RewardedVideoAdCloseResult

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

### void OffClose\(\)<a name="section16606134583017"></a>

-   描述

    取消监听激励视频**广告关闭**事件。

-   示例代码

    ```
    public void OffClose()
    {
        Debug.Log("RewardedVideoAd OffClose.");
        _rewardedVideoAd?.OffClose();
    }
    ```

### void OnError\(Action<AdErrorResult\> callback\)<a name="section119501653173011"></a>

-   描述

    监听激励视频广告**加载错误**事件。

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
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.2 "><p id="p101751459193516"><a name="p101751459193516"></a><a name="p101751459193516"></a>Action&lt;<a href="#li151223413246">AdErrorResult</a>&gt;</p>
    </td>
    <td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.5.1.3 "><p id="p20516212368"><a name="p20516212368"></a><a name="p20516212368"></a>M</p>
    </td>
    <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p1851524361"><a name="p1851524361"></a><a name="p1851524361"></a>激励视频广告加载错误后执行的函数。</p>
    </td>
    </tr>
    </tbody>
    </table>

    -   <a name="li151223413246"></a>AdErrorResult

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
        <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p766915491639"><a name="p766915491639"></a><a name="p766915491639"></a><a href="#li936765616456">错误码</a></p>
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

-   <a name="li936765616456"></a>错误码

    <a name="table8892161019469"></a>
    <table><thead align="left"><tr id="row889220108466"><th class="cellrowborder" valign="top" width="50%" id="mcps1.1.3.1.1"><p id="p189335597468"><a name="p189335597468"></a><a name="p189335597468"></a>errCode</p>
    </th>
    <th class="cellrowborder" valign="top" width="50%" id="mcps1.1.3.1.2"><p id="p1389221010460"><a name="p1389221010460"></a><a name="p1389221010460"></a>errMsg</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row1689281010467"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.1 "><p id="p277853111464"><a name="p277853111464"></a><a name="p277853111464"></a>200</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.2 "><p id="p11778173113465"><a name="p11778173113465"></a><a name="p11778173113465"></a>通用错误。</p>
    </td>
    </tr>
    <tr id="row8893410104614"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.1 "><p id="p1477863114463"><a name="p1477863114463"></a><a name="p1477863114463"></a>202</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.2 "><p id="p67781831174618"><a name="p67781831174618"></a><a name="p67781831174618"></a>参数错误。</p>
    </td>
    </tr>
    <tr id="row289391044614"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.1 "><p id="p4778173118461"><a name="p4778173118461"></a><a name="p4778173118461"></a>1001</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.2 "><p id="p27781731154615"><a name="p27781731154615"></a><a name="p27781731154615"></a>无效的广告请求，如未设置广告位ID、Banner广告尺寸无效等。</p>
    </td>
    </tr>
    <tr id="row689381019463"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.1 "><p id="p677819310462"><a name="p677819310462"></a><a name="p677819310462"></a>1002</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.2 "><p id="p377883144614"><a name="p377883144614"></a><a name="p377883144614"></a>横幅广告过期或者横幅广告任务下架。</p>
    </td>
    </tr>
    <tr id="row1589316103469"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.1 "><p id="p6778123124618"><a name="p6778123124618"></a><a name="p6778123124618"></a>1003</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.2 "><p id="p15778113124613"><a name="p15778113124613"></a><a name="p15778113124613"></a>内部错误。</p>
    </td>
    </tr>
    <tr id="row78931810124613"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.1 "><p id="p277883154616"><a name="p277883154616"></a><a name="p277883154616"></a>1004</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.2 "><p id="p3778193194612"><a name="p3778193194612"></a><a name="p3778193194612"></a>广告请求成功，但是服务器没有返回可用的广告素材。</p>
    </td>
    </tr>
    <tr id="row15893610194611"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.1 "><p id="p19778143134611"><a name="p19778143134611"></a><a name="p19778143134611"></a>1100</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.2 "><p id="p1877893113463"><a name="p1877893113463"></a><a name="p1877893113463"></a>广告正在请求中，不能重复发起请求。</p>
    </td>
    </tr>
    <tr id="row2822112612460"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.1 "><p id="p19778193117466"><a name="p19778193117466"></a><a name="p19778193117466"></a>1102</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.2 "><p id="p12778231204610"><a name="p12778231204610"></a><a name="p12778231204610"></a>API版本不在广告服务支持范围内。</p>
    </td>
    </tr>
    <tr id="row175691127134611"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.1 "><p id="p1177816318469"><a name="p1177816318469"></a><a name="p1177816318469"></a>1104</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.2 "><p id="p77781631204613"><a name="p77781631204613"></a><a name="p77781631204613"></a>由于网络连接错误导致广告请求失败。</p>
    </td>
    </tr>
    <tr id="row162226289468"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.1 "><p id="p177813118466"><a name="p177813118466"></a><a name="p177813118466"></a>2000</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.2 "><p id="p777833194617"><a name="p777833194617"></a><a name="p777833194617"></a>HMS Core版本过低，不支持设置AppInfo。</p>
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

### void OffError\(\)<a name="section6598558173013"></a>

-   描述

    取消监听激励视频广告**加载错误**事件。

-   示例代码

    ```
    public void OffError()
    {
        Debug.Log("RewardedVideoAd OffError.");
        _rewardedVideoAd?.OffError();
    }
    ```

### void SetTagForChildProtection\(int childProtection\)<a name="section145098563115"></a>

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

### void SetTagForUnderAgeOfPromise\(int underAgeOfPromiseStr\)<a name="section15967121010318"></a>

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

### void SetAdContentClassification\(string adContentClassification\)<a name="section161829123117"></a>

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

### void SetNonPersonalizedAd\(int personalizedAd\)<a name="section1830923403118"></a>

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

### void Destroy\(\)<a name="section59891439183110"></a>

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

