# 支付API<a name="ZH-CN_TOPIC_0000001646566988"></a>

-   [接口定义](#section19618190118)
    -   [static void IsEnvReady\(IsEnvReadyOption isEnvReadyOption\)\(1103+\)](#section154996918335)
    -   [static void IsSandboxActivated\(IsSandboxActivatedOption isSandboxActivatedOption\)\(1103+\)](#section95831230133715)
    -   [static void ObtainOwnedPurchases\(ObtainOwnedPurchasesOption obtainOwnedPurchasesOption\)\(1103+\)](#section155052321436)
    -   [static void ObtainProductInfo\(ObtainProductInfoOption obtainProductInfoOption\)\(1103+\)](#section15871165154311)
    -   [static void CreatePurchaseIntent\(CreatePurchaseIntentOption createPurchaseIntentOption\)\(1103+\)](#section515110599437)
    -   [static void ConsumeOwnedPurchase\(ConsumeOwnedPurchaseOption consumeOwnedPurchaseOption\)\(1103+\)](#section20910454444)
    -   [static void ObtainOwnedPurchaseRecord\(ObtainOwnedPurchaseRecordOption obtainOwnedPurchaseRecordOption\)\(1103+\)](#section12911414124411)
    -   [static void StartIapActivity\(StartIapActivityOption startIapActivityOption\)\(1103+\)](#section287142113449)
    -   [错误码](#section0935245195318)

## 接口定义<a name="section19618190118"></a>

<a name="table39452381592"></a>
<table><thead align="left"><tr id="row189467381693"><th class="cellrowborder" valign="top" width="50%" id="mcps1.1.3.1.1"><p id="p494693817918"><a name="p494693817918"></a><a name="p494693817918"></a>接口</p>
</th>
<th class="cellrowborder" valign="top" width="50%" id="mcps1.1.3.1.2"><p id="p17946138292"><a name="p17946138292"></a><a name="p17946138292"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="row495118381915"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.1 "><p id="p35790179494"><a name="p35790179494"></a><a name="p35790179494"></a><a href="#section154996918335">static void IsEnvReady(IsEnvReadyOption isEnvReadyOption)(1103+)</a></p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.2 "><p id="p1038852916110"><a name="p1038852916110"></a><a name="p1038852916110"></a>判断当前华为帐号所属国家或地区是否支持华为IAP支付。</p>
</td>
</tr>
<tr id="row16951138394"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.1 "><p id="p1357812173497"><a name="p1357812173497"></a><a name="p1357812173497"></a><a href="#section95831230133715">static void IsSandboxActivated(IsSandboxActivatedOption isSandboxActivatedOption)(1103+)</a></p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.2 "><p id="p1957634812313"><a name="p1957634812313"></a><a name="p1957634812313"></a>判断华为帐号和快游戏RPK版本是否满足沙盒条件。</p>
</td>
</tr>
<tr id="row69517381199"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.1 "><p id="p05771217164920"><a name="p05771217164920"></a><a name="p05771217164920"></a><a href="#section155052321436">static void ObtainOwnedPurchases(ObtainOwnedPurchasesOption obtainOwnedPurchasesOption)(1103+)</a></p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.2 "><p id="p11284231586"><a name="p11284231586"></a><a name="p11284231586"></a>查询用户的已购买数据，包括消耗型商品、非消耗型商品和订阅类商品。</p>
</td>
</tr>
<tr id="row19515381591"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.1 "><p id="p11576181744916"><a name="p11576181744916"></a><a name="p11576181744916"></a><a href="#section15871165154311">static void ObtainProductInfo(ObtainProductInfoOption obtainProductInfoOption)(1103+)</a></p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.2 "><p id="p197492216616"><a name="p197492216616"></a><a name="p197492216616"></a>查询在AGC控制台配置的商品详情。</p>
</td>
</tr>
<tr id="row795213819916"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.1 "><p id="p1857511175496"><a name="p1857511175496"></a><a name="p1857511175496"></a><a href="#section515110599437">static void CreatePurchaseIntent(CreatePurchaseIntentOption createPurchaseIntentOption)(1103+)</a></p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.2 "><p id="p1836132171313"><a name="p1836132171313"></a><a name="p1836132171313"></a>创建在AGC控制台配置的商品购买订单，支持购买消耗型商品、非消耗型商品、订阅类商品。</p>
</td>
</tr>
<tr id="row8952038193"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.1 "><p id="p165741717134913"><a name="p165741717134913"></a><a name="p165741717134913"></a><a href="#section20910454444">static void ConsumeOwnedPurchase(ConsumeOwnedPurchaseOption consumeOwnedPurchaseOption)(1103+)</a></p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.2 "><p id="p4980125675"><a name="p4980125675"></a><a name="p4980125675"></a>消耗已支付成功的消耗型商品。</p>
</td>
</tr>
<tr id="row895218389918"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.1 "><p id="p19573121716491"><a name="p19573121716491"></a><a name="p19573121716491"></a><a href="#section12911414124411">static void ObtainOwnedPurchaseRecord(ObtainOwnedPurchaseRecordOption obtainOwnedPurchaseRecordOption)(1103+)</a></p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.2 "><p id="p9777122412818"><a name="p9777122412818"></a><a name="p9777122412818"></a>查询消耗型商品的历史消耗商品信息或订阅类商品的订阅收据。</p>
</td>
</tr>
<tr id="row159521538498"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.1 "><p id="p14572141714917"><a name="p14572141714917"></a><a name="p14572141714917"></a><a href="#section287142113449">static void StartIapActivity(StartIapActivityOption startIapActivityOption)(1103+)</a></p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.2 "><p id="p1222817245920"><a name="p1222817245920"></a><a name="p1222817245920"></a>打开华为应用内支付相关页面。</p>
</td>
</tr>
</tbody>
</table>

### static void IsEnvReady\(IsEnvReadyOption isEnvReadyOption\)\(1103+\)<a name="section154996918335"></a>

-   描述

    通过该接口可以判断当前华为帐号所在的服务国家/地区是否支持IAP支付。

-   请求参数IsEnvReadyOption

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
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.2 "><p id="p6660027143215"><a name="p6660027143215"></a><a name="p6660027143215"></a>Action&lt;<a href="#li1011517173311">IsEnvReadySuccessResult</a>&gt;</p>
    </td>
    <td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.5.1.3 "><p id="p5500109173314"><a name="p5500109173314"></a><a name="p5500109173314"></a>O</p>
    </td>
    <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p1250013983319"><a name="p1250013983319"></a><a name="p1250013983319"></a>接口调用成功的回调函数。</p>
    </td>
    </tr>
    <tr id="row7500179103319"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.5.1.1 "><p id="p95008983317"><a name="p95008983317"></a><a name="p95008983317"></a>fail</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.2 "><p id="p165001095334"><a name="p165001095334"></a><a name="p165001095334"></a>Action&lt;<a href="#li132141715337">IsEnvReadyFailResult</a>&gt;</p>
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
    <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p35006918333"><a name="p35006918333"></a><a name="p35006918333"></a>若有函数传入，将在成功、失败后调用该函数。</p>
    </td>
    </tr>
    </tbody>
    </table>

    -   <a name="li1011517173311"></a>IsEnvReadySuccessResult

        <a name="table4121718337"></a>
        <table><thead align="left"><tr id="row19181773320"><th class="cellrowborder" valign="top" width="25%" id="mcps1.1.4.1.1"><p id="p160151783311"><a name="p160151783311"></a><a name="p160151783311"></a>参数</p>
        </th>
        <th class="cellrowborder" valign="top" width="25%" id="mcps1.1.4.1.2"><p id="p218177332"><a name="p218177332"></a><a name="p218177332"></a>类型</p>
        </th>
        <th class="cellrowborder" valign="top" width="50%" id="mcps1.1.4.1.3"><p id="p111101712337"><a name="p111101712337"></a><a name="p111101712337"></a>说明</p>
        </th>
        </tr>
        </thead>
        <tbody><tr id="row3121733316"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p12116176334"><a name="p12116176334"></a><a name="p12116176334"></a>returnCode</p>
        </td>
        <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p1317171337"><a name="p1317171337"></a><a name="p1317171337"></a>int</p>
        </td>
        <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p1211176339"><a name="p1211176339"></a><a name="p1211176339"></a>成功返回码。若当前用户的华为帐号支持IAP支付，则返回值0。</p>
        </td>
        </tr>
        </tbody>
        </table>

    -   <a name="li132141715337"></a>IsEnvReadyFailResult

        <a name="table132131714334"></a>
        <table><thead align="left"><tr id="row171181743310"><th class="cellrowborder" valign="top" width="25%" id="mcps1.1.4.1.1"><p id="p8118175333"><a name="p8118175333"></a><a name="p8118175333"></a>参数</p>
        </th>
        <th class="cellrowborder" valign="top" width="25%" id="mcps1.1.4.1.2"><p id="p101131712337"><a name="p101131712337"></a><a name="p101131712337"></a>类型</p>
        </th>
        <th class="cellrowborder" valign="top" width="50%" id="mcps1.1.4.1.3"><p id="p1711117113317"><a name="p1711117113317"></a><a name="p1711117113317"></a>说明</p>
        </th>
        </tr>
        </thead>
        <tbody><tr id="row2118172338"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p5171715339"><a name="p5171715339"></a><a name="p5171715339"></a>code</p>
        </td>
        <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p1211517143311"><a name="p1211517143311"></a><a name="p1211517143311"></a>int</p>
        </td>
        <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p1518179334"><a name="p1518179334"></a><a name="p1518179334"></a><a href="#section0935245195318">错误码</a>。</p>
        </td>
        </tr>
        <tr id="row821617183310"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p624178331"><a name="p624178331"></a><a name="p624178331"></a>data</p>
        </td>
        <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p3231710333"><a name="p3231710333"></a><a name="p3231710333"></a>string</p>
        </td>
        <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p14251710334"><a name="p14251710334"></a><a name="p14251710334"></a>错误码描述信息。</p>
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
            success = res => { Debug.Log("IsEnvReady returnCode:" + res.returnCode); },
            fail = res => { Debug.Log("IsEnvReady data:" + res.data + ", code:" + res.code); },
            complete = () => { Debug.Log("IsEnvReady complete."); }
        };
        QG.IsEnvReady(isEnvReadyOption);
    }
    ```

### static void IsSandboxActivated\(IsSandboxActivatedOption isSandboxActivatedOption\)\(1103+\)<a name="section95831230133715"></a>

-   描述

    通过该接口可以判断当前设备登录的华为帐号及快游戏的RPK版本是否满足沙盒条件。

-   请求参数IsSandboxActivatedOption

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
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.2 "><p id="p19584153012372"><a name="p19584153012372"></a><a name="p19584153012372"></a>Action&lt;<a href="#li176510413414">IsSandboxActivatedSuccessResult</a>&gt;</p>
    </td>
    <td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.5.1.3 "><p id="p10584123010370"><a name="p10584123010370"></a><a name="p10584123010370"></a>O</p>
    </td>
    <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p1958416302378"><a name="p1958416302378"></a><a name="p1958416302378"></a>接口调用成功的回调函数。</p>
    </td>
    </tr>
    <tr id="row1658463083711"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.5.1.1 "><p id="p165841130123719"><a name="p165841130123719"></a><a name="p165841130123719"></a>fail</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.2 "><p id="p105846307377"><a name="p105846307377"></a><a name="p105846307377"></a>Action&lt;<a href="#li825754175020">IsSandboxActivatedFailResult</a>&gt;</p>
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
    <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p858473016372"><a name="p858473016372"></a><a name="p858473016372"></a>若有函数传入，将在成功、失败后调用该函数。</p>
    </td>
    </tr>
    </tbody>
    </table>

    -   <a name="li176510413414"></a>IsSandboxActivatedSuccessResult

        <a name="table1110344173414"></a>
        <table><thead align="left"><tr id="row310217423414"><th class="cellrowborder" valign="top" width="25%" id="mcps1.1.4.1.1"><p id="p161024419343"><a name="p161024419343"></a><a name="p161024419343"></a>参数</p>
        </th>
        <th class="cellrowborder" valign="top" width="25%" id="mcps1.1.4.1.2"><p id="p1110234113410"><a name="p1110234113410"></a><a name="p1110234113410"></a>类型</p>
        </th>
        <th class="cellrowborder" valign="top" width="50%" id="mcps1.1.4.1.3"><p id="p111027433417"><a name="p111027433417"></a><a name="p111027433417"></a>说明</p>
        </th>
        </tr>
        </thead>
        <tbody><tr id="row1710214143420"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p110234153416"><a name="p110234153416"></a><a name="p110234153416"></a>returnCode</p>
        </td>
        <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p121026423411"><a name="p121026423411"></a><a name="p121026423411"></a>int</p>
        </td>
        <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p11102114113414"><a name="p11102114113414"></a><a name="p11102114113414"></a>成功返回码。</p>
        </td>
        </tr>
        <tr id="row1710244173415"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p51024417341"><a name="p51024417341"></a><a name="p51024417341"></a>errMsg</p>
        </td>
        <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p8102124103411"><a name="p8102124103411"></a><a name="p8102124103411"></a>string</p>
        </td>
        <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p181025420341"><a name="p181025420341"></a><a name="p181025420341"></a>成功返回码的描述信息。</p>
        </td>
        </tr>
        <tr id="row1310319413341"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p191035463412"><a name="p191035463412"></a><a name="p191035463412"></a>isSandboxUser</p>
        </td>
        <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p71037433418"><a name="p71037433418"></a><a name="p71037433418"></a>bool</p>
        </td>
        <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p010314410342"><a name="p010314410342"></a><a name="p010314410342"></a>是否是沙盒帐号。</p>
        </td>
        </tr>
        <tr id="row1910314433417"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p810374173416"><a name="p810374173416"></a><a name="p810374173416"></a>isSandboxApk</p>
        </td>
        <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p18103542341"><a name="p18103542341"></a><a name="p18103542341"></a>bool</p>
        </td>
        <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p131039416348"><a name="p131039416348"></a><a name="p131039416348"></a>快游戏相关客户端的APK版本，例如“快应用中心”、“花瓣轻游”等是否满足沙盒条件，固定返回true。</p>
        </td>
        </tr>
        <tr id="row41031147340"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p2103149341"><a name="p2103149341"></a><a name="p2103149341"></a>versionInApk</p>
        </td>
        <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p210315419348"><a name="p210315419348"></a><a name="p210315419348"></a>string</p>
        </td>
        <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p6103545341"><a name="p6103545341"></a><a name="p6103545341"></a>快游戏相关客户端的版本信息。</p>
        </td>
        </tr>
        <tr id="row19103144143417"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p111034418343"><a name="p111034418343"></a><a name="p111034418343"></a>versionFrMarket</p>
        </td>
        <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p14103144143413"><a name="p14103144143413"></a><a name="p14103144143413"></a>string</p>
        </td>
        <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p1110315411343"><a name="p1110315411343"></a><a name="p1110315411343"></a>快游戏在华为应用市场最新的版本信息。</p>
        </td>
        </tr>
        </tbody>
        </table>

    -   <a name="li825754175020"></a>IsSandboxActivatedFailResult

        <a name="table101040403411"></a>
        <table><thead align="left"><tr id="row61041413411"><th class="cellrowborder" valign="top" width="25%" id="mcps1.1.4.1.1"><p id="p1610317418343"><a name="p1610317418343"></a><a name="p1610317418343"></a>参数</p>
        </th>
        <th class="cellrowborder" valign="top" width="25%" id="mcps1.1.4.1.2"><p id="p1610410417343"><a name="p1610410417343"></a><a name="p1610410417343"></a>类型</p>
        </th>
        <th class="cellrowborder" valign="top" width="50%" id="mcps1.1.4.1.3"><p id="p210413413412"><a name="p210413413412"></a><a name="p210413413412"></a>说明</p>
        </th>
        </tr>
        </thead>
        <tbody><tr id="row9104942346"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p15104174103418"><a name="p15104174103418"></a><a name="p15104174103418"></a>code</p>
        </td>
        <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p13104124193415"><a name="p13104124193415"></a><a name="p13104124193415"></a>int</p>
        </td>
        <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p191049417341"><a name="p191049417341"></a><a name="p191049417341"></a><a href="#section0935245195318">错误码</a>。</p>
        </td>
        </tr>
        <tr id="row610416463420"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p181048411342"><a name="p181048411342"></a><a name="p181048411342"></a>data</p>
        </td>
        <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p71049473412"><a name="p71049473412"></a><a name="p71049473412"></a>string</p>
        </td>
        <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p1210413433412"><a name="p1210413433412"></a><a name="p1210413433412"></a>错误码描述信息。</p>
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
                Debug.Log("IsSandboxActivated returnCode:" + res.returnCode + ", errMsg:" + res.errMsg + ", isSandboxUser:"
                          + res.isSandboxUser + ", isSandboxApk:" + res.isSandboxApk + ", versionInApk:" +
                          res.versionInApk + ", versionFrMarket:" +
                          res.versionFrMarket);
            },
            fail = res => { Debug.Log("IsSandboxActivated data:" + res.data + ", code:" + res.code); },
            complete = () => { Debug.Log("IsSandboxActivated complete."); }
        };
        QG.IsSandboxActivated(isSandboxActivatedOption);
    }
    ```

### static void ObtainOwnedPurchases\(ObtainOwnedPurchasesOption obtainOwnedPurchasesOption\)\(1103+\)<a name="section155052321436"></a>

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

-   请求参数ObtainOwnedPurchasesOption

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
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.2 "><p id="p168431745184615"><a name="p168431745184615"></a><a name="p168431745184615"></a>Action&lt;<a href="#li843841412354">ObtainOwnedPurchasesSuccessResult</a>&gt;</p>
    </td>
    <td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.5.1.3 "><p id="p128435451460"><a name="p128435451460"></a><a name="p128435451460"></a>O</p>
    </td>
    <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p12843145104613"><a name="p12843145104613"></a><a name="p12843145104613"></a>接口调用成功的回调函数。</p>
    </td>
    </tr>
    <tr id="row2084314554616"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.5.1.1 "><p id="p584315457464"><a name="p584315457464"></a><a name="p584315457464"></a>fail</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.2 "><p id="p9843124544615"><a name="p9843124544615"></a><a name="p9843124544615"></a>Action&lt;<a href="#li26082825120">ObtainOwnedPurchasesFailResult</a>&gt;</p>
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
    <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p18697123111410"><a name="p18697123111410"></a><a name="p18697123111410"></a>若有函数传入，将在成功、失败后调用该函数。</p>
    </td>
    </tr>
    </tbody>
    </table>

    -   <a name="li843841412354"></a>ObtainOwnedPurchasesSuccessResult

        <a name="table12321181512350"></a>
        <table><thead align="left"><tr id="row1531811511358"><th class="cellrowborder" valign="top" width="25%" id="mcps1.1.4.1.1"><p id="p10318715133512"><a name="p10318715133512"></a><a name="p10318715133512"></a>参数</p>
        </th>
        <th class="cellrowborder" valign="top" width="25%" id="mcps1.1.4.1.2"><p id="p63180151358"><a name="p63180151358"></a><a name="p63180151358"></a>类型</p>
        </th>
        <th class="cellrowborder" valign="top" width="50%" id="mcps1.1.4.1.3"><p id="p731817154353"><a name="p731817154353"></a><a name="p731817154353"></a>说明</p>
        </th>
        </tr>
        </thead>
        <tbody><tr id="row83191215183518"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p9319515113517"><a name="p9319515113517"></a><a name="p9319515113517"></a>returnCode</p>
        </td>
        <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p113191015193515"><a name="p113191015193515"></a><a name="p113191015193515"></a>int</p>
        </td>
        <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p03196153358"><a name="p03196153358"></a><a name="p03196153358"></a>成功返回码。</p>
        </td>
        </tr>
        <tr id="row193194157356"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p231961563518"><a name="p231961563518"></a><a name="p231961563518"></a>errMsg</p>
        </td>
        <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p193196158354"><a name="p193196158354"></a><a name="p193196158354"></a>string</p>
        </td>
        <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p1231910151358"><a name="p1231910151358"></a><a name="p1231910151358"></a>成功返回码的描述信息。</p>
        </td>
        </tr>
        <tr id="row183195153351"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p1731961543510"><a name="p1731961543510"></a><a name="p1731961543510"></a>itemList</p>
        </td>
        <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p15319101533515"><a name="p15319101533515"></a><a name="p15319101533515"></a>List&lt;string&gt;</p>
        </td>
        <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p183193157354"><a name="p183193157354"></a><a name="p183193157354"></a>商品ID列表。</p>
        </td>
        </tr>
        <tr id="row1231931520357"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p123191115193510"><a name="p123191115193510"></a><a name="p123191115193510"></a>inAppPurchaseDataList</p>
        </td>
        <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p1531913156355"><a name="p1531913156355"></a><a name="p1531913156355"></a>List&lt;string&gt;</p>
        </td>
        <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p831971510355"><a name="p831971510355"></a><a name="p831971510355"></a>商品信息，详情请参见<a href="#li123330156355">InAppPurchaseData</a>。</p>
        </td>
        </tr>
        <tr id="row03204154357"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p431961518358"><a name="p431961518358"></a><a name="p431961518358"></a>inAppSignature</p>
        </td>
        <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p20319131514354"><a name="p20319131514354"></a><a name="p20319131514354"></a>List&lt;string&gt;</p>
        </td>
        <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p63191215153515"><a name="p63191215153515"></a><a name="p63191215153515"></a>与“inAppPurchaseDataList”中每条商品信息一一对应的签名字符串：</p>
        <a name="ul163208153356"></a><a name="ul163208153356"></a><ul id="ul163208153356"><li>使用IAP私钥签名算法为“SHA256WITHRSA”。</li><li>应用需对每条商品信息进行验签，若验签失败需重新获取商品信息。</li></ul>
        </td>
        </tr>
        <tr id="row33201015163517"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p4320915133518"><a name="p4320915133518"></a><a name="p4320915133518"></a>continuationToken</p>
        </td>
        <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p432013151358"><a name="p432013151358"></a><a name="p432013151358"></a>string</p>
        </td>
        <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p163207154356"><a name="p163207154356"></a><a name="p163207154356"></a>数据定位标志。用户拥有非常大的商品数量时，若返回continuationToken时，应用必须继续调用当前接口，并传入当前continuationToken值，直到调用后不再返回continuationToken。</p>
        </td>
        </tr>
        <tr id="row1232081563510"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p143208151356"><a name="p143208151356"></a><a name="p143208151356"></a>placedInappPurchaseDataList</p>
        </td>
        <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p632061516353"><a name="p632061516353"></a><a name="p632061516353"></a>List&lt;string&gt;</p>
        </td>
        <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p3320161593516"><a name="p3320161593516"></a><a name="p3320161593516"></a>订阅类商品切换时的订阅关系，详情请参见<a href="#li123330156355">InAppPurchaseData</a>。</p>
        </td>
        </tr>
        <tr id="row193211315103519"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p832041573518"><a name="p832041573518"></a><a name="p832041573518"></a>placedInappSignatureList</p>
        </td>
        <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p163201115153515"><a name="p163201115153515"></a><a name="p163201115153515"></a>List&lt;string&gt;</p>
        </td>
        <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p0320201516356"><a name="p0320201516356"></a><a name="p0320201516356"></a>与“placedInappPurchaseDataList”中每个订阅关系一一对应的签名字符串：</p>
        <a name="ul10320915113511"></a><a name="ul10320915113511"></a><ul id="ul10320915113511"><li>使用IAP私钥签名算法为“SHA256WITHRSA”。</li><li>应用需要对每个订阅关系进行验签，若验签失败需重新获取订阅关系。</li></ul>
        <a name="ul15320915133519"></a><a name="ul15320915133519"></a><ul id="ul15320915133519"><li>仅在查询订阅类商品且用户存在订阅类商品时返回。</li></ul>
        </td>
        </tr>
        </tbody>
        </table>

    -   <a name="li26082825120"></a>ObtainOwnedPurchasesFailResult

        <a name="table15334315143520"></a>
        <table><thead align="left"><tr id="row1033411157355"><th class="cellrowborder" valign="top" width="25%" id="mcps1.1.4.1.1"><p id="p133337154354"><a name="p133337154354"></a><a name="p133337154354"></a>参数</p>
        </th>
        <th class="cellrowborder" valign="top" width="25%" id="mcps1.1.4.1.2"><p id="p113331515123511"><a name="p113331515123511"></a><a name="p113331515123511"></a>类型</p>
        </th>
        <th class="cellrowborder" valign="top" width="50%" id="mcps1.1.4.1.3"><p id="p12334131510357"><a name="p12334131510357"></a><a name="p12334131510357"></a>说明</p>
        </th>
        </tr>
        </thead>
        <tbody><tr id="row433441512357"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p7334515103512"><a name="p7334515103512"></a><a name="p7334515103512"></a>code</p>
        </td>
        <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p533441515353"><a name="p533441515353"></a><a name="p533441515353"></a>int</p>
        </td>
        <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p733413152359"><a name="p733413152359"></a><a name="p733413152359"></a><a href="#section0935245195318">错误码</a>。</p>
        </td>
        </tr>
        <tr id="row3334191515359"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p1133441512358"><a name="p1133441512358"></a><a name="p1133441512358"></a>data</p>
        </td>
        <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p233481512356"><a name="p233481512356"></a><a name="p233481512356"></a>string</p>
        </td>
        <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p11334111520353"><a name="p11334111520353"></a><a name="p11334111520353"></a>错误码描述信息。</p>
        </td>
        </tr>
        </tbody>
        </table>

        -   <a name="li123330156355"></a>InAppPurchaseData

            <a name="table7333215173518"></a>
            <table><thead align="left"><tr id="row532191573517"><th class="cellrowborder" valign="top" width="25%" id="mcps1.1.4.1.1"><p id="p1321161563516"><a name="p1321161563516"></a><a name="p1321161563516"></a>参数</p>
            </th>
            <th class="cellrowborder" valign="top" width="25%" id="mcps1.1.4.1.2"><p id="p9321181513358"><a name="p9321181513358"></a><a name="p9321181513358"></a>类型</p>
            </th>
            <th class="cellrowborder" valign="top" width="50%" id="mcps1.1.4.1.3"><p id="p193215157358"><a name="p193215157358"></a><a name="p193215157358"></a>说明</p>
            </th>
            </tr>
            </thead>
            <tbody><tr id="row14321215103520"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p3321121515352"><a name="p3321121515352"></a><a name="p3321121515352"></a>applicationId</p>
            </td>
            <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p1332141520358"><a name="p1332141520358"></a><a name="p1332141520358"></a>long</p>
            </td>
            <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p10321161512354"><a name="p10321161512354"></a><a name="p10321161512354"></a>快游戏APP ID，在华为开发者联盟上创建快游戏后分配的唯一标识。</p>
            </td>
            </tr>
            <tr id="row732291517355"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p1532161518352"><a name="p1532161518352"></a><a name="p1532161518352"></a>autoRenewing</p>
            </td>
            <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p4321815173517"><a name="p4321815173517"></a><a name="p4321815173517"></a>bool</p>
            </td>
            <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p17321131543513"><a name="p17321131543513"></a><a name="p17321131543513"></a>是否自动续订：</p>
            <a name="ul203221415133512"></a><a name="ul203221415133512"></a><ul id="ul203221415133512"><li>非订阅类商品返回false。</li><li>订阅类商品：<a name="ul23221515103519"></a><a name="ul23221515103519"></a><ul id="ul23221515103519"><li>ture：处于订阅状态，且在下一个续费周期自动续订。</li><li>false：订阅类商品已取消订阅。用户可在下个续费周期之前访问历史订阅内容。</li></ul>
            </li></ul>
            <div class="note" id="note12322515203512"><a name="note12322515203512"></a><a name="note12322515203512"></a><span class="notetitle"> 说明： </span><div class="notebody"><p id="p173227157359"><a name="p173227157359"></a><a name="p173227157359"></a>只要未过订阅类商品的宽限期，就会返回true。</p>
            </div></div>
            </td>
            </tr>
            <tr id="row1332211156356"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p1932251512357"><a name="p1932251512357"></a><a name="p1932251512357"></a>orderId</p>
            </td>
            <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p123226159357"><a name="p123226159357"></a><a name="p123226159357"></a>string</p>
            </td>
            <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p203227158352"><a name="p203227158352"></a><a name="p203227158352"></a>华为支付的订单ID，在成功支付后生成。</p>
            </td>
            </tr>
            <tr id="row10322415103514"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p183223150358"><a name="p183223150358"></a><a name="p183223150358"></a>kind</p>
            </td>
            <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p12322121543513"><a name="p12322121543513"></a><a name="p12322121543513"></a>int</p>
            </td>
            <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p0322141533512"><a name="p0322141533512"></a><a name="p0322141533512"></a>商品类型：</p>
            <a name="ul432211155357"></a><a name="ul432211155357"></a><ul id="ul432211155357"><li>0 : 消耗型商品。</li><li>1 : 非消耗型商品。</li><li>2 : 订阅类商品。</li></ul>
            </td>
            </tr>
            <tr id="row33231215143510"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p103221115123517"><a name="p103221115123517"></a><a name="p103221115123517"></a>packageName</p>
            </td>
            <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p23221715203519"><a name="p23221715203519"></a><a name="p23221715203519"></a>string</p>
            </td>
            <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p632313153357"><a name="p632313153357"></a><a name="p632313153357"></a>快游戏包名。</p>
            </td>
            </tr>
            <tr id="row332311155354"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p16323191563511"><a name="p16323191563511"></a><a name="p16323191563511"></a>productId</p>
            </td>
            <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p23231415193513"><a name="p23231415193513"></a><a name="p23231415193513"></a>string</p>
            </td>
            <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p532391518358"><a name="p532391518358"></a><a name="p532391518358"></a>商品ID。</p>
            </td>
            </tr>
            <tr id="row103237157357"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p1732351514358"><a name="p1732351514358"></a><a name="p1732351514358"></a>productName</p>
            </td>
            <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p8323161517359"><a name="p8323161517359"></a><a name="p8323161517359"></a>string</p>
            </td>
            <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p1832351519359"><a name="p1832351519359"></a><a name="p1832351519359"></a>商品名称。</p>
            </td>
            </tr>
            <tr id="row173236151358"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p832311523513"><a name="p832311523513"></a><a name="p832311523513"></a>purchaseTime</p>
            </td>
            <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p232331517352"><a name="p232331517352"></a><a name="p232331517352"></a>long</p>
            </td>
            <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p20323315153510"><a name="p20323315153510"></a><a name="p20323315153510"></a>商品购买的时间戳。从1970年1月1日0时起到商品购买时间的毫秒数。</p>
            </td>
            </tr>
            <tr id="row133247158353"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p123231115153514"><a name="p123231115153514"></a><a name="p123231115153514"></a>purchaseState</p>
            </td>
            <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p7323415123510"><a name="p7323415123510"></a><a name="p7323415123510"></a>int</p>
            </td>
            <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p3323171518359"><a name="p3323171518359"></a><a name="p3323171518359"></a>订单交易状态：</p>
            <a name="ul1324171573520"></a><a name="ul1324171573520"></a><ul id="ul1324171573520"><li>-1：初始化。</li><li>0：已购买。</li><li>1：已取消。</li><li>2：已退款。</li></ul>
            </td>
            </tr>
            <tr id="row13243151352"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p1532410157356"><a name="p1532410157356"></a><a name="p1532410157356"></a>developerPayload</p>
            </td>
            <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p1232471543520"><a name="p1232471543520"></a><a name="p1232471543520"></a>string</p>
            </td>
            <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p93241015143512"><a name="p93241015143512"></a><a name="p93241015143512"></a>商户侧保留信息，调用接口时传入。</p>
            </td>
            </tr>
            <tr id="row103248159358"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p7324181515357"><a name="p7324181515357"></a><a name="p7324181515357"></a>developerChallenge</p>
            </td>
            <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p43244158358"><a name="p43244158358"></a><a name="p43244158358"></a>string</p>
            </td>
            <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p53246152358"><a name="p53246152358"></a><a name="p53246152358"></a>应用请求消耗商品时自定义的挑战字，唯一标识本次消耗请求。消耗成功后此挑战字会记录在购买信息中并返回。如果挑战字与已有挑战字重复，表示重复消耗，同样会原样返回该挑战字。</p>
            </td>
            </tr>
            <tr id="row33240157352"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p43243152358"><a name="p43243152358"></a><a name="p43243152358"></a>consumptionState</p>
            </td>
            <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p832481511353"><a name="p832481511353"></a><a name="p832481511353"></a>int</p>
            </td>
            <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p232481513513"><a name="p232481513513"></a><a name="p232481513513"></a>消费状态：</p>
            <a name="ul17324131583511"></a><a name="ul17324131583511"></a><ul id="ul17324131583511"><li>0：未消费。</li><li>1：已消费。</li></ul>
            </td>
            </tr>
            <tr id="row11325181503511"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p183241415153518"><a name="p183241415153518"></a><a name="p183241415153518"></a>purchaseToken</p>
            </td>
            <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p132411518355"><a name="p132411518355"></a><a name="p132411518355"></a>string</p>
            </td>
            <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p232517150354"><a name="p232517150354"></a><a name="p232517150354"></a>标识商品和用户对应关系的购买令牌，长度92位，完成支付后由华为支付服务器生成，若您需要存储此信息，建议预留128位的长度。</p>
            <div class="note" id="note132521503511"><a name="note132521503511"></a><a name="note132521503511"></a><span class="notetitle"> 说明： </span><div class="notebody"><p id="p732541517352"><a name="p732541517352"></a><a name="p732541517352"></a>订阅类商品正常订阅不会发生改变。</p>
            </div></div>
            </td>
            </tr>
            <tr id="row1632520155359"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p5325111513354"><a name="p5325111513354"></a><a name="p5325111513354"></a>purchaseType</p>
            </td>
            <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p113251015143520"><a name="p113251015143520"></a><a name="p113251015143520"></a>int</p>
            </td>
            <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p123251215193511"><a name="p123251215193511"></a><a name="p123251215193511"></a>购买类型：</p>
            <a name="ul163251215143513"></a><a name="ul163251215143513"></a><ul id="ul163251215143513"><li>0：沙盒环境。</li><li>1：促销（暂不支持）。</li></ul>
            <div class="note" id="note1632519155351"><a name="note1632519155351"></a><a name="note1632519155351"></a><span class="notetitle"> 说明： </span><div class="notebody"><p id="p7325131518355"><a name="p7325131518355"></a><a name="p7325131518355"></a>正常购买不返回此参数。</p>
            </div></div>
            </td>
            </tr>
            <tr id="row20325201510355"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p1532518156354"><a name="p1532518156354"></a><a name="p1532518156354"></a>currency</p>
            </td>
            <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p1132516159359"><a name="p1132516159359"></a><a name="p1132516159359"></a>string</p>
            </td>
            <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p173251915113515"><a name="p173251915113515"></a><a name="p173251915113515"></a>支付商品的币种。中国大陆传值为CNY，其他国家/地区请参见<a href="https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/huawei-iap-coverage-0000001050438753" target="_blank" rel="noopener noreferrer">华为IAP范围覆盖</a>。</p>
            </td>
            </tr>
            <tr id="row4326131517354"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p113251415153519"><a name="p113251415153519"></a><a name="p113251415153519"></a>price</p>
            </td>
            <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p232551593516"><a name="p232551593516"></a><a name="p232551593516"></a>long</p>
            </td>
            <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p10326115123519"><a name="p10326115123519"></a><a name="p10326115123519"></a>商品展示价格。</p>
            </td>
            </tr>
            <tr id="row932681517359"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p1732671517359"><a name="p1732671517359"></a><a name="p1732671517359"></a>country</p>
            </td>
            <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p53261715113517"><a name="p53261715113517"></a><a name="p53261715113517"></a>string</p>
            </td>
            <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p9326151518354"><a name="p9326151518354"></a><a name="p9326151518354"></a>国家/地区码。中国大陆为CN，其他国家/地区请参见<a href="https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/huawei-iap-coverage-0000001050438753" target="_blank" rel="noopener noreferrer">华为IAP范围覆盖</a>。</p>
            </td>
            </tr>
            <tr id="row632791515356"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p193261315183510"><a name="p193261315183510"></a><a name="p193261315183510"></a>payType</p>
            </td>
            <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p153261215163512"><a name="p153261215163512"></a><a name="p153261215163512"></a>string</p>
            </td>
            <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p19326121593519"><a name="p19326121593519"></a><a name="p19326121593519"></a>支付方式：</p>
            <a name="ul10327131573516"></a><a name="ul10327131573516"></a><ul id="ul10327131573516"><li>0：花币。</li><li>3：信用卡。</li><li>4：支付宝。</li><li>6：话费。</li><li>13：PayPal。</li><li>16：借记卡。</li><li>17：微信。</li><li>19：礼品卡。</li><li>20：零钱。</li><li>21：花币卡。</li><li>24：WP。</li><li>31：华为Pay。</li><li>32：花呗。</li><li>200：MPESA。</li></ul>
            </td>
            </tr>
            <tr id="row1932713158356"><td class="cellrowborder" colspan="3" valign="top" headers="mcps1.1.4.1.1 mcps1.1.4.1.2 mcps1.1.4.1.3 "><p id="p1132751543513"><a name="p1132751543513"></a><a name="p1132751543513"></a>以下参数只有查询订阅类商品时才返回</p>
            </td>
            </tr>
            <tr id="row7327131517351"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p0327151512356"><a name="p0327151512356"></a><a name="p0327151512356"></a>lastOrderId</p>
            </td>
            <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p13327715133515"><a name="p13327715133515"></a><a name="p13327715133515"></a>string</p>
            </td>
            <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p6327111593512"><a name="p6327111593512"></a><a name="p6327111593512"></a>续期订阅类商品的订单ID，由支付服务器在续期扣费时生成。</p>
            <div class="note" id="note932781513513"><a name="note932781513513"></a><a name="note932781513513"></a><span class="notetitle"> 说明： </span><div class="notebody"><p id="p103278158354"><a name="p103278158354"></a><a name="p103278158354"></a>仅首次购买订阅类商品时，“lastOrderId”与“orderId”相同。</p>
            </div></div>
            </td>
            </tr>
            <tr id="row123276152352"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p18327315203510"><a name="p18327315203510"></a><a name="p18327315203510"></a>productGroup</p>
            </td>
            <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p4327111519356"><a name="p4327111519356"></a><a name="p4327111519356"></a>string</p>
            </td>
            <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p143271415183520"><a name="p143271415183520"></a><a name="p143271415183520"></a>订阅类商品所属订阅组ID。</p>
            </td>
            </tr>
            <tr id="row1332801553518"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p1932771519359"><a name="p1932771519359"></a><a name="p1932771519359"></a>oriPurchaseTime</p>
            </td>
            <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p53281715123518"><a name="p53281715123518"></a><a name="p53281715123518"></a>long</p>
            </td>
            <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p1032818158359"><a name="p1032818158359"></a><a name="p1032818158359"></a>首次购买时间戳，从1970年1月1日0时起到本订阅类商品首次成功收费的毫秒数。</p>
            </td>
            </tr>
            <tr id="row1328015133514"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p1432821503518"><a name="p1432821503518"></a><a name="p1432821503518"></a>subscriptionId</p>
            </td>
            <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p133280152356"><a name="p133280152356"></a><a name="p133280152356"></a>string</p>
            </td>
            <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p153284157353"><a name="p153284157353"></a><a name="p153284157353"></a>订阅ID。</p>
            </td>
            </tr>
            <tr id="row17328111513350"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p0328121563512"><a name="p0328121563512"></a><a name="p0328121563512"></a>oriSubscriptionId</p>
            </td>
            <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p1932831518358"><a name="p1932831518358"></a><a name="p1932831518358"></a>string</p>
            </td>
            <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p113281155355"><a name="p113281155355"></a><a name="p113281155355"></a>原订阅ID。返回该参数信息时，表示当前订阅从其他商品切换而来，该参数可关联商品切换前的订阅信息。</p>
            </td>
            </tr>
            <tr id="row73281015143512"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p23289159356"><a name="p23289159356"></a><a name="p23289159356"></a>quantity</p>
            </td>
            <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p1232811152358"><a name="p1232811152358"></a><a name="p1232811152358"></a>int</p>
            </td>
            <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p1332871513510"><a name="p1332871513510"></a><a name="p1332871513510"></a>订阅类商品购买数量。</p>
            </td>
            </tr>
            <tr id="row13328111593520"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p3328121563516"><a name="p3328121563516"></a><a name="p3328121563516"></a>daysLasted</p>
            </td>
            <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p1432861583516"><a name="p1432861583516"></a><a name="p1432861583516"></a>long</p>
            </td>
            <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p1932871543519"><a name="p1932871543519"></a><a name="p1932871543519"></a>已付费订阅的天数，免费试用期限和优惠续费周期除外。</p>
            </td>
            </tr>
            <tr id="row1732971514354"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p1032821515356"><a name="p1032821515356"></a><a name="p1032821515356"></a>numOfPeriods</p>
            </td>
            <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p1332971512356"><a name="p1332971512356"></a><a name="p1332971512356"></a>long</p>
            </td>
            <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p11329141516353"><a name="p11329141516353"></a><a name="p11329141516353"></a>自动续费周期数，优惠续费周期除外。若值为0或不存在，表示还没有成功续期。</p>
            </td>
            </tr>
            <tr id="row18329181513512"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p8329161583516"><a name="p8329161583516"></a><a name="p8329161583516"></a>numOfDiscount</p>
            </td>
            <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p10329181563516"><a name="p10329181563516"></a><a name="p10329181563516"></a>long</p>
            </td>
            <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p132918154358"><a name="p132918154358"></a><a name="p132918154358"></a>成功续费周期数。</p>
            </td>
            </tr>
            <tr id="row12329515153511"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p43291715123519"><a name="p43291715123519"></a><a name="p43291715123519"></a>expirationDate</p>
            </td>
            <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p153299156356"><a name="p153299156356"></a><a name="p153299156356"></a>long</p>
            </td>
            <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p2329615193513"><a name="p2329615193513"></a><a name="p2329615193513"></a>订阅类商品过期的时间戳：</p>
            <a name="ul932910158352"></a><a name="ul932910158352"></a><ul id="ul932910158352"><li>若是一个将来时间，表示是一个已成功续费订单的续期日期或超期日期。</li><li>若是一个过去时间，表示订阅类商品已过期。</li></ul>
            </td>
            </tr>
            <tr id="row5330101593510"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p11329515183517"><a name="p11329515183517"></a><a name="p11329515183517"></a>expirationIntent</p>
            </td>
            <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p2032912153356"><a name="p2032912153356"></a><a name="p2032912153356"></a>int</p>
            </td>
            <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p0329191593514"><a name="p0329191593514"></a><a name="p0329191593514"></a>订阅类商品已过期的原因：</p>
            <a name="ol1733013155359"></a><a name="ol1733013155359"></a><ol id="ol1733013155359"><li>用户取消。</li><li>商品不可用。</li><li>用户签约信息异常。</li><li>Billing错误。</li><li>用户未同意涨价。</li><li>未知错误。</li></ol>
            <div class="note" id="note173304155350"><a name="note173304155350"></a><a name="note173304155350"></a><span class="notetitle"> 说明： </span><div class="notebody"><p id="p133019155358"><a name="p133019155358"></a><a name="p133019155358"></a>若同时有多个过期原因，根据升序的优先级原则，返回优先级较高的原因。</p>
            </div></div>
            </td>
            </tr>
            <tr id="row153301515113512"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p143301115163512"><a name="p143301115163512"></a><a name="p143301115163512"></a>retryFlag</p>
            </td>
            <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p73301715133516"><a name="p73301715133516"></a><a name="p73301715133516"></a>int</p>
            </td>
            <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p833010156352"><a name="p833010156352"></a><a name="p833010156352"></a>系统是否仍在尝试自动完成续期订阅类商品：</p>
            <a name="ul16330815203515"></a><a name="ul16330815203515"></a><ul id="ul16330815203515"><li>0：终止尝试。</li><li>1：仍在尝试。</li></ul>
            </td>
            </tr>
            <tr id="row18330151511359"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p143301115133515"><a name="p143301115133515"></a><a name="p143301115133515"></a>introductoryFlag</p>
            </td>
            <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p173307153350"><a name="p173307153350"></a><a name="p173307153350"></a>int</p>
            </td>
            <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p1833021516351"><a name="p1833021516351"></a><a name="p1833021516351"></a>订阅类商品是否在优惠续费周期内过期：</p>
            <a name="ul1433031511353"></a><a name="ul1433031511353"></a><ul id="ul1433031511353"><li>0：否。</li><li>1：是。</li></ul>
            </td>
            </tr>
            <tr id="row153311815163516"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p1033012157353"><a name="p1033012157353"></a><a name="p1033012157353"></a>trialFlag</p>
            </td>
            <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p183313156351"><a name="p183313156351"></a><a name="p183313156351"></a>int</p>
            </td>
            <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p63311215173510"><a name="p63311215173510"></a><a name="p63311215173510"></a>订阅类商品是否在免费试用期限内过期：</p>
            <a name="ul53314151354"></a><a name="ul53314151354"></a><ul id="ul53314151354"><li>0：否。</li><li>1：是。</li></ul>
            </td>
            </tr>
            <tr id="row10331171512353"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p1933131593512"><a name="p1933131593512"></a><a name="p1933131593512"></a>cancelTime</p>
            </td>
            <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p10331515193510"><a name="p10331515193510"></a><a name="p10331515193510"></a>long</p>
            </td>
            <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p15331915113518"><a name="p15331915113518"></a><a name="p15331915113518"></a>订阅取消时间。在用户通过客服取消订阅，或用户升级、跨级到同组其它商品且立即生效时，需取消原有订阅的上次收据。</p>
            <div class="note" id="note173311115153515"><a name="note173311115153515"></a><a name="note173311115153515"></a><span class="notetitle"> 说明： </span><div class="notebody"><p id="p13331215123516"><a name="p13331215123516"></a><a name="p13331215123516"></a>已经取消的收据等同于没有完成购买。</p>
            </div></div>
            </td>
            </tr>
            <tr id="row033231513515"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p633181516354"><a name="p633181516354"></a><a name="p633181516354"></a>cancelReason</p>
            </td>
            <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p833181519358"><a name="p833181519358"></a><a name="p833181519358"></a>int</p>
            </td>
            <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p19331215133519"><a name="p19331215133519"></a><a name="p19331215133519"></a>用户取消订阅的原因：</p>
            <a name="ul3331215193512"></a><a name="ul3331215193512"></a><ul id="ul3331215193512"><li>2：用户升级、跨级等。</li><li>1：用户应用内遇到问题而取消订阅。</li><li>0：其它原因取消，例如用户不小心订阅了商品。<div class="note" id="note533118159351"><a name="note533118159351"></a><a name="note533118159351"></a><span class="notetitle"> 说明： </span><div class="notebody"><p id="p83313158350"><a name="p83313158350"></a><a name="p83313158350"></a>若该参数为空且cancelTime有值，表示是升级等操作导致的取消。</p>
            </div></div>
            </li></ul>
            </td>
            </tr>
            <tr id="row0332131514350"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p203321315153519"><a name="p203321315153519"></a><a name="p203321315153519"></a>renewStatus</p>
            </td>
            <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p433241553519"><a name="p433241553519"></a><a name="p433241553519"></a>int</p>
            </td>
            <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p13321515113515"><a name="p13321515113515"></a><a name="p13321515113515"></a>订阅类商品的续期状态：</p>
            <a name="ul1933271515355"></a><a name="ul1933271515355"></a><ul id="ul1933271515355"><li>1：当前周期到期后自动续期。</li><li>0：用户主动停止续期。应用可以给用户提供其它订阅选项，例如推荐同组更低级别的商品。</li></ul>
            </td>
            </tr>
            <tr id="row33321915113513"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p7332191516356"><a name="p7332191516356"></a><a name="p7332191516356"></a>priceConsentStatus</p>
            </td>
            <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p19332315183518"><a name="p19332315183518"></a><a name="p19332315183518"></a>int</p>
            </td>
            <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p1332171515354"><a name="p1332171515354"></a><a name="p1332171515354"></a>订阅类商品提价时的用户意见：</p>
            <a name="ul18332191512351"></a><a name="ul18332191512351"></a><ul id="ul18332191512351"><li>1：用户已经同意提价。</li><li>0：用户未采取动作，超期后订阅失效。</li></ul>
            </td>
            </tr>
            <tr id="row83321715113514"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p183329158357"><a name="p183329158357"></a><a name="p183329158357"></a>renewPrice</p>
            </td>
            <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p33321515153513"><a name="p33321515153513"></a><a name="p33321515153513"></a>long</p>
            </td>
            <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p5332181563515"><a name="p5332181563515"></a><a name="p5332181563515"></a>下次续期价格。若有priceConsentStatus，提示用户新的续期价格。</p>
            </td>
            </tr>
            <tr id="row23339152351"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p183322015153510"><a name="p183322015153510"></a><a name="p183322015153510"></a>subIsvalid</p>
            </td>
            <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p433271517350"><a name="p433271517350"></a><a name="p433271517350"></a>bool</p>
            </td>
            <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p13321515193514"><a name="p13321515193514"></a><a name="p13321515193514"></a>订阅类商品提价后的状态：</p>
            <a name="ul7333191512351"></a><a name="ul7333191512351"></a><ul id="ul7333191512351"><li>true：已收费且未过期，也未退款，您可以为用户提供对应的服务。</li><li>false：未购买，已过期，或购买后已退款。<div class="note" id="note1933391503520"><a name="note1933391503520"></a><a name="note1933391503520"></a><span class="notetitle"> 说明： </span><div class="notebody"><p id="p1233321510354"><a name="p1233321510354"></a><a name="p1233321510354"></a>若用户已经取消订阅，在已购买的订阅类商品过期之前，subIsvalid仍然为true。</p>
            </div></div>
            </li></ul>
            </td>
            </tr>
            <tr id="row1933331583517"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p433314151353"><a name="p433314151353"></a><a name="p433314151353"></a>cancelledSubKeepDays</p>
            </td>
            <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p933391510351"><a name="p933391510351"></a><a name="p933391510351"></a>int</p>
            </td>
            <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p0333101583520"><a name="p0333101583520"></a><a name="p0333101583520"></a>用户取消订阅后订阅关系保留的天数，不表示当前订阅类商品已取消。</p>
            </td>
            </tr>
            <tr id="row233371563518"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p18333101519353"><a name="p18333101519353"></a><a name="p18333101519353"></a>resumeTime</p>
            </td>
            <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p10333191514355"><a name="p10333191514355"></a><a name="p10333191514355"></a>long</p>
            </td>
            <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p9333915183512"><a name="p9333915183512"></a><a name="p9333915183512"></a>重新订阅商品的恢复时间。</p>
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
                Debug.Log("ObtainOwnedPurchases returnCode:" + res.returnCode + ", errMsg:" + res.errMsg +
                          ", itemList:" + ConvertListToString(res.itemList) + ", inAppPurchaseDataList:"
                          + ConvertListToString(res.inAppPurchaseDataList) + ", inAppSignature:" +
                          ConvertListToString(res.inAppSignature) +
                          ", continuationToken:" +
                          res.continuationToken + ", placedInappPurchaseDataList:" +
                          ConvertListToString(res.placedInappPurchaseDataList) +
                          ", placedInappSignatureList:" + ConvertListToString(res.placedInappSignatureList));
            },
            fail = res => { Debug.Log("ObtainOwnedPurchases data:" + res.data + ", code:" + res.code); },
            complete = () => { Debug.Log("ObtainOwnedPurchases complete."); }
        };
        QG.ObtainOwnedPurchases(obtainOwnedPurchasesOption);
    }
    
    private string ConvertListToString<T>(List<T> list)
    {
        if (list == null || list.Count == 0)
        {
            return "";
        }
    
        string result = "[";
        foreach (var item in list)
        {
            if (item is string)
            {
                result += item + ",";
            }
            else
            {
                result += JsonUtility.ToJson(item) + ",";
            }
        }
    
        result = result.Substring(0, result.Length - 1);
        result += "]";
        return result;
    }
    ```

### static void ObtainProductInfo\(ObtainProductInfoOption obtainProductInfoOption\)\(1103+\)<a name="section15871165154311"></a>

-   描述

    查询在AGC控制台配置的商品详情。

-   请求参数ObtainProductInfoOption

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
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.2 "><p id="p7133115211467"><a name="p7133115211467"></a><a name="p7133115211467"></a>Action&lt;<a href="#li9678163914419">ObtainProductInfoSuccessResult</a>&gt;</p>
    </td>
    <td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.5.1.3 "><p id="p61331852134615"><a name="p61331852134615"></a><a name="p61331852134615"></a>O</p>
    </td>
    <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p131331352164617"><a name="p131331352164617"></a><a name="p131331352164617"></a>接口调用成功的回调函数。</p>
    </td>
    </tr>
    <tr id="row1133125214611"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.5.1.1 "><p id="p101335528461"><a name="p101335528461"></a><a name="p101335528461"></a>fail</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.2 "><p id="p7133185216466"><a name="p7133185216466"></a><a name="p7133185216466"></a>Action&lt;<a href="#li12527659165313">ObtainProductInfoFailResult</a>&gt;</p>
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
    <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p8133252134611"><a name="p8133252134611"></a><a name="p8133252134611"></a>若有函数传入，将在成功、失败后调用该函数。</p>
    </td>
    </tr>
    </tbody>
    </table>

    -   <a name="li9678163914419"></a>ObtainProductInfoSuccessResult

        <a name="table78585395413"></a>
        <table><thead align="left"><tr id="row10858163984119"><th class="cellrowborder" valign="top" width="25%" id="mcps1.1.4.1.1"><p id="p7857183924120"><a name="p7857183924120"></a><a name="p7857183924120"></a>参数</p>
        </th>
        <th class="cellrowborder" valign="top" width="25%" id="mcps1.1.4.1.2"><p id="p8857203964115"><a name="p8857203964115"></a><a name="p8857203964115"></a>类型</p>
        </th>
        <th class="cellrowborder" valign="top" width="50%" id="mcps1.1.4.1.3"><p id="p4857123984120"><a name="p4857123984120"></a><a name="p4857123984120"></a>说明</p>
        </th>
        </tr>
        </thead>
        <tbody><tr id="row10858133934120"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p14858163944113"><a name="p14858163944113"></a><a name="p14858163944113"></a>returnCode</p>
        </td>
        <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p78581339174116"><a name="p78581339174116"></a><a name="p78581339174116"></a>int</p>
        </td>
        <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p14858133904117"><a name="p14858133904117"></a><a name="p14858133904117"></a>成功返回码。</p>
        </td>
        </tr>
        <tr id="row2085823984116"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p5858103954116"><a name="p5858103954116"></a><a name="p5858103954116"></a>errMsg</p>
        </td>
        <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p885833917414"><a name="p885833917414"></a><a name="p885833917414"></a>string</p>
        </td>
        <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p17858163934117"><a name="p17858163934117"></a><a name="p17858163934117"></a>成功返回码的描述信息。</p>
        </td>
        </tr>
        <tr id="row16858203911412"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p128581339154110"><a name="p128581339154110"></a><a name="p128581339154110"></a>productInfoList</p>
        </td>
        <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p685813934118"><a name="p685813934118"></a><a name="p685813934118"></a>List&lt;<a href="#li164645725316">productInfo</a>&gt;</p>
        </td>
        <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p78582398418"><a name="p78582398418"></a><a name="p78582398418"></a>商品详细信息。</p>
        </td>
        </tr>
        </tbody>
        </table>

    -   <a name="li12527659165313"></a>ObtainProductInfoFailResult

        <a name="table1886411391414"></a>
        <table><thead align="left"><tr id="row16863939194112"><th class="cellrowborder" valign="top" width="25%" id="mcps1.1.4.1.1"><p id="p286353917414"><a name="p286353917414"></a><a name="p286353917414"></a>参数</p>
        </th>
        <th class="cellrowborder" valign="top" width="25%" id="mcps1.1.4.1.2"><p id="p7863739104116"><a name="p7863739104116"></a><a name="p7863739104116"></a>类型</p>
        </th>
        <th class="cellrowborder" valign="top" width="50%" id="mcps1.1.4.1.3"><p id="p10863183974119"><a name="p10863183974119"></a><a name="p10863183974119"></a>说明</p>
        </th>
        </tr>
        </thead>
        <tbody><tr id="row78631239174114"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p15863133964116"><a name="p15863133964116"></a><a name="p15863133964116"></a>code</p>
        </td>
        <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p128631039194119"><a name="p128631039194119"></a><a name="p128631039194119"></a>int</p>
        </td>
        <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p4863173918415"><a name="p4863173918415"></a><a name="p4863173918415"></a><a href="#section0935245195318">错误码</a>。</p>
        </td>
        </tr>
        <tr id="row38644395417"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p18864153924114"><a name="p18864153924114"></a><a name="p18864153924114"></a>data</p>
        </td>
        <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p1986415395418"><a name="p1986415395418"></a><a name="p1986415395418"></a>string</p>
        </td>
        <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p8864133910412"><a name="p8864133910412"></a><a name="p8864133910412"></a>错误码描述信息。</p>
        </td>
        </tr>
        </tbody>
        </table>

        -   <a name="li164645725316"></a>productInfo

            <a name="table94665755317"></a>
            <table><thead align="left"><tr id="row1042155725310"><th class="cellrowborder" valign="top" width="25%" id="mcps1.1.4.1.1"><p id="p124255711533"><a name="p124255711533"></a><a name="p124255711533"></a>参数</p>
            </th>
            <th class="cellrowborder" valign="top" width="25%" id="mcps1.1.4.1.2"><p id="p104285716536"><a name="p104285716536"></a><a name="p104285716536"></a>类型</p>
            </th>
            <th class="cellrowborder" valign="top" width="50%" id="mcps1.1.4.1.3"><p id="p1042457145316"><a name="p1042457145316"></a><a name="p1042457145316"></a>说明</p>
            </th>
            </tr>
            </thead>
            <tbody><tr id="row04245717531"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p94235735318"><a name="p94235735318"></a><a name="p94235735318"></a>productId</p>
            </td>
            <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p1742357165311"><a name="p1742357165311"></a><a name="p1742357165311"></a>string</p>
            </td>
            <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p174210578535"><a name="p174210578535"></a><a name="p174210578535"></a>商品ID。</p>
            </td>
            </tr>
            <tr id="row154295755312"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p1542457155310"><a name="p1542457155310"></a><a name="p1542457155310"></a>priceType</p>
            </td>
            <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p342105785320"><a name="p342105785320"></a><a name="p342105785320"></a>int</p>
            </td>
            <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p1142957205310"><a name="p1142957205310"></a><a name="p1142957205310"></a>商品类型：</p>
            <a name="ul10425571532"></a><a name="ul10425571532"></a><ul id="ul10425571532"><li>0 : 消耗型商品。</li><li>1 : 非消耗型商品。</li><li>2 : 订阅类商品。</li></ul>
            </td>
            </tr>
            <tr id="row5431357195313"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p743185715533"><a name="p743185715533"></a><a name="p743185715533"></a>price</p>
            </td>
            <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p1143957185313"><a name="p1143957185313"></a><a name="p1143957185313"></a>string</p>
            </td>
            <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p443195785315"><a name="p443195785315"></a><a name="p443195785315"></a>商品展示价格（含税）。格式为“币种 商品价格”，例如“EUR 0.15”；部分国家/地区格式为“货币符号 商品价格”，例如中国大陆“￥0.15”。</p>
            <div class="note" id="note144375765310"><a name="note144375765310"></a><a name="note144375765310"></a><span class="notetitle"> 说明： </span><div class="notebody"><p id="p44317572539"><a name="p44317572539"></a><a name="p44317572539"></a>若用户已为非订阅类商品设置促销价格，则返回商品的促销价格。</p>
            </div></div>
            </td>
            </tr>
            <tr id="row154395705317"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p1643185717533"><a name="p1643185717533"></a><a name="p1643185717533"></a>microsPrice</p>
            </td>
            <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p1043057115310"><a name="p1043057115310"></a><a name="p1043057115310"></a>long</p>
            </td>
            <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p1431757165317"><a name="p1431757165317"></a><a name="p1431757165317"></a>商品微单位价格。商品实际价格乘以1,000,000后的微单位价格，例如实际价格是1.99美元，则对应的微单位价格为：1.99*1000000=1990000。</p>
            </td>
            </tr>
            <tr id="row143957155319"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p7431957125314"><a name="p7431957125314"></a><a name="p7431957125314"></a>currency</p>
            </td>
            <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p94316572536"><a name="p94316572536"></a><a name="p94316572536"></a>string</p>
            </td>
            <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p74319575532"><a name="p74319575532"></a><a name="p74319575532"></a>支付商品的币种。</p>
            </td>
            </tr>
            <tr id="row1543157105316"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p13431757195318"><a name="p13431757195318"></a><a name="p13431757195318"></a>productName</p>
            </td>
            <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p124365715318"><a name="p124365715318"></a><a name="p124365715318"></a>string</p>
            </td>
            <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p1843125712532"><a name="p1843125712532"></a><a name="p1843125712532"></a>商品名称。</p>
            </td>
            </tr>
            <tr id="row134412572533"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p114313574537"><a name="p114313574537"></a><a name="p114313574537"></a>productDesc</p>
            </td>
            <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p1044857115315"><a name="p1044857115315"></a><a name="p1044857115315"></a>string</p>
            </td>
            <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p10441257155317"><a name="p10441257155317"></a><a name="p10441257155317"></a>商品简介。</p>
            </td>
            </tr>
            <tr id="row10441157155314"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p1444145755312"><a name="p1444145755312"></a><a name="p1444145755312"></a>subPeriod</p>
            </td>
            <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p194435795319"><a name="p194435795319"></a><a name="p194435795319"></a>string</p>
            </td>
            <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p154413571531"><a name="p154413571531"></a><a name="p154413571531"></a>订阅类商品的自动续费周期单位。例如P1W：1周；P1M：1个月 ；P2M：2个月；P6M：6个月；P1Y：1年。</p>
            </td>
            </tr>
            <tr id="row134417574536"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p54419574531"><a name="p54419574531"></a><a name="p54419574531"></a>subSpecialPrice</p>
            </td>
            <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p17441057175317"><a name="p17441057175317"></a><a name="p17441057175317"></a>string</p>
            </td>
            <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p744145775316"><a name="p744145775316"></a><a name="p744145775316"></a>订阅类商品的优惠价格（不含税）。格式为“币种 商品价格”，例如“EUR 0.15”；部分国家/地区格式为“货币符号 商品价格”，例如中国大陆“￥0.15”。</p>
            </td>
            </tr>
            <tr id="row74455795318"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p1844657155313"><a name="p1844657155313"></a><a name="p1844657155313"></a>subSpecialPriceMicros</p>
            </td>
            <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p18441657105318"><a name="p18441657105318"></a><a name="p18441657105318"></a>long</p>
            </td>
            <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p9441576531"><a name="p9441576531"></a><a name="p9441576531"></a>订阅类商品的优惠微单位价格。商品优惠价格乘以1,000,000后的微单位价格，例如优惠价格是1.99美元，则对应的优惠微单位价格为：1.99*1000000=1990000。</p>
            </td>
            </tr>
            <tr id="row74419573539"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p04417578534"><a name="p04417578534"></a><a name="p04417578534"></a>subSpecialPeriod</p>
            </td>
            <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p844185765314"><a name="p844185765314"></a><a name="p844185765314"></a>string</p>
            </td>
            <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p1144185775314"><a name="p1144185775314"></a><a name="p1144185775314"></a>订阅类商品的优惠周期单位。例如P1W：1周；P1M：1个月 ；P2M：2个月；P6M：6个月；P1Y：1年。</p>
            </td>
            </tr>
            <tr id="row1245357105312"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p184525718532"><a name="p184525718532"></a><a name="p184525718532"></a>subSpecialPeriodCycles</p>
            </td>
            <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p1145155775315"><a name="p1145155775315"></a><a name="p1145155775315"></a>string</p>
            </td>
            <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p545857115315"><a name="p545857115315"></a><a name="p545857115315"></a>订阅类商品的优惠续费周期。</p>
            </td>
            </tr>
            <tr id="row1045857175316"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p2045457205313"><a name="p2045457205313"></a><a name="p2045457205313"></a>subsFreeTrialPeriod</p>
            </td>
            <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p44516575536"><a name="p44516575536"></a><a name="p44516575536"></a>string</p>
            </td>
            <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p1145957185315"><a name="p1145957185315"></a><a name="p1145957185315"></a>订阅类商品的免费试用期限。</p>
            </td>
            </tr>
            <tr id="row1645105795320"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p1445657125311"><a name="p1445657125311"></a><a name="p1445657125311"></a>subsGroupId</p>
            </td>
            <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p174565711532"><a name="p174565711532"></a><a name="p174565711532"></a>string</p>
            </td>
            <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p194535735311"><a name="p194535735311"></a><a name="p194535735311"></a>订阅类商品所属订阅组ID。</p>
            </td>
            </tr>
            <tr id="row545105718532"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p445157165318"><a name="p445157165318"></a><a name="p445157165318"></a>subsGroupTitle</p>
            </td>
            <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p184512572536"><a name="p184512572536"></a><a name="p184512572536"></a>string</p>
            </td>
            <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p20451157145314"><a name="p20451157145314"></a><a name="p20451157145314"></a>订阅类商品所属订阅组名称。</p>
            </td>
            </tr>
            <tr id="row3469572537"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p84575712536"><a name="p84575712536"></a><a name="p84575712536"></a>subsProductLevel</p>
            </td>
            <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p1045657155316"><a name="p1045657155316"></a><a name="p1045657155316"></a>string</p>
            </td>
            <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p545757195320"><a name="p545757195320"></a><a name="p545757195320"></a>订阅类商品在订阅组的级别。</p>
            </td>
            </tr>
            <tr id="row114615712531"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p14619571531"><a name="p14619571531"></a><a name="p14619571531"></a>originalMicroPrice</p>
            </td>
            <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p194610571538"><a name="p194610571538"></a><a name="p194610571538"></a>string</p>
            </td>
            <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p14655710531"><a name="p14655710531"></a><a name="p14655710531"></a>商品原价的微单位价格。商品原价乘以1,000,000后的微单位价格，例如原价是1.99美元，则对应的微单位价格为：1.99*1000000=1990000。</p>
            </td>
            </tr>
            <tr id="row146135795313"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p144614572536"><a name="p144614572536"></a><a name="p144614572536"></a>originalLocalPrice</p>
            </td>
            <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p146957105319"><a name="p146957105319"></a><a name="p146957105319"></a>string</p>
            </td>
            <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p114685716534"><a name="p114685716534"></a><a name="p114685716534"></a>商品原价（含税）。格式为“币种 商品价格”，例如“EUR 0.15”；部分国家/地区格式为“货币符号 商品价格”，例如中国大陆“￥0.15”。</p>
            </td>
            </tr>
            <tr id="row046857115314"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p746125711534"><a name="p746125711534"></a><a name="p746125711534"></a>status</p>
            </td>
            <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p646757145311"><a name="p646757145311"></a><a name="p646757145311"></a>int</p>
            </td>
            <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p34665717539"><a name="p34665717539"></a><a name="p34665717539"></a>订阅类商品状态：</p>
            <a name="ul54675715312"></a><a name="ul54675715312"></a><ul id="ul54675715312"><li>0：商品有效。</li><li>1：商品无法订阅，且无法续订。</li><li>3：商品下线，无法订阅，但支持老用户续订。</li></ul>
            </td>
            </tr>
            </tbody>
            </table>

-   示例代码

    ```
    public void ObtainProductInfo()
    {
        Debug.Log("PayScene ObtainProductInfo.");
        List<string> productIds = new List<string>();
        productIds.Add("202**619");
        ObtainProductInfoOption obtainProductInfoOption = new ObtainProductInfoOption
        {
            // 在华为开发者联盟上获取真实有效的APP ID
            applicationID = "1021**433",
            // 0：消耗 1：非消耗 2：订阅
            priceType = 0,
            // 替换为真实有效的待支付商品ID
            productIds = productIds,
            success = res =>
            {
                Debug.Log("ObtainProductInfo returnCode:" + res.returnCode + ", errMsg:" + res.errMsg +
                          ", productInfoList:" + ConvertListToString(res.productInfoList));
            },
            fail = res => { Debug.Log("ObtainProductInfo data:" + res.data + ", code:" + res.code); },
            complete = () => { Debug.Log("ObtainProductInfo complete."); }
        };
    
        QG.ObtainProductInfo(obtainProductInfoOption);
    }
    
    private string ConvertListToString<T>(List<T> list)
    {
        if (list == null || list.Count == 0)
        {
            return "";
        }
    
        string result = "[";
        foreach (var item in list)
        {
            if (item is string)
            {
                result += item + ",";
            }
            else
            {
                result += JsonUtility.ToJson(item) + ",";
            }
        }
    
        result = result.Substring(0, result.Length - 1);
        result += "]";
        return result;
    }
    ```

### static void CreatePurchaseIntent\(CreatePurchaseIntentOption createPurchaseIntentOption\)\(1103+\)<a name="section515110599437"></a>

-   描述

    创建在AGC控制台配置的商品购买订单，支持购买消耗型商品、非消耗型商品、订阅类商品。

-   请求参数CreatePurchaseIntentOption

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
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.2 "><p id="p16721102455410"><a name="p16721102455410"></a><a name="p16721102455410"></a>Action&lt;<a href="#li8479359145318">CreatePurchaseIntentSuccessResult</a>&gt;</p>
    </td>
    <td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.5.1.3 "><p id="p13721024135415"><a name="p13721024135415"></a><a name="p13721024135415"></a>O</p>
    </td>
    <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p1372113248542"><a name="p1372113248542"></a><a name="p1372113248542"></a>接口调用成功的回调函数。</p>
    </td>
    </tr>
    <tr id="row235962955313"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.5.1.1 "><p id="p972152455418"><a name="p972152455418"></a><a name="p972152455418"></a>fail</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.2 "><p id="p1872152405413"><a name="p1872152405413"></a><a name="p1872152405413"></a>Action&lt;<a href="#li558711335513">CreatePurchaseIntentFailResult</a>&gt;</p>
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
    <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p12722182485411"><a name="p12722182485411"></a><a name="p12722182485411"></a>若有函数传入，将在成功、失败后调用该函数。</p>
    </td>
    </tr>
    </tbody>
    </table>

    -   <a name="li8479359145318"></a>CreatePurchaseIntentSuccessResult

        <a name="table12514205975310"></a>
        <table><thead align="left"><tr id="row13513165910536"><th class="cellrowborder" valign="top" width="25%" id="mcps1.1.4.1.1"><p id="p11512059145311"><a name="p11512059145311"></a><a name="p11512059145311"></a>参数</p>
        </th>
        <th class="cellrowborder" valign="top" width="24.990000000000002%" id="mcps1.1.4.1.2"><p id="p145121959135316"><a name="p145121959135316"></a><a name="p145121959135316"></a>类型</p>
        </th>
        <th class="cellrowborder" valign="top" width="50.01%" id="mcps1.1.4.1.3"><p id="p45131659135318"><a name="p45131659135318"></a><a name="p45131659135318"></a>说明</p>
        </th>
        </tr>
        </thead>
        <tbody><tr id="row11513659165313"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p451318595531"><a name="p451318595531"></a><a name="p451318595531"></a>returnCode</p>
        </td>
        <td class="cellrowborder" valign="top" width="24.990000000000002%" headers="mcps1.1.4.1.2 "><p id="p13513175925311"><a name="p13513175925311"></a><a name="p13513175925311"></a>int</p>
        </td>
        <td class="cellrowborder" valign="top" width="50.01%" headers="mcps1.1.4.1.3 "><p id="p1051395995310"><a name="p1051395995310"></a><a name="p1051395995310"></a>成功返回码。</p>
        </td>
        </tr>
        <tr id="row95138598539"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p95139590537"><a name="p95139590537"></a><a name="p95139590537"></a>errMsg</p>
        </td>
        <td class="cellrowborder" valign="top" width="24.990000000000002%" headers="mcps1.1.4.1.2 "><p id="p6513259195313"><a name="p6513259195313"></a><a name="p6513259195313"></a>string</p>
        </td>
        <td class="cellrowborder" valign="top" width="50.01%" headers="mcps1.1.4.1.3 "><p id="p13513125919531"><a name="p13513125919531"></a><a name="p13513125919531"></a>成功返回码的描述信息。</p>
        </td>
        </tr>
        <tr id="row35131459135316"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p1513359195310"><a name="p1513359195310"></a><a name="p1513359195310"></a>inAppDataSignature</p>
        </td>
        <td class="cellrowborder" valign="top" width="24.990000000000002%" headers="mcps1.1.4.1.2 "><p id="p851355955316"><a name="p851355955316"></a><a name="p851355955316"></a>string</p>
        </td>
        <td class="cellrowborder" valign="top" width="50.01%" headers="mcps1.1.4.1.3 "><p id="p1551395918535"><a name="p1551395918535"></a><a name="p1551395918535"></a>使用私钥签名购买的签名字符串，签名算法为“SHA256WITHRSA”。支付成功后，需使用支付公钥对购买信息进行验签。</p>
        </td>
        </tr>
        <tr id="row16514135995315"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p19513959135316"><a name="p19513959135316"></a><a name="p19513959135316"></a>inAppPurchaseData</p>
        </td>
        <td class="cellrowborder" valign="top" width="24.990000000000002%" headers="mcps1.1.4.1.2 "><p id="p7513175925312"><a name="p7513175925312"></a><a name="p7513175925312"></a>string</p>
        </td>
        <td class="cellrowborder" valign="top" width="50.01%" headers="mcps1.1.4.1.3 "><p id="p1151415995318"><a name="p1151415995318"></a><a name="p1151415995318"></a>购买订单详情信息，详情请参见<a href="#li123330156355">InAppPurchaseData</a>。</p>
        </td>
        </tr>
        </tbody>
        </table>

    -   <a name="li558711335513"></a>CreatePurchaseIntentFailResult

        <a name="table85141259185312"></a>
        <table><thead align="left"><tr id="row45149595539"><th class="cellrowborder" valign="top" width="25%" id="mcps1.1.4.1.1"><p id="p17514959165310"><a name="p17514959165310"></a><a name="p17514959165310"></a>参数</p>
        </th>
        <th class="cellrowborder" valign="top" width="25%" id="mcps1.1.4.1.2"><p id="p551455945318"><a name="p551455945318"></a><a name="p551455945318"></a>类型</p>
        </th>
        <th class="cellrowborder" valign="top" width="50%" id="mcps1.1.4.1.3"><p id="p115141259185313"><a name="p115141259185313"></a><a name="p115141259185313"></a>说明</p>
        </th>
        </tr>
        </thead>
        <tbody><tr id="row115141659175315"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p7514145912535"><a name="p7514145912535"></a><a name="p7514145912535"></a>code</p>
        </td>
        <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p13514105975311"><a name="p13514105975311"></a><a name="p13514105975311"></a>int</p>
        </td>
        <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p9514259105314"><a name="p9514259105314"></a><a name="p9514259105314"></a><a href="#section0935245195318">错误码</a>。</p>
        </td>
        </tr>
        <tr id="row351455955315"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p55141859135316"><a name="p55141859135316"></a><a name="p55141859135316"></a>data</p>
        </td>
        <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p175141159165311"><a name="p175141159165311"></a><a name="p175141159165311"></a>string</p>
        </td>
        <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p0514175911534"><a name="p0514175911534"></a><a name="p0514175911534"></a>错误码描述信息。</p>
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
            productId = "202**619",
            // 0：消耗 1：非消耗 2：订阅
            priceType = 0,
            success = res =>
            {
                string inAppPurchaseDataStr = res.inAppPurchaseData;
                InAppPurchaseData inAppPurchaseData = null;
                if (!string.IsNullOrEmpty(inAppPurchaseDataStr))
                {
                    inAppPurchaseData = JsonUtility.FromJson<InAppPurchaseData>(inAppPurchaseDataStr);
                }
    
                Debug.Log("CreatePurchaseIntent returnCode:" + res.returnCode + ", errMsg:" + res.errMsg +
                          ", inAppDataSignature:" +
                          res.inAppDataSignature + ", inAppPurchaseData:" + (inAppPurchaseData != null
                              ? JsonUtility.ToJson(inAppPurchaseData)
                              : ""));
            },
            fail = res => { Debug.Log("CreatePurchaseIntent data:" + res.data + ", code:" + res.code); },
            complete = () => { Debug.Log("CreatePurchaseIntent complete."); }
        };
        QG.CreatePurchaseIntent(createPurchaseIntentOption);
    }
    ```

### static void ConsumeOwnedPurchase\(ConsumeOwnedPurchaseOption consumeOwnedPurchaseOption\)\(1103+\)<a name="section20910454444"></a>

-   描述

    在商品支付成功后，应用需要在发放商品成功之后调用此接口对消耗型商品执行消耗操作。您需把已发货的购买Token传至您的服务器，后续即使消耗失败也可以从您的服务器拉取数据进行对比，避免出现异常。

-   请求参数ConsumeOwnedPurchaseOption

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
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.2 "><p id="p1097615814613"><a name="p1097615814613"></a><a name="p1097615814613"></a>Action&lt;<a href="#li1591993825714">ConsumeOwnedPurchaseSuccessResult</a>&gt;</p>
    </td>
    <td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.5.1.3 "><p id="p139761058164613"><a name="p139761058164613"></a><a name="p139761058164613"></a>O</p>
    </td>
    <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p097625864616"><a name="p097625864616"></a><a name="p097625864616"></a>接口调用成功的回调函数。</p>
    </td>
    </tr>
    <tr id="row10365172084116"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.5.1.1 "><p id="p197685813466"><a name="p197685813466"></a><a name="p197685813466"></a>fail</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.2 "><p id="p89761258124614"><a name="p89761258124614"></a><a name="p89761258124614"></a>Action&lt;<a href="#li1459452516569">ConsumeOwnedPurchaseFailResult</a>&gt;</p>
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
    <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p89765583460"><a name="p89765583460"></a><a name="p89765583460"></a>若有函数传入，将在成功、失败后调用该函数。</p>
    </td>
    </tr>
    </tbody>
    </table>

    -   <a name="li1591993825714"></a>ConsumeOwnedPurchaseSuccessResult

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
        <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p1470765973617"><a name="p1470765973617"></a><a name="p1470765973617"></a>string</p>
        </td>
        <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p15336730141116"><a name="p15336730141116"></a><a name="p15336730141116"></a>消耗结果信息，详情请参见<a href="#li97291150125713">ConsumePurchaseData</a>。</p>
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

    -   <a name="li1459452516569"></a>ConsumeOwnedPurchaseFailResult

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

        -   <a name="li97291150125713"></a>ConsumePurchaseData

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
            <td class="cellrowborder" valign="top" width="55.400000000000006%" headers="mcps1.1.4.1.3 "><p id="p6986639124210"><a name="p6986639124210"></a><a name="p6986639124210"></a>国家/地区码。中国大陆为CN，其他国家/地区请参见<a href="https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/huawei-iap-coverage-0000001050438753" target="_blank" rel="noopener noreferrer">华为IAP范围覆盖</a>。</p>
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
                string consumePurchaseDataStr = res.consumePurchaseData;
                ConsumePurchaseData consumePurchaseData = null;
                if (!string.IsNullOrEmpty(consumePurchaseDataStr))
                {
                    consumePurchaseData = JsonUtility.FromJson<ConsumePurchaseData>(consumePurchaseDataStr);
                }
    
                Debug.Log("ConsumeOwnedPurchase returnCode:" + res.returnCode + ", errMsg:" + res.errMsg +
                          ", consumePurchaseData:" + (consumePurchaseData != null
                              ? JsonUtility.ToJson(consumePurchaseData)
                              : "") + ", dataSignature:" + res.dataSignature);
            },
            fail = res => { Debug.Log("ConsumeOwnedPurchase data:" + res.data + ", code:" + res.code); },
            complete = () => { Debug.Log("ConsumeOwnedPurchase complete."); }
        };
        QG.ConsumeOwnedPurchase(consumeOwnedPurchaseOption);
    }
    ```

### static void ObtainOwnedPurchaseRecord\(ObtainOwnedPurchaseRecordOption obtainOwnedPurchaseRecordOption\)\(1103+\)<a name="section12911414124411"></a>

-   描述

    此接口用于获取消耗型商品的历史消耗商品信息或订阅类商品的所有订阅收据：

    -   若是消耗型商品，此接口返回商品列表中执行过发货和消耗操作的商品信息。
    -   若是订阅类商品，此接口返回在应用中所有的订阅收据。

-   请求参数ObtainOwnedPurchaseRecordOption

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
    <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p152711115470"><a name="p152711115470"></a><a name="p152711115470"></a>若有函数传入，将在成功、失败后调用该函数。</p>
    </td>
    </tr>
    </tbody>
    </table>

    -   ObtainOwnedPurchaseRecordSuccessResult

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
        <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p153144217316"><a name="p153144217316"></a><a name="p153144217316"></a>List&lt;string&gt;</p>
        </td>
        <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p1092712916522"><a name="p1092712916522"></a><a name="p1092712916522"></a>已购买的商品信息，详情请参见<a href="#li123330156355">InAppPurchaseData</a>。</p>
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
        <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p892752914529"><a name="p892752914529"></a><a name="p892752914529"></a>数据定位标志。若返回continuationToken时，应用必须继续调用当前接口，并传入当前continuationToken值，直到调用后不再返回continuationToken。</p>
        </td>
        </tr>
        <tr id="row180212864416"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p17927929175219"><a name="p17927929175219"></a><a name="p17927929175219"></a>placedInappPurchaseDataList</p>
        </td>
        <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p583411471136"><a name="p583411471136"></a><a name="p583411471136"></a>List&lt;string&gt;</p>
        </td>
        <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p1910324182116"><a name="p1910324182116"></a><a name="p1910324182116"></a>商品切换后的商品信息，详情请参见<a href="#li123330156355">InAppPurchaseData</a>。</p>
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

    -   ObtainOwnedPurchaseRecordFailResult

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
                Debug.Log("ObtainOwnedPurchaseRecord returnCode:" + res.returnCode + ", errMsg:" + res.errMsg +
                          ", itemList:" + ConvertListToString(res.itemList) + ", inAppPurchaseDataList:" +
                          ConvertListToString(res.inAppPurchaseDataList) + ", inAppSignature:" +
                          ConvertListToString(res.inAppSignature) + ", continuationToken:" + res.continuationToken +
                          ", placedInappPurchaseDataList:" + ConvertListToString(res.placedInappPurchaseDataList) +
                          ", placedInappSignatureList:" + ConvertListToString(res.placedInappSignatureList));
            },
            fail = res => { Debug.Log("ObtainOwnedPurchaseRecord data:" + res.data + ", code:" + res.code); },
            complete = () => { Debug.Log("ObtainOwnedPurchaseRecord complete."); }
        };
        QG.ObtainOwnedPurchaseRecord(obtainOwnedPurchaseRecordOption);
    }
    
    private string ConvertListToString<T>(List<T> list)
    {
        if (list == null || list.Count == 0)
        {
            return "";
        }
    
        string result = "[";
        foreach (var item in list)
        {
            if (item is string)
            {
                result += item + ",";
            }
            else
            {
                result += JsonUtility.ToJson(item) + ",";
            }
        }
    
        result = result.Substring(0, result.Length - 1);
        result += "]";
        return result;
    }
    ```

### static void StartIapActivity\(StartIapActivityOption startIapActivityOption\)\(1103+\)<a name="section287142113449"></a>

-   描述

    跳转至华为应用内支付的相关订阅页：

    -   可跳转至华为编辑订阅页。
    -   可跳转至华为管理订阅页。

-   请求参数StartIapActivityOption

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
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.2 "><p id="p194761316479"><a name="p194761316479"></a><a name="p194761316479"></a>Action&lt;<a href="#li13775174611211">StartIapActivityFailResult</a>&gt;</p>
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
    <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p34769394713"><a name="p34769394713"></a><a name="p34769394713"></a>若有函数传入，将在成功、失败后调用该函数。</p>
    </td>
    </tr>
    </tbody>
    </table>

    -   <a name="li13775174611211"></a>StartIapActivityFailResult

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
            fail = res => { Debug.Log("StartIapActivity data:" + res.data + ", code:" + res.code); },
            complete = () => { Debug.Log("StartIapActivity complete."); }
        };
        QG.StartIapActivity(startIapActivityOption);
    }
    ```

### 错误码<a name="section0935245195318"></a>

更多错误码可参考[通用错误码](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/client-error-code-0000001050746111)。

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

