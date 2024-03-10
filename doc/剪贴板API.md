# 剪贴板API<a name="ZH-CN_TOPIC_0000001763928353"></a>

-   [接口定义](#section183503126613)
    -   [static void GetClipboardData\(GetClipboardDataOption getClipboardDataOption\)](#section1593515114262)
    -   [static void SetClipboardData\(SetClipboardDataOption setClipboardDataOption\)](#section15285153592911)

## 接口定义<a name="section183503126613"></a>

<a name="table892310973612"></a>
<table><thead align="left"><tr id="row19232993618"><th class="cellrowborder" valign="top" width="50%" id="mcps1.1.3.1.1"><p id="p49246933615"><a name="p49246933615"></a><a name="p49246933615"></a>接口</p>
</th>
<th class="cellrowborder" valign="top" width="50%" id="mcps1.1.3.1.2"><p id="p592499133614"><a name="p592499133614"></a><a name="p592499133614"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="row19241298367"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.1 "><p id="p4491115132110"><a name="p4491115132110"></a><a name="p4491115132110"></a><a href="#section1593515114262">static void GetClipboardData(GetClipboardDataOption getClipboardDataOption)</a></p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.2 "><p id="p348121518218"><a name="p348121518218"></a><a name="p348121518218"></a>获取系统剪贴板的内容。</p>
</td>
</tr>
<tr id="row12819171617259"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.1 "><p id="p9820141618252"><a name="p9820141618252"></a><a name="p9820141618252"></a><a href="#section15285153592911">static void SetClipboardData(SetClipboardDataOption setClipboardDataOption)</a></p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.2 "><p id="p1882015167259"><a name="p1882015167259"></a><a name="p1882015167259"></a>设置系统剪贴板的内容。</p>
</td>
</tr>
</tbody>
</table>

### static void GetClipboardData\(GetClipboardDataOption getClipboardDataOption\)<a name="section1593515114262"></a>

-   描述

    获取系统剪贴板的内容。

-   请求参数GetClipboardDataOption

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
    <tbody><tr id="row1780813372213"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.5.1.1 "><p id="p3366132612283"><a name="p3366132612283"></a><a name="p3366132612283"></a>success</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.2 "><p id="p13760195217208"><a name="p13760195217208"></a><a name="p13760195217208"></a>Action&lt;<a href="#li1758812573711">GetClipboardDataSuccessResult</a>&gt;</p>
    </td>
    <td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.5.1.3 "><p id="p1663873252810"><a name="p1663873252810"></a><a name="p1663873252810"></a>O</p>
    </td>
    <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p736652612816"><a name="p736652612816"></a><a name="p736652612816"></a>接口调用成功的回调函数。</p>
    </td>
    </tr>
    <tr id="row31489416282"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.5.1.1 "><p id="p12366226102819"><a name="p12366226102819"></a><a name="p12366226102819"></a>fail</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.2 "><p id="p207591452112017"><a name="p207591452112017"></a><a name="p207591452112017"></a>Action</p>
    </td>
    <td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.5.1.3 "><p id="p14637183292819"><a name="p14637183292819"></a><a name="p14637183292819"></a>O</p>
    </td>
    <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p20366126192819"><a name="p20366126192819"></a><a name="p20366126192819"></a>接口调用失败的回调函数。</p>
    </td>
    </tr>
    <tr id="row16614752285"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.5.1.1 "><p id="p1336615265283"><a name="p1336615265283"></a><a name="p1336615265283"></a>complete</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.2 "><p id="p573915212202"><a name="p573915212202"></a><a name="p573915212202"></a>Action</p>
    </td>
    <td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.5.1.3 "><p id="p063723282815"><a name="p063723282815"></a><a name="p063723282815"></a>O</p>
    </td>
    <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p236712269287"><a name="p236712269287"></a><a name="p236712269287"></a>若有函数传入，将在成功、失败后调用该函数。</p>
    </td>
    </tr>
    </tbody>
    </table>

    -   <a name="li1758812573711"></a>GetClipboardDataSuccessResult

        <a name="table1091545715195"></a>
        <table><thead align="left"><tr id="row9916135720192"><th class="cellrowborder" valign="top" width="25%" id="mcps1.1.4.1.1"><p id="p1891613578199"><a name="p1891613578199"></a><a name="p1891613578199"></a>参数</p>
        </th>
        <th class="cellrowborder" valign="top" width="25%" id="mcps1.1.4.1.2"><p id="p1391635731917"><a name="p1391635731917"></a><a name="p1391635731917"></a>类型</p>
        </th>
        <th class="cellrowborder" valign="top" width="50%" id="mcps1.1.4.1.3"><p id="p29161057161919"><a name="p29161057161919"></a><a name="p29161057161919"></a>说明</p>
        </th>
        </tr>
        </thead>
        <tbody><tr id="row199161857101915"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p491611573193"><a name="p491611573193"></a><a name="p491611573193"></a>data</p>
        </td>
        <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p591625731920"><a name="p591625731920"></a><a name="p591625731920"></a>string</p>
        </td>
        <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p193571054201"><a name="p193571054201"></a><a name="p193571054201"></a>剪贴板内容。</p>
        </td>
        </tr>
        </tbody>
        </table>

-   示例代码

    ```
    public void GetClipboardData()
    {
        Debug.Log("GetClipboardData.");
        GetClipboardDataOption getClipboardDataOption = new GetClipboardDataOption
        {
            success = (res) =>
            {
                Debug.Log("GetClipboardDataOption success." + res.data);
            },
            fail = () => { Debug.Log("GetClipboardDataOption fail."); },
            complete = () => { Debug.Log("GetClipboardDataOption Complete."); }
        };
        QG.GetClipboardData(getClipboardDataOption);
    } 
    ```

### static void SetClipboardData\(SetClipboardDataOption setClipboardDataOption\)<a name="section15285153592911"></a>

-   描述

    设置系统剪贴板的内容。

-   请求参数SetClipboardDataOption

    <a name="table8103141513011"></a>
    <table><thead align="left"><tr id="row2010381516306"><th class="cellrowborder" valign="top" width="20%" id="mcps1.1.5.1.1"><p id="p6103151519309"><a name="p6103151519309"></a><a name="p6103151519309"></a>参数</p>
    </th>
    <th class="cellrowborder" valign="top" width="25%" id="mcps1.1.5.1.2"><p id="p1110316158301"><a name="p1110316158301"></a><a name="p1110316158301"></a>类型</p>
    </th>
    <th class="cellrowborder" valign="top" width="15%" id="mcps1.1.5.1.3"><p id="p101031215183012"><a name="p101031215183012"></a><a name="p101031215183012"></a>必填(M)/选填(O)</p>
    </th>
    <th class="cellrowborder" valign="top" width="40%" id="mcps1.1.5.1.4"><p id="p310311157307"><a name="p310311157307"></a><a name="p310311157307"></a>说明</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row453620103019"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.5.1.1 "><p id="p95322017306"><a name="p95322017306"></a><a name="p95322017306"></a>data</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.2 "><p id="p353172083014"><a name="p353172083014"></a><a name="p353172083014"></a>string</p>
    </td>
    <td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.5.1.3 "><p id="p155382015302"><a name="p155382015302"></a><a name="p155382015302"></a>M</p>
    </td>
    <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p16531120123015"><a name="p16531120123015"></a><a name="p16531120123015"></a>剪贴板的内容。</p>
    </td>
    </tr>
    <tr id="row510381516301"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.5.1.1 "><p id="p141031215193018"><a name="p141031215193018"></a><a name="p141031215193018"></a>success</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.2 "><p id="p13912815102119"><a name="p13912815102119"></a><a name="p13912815102119"></a>Action</p>
    </td>
    <td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.5.1.3 "><p id="p1610361543013"><a name="p1610361543013"></a><a name="p1610361543013"></a>O</p>
    </td>
    <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p1910391510306"><a name="p1910391510306"></a><a name="p1910391510306"></a>接口调用成功的回调函数。</p>
    </td>
    </tr>
    <tr id="row4103181593017"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.5.1.1 "><p id="p8103215183018"><a name="p8103215183018"></a><a name="p8103215183018"></a>fail</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.2 "><p id="p5912171572114"><a name="p5912171572114"></a><a name="p5912171572114"></a>Action</p>
    </td>
    <td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.5.1.3 "><p id="p16103131543020"><a name="p16103131543020"></a><a name="p16103131543020"></a>O</p>
    </td>
    <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p310351523011"><a name="p310351523011"></a><a name="p310351523011"></a>接口调用失败的回调函数。</p>
    </td>
    </tr>
    <tr id="row1510311512305"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.5.1.1 "><p id="p31032150303"><a name="p31032150303"></a><a name="p31032150303"></a>complete</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.2 "><p id="p591211514216"><a name="p591211514216"></a><a name="p591211514216"></a>Action</p>
    </td>
    <td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.5.1.3 "><p id="p12103191516309"><a name="p12103191516309"></a><a name="p12103191516309"></a>O</p>
    </td>
    <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p1510471523016"><a name="p1510471523016"></a><a name="p1510471523016"></a>若有函数传入，将在成功、失败后调用该函数。</p>
    </td>
    </tr>
    </tbody>
    </table>

-   示例代码

    ```
    public void SetClipboardData()
    {
        Debug.Log("SetClipboardData.");
        SetClipboardDataOption setClipboardDataOption = new SetClipboardDataOption
        {
            data = "default",
            success = () => { Debug.Log("SetClipboardDataOption success."); },
            fail = () => { Debug.Log("SetClipboardDataOption fail."); },
            complete = () => { Debug.Log("SetClipboardDataOption Complete."); }
        };
        QG.SetClipboardData(setClipboardDataOption);
    }
    ```

