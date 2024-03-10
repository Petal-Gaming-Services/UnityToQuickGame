# 桌面图标API<a name="ZH-CN_TOPIC_0000001822360197"></a>

-   [接口定义](#section183503126613)
    -   [static void InstallShortcut\(InstallShortcutOption installShortcutOption\)](#section14516132311011)
    -   [static void HasShortcutInstalled\(HasShortcutInstalledOption hasShortcutInstalledOption\)](#section65131227113)

## 接口定义<a name="section183503126613"></a>

<a name="table892310973612"></a>
<table><thead align="left"><tr id="row19232993618"><th class="cellrowborder" valign="top" width="50%" id="mcps1.1.3.1.1"><p id="p49246933615"><a name="p49246933615"></a><a name="p49246933615"></a>接口</p>
</th>
<th class="cellrowborder" valign="top" width="50%" id="mcps1.1.3.1.2"><p id="p592499133614"><a name="p592499133614"></a><a name="p592499133614"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="row043620214017"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.1 "><p id="p1769181917919"><a name="p1769181917919"></a><a name="p1769181917919"></a><a href="#section14516132311011">static void InstallShortcut(InstallShortcutOption installShortcutOption)</a></p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.2 "><p id="p26812191797"><a name="p26812191797"></a><a name="p26812191797"></a>创建快游戏的桌面图标。</p>
</td>
</tr>
<tr id="row4958151151011"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.1 "><p id="p18708194916"><a name="p18708194916"></a><a name="p18708194916"></a><a href="#section65131227113">static void HasShortcutInstalled(HasShortcutInstalledOption hasShortcutInstalledOption)</a></p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.2 "><p id="p96911911920"><a name="p96911911920"></a><a name="p96911911920"></a>获取是否有快游戏的桌面图标。</p>
</td>
</tr>
</tbody>
</table>

### static void InstallShortcut\(InstallShortcutOption installShortcutOption\)<a name="section14516132311011"></a>

-   描述

    创建快游戏的桌面图标。

-   请求参数InstallShortcutOption

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
    <tbody><tr id="row175291116134217"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.5.1.1 "><p id="p187611576111"><a name="p187611576111"></a><a name="p187611576111"></a>message</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.2 "><p id="p77603751112"><a name="p77603751112"></a><a name="p77603751112"></a>string</p>
    </td>
    <td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.5.1.3 "><p id="p13759207171111"><a name="p13759207171111"></a><a name="p13759207171111"></a>O</p>
    </td>
    <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p9759671119"><a name="p9759671119"></a><a name="p9759671119"></a>提示语。</p>
    </td>
    </tr>
    <tr id="row12724173811497"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.5.1.1 "><p id="p1076733645811"><a name="p1076733645811"></a><a name="p1076733645811"></a>success</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.2 "><p id="p5767103655812"><a name="p5767103655812"></a><a name="p5767103655812"></a>Action&lt;<a href="#li1467011162314">InstallShortcutSuccessResult</a>&gt;</p>
    </td>
    <td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.5.1.3 "><p id="p107671236135813"><a name="p107671236135813"></a><a name="p107671236135813"></a>O</p>
    </td>
    <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p177677364586"><a name="p177677364586"></a><a name="p177677364586"></a>接口调用成功的回调函数。</p>
    </td>
    </tr>
    <tr id="row937413914919"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.5.1.1 "><p id="p127671636205810"><a name="p127671636205810"></a><a name="p127671636205810"></a>fail</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.2 "><p id="p1767143617586"><a name="p1767143617586"></a><a name="p1767143617586"></a>Action&lt;<a href="#li6981756592">InstallShortcutFailResult</a>&gt;</p>
    </td>
    <td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.5.1.3 "><p id="p876703675820"><a name="p876703675820"></a><a name="p876703675820"></a>O</p>
    </td>
    <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p1976733612583"><a name="p1976733612583"></a><a name="p1976733612583"></a>接口调用失败的回调函数。</p>
    </td>
    </tr>
    <tr id="row9621940204910"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.5.1.1 "><p id="p5767736135812"><a name="p5767736135812"></a><a name="p5767736135812"></a>complete</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.2 "><p id="p1767123619581"><a name="p1767123619581"></a><a name="p1767123619581"></a>Action</p>
    </td>
    <td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.5.1.3 "><p id="p11767123616583"><a name="p11767123616583"></a><a name="p11767123616583"></a>O</p>
    </td>
    <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p1576733610589"><a name="p1576733610589"></a><a name="p1576733610589"></a>若有函数传入，将在成功、失败后调用该函数。</p>
    </td>
    </tr>
    </tbody>
    </table>

    -   <a name="li1467011162314"></a>InstallShortcutSuccessResult

        <a name="table1848883105810"></a>
        <table><thead align="left"><tr id="row848817320586"><th class="cellrowborder" valign="top" width="25%" id="mcps1.1.4.1.1"><p id="p24881334586"><a name="p24881334586"></a><a name="p24881334586"></a>参数</p>
        </th>
        <th class="cellrowborder" valign="top" width="25%" id="mcps1.1.4.1.2"><p id="p84881530586"><a name="p84881530586"></a><a name="p84881530586"></a>类型</p>
        </th>
        <th class="cellrowborder" valign="top" width="50%" id="mcps1.1.4.1.3"><p id="p12488133175812"><a name="p12488133175812"></a><a name="p12488133175812"></a>说明</p>
        </th>
        </tr>
        </thead>
        <tbody><tr id="row948812355810"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p55935120589"><a name="p55935120589"></a><a name="p55935120589"></a>message</p>
        </td>
        <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p548814355819"><a name="p548814355819"></a><a name="p548814355819"></a>string</p>
        </td>
        <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p119303206588"><a name="p119303206588"></a><a name="p119303206588"></a>成功回调提示语。</p>
        </td>
        </tr>
        </tbody>
        </table>

    -   <a name="li6981756592"></a>InstallShortcutFailResult

        <a name="table18997937102814"></a>
        <table><thead align="left"><tr id="row16997123742812"><th class="cellrowborder" valign="top" width="25%" id="mcps1.1.4.1.1"><p id="p13997103722817"><a name="p13997103722817"></a><a name="p13997103722817"></a>参数</p>
        </th>
        <th class="cellrowborder" valign="top" width="25%" id="mcps1.1.4.1.2"><p id="p129971437172818"><a name="p129971437172818"></a><a name="p129971437172818"></a>类型</p>
        </th>
        <th class="cellrowborder" valign="top" width="50%" id="mcps1.1.4.1.3"><p id="p139971037192812"><a name="p139971037192812"></a><a name="p139971037192812"></a>说明</p>
        </th>
        </tr>
        </thead>
        <tbody><tr id="row09973378286"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p16664728259"><a name="p16664728259"></a><a name="p16664728259"></a>errocode</p>
        </td>
        <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p1299714379285"><a name="p1299714379285"></a><a name="p1299714379285"></a>string</p>
        </td>
        <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p099713792815"><a name="p099713792815"></a><a name="p099713792815"></a><a href="#li97741541152514">错误码</a>。</p>
        </td>
        </tr>
        <tr id="row99971237152818"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p6997133722816"><a name="p6997133722816"></a><a name="p6997133722816"></a>erromsg</p>
        </td>
        <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p119979372286"><a name="p119979372286"></a><a name="p119979372286"></a>string</p>
        </td>
        <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p5997183762810"><a name="p5997183762810"></a><a name="p5997183762810"></a>错误码描述信息。</p>
        </td>
        </tr>
        </tbody>
        </table>

-   <a name="li97741541152514"></a>错误码

    <a name="table19925882517"></a>
    <table><thead align="left"><tr id="row15101458142512"><th class="cellrowborder" valign="top" width="50%" id="mcps1.1.3.1.1"><p id="p10110145141615"><a name="p10110145141615"></a><a name="p10110145141615"></a>错误码</p>
    </th>
    <th class="cellrowborder" valign="top" width="50%" id="mcps1.1.3.1.2"><p id="p13110651101615"><a name="p13110651101615"></a><a name="p13110651101615"></a>说明</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row1010105814255"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.1 "><p id="p10815532262"><a name="p10815532262"></a><a name="p10815532262"></a>201</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.2 "><p id="p128195315261"><a name="p128195315261"></a><a name="p128195315261"></a>用户拒绝，获取创建桌面图标权限失败。</p>
    </td>
    </tr>
    <tr id="row41019581252"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.1 "><p id="p981195313264"><a name="p981195313264"></a><a name="p981195313264"></a>220</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.2 "><p id="p08115316260"><a name="p08115316260"></a><a name="p08115316260"></a>快游戏不支持创建桌面图标。</p>
    </td>
    </tr>
    </tbody>
    </table>

-   示例代码

    ```
    public void InstallShortcut()
    {
        InstallShortcutOption installShortcutOption = new InstallShortcutOption
        {
            message = "Adds the shortcut to the desktop for convenient use next time.",
            success = (res) =>
            {
                Debug.Log("InstallShortcutOption success." + res.message);
            },
            fail = (res) =>
            {
                Debug.Log("InstallShortcutOption fail errocode: " + res.errocode + ", erromsg: " + res.erromsg);
            },
            complete = () => { Debug.Log("InstallShortcutOption Complete."); }
        };
        QG.InstallShortcut(installShortcutOption);
    }
    ```

### static void HasShortcutInstalled\(HasShortcutInstalledOption hasShortcutInstalledOption\)<a name="section65131227113"></a>

-   描述

    获取是否有快游戏的桌面图标。

-   请求参数HasShortcutInstalledOption

    <a name="table14513112281113"></a>
    <table><thead align="left"><tr id="row19513922201116"><th class="cellrowborder" valign="top" width="20%" id="mcps1.1.5.1.1"><p id="p1551310226112"><a name="p1551310226112"></a><a name="p1551310226112"></a>参数</p>
    </th>
    <th class="cellrowborder" valign="top" width="25%" id="mcps1.1.5.1.2"><p id="p15513172218119"><a name="p15513172218119"></a><a name="p15513172218119"></a>类型</p>
    </th>
    <th class="cellrowborder" valign="top" width="15%" id="mcps1.1.5.1.3"><p id="p851322231117"><a name="p851322231117"></a><a name="p851322231117"></a>必填(M)/选填(O)</p>
    </th>
    <th class="cellrowborder" valign="top" width="40%" id="mcps1.1.5.1.4"><p id="p1151312210118"><a name="p1151312210118"></a><a name="p1151312210118"></a>说明</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row7513112231110"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.5.1.1 "><p id="p320208181410"><a name="p320208181410"></a><a name="p320208181410"></a>success</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.2 "><p id="p5209814145"><a name="p5209814145"></a><a name="p5209814145"></a>Action&lt;<a href="#li137061642448">HasShortcutInstalledSuccessResult</a>&gt;</p>
    </td>
    <td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.5.1.3 "><p id="p220188121413"><a name="p220188121413"></a><a name="p220188121413"></a>O</p>
    </td>
    <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p1820128181420"><a name="p1820128181420"></a><a name="p1820128181420"></a>接口调用成功的回调函数。</p>
    </td>
    </tr>
    <tr id="row1651492261112"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.5.1.1 "><p id="p102013816143"><a name="p102013816143"></a><a name="p102013816143"></a>fail</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.2 "><p id="p4201589142"><a name="p4201589142"></a><a name="p4201589142"></a>Action&lt;<a href="#li1057020110101">HasShortcutInstalledFailResult</a>&gt;</p>
    </td>
    <td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.5.1.3 "><p id="p9203811419"><a name="p9203811419"></a><a name="p9203811419"></a>O</p>
    </td>
    <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p1120138141417"><a name="p1120138141417"></a><a name="p1120138141417"></a>接口调用失败的回调函数。</p>
    </td>
    </tr>
    <tr id="row651412291119"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.5.1.1 "><p id="p92016841414"><a name="p92016841414"></a><a name="p92016841414"></a>complete</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.2 "><p id="p32148101419"><a name="p32148101419"></a><a name="p32148101419"></a>Action</p>
    </td>
    <td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.5.1.3 "><p id="p021138101412"><a name="p021138101412"></a><a name="p021138101412"></a>O</p>
    </td>
    <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p32198171410"><a name="p32198171410"></a><a name="p32198171410"></a>若有函数传入，将在成功、失败后调用该函数。</p>
    </td>
    </tr>
    </tbody>
    </table>

    -   <a name="li137061642448"></a>HasShortcutInstalledSuccessResult

        <a name="table12922214614"></a>
        <table><thead align="left"><tr id="row2292221666"><th class="cellrowborder" valign="top" width="25%" id="mcps1.1.4.1.1"><p id="p42921720617"><a name="p42921720617"></a><a name="p42921720617"></a>参数</p>
        </th>
        <th class="cellrowborder" valign="top" width="25%" id="mcps1.1.4.1.2"><p id="p2029218214615"><a name="p2029218214615"></a><a name="p2029218214615"></a>类型</p>
        </th>
        <th class="cellrowborder" valign="top" width="50%" id="mcps1.1.4.1.3"><p id="p15292152967"><a name="p15292152967"></a><a name="p15292152967"></a>说明</p>
        </th>
        </tr>
        </thead>
        <tbody><tr id="row162921721963"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p142921528612"><a name="p142921528612"></a><a name="p142921528612"></a>hasShortcut</p>
        </td>
        <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p16676825463"><a name="p16676825463"></a><a name="p16676825463"></a>bool</p>
        </td>
        <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p8175743775"><a name="p8175743775"></a><a name="p8175743775"></a>是否有快游戏的桌面图标：</p>
        <a name="ul1961924416712"></a><a name="ul1961924416712"></a><ul id="ul1961924416712"><li>true：已创建。</li><li>false：未创建。</li></ul>
        </td>
        </tr>
        </tbody>
        </table>

    -   <a name="li1057020110101"></a>HasShortcutInstalledFailResult

        <a name="table848212551347"></a>
        <table><thead align="left"><tr id="row148345514412"><th class="cellrowborder" valign="top" width="25%" id="mcps1.1.4.1.1"><p id="p1748316559410"><a name="p1748316559410"></a><a name="p1748316559410"></a>参数</p>
        </th>
        <th class="cellrowborder" valign="top" width="25%" id="mcps1.1.4.1.2"><p id="p144838558419"><a name="p144838558419"></a><a name="p144838558419"></a>类型</p>
        </th>
        <th class="cellrowborder" valign="top" width="50%" id="mcps1.1.4.1.3"><p id="p7483175513419"><a name="p7483175513419"></a><a name="p7483175513419"></a>说明</p>
        </th>
        </tr>
        </thead>
        <tbody><tr id="row1848312551341"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p174831155649"><a name="p174831155649"></a><a name="p174831155649"></a>errorMsg</p>
        </td>
        <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p248315552417"><a name="p248315552417"></a><a name="p248315552417"></a>string</p>
        </td>
        <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p2483655248"><a name="p2483655248"></a><a name="p2483655248"></a>错误码描述信息。</p>
        </td>
        </tr>
        </tbody>
        </table>

-   示例代码

    ```
    public void HasShortcutInstalled()
    {
        HasShortcutInstalledOption hasShortcutInstalledOption = new HasShortcutInstalledOption
        {
            success = (res) => { Debug.Log("HasShortcutInstalledOption success." + res.hasShortcut); },
            fail = (res) => { Debug.Log("HasShortcutInstalledOption fail." + res.errorMsg); },
            complete = () => { Debug.Log("HasShortcutInstalledOption Complete."); }
        };
        QG.HasShortcutInstalled(hasShortcutInstalledOption);
    }
    ```

