# 系统信息API<a name="ZH-CN_TOPIC_0000001716169008"></a>

-   [接口定义](#section183503126613)
    -   [static void GetSystemInfo\(GetSystemInfoOption getSystemInfoOption\)](#section163144610580)
    -   [static GetSystemInfoSuccessResult GetSystemInfoSync\(\)](#section1535773118581)

## 接口定义<a name="section183503126613"></a>

<a name="table892310973612"></a>
<table><thead align="left"><tr id="row19232993618"><th class="cellrowborder" valign="top" width="50%" id="mcps1.1.3.1.1"><p id="p49246933615"><a name="p49246933615"></a><a name="p49246933615"></a>接口</p>
</th>
<th class="cellrowborder" valign="top" width="50%" id="mcps1.1.3.1.2"><p id="p592499133614"><a name="p592499133614"></a><a name="p592499133614"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="row19241298367"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.1 "><p id="p4491115132110"><a name="p4491115132110"></a><a name="p4491115132110"></a><a href="#section163144610580">static void GetSystemInfo(GetSystemInfoOption getSystemInfoOption)</a></p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.2 "><p id="p348121518218"><a name="p348121518218"></a><a name="p348121518218"></a>获取系统信息。</p>
</td>
</tr>
<tr id="row043620214017"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.1 "><p id="p64372264010"><a name="p64372264010"></a><a name="p64372264010"></a><a href="#section1535773118581">static GetSystemInfoSuccessResult GetSystemInfoSync()</a></p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.2 "><p id="p54379214408"><a name="p54379214408"></a><a name="p54379214408"></a>获取系统信息（同步方法）。</p>
</td>
</tr>
</tbody>
</table>

### static void GetSystemInfo\(GetSystemInfoOption getSystemInfoOption\)<a name="section163144610580"></a>

-   描述

    获取系统信息。

-   请求参数GetSystemInfoOption

    <a name="table28084319227"></a>
    <table><thead align="left"><tr id="row6808838224"><th class="cellrowborder" valign="top" width="20.1%" id="mcps1.1.5.1.1"><p id="p12808143192212"><a name="p12808143192212"></a><a name="p12808143192212"></a>参数</p>
    </th>
    <th class="cellrowborder" valign="top" width="24.9%" id="mcps1.1.5.1.2"><p id="p480853192220"><a name="p480853192220"></a><a name="p480853192220"></a>类型</p>
    </th>
    <th class="cellrowborder" valign="top" width="15%" id="mcps1.1.5.1.3"><p id="p280853102211"><a name="p280853102211"></a><a name="p280853102211"></a>必填(M)/选填(O)</p>
    </th>
    <th class="cellrowborder" valign="top" width="40%" id="mcps1.1.5.1.4"><p id="p188085322215"><a name="p188085322215"></a><a name="p188085322215"></a>说明</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row1780813372213"><td class="cellrowborder" valign="top" width="20.1%" headers="mcps1.1.5.1.1 "><p id="p3366132612283"><a name="p3366132612283"></a><a name="p3366132612283"></a>success</p>
    </td>
    <td class="cellrowborder" valign="top" width="24.9%" headers="mcps1.1.5.1.2 "><p id="p7366182662810"><a name="p7366182662810"></a><a name="p7366182662810"></a>Action&lt;<a href="#li1038911568395">GetSystemInfoSuccessResult</a>&gt;</p>
    </td>
    <td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.5.1.3 "><p id="p1663873252810"><a name="p1663873252810"></a><a name="p1663873252810"></a>O</p>
    </td>
    <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p736652612816"><a name="p736652612816"></a><a name="p736652612816"></a>接口调用成功的回调函数。</p>
    </td>
    </tr>
    <tr id="row31489416282"><td class="cellrowborder" valign="top" width="20.1%" headers="mcps1.1.5.1.1 "><p id="p12366226102819"><a name="p12366226102819"></a><a name="p12366226102819"></a>fail</p>
    </td>
    <td class="cellrowborder" valign="top" width="24.9%" headers="mcps1.1.5.1.2 "><p id="p436692682819"><a name="p436692682819"></a><a name="p436692682819"></a>Action</p>
    </td>
    <td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.5.1.3 "><p id="p14637183292819"><a name="p14637183292819"></a><a name="p14637183292819"></a>O</p>
    </td>
    <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p20366126192819"><a name="p20366126192819"></a><a name="p20366126192819"></a>接口调用失败的回调函数。</p>
    </td>
    </tr>
    <tr id="row16614752285"><td class="cellrowborder" valign="top" width="20.1%" headers="mcps1.1.5.1.1 "><p id="p1336615265283"><a name="p1336615265283"></a><a name="p1336615265283"></a>complete</p>
    </td>
    <td class="cellrowborder" valign="top" width="24.9%" headers="mcps1.1.5.1.2 "><p id="p236617268286"><a name="p236617268286"></a><a name="p236617268286"></a>Action</p>
    </td>
    <td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.5.1.3 "><p id="p063723282815"><a name="p063723282815"></a><a name="p063723282815"></a>O</p>
    </td>
    <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p236712269287"><a name="p236712269287"></a><a name="p236712269287"></a>若有函数传入，将在成功、失败后调用该函数。</p>
    </td>
    </tr>
    </tbody>
    </table>

    -   <a name="li1038911568395"></a>GetSystemInfoSuccessResult

        <a name="table6702115111211"></a>
        <table><thead align="left"><tr id="row11703125115212"><th class="cellrowborder" valign="top" width="25%" id="mcps1.1.4.1.1"><p id="p32768371310"><a name="p32768371310"></a><a name="p32768371310"></a>参数</p>
        </th>
        <th class="cellrowborder" valign="top" width="25%" id="mcps1.1.4.1.2"><p id="p72760371338"><a name="p72760371338"></a><a name="p72760371338"></a>类型</p>
        </th>
        <th class="cellrowborder" valign="top" width="50%" id="mcps1.1.4.1.3"><p id="p16277837035"><a name="p16277837035"></a><a name="p16277837035"></a>说明</p>
        </th>
        </tr>
        </thead>
        <tbody><tr id="row57037517211"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p61468481317"><a name="p61468481317"></a><a name="p61468481317"></a>brand</p>
        </td>
        <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p314634816114"><a name="p314634816114"></a><a name="p314634816114"></a>string</p>
        </td>
        <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p131465489110"><a name="p131465489110"></a><a name="p131465489110"></a>手机品牌。</p>
        </td>
        </tr>
        <tr id="row8703551728"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p1014604812114"><a name="p1014604812114"></a><a name="p1014604812114"></a>model</p>
        </td>
        <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p1714613481017"><a name="p1714613481017"></a><a name="p1714613481017"></a>string</p>
        </td>
        <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p1214613481814"><a name="p1214613481814"></a><a name="p1214613481814"></a>手机型号。</p>
        </td>
        </tr>
        <tr id="row770435113216"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p614615480119"><a name="p614615480119"></a><a name="p614615480119"></a>pixelRatio</p>
        </td>
        <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p214610481917"><a name="p214610481917"></a><a name="p214610481917"></a>double</p>
        </td>
        <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p71461048712"><a name="p71461048712"></a><a name="p71461048712"></a>设备像素比。</p>
        <div class="note" id="note18171934154616"><a name="note18171934154616"></a><a name="note18171934154616"></a><span class="notetitle"> 说明： </span><div class="notebody"><p id="p4817173415463"><a name="p4817173415463"></a><a name="p4817173415463"></a>为确保获取的pixelRatio和safeArea相匹配，需将minPlatformVersion配置1078及以上版本。</p>
        </div></div>
        </td>
        </tr>
        <tr id="row167045518210"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p31462048911"><a name="p31462048911"></a><a name="p31462048911"></a>screenWidth</p>
        </td>
        <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p914684813115"><a name="p914684813115"></a><a name="p914684813115"></a>double</p>
        </td>
        <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p13146154819116"><a name="p13146154819116"></a><a name="p13146154819116"></a>屏幕宽度。</p>
        </td>
        </tr>
        <tr id="row13704651124"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p13146164816110"><a name="p13146164816110"></a><a name="p13146164816110"></a>screenHeight</p>
        </td>
        <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p1314616481415"><a name="p1314616481415"></a><a name="p1314616481415"></a>double</p>
        </td>
        <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p514611482113"><a name="p514611482113"></a><a name="p514611482113"></a>屏幕高度。</p>
        </td>
        </tr>
        <tr id="row147044515212"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p214714483120"><a name="p214714483120"></a><a name="p214714483120"></a>windowWidth</p>
        </td>
        <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p2147148811"><a name="p2147148811"></a><a name="p2147148811"></a>double</p>
        </td>
        <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p111471748619"><a name="p111471748619"></a><a name="p111471748619"></a>可使用窗口宽度。</p>
        </td>
        </tr>
        <tr id="row9704195120216"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p1914720482112"><a name="p1914720482112"></a><a name="p1914720482112"></a>windowHeight</p>
        </td>
        <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p18147548218"><a name="p18147548218"></a><a name="p18147548218"></a>double</p>
        </td>
        <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p111470481318"><a name="p111470481318"></a><a name="p111470481318"></a>可使用窗口高度。</p>
        </td>
        </tr>
        <tr id="row1080363516519"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p191471348415"><a name="p191471348415"></a><a name="p191471348415"></a>language</p>
        </td>
        <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p191472481713"><a name="p191472481713"></a><a name="p191472481713"></a>string</p>
        </td>
        <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p151478484118"><a name="p151478484118"></a><a name="p151478484118"></a>系统语言。</p>
        </td>
        </tr>
        <tr id="row185222037812"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p214754813110"><a name="p214754813110"></a><a name="p214754813110"></a>region</p>
        </td>
        <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p2147124817117"><a name="p2147124817117"></a><a name="p2147124817117"></a>string</p>
        </td>
        <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p51478481316"><a name="p51478481316"></a><a name="p51478481316"></a>系统地区。</p>
        </td>
        </tr>
        <tr id="row21871938911"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p18147748319"><a name="p18147748319"></a><a name="p18147748319"></a>script</p>
        </td>
        <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p151470480113"><a name="p151470480113"></a><a name="p151470480113"></a>string</p>
        </td>
        <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p3147948610"><a name="p3147948610"></a><a name="p3147948610"></a>系统语言书写方式。</p>
        </td>
        </tr>
        <tr id="row1787517381613"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p111476481916"><a name="p111476481916"></a><a name="p111476481916"></a>coreVersion</p>
        </td>
        <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p1414713483111"><a name="p1414713483111"></a><a name="p1414713483111"></a>string</p>
        </td>
        <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p1214711482112"><a name="p1214711482112"></a><a name="p1214711482112"></a>渲染引擎版本号。</p>
        </td>
        </tr>
        <tr id="row185241839517"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p81471148217"><a name="p81471148217"></a><a name="p81471148217"></a>COREVersion</p>
        </td>
        <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p6147134814113"><a name="p6147134814113"></a><a name="p6147134814113"></a>string</p>
        </td>
        <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p141477486120"><a name="p141477486120"></a><a name="p141477486120"></a>渲染引擎版本号。</p>
        </td>
        </tr>
        <tr id="row14724740111"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p214710481615"><a name="p214710481615"></a><a name="p214710481615"></a>system</p>
        </td>
        <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p8147648918"><a name="p8147648918"></a><a name="p8147648918"></a>string</p>
        </td>
        <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p1014711486116"><a name="p1014711486116"></a><a name="p1014711486116"></a>操作系统版本。</p>
        </td>
        </tr>
        <tr id="row152921541212"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p12147548013"><a name="p12147548013"></a><a name="p12147548013"></a>platform</p>
        </td>
        <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p414713481014"><a name="p414713481014"></a><a name="p414713481014"></a>string</p>
        </td>
        <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p20148154811116"><a name="p20148154811116"></a><a name="p20148154811116"></a>客户端平台。</p>
        </td>
        </tr>
        <tr id="row199501741419"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p214812481010"><a name="p214812481010"></a><a name="p214812481010"></a>version</p>
        </td>
        <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p1814824816117"><a name="p1814824816117"></a><a name="p1814824816117"></a>string</p>
        </td>
        <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p5148848213"><a name="p5148848213"></a><a name="p5148848213"></a>快应用中心版本。</p>
        </td>
        </tr>
        <tr id="row15979642116"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p1814854814115"><a name="p1814854814115"></a><a name="p1814854814115"></a>statusBarHeight</p>
        </td>
        <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p014816481714"><a name="p014816481714"></a><a name="p014816481714"></a>double</p>
        </td>
        <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p11481848812"><a name="p11481848812"></a><a name="p11481848812"></a>状态栏高度。</p>
        </td>
        </tr>
        <tr id="row1198154310119"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p01481748616"><a name="p01481748616"></a><a name="p01481748616"></a>platformVersionName</p>
        </td>
        <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p1514894816113"><a name="p1514894816113"></a><a name="p1514894816113"></a>string</p>
        </td>
        <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p13148348512"><a name="p13148348512"></a><a name="p13148348512"></a>运行平台版本名称。</p>
        <div class="note" id="note1693595213477"><a name="note1693595213477"></a><a name="note1693595213477"></a><span class="notetitle"> 说明： </span><div class="notebody"><p id="p129352052104716"><a name="p129352052104716"></a><a name="p129352052104716"></a>若快游戏minPlatformVersion在1078及以上版本，才会返回当前字段。</p>
        </div></div>
        </td>
        </tr>
        <tr id="row366917441319"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p1814819481914"><a name="p1814819481914"></a><a name="p1814819481914"></a>platformVersionCode</p>
        </td>
        <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p171480481019"><a name="p171480481019"></a><a name="p171480481019"></a>int</p>
        </td>
        <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p31481148112"><a name="p31481148112"></a><a name="p31481148112"></a>运行平台标准版本号。</p>
        <div class="note" id="note27091241480"><a name="note27091241480"></a><a name="note27091241480"></a><span class="notetitle"> 说明： </span><div class="notebody"><p id="p4709948481"><a name="p4709948481"></a><a name="p4709948481"></a>若快游戏minPlatformVersion在1078及以上版本，才会返回当前字段。</p>
        </div></div>
        </td>
        </tr>
        <tr id="row228915454112"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p8148748917"><a name="p8148748917"></a><a name="p8148748917"></a>safeArea</p>
        </td>
        <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p2148104819118"><a name="p2148104819118"></a><a name="p2148104819118"></a><a href="#li16775158123016">SafeArea</a></p>
        </td>
        <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p10148174819113"><a name="p10148174819113"></a><a name="p10148174819113"></a>安全区域。</p>
        <div class="note" id="note113416144486"><a name="note113416144486"></a><a name="note113416144486"></a><span class="notetitle"> 说明： </span><div class="notebody"><p id="p193419146482"><a name="p193419146482"></a><a name="p193419146482"></a>若快游戏minPlatformVersion在1078及以上版本，才会返回当前字段。</p>
        </div></div>
        </td>
        </tr>
        </tbody>
        </table>

        -   <a name="li16775158123016"></a>SafeArea

            <a name="table4403163810710"></a>
            <table><thead align="left"><tr id="row17401113817720"><th class="cellrowborder" valign="top" width="25%" id="mcps1.1.4.1.1"><p id="p94011381577"><a name="p94011381577"></a><a name="p94011381577"></a>参数</p>
            </th>
            <th class="cellrowborder" valign="top" width="25%" id="mcps1.1.4.1.2"><p id="p2401938079"><a name="p2401938079"></a><a name="p2401938079"></a>类型</p>
            </th>
            <th class="cellrowborder" valign="top" width="50%" id="mcps1.1.4.1.3"><p id="p13401133816710"><a name="p13401133816710"></a><a name="p13401133816710"></a>说明</p>
            </th>
            </tr>
            </thead>
            <tbody><tr id="row24024381373"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p840293812710"><a name="p840293812710"></a><a name="p840293812710"></a>bottom</p>
            </td>
            <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p144026381578"><a name="p144026381578"></a><a name="p144026381578"></a>double</p>
            </td>
            <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p184021138272"><a name="p184021138272"></a><a name="p184021138272"></a>安全区域右下角纵坐标。</p>
            </td>
            </tr>
            <tr id="row1240216387710"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p44021438879"><a name="p44021438879"></a><a name="p44021438879"></a>left</p>
            </td>
            <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p740223815711"><a name="p740223815711"></a><a name="p740223815711"></a>double</p>
            </td>
            <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p2040216381278"><a name="p2040216381278"></a><a name="p2040216381278"></a>安全区域左上角横坐标。</p>
            </td>
            </tr>
            <tr id="row134022386713"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p1402133811717"><a name="p1402133811717"></a><a name="p1402133811717"></a>right</p>
            </td>
            <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p11402163816714"><a name="p11402163816714"></a><a name="p11402163816714"></a>double</p>
            </td>
            <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p140211383720"><a name="p140211383720"></a><a name="p140211383720"></a>安全区域右下角横坐标。</p>
            </td>
            </tr>
            <tr id="row10402738374"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p6402123812712"><a name="p6402123812712"></a><a name="p6402123812712"></a>top</p>
            </td>
            <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p24024381718"><a name="p24024381718"></a><a name="p24024381718"></a>double</p>
            </td>
            <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p1440211387713"><a name="p1440211387713"></a><a name="p1440211387713"></a>安全区域左上角纵坐标。</p>
            </td>
            </tr>
            <tr id="row1040214387712"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p840218381875"><a name="p840218381875"></a><a name="p840218381875"></a>height</p>
            </td>
            <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p10402238874"><a name="p10402238874"></a><a name="p10402238874"></a>double</p>
            </td>
            <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p1540203810710"><a name="p1540203810710"></a><a name="p1540203810710"></a>安全区域的高度，大小为实际高度（以px为单位）/设备屏幕密度。</p>
            </td>
            </tr>
            <tr id="row94038381275"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p440211388711"><a name="p440211388711"></a><a name="p440211388711"></a>width</p>
            </td>
            <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p1140315385720"><a name="p1140315385720"></a><a name="p1140315385720"></a>double</p>
            </td>
            <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p84031389712"><a name="p84031389712"></a><a name="p84031389712"></a>安全区域的宽度，大小为实际宽度（以px为单位）/设备屏幕密度。</p>
            </td>
            </tr>
            </tbody>
            </table>

-   示例代码

    ```
    public void GetSystemInfo()
    {
        GetSystemInfoOption getSystemInfoOption = new GetSystemInfoOption
        {
            success = (res) =>
            {
                Debug.Log("GetSystemInfo 手机品牌brand: " + res.brand + ", 手机型号model: " + res.model +
                            ", 设备像素比pixelRatio: " +
                            res.pixelRatio + ", 屏幕宽度screenWidth: " +
                            res.screenWidth + ", 屏幕高度screenHeight: " + res.screenHeight + ", 可使用窗口宽度windowWidth: " +
                            res.windowWidth
                            + ", 可使用窗口高度windowHeight: " + res.windowHeight + ", 系统语言language: " + res.language +
                            ", 系统地区region: " + res.region +
                            ", 系统语言书写方式script: " + res.script + ", 渲染引擎版本号coreVersion: " + res.coreVersion +
                            ", 渲染引擎版本号COREVersion: " +
                            res.COREVersion + ", 操作系统版本system: " + res.system
                            + ", 客户端平台platform: " + res.platform + ", 快应用中心版本version: " + res.version +
                            ", 状态栏高度statusBarHeight: " +
                            res.statusBarHeight + ", 运行平台版本名称platformVersionName: " + res.platformVersionName +
                            ", 运行平台标准版本号platformVersionCode: " +
                            res.platformVersionCode + ", 安全区域SafeArea: " + JsonUtility.ToJson(res.safeArea));
            },
            fail = () => { Debug.Log("GetSystemInfoOption fail."); },
            complete = () => { Debug.Log("GetSystemInfoOption Complete."); }
        };
        QG.GetSystemInfo(getSystemInfoOption);
    }
    ```

### static GetSystemInfoSuccessResult GetSystemInfoSync\(\)<a name="section1535773118581"></a>

-   描述

    获取系统信息（同步方法）。

-   返回参数

    [GetSystemInfoSuccessResult](#li1038911568395)

-   示例代码

    ```
    public void GetSystemInfoSync()
    {
        GetSystemInfoSuccessResult res = QG.GetSystemInfoSync();
        Debug.Log("GetSystemInfoSync 手机品牌brand: " + res.brand + ", 手机型号model: " + res.model + ", 设备像素比pixelRatio: " +
                    res.pixelRatio +
                    ", 屏幕宽度screenWidth: " +
                    res.screenWidth + ", 屏幕高度screenHeight: " + res.screenHeight + ", 可使用窗口宽度windowWidth: " +
                    res.windowWidth
                    + ", 可使用窗口高度windowHeight: " + res.windowHeight + ", 系统语言language: " + res.language +
                    ", 系统地区region: " + res.region +
                    ", 系统语言书写方式script: " + res.script + ", 渲染引擎版本号coreVersion: " + res.coreVersion +
                    ", 渲染引擎版本号COREVersion: " +
                    res.COREVersion + ", 操作系统版本system: " + res.system
                    + ", 客户端平台platform: " + res.platform + ", 快应用中心版本version: " + res.version +
                    ", 状态栏高度statusBarHeight: " +
                    res.statusBarHeight + ", 运行平台版本名称platformVersionName: " + res.platformVersionName +
                    ", 运行平台标准版本号platformVersionCode: " +
                    res.platformVersionCode + ", 安全区域SafeArea: " + JsonUtility.ToJson(res.safeArea));
    }
    ```

