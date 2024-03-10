# 触控API<a name="ZH-CN_TOPIC_0000001716328476"></a>

-   [接口定义](#section183503126613)
    -   [static void OnTouchStart\(Action<OnTouchStartCallbackResult\> result\)](#section151611052124210)
    -   [static void OffTouchStart\(Action<OnTouchStartCallbackResult\> result\)](#section82589364514)
    -   [static void OnTouchMove\(Action<OnTouchStartCallbackResult\> result\)](#section1910912016479)
    -   [static void OffTouchMove\(Action<OnTouchStartCallbackResult\> result\)](#section69341543105219)
    -   [static void OnTouchEnd\(Action<OnTouchStartCallbackResult\> result\)](#section127818534535)
    -   [static void OffTouchEnd\(Action<OnTouchStartCallbackResult\> result\)](#section812612585513)
    -   [static void OnTouchCancel\(Action<OnTouchStartCallbackResult\> result\)](#section81460493556)
    -   [static void OffTouchCancel\(Action<OnTouchStartCallbackResult\> result\)](#section52841826115615)

## 接口定义<a name="section183503126613"></a>

<a name="table892310973612"></a>
<table><thead align="left"><tr id="row19232993618"><th class="cellrowborder" valign="top" width="50%" id="mcps1.1.3.1.1"><p id="p49246933615"><a name="p49246933615"></a><a name="p49246933615"></a>接口</p>
</th>
<th class="cellrowborder" valign="top" width="50%" id="mcps1.1.3.1.2"><p id="p592499133614"><a name="p592499133614"></a><a name="p592499133614"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="row19241298367"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.1 "><p id="p4491115132110"><a name="p4491115132110"></a><a name="p4491115132110"></a><a href="#section151611052124210">static void OnTouchStart(Action&lt;OnTouchStartCallbackResult&gt; result)</a></p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.2 "><p id="p348121518218"><a name="p348121518218"></a><a name="p348121518218"></a>监听开始触摸事件。</p>
</td>
</tr>
<tr id="row18941922133510"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.1 "><p id="p15941222123513"><a name="p15941222123513"></a><a name="p15941222123513"></a><a href="#section82589364514">static void OffTouchStart(Action&lt;OnTouchStartCallbackResult&gt; result)</a></p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.2 "><p id="p14941132220352"><a name="p14941132220352"></a><a name="p14941132220352"></a>取消监听开始触摸事件。</p>
</td>
</tr>
<tr id="row9811835193518"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.1 "><p id="p19822035143512"><a name="p19822035143512"></a><a name="p19822035143512"></a><a href="#section1910912016479">static void OnTouchMove(Action&lt;OnTouchStartCallbackResult&gt; result)</a></p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.2 "><p id="p482193543511"><a name="p482193543511"></a><a name="p482193543511"></a>监听触点移动事件。</p>
</td>
</tr>
<tr id="row68971463352"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.1 "><p id="p108971461351"><a name="p108971461351"></a><a name="p108971461351"></a><a href="#section69341543105219">static void OffTouchMove(Action&lt;OnTouchStartCallbackResult&gt; result)</a></p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.2 "><p id="p6897144610352"><a name="p6897144610352"></a><a name="p6897144610352"></a>取消监听触点移动事件。</p>
</td>
</tr>
<tr id="row1684135810354"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.1 "><p id="p48411158143512"><a name="p48411158143512"></a><a name="p48411158143512"></a><a href="#section127818534535">static void OnTouchEnd(Action&lt;OnTouchStartCallbackResult&gt; result)</a></p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.2 "><p id="p1284135853515"><a name="p1284135853515"></a><a name="p1284135853515"></a>监听触摸结束事件。</p>
</td>
</tr>
<tr id="row2808332133615"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.1 "><p id="p168089329363"><a name="p168089329363"></a><a name="p168089329363"></a><a href="#section812612585513">static void OffTouchEnd(Action&lt;OnTouchStartCallbackResult&gt; result)</a></p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.2 "><p id="p1080873213368"><a name="p1080873213368"></a><a name="p1080873213368"></a>取消监听触摸结束事件。</p>
</td>
</tr>
<tr id="row85286432364"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.1 "><p id="p1652818431363"><a name="p1652818431363"></a><a name="p1652818431363"></a><a href="#section81460493556">static void OnTouchCancel(Action&lt;OnTouchStartCallbackResult&gt; result)</a></p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.2 "><p id="p3528144353615"><a name="p3528144353615"></a><a name="p3528144353615"></a>监听触点失效事件。</p>
</td>
</tr>
<tr id="row1672010575368"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.1 "><p id="p19720135716362"><a name="p19720135716362"></a><a name="p19720135716362"></a><a href="#section52841826115615">static void OffTouchCancel(Action&lt;OnTouchStartCallbackResult&gt; result)</a></p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.2 "><p id="p20720357123610"><a name="p20720357123610"></a><a name="p20720357123610"></a>取消监听触点失效事件。</p>
</td>
</tr>
</tbody>
</table>

### static void OnTouchStart\(Action<OnTouchStartCallbackResult\> result\)<a name="section151611052124210"></a>

-   描述

    监听开始触摸事件。

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
    <tbody><tr id="row1871143114119"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.5.1.1 "><p id="p271203120410"><a name="p271203120410"></a><a name="p271203120410"></a>result</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.2 "><p id="p171331174119"><a name="p171331174119"></a><a name="p171331174119"></a>Action&lt;<a href="#li486995819372">OnTouchStartCallbackResult</a>&gt;</p>
    </td>
    <td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.5.1.3 "><p id="p19711731194115"><a name="p19711731194115"></a><a name="p19711731194115"></a>M</p>
    </td>
    <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p17193120412"><a name="p17193120412"></a><a name="p17193120412"></a>监听开始触摸事件结果。</p>
    </td>
    </tr>
    </tbody>
    </table>

    -   <a name="li486995819372"></a>OnTouchStartCallbackResult

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
        <tbody><tr id="row510381516301"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.5.1.1 "><p id="p74781057104913"><a name="p74781057104913"></a><a name="p74781057104913"></a>changedTouches</p>
        </td>
        <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.2 "><p id="p11478125715498"><a name="p11478125715498"></a><a name="p11478125715498"></a>List&lt;<a href="#li56808513329">Touch</a>&gt;</p>
        </td>
        <td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.5.1.3 "><p id="p2047875715494"><a name="p2047875715494"></a><a name="p2047875715494"></a>M</p>
        </td>
        <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p15478357184911"><a name="p15478357184911"></a><a name="p15478357184911"></a>触发此次事件的触摸点列表。</p>
        </td>
        </tr>
        <tr id="row4103181593017"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.5.1.1 "><p id="p54781557204915"><a name="p54781557204915"></a><a name="p54781557204915"></a>timeStamp</p>
        </td>
        <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.2 "><p id="p174781557124917"><a name="p174781557124917"></a><a name="p174781557124917"></a>long</p>
        </td>
        <td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.5.1.3 "><p id="p18478115710498"><a name="p18478115710498"></a><a name="p18478115710498"></a>M</p>
        </td>
        <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p447817574497"><a name="p447817574497"></a><a name="p447817574497"></a>事件触发的时间戳。</p>
        </td>
        </tr>
        <tr id="row1510311512305"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.5.1.1 "><p id="p9478357164913"><a name="p9478357164913"></a><a name="p9478357164913"></a>touches</p>
        </td>
        <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.2 "><p id="p8181607395"><a name="p8181607395"></a><a name="p8181607395"></a>List&lt;<a href="#li56808513329">Touch</a>&gt;</p>
        </td>
        <td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.5.1.3 "><p id="p2478125794911"><a name="p2478125794911"></a><a name="p2478125794911"></a>M</p>
        </td>
        <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p947855794915"><a name="p947855794915"></a><a name="p947855794915"></a>当前所有触摸点的列表。</p>
        </td>
        </tr>
        </tbody>
        </table>

        -   <a name="li56808513329"></a>Touch

            <a name="table196712218329"></a>
            <table><thead align="left"><tr id="row296762210323"><th class="cellrowborder" valign="top" width="20%" id="mcps1.1.5.1.1"><p id="p10967122213325"><a name="p10967122213325"></a><a name="p10967122213325"></a>参数</p>
            </th>
            <th class="cellrowborder" valign="top" width="25%" id="mcps1.1.5.1.2"><p id="p14967152218328"><a name="p14967152218328"></a><a name="p14967152218328"></a>类型</p>
            </th>
            <th class="cellrowborder" valign="top" width="15%" id="mcps1.1.5.1.3"><p id="p49671822133214"><a name="p49671822133214"></a><a name="p49671822133214"></a>必填(M)/选填(O)</p>
            </th>
            <th class="cellrowborder" valign="top" width="40%" id="mcps1.1.5.1.4"><p id="p109671225323"><a name="p109671225323"></a><a name="p109671225323"></a>说明</p>
            </th>
            </tr>
            </thead>
            <tbody><tr id="row149672220329"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.5.1.1 "><p id="p175012031153213"><a name="p175012031153213"></a><a name="p175012031153213"></a>clientX</p>
            </td>
            <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.2 "><p id="p450118314325"><a name="p450118314325"></a><a name="p450118314325"></a>float</p>
            </td>
            <td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.5.1.3 "><p id="p7967122163219"><a name="p7967122163219"></a><a name="p7967122163219"></a>M</p>
            </td>
            <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p33453313326"><a name="p33453313326"></a><a name="p33453313326"></a>触点相对于可见视区左边沿的X坐标。</p>
            </td>
            </tr>
            <tr id="row16967112216322"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.5.1.1 "><p id="p16500931113217"><a name="p16500931113217"></a><a name="p16500931113217"></a>clientY</p>
            </td>
            <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.2 "><p id="p10500231203210"><a name="p10500231203210"></a><a name="p10500231203210"></a>float</p>
            </td>
            <td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.5.1.3 "><p id="p159672022173215"><a name="p159672022173215"></a><a name="p159672022173215"></a>M</p>
            </td>
            <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p19120717340"><a name="p19120717340"></a><a name="p19120717340"></a>触点相对于可见视区下边沿的Y坐标。</p>
            </td>
            </tr>
            <tr id="row69686224327"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.5.1.1 "><p id="p149918313322"><a name="p149918313322"></a><a name="p149918313322"></a>identifier</p>
            </td>
            <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.2 "><p id="p24995313324"><a name="p24995313324"></a><a name="p24995313324"></a>int</p>
            </td>
            <td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.5.1.3 "><p id="p796832211326"><a name="p796832211326"></a><a name="p796832211326"></a>M</p>
            </td>
            <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p43215339326"><a name="p43215339326"></a><a name="p43215339326"></a>唯一标识符。一次触摸的整个过程中该标识符不变，用于判断是否为同一次触摸过程。</p>
            </td>
            </tr>
            <tr id="row15204193453214"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.5.1.1 "><p id="p122041342324"><a name="p122041342324"></a><a name="p122041342324"></a>pageX</p>
            </td>
            <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.2 "><p id="p92041034143210"><a name="p92041034143210"></a><a name="p92041034143210"></a>float</p>
            </td>
            <td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.5.1.3 "><p id="p9204183403217"><a name="p9204183403217"></a><a name="p9204183403217"></a>M</p>
            </td>
            <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p16204934193215"><a name="p16204934193215"></a><a name="p16204934193215"></a>触点相对于页面左边沿的X坐标。</p>
            </td>
            </tr>
            <tr id="row96541449183217"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.5.1.1 "><p id="p196542494324"><a name="p196542494324"></a><a name="p196542494324"></a>pageY</p>
            </td>
            <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.2 "><p id="p13654174923213"><a name="p13654174923213"></a><a name="p13654174923213"></a>float</p>
            </td>
            <td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.5.1.3 "><p id="p6654194915322"><a name="p6654194915322"></a><a name="p6654194915322"></a>M</p>
            </td>
            <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p17654134912325"><a name="p17654134912325"></a><a name="p17654134912325"></a>触点相对于页面下边沿的Y坐标。</p>
            </td>
            </tr>
            </tbody>
            </table>

-   示例代码

    ```
    private Action<OnTouchStartCallbackResult> _touchStartAction = null;
    public void OnTouchStart()
    {
        Debug.Log("TouchScene OnTouchStart.");
        if (_touchStartAction == null)
        {
            _touchStartAction = new Action<OnTouchStartCallbackResult>(_onTouchStart);
            QG.OnTouchStart(_touchStartAction);
        }
        else
        {
            QG.OffTouchStart(_touchStartAction);
            _touchStartAction = null;
        }
    }
    private void _onTouchStart(OnTouchStartCallbackResult res)
    {
        string obj = JsonUtility.ToJson(res);
        Debug.Log("_onTouchStart." + obj);
    }
    ```

### static void OffTouchStart\(Action<OnTouchStartCallbackResult\> result\)<a name="section82589364514"></a>

-   描述

    取消监听开始触摸事件。

-   请求参数

    <a name="table2075011710438"></a>
    <table><thead align="left"><tr id="row77504170435"><th class="cellrowborder" valign="top" width="20%" id="mcps1.1.5.1.1"><p id="p875021794313"><a name="p875021794313"></a><a name="p875021794313"></a>参数</p>
    </th>
    <th class="cellrowborder" valign="top" width="25%" id="mcps1.1.5.1.2"><p id="p175031744316"><a name="p175031744316"></a><a name="p175031744316"></a>类型</p>
    </th>
    <th class="cellrowborder" valign="top" width="15%" id="mcps1.1.5.1.3"><p id="p207501517174312"><a name="p207501517174312"></a><a name="p207501517174312"></a>必填(M)/选填(O)</p>
    </th>
    <th class="cellrowborder" valign="top" width="40%" id="mcps1.1.5.1.4"><p id="p47501717184318"><a name="p47501717184318"></a><a name="p47501717184318"></a>说明</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row875041764311"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.5.1.1 "><p id="p575051717437"><a name="p575051717437"></a><a name="p575051717437"></a>result</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.2 "><p id="p11339527165010"><a name="p11339527165010"></a><a name="p11339527165010"></a>Action&lt;<a href="#li486995819372">OnTouchStartCallbackResult</a>&gt;</p>
    </td>
    <td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.5.1.3 "><p id="p7751151774312"><a name="p7751151774312"></a><a name="p7751151774312"></a>M</p>
    </td>
    <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p12414755414"><a name="p12414755414"></a><a name="p12414755414"></a>OnTouchStart传入的监听函数。不传此参数将默认传null，则移除所有监听函数。</p>
    </td>
    </tr>
    </tbody>
    </table>

### static void OnTouchMove\(Action<OnTouchStartCallbackResult\> result\)<a name="section1910912016479"></a>

-   描述

    监听触点移动事件。

-   请求参数

    <a name="table887184634310"></a>
    <table><thead align="left"><tr id="row787184694314"><th class="cellrowborder" valign="top" width="20%" id="mcps1.1.5.1.1"><p id="p4871446174320"><a name="p4871446174320"></a><a name="p4871446174320"></a>参数</p>
    </th>
    <th class="cellrowborder" valign="top" width="25%" id="mcps1.1.5.1.2"><p id="p3871846124312"><a name="p3871846124312"></a><a name="p3871846124312"></a>类型</p>
    </th>
    <th class="cellrowborder" valign="top" width="15%" id="mcps1.1.5.1.3"><p id="p587112469438"><a name="p587112469438"></a><a name="p587112469438"></a>必填(M)/选填(O)</p>
    </th>
    <th class="cellrowborder" valign="top" width="40%" id="mcps1.1.5.1.4"><p id="p1587154684316"><a name="p1587154684316"></a><a name="p1587154684316"></a>说明</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row187124674314"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.5.1.1 "><p id="p5871194694314"><a name="p5871194694314"></a><a name="p5871194694314"></a>result</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.2 "><p id="p78713463436"><a name="p78713463436"></a><a name="p78713463436"></a>Action&lt;<a href="#li1248533915381">OnTouchStartCallbackResult</a>&gt;</p>
    </td>
    <td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.5.1.3 "><p id="p118717464437"><a name="p118717464437"></a><a name="p118717464437"></a>M</p>
    </td>
    <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p1087111465433"><a name="p1087111465433"></a><a name="p1087111465433"></a>监听触点移动事件结果。</p>
    </td>
    </tr>
    </tbody>
    </table>

    -   <a name="li1248533915381"></a>OnTouchStartCallbackResult

        <a name="table1283411502434"></a>
        <table><thead align="left"><tr id="row1833050194319"><th class="cellrowborder" valign="top" width="20%" id="mcps1.1.5.1.1"><p id="p1783317509435"><a name="p1783317509435"></a><a name="p1783317509435"></a>参数</p>
        </th>
        <th class="cellrowborder" valign="top" width="25%" id="mcps1.1.5.1.2"><p id="p20833150194319"><a name="p20833150194319"></a><a name="p20833150194319"></a>类型</p>
        </th>
        <th class="cellrowborder" valign="top" width="15%" id="mcps1.1.5.1.3"><p id="p7833195074312"><a name="p7833195074312"></a><a name="p7833195074312"></a>必填(M)/选填(O)</p>
        </th>
        <th class="cellrowborder" valign="top" width="40%" id="mcps1.1.5.1.4"><p id="p8833185034315"><a name="p8833185034315"></a><a name="p8833185034315"></a>说明</p>
        </th>
        </tr>
        </thead>
        <tbody><tr id="row1883315501437"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.5.1.1 "><p id="p58331950114320"><a name="p58331950114320"></a><a name="p58331950114320"></a>changedTouches</p>
        </td>
        <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.2 "><p id="p1483311503432"><a name="p1483311503432"></a><a name="p1483311503432"></a>List&lt;<a href="#li1984463834117">Touch</a>&gt;</p>
        </td>
        <td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.5.1.3 "><p id="p138332505438"><a name="p138332505438"></a><a name="p138332505438"></a>M</p>
        </td>
        <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p108335506436"><a name="p108335506436"></a><a name="p108335506436"></a>触发此次事件的触摸点列表。</p>
        </td>
        </tr>
        <tr id="row19833125034312"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.5.1.1 "><p id="p17833650174320"><a name="p17833650174320"></a><a name="p17833650174320"></a>timeStamp</p>
        </td>
        <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.2 "><p id="p7833050144315"><a name="p7833050144315"></a><a name="p7833050144315"></a>long</p>
        </td>
        <td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.5.1.3 "><p id="p16833155018433"><a name="p16833155018433"></a><a name="p16833155018433"></a>M</p>
        </td>
        <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p983325044313"><a name="p983325044313"></a><a name="p983325044313"></a>事件触发的时间戳。</p>
        </td>
        </tr>
        <tr id="row1283445064320"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.5.1.1 "><p id="p10833135018437"><a name="p10833135018437"></a><a name="p10833135018437"></a>touches</p>
        </td>
        <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.2 "><p id="p148341650174312"><a name="p148341650174312"></a><a name="p148341650174312"></a>List&lt;<a href="#li1984463834117">Touch</a>&gt;</p>
        </td>
        <td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.5.1.3 "><p id="p13834155094315"><a name="p13834155094315"></a><a name="p13834155094315"></a>M</p>
        </td>
        <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p10834175013434"><a name="p10834175013434"></a><a name="p10834175013434"></a>当前所有触摸点的列表。</p>
        </td>
        </tr>
        </tbody>
        </table>

        -   <a name="li1984463834117"></a>Touch

            <a name="table48452038124117"></a>
            <table><thead align="left"><tr id="row5845173814112"><th class="cellrowborder" valign="top" width="20%" id="mcps1.1.5.1.1"><p id="p19845193814117"><a name="p19845193814117"></a><a name="p19845193814117"></a>参数</p>
            </th>
            <th class="cellrowborder" valign="top" width="25%" id="mcps1.1.5.1.2"><p id="p58451238134115"><a name="p58451238134115"></a><a name="p58451238134115"></a>类型</p>
            </th>
            <th class="cellrowborder" valign="top" width="15%" id="mcps1.1.5.1.3"><p id="p1884503894110"><a name="p1884503894110"></a><a name="p1884503894110"></a>必填(M)/选填(O)</p>
            </th>
            <th class="cellrowborder" valign="top" width="40%" id="mcps1.1.5.1.4"><p id="p9845638174114"><a name="p9845638174114"></a><a name="p9845638174114"></a>说明</p>
            </th>
            </tr>
            </thead>
            <tbody><tr id="row2845338184110"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.5.1.1 "><p id="p1084533824117"><a name="p1084533824117"></a><a name="p1084533824117"></a>clientX</p>
            </td>
            <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.2 "><p id="p1684543844112"><a name="p1684543844112"></a><a name="p1684543844112"></a>float</p>
            </td>
            <td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.5.1.3 "><p id="p3845538104111"><a name="p3845538104111"></a><a name="p3845538104111"></a>M</p>
            </td>
            <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p138456384419"><a name="p138456384419"></a><a name="p138456384419"></a>触点相对于可见视区左边沿的X坐标。</p>
            </td>
            </tr>
            <tr id="row784513804114"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.5.1.1 "><p id="p1484533815414"><a name="p1484533815414"></a><a name="p1484533815414"></a>clientY</p>
            </td>
            <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.2 "><p id="p148451938104110"><a name="p148451938104110"></a><a name="p148451938104110"></a>float</p>
            </td>
            <td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.5.1.3 "><p id="p18451538164117"><a name="p18451538164117"></a><a name="p18451538164117"></a>M</p>
            </td>
            <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p1384573874114"><a name="p1384573874114"></a><a name="p1384573874114"></a>触点相对于可见视区下边沿的Y坐标。</p>
            </td>
            </tr>
            <tr id="row1584514383411"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.5.1.1 "><p id="p38457387412"><a name="p38457387412"></a><a name="p38457387412"></a>identifier</p>
            </td>
            <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.2 "><p id="p1984523814118"><a name="p1984523814118"></a><a name="p1984523814118"></a>int</p>
            </td>
            <td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.5.1.3 "><p id="p1584613817415"><a name="p1584613817415"></a><a name="p1584613817415"></a>M</p>
            </td>
            <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p11846163874119"><a name="p11846163874119"></a><a name="p11846163874119"></a>唯一标识符。一次触摸的整个过程中该标识符不变，用于判断是否为同一次触摸过程。</p>
            </td>
            </tr>
            <tr id="row3846838164119"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.5.1.1 "><p id="p384616383418"><a name="p384616383418"></a><a name="p384616383418"></a>pageX</p>
            </td>
            <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.2 "><p id="p118461438104111"><a name="p118461438104111"></a><a name="p118461438104111"></a>float</p>
            </td>
            <td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.5.1.3 "><p id="p484653818413"><a name="p484653818413"></a><a name="p484653818413"></a>M</p>
            </td>
            <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p384663813418"><a name="p384663813418"></a><a name="p384663813418"></a>触点相对于页面左边沿的X坐标。</p>
            </td>
            </tr>
            <tr id="row20846143804113"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.5.1.1 "><p id="p984673813411"><a name="p984673813411"></a><a name="p984673813411"></a>pageY</p>
            </td>
            <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.2 "><p id="p12846163813412"><a name="p12846163813412"></a><a name="p12846163813412"></a>float</p>
            </td>
            <td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.5.1.3 "><p id="p198461538154116"><a name="p198461538154116"></a><a name="p198461538154116"></a>M</p>
            </td>
            <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p8846103818412"><a name="p8846103818412"></a><a name="p8846103818412"></a>触点相对于页面下边沿的Y坐标。</p>
            </td>
            </tr>
            </tbody>
            </table>

-   示例代码

    ```
    private Action<OnTouchStartCallbackResult> _touchMoveAction = null;
    public void OnTouchMove()
    {
        Debug.Log("TouchScene OnTouchMove.");
        if (_touchMoveAction == null)
        {
            _touchMoveAction = new Action<OnTouchStartCallbackResult>(_onTouchMove);
            QG.OnTouchMove(_touchMoveAction);
        }
        else
        {
            QG.OffTouchMove(_touchMoveAction);
            _touchMoveAction = null;
        }
    }
    private void _onTouchMove(OnTouchStartCallbackResult res)
    {
        string obj = JsonUtility.ToJson(res);
        Debug.Log("_onTouchMove." + obj);
    }
    ```

### static void OffTouchMove\(Action<OnTouchStartCallbackResult\> result\)<a name="section69341543105219"></a>

-   描述

    取消监听触点移动事件。

-   请求参数

    <a name="table1166415610446"></a>
    <table><thead align="left"><tr id="row666517616443"><th class="cellrowborder" valign="top" width="20%" id="mcps1.1.5.1.1"><p id="p126659624420"><a name="p126659624420"></a><a name="p126659624420"></a>参数</p>
    </th>
    <th class="cellrowborder" valign="top" width="25%" id="mcps1.1.5.1.2"><p id="p066514644413"><a name="p066514644413"></a><a name="p066514644413"></a>类型</p>
    </th>
    <th class="cellrowborder" valign="top" width="15%" id="mcps1.1.5.1.3"><p id="p56651569441"><a name="p56651569441"></a><a name="p56651569441"></a>必填(M)/选填(O)</p>
    </th>
    <th class="cellrowborder" valign="top" width="40%" id="mcps1.1.5.1.4"><p id="p116655612449"><a name="p116655612449"></a><a name="p116655612449"></a>说明</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row96651068444"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.5.1.1 "><p id="p1566517612447"><a name="p1566517612447"></a><a name="p1566517612447"></a>result</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.2 "><p id="p143298489504"><a name="p143298489504"></a><a name="p143298489504"></a>Action&lt;<a href="#li1248533915381">OnTouchStartCallbackResult</a>&gt;</p>
    </td>
    <td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.5.1.3 "><p id="p166516124414"><a name="p166516124414"></a><a name="p166516124414"></a>M</p>
    </td>
    <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p15665765448"><a name="p15665765448"></a><a name="p15665765448"></a>OnTouchMove传入的监听函数。不传此参数将默认传null，则移除所有监听函数。</p>
    </td>
    </tr>
    </tbody>
    </table>

### static void OnTouchEnd\(Action<OnTouchStartCallbackResult\> result\)<a name="section127818534535"></a>

-   描述

    监听触摸结束事件。

-   请求参数

    <a name="table45193313443"></a>
    <table><thead align="left"><tr id="row14519123111443"><th class="cellrowborder" valign="top" width="20%" id="mcps1.1.5.1.1"><p id="p05193318442"><a name="p05193318442"></a><a name="p05193318442"></a>参数</p>
    </th>
    <th class="cellrowborder" valign="top" width="25%" id="mcps1.1.5.1.2"><p id="p151933164417"><a name="p151933164417"></a><a name="p151933164417"></a>类型</p>
    </th>
    <th class="cellrowborder" valign="top" width="15%" id="mcps1.1.5.1.3"><p id="p1752013116447"><a name="p1752013116447"></a><a name="p1752013116447"></a>必填(M)/选填(O)</p>
    </th>
    <th class="cellrowborder" valign="top" width="40%" id="mcps1.1.5.1.4"><p id="p175201031144411"><a name="p175201031144411"></a><a name="p175201031144411"></a>说明</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row25201831194412"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.5.1.1 "><p id="p7520113112447"><a name="p7520113112447"></a><a name="p7520113112447"></a>result</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.2 "><p id="p14520631104418"><a name="p14520631104418"></a><a name="p14520631104418"></a>Action&lt;<a href="#li161569233918">OnTouchStartCallbackResult</a>&gt;</p>
    </td>
    <td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.5.1.3 "><p id="p152063110441"><a name="p152063110441"></a><a name="p152063110441"></a>M</p>
    </td>
    <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p652003144413"><a name="p652003144413"></a><a name="p652003144413"></a>监听触摸结束事件结果。</p>
    </td>
    </tr>
    </tbody>
    </table>

    -   <a name="li161569233918"></a>OnTouchStartCallbackResult

        <a name="table1141414193544"></a>
        <table><thead align="left"><tr id="row84141019195415"><th class="cellrowborder" valign="top" width="20%" id="mcps1.1.5.1.1"><p id="p15414191935419"><a name="p15414191935419"></a><a name="p15414191935419"></a>参数</p>
        </th>
        <th class="cellrowborder" valign="top" width="25%" id="mcps1.1.5.1.2"><p id="p141471945413"><a name="p141471945413"></a><a name="p141471945413"></a>类型</p>
        </th>
        <th class="cellrowborder" valign="top" width="15%" id="mcps1.1.5.1.3"><p id="p641414199547"><a name="p641414199547"></a><a name="p641414199547"></a>必填(M)/选填(O)</p>
        </th>
        <th class="cellrowborder" valign="top" width="40%" id="mcps1.1.5.1.4"><p id="p2041418199546"><a name="p2041418199546"></a><a name="p2041418199546"></a>说明</p>
        </th>
        </tr>
        </thead>
        <tbody><tr id="row941418190544"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.5.1.1 "><p id="p17414131920543"><a name="p17414131920543"></a><a name="p17414131920543"></a>changedTouches</p>
        </td>
        <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.2 "><p id="p717211153398"><a name="p717211153398"></a><a name="p717211153398"></a>List&lt;<a href="#li1191152794215">Touch</a>&gt;</p>
        </td>
        <td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.5.1.3 "><p id="p441401945419"><a name="p441401945419"></a><a name="p441401945419"></a>M</p>
        </td>
        <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p26431277408"><a name="p26431277408"></a><a name="p26431277408"></a>触发此次事件的触摸点列表。</p>
        </td>
        </tr>
        <tr id="row041412196547"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.5.1.1 "><p id="p841431925414"><a name="p841431925414"></a><a name="p841431925414"></a>timeStamp</p>
        </td>
        <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.2 "><p id="p18172191563913"><a name="p18172191563913"></a><a name="p18172191563913"></a>long</p>
        </td>
        <td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.5.1.3 "><p id="p1414181913549"><a name="p1414181913549"></a><a name="p1414181913549"></a>M</p>
        </td>
        <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p564310271407"><a name="p564310271407"></a><a name="p564310271407"></a>事件触发的时间戳。</p>
        </td>
        </tr>
        <tr id="row84141519115415"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.5.1.1 "><p id="p1641471985420"><a name="p1641471985420"></a><a name="p1641471985420"></a>touches</p>
        </td>
        <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.2 "><p id="p617281514397"><a name="p617281514397"></a><a name="p617281514397"></a>List&lt;<a href="#li1191152794215">Touch</a>&gt;</p>
        </td>
        <td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.5.1.3 "><p id="p1941561918546"><a name="p1941561918546"></a><a name="p1941561918546"></a>M</p>
        </td>
        <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p2064392718402"><a name="p2064392718402"></a><a name="p2064392718402"></a>当前所有触摸点的列表。</p>
        </td>
        </tr>
        </tbody>
        </table>

        -   <a name="li1191152794215"></a>Touch

            <a name="table17915273421"></a>
            <table><thead align="left"><tr id="row169132711427"><th class="cellrowborder" valign="top" width="20%" id="mcps1.1.5.1.1"><p id="p791927164210"><a name="p791927164210"></a><a name="p791927164210"></a>参数</p>
            </th>
            <th class="cellrowborder" valign="top" width="25%" id="mcps1.1.5.1.2"><p id="p69111279425"><a name="p69111279425"></a><a name="p69111279425"></a>类型</p>
            </th>
            <th class="cellrowborder" valign="top" width="15%" id="mcps1.1.5.1.3"><p id="p6915271421"><a name="p6915271421"></a><a name="p6915271421"></a>必填(M)/选填(O)</p>
            </th>
            <th class="cellrowborder" valign="top" width="40%" id="mcps1.1.5.1.4"><p id="p139122713428"><a name="p139122713428"></a><a name="p139122713428"></a>说明</p>
            </th>
            </tr>
            </thead>
            <tbody><tr id="row10918271423"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.5.1.1 "><p id="p1891162724214"><a name="p1891162724214"></a><a name="p1891162724214"></a>clientX</p>
            </td>
            <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.2 "><p id="p169122713428"><a name="p169122713428"></a><a name="p169122713428"></a>float</p>
            </td>
            <td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.5.1.3 "><p id="p89182714214"><a name="p89182714214"></a><a name="p89182714214"></a>M</p>
            </td>
            <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p391122714219"><a name="p391122714219"></a><a name="p391122714219"></a>触点相对于可见视区左边沿的X坐标。</p>
            </td>
            </tr>
            <tr id="row179242714219"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.5.1.1 "><p id="p6921827174217"><a name="p6921827174217"></a><a name="p6921827174217"></a>clientY</p>
            </td>
            <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.2 "><p id="p199222774218"><a name="p199222774218"></a><a name="p199222774218"></a>float</p>
            </td>
            <td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.5.1.3 "><p id="p9921727144219"><a name="p9921727144219"></a><a name="p9921727144219"></a>M</p>
            </td>
            <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p892227134215"><a name="p892227134215"></a><a name="p892227134215"></a>触点相对于可见视区下边沿的Y坐标。</p>
            </td>
            </tr>
            <tr id="row792122764211"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.5.1.1 "><p id="p1392152715428"><a name="p1392152715428"></a><a name="p1392152715428"></a>identifier</p>
            </td>
            <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.2 "><p id="p192152724219"><a name="p192152724219"></a><a name="p192152724219"></a>int</p>
            </td>
            <td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.5.1.3 "><p id="p392627174212"><a name="p392627174212"></a><a name="p392627174212"></a>M</p>
            </td>
            <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p129292712428"><a name="p129292712428"></a><a name="p129292712428"></a>唯一标识符。一次触摸的整个过程中该标识符不变，用于判断是否为同一次触摸过程。</p>
            </td>
            </tr>
            <tr id="row69262754212"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.5.1.1 "><p id="p692192774214"><a name="p692192774214"></a><a name="p692192774214"></a>pageX</p>
            </td>
            <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.2 "><p id="p3921927164217"><a name="p3921927164217"></a><a name="p3921927164217"></a>float</p>
            </td>
            <td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.5.1.3 "><p id="p1092122712427"><a name="p1092122712427"></a><a name="p1092122712427"></a>M</p>
            </td>
            <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p18921527144219"><a name="p18921527144219"></a><a name="p18921527144219"></a>触点相对于页面左边沿的X坐标。</p>
            </td>
            </tr>
            <tr id="row20921127154218"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.5.1.1 "><p id="p1092132754212"><a name="p1092132754212"></a><a name="p1092132754212"></a>pageY</p>
            </td>
            <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.2 "><p id="p79213270423"><a name="p79213270423"></a><a name="p79213270423"></a>float</p>
            </td>
            <td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.5.1.3 "><p id="p119210274427"><a name="p119210274427"></a><a name="p119210274427"></a>M</p>
            </td>
            <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p129215274426"><a name="p129215274426"></a><a name="p129215274426"></a>触点相对于页面下边沿的Y坐标。</p>
            </td>
            </tr>
            </tbody>
            </table>

-   示例代码

    ```
    private Action<OnTouchStartCallbackResult> _touchEndAction = null;
    public void OnTouchEnd()
    {
        Debug.Log("TouchScene OnTouchEnd.");
        if (_touchEndAction == null)
        {
            _touchEndAction = new Action<OnTouchStartCallbackResult>(_onTouchEnd);
            QG.OnTouchEnd(_touchEndAction);
        }
        else
        {
            QG.OffTouchEnd(_touchEndAction);
            _touchEndAction = null;
        }
    }
    private void _onTouchEnd(OnTouchStartCallbackResult res)
    {
        string obj = JsonUtility.ToJson(res);
        Debug.Log("_onTouchEnd." + obj);
    }
    ```

### static void OffTouchEnd\(Action<OnTouchStartCallbackResult\> result\)<a name="section812612585513"></a>

-   描述

    取消监听触摸结束事件。

-   请求参数

    <a name="table14193844114416"></a>
    <table><thead align="left"><tr id="row151932445448"><th class="cellrowborder" valign="top" width="20%" id="mcps1.1.5.1.1"><p id="p131931444114412"><a name="p131931444114412"></a><a name="p131931444114412"></a>参数</p>
    </th>
    <th class="cellrowborder" valign="top" width="25%" id="mcps1.1.5.1.2"><p id="p2019316440444"><a name="p2019316440444"></a><a name="p2019316440444"></a>类型</p>
    </th>
    <th class="cellrowborder" valign="top" width="15%" id="mcps1.1.5.1.3"><p id="p41933447444"><a name="p41933447444"></a><a name="p41933447444"></a>必填(M)/选填(O)</p>
    </th>
    <th class="cellrowborder" valign="top" width="40%" id="mcps1.1.5.1.4"><p id="p1919364484411"><a name="p1919364484411"></a><a name="p1919364484411"></a>说明</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row10193344114416"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.5.1.1 "><p id="p12194174416446"><a name="p12194174416446"></a><a name="p12194174416446"></a>result</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.2 "><p id="p195499815116"><a name="p195499815116"></a><a name="p195499815116"></a>Action&lt;<a href="#li161569233918">OnTouchStartCallbackResult</a>&gt;</p>
    </td>
    <td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.5.1.3 "><p id="p1819420447444"><a name="p1819420447444"></a><a name="p1819420447444"></a>M</p>
    </td>
    <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p1319410445447"><a name="p1319410445447"></a><a name="p1319410445447"></a>OnTouchEnd传入的监听函数。不传此参数将默认传null，则移除所有监听函数。</p>
    </td>
    </tr>
    </tbody>
    </table>

### static void OnTouchCancel\(Action<OnTouchStartCallbackResult\> result\)<a name="section81460493556"></a>

-   描述

    监听触点失效事件。

-   请求参数

    <a name="table49237419456"></a>
    <table><thead align="left"><tr id="row7923194184510"><th class="cellrowborder" valign="top" width="20%" id="mcps1.1.5.1.1"><p id="p1592414204518"><a name="p1592414204518"></a><a name="p1592414204518"></a>参数</p>
    </th>
    <th class="cellrowborder" valign="top" width="25%" id="mcps1.1.5.1.2"><p id="p159246424516"><a name="p159246424516"></a><a name="p159246424516"></a>类型</p>
    </th>
    <th class="cellrowborder" valign="top" width="15%" id="mcps1.1.5.1.3"><p id="p1492413417459"><a name="p1492413417459"></a><a name="p1492413417459"></a>必填(M)/选填(O)</p>
    </th>
    <th class="cellrowborder" valign="top" width="40%" id="mcps1.1.5.1.4"><p id="p159241344459"><a name="p159241344459"></a><a name="p159241344459"></a>说明</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row18924154164519"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.5.1.1 "><p id="p1692474124513"><a name="p1692474124513"></a><a name="p1692474124513"></a>result</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.2 "><p id="p1924944454"><a name="p1924944454"></a><a name="p1924944454"></a>Action&lt;<a href="#li810914260398">OnTouchStartCallbackResult</a>&gt;</p>
    </td>
    <td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.5.1.3 "><p id="p9924124154515"><a name="p9924124154515"></a><a name="p9924124154515"></a>M</p>
    </td>
    <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p149242424512"><a name="p149242424512"></a><a name="p149242424512"></a>监听触点失效事件结果。</p>
    </td>
    </tr>
    </tbody>
    </table>

    -   <a name="li810914260398"></a>OnTouchStartCallbackResult

        <a name="table11208117135613"></a>
        <table><thead align="left"><tr id="row8208147135615"><th class="cellrowborder" valign="top" width="20%" id="mcps1.1.5.1.1"><p id="p13208127145613"><a name="p13208127145613"></a><a name="p13208127145613"></a>参数</p>
        </th>
        <th class="cellrowborder" valign="top" width="25%" id="mcps1.1.5.1.2"><p id="p020811716561"><a name="p020811716561"></a><a name="p020811716561"></a>类型</p>
        </th>
        <th class="cellrowborder" valign="top" width="15%" id="mcps1.1.5.1.3"><p id="p32081074566"><a name="p32081074566"></a><a name="p32081074566"></a>必填(M)/选填(O)</p>
        </th>
        <th class="cellrowborder" valign="top" width="40%" id="mcps1.1.5.1.4"><p id="p2208197175610"><a name="p2208197175610"></a><a name="p2208197175610"></a>说明</p>
        </th>
        </tr>
        </thead>
        <tbody><tr id="row1720818719567"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.5.1.1 "><p id="p1320816725618"><a name="p1320816725618"></a><a name="p1320816725618"></a>changedTouches</p>
        </td>
        <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.2 "><p id="p114991182392"><a name="p114991182392"></a><a name="p114991182392"></a>List&lt;<a href="#li5112117194311">Touch</a>&gt;</p>
        </td>
        <td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.5.1.3 "><p id="p1208117205618"><a name="p1208117205618"></a><a name="p1208117205618"></a>M</p>
        </td>
        <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p96431233104012"><a name="p96431233104012"></a><a name="p96431233104012"></a>触发此次事件的触摸点列表。</p>
        </td>
        </tr>
        <tr id="row020818715613"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.5.1.1 "><p id="p1620819710562"><a name="p1620819710562"></a><a name="p1620819710562"></a>timeStamp</p>
        </td>
        <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.2 "><p id="p049910187399"><a name="p049910187399"></a><a name="p049910187399"></a>long</p>
        </td>
        <td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.5.1.3 "><p id="p2208187115614"><a name="p2208187115614"></a><a name="p2208187115614"></a>M</p>
        </td>
        <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p864353311406"><a name="p864353311406"></a><a name="p864353311406"></a>事件触发的时间戳。</p>
        </td>
        </tr>
        <tr id="row18209167135610"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.5.1.1 "><p id="p11209174566"><a name="p11209174566"></a><a name="p11209174566"></a>touches</p>
        </td>
        <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.2 "><p id="p3499191816395"><a name="p3499191816395"></a><a name="p3499191816395"></a>List&lt;<a href="#li5112117194311">Touch</a>&gt;</p>
        </td>
        <td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.5.1.3 "><p id="p152093735618"><a name="p152093735618"></a><a name="p152093735618"></a>M</p>
        </td>
        <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p964333344010"><a name="p964333344010"></a><a name="p964333344010"></a>当前所有触摸点的列表。</p>
        </td>
        </tr>
        </tbody>
        </table>

        -   <a name="li5112117194311"></a>Touch

            <a name="table41121475438"></a>
            <table><thead align="left"><tr id="row511217711433"><th class="cellrowborder" valign="top" width="20%" id="mcps1.1.5.1.1"><p id="p16112117104319"><a name="p16112117104319"></a><a name="p16112117104319"></a>参数</p>
            </th>
            <th class="cellrowborder" valign="top" width="25%" id="mcps1.1.5.1.2"><p id="p5112137144317"><a name="p5112137144317"></a><a name="p5112137144317"></a>类型</p>
            </th>
            <th class="cellrowborder" valign="top" width="15%" id="mcps1.1.5.1.3"><p id="p2112137194314"><a name="p2112137194314"></a><a name="p2112137194314"></a>必填(M)/选填(O)</p>
            </th>
            <th class="cellrowborder" valign="top" width="40%" id="mcps1.1.5.1.4"><p id="p141121571436"><a name="p141121571436"></a><a name="p141121571436"></a>说明</p>
            </th>
            </tr>
            </thead>
            <tbody><tr id="row111129711433"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.5.1.1 "><p id="p1411212712439"><a name="p1411212712439"></a><a name="p1411212712439"></a>clientX</p>
            </td>
            <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.2 "><p id="p141121875439"><a name="p141121875439"></a><a name="p141121875439"></a>float</p>
            </td>
            <td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.5.1.3 "><p id="p1211318774317"><a name="p1211318774317"></a><a name="p1211318774317"></a>M</p>
            </td>
            <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p211327104318"><a name="p211327104318"></a><a name="p211327104318"></a>触点相对于可见视区左边沿的X坐标。</p>
            </td>
            </tr>
            <tr id="row10113167104312"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.5.1.1 "><p id="p211311774312"><a name="p211311774312"></a><a name="p211311774312"></a>clientY</p>
            </td>
            <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.2 "><p id="p4113107104312"><a name="p4113107104312"></a><a name="p4113107104312"></a>float</p>
            </td>
            <td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.5.1.3 "><p id="p21136744315"><a name="p21136744315"></a><a name="p21136744315"></a>M</p>
            </td>
            <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p911316704316"><a name="p911316704316"></a><a name="p911316704316"></a>触点相对于可见视区下边沿的Y坐标。</p>
            </td>
            </tr>
            <tr id="row191137719434"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.5.1.1 "><p id="p161134710439"><a name="p161134710439"></a><a name="p161134710439"></a>identifier</p>
            </td>
            <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.2 "><p id="p611387144313"><a name="p611387144313"></a><a name="p611387144313"></a>int</p>
            </td>
            <td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.5.1.3 "><p id="p61133716430"><a name="p61133716430"></a><a name="p61133716430"></a>M</p>
            </td>
            <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p711310716435"><a name="p711310716435"></a><a name="p711310716435"></a>唯一标识符。一次触摸的整个过程中该标识符不变，用于判断是否为同一次触摸过程。</p>
            </td>
            </tr>
            <tr id="row311327104319"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.5.1.1 "><p id="p1711397164311"><a name="p1711397164311"></a><a name="p1711397164311"></a>pageX</p>
            </td>
            <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.2 "><p id="p171131674436"><a name="p171131674436"></a><a name="p171131674436"></a>float</p>
            </td>
            <td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.5.1.3 "><p id="p4113127194313"><a name="p4113127194313"></a><a name="p4113127194313"></a>M</p>
            </td>
            <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p61132774316"><a name="p61132774316"></a><a name="p61132774316"></a>触点相对于页面左边沿的X坐标。</p>
            </td>
            </tr>
            <tr id="row191131715434"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.5.1.1 "><p id="p121131375438"><a name="p121131375438"></a><a name="p121131375438"></a>pageY</p>
            </td>
            <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.2 "><p id="p16113774435"><a name="p16113774435"></a><a name="p16113774435"></a>float</p>
            </td>
            <td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.5.1.3 "><p id="p1711413711437"><a name="p1711413711437"></a><a name="p1711413711437"></a>M</p>
            </td>
            <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p16114477432"><a name="p16114477432"></a><a name="p16114477432"></a>触点相对于页面下边沿的Y坐标。</p>
            </td>
            </tr>
            </tbody>
            </table>

-   示例代码

    ```
    private Action<OnTouchStartCallbackResult> _touchCancelAction = null;
    public void OnTouchCancel()
    {
        Debug.Log("TouchScene OnTouchCancel.");
        if (_touchCancelAction == null)
        {
            _touchCancelAction = new Action<OnTouchStartCallbackResult>(_onTouchCancel);
            QG.OnTouchCancel(_touchCancelAction);
        }
        else
        {
            QG.OffTouchCancel(_touchCancelAction);
            _touchCancelAction = null;
        }
    }
    private void _onTouchCancel(OnTouchStartCallbackResult res)
    {
        string obj = JsonUtility.ToJson(res);
        Debug.Log("_onTouchCancel." + obj);
    }
    ```

### static void OffTouchCancel\(Action<OnTouchStartCallbackResult\> result\)<a name="section52841826115615"></a>

-   描述

    取消监听触点失效事件。

-   请求参数

    <a name="table118111420461"></a>
    <table><thead align="left"><tr id="row1681141424610"><th class="cellrowborder" valign="top" width="20%" id="mcps1.1.5.1.1"><p id="p881114144610"><a name="p881114144610"></a><a name="p881114144610"></a>参数</p>
    </th>
    <th class="cellrowborder" valign="top" width="25%" id="mcps1.1.5.1.2"><p id="p18811414134614"><a name="p18811414134614"></a><a name="p18811414134614"></a>类型</p>
    </th>
    <th class="cellrowborder" valign="top" width="15%" id="mcps1.1.5.1.3"><p id="p48111474612"><a name="p48111474612"></a><a name="p48111474612"></a>必填(M)/选填(O)</p>
    </th>
    <th class="cellrowborder" valign="top" width="40%" id="mcps1.1.5.1.4"><p id="p20813141465"><a name="p20813141465"></a><a name="p20813141465"></a>说明</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row188191415462"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.5.1.1 "><p id="p181101434612"><a name="p181101434612"></a><a name="p181101434612"></a>result</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.2 "><p id="p1312414382515"><a name="p1312414382515"></a><a name="p1312414382515"></a>Action&lt;<a href="#li810914260398">OnTouchStartCallbackResult</a>&gt;</p>
    </td>
    <td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.5.1.3 "><p id="p181114114611"><a name="p181114114611"></a><a name="p181114114611"></a>M</p>
    </td>
    <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p5811614124617"><a name="p5811614124617"></a><a name="p5811614124617"></a>OnTouchCancel传入的监听函数。不传此参数将默认传null，则移除所有监听函数。</p>
    </td>
    </tr>
    </tbody>
    </table>

