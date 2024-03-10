# 资源缓存API<a name="ZH-CN_TOPIC_0000001763969113"></a>

-   [类定义](#section183503126613)
    -   [void AddIdentifiers\(List<string\> cacheIdentifiers\)](#section288012312144)
    -   [void AddExcludeIdentifiers\(List<string\> excludeCacheIdentifiers\)](#section1784410450159)
    -   [bool HasCaChe\(string url\)](#section13765154131814)
    -   [void DeleteCache\(string url\)](#section353212338213)
    -   [void ClearLru\(\)](#section3452055112210)

## 类定义<a name="section183503126613"></a>

<a name="table892310973612"></a>
<table><thead align="left"><tr id="row19232993618"><th class="cellrowborder" valign="top" width="15%" id="mcps1.1.4.1.1"><p id="p090125915509"><a name="p090125915509"></a><a name="p090125915509"></a>类</p>
</th>
<th class="cellrowborder" valign="top" width="40%" id="mcps1.1.4.1.2"><p id="p49246933615"><a name="p49246933615"></a><a name="p49246933615"></a>定义</p>
</th>
<th class="cellrowborder" valign="top" width="45%" id="mcps1.1.4.1.3"><p id="p592499133614"><a name="p592499133614"></a><a name="p592499133614"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="row1845322041417"><td class="cellrowborder" rowspan="5" valign="top" width="15%" headers="mcps1.1.4.1.1 "><p id="p890165914501"><a name="p890165914501"></a><a name="p890165914501"></a>CacheManager类</p>
</td>
<td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.4.1.2 "><p id="p0453520111419"><a name="p0453520111419"></a><a name="p0453520111419"></a><a href="#section288012312144">void AddIdentifiers(List&lt;string&gt; cacheIdentifiers)</a></p>
</td>
<td class="cellrowborder" valign="top" width="45%" headers="mcps1.1.4.1.3 "><p id="p1245311209145"><a name="p1245311209145"></a><a name="p1245311209145"></a>添加需要进行缓存的URL标识符。</p>
</td>
</tr>
<tr id="row14318185214144"><td class="cellrowborder" valign="top" headers="mcps1.1.4.1.1 "><p id="p10318175218141"><a name="p10318175218141"></a><a name="p10318175218141"></a><a href="#section1784410450159">void AddExcludeIdentifiers(List&lt;string&gt; excludeCacheIdentifiers)</a></p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.4.1.2 "><p id="p8318175291411"><a name="p8318175291411"></a><a name="p8318175291411"></a>添加明确不需要缓存的URL标识符，用于满足AddIdentifiers中需要剔除的情况。</p>
</td>
</tr>
<tr id="row1929715712143"><td class="cellrowborder" valign="top" headers="mcps1.1.4.1.1 "><p id="p6297957161411"><a name="p6297957161411"></a><a name="p6297957161411"></a><a href="#section13765154131814">bool HasCaChe(string url)</a></p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.4.1.2 "><p id="p629725751418"><a name="p629725751418"></a><a name="p629725751418"></a>是否存在URL对应的本地缓存资源。</p>
</td>
</tr>
<tr id="row999412161513"><td class="cellrowborder" valign="top" headers="mcps1.1.4.1.1 "><p id="p15994191121510"><a name="p15994191121510"></a><a name="p15994191121510"></a><a href="#section353212338213">void DeleteCache(string url)</a></p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.4.1.2 "><p id="p16994315155"><a name="p16994315155"></a><a name="p16994315155"></a>删除URL对应的本地缓存资源。</p>
</td>
</tr>
<tr id="row89131223155"><td class="cellrowborder" valign="top" headers="mcps1.1.4.1.1 "><p id="p291372131516"><a name="p291372131516"></a><a name="p291372131516"></a><a href="#section3452055112210">void ClearLru()</a></p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.4.1.2 "><p id="p1791310281516"><a name="p1791310281516"></a><a name="p1791310281516"></a>触发缓存淘汰策略删除本地缓存。</p>
</td>
</tr>
</tbody>
</table>

### void AddIdentifiers\(List<string\> cacheIdentifiers\)<a name="section288012312144"></a>

-   描述

    添加需要进行缓存的URL标识符。

-   请求参数

    <a name="table182784025919"></a>
    <table><thead align="left"><tr id="row152788025917"><th class="cellrowborder" valign="top" width="20%" id="mcps1.1.5.1.1"><p id="p1278508598"><a name="p1278508598"></a><a name="p1278508598"></a>参数</p>
    </th>
    <th class="cellrowborder" valign="top" width="25%" id="mcps1.1.5.1.2"><p id="p227850175918"><a name="p227850175918"></a><a name="p227850175918"></a>类型</p>
    </th>
    <th class="cellrowborder" valign="top" width="15%" id="mcps1.1.5.1.3"><p id="p152781601593"><a name="p152781601593"></a><a name="p152781601593"></a>必填(M)/选填(O)</p>
    </th>
    <th class="cellrowborder" valign="top" width="40%" id="mcps1.1.5.1.4"><p id="p9278101598"><a name="p9278101598"></a><a name="p9278101598"></a>说明</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row17278907593"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.5.1.1 "><p id="p627814045915"><a name="p627814045915"></a><a name="p627814045915"></a>cacheIdentifiers</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.2 "><p id="p18278120145919"><a name="p18278120145919"></a><a name="p18278120145919"></a>List&lt;string&gt;</p>
    </td>
    <td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.5.1.3 "><p id="p2278709595"><a name="p2278709595"></a><a name="p2278709595"></a>M</p>
    </td>
    <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p42781009592"><a name="p42781009592"></a><a name="p42781009592"></a>需要缓存的URL标识符列表。</p>
    </td>
    </tr>
    </tbody>
    </table>

-   示例代码

    ```
    readonly CacheManager xmlHttpRequestCacheManager = QG.GetCacheManager();
    public void CacheManagerAddIdentifiers()
    {
        Debug.Log("CacheManager AddIdentifiers.");
        List<string> cacheIdentifiers = new List<string>();
        cacheIdentifiers.Add("StreamingBundleSub1");
        cacheIdentifiers.Add("StreamingBundleHello");
        xmlHttpRequestCacheManager.AddIdentifiers(cacheIdentifiers);
    }
    ```

### void AddExcludeIdentifiers\(List<string\> excludeCacheIdentifiers\)<a name="section1784410450159"></a>

-   描述

    添加明确不需要缓存的URL标识符。

-   请求参数

    <a name="table1995473031812"></a>
    <table><thead align="left"><tr id="row99542030191817"><th class="cellrowborder" valign="top" width="20%" id="mcps1.1.5.1.1"><p id="p3954183041813"><a name="p3954183041813"></a><a name="p3954183041813"></a>参数</p>
    </th>
    <th class="cellrowborder" valign="top" width="25%" id="mcps1.1.5.1.2"><p id="p5954830201814"><a name="p5954830201814"></a><a name="p5954830201814"></a>类型</p>
    </th>
    <th class="cellrowborder" valign="top" width="15%" id="mcps1.1.5.1.3"><p id="p139541230151816"><a name="p139541230151816"></a><a name="p139541230151816"></a>必填(M)/选填(O)</p>
    </th>
    <th class="cellrowborder" valign="top" width="40%" id="mcps1.1.5.1.4"><p id="p695411307188"><a name="p695411307188"></a><a name="p695411307188"></a>说明</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row1954130171814"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.5.1.1 "><p id="p61490378194"><a name="p61490378194"></a><a name="p61490378194"></a>excludeCacheIdentifiers</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.2 "><p id="p19548301189"><a name="p19548301189"></a><a name="p19548301189"></a>List&lt;string&gt;</p>
    </td>
    <td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.5.1.3 "><p id="p59541301182"><a name="p59541301182"></a><a name="p59541301182"></a>M</p>
    </td>
    <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p995483015188"><a name="p995483015188"></a><a name="p995483015188"></a>不需要缓存的URL标识符列表。</p>
    </td>
    </tr>
    </tbody>
    </table>

-   示例代码

    ```
    readonly CacheManager xmlHttpRequestCacheManager = QG.GetCacheManager();
    public void CacheManagerAddExcludeIdentifiers()
    {
        Debug.Log("CacheManager AddExcludeIdentifiers.");
        List<string> excludeCacheIdentifiers = new List<string>();
        excludeCacheIdentifiers.Add("a.json");
        excludeCacheIdentifiers.Add("b.json");
        excludeCacheIdentifiers.Add("abcdefg");
        xmlHttpRequestCacheManager.AddExcludeIdentifiers(excludeCacheIdentifiers);
    }
    ```

### bool HasCaChe\(string url\)<a name="section13765154131814"></a>

-   描述

    是否存在URL对应的本地缓存资源。

-   请求参数

    <a name="table728142821910"></a>
    <table><thead align="left"><tr id="row7281102813199"><th class="cellrowborder" valign="top" width="20%" id="mcps1.1.5.1.1"><p id="p1628116281197"><a name="p1628116281197"></a><a name="p1628116281197"></a>参数</p>
    </th>
    <th class="cellrowborder" valign="top" width="25%" id="mcps1.1.5.1.2"><p id="p62811285198"><a name="p62811285198"></a><a name="p62811285198"></a>类型</p>
    </th>
    <th class="cellrowborder" valign="top" width="15%" id="mcps1.1.5.1.3"><p id="p1728152871920"><a name="p1728152871920"></a><a name="p1728152871920"></a>必填(M)/选填(O)</p>
    </th>
    <th class="cellrowborder" valign="top" width="40%" id="mcps1.1.5.1.4"><p id="p1028114288195"><a name="p1028114288195"></a><a name="p1028114288195"></a>说明</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row628115288197"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.5.1.1 "><p id="p202811928111917"><a name="p202811928111917"></a><a name="p202811928111917"></a>url</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.2 "><p id="p12811028161919"><a name="p12811028161919"></a><a name="p12811028161919"></a>string</p>
    </td>
    <td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.5.1.3 "><p id="p7281142811919"><a name="p7281142811919"></a><a name="p7281142811919"></a>M</p>
    </td>
    <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p8281828151915"><a name="p8281828151915"></a><a name="p8281828151915"></a>本地缓存资源对应的URL。</p>
    </td>
    </tr>
    </tbody>
    </table>

-   返回参数
    -   true：存在本地缓存资源。
    -   false：不存在本地缓存资源。

-   示例代码

    ```
    readonly CacheManager xmlHttpRequestCacheManager = QG.GetCacheManager();
    public void CacheManagerHasCaChe()
    {
        bool hasCaChe = xmlHttpRequestCacheManager.HasCaChe("https://com.abc/sdsdds/hello.json");
        Debug.Log("CacheManager hasCache: " + hasCaChe);
    }
    ```

### void DeleteCache\(string url\)<a name="section353212338213"></a>

-   描述

    删除URL对应的本地缓存资源。

-   请求参数

    <a name="table28084319227"></a>
    <table><thead align="left"><tr id="row6808838224"><th class="cellrowborder" valign="top" width="20%" id="mcps1.1.5.1.1"><p id="p12808143192212"><a name="p12808143192212"></a><a name="p12808143192212"></a>参数</p>
    </th>
    <th class="cellrowborder" valign="top" width="25%" id="mcps1.1.5.1.2"><p id="p480853192220"><a name="p480853192220"></a><a name="p480853192220"></a>类型</p>
    </th>
    <th class="cellrowborder" valign="top" width="15%" id="mcps1.1.5.1.3"><p id="p280853102211"><a name="p280853102211"></a><a name="p280853102211"></a>必填(M)/选填(O)</p>
    </th>
    <th class="cellrowborder" valign="top" width="40%" id="mcps1.1.5.1.4"><p id="p188085322215"><a name="p188085322215"></a><a name="p188085322215"></a>说明</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row1780813372213"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.5.1.1 "><p id="p88089315225"><a name="p88089315225"></a><a name="p88089315225"></a>url</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.2 "><p id="p1880813142215"><a name="p1880813142215"></a><a name="p1880813142215"></a>string</p>
    </td>
    <td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.5.1.3 "><p id="p1980893182211"><a name="p1980893182211"></a><a name="p1980893182211"></a>M</p>
    </td>
    <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p14189163812215"><a name="p14189163812215"></a><a name="p14189163812215"></a>本地缓存资源对应的URL。</p>
    </td>
    </tr>
    </tbody>
    </table>

-   示例代码

    ```
    readonly CacheManager xmlHttpRequestCacheManager = QG.GetCacheManager();
    public void CacheManagerDeleteCache()
    {
        Debug.Log("CacheManager DeleteCache.");
        xmlHttpRequestCacheManager.DeleteCache("https://com.abc/sdsdds/hello.json");
    }
    ```

### void ClearLru\(\)<a name="section3452055112210"></a>

-   描述

    触发缓存淘汰策略删除本地缓存。

-   示例代码

    ```
    readonly CacheManager xmlHttpRequestCacheManager = QG.GetCacheManager();
    public void CacheManagerClearLru()
    {
        Debug.Log("CacheManager ClearLru.");
        xmlHttpRequestCacheManager.ClearLru();
    }
    ```

