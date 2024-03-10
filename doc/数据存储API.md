# 数据存储API<a name="ZH-CN_TOPIC_0000001646566996"></a>

-   [LocalStorage类的属性和接口定义](#section75725131222)
    -   [Length](#section1697222151314)
    -   [static void Clear\(\)](#section2035405572817)
    -   [static void RemoveItem\(string key\)](#section1591718211292)
    -   [static void SetItem\(string key, string value\)](#section10159244102917)
    -   [static string GetItem\(string key\)](#section070295602911)
    -   [static string Key\(int index\)](#section1967251243017)

## LocalStorage类的属性和接口定义<a name="section75725131222"></a>

<a name="table12871118202312"></a>
<table><thead align="left"><tr id="row887161862317"><th class="cellrowborder" valign="top" width="20%" id="mcps1.1.4.1.1"><p id="p17784191719183"><a name="p17784191719183"></a><a name="p17784191719183"></a>分类</p>
</th>
<th class="cellrowborder" valign="top" width="40%" id="mcps1.1.4.1.2"><p id="p1087221813238"><a name="p1087221813238"></a><a name="p1087221813238"></a>定义</p>
</th>
<th class="cellrowborder" valign="top" width="40%" id="mcps1.1.4.1.3"><p id="p13872151862315"><a name="p13872151862315"></a><a name="p13872151862315"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="row1027385203615"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.4.1.1 "><p id="p14784417181814"><a name="p14784417181814"></a><a name="p14784417181814"></a>属性</p>
</td>
<td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.4.1.2 "><p id="p1343764061214"><a name="p1343764061214"></a><a name="p1343764061214"></a><a href="#section1697222151314">Length</a></p>
</td>
<td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.4.1.3 "><p id="p943704010120"><a name="p943704010120"></a><a name="p943704010120"></a>用于获取存储在localStorage对象中的数据项数量（只读）。</p>
</td>
</tr>
<tr id="row08721518152316"><td class="cellrowborder" rowspan="5" valign="top" width="20%" headers="mcps1.1.4.1.1 "><p id="p178441718186"><a name="p178441718186"></a><a name="p178441718186"></a>接口</p>
</td>
<td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.4.1.2 "><p id="p4921138162316"><a name="p4921138162316"></a><a name="p4921138162316"></a><a href="#section2035405572817">static void Clear()</a></p>
</td>
<td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.4.1.3 "><p id="p2092033812314"><a name="p2092033812314"></a><a name="p2092033812314"></a>清空localStorage中的数据。</p>
</td>
</tr>
<tr id="row1797719202232"><td class="cellrowborder" valign="top" headers="mcps1.1.4.1.1 "><p id="p1897822016236"><a name="p1897822016236"></a><a name="p1897822016236"></a><a href="#section1591718211292">static void RemoveItem(string key)</a></p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.4.1.2 "><p id="p897810203231"><a name="p897810203231"></a><a name="p897810203231"></a>根据key删除单条存在localStorage中的数据。</p>
</td>
</tr>
<tr id="row929522282314"><td class="cellrowborder" valign="top" headers="mcps1.1.4.1.1 "><p id="p18295162292315"><a name="p18295162292315"></a><a name="p18295162292315"></a><a href="#section10159244102917">static void SetItem(string key, string value)</a></p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.4.1.2 "><p id="p629562272310"><a name="p629562272310"></a><a name="p629562272310"></a>保存数据到localStorage。</p>
</td>
</tr>
<tr id="row1322182413238"><td class="cellrowborder" valign="top" headers="mcps1.1.4.1.1 "><p id="p222110244232"><a name="p222110244232"></a><a name="p222110244232"></a><a href="#section070295602911">static string GetItem(string key)</a></p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.4.1.2 "><p id="p142218241237"><a name="p142218241237"></a><a name="p142218241237"></a>根据key查询单条存在localStorage中的数据。</p>
</td>
</tr>
<tr id="row75515155245"><td class="cellrowborder" valign="top" headers="mcps1.1.4.1.1 "><p id="p0551191512417"><a name="p0551191512417"></a><a name="p0551191512417"></a><a href="#section1967251243017">static string Key(int index)</a></p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.4.1.2 "><p id="p105511115152413"><a name="p105511115152413"></a><a name="p105511115152413"></a>根据index下标查询对应的key数据。</p>
</td>
</tr>
</tbody>
</table>

### Length<a name="section1697222151314"></a>

-   描述

    用于获取存储在 localStorage 对象中的数据项数量（只读）

-   示例代码

    ```
    Debug.Log("Length: " + QG.LocalStorage.Length);
    ```

### static void Clear\(\)<a name="section2035405572817"></a>

-   描述

    清空localStorage中的数据。

-   示例代码

    ```
    QG.LocalStorage.Clear();
    ```

### static void RemoveItem\(string key\)<a name="section1591718211292"></a>

-   描述

    根据key删除单条存在localStorage中的数据。

-   请求参数

    <a name="table1213561513532"></a>
    <table><thead align="left"><tr id="row413621535311"><th class="cellrowborder" valign="top" width="20%" id="mcps1.1.5.1.1"><p id="p8136141535313"><a name="p8136141535313"></a><a name="p8136141535313"></a>参数</p>
    </th>
    <th class="cellrowborder" valign="top" width="25%" id="mcps1.1.5.1.2"><p id="p14136101505312"><a name="p14136101505312"></a><a name="p14136101505312"></a>类型</p>
    </th>
    <th class="cellrowborder" valign="top" width="15%" id="mcps1.1.5.1.3"><p id="p101365155537"><a name="p101365155537"></a><a name="p101365155537"></a>必填(M)/选填(O)</p>
    </th>
    <th class="cellrowborder" valign="top" width="40%" id="mcps1.1.5.1.4"><p id="p4136215155310"><a name="p4136215155310"></a><a name="p4136215155310"></a>说明</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row4136201595312"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.5.1.1 "><p id="p6877101815320"><a name="p6877101815320"></a><a name="p6877101815320"></a>key</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.2 "><p id="p13876101817537"><a name="p13876101817537"></a><a name="p13876101817537"></a>string</p>
    </td>
    <td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.5.1.3 "><p id="p1313711516535"><a name="p1313711516535"></a><a name="p1313711516535"></a>M</p>
    </td>
    <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p1092182125314"><a name="p1092182125314"></a><a name="p1092182125314"></a>要删除的数据的Key值。</p>
    </td>
    </tr>
    </tbody>
    </table>

-   示例代码

    ```
    public void RemoveItem()
    {
        string key = "key";
        QG.LocalStorage.RemoveItem(key);
    }
    ```

### static void SetItem\(string key, string value\)<a name="section10159244102917"></a>

-   描述

    保存数据到localStorage。

-   请求参数

    <a name="table68765418545"></a>
    <table><thead align="left"><tr id="row8877124125415"><th class="cellrowborder" valign="top" width="20%" id="mcps1.1.5.1.1"><p id="p1487710414540"><a name="p1487710414540"></a><a name="p1487710414540"></a>参数</p>
    </th>
    <th class="cellrowborder" valign="top" width="25%" id="mcps1.1.5.1.2"><p id="p2877741115419"><a name="p2877741115419"></a><a name="p2877741115419"></a>类型</p>
    </th>
    <th class="cellrowborder" valign="top" width="15%" id="mcps1.1.5.1.3"><p id="p18877541105415"><a name="p18877541105415"></a><a name="p18877541105415"></a>必填(M)/选填(O)</p>
    </th>
    <th class="cellrowborder" valign="top" width="40%" id="mcps1.1.5.1.4"><p id="p787754165410"><a name="p787754165410"></a><a name="p787754165410"></a>说明</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row78771941185414"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.5.1.1 "><p id="p1243665405410"><a name="p1243665405410"></a><a name="p1243665405410"></a>key</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.2 "><p id="p204368542546"><a name="p204368542546"></a><a name="p204368542546"></a>string</p>
    </td>
    <td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.5.1.3 "><p id="p713465945410"><a name="p713465945410"></a><a name="p713465945410"></a>M</p>
    </td>
    <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p1443615413543"><a name="p1443615413543"></a><a name="p1443615413543"></a>要存到localStorage中的数据的key。</p>
    </td>
    </tr>
    <tr id="row15328134410540"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.5.1.1 "><p id="p1643665413545"><a name="p1643665413545"></a><a name="p1643665413545"></a>value</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.2 "><p id="p18436105414547"><a name="p18436105414547"></a><a name="p18436105414547"></a>string</p>
    </td>
    <td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.5.1.3 "><p id="p81331359145420"><a name="p81331359145420"></a><a name="p81331359145420"></a>M</p>
    </td>
    <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p8436135465411"><a name="p8436135465411"></a><a name="p8436135465411"></a>要存到localStorage中的数据的值。</p>
    </td>
    </tr>
    </tbody>
    </table>

-   示例代码

    ```
    public void SetItem()
    {
        string key = "key";
        string value = "value";
        QG.LocalStorage.SetItem(key, value);
    }
    ```

### static string GetItem\(string key\)<a name="section070295602911"></a>

-   描述

    根据key查询单条存在localStorage中的数据。

-   请求参数

    <a name="table165321712165611"></a>
    <table><thead align="left"><tr id="row1353251265618"><th class="cellrowborder" valign="top" width="20%" id="mcps1.1.5.1.1"><p id="p25331312165611"><a name="p25331312165611"></a><a name="p25331312165611"></a>参数</p>
    </th>
    <th class="cellrowborder" valign="top" width="25%" id="mcps1.1.5.1.2"><p id="p2533712175610"><a name="p2533712175610"></a><a name="p2533712175610"></a>类型</p>
    </th>
    <th class="cellrowborder" valign="top" width="15%" id="mcps1.1.5.1.3"><p id="p153331211566"><a name="p153331211566"></a><a name="p153331211566"></a>必填(M)/选填(O)</p>
    </th>
    <th class="cellrowborder" valign="top" width="40%" id="mcps1.1.5.1.4"><p id="p11533111212566"><a name="p11533111212566"></a><a name="p11533111212566"></a>说明</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row12533121275616"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.5.1.1 "><p id="p353321235613"><a name="p353321235613"></a><a name="p353321235613"></a>key</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.2 "><p id="p1853311210569"><a name="p1853311210569"></a><a name="p1853311210569"></a>string</p>
    </td>
    <td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.5.1.3 "><p id="p16533111245611"><a name="p16533111245611"></a><a name="p16533111245611"></a>M</p>
    </td>
    <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p13533111295619"><a name="p13533111295619"></a><a name="p13533111295619"></a>存在localStorage中数据的key值。</p>
    </td>
    </tr>
    </tbody>
    </table>

-   返回参数

    key的对应的value值。

-   示例代码

    ```
    public void GetItem()
    {
        string key = "key";
        QG.LocalStorage.GetItem(key);
    }
    ```

### static string Key\(int index\)<a name="section1967251243017"></a>

-   描述

    根据index下标查询对应的key数据。

-   请求参数

    <a name="table927304416578"></a>
    <table><thead align="left"><tr id="row16274244185715"><th class="cellrowborder" valign="top" width="20%" id="mcps1.1.5.1.1"><p id="p17274204455719"><a name="p17274204455719"></a><a name="p17274204455719"></a>参数</p>
    </th>
    <th class="cellrowborder" valign="top" width="25%" id="mcps1.1.5.1.2"><p id="p6274164495719"><a name="p6274164495719"></a><a name="p6274164495719"></a>类型</p>
    </th>
    <th class="cellrowborder" valign="top" width="15%" id="mcps1.1.5.1.3"><p id="p102742446573"><a name="p102742446573"></a><a name="p102742446573"></a>必填(M)/选填(O)</p>
    </th>
    <th class="cellrowborder" valign="top" width="40%" id="mcps1.1.5.1.4"><p id="p127415442571"><a name="p127415442571"></a><a name="p127415442571"></a>说明</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row6274164419578"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.5.1.1 "><p id="p727584455710"><a name="p727584455710"></a><a name="p727584455710"></a>index</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.2 "><p id="p162903541573"><a name="p162903541573"></a><a name="p162903541573"></a>int</p>
    </td>
    <td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.5.1.3 "><p id="p8275184475716"><a name="p8275184475716"></a><a name="p8275184475716"></a>M</p>
    </td>
    <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p1927524495717"><a name="p1927524495717"></a><a name="p1927524495717"></a>要获取数据的下标。</p>
    </td>
    </tr>
    </tbody>
    </table>

-   返回参数

    index对应的value值。

-   示例代码

    ```
    public void Key()
    {
        int index = 1; // 索引的取值必须小于LocalStorage.Length
        QG.LocalStorage.Key(index);
    }
    ```

