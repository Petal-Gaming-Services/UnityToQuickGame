# 键盘API<a name="ZH-CN_TOPIC_0000001694767441"></a>

-   [接口定义](#section69755377315)
    -   [static void HideKeyboard\(HideKeyboardOption hideKeyboardOption\)](#section183010109243)
    -   [static void ShowKeyboard\(ShowKeyboardOption showKeyboardOption\)](#section291153112462)
    -   [static void UpdateKeyboard\(UpdateKeyboardOption updateKeyboardOption\)](#section103917228181)
    -   [static void OnKeyboardInput\(Action<string\> action\)](#section1619790712)
    -   [static void OffKeyboardInput\(Action<string\> action\)](#section758152916226)
    -   [static void OnKeyboardConfirm\(Action<string\> action\)](#section14491529182618)
    -   [static void OffKeyboardConfirm\(Action<string\> action\)](#section88293319305)
    -   [static void OnKeyboardComplete\(Action<string\> action\)](#section18884172143112)
    -   [static void OffKeyboardComplete\(Action<string\> action\)](#section1265315519321)

## 接口定义<a name="section69755377315"></a>

<a name="table8300101052411"></a>
<table><thead align="left"><tr id="row143001710182417"><th class="cellrowborder" valign="top" width="50%" id="mcps1.1.3.1.1"><p id="p230021017246"><a name="p230021017246"></a><a name="p230021017246"></a>接口</p>
</th>
<th class="cellrowborder" valign="top" width="50%" id="mcps1.1.3.1.2"><p id="p530061019243"><a name="p530061019243"></a><a name="p530061019243"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="row133001410112415"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.1 "><p id="p1731626122410"><a name="p1731626122410"></a><a name="p1731626122410"></a><a href="#section183010109243">static void HideKeyboard(HideKeyboardOption hideKeyboardOption)</a></p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.2 "><p id="p2215265245"><a name="p2215265245"></a><a name="p2215265245"></a>隐藏软键盘。</p>
</td>
</tr>
<tr id="row43008104244"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.1 "><p id="p2021826202410"><a name="p2021826202410"></a><a name="p2021826202410"></a><a href="#section291153112462">static void ShowKeyboard(ShowKeyboardOption showKeyboardOption)</a></p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.2 "><p id="p151132652419"><a name="p151132652419"></a><a name="p151132652419"></a>显示软键盘。</p>
</td>
</tr>
<tr id="row1950125191312"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.1 "><p id="p851425131311"><a name="p851425131311"></a><a name="p851425131311"></a><a href="#section103917228181">static void UpdateKeyboard(UpdateKeyboardOption updateKeyboardOption)</a></p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.2 "><p id="p4511925181314"><a name="p4511925181314"></a><a name="p4511925181314"></a>更新键盘输入框显示的默认值。</p>
</td>
</tr>
<tr id="row1630121011241"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.1 "><p id="p17172692418"><a name="p17172692418"></a><a name="p17172692418"></a><a href="#section1619790712">static void OnKeyboardInput(Action&lt;string&gt; action)</a></p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.2 "><p id="p1013269242"><a name="p1013269242"></a><a name="p1013269242"></a>监听键盘<strong id="b1337005434811"><a name="b1337005434811"></a><a name="b1337005434811"></a>输入</strong>事件。</p>
</td>
</tr>
<tr id="row183018108248"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.1 "><p id="p149991025152410"><a name="p149991025152410"></a><a name="p149991025152410"></a><a href="#section758152916226">static void OffKeyboardInput(Action&lt;string&gt; action)</a></p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.2 "><p id="p39991256244"><a name="p39991256244"></a><a name="p39991256244"></a>取消监听键盘<strong id="b19923105611486"><a name="b19923105611486"></a><a name="b19923105611486"></a>输入</strong>事件。</p>
</td>
</tr>
<tr id="row133019102242"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.1 "><p id="p49981325102419"><a name="p49981325102419"></a><a name="p49981325102419"></a><a href="#section14491529182618">static void OnKeyboardConfirm(Action&lt;string&gt; action)</a></p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.2 "><p id="p169978255246"><a name="p169978255246"></a><a name="p169978255246"></a>监听用户<strong id="b6778102217493"><a name="b6778102217493"></a><a name="b6778102217493"></a>点击confirm按钮</strong>事件。</p>
</td>
</tr>
<tr id="row1730121014248"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.1 "><p id="p1099672512411"><a name="p1099672512411"></a><a name="p1099672512411"></a><a href="#section88293319305">static void OffKeyboardConfirm(Action&lt;string&gt; action)</a></p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.2 "><p id="p999652542413"><a name="p999652542413"></a><a name="p999652542413"></a>取消监听用户<strong id="b396862519497"><a name="b396862519497"></a><a name="b396862519497"></a>点击confirm按钮</strong>事件。</p>
</td>
</tr>
<tr id="row0301111082415"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.1 "><p id="p9995122522419"><a name="p9995122522419"></a><a name="p9995122522419"></a><a href="#section18884172143112">static void OnKeyboardComplete(Action&lt;string&gt; action)</a></p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.2 "><p id="p199410254241"><a name="p199410254241"></a><a name="p199410254241"></a>监听键盘<strong id="b19826193264919"><a name="b19826193264919"></a><a name="b19826193264919"></a>收起</strong>事件。</p>
</td>
</tr>
<tr id="row730115105241"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.1 "><p id="p1799420251247"><a name="p1799420251247"></a><a name="p1799420251247"></a><a href="#section1265315519321">static void OffKeyboardComplete(Action&lt;string&gt; action)</a></p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.2 "><p id="p1497392512247"><a name="p1497392512247"></a><a name="p1497392512247"></a>取消监听键盘<strong id="b186331636124920"><a name="b186331636124920"></a><a name="b186331636124920"></a>收起</strong>事件。</p>
</td>
</tr>
</tbody>
</table>

### static void HideKeyboard\(HideKeyboardOption hideKeyboardOption\)<a name="section183010109243"></a>

-   描述

    隐藏软键盘。

-   请求参数HideKeyboardOption

    <a name="table840761595016"></a>
    <table><thead align="left"><tr id="row94071615185016"><th class="cellrowborder" valign="top" width="20%" id="mcps1.1.5.1.1"><p id="p640791575015"><a name="p640791575015"></a><a name="p640791575015"></a>参数</p>
    </th>
    <th class="cellrowborder" valign="top" width="25%" id="mcps1.1.5.1.2"><p id="p1340751525013"><a name="p1340751525013"></a><a name="p1340751525013"></a>类型</p>
    </th>
    <th class="cellrowborder" valign="top" width="15%" id="mcps1.1.5.1.3"><p id="p64071715125014"><a name="p64071715125014"></a><a name="p64071715125014"></a>必填(M)/选填(O)</p>
    </th>
    <th class="cellrowborder" valign="top" width="40%" id="mcps1.1.5.1.4"><p id="p114081815205019"><a name="p114081815205019"></a><a name="p114081815205019"></a>说明</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row14409171510501"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.5.1.1 "><p id="p1640911575015"><a name="p1640911575015"></a><a name="p1640911575015"></a>success</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.2 "><p id="p7409181555011"><a name="p7409181555011"></a><a name="p7409181555011"></a>Action</p>
    </td>
    <td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.5.1.3 "><p id="p1840951535017"><a name="p1840951535017"></a><a name="p1840951535017"></a>O</p>
    </td>
    <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p104091715125019"><a name="p104091715125019"></a><a name="p104091715125019"></a>接口调用成功的回调函数。</p>
    </td>
    </tr>
    <tr id="row11409141555011"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.5.1.1 "><p id="p1441016159501"><a name="p1441016159501"></a><a name="p1441016159501"></a>fail</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.2 "><p id="p14410161525013"><a name="p14410161525013"></a><a name="p14410161525013"></a>Action</p>
    </td>
    <td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.5.1.3 "><p id="p441051518504"><a name="p441051518504"></a><a name="p441051518504"></a>O</p>
    </td>
    <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p2410131516501"><a name="p2410131516501"></a><a name="p2410131516501"></a>接口调用失败的回调函数。</p>
    </td>
    </tr>
    <tr id="row74100156504"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.5.1.1 "><p id="p441013151503"><a name="p441013151503"></a><a name="p441013151503"></a>complete</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.2 "><p id="p1241011515505"><a name="p1241011515505"></a><a name="p1241011515505"></a>Action</p>
    </td>
    <td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.5.1.3 "><p id="p141018151508"><a name="p141018151508"></a><a name="p141018151508"></a>O</p>
    </td>
    <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p441017155504"><a name="p441017155504"></a><a name="p441017155504"></a>若有函数传入，将在成功、失败后调用该函数。</p>
    </td>
    </tr>
    </tbody>
    </table>

-   示例代码

    ```
    public void HideKeyboard()
    {
        HideKeyboardOption hideKeyboardOption = new HideKeyboardOption
        {
            success = () => { Debug.Log("TestHideKeyboard success."); },
            fail = () => { Debug.Log("TestHideKeyboard fail."); },
            complete = () => { Debug.Log("TestHideKeyboard Complete."); }
        };
        QG.HideKeyboard(hideKeyboardOption);
    }
    ```

### static void ShowKeyboard\(ShowKeyboardOption showKeyboardOption\)<a name="section291153112462"></a>

-   描述

    显示软键盘。

-   请求参数ShowKeyboardOption

    <a name="table19436165084619"></a>
    <table><thead align="left"><tr id="row174368504467"><th class="cellrowborder" valign="top" width="20%" id="mcps1.1.5.1.1"><p id="p94367507466"><a name="p94367507466"></a><a name="p94367507466"></a>参数</p>
    </th>
    <th class="cellrowborder" valign="top" width="25%" id="mcps1.1.5.1.2"><p id="p1543615502460"><a name="p1543615502460"></a><a name="p1543615502460"></a>类型</p>
    </th>
    <th class="cellrowborder" valign="top" width="15%" id="mcps1.1.5.1.3"><p id="p20437125019463"><a name="p20437125019463"></a><a name="p20437125019463"></a>必填(M)/选填(O)</p>
    </th>
    <th class="cellrowborder" valign="top" width="40%" id="mcps1.1.5.1.4"><p id="p6437135019463"><a name="p6437135019463"></a><a name="p6437135019463"></a>说明</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row76124574920"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.5.1.1 "><p id="p1661745194912"><a name="p1661745194912"></a><a name="p1661745194912"></a>defaultValue</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.2 "><p id="p56174594916"><a name="p56174594916"></a><a name="p56174594916"></a>string</p>
    </td>
    <td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.5.1.3 "><p id="p18616454494"><a name="p18616454494"></a><a name="p18616454494"></a>M</p>
    </td>
    <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p461545164916"><a name="p461545164916"></a><a name="p461545164916"></a>键盘输入框显示的默认值。</p>
    </td>
    </tr>
    <tr id="row168591640154912"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.5.1.1 "><p id="p2860340114918"><a name="p2860340114918"></a><a name="p2860340114918"></a>maxLength</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.2 "><p id="p15860940184918"><a name="p15860940184918"></a><a name="p15860940184918"></a>int</p>
    </td>
    <td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.5.1.3 "><p id="p12131219115712"><a name="p12131219115712"></a><a name="p12131219115712"></a>M</p>
    </td>
    <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p286019406496"><a name="p286019406496"></a><a name="p286019406496"></a>键盘中文本的最大长度。</p>
    </td>
    </tr>
    <tr id="row565325395617"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.5.1.1 "><p id="p97301305715"><a name="p97301305715"></a><a name="p97301305715"></a>multiple</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.2 "><p id="p773033125712"><a name="p773033125712"></a><a name="p773033125712"></a>bool</p>
    </td>
    <td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.5.1.3 "><p id="p3136196579"><a name="p3136196579"></a><a name="p3136196579"></a>M</p>
    </td>
    <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p10730193155713"><a name="p10730193155713"></a><a name="p10730193155713"></a>是否为多行输入。</p>
    </td>
    </tr>
    <tr id="row13736145017562"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.5.1.1 "><p id="p1873020310574"><a name="p1873020310574"></a><a name="p1873020310574"></a>confirmHold</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.2 "><p id="p117301395715"><a name="p117301395715"></a><a name="p117301395715"></a>bool</p>
    </td>
    <td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.5.1.3 "><p id="p201281916577"><a name="p201281916577"></a><a name="p201281916577"></a>M</p>
    </td>
    <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p13730183205712"><a name="p13730183205712"></a><a name="p13730183205712"></a>当点击完成时键盘是否保持。</p>
    </td>
    </tr>
    <tr id="row1322143135616"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.5.1.1 "><p id="p147305310576"><a name="p147305310576"></a><a name="p147305310576"></a>confirmType</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.2 "><p id="p1173014320573"><a name="p1173014320573"></a><a name="p1173014320573"></a>string</p>
    </td>
    <td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.5.1.3 "><p id="p1399051810574"><a name="p1399051810574"></a><a name="p1399051810574"></a>M</p>
    </td>
    <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p6731539577"><a name="p6731539577"></a><a name="p6731539577"></a>键盘右下角confirm按钮的类型，只影响按钮的文本内容：</p>
    <a name="ul16649432155916"></a><a name="ul16649432155916"></a><ul id="ul16649432155916"><li>done：完成。</li><li>next：下一个。</li><li>search：搜索。</li><li>go：前往。</li><li>send：发送。</li></ul>
    </td>
    </tr>
    <tr id="row84379503465"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.5.1.1 "><p id="p1043755094618"><a name="p1043755094618"></a><a name="p1043755094618"></a>success</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.2 "><p id="p9437145019463"><a name="p9437145019463"></a><a name="p9437145019463"></a>Action</p>
    </td>
    <td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.5.1.3 "><p id="p114377503469"><a name="p114377503469"></a><a name="p114377503469"></a>O</p>
    </td>
    <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p114371450164612"><a name="p114371450164612"></a><a name="p114371450164612"></a>接口调用成功的回调函数。</p>
    </td>
    </tr>
    <tr id="row64371350124618"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.5.1.1 "><p id="p743815019469"><a name="p743815019469"></a><a name="p743815019469"></a>fail</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.2 "><p id="p1543845020465"><a name="p1543845020465"></a><a name="p1543845020465"></a>Action</p>
    </td>
    <td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.5.1.3 "><p id="p243815502469"><a name="p243815502469"></a><a name="p243815502469"></a>O</p>
    </td>
    <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p194381950124613"><a name="p194381950124613"></a><a name="p194381950124613"></a>接口调用失败的回调函数。</p>
    </td>
    </tr>
    <tr id="row1543812509460"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.5.1.1 "><p id="p134381500468"><a name="p134381500468"></a><a name="p134381500468"></a>complete</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.2 "><p id="p64381050104614"><a name="p64381050104614"></a><a name="p64381050104614"></a>Action</p>
    </td>
    <td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.5.1.3 "><p id="p1643825094613"><a name="p1643825094613"></a><a name="p1643825094613"></a>O</p>
    </td>
    <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p443819502465"><a name="p443819502465"></a><a name="p443819502465"></a>若有函数传入，将在成功、失败后调用该函数。</p>
    </td>
    </tr>
    </tbody>
    </table>

-   示例代码

    ```
    public void ShowKeyboard()
    {
        ShowKeyboardOption showKeyboardOption = new ShowKeyboardOption
        {
            //键盘输入框显示的默认值。
            defaultValue = "default value",
            //键盘中文本的最大长度。
            maxLength = 666,
            //是否为多行输入。
            multiple = true,
            //当点击完成时键盘是否保持。
            confirmHold = true,
            //键盘右下角confirm按钮的类型，只影响按钮的文本内容。
            confirmType = "done",
            success = () => { Debug.Log("TestShowKeyboard success."); },
            fail = () => { Debug.Log("TestShowKeyboard fail."); },
            complete = () => { Debug.Log("TestShowKeyboard Complete."); }
        };
        QG.ShowKeyboard(showKeyboardOption);
    }
    ```

### static void UpdateKeyboard\(UpdateKeyboardOption updateKeyboardOption\)<a name="section103917228181"></a>

-   描述

    更新键盘输入框显示的默认值。

-   请求参数UpdateKeyboardOption

    <a name="table849817617266"></a>
    <table><thead align="left"><tr id="row1498364262"><th class="cellrowborder" valign="top" width="20%" id="mcps1.1.5.1.1"><p id="p14989672613"><a name="p14989672613"></a><a name="p14989672613"></a>参数</p>
    </th>
    <th class="cellrowborder" valign="top" width="25%" id="mcps1.1.5.1.2"><p id="p34981610267"><a name="p34981610267"></a><a name="p34981610267"></a>类型</p>
    </th>
    <th class="cellrowborder" valign="top" width="15%" id="mcps1.1.5.1.3"><p id="p1049819672619"><a name="p1049819672619"></a><a name="p1049819672619"></a>必填(M)/选填(O)</p>
    </th>
    <th class="cellrowborder" valign="top" width="40%" id="mcps1.1.5.1.4"><p id="p1849826142611"><a name="p1849826142611"></a><a name="p1849826142611"></a>说明</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row649913672613"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.5.1.1 "><p id="p2974149112618"><a name="p2974149112618"></a><a name="p2974149112618"></a>value</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.2 "><p id="p79736911268"><a name="p79736911268"></a><a name="p79736911268"></a>string</p>
    </td>
    <td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.5.1.3 "><p id="p16973994262"><a name="p16973994262"></a><a name="p16973994262"></a>M</p>
    </td>
    <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p1997216917267"><a name="p1997216917267"></a><a name="p1997216917267"></a>键盘输入的当前值。</p>
    </td>
    </tr>
    <tr id="row2502136102620"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.5.1.1 "><p id="p75025611266"><a name="p75025611266"></a><a name="p75025611266"></a>success</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.2 "><p id="p1250219642615"><a name="p1250219642615"></a><a name="p1250219642615"></a>Action&lt;<a href="#li14100175119293">UpdateKeyboardSuccessResult</a>&gt;</p>
    </td>
    <td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.5.1.3 "><p id="p950315622616"><a name="p950315622616"></a><a name="p950315622616"></a>O</p>
    </td>
    <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p1050310610267"><a name="p1050310610267"></a><a name="p1050310610267"></a>接口调用成功的回调函数。</p>
    </td>
    </tr>
    <tr id="row1050314616266"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.5.1.1 "><p id="p3503196102612"><a name="p3503196102612"></a><a name="p3503196102612"></a>fail</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.2 "><p id="p185036617265"><a name="p185036617265"></a><a name="p185036617265"></a>Action&lt;<a href="#li16941541955">UpdateKeyboardFailResult</a>&gt;</p>
    </td>
    <td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.5.1.3 "><p id="p450320616267"><a name="p450320616267"></a><a name="p450320616267"></a>O</p>
    </td>
    <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p19503962266"><a name="p19503962266"></a><a name="p19503962266"></a>接口调用失败的回调函数。</p>
    </td>
    </tr>
    <tr id="row17503763268"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.5.1.1 "><p id="p7503368268"><a name="p7503368268"></a><a name="p7503368268"></a>complete</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.2 "><p id="p050416182615"><a name="p050416182615"></a><a name="p050416182615"></a>Action</p>
    </td>
    <td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.5.1.3 "><p id="p350406162618"><a name="p350406162618"></a><a name="p350406162618"></a>O</p>
    </td>
    <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p850416632612"><a name="p850416632612"></a><a name="p850416632612"></a>若有函数传入，将在成功、失败后调用该函数。</p>
    </td>
    </tr>
    </tbody>
    </table>

    -   <a name="li14100175119293"></a>UpdateKeyboardSuccessResult

        <a name="table32061921103413"></a>
        <table><thead align="left"><tr id="row14206142173415"><th class="cellrowborder" valign="top" width="23.53%" id="mcps1.1.4.1.1"><p id="p2206821143415"><a name="p2206821143415"></a><a name="p2206821143415"></a>参数</p>
        </th>
        <th class="cellrowborder" valign="top" width="29.409999999999997%" id="mcps1.1.4.1.2"><p id="p8207182114341"><a name="p8207182114341"></a><a name="p8207182114341"></a>类型</p>
        </th>
        <th class="cellrowborder" valign="top" width="47.06%" id="mcps1.1.4.1.3"><p id="p1920782103417"><a name="p1920782103417"></a><a name="p1920782103417"></a>说明</p>
        </th>
        </tr>
        </thead>
        <tbody><tr id="row5207102115348"><td class="cellrowborder" valign="top" width="23.53%" headers="mcps1.1.4.1.1 "><p id="p189391662355"><a name="p189391662355"></a><a name="p189391662355"></a>errMsg</p>
        </td>
        <td class="cellrowborder" valign="top" width="29.409999999999997%" headers="mcps1.1.4.1.2 "><p id="p1493716615357"><a name="p1493716615357"></a><a name="p1493716615357"></a>string</p>
        </td>
        <td class="cellrowborder" valign="top" width="47.06%" headers="mcps1.1.4.1.3 "><p id="p10936136113510"><a name="p10936136113510"></a><a name="p10936136113510"></a>返回成功信息。</p>
        </td>
        </tr>
        </tbody>
        </table>

    -   <a name="li16941541955"></a>UpdateKeyboardFailResult

        <a name="table1550704803511"></a>
        <table><thead align="left"><tr id="row9507174818356"><th class="cellrowborder" valign="top" width="23.53%" id="mcps1.1.4.1.1"><p id="p250718483353"><a name="p250718483353"></a><a name="p250718483353"></a>参数</p>
        </th>
        <th class="cellrowborder" valign="top" width="29.409999999999997%" id="mcps1.1.4.1.2"><p id="p55071948123517"><a name="p55071948123517"></a><a name="p55071948123517"></a>类型</p>
        </th>
        <th class="cellrowborder" valign="top" width="47.06%" id="mcps1.1.4.1.3"><p id="p1508204815355"><a name="p1508204815355"></a><a name="p1508204815355"></a>说明</p>
        </th>
        </tr>
        </thead>
        <tbody><tr id="row105081548183520"><td class="cellrowborder" valign="top" width="23.53%" headers="mcps1.1.4.1.1 "><p id="p2050818487353"><a name="p2050818487353"></a><a name="p2050818487353"></a>errMsg</p>
        </td>
        <td class="cellrowborder" valign="top" width="29.409999999999997%" headers="mcps1.1.4.1.2 "><p id="p950804813511"><a name="p950804813511"></a><a name="p950804813511"></a>string</p>
        </td>
        <td class="cellrowborder" valign="top" width="47.06%" headers="mcps1.1.4.1.3 "><p id="p7508248183516"><a name="p7508248183516"></a><a name="p7508248183516"></a>返回失败信息。</p>
        </td>
        </tr>
        </tbody>
        </table>

-   示例代码

    ```
    public void UpdateKeyboard()
    {
        UpdateKeyboardOption updateKeyboardOption = new UpdateKeyboardOption
        {
            value = "update value",
            success = (res) => { Debug.Log("UpdateKeyboard success " + res.errMsg); },
            fail = (res) => { Debug.Log("UpdateKeyboard fail " + res.errMsg); },
            complete = () => { Debug.Log("UpdateKeyboard Complete."); }
        };
        QG.UpdateKeyboard(updateKeyboardOption);
    }
    ```

### static void OnKeyboardInput\(Action<string\> action\)<a name="section1619790712"></a>

-   描述

    监听键盘输入事件。

-   请求参数

    <a name="table167051157139"></a>
    <table><thead align="left"><tr id="row970517571635"><th class="cellrowborder" valign="top" width="20%" id="mcps1.1.5.1.1"><p id="p1370613571738"><a name="p1370613571738"></a><a name="p1370613571738"></a>参数</p>
    </th>
    <th class="cellrowborder" valign="top" width="25%" id="mcps1.1.5.1.2"><p id="p167066571033"><a name="p167066571033"></a><a name="p167066571033"></a>类型</p>
    </th>
    <th class="cellrowborder" valign="top" width="15%" id="mcps1.1.5.1.3"><p id="p17706257635"><a name="p17706257635"></a><a name="p17706257635"></a>必填(M)/选填(O)</p>
    </th>
    <th class="cellrowborder" valign="top" width="40%" id="mcps1.1.5.1.4"><p id="p1570613572314"><a name="p1570613572314"></a><a name="p1570613572314"></a>说明</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row18160821549"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.5.1.1 "><p id="p1616015216417"><a name="p1616015216417"></a><a name="p1616015216417"></a>action</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.2 "><p id="p15160226415"><a name="p15160226415"></a><a name="p15160226415"></a>Action&lt;string&gt;</p>
    </td>
    <td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.5.1.3 "><p id="p81611218418"><a name="p81611218418"></a><a name="p81611218418"></a>M</p>
    </td>
    <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p151612024414"><a name="p151612024414"></a><a name="p151612024414"></a>监听键盘输入事件结果。</p>
    </td>
    </tr>
    </tbody>
    </table>

-   示例代码

    ```
    QG.OnKeyboardInput((value) => { Debug.Log("on OnKeyboardInput value: " + value); });
    ```

### static void OffKeyboardInput\(Action<string\> action\)<a name="section758152916226"></a>

-   描述

    取消监听键盘输入事件。

-   请求参数

    <a name="table5391328142419"></a>
    <table><thead align="left"><tr id="row15392162862413"><th class="cellrowborder" valign="top" width="20%" id="mcps1.1.5.1.1"><p id="p1439242872416"><a name="p1439242872416"></a><a name="p1439242872416"></a>参数</p>
    </th>
    <th class="cellrowborder" valign="top" width="25%" id="mcps1.1.5.1.2"><p id="p1039332892410"><a name="p1039332892410"></a><a name="p1039332892410"></a>类型</p>
    </th>
    <th class="cellrowborder" valign="top" width="15%" id="mcps1.1.5.1.3"><p id="p19393192811244"><a name="p19393192811244"></a><a name="p19393192811244"></a>必填(M)/选填(O)</p>
    </th>
    <th class="cellrowborder" valign="top" width="40%" id="mcps1.1.5.1.4"><p id="p33931528142417"><a name="p33931528142417"></a><a name="p33931528142417"></a>说明</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row93931128112413"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.5.1.1 "><p id="p1039392832416"><a name="p1039392832416"></a><a name="p1039392832416"></a>action</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.2 "><p id="p193941728162414"><a name="p193941728162414"></a><a name="p193941728162414"></a>Action</p>
    </td>
    <td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.5.1.3 "><p id="p1439422832410"><a name="p1439422832410"></a><a name="p1439422832410"></a>M</p>
    </td>
    <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p206414416303"><a name="p206414416303"></a><a name="p206414416303"></a>OnKeyboardInput传入的监听函数。不传此参数将默认传null，则移除所有监听函数。</p>
    </td>
    </tr>
    </tbody>
    </table>

-   示例代码

    ```
    QG.OffKeyboardInput(() => { Debug.Log("on OffKeyboardInput"); });
    ```

### static void OnKeyboardConfirm\(Action<string\> action\)<a name="section14491529182618"></a>

-   描述

    监听用户点击confirm按钮事件。

-   请求参数

    <a name="table075561416291"></a>
    <table><thead align="left"><tr id="row97551014172919"><th class="cellrowborder" valign="top" width="20%" id="mcps1.1.5.1.1"><p id="p07558148299"><a name="p07558148299"></a><a name="p07558148299"></a>参数</p>
    </th>
    <th class="cellrowborder" valign="top" width="25%" id="mcps1.1.5.1.2"><p id="p1275614148295"><a name="p1275614148295"></a><a name="p1275614148295"></a>类型</p>
    </th>
    <th class="cellrowborder" valign="top" width="15%" id="mcps1.1.5.1.3"><p id="p5756171417297"><a name="p5756171417297"></a><a name="p5756171417297"></a>必填(M)/选填(O)</p>
    </th>
    <th class="cellrowborder" valign="top" width="40%" id="mcps1.1.5.1.4"><p id="p13756214172913"><a name="p13756214172913"></a><a name="p13756214172913"></a>说明</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row5756214182917"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.5.1.1 "><p id="p1375616147290"><a name="p1375616147290"></a><a name="p1375616147290"></a>action</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.2 "><p id="p157562148296"><a name="p157562148296"></a><a name="p157562148296"></a>Action&lt;string&gt;</p>
    </td>
    <td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.5.1.3 "><p id="p13756514172919"><a name="p13756514172919"></a><a name="p13756514172919"></a>M</p>
    </td>
    <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p1075715148296"><a name="p1075715148296"></a><a name="p1075715148296"></a>监听用户点击confirm按钮事件结果。</p>
    </td>
    </tr>
    </tbody>
    </table>

-   示例代码

    ```
    QG.OnKeyboardConfirm((value) => { Debug.Log("on OnKeyboardConfirm value: " + value); });
    ```

### static void OffKeyboardConfirm\(Action<string\> action\)<a name="section88293319305"></a>

-   描述

    取消监听用户点击confirm按钮事件。

-   请求参数

    <a name="table1078917983114"></a>
    <table><thead align="left"><tr id="row47897914313"><th class="cellrowborder" valign="top" width="20%" id="mcps1.1.5.1.1"><p id="p1778916943117"><a name="p1778916943117"></a><a name="p1778916943117"></a>参数</p>
    </th>
    <th class="cellrowborder" valign="top" width="25%" id="mcps1.1.5.1.2"><p id="p8789693312"><a name="p8789693312"></a><a name="p8789693312"></a>类型</p>
    </th>
    <th class="cellrowborder" valign="top" width="15%" id="mcps1.1.5.1.3"><p id="p17905917311"><a name="p17905917311"></a><a name="p17905917311"></a>必填(M)/选填(O)</p>
    </th>
    <th class="cellrowborder" valign="top" width="40%" id="mcps1.1.5.1.4"><p id="p1579019910317"><a name="p1579019910317"></a><a name="p1579019910317"></a>说明</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row11790199143113"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.5.1.1 "><p id="p10790149183114"><a name="p10790149183114"></a><a name="p10790149183114"></a>action</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.2 "><p id="p279089193112"><a name="p279089193112"></a><a name="p279089193112"></a>Action</p>
    </td>
    <td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.5.1.3 "><p id="p179079113112"><a name="p179079113112"></a><a name="p179079113112"></a>M</p>
    </td>
    <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p1279011993119"><a name="p1279011993119"></a><a name="p1279011993119"></a>OnKeyboardConfirm传入的监听函数。不传此参数将默认传null，则移除所有监听函数。</p>
    </td>
    </tr>
    </tbody>
    </table>

-   示例代码

    ```
    QG.OffKeyboardConfirm(() => { Debug.Log("on OffKeyboardConfirm"); });
    ```

### static void OnKeyboardComplete\(Action<string\> action\)<a name="section18884172143112"></a>

-   描述

    监听键盘收起事件。

-   请求参数

    <a name="table7211835133211"></a>
    <table><thead align="left"><tr id="row221110353324"><th class="cellrowborder" valign="top" width="20%" id="mcps1.1.5.1.1"><p id="p112110353325"><a name="p112110353325"></a><a name="p112110353325"></a>参数</p>
    </th>
    <th class="cellrowborder" valign="top" width="25%" id="mcps1.1.5.1.2"><p id="p102111835133218"><a name="p102111835133218"></a><a name="p102111835133218"></a>类型</p>
    </th>
    <th class="cellrowborder" valign="top" width="15%" id="mcps1.1.5.1.3"><p id="p1321153512324"><a name="p1321153512324"></a><a name="p1321153512324"></a>必填(M)/选填(O)</p>
    </th>
    <th class="cellrowborder" valign="top" width="40%" id="mcps1.1.5.1.4"><p id="p112126358325"><a name="p112126358325"></a><a name="p112126358325"></a>说明</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row921218357327"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.5.1.1 "><p id="p521211354326"><a name="p521211354326"></a><a name="p521211354326"></a>action</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.2 "><p id="p8212123511325"><a name="p8212123511325"></a><a name="p8212123511325"></a>Action&lt;string&gt;</p>
    </td>
    <td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.5.1.3 "><p id="p112121635193213"><a name="p112121635193213"></a><a name="p112121635193213"></a>M</p>
    </td>
    <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p221273513321"><a name="p221273513321"></a><a name="p221273513321"></a>监听键盘收起事件结果。</p>
    </td>
    </tr>
    </tbody>
    </table>

-   示例代码

    ```
    QG.OnKeyboardComplete((value) => { Debug.Log("on OnKeyboardComplete value: " + value); });
    ```

### static void OffKeyboardComplete\(Action<string\> action\)<a name="section1265315519321"></a>

-   描述

    取消监听键盘收起事件。

-   请求参数

    <a name="table4178175733314"></a>
    <table><thead align="left"><tr id="row1817955763316"><th class="cellrowborder" valign="top" width="20%" id="mcps1.1.5.1.1"><p id="p121791957153310"><a name="p121791957153310"></a><a name="p121791957153310"></a>参数</p>
    </th>
    <th class="cellrowborder" valign="top" width="25%" id="mcps1.1.5.1.2"><p id="p01791357183310"><a name="p01791357183310"></a><a name="p01791357183310"></a>类型</p>
    </th>
    <th class="cellrowborder" valign="top" width="15%" id="mcps1.1.5.1.3"><p id="p217985753316"><a name="p217985753316"></a><a name="p217985753316"></a>必填(M)/选填(O)</p>
    </th>
    <th class="cellrowborder" valign="top" width="40%" id="mcps1.1.5.1.4"><p id="p017985773318"><a name="p017985773318"></a><a name="p017985773318"></a>说明</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row20179165793311"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.5.1.1 "><p id="p1717925714334"><a name="p1717925714334"></a><a name="p1717925714334"></a>action</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.2 "><p id="p4180105710338"><a name="p4180105710338"></a><a name="p4180105710338"></a>Action</p>
    </td>
    <td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.5.1.3 "><p id="p21800576331"><a name="p21800576331"></a><a name="p21800576331"></a>M</p>
    </td>
    <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p6180195743313"><a name="p6180195743313"></a><a name="p6180195743313"></a>OnKeyboardComplete传入的监听函数。不传此参数将默认传null，则移除所有监听函数。</p>
    </td>
    </tr>
    </tbody>
    </table>

-   示例代码

    ```
    QG.OffKeyboardComplete(() => { Debug.Log("on OffKeyboardComplete"); });
    ```

