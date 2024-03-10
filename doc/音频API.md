# 音频API<a name="ZH-CN_TOPIC_0000001716169004"></a>

-   [音频属性](#section1865191604913)
-   [接口和类定义](#section183503126613)
    -   [static InnerAudioContext CreateInnerAudioContext\(\)](#section109531237503)
    -   [void Play\(\)](#section1231910489273)
    -   [void Pause\(\)](#section0100105311287)
    -   [void Stop\(\)](#section295611358297)
    -   [void Seek\(float position\)](#section368625633012)
    -   [void Destroy\(\)](#section1813818183414)
    -   [void OnEnded\(Action callback\)](#section7316187103615)
    -   [void OffEnded\(\)](#section7584122317384)
    -   [void OnPlay\(Action callback\)](#section113100618396)
    -   [void OffPlay\(\)](#section1032565024015)
    -   [void OnPause\(Action callback\)](#section1079911413418)
    -   [void OffPause\(\)](#section9600778435)
    -   [void OnStop\(Action callback\)](#section9479143810442)
    -   [void OffStop\(\)](#section183121314154614)
    -   [void OnError\(Action<InnerAudioContextErrorResult\> callback\)](#section14809195214465)
    -   [void OffError\(\)](#section103201440105116)
    -   [void OnCanPlay\(Action callback\)](#section325714241526)
    -   [void OffCanPlay\(\)](#section06642046135319)
    -   [void OnWaiting\(Action callback\)](#section22082288548)
    -   [void OffWaiting\(\)](#section89751052175510)
    -   [void OnSeeking\(Action callback\)](#section1524192715612)
    -   [void OffSeeking\(\)](#section7720152335718)
    -   [void OnSeeked\(Action callback\)](#section340163455813)
    -   [void OffSeeked\(\)](#section15377122345911)

## 音频属性<a name="section1865191604913"></a>

<a name="table4637175211315"></a>
<table><thead align="left"><tr id="row163719527320"><th class="cellrowborder" valign="top" width="20%" id="mcps1.1.6.1.1"><p id="p1663795212316"><a name="p1663795212316"></a><a name="p1663795212316"></a>属性</p>
</th>
<th class="cellrowborder" valign="top" width="15%" id="mcps1.1.6.1.2"><p id="p1739954617610"><a name="p1739954617610"></a><a name="p1739954617610"></a>类型</p>
</th>
<th class="cellrowborder" valign="top" width="20%" id="mcps1.1.6.1.3"><p id="p12751405596"><a name="p12751405596"></a><a name="p12751405596"></a>必填(M)/选填(O)</p>
</th>
<th class="cellrowborder" valign="top" width="15%" id="mcps1.1.6.1.4"><p id="p986721193917"><a name="p986721193917"></a><a name="p986721193917"></a>默认值</p>
</th>
<th class="cellrowborder" valign="top" width="30%" id="mcps1.1.6.1.5"><p id="p1463725215311"><a name="p1463725215311"></a><a name="p1463725215311"></a>说明</p>
</th>
</tr>
</thead>
<tbody><tr id="row6637252631"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.6.1.1 "><p id="p155891411747"><a name="p155891411747"></a><a name="p155891411747"></a>Src</p>
</td>
<td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.6.1.2 "><p id="p15399194619612"><a name="p15399194619612"></a><a name="p15399194619612"></a>string</p>
</td>
<td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.6.1.3 "><p id="p17534035916"><a name="p17534035916"></a><a name="p17534035916"></a>M</p>
</td>
<td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.6.1.4 "><p id="p138732143911"><a name="p138732143911"></a><a name="p138732143911"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="30%" headers="mcps1.1.6.1.5 "><p id="p9589311747"><a name="p9589311747"></a><a name="p9589311747"></a>音频地址，用于直接播放。</p>
</td>
</tr>
<tr id="row063716528319"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.6.1.1 "><p id="p558916111543"><a name="p558916111543"></a><a name="p558916111543"></a>StartTime</p>
</td>
<td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.6.1.2 "><p id="p73991446469"><a name="p73991446469"></a><a name="p73991446469"></a>float</p>
</td>
<td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.6.1.3 "><p id="p97564045912"><a name="p97564045912"></a><a name="p97564045912"></a>M</p>
</td>
<td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.6.1.4 "><p id="p1587102113916"><a name="p1587102113916"></a><a name="p1587102113916"></a>0</p>
</td>
<td class="cellrowborder" valign="top" width="30%" headers="mcps1.1.6.1.5 "><p id="p1858991113414"><a name="p1858991113414"></a><a name="p1858991113414"></a>开始播放的位置，单位：秒，可保留小数点后6位。</p>
</td>
</tr>
<tr id="row10637752735"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.6.1.1 "><p id="p155894111342"><a name="p155894111342"></a><a name="p155894111342"></a>Autoplay</p>
</td>
<td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.6.1.2 "><p id="p63995465619"><a name="p63995465619"></a><a name="p63995465619"></a>bool</p>
</td>
<td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.6.1.3 "><p id="p1775134019597"><a name="p1775134019597"></a><a name="p1775134019597"></a>M</p>
</td>
<td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.6.1.4 "><p id="p1587172113919"><a name="p1587172113919"></a><a name="p1587172113919"></a>false</p>
</td>
<td class="cellrowborder" valign="top" width="30%" headers="mcps1.1.6.1.5 "><p id="p1389732433813"><a name="p1389732433813"></a><a name="p1389732433813"></a>是否自动播放：</p>
</td>
</tr>
<tr id="row863815521434"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.6.1.1 "><p id="p95891711444"><a name="p95891711444"></a><a name="p95891711444"></a>Loop</p>
</td>
<td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.6.1.2 "><p id="p139919469619"><a name="p139919469619"></a><a name="p139919469619"></a>bool</p>
</td>
<td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.6.1.3 "><p id="p14751340145911"><a name="p14751340145911"></a><a name="p14751340145911"></a>M</p>
</td>
<td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.6.1.4 "><p id="p48792116391"><a name="p48792116391"></a><a name="p48792116391"></a>false</p>
</td>
<td class="cellrowborder" valign="top" width="30%" headers="mcps1.1.6.1.5 "><p id="p1358919111847"><a name="p1358919111847"></a><a name="p1358919111847"></a>是否循环播放：</p>
</td>
</tr>
<tr id="row863813521037"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.6.1.1 "><p id="p25897115419"><a name="p25897115419"></a><a name="p25897115419"></a>ObeyMuteSwitch</p>
</td>
<td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.6.1.2 "><p id="p183996468618"><a name="p183996468618"></a><a name="p183996468618"></a>bool</p>
</td>
<td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.6.1.3 "><p id="p107524095911"><a name="p107524095911"></a><a name="p107524095911"></a>M</p>
</td>
<td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.6.1.4 "><p id="p1587821193910"><a name="p1587821193910"></a><a name="p1587821193910"></a>true</p>
</td>
<td class="cellrowborder" valign="top" width="30%" headers="mcps1.1.6.1.5 "><p id="p3704131010513"><a name="p3704131010513"></a><a name="p3704131010513"></a>是否遵循系统静音开关：</p>
<a name="ul17558162119518"></a><a name="ul17558162119518"></a><ul id="ul17558162119518"><li>true：遵循。</li><li>false：不遵循。即使玩家设置成静音，也能继续发出声音。</li></ul>
</td>
</tr>
<tr id="row1263820528319"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.6.1.1 "><p id="p105891011345"><a name="p105891011345"></a><a name="p105891011345"></a>Volume</p>
</td>
<td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.6.1.2 "><p id="p1399146565"><a name="p1399146565"></a><a name="p1399146565"></a>float</p>
</td>
<td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.6.1.3 "><p id="p13751540115916"><a name="p13751540115916"></a><a name="p13751540115916"></a>M</p>
</td>
<td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.6.1.4 "><p id="p168716219393"><a name="p168716219393"></a><a name="p168716219393"></a>1</p>
</td>
<td class="cellrowborder" valign="top" width="30%" headers="mcps1.1.6.1.5 "><p id="p185897111945"><a name="p185897111945"></a><a name="p185897111945"></a>音量，范围是0~1的浮点数。</p>
</td>
</tr>
<tr id="row1163835211311"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.6.1.1 "><p id="p15891411649"><a name="p15891411649"></a><a name="p15891411649"></a>Duration</p>
</td>
<td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.6.1.2 "><p id="p14399846568"><a name="p14399846568"></a><a name="p14399846568"></a>float</p>
</td>
<td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.6.1.3 "><p id="p1875154045913"><a name="p1875154045913"></a><a name="p1875154045913"></a>M</p>
</td>
<td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.6.1.4 "><p id="p4871521173918"><a name="p4871521173918"></a><a name="p4871521173918"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="30%" headers="mcps1.1.6.1.5 "><p id="p3589411446"><a name="p3589411446"></a><a name="p3589411446"></a>音频的长度，单位：秒。仅在当前音频有合法Src时才返回此参数（只读）。</p>
</td>
</tr>
<tr id="row5917048412"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.6.1.1 "><p id="p16589811946"><a name="p16589811946"></a><a name="p16589811946"></a>CurrentTime</p>
</td>
<td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.6.1.2 "><p id="p1739904614618"><a name="p1739904614618"></a><a name="p1739904614618"></a>float</p>
</td>
<td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.6.1.3 "><p id="p77594016593"><a name="p77594016593"></a><a name="p77594016593"></a>M</p>
</td>
<td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.6.1.4 "><p id="p128732118392"><a name="p128732118392"></a><a name="p128732118392"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="30%" headers="mcps1.1.6.1.5 "><p id="p6343712114613"><a name="p6343712114613"></a><a name="p6343712114613"></a>音频的播放时间位置，单位：秒。仅在当前音频有合法地址Src时才返回此参数，可保留小数点后6位（只读）。</p>
</td>
</tr>
<tr id="row14834755415"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.6.1.1 "><p id="p135891711441"><a name="p135891711441"></a><a name="p135891711441"></a>Paused</p>
</td>
<td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.6.1.2 "><p id="p144001746465"><a name="p144001746465"></a><a name="p144001746465"></a>bool</p>
</td>
<td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.6.1.3 "><p id="p1675940195912"><a name="p1675940195912"></a><a name="p1675940195912"></a>M</p>
</td>
<td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.6.1.4 "><p id="p1487152119390"><a name="p1487152119390"></a><a name="p1487152119390"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="30%" headers="mcps1.1.6.1.5 "><p id="p259016111143"><a name="p259016111143"></a><a name="p259016111143"></a>音频播放状态是否处于暂停/停止（只读）：</p>
<a name="ul1352118034910"></a><a name="ul1352118034910"></a><ul id="ul1352118034910"><li>true：暂停/停止状态。</li><li>false：播放状态。</li></ul>
</td>
</tr>
<tr id="row13384196745"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.6.1.1 "><p id="p155902118418"><a name="p155902118418"></a><a name="p155902118418"></a>Buffered</p>
</td>
<td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.6.1.2 "><p id="p1940054613615"><a name="p1940054613615"></a><a name="p1940054613615"></a>float</p>
</td>
<td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.6.1.3 "><p id="p17584015593"><a name="p17584015593"></a><a name="p17584015593"></a>M</p>
</td>
<td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.6.1.4 "><p id="p88792114393"><a name="p88792114393"></a><a name="p88792114393"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="30%" headers="mcps1.1.6.1.5 "><p id="p1759016111842"><a name="p1759016111842"></a><a name="p1759016111842"></a>音频缓冲的时间点，单位：秒，当前时间点的内容已缓冲（只读）。</p>
</td>
</tr>
</tbody>
</table>

## 接口和类定义<a name="section183503126613"></a>

<a name="table892310973612"></a>
<table><thead align="left"><tr id="row19232993618"><th class="cellrowborder" valign="top" width="15%" id="mcps1.1.4.1.1"><p id="p24300399372"><a name="p24300399372"></a><a name="p24300399372"></a>分类</p>
</th>
<th class="cellrowborder" valign="top" width="40%" id="mcps1.1.4.1.2"><p id="p49246933615"><a name="p49246933615"></a><a name="p49246933615"></a>定义</p>
</th>
<th class="cellrowborder" valign="top" width="45%" id="mcps1.1.4.1.3"><p id="p592499133614"><a name="p592499133614"></a><a name="p592499133614"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="row19241298367"><td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.4.1.1 "><p id="p104301139133720"><a name="p104301139133720"></a><a name="p104301139133720"></a>接口</p>
</td>
<td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.4.1.2 "><p id="p4491115132110"><a name="p4491115132110"></a><a name="p4491115132110"></a><a href="#section109531237503">static InnerAudioContext CreateInnerAudioContext()</a></p>
</td>
<td class="cellrowborder" valign="top" width="45%" headers="mcps1.1.4.1.3 "><p id="p348121518218"><a name="p348121518218"></a><a name="p348121518218"></a>获取用于播放的音频实例，每次调用均会创建一个新的实例对象。</p>
</td>
</tr>
<tr id="row18106152171211"><td class="cellrowborder" rowspan="23" valign="top" width="15%" headers="mcps1.1.4.1.1 "><p id="p2430113910377"><a name="p2430113910377"></a><a name="p2430113910377"></a>InnerAudioContext类</p>
</td>
<td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.4.1.2 "><p id="p131071352201216"><a name="p131071352201216"></a><a name="p131071352201216"></a><a href="#section1231910489273">void Play()</a></p>
</td>
<td class="cellrowborder" valign="top" width="45%" headers="mcps1.1.4.1.3 "><p id="p1110795218122"><a name="p1110795218122"></a><a name="p1110795218122"></a>播放音频。</p>
</td>
</tr>
<tr id="row14643185313121"><td class="cellrowborder" valign="top" headers="mcps1.1.4.1.1 "><p id="p17643135318128"><a name="p17643135318128"></a><a name="p17643135318128"></a><a href="#section0100105311287">void Pause()</a></p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.4.1.2 "><p id="p66431553181210"><a name="p66431553181210"></a><a name="p66431553181210"></a>暂停音频播放，继续播放会从暂停处开始播放。</p>
</td>
</tr>
<tr id="row14157205410122"><td class="cellrowborder" valign="top" headers="mcps1.1.4.1.1 "><p id="p1915718546122"><a name="p1915718546122"></a><a name="p1915718546122"></a><a href="#section295611358297">void Stop()</a></p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.4.1.2 "><p id="p2157654121219"><a name="p2157654121219"></a><a name="p2157654121219"></a>停止音频播放，再播放会从头开始播放。</p>
</td>
</tr>
<tr id="row45431854101218"><td class="cellrowborder" valign="top" headers="mcps1.1.4.1.1 "><p id="p155446541123"><a name="p155446541123"></a><a name="p155446541123"></a><a href="#section368625633012">void Seek(float position)</a></p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.4.1.2 "><p id="p45443548127"><a name="p45443548127"></a><a name="p45443548127"></a>跳转到指定位置播放音频。</p>
</td>
</tr>
<tr id="row10141355141216"><td class="cellrowborder" valign="top" headers="mcps1.1.4.1.1 "><p id="p1614105571215"><a name="p1614105571215"></a><a name="p1614105571215"></a><a href="#section1813818183414">void Destroy()</a></p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.4.1.2 "><p id="p4141552126"><a name="p4141552126"></a><a name="p4141552126"></a>销毁音频实例。</p>
</td>
</tr>
<tr id="row157914556121"><td class="cellrowborder" valign="top" headers="mcps1.1.4.1.1 "><p id="p1657995501218"><a name="p1657995501218"></a><a name="p1657995501218"></a><a href="#section7316187103615">void OnEnded(Action callback)</a></p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.4.1.2 "><p id="p14580555101214"><a name="p14580555101214"></a><a name="p14580555101214"></a>监听音频<strong id="b17120152911377"><a name="b17120152911377"></a><a name="b17120152911377"></a>自然播放至结束</strong>事件。</p>
</td>
</tr>
<tr id="row16616184142"><td class="cellrowborder" valign="top" headers="mcps1.1.4.1.1 "><p id="p766114187142"><a name="p766114187142"></a><a name="p766114187142"></a><a href="#section7584122317384">void OffEnded()</a></p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.4.1.2 "><p id="p9661161814143"><a name="p9661161814143"></a><a name="p9661161814143"></a>取消监听音频<strong id="b13110232153713"><a name="b13110232153713"></a><a name="b13110232153713"></a>自然播放至结束</strong>事件。</p>
</td>
</tr>
<tr id="row7310919141418"><td class="cellrowborder" valign="top" headers="mcps1.1.4.1.1 "><p id="p73106199146"><a name="p73106199146"></a><a name="p73106199146"></a><a href="#section113100618396">void OnPlay(Action callback)</a></p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.4.1.2 "><p id="p14310181931420"><a name="p14310181931420"></a><a name="p14310181931420"></a>监听<strong id="b939762972615"><a name="b939762972615"></a><a name="b939762972615"></a>音频播放</strong>事件。</p>
</td>
</tr>
<tr id="row79911191141"><td class="cellrowborder" valign="top" headers="mcps1.1.4.1.1 "><p id="p1599111195140"><a name="p1599111195140"></a><a name="p1599111195140"></a><a href="#section1032565024015">void OffPlay()</a></p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.4.1.2 "><p id="p2991171919144"><a name="p2991171919144"></a><a name="p2991171919144"></a>取消监听<strong id="b1118103613261"><a name="b1118103613261"></a><a name="b1118103613261"></a>音频播放</strong>事件。</p>
</td>
</tr>
<tr id="row342572041412"><td class="cellrowborder" valign="top" headers="mcps1.1.4.1.1 "><p id="p54251120121420"><a name="p54251120121420"></a><a name="p54251120121420"></a><a href="#section1079911413418">void OnPause(Action callback)</a></p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.4.1.2 "><p id="p1342582015148"><a name="p1342582015148"></a><a name="p1342582015148"></a>监听音频暂停播放事件。</p>
</td>
</tr>
<tr id="row138531421111416"><td class="cellrowborder" valign="top" headers="mcps1.1.4.1.1 "><p id="p08537217144"><a name="p08537217144"></a><a name="p08537217144"></a><a href="#section9600778435">void OffPause()</a></p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.4.1.2 "><p id="p14853112141413"><a name="p14853112141413"></a><a name="p14853112141413"></a>取消监听音频暂停播放事件。</p>
</td>
</tr>
<tr id="row17231322191411"><td class="cellrowborder" valign="top" headers="mcps1.1.4.1.1 "><p id="p02311222101414"><a name="p02311222101414"></a><a name="p02311222101414"></a><a href="#section9479143810442">void OnStop(Action callback)</a></p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.4.1.2 "><p id="p1923162251420"><a name="p1923162251420"></a><a name="p1923162251420"></a>监听音频停止播放事件。</p>
</td>
</tr>
<tr id="row960914221144"><td class="cellrowborder" valign="top" headers="mcps1.1.4.1.1 "><p id="p126091222121412"><a name="p126091222121412"></a><a name="p126091222121412"></a><a href="#section183121314154614">void OffStop()</a></p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.4.1.2 "><p id="p1060952291419"><a name="p1060952291419"></a><a name="p1060952291419"></a>取消监听音频停止播放事件。</p>
</td>
</tr>
<tr id="row1937910255236"><td class="cellrowborder" valign="top" headers="mcps1.1.4.1.1 "><p id="p12379225132312"><a name="p12379225132312"></a><a name="p12379225132312"></a><a href="#section14809195214465">void OnError(Action&lt;InnerAudioContextErrorResult&gt; callback)</a></p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.4.1.2 "><p id="p193795254239"><a name="p193795254239"></a><a name="p193795254239"></a>监听音频播放错误事件。</p>
</td>
</tr>
<tr id="row379282882313"><td class="cellrowborder" valign="top" headers="mcps1.1.4.1.1 "><p id="p127927281237"><a name="p127927281237"></a><a name="p127927281237"></a><a href="#section103201440105116">void OffError()</a></p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.4.1.2 "><p id="p1579262892320"><a name="p1579262892320"></a><a name="p1579262892320"></a>取消监听音频播放错误事件。</p>
</td>
</tr>
<tr id="row4731102942314"><td class="cellrowborder" valign="top" headers="mcps1.1.4.1.1 "><p id="p1773111297232"><a name="p1773111297232"></a><a name="p1773111297232"></a><a href="#section325714241526">void OnCanPlay(Action callback)</a></p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.4.1.2 "><p id="p20731102952311"><a name="p20731102952311"></a><a name="p20731102952311"></a>监听音频进入播放状态事件，但不保证后面可以流畅播放音频。</p>
</td>
</tr>
<tr id="row249873018231"><td class="cellrowborder" valign="top" headers="mcps1.1.4.1.1 "><p id="p8498183052316"><a name="p8498183052316"></a><a name="p8498183052316"></a><a href="#section06642046135319">void OffCanPlay()</a></p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.4.1.2 "><p id="p4498123062320"><a name="p4498123062320"></a><a name="p4498123062320"></a>取消监听音频进入播放状态事件。</p>
</td>
</tr>
<tr id="row10345531102314"><td class="cellrowborder" valign="top" headers="mcps1.1.4.1.1 "><p id="p93459318239"><a name="p93459318239"></a><a name="p93459318239"></a><a href="#section22082288548">void OnWaiting(Action callback)</a></p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.4.1.2 "><p id="p20345183172319"><a name="p20345183172319"></a><a name="p20345183172319"></a>监听音频加载中事件。若音频数据不足需要停下来加载时会触发。</p>
</td>
</tr>
<tr id="row10419972415"><td class="cellrowborder" valign="top" headers="mcps1.1.4.1.1 "><p id="p1945932416"><a name="p1945932416"></a><a name="p1945932416"></a><a href="#section89751052175510">void OffWaiting()</a></p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.4.1.2 "><p id="p141792248"><a name="p141792248"></a><a name="p141792248"></a>取消监听音频加载中事件。</p>
</td>
</tr>
<tr id="row202198119246"><td class="cellrowborder" valign="top" headers="mcps1.1.4.1.1 "><p id="p52191211132417"><a name="p52191211132417"></a><a name="p52191211132417"></a><a href="#section1524192715612">void OnSeeking(Action callback)</a></p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.4.1.2 "><p id="p12191911192416"><a name="p12191911192416"></a><a name="p12191911192416"></a>监听音频进行跳转操作事件。</p>
</td>
</tr>
<tr id="row19482171311243"><td class="cellrowborder" valign="top" headers="mcps1.1.4.1.1 "><p id="p1948241315244"><a name="p1948241315244"></a><a name="p1948241315244"></a><a href="#section7720152335718">void OffSeeking()</a></p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.4.1.2 "><p id="p1948281313242"><a name="p1948281313242"></a><a name="p1948281313242"></a>取消监听音频进行跳转操作事件。</p>
</td>
</tr>
<tr id="row969831413241"><td class="cellrowborder" valign="top" headers="mcps1.1.4.1.1 "><p id="p7698814162412"><a name="p7698814162412"></a><a name="p7698814162412"></a><a href="#section340163455813">void OnSeeked(Action callback)</a></p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.4.1.2 "><p id="p66982149248"><a name="p66982149248"></a><a name="p66982149248"></a>监听音频完成跳转操作事件。</p>
</td>
</tr>
<tr id="row1035113662415"><td class="cellrowborder" valign="top" headers="mcps1.1.4.1.1 "><p id="p1036736142413"><a name="p1036736142413"></a><a name="p1036736142413"></a><a href="#section15377122345911">void OffSeeked()</a></p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.4.1.2 "><p id="p2361436172420"><a name="p2361436172420"></a><a name="p2361436172420"></a>取消监听音频完成跳转操作事件。</p>
</td>
</tr>
</tbody>
</table>

### static InnerAudioContext CreateInnerAudioContext\(\)<a name="section109531237503"></a>

-   描述

    获取用于播放的音频实例，每次调用均会创建一个新的实例对象。

-   返回参数

    音频实例。

-   示例代码

    ```
    private InnerAudioContext _innerAudioContext;
    public void CreateInnerAudioContext()
    {
        Debug.Log("InnerAudioContext CreateInnerAudioContext.");
        _innerAudioContext = QG.CreateInnerAudioContext();
        // 音频资源的地址 
        _innerAudioContext.Src = "http://downsc.chinaz.net/Files/DownLoad/sound1/201906/11582.mp3";
        // 是否自动开始播放 
        _innerAudioContext.Autoplay = false;
        // 是否循环播放 
        _innerAudioContext.Loop = true;
        // 开始播放的位置 
        _innerAudioContext.StartTime = 0;
        // 音量 
        _innerAudioContext.Volume = 1;
        // 是否遵循系统静音开关 
        _innerAudioContext.ObeyMuteSwitch = true;
    }
    ```

### void Play\(\)<a name="section1231910489273"></a>

-   描述

    播放音频。

-   示例代码

    ```
    private InnerAudioContext _innerAudioContext;
    _innerAudioContext = QG.CreateInnerAudioContext();
    public void Play()
    {
        Debug.Log("InnerAudioContext Play.");
        _innerAudioContext?.Play();
    }
    ```

### void Pause\(\)<a name="section0100105311287"></a>

-   描述

    暂停音频播放，继续播放会从暂停处开始播放。

-   示例代码

    ```
    private InnerAudioContext _innerAudioContext;
    _innerAudioContext = QG.CreateInnerAudioContext();
    public void Pause()
    {
        Debug.Log("InnerAudioContext Pause.");
        _innerAudioContext?.Pause();
    }
    ```

### void Stop\(\)<a name="section295611358297"></a>

-   描述

    停止音频播放，再播放会从头开始播放。

-   示例代码

    ```
    private InnerAudioContext _innerAudioContext;
    _innerAudioContext = QG.CreateInnerAudioContext();
    public void Stop()
    {
        Debug.Log("InnerAudioContext Stop.");
        _innerAudioContext?.Stop();
    }
    ```

### void Seek\(float position\)<a name="section368625633012"></a>

-   描述

    跳转到指定位置播放音频。

-   请求参数

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
    <tbody><tr id="row44997917336"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.5.1.1 "><p id="p65581252173213"><a name="p65581252173213"></a><a name="p65581252173213"></a>position</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.2 "><p id="p19149338183218"><a name="p19149338183218"></a><a name="p19149338183218"></a>float</p>
    </td>
    <td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.5.1.3 "><p id="p914813388324"><a name="p914813388324"></a><a name="p914813388324"></a>M</p>
    </td>
    <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p1147133833218"><a name="p1147133833218"></a><a name="p1147133833218"></a>跳转的时间，可精确到小数点后3位。单位：秒。</p>
    </td>
    </tr>
    </tbody>
    </table>

-   示例代码

    ```
    private InnerAudioContext _innerAudioContext;
    _innerAudioContext = QG.CreateInnerAudioContext();
    public void Seek()
    {
        Debug.Log("InnerAudioContext Seek.");
        float position = 0;
        _innerAudioContext?.Seek(0);
    }
    ```

### void Destroy\(\)<a name="section1813818183414"></a>

-   描述

    销毁音频实例。

-   示例代码

    ```
    private InnerAudioContext _innerAudioContext;
    _innerAudioContext = QG.CreateInnerAudioContext();
    public void Destroy()
    {
        Debug.Log("InnerAudioContext Destroy.");
        _innerAudioContext?.Destroy();
        _innerAudioContext = null;
    }
    ```

### void OnEnded\(Action callback\)<a name="section7316187103615"></a>

-   描述

    监听音频自然播放至结束事件。

-   请求参数

    <a name="table1829722443713"></a>
    <table><thead align="left"><tr id="row12297142443717"><th class="cellrowborder" valign="top" width="20%" id="mcps1.1.5.1.1"><p id="p12971241373"><a name="p12971241373"></a><a name="p12971241373"></a>参数</p>
    </th>
    <th class="cellrowborder" valign="top" width="25%" id="mcps1.1.5.1.2"><p id="p14297122403712"><a name="p14297122403712"></a><a name="p14297122403712"></a>类型</p>
    </th>
    <th class="cellrowborder" valign="top" width="15%" id="mcps1.1.5.1.3"><p id="p172972244375"><a name="p172972244375"></a><a name="p172972244375"></a>必填(M)/选填(O)</p>
    </th>
    <th class="cellrowborder" valign="top" width="40%" id="mcps1.1.5.1.4"><p id="p1429712248377"><a name="p1429712248377"></a><a name="p1429712248377"></a>说明</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row529732423720"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.5.1.1 "><p id="p9119639173714"><a name="p9119639173714"></a><a name="p9119639173714"></a>callback</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.2 "><p id="p411823918374"><a name="p411823918374"></a><a name="p411823918374"></a>Action</p>
    </td>
    <td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.5.1.3 "><p id="p8117939143712"><a name="p8117939143712"></a><a name="p8117939143712"></a>M</p>
    </td>
    <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p2116539183714"><a name="p2116539183714"></a><a name="p2116539183714"></a>音频自然播放至结束事件的回调函数。</p>
    </td>
    </tr>
    </tbody>
    </table>

-   示例代码

    ```
    private InnerAudioContext _innerAudioContext;
    _innerAudioContext = QG.CreateInnerAudioContext();
    public void OnEnded()
    {
        Debug.Log("InnerAudioContext OnEnded.");
        _innerAudioContext?.OnEnded(() => { Debug.Log("_innerAudioContext OnEnded."); });
    }
    ```

### void OffEnded\(\)<a name="section7584122317384"></a>

-   描述

    取消监听音频自然播放至结束事件。

-   示例代码

    ```
    private InnerAudioContext _innerAudioContext;
    _innerAudioContext = QG.CreateInnerAudioContext();
    public void OffEnded()
    {
        Debug.Log("InnerAudioContext OffEnded.");
        _innerAudioContext?.OffEnded();
    }
    ```

### void OnPlay\(Action callback\)<a name="section113100618396"></a>

-   描述

    监听音频播放事件。

-   请求参数

    <a name="table465219455395"></a>
    <table><thead align="left"><tr id="row965214455396"><th class="cellrowborder" valign="top" width="20%" id="mcps1.1.5.1.1"><p id="p1065304593918"><a name="p1065304593918"></a><a name="p1065304593918"></a>参数</p>
    </th>
    <th class="cellrowborder" valign="top" width="25%" id="mcps1.1.5.1.2"><p id="p1653845143919"><a name="p1653845143919"></a><a name="p1653845143919"></a>类型</p>
    </th>
    <th class="cellrowborder" valign="top" width="15%" id="mcps1.1.5.1.3"><p id="p18653154516393"><a name="p18653154516393"></a><a name="p18653154516393"></a>必填(M)/选填(O)</p>
    </th>
    <th class="cellrowborder" valign="top" width="40%" id="mcps1.1.5.1.4"><p id="p8653174510395"><a name="p8653174510395"></a><a name="p8653174510395"></a>说明</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row9653124517395"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.5.1.1 "><p id="p1865314523914"><a name="p1865314523914"></a><a name="p1865314523914"></a>callback</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.2 "><p id="p10653245173919"><a name="p10653245173919"></a><a name="p10653245173919"></a>Action</p>
    </td>
    <td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.5.1.3 "><p id="p15653124563910"><a name="p15653124563910"></a><a name="p15653124563910"></a>M</p>
    </td>
    <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p10653245173912"><a name="p10653245173912"></a><a name="p10653245173912"></a>音频播放事件的回调函数。</p>
    </td>
    </tr>
    </tbody>
    </table>

-   示例代码

    ```
    private InnerAudioContext _innerAudioContext;
    _innerAudioContext = QG.CreateInnerAudioContext();
    public void OnPlay()
    {
        Debug.Log("InnerAudioContext OnPlay.");
        _innerAudioContext?.OnPlay(() => { Debug.Log("_innerAudioContext OnPlay."); });
    }
    ```

### void OffPlay\(\)<a name="section1032565024015"></a>

-   描述

    取消监听音频播放事件。

-   示例代码

    ```
    private InnerAudioContext _innerAudioContext;
    _innerAudioContext = QG.CreateInnerAudioContext();
    public void OffPlay()
    {
        Debug.Log("InnerAudioContext OffPlay.");
        _innerAudioContext?.OffPlay();
    }
    ```

### void OnPause\(Action callback\)<a name="section1079911413418"></a>

-   描述

    监听音频暂停播放事件。

-   请求参数

    <a name="table19081643427"></a>
    <table><thead align="left"><tr id="row1690813464216"><th class="cellrowborder" valign="top" width="20%" id="mcps1.1.5.1.1"><p id="p119081649423"><a name="p119081649423"></a><a name="p119081649423"></a>参数</p>
    </th>
    <th class="cellrowborder" valign="top" width="25%" id="mcps1.1.5.1.2"><p id="p1290811424220"><a name="p1290811424220"></a><a name="p1290811424220"></a>类型</p>
    </th>
    <th class="cellrowborder" valign="top" width="15%" id="mcps1.1.5.1.3"><p id="p1590914174210"><a name="p1590914174210"></a><a name="p1590914174210"></a>必填(M)/选填(O)</p>
    </th>
    <th class="cellrowborder" valign="top" width="40%" id="mcps1.1.5.1.4"><p id="p139098411421"><a name="p139098411421"></a><a name="p139098411421"></a>说明</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row1490964134216"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.5.1.1 "><p id="p69091464212"><a name="p69091464212"></a><a name="p69091464212"></a>callback</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.2 "><p id="p59094474216"><a name="p59094474216"></a><a name="p59094474216"></a>Action</p>
    </td>
    <td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.5.1.3 "><p id="p139092411421"><a name="p139092411421"></a><a name="p139092411421"></a>M</p>
    </td>
    <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p89094454217"><a name="p89094454217"></a><a name="p89094454217"></a>音频暂停播放事件的回调函数。</p>
    </td>
    </tr>
    </tbody>
    </table>

-   示例代码

    ```
    private InnerAudioContext _innerAudioContext;
    _innerAudioContext = QG.CreateInnerAudioContext();
    public void OnPause()
    {
        Debug.Log("InnerAudioContext OnPause.");
        _innerAudioContext?.OnPause(() => { Debug.Log("_innerAudioContext OnPause."); });
    }
    ```

### void OffPause\(\)<a name="section9600778435"></a>

-   描述

    取消监听音频暂停播放事件。

-   示例代码

    ```
    private InnerAudioContext _innerAudioContext;
    _innerAudioContext = QG.CreateInnerAudioContext();
    public void OffPause()
    {
        Debug.Log("InnerAudioContext OffPause.");
        _innerAudioContext?.OffPause();
    }
    ```

### void OnStop\(Action callback\)<a name="section9479143810442"></a>

-   描述

    监听音频停止播放事件。

-   请求参数

    <a name="table15656102615458"></a>
    <table><thead align="left"><tr id="row26562026184515"><th class="cellrowborder" valign="top" width="20%" id="mcps1.1.5.1.1"><p id="p4656526144510"><a name="p4656526144510"></a><a name="p4656526144510"></a>参数</p>
    </th>
    <th class="cellrowborder" valign="top" width="25%" id="mcps1.1.5.1.2"><p id="p465617267453"><a name="p465617267453"></a><a name="p465617267453"></a>类型</p>
    </th>
    <th class="cellrowborder" valign="top" width="15%" id="mcps1.1.5.1.3"><p id="p176564266458"><a name="p176564266458"></a><a name="p176564266458"></a>必填(M)/选填(O)</p>
    </th>
    <th class="cellrowborder" valign="top" width="40%" id="mcps1.1.5.1.4"><p id="p365619269455"><a name="p365619269455"></a><a name="p365619269455"></a>说明</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row19656132618457"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.5.1.1 "><p id="p1465610262457"><a name="p1465610262457"></a><a name="p1465610262457"></a>callback</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.2 "><p id="p565610262452"><a name="p565610262452"></a><a name="p565610262452"></a>Action</p>
    </td>
    <td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.5.1.3 "><p id="p106564263457"><a name="p106564263457"></a><a name="p106564263457"></a>M</p>
    </td>
    <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p13656112634518"><a name="p13656112634518"></a><a name="p13656112634518"></a>音频停止播放事件的回调函数。</p>
    </td>
    </tr>
    </tbody>
    </table>

-   示例代码

    ```
    private InnerAudioContext _innerAudioContext;
    _innerAudioContext = QG.CreateInnerAudioContext();
    public void OnStop()
    {
        Debug.Log("InnerAudioContext OnStop.");
        _innerAudioContext?.OnStop(() => { Debug.Log("_innerAudioContext OnStop."); });
    }
    ```

### void OffStop\(\)<a name="section183121314154614"></a>

-   描述

    取消监听音频停止播放事件。

-   示例代码

    ```
    private InnerAudioContext _innerAudioContext;
    _innerAudioContext = QG.CreateInnerAudioContext();
    public void OffStop()
    {
        Debug.Log("InnerAudioContext OffStop.");
        _innerAudioContext?.OffStop();
    }
    ```

### void OnError\(Action<InnerAudioContextErrorResult\> callback\)<a name="section14809195214465"></a>

-   描述

    监听音频播放错误事件。

-   请求参数

    <a name="table18154134404718"></a>
    <table><thead align="left"><tr id="row215510444473"><th class="cellrowborder" valign="top" width="20%" id="mcps1.1.5.1.1"><p id="p91554441478"><a name="p91554441478"></a><a name="p91554441478"></a>参数</p>
    </th>
    <th class="cellrowborder" valign="top" width="25%" id="mcps1.1.5.1.2"><p id="p171551444184717"><a name="p171551444184717"></a><a name="p171551444184717"></a>类型</p>
    </th>
    <th class="cellrowborder" valign="top" width="15%" id="mcps1.1.5.1.3"><p id="p16155124414715"><a name="p16155124414715"></a><a name="p16155124414715"></a>必填(M)/选填(O)</p>
    </th>
    <th class="cellrowborder" valign="top" width="40%" id="mcps1.1.5.1.4"><p id="p2155154412471"><a name="p2155154412471"></a><a name="p2155154412471"></a>说明</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row7155204419477"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.5.1.1 "><p id="p715684424715"><a name="p715684424715"></a><a name="p715684424715"></a>callback</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.2 "><p id="p41561344124710"><a name="p41561344124710"></a><a name="p41561344124710"></a>Action&lt;<a href="#li7939635103417">InnerAudioContextErrorResult</a>&gt;</p>
    </td>
    <td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.5.1.3 "><p id="p21568443472"><a name="p21568443472"></a><a name="p21568443472"></a>M</p>
    </td>
    <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p4156124414718"><a name="p4156124414718"></a><a name="p4156124414718"></a>音频播放错误事件的回调函数。</p>
    </td>
    </tr>
    </tbody>
    </table>

    -   <a name="li7939635103417"></a>InnerAudioContextErrorResult

        <a name="table3762133816016"></a>
        <table><thead align="left"><tr id="row476223811016"><th class="cellrowborder" valign="top" width="25%" id="mcps1.1.4.1.1"><p id="p7762113816019"><a name="p7762113816019"></a><a name="p7762113816019"></a>参数</p>
        </th>
        <th class="cellrowborder" valign="top" width="25%" id="mcps1.1.4.1.2"><p id="p1576214383020"><a name="p1576214383020"></a><a name="p1576214383020"></a>类型</p>
        </th>
        <th class="cellrowborder" valign="top" width="50%" id="mcps1.1.4.1.3"><p id="p476210382016"><a name="p476210382016"></a><a name="p476210382016"></a>说明</p>
        </th>
        </tr>
        </thead>
        <tbody><tr id="row37621381606"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.1 "><p id="p869218471602"><a name="p869218471602"></a><a name="p869218471602"></a>errCode</p>
        </td>
        <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.4.1.2 "><p id="p126928471105"><a name="p126928471105"></a><a name="p126928471105"></a>int</p>
        </td>
        <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.4.1.3 "><p id="p146926472012"><a name="p146926472012"></a><a name="p146926472012"></a>音频播放错误事件的<a href="#li1184112523112">错误码</a>。</p>
        </td>
        </tr>
        </tbody>
        </table>

-   <a name="li1184112523112"></a>错误码

    <a name="table12151107550"></a>
    <table><thead align="left"><tr id="row121522076515"><th class="cellrowborder" valign="top" width="50%" id="mcps1.1.3.1.1"><p id="p171521710510"><a name="p171521710510"></a><a name="p171521710510"></a>错误码</p>
    </th>
    <th class="cellrowborder" valign="top" width="50%" id="mcps1.1.3.1.2"><p id="p715212718511"><a name="p715212718511"></a><a name="p715212718511"></a>说明</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row959711168"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.1 "><p id="p18821172610520"><a name="p18821172610520"></a><a name="p18821172610520"></a>-1</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.2 "><p id="p1882112611512"><a name="p1882112611512"></a><a name="p1882112611512"></a>未知错误。</p>
    </td>
    </tr>
    <tr id="row5152187852"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.1 "><p id="p982112610515"><a name="p982112610515"></a><a name="p982112610515"></a>10001</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.2 "><p id="p8821326754"><a name="p8821326754"></a><a name="p8821326754"></a>系统错误。</p>
    </td>
    </tr>
    <tr id="row1217202915384"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.1 "><p id="p18821926858"><a name="p18821926858"></a><a name="p18821926858"></a>10002</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.2 "><p id="p11821152614519"><a name="p11821152614519"></a><a name="p11821152614519"></a>网络错误。</p>
    </td>
    </tr>
    <tr id="row32068216513"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.1 "><p id="p178211261650"><a name="p178211261650"></a><a name="p178211261650"></a>10003</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.2 "><p id="p198213268517"><a name="p198213268517"></a><a name="p198213268517"></a>文件错误。</p>
    </td>
    </tr>
    <tr id="row15293922955"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.1 "><p id="p2082192612513"><a name="p2082192612513"></a><a name="p2082192612513"></a>10004</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.2 "><p id="p1821926451"><a name="p1821926451"></a><a name="p1821926451"></a>格式错误。</p>
    </td>
    </tr>
    </tbody>
    </table>

-   示例代码

    ```
    private InnerAudioContext _innerAudioContext;
    _innerAudioContext = QG.CreateInnerAudioContext();
    public void OnError()
    {
        Debug.Log("InnerAudioContext OnError.");
        _innerAudioContext?.OnError(
            (res) => { Debug.Log("_innerAudioContext OnError errCode: " + res.errCode); }
        );
    }
    ```

### void OffError\(\)<a name="section103201440105116"></a>

-   描述

    取消监听音频播放错误事件。

-   示例代码

    ```
    private InnerAudioContext _innerAudioContext;
    _innerAudioContext = QG.CreateInnerAudioContext();
    public void OffError()
    {
        Debug.Log("InnerAudioContext OffError.");
        _innerAudioContext?.OffError();
    }
    ```

### void OnCanPlay\(Action callback\)<a name="section325714241526"></a>

-   描述

    监听音频进入播放状态事件，但不保证后面可以流畅播放音频。

-   请求参数

    <a name="table1352116127532"></a>
    <table><thead align="left"><tr id="row1652181216537"><th class="cellrowborder" valign="top" width="20%" id="mcps1.1.5.1.1"><p id="p125218129538"><a name="p125218129538"></a><a name="p125218129538"></a>参数</p>
    </th>
    <th class="cellrowborder" valign="top" width="25%" id="mcps1.1.5.1.2"><p id="p185211312105310"><a name="p185211312105310"></a><a name="p185211312105310"></a>类型</p>
    </th>
    <th class="cellrowborder" valign="top" width="15%" id="mcps1.1.5.1.3"><p id="p2052219128537"><a name="p2052219128537"></a><a name="p2052219128537"></a>必填(M)/选填(O)</p>
    </th>
    <th class="cellrowborder" valign="top" width="40%" id="mcps1.1.5.1.4"><p id="p18522171213537"><a name="p18522171213537"></a><a name="p18522171213537"></a>说明</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row11522161245318"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.5.1.1 "><p id="p1752291219530"><a name="p1752291219530"></a><a name="p1752291219530"></a>callback</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.2 "><p id="p19522131217532"><a name="p19522131217532"></a><a name="p19522131217532"></a>Action</p>
    </td>
    <td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.5.1.3 "><p id="p6522612155319"><a name="p6522612155319"></a><a name="p6522612155319"></a>M</p>
    </td>
    <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p2522712155313"><a name="p2522712155313"></a><a name="p2522712155313"></a>音频进入播放状态事件的回调函数。</p>
    </td>
    </tr>
    </tbody>
    </table>

-   示例代码

    ```
    private InnerAudioContext _innerAudioContext;
    _innerAudioContext = QG.CreateInnerAudioContext();
    public void OnCanPlay()
    {
        Debug.Log("InnerAudioContext OnCanPlay.");
        _innerAudioContext?.OnCanPlay(() => { Debug.Log("_innerAudioContext OnCanPlay."); });
    }
    ```

### void OffCanPlay\(\)<a name="section06642046135319"></a>

-   描述

    取消监听音频进入播放状态事件。

-   示例代码

    ```
    private InnerAudioContext _innerAudioContext;
    _innerAudioContext = QG.CreateInnerAudioContext();
    public void OffCanPlay()
    {
        Debug.Log("InnerAudioContext OffCanPlay.");
        _innerAudioContext?.OffCanPlay();
    }
    ```

### void OnWaiting\(Action callback\)<a name="section22082288548"></a>

-   描述

    监听音频加载中事件。若音频数据不足需要停下来加载时会触发。

-   请求参数

    <a name="table1376218547548"></a>
    <table><thead align="left"><tr id="row87623546549"><th class="cellrowborder" valign="top" width="20%" id="mcps1.1.5.1.1"><p id="p376218540547"><a name="p376218540547"></a><a name="p376218540547"></a>参数</p>
    </th>
    <th class="cellrowborder" valign="top" width="25%" id="mcps1.1.5.1.2"><p id="p157621554155415"><a name="p157621554155415"></a><a name="p157621554155415"></a>类型</p>
    </th>
    <th class="cellrowborder" valign="top" width="15%" id="mcps1.1.5.1.3"><p id="p676219545545"><a name="p676219545545"></a><a name="p676219545545"></a>必填(M)/选填(O)</p>
    </th>
    <th class="cellrowborder" valign="top" width="40%" id="mcps1.1.5.1.4"><p id="p07639546542"><a name="p07639546542"></a><a name="p07639546542"></a>说明</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row4763185465410"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.5.1.1 "><p id="p127631754135415"><a name="p127631754135415"></a><a name="p127631754135415"></a>callback</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.2 "><p id="p6763155419545"><a name="p6763155419545"></a><a name="p6763155419545"></a>Action</p>
    </td>
    <td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.5.1.3 "><p id="p2763195475412"><a name="p2763195475412"></a><a name="p2763195475412"></a>M</p>
    </td>
    <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p27631954175415"><a name="p27631954175415"></a><a name="p27631954175415"></a>音频加载中事件的回调函数。</p>
    </td>
    </tr>
    </tbody>
    </table>

-   示例代码

    ```
    private InnerAudioContext _innerAudioContext;
    _innerAudioContext = QG.CreateInnerAudioContext();
    public void OnWaiting()
    {
        Debug.Log("InnerAudioContext OnWaiting.");
        _innerAudioContext?.OnWaiting(() => { Debug.Log("_innerAudioContext OnWaiting."); });
    }
    ```

### void OffWaiting\(\)<a name="section89751052175510"></a>

-   描述

    取消监听音频加载中事件。

-   示例代码

    ```
    private InnerAudioContext _innerAudioContext;
    _innerAudioContext = QG.CreateInnerAudioContext();
    public void OffWaiting()
    {
        Debug.Log("InnerAudioContext OffWaiting.");
        _innerAudioContext?.OffWaiting();
    }
    ```

### void OnSeeking\(Action callback\)<a name="section1524192715612"></a>

-   描述

    监听音频进行跳转操作事件。

-   请求参数

    <a name="table92191054165610"></a>
    <table><thead align="left"><tr id="row7219145445619"><th class="cellrowborder" valign="top" width="20%" id="mcps1.1.5.1.1"><p id="p1222015445617"><a name="p1222015445617"></a><a name="p1222015445617"></a>参数</p>
    </th>
    <th class="cellrowborder" valign="top" width="25%" id="mcps1.1.5.1.2"><p id="p3220354105620"><a name="p3220354105620"></a><a name="p3220354105620"></a>类型</p>
    </th>
    <th class="cellrowborder" valign="top" width="15%" id="mcps1.1.5.1.3"><p id="p82203540563"><a name="p82203540563"></a><a name="p82203540563"></a>必填(M)/选填(O)</p>
    </th>
    <th class="cellrowborder" valign="top" width="40%" id="mcps1.1.5.1.4"><p id="p1822005425611"><a name="p1822005425611"></a><a name="p1822005425611"></a>说明</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row422045416561"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.5.1.1 "><p id="p13220195475618"><a name="p13220195475618"></a><a name="p13220195475618"></a>callback</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.2 "><p id="p32201354165616"><a name="p32201354165616"></a><a name="p32201354165616"></a>Action</p>
    </td>
    <td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.5.1.3 "><p id="p922085435619"><a name="p922085435619"></a><a name="p922085435619"></a>M</p>
    </td>
    <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p122201554115613"><a name="p122201554115613"></a><a name="p122201554115613"></a>音频进行跳转操作事件的回调函数</p>
    </td>
    </tr>
    </tbody>
    </table>

-   示例代码

    ```
    private InnerAudioContext _innerAudioContext;
    _innerAudioContext = QG.CreateInnerAudioContext();
    public void OnSeeking()
    {
        Debug.Log("InnerAudioContext OnSeeking.");
        _innerAudioContext?.OnSeeking(() => { Debug.Log("_innerAudioContext OnSeeking."); });
    }
    ```

### void OffSeeking\(\)<a name="section7720152335718"></a>

-   描述

    取消监听音频进行跳转操作事件。

-   示例代码

    ```
    private InnerAudioContext _innerAudioContext;
    _innerAudioContext = QG.CreateInnerAudioContext();
    public void OffSeeking()
    {
        Debug.Log("InnerAudioContext OffSeeking.");
        _innerAudioContext?.OffSeeking();
    }
    ```

### void OnSeeked\(Action callback\)<a name="section340163455813"></a>

-   描述

    监听音频完成跳转操作事件。

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
    <tbody><tr id="row17278907593"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.5.1.1 "><p id="p627814045915"><a name="p627814045915"></a><a name="p627814045915"></a>callback</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.2 "><p id="p18278120145919"><a name="p18278120145919"></a><a name="p18278120145919"></a>Action</p>
    </td>
    <td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.5.1.3 "><p id="p2278709595"><a name="p2278709595"></a><a name="p2278709595"></a>M</p>
    </td>
    <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p42781009592"><a name="p42781009592"></a><a name="p42781009592"></a>音频完成跳转操作事件的回调函数</p>
    </td>
    </tr>
    </tbody>
    </table>

-   示例代码

    ```
    private InnerAudioContext _innerAudioContext;
    _innerAudioContext = QG.CreateInnerAudioContext();
    public void OnSeeked()
    {
        Debug.Log("InnerAudioContext OnSeeked.");
        _innerAudioContext?.OnSeeked(() => { Debug.Log("_innerAudioContext OnSeeked."); });
    }
    ```

### void OffSeeked\(\)<a name="section15377122345911"></a>

-   描述

    取消监听音频完成跳转操作事件。

-   示例代码

    ```
    private InnerAudioContext _innerAudioContext;
    _innerAudioContext = QG.CreateInnerAudioContext();
    public void OffSeeked()
    {
        Debug.Log("InnerAudioContext OffSeeked.");
        _innerAudioContext?.OffSeeked();
    }
    ```

