# 全局错误事件API<a name="ZH-CN_TOPIC_0000001717115132"></a>

-   [接口定义](#section183503126613)
    -   [static void OnError\(Action<OnErrorResult\> action\)](#section1394664031014)
    -   [static void OffError\(Action<OnErrorResult\> action\)](#section1216183815127)

## 接口定义<a name="section183503126613"></a>

<a name="table892310973612"></a>
<table><thead align="left"><tr id="row19232993618"><th class="cellrowborder" valign="top" width="50%" id="mcps1.1.3.1.1"><p id="p49246933615"><a name="p49246933615"></a><a name="p49246933615"></a>接口</p>
</th>
<th class="cellrowborder" valign="top" width="50%" id="mcps1.1.3.1.2"><p id="p592499133614"><a name="p592499133614"></a><a name="p592499133614"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="row19241298367"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.1 "><p id="p948019453404"><a name="p948019453404"></a><a name="p948019453404"></a><a href="#section1394664031014">static void OnError(Action&lt;OnErrorResult&gt; action)</a></p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.2 "><p id="p1347924574015"><a name="p1347924574015"></a><a name="p1347924574015"></a>监听全局错误事件。</p>
</td>
</tr>
<tr id="row043620214017"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.1 "><p id="p144784458407"><a name="p144784458407"></a><a name="p144784458407"></a><a href="#section1216183815127">static void OffError(Action&lt;OnErrorResult&gt; action)</a></p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.2 "><p id="p16475134510409"><a name="p16475134510409"></a><a name="p16475134510409"></a>取消监听全局错误事件。</p>
</td>
</tr>
</tbody>
</table>

### static void OnError\(Action<OnErrorResult\> action\)<a name="section1394664031014"></a>

-   描述

    监听全局错误事件。

-   请求参数

    <a name="table1771031174119"></a>
    <table><thead align="left"><tr id="row127115311412"><th class="cellrowborder" valign="top" width="20%" id="mcps1.1.5.1.1"><p id="p207118312412"><a name="p207118312412"></a><a name="p207118312412"></a>参数</p>
    </th>
    <th class="cellrowborder" valign="top" width="25%" id="mcps1.1.5.1.2"><p id="p107153114115"><a name="p107153114115"></a><a name="p107153114115"></a>类型</p>
    </th>
    <th class="cellrowborder" valign="top" width="15%" id="mcps1.1.5.1.3"><p id="p117114319410"><a name="p117114319410"></a><a name="p117114319410"></a>必填(M)/选填(O)</p>
    </th>
    <th class="cellrowborder" valign="top" width="40%" id="mcps1.1.5.1.4"><p id="p167183117412"><a name="p167183117412"></a><a name="p167183117412"></a>说明</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row1871143114119"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.5.1.1 "><p id="p271203120410"><a name="p271203120410"></a><a name="p271203120410"></a>action</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.2 "><p id="p171331174119"><a name="p171331174119"></a><a name="p171331174119"></a>Action&lt;<a href="#li116945035018">OnErrorResult</a>&gt;</p>
    </td>
    <td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.5.1.3 "><p id="p19711731194115"><a name="p19711731194115"></a><a name="p19711731194115"></a>M</p>
    </td>
    <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p17193120412"><a name="p17193120412"></a><a name="p17193120412"></a>监听全局错误事件结果。</p>
    </td>
    </tr>
    </tbody>
    </table>

    -   <a name="li116945035018"></a>OnErrorResult

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
        <tbody><tr id="row17278907593"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.5.1.1 "><p id="p8449142317118"><a name="p8449142317118"></a><a name="p8449142317118"></a>message</p>
        </td>
        <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.2 "><p id="p12449142319118"><a name="p12449142319118"></a><a name="p12449142319118"></a>string</p>
        </td>
        <td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.5.1.3 "><p id="p84481223131120"><a name="p84481223131120"></a><a name="p84481223131120"></a>M</p>
        </td>
        <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p19428152313116"><a name="p19428152313116"></a><a name="p19428152313116"></a>错误信息。</p>
        </td>
        </tr>
        <tr id="row726011240119"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.5.1.1 "><p id="p626011244112"><a name="p626011244112"></a><a name="p626011244112"></a>stack</p>
        </td>
        <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.2 "><p id="p13260424131114"><a name="p13260424131114"></a><a name="p13260424131114"></a>string</p>
        </td>
        <td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.5.1.3 "><p id="p326010249113"><a name="p326010249113"></a><a name="p326010249113"></a>M</p>
        </td>
        <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p132605247116"><a name="p132605247116"></a><a name="p132605247116"></a>错误调用堆栈。</p>
        </td>
        </tr>
        </tbody>
        </table>

-   示例代码

    ```
    private Action<OnErrorResult> _errorAction = null;
    public void OnError()
    {
        Debug.Log("SystemEventsScene OnError.");
        if (_errorAction == null)
        {
            _errorAction = new Action<OnErrorResult>(_onError);
            QG.OnError(_errorAction);
        }
        else
        {
            QG.OffError(_errorAction);
            _errorAction = null;
        }
    }
    private void _onError(OnErrorResult res)
    {
        string obj = JsonUtility.ToJson(res);
        Debug.Log("on Error" + obj);
    }
    ```

### static void OffError\(Action<OnErrorResult\> action\)<a name="section1216183815127"></a>

-   描述

    取消监听全局错误事件。

-   请求参数

    <a name="table124411935185012"></a>
    <table><thead align="left"><tr id="row12441183525014"><th class="cellrowborder" valign="top" width="20%" id="mcps1.1.5.1.1"><p id="p94411359503"><a name="p94411359503"></a><a name="p94411359503"></a>参数</p>
    </th>
    <th class="cellrowborder" valign="top" width="25%" id="mcps1.1.5.1.2"><p id="p1441203565014"><a name="p1441203565014"></a><a name="p1441203565014"></a>类型</p>
    </th>
    <th class="cellrowborder" valign="top" width="15%" id="mcps1.1.5.1.3"><p id="p1644193545017"><a name="p1644193545017"></a><a name="p1644193545017"></a>必填(M)/选填(O)</p>
    </th>
    <th class="cellrowborder" valign="top" width="40%" id="mcps1.1.5.1.4"><p id="p9441193585017"><a name="p9441193585017"></a><a name="p9441193585017"></a>说明</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row18441435195017"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.5.1.1 "><p id="p19441143585017"><a name="p19441143585017"></a><a name="p19441143585017"></a>action</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.2 "><p id="p944112352502"><a name="p944112352502"></a><a name="p944112352502"></a>Action&lt;<a href="#li116945035018">OnErrorResult</a>&gt;</p>
    </td>
    <td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.5.1.3 "><p id="p444143510509"><a name="p444143510509"></a><a name="p444143510509"></a>M</p>
    </td>
    <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p7441123595012"><a name="p7441123595012"></a><a name="p7441123595012"></a>OnError传入的监听函数。不传此参数将默认传null，则移除所有监听函数。</p>
    </td>
    </tr>
    </tbody>
    </table>

