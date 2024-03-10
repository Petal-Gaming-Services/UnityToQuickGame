# Unity WebGL快游戏适配方案<a name="ZH-CN_TOPIC_0000001287414992"></a>

-   [业务简介](#section15199104714389)
-   [主要优势](#section1221810561334)
-   [工作原理](#section19868189193414)
-   [转换案例](#section19703164714290)
-   [准备工作](#section1081804723120)
    -   [可行性评估](#section983612549576)
    -   [AGC控制台准备](#section1245866121711)
    -   [工具准备](#section10468162781718)
    -   [素材准备](#section162721931181311)

-   [第一步：接入快游戏能力](#section3445102643414)
-   [第二步：发布WebGL项目](#section863116373348)
-   [第三步：打包快游戏](#section8311205093420)
-   [第四步：调试与上架](#section6455222143620)
    -   [本地调试](#section23801612224)
    -   [发布上架](#section20355777264)

-   [FAQ](#section8212725134119)
-   [C\# SDK API参考](#section13942133811414)

## 业务简介<a name="section15199104714389"></a>

欢迎使用Unity游戏转快游戏的转换方案，本方案设计的目的是降低游戏转换的开发成本，即您无需更换Unity引擎、无需重写核心代码的情况下将原有的Unity游戏项目转换为快游戏。

## 主要优势<a name="section1221810561334"></a>

-   对比H5快游戏方案，性能有明显提升。
-   无需重写核心代码，降低转换成本。
-   转换工具支持打包快游戏RPK包。

## 工作原理<a name="section19868189193414"></a>

Unity游戏是使用C\#语言开发的游戏，而快游戏的运行环境却是使用V8引擎和JS Framework解析执行。从C\#到JS，我们采用的方案是使用WebGL作为桥梁进行跨端合并。

-   Unity游戏提供了发布成WebGL项目的能力，详情见[Unity官网介绍](https://docs.unity3d.com/cn/2020.3/Manual/webgl-technical-overview.html)。
-   快游戏引擎采用了WebGL1.0规范，使用adapter层模拟实现了Unity游戏发布WebGL项目后所依赖的WEB API。
-   使用WebGL配置方案，将Unity游戏原生WebGL项目打包成快游戏。

![](figures/unity-webgl-transform.png)

## 转换案例<a name="section19703164714290"></a>

更多案例可参考[成功案例](成功案例.md)。

<a name="table643015264332"></a>
<table><tbody><tr id="row184301826143318"><td class="cellrowborder" colspan="2" align="center" valign="top"><p id="p11687352173418"><a name="p11687352173418"></a><a name="p11687352173418"></a><strong id="b268795215342"><a name="b268795215342"></a><a name="b268795215342"></a>大圣顶住</strong></p>
</td>
<td class="cellrowborder" colspan="2" align="center" valign="top"><p id="p114774586340"><a name="p114774586340"></a><a name="p114774586340"></a><strong id="b17477125873413"><a name="b17477125873413"></a><a name="b17477125873413"></a>地铁跑酷</strong></p>
</td>
<td class="cellrowborder" colspan="2" align="center" valign="top"><p id="p99024211354"><a name="p99024211354"></a><a name="p99024211354"></a><strong id="b49021823353"><a name="b49021823353"></a><a name="b49021823353"></a>百变化妆大师</strong></p>
</td>
</tr>
<tr id="row643032615338"><td class="cellrowborder" colspan="2" align="center" valign="top"><p id="p106871852193418"><a name="p106871852193418"></a><a name="p106871852193418"></a>摒弃了传统塔防“防御塔”的设定，以耳熟能详的仙、妖、圣各类仙灵组成自己想要的阵容，与征天路上的天兵天将短兵相接。华丽的技能，爽快的操作，带来前所未有的塔防新体验。</p>
</td>
<td class="cellrowborder" colspan="2" align="center" valign="top"><p id="p4477115817347"><a name="p4477115817347"></a><a name="p4477115817347"></a>游戏主线从三条铁轨上展开，玩家要以孩子Jake的身份不断在铁轨中穿梭来躲避列车，同时收集金币，躲避警察及猎狗的追捕。</p>
</td>
<td class="cellrowborder" colspan="2" align="center" valign="top"><p id="p1090212210353"><a name="p1090212210353"></a><a name="p1090212210353"></a>一款以化妆为背景的模拟体验游戏，系统会根据玩家的选择与场景的适配性为玩家打分，让每个玩家都能描绘出属于自己的靓丽美貌。</p>
</td>
</tr>
<tr id="row4431226133315"><td class="cellrowborder" colspan="2" align="center" valign="top"><p id="p8688105212341"><a name="p8688105212341"></a><a name="p8688105212341"></a><a name="image106881452133412"></a><a name="image106881452133412"></a><span><img id="image106881452133412" src="figures/大圣顶住.png"></span></p>
</td>
<td class="cellrowborder" colspan="2" align="center" valign="top"><p id="p134771158133414"><a name="p134771158133414"></a><a name="p134771158133414"></a><a name="image7477145883418"></a><a name="image7477145883418"></a><span><img id="image7477145883418" src="figures/地铁跑酷.png"></span></p>
</td>
<td class="cellrowborder" colspan="2" align="center" valign="top"><p id="p2902132193515"><a name="p2902132193515"></a><a name="p2902132193515"></a><a name="image790210218359"></a><a name="image790210218359"></a><span><img id="image790210218359" src="figures/百变化妆大师.png"></span></p>
</td>
</tr>
<tr id="row44311426143313"><td class="cellrowborder" colspan="3" align="center" valign="top"><p id="p138454723512"><a name="p138454723512"></a><a name="p138454723512"></a><strong id="b484507113518"><a name="b484507113518"></a><a name="b484507113518"></a>合合美美</strong></p>
</td>
<td class="cellrowborder" colspan="3" align="center" valign="top"><p id="p0293812183517"><a name="p0293812183517"></a><a name="p0293812183517"></a><strong id="b12293121213516"><a name="b12293121213516"></a><a name="b12293121213516"></a>装扮小屋</strong></p>
</td>
</tr>
<tr id="row2043182617331"><td class="cellrowborder" colspan="3" align="center" valign="top"><p id="p48451743519"><a name="p48451743519"></a><a name="p48451743519"></a>一款简单的合成消除游戏，融合经营、消除、合成元素，在现有的棋盘上，找到相同的物品，拖拽合并，便可轻松完成搭配收集的任务，简单易上手的操作。</p>
</td>
<td class="cellrowborder" colspan="3" align="center" valign="top"><p id="p1629331210352"><a name="p1629331210352"></a><a name="p1629331210352"></a>一款模拟装修的游戏，玩家在里面可以对房屋进行装扮，完成任务获得更多的家具，能够自由地摆放家具，按照自己的喜好装扮不同风格的小屋。</p>
</td>
</tr>
<tr id="row743162643319"><td class="cellrowborder" colspan="3" align="center" valign="top"><p id="p188453733514"><a name="p188453733514"></a><a name="p188453733514"></a><a name="image384513717356"></a><a name="image384513717356"></a><span><img id="image384513717356" src="figures/合合美美2.png"></span></p>
</td>
<td class="cellrowborder" colspan="3" align="center" valign="top"><p id="p1529318126357"><a name="p1529318126357"></a><a name="p1529318126357"></a><a name="image10293151216353"></a><a name="image10293151216353"></a><span><img id="image10293151216353" src="figures/装扮小屋2.png"></span></p>
</td>
</tr>
</tbody>
</table>

## 准备工作<a name="section1081804723120"></a>

### 可行性评估<a name="section983612549576"></a>

<a name="table441441115813"></a>
<table><thead align="left"><tr id="row541417586"><th class="cellrowborder" valign="top" width="15%" id="mcps1.1.4.1.1"><p id="p1523435912584"><a name="p1523435912584"></a><a name="p1523435912584"></a>能力</p>
</th>
<th class="cellrowborder" valign="top" width="12%" id="mcps1.1.4.1.2"><p id="p42341659175811"><a name="p42341659175811"></a><a name="p42341659175811"></a>是否支持</p>
</th>
<th class="cellrowborder" valign="top" width="73%" id="mcps1.1.4.1.3"><p id="p3234135910586"><a name="p3234135910586"></a><a name="p3234135910586"></a>解决方案</p>
</th>
</tr>
</thead>
<tbody><tr id="row184541105814"><td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.4.1.1 "><p id="p1184361814201"><a name="p1184361814201"></a><a name="p1184361814201"></a>Unity基础模块</p>
</td>
<td class="cellrowborder" valign="top" width="12%" headers="mcps1.1.4.1.2 "><p id="p07101001201"><a name="p07101001201"></a><a name="p07101001201"></a>支持</p>
</td>
<td class="cellrowborder" valign="top" width="73%" headers="mcps1.1.4.1.3 "><p id="p11115163915195"><a name="p11115163915195"></a><a name="p11115163915195"></a>支持动画、物理、AI、UI等基础模块。</p>
</td>
</tr>
<tr id="row12464135810"><td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.4.1.1 "><p id="p3843918122020"><a name="p3843918122020"></a><a name="p3843918122020"></a>渲染管线与接口</p>
</td>
<td class="cellrowborder" valign="top" width="12%" headers="mcps1.1.4.1.2 "><p id="p177101902205"><a name="p177101902205"></a><a name="p177101902205"></a>支持</p>
</td>
<td class="cellrowborder" valign="top" width="73%" headers="mcps1.1.4.1.3 "><p id="p9115939101917"><a name="p9115939101917"></a><a name="p9115939101917"></a>支持标准渲染管线USS、通用渲染管线URP，但只支持WebGL1.0的特性。</p>
</td>
</tr>
<tr id="row647417589"><td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.4.1.1 "><p id="p16843131817203"><a name="p16843131817203"></a><a name="p16843131817203"></a>资源加载</p>
</td>
<td class="cellrowborder" valign="top" width="12%" headers="mcps1.1.4.1.2 "><p id="p471014016201"><a name="p471014016201"></a><a name="p471014016201"></a>支持</p>
</td>
<td class="cellrowborder" valign="top" width="73%" headers="mcps1.1.4.1.3 "><p id="p121151739121916"><a name="p121151739121916"></a><a name="p121151739121916"></a>Addressable、AssetBundle网络异步加载。</p>
</td>
</tr>
<tr id="row18517413582"><td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.4.1.1 "><p id="p138443185204"><a name="p138443185204"></a><a name="p138443185204"></a>Unity音频</p>
</td>
<td class="cellrowborder" valign="top" width="12%" headers="mcps1.1.4.1.2 "><p id="p177101703201"><a name="p177101703201"></a><a name="p177101703201"></a>支持</p>
</td>
<td class="cellrowborder" valign="top" width="73%" headers="mcps1.1.4.1.3 "><p id="p611620392195"><a name="p611620392195"></a><a name="p611620392195"></a>Unity Audio基本能力支持，支持fmod插件，暂未支持wwise。长音频建议适配快游戏音频InnerAudioContext以优化内存。</p>
</td>
</tr>
<tr id="row9514155813"><td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.4.1.1 "><p id="p1484431852013"><a name="p1484431852013"></a><a name="p1484431852013"></a>第三方插件</p>
</td>
<td class="cellrowborder" valign="top" width="12%" headers="mcps1.1.4.1.2 "><p id="p471040122017"><a name="p471040122017"></a><a name="p471040122017"></a>部分支持</p>
</td>
<td class="cellrowborder" valign="top" width="73%" headers="mcps1.1.4.1.3 "><p id="p11116153912193"><a name="p11116153912193"></a><a name="p11116153912193"></a>支持大部分插件，C#插件与非平台相关的C原生插件。</p>
</td>
</tr>
<tr id="row651341135814"><td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.4.1.1 "><p id="p14844171817209"><a name="p14844171817209"></a><a name="p14844171817209"></a>网络系统</p>
</td>
<td class="cellrowborder" valign="top" width="12%" headers="mcps1.1.4.1.2 "><p id="p117101501204"><a name="p117101501204"></a><a name="p117101501204"></a>需调整</p>
</td>
<td class="cellrowborder" valign="top" width="73%" headers="mcps1.1.4.1.3 "><p id="p19116939161911"><a name="p19116939161911"></a><a name="p19116939161911"></a>不支持System.Net接口，HTTP使用UnityWebRequest，TCP使用WebSocket通信替代(如开源的UnityWebSocket插件)。</p>
</td>
</tr>
<tr id="row65104113585"><td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.4.1.1 "><p id="p1384401832019"><a name="p1384401832019"></a><a name="p1384401832019"></a>多线程</p>
</td>
<td class="cellrowborder" valign="top" width="12%" headers="mcps1.1.4.1.2 "><p id="p971018072014"><a name="p971018072014"></a><a name="p971018072014"></a>不支持</p>
</td>
<td class="cellrowborder" valign="top" width="73%" headers="mcps1.1.4.1.3 "><p id="p61164399197"><a name="p61164399197"></a><a name="p61164399197"></a>删除多线程用法，使用异步等其他替代方式。</p>
</td>
</tr>
<tr id="row13923144675819"><td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.4.1.1 "><p id="p88446187207"><a name="p88446187207"></a><a name="p88446187207"></a>文件系统</p>
</td>
<td class="cellrowborder" valign="top" width="12%" headers="mcps1.1.4.1.2 "><p id="p3710190112020"><a name="p3710190112020"></a><a name="p3710190112020"></a>需调整</p>
</td>
<td class="cellrowborder" valign="top" width="73%" headers="mcps1.1.4.1.3 "><p id="p1411633914196"><a name="p1411633914196"></a><a name="p1411633914196"></a>不支持System.File接口，但可使用HW-WASM-SDK实现文件存储，大小限制为200MB。玩家存档请使用服务器，AssetsBundle缓存适配插件已自动支持。</p>
</td>
</tr>
<tr id="row1197205035119"><td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.4.1.1 "><p id="p619812509516"><a name="p619812509516"></a><a name="p619812509516"></a>纹理压缩格式</p>
</td>
<td class="cellrowborder" valign="top" width="12%" headers="mcps1.1.4.1.2 "><p id="p5198185012519"><a name="p5198185012519"></a><a name="p5198185012519"></a>支持</p>
</td>
<td class="cellrowborder" valign="top" width="73%" headers="mcps1.1.4.1.3 "><p id="p101981450195119"><a name="p101981450195119"></a><a name="p101981450195119"></a>astc、etc1、pvrtc。</p>
</td>
</tr>
</tbody>
</table>

### AGC控制台准备<a name="section1245866121711"></a>

-   在开发者联盟官网[注册帐号并实名认证](https://developer.huawei.com/consumer/cn/doc/quickApp-Guides/quickgame-registration-account-0000001794901061)。
-   在AppGallery Connect控制台[创建项目和快游戏](https://developer.huawei.com/consumer/cn/doc/quickApp-Guides/quickgame-create-quickgame-0000001159652387#section165468151910)。
-   上架快游戏必须接入华为帐号能力，您在AppGallery Connect控制台需[打开游戏服务API和华为帐号API开关](https://developer.huawei.com/consumer/cn/doc/quickApp-Guides/quickgame-enable-game-kit-0000001113292730#section1724214523574)。**其它API开关**请根据接入的快游戏能力进行配置。

### 工具准备<a name="section10468162781718"></a>

-   下载**sdk**文件夹的C\# SDK 。
-   前往[Unity官网](https://unity.cn/releases/lts/2021)下载并安装Unity IDE。用于转换快游戏的Unity IDE版本号支持如下：

    <a name="table2075815414498"></a>
    <table><tbody><tr id="row575874144915"><th class="firstcol" valign="top" width="13.36%" id="mcps1.1.3.1.1"><p id="p1375864117491"><a name="p1375864117491"></a><a name="p1375864117491"></a>推荐Unity版本</p>
    </th>
    <td class="cellrowborder" valign="top" width="86.64%" headers="mcps1.1.3.1.1 "><p id="p20609825121510"><a name="p20609825121510"></a><a name="p20609825121510"></a><strong id="b184146010580"><a name="b184146010580"></a><a name="b184146010580"></a>2020.3</strong>开头的版本。</p>
    </td>
    </tr>
    <tr id="row9758204114911"><th class="firstcol" valign="top" width="13.36%" id="mcps1.1.3.2.1"><p id="p19758154113496"><a name="p19758154113496"></a><a name="p19758154113496"></a>已支持Unity版本</p>
    </th>
    <td class="cellrowborder" valign="top" width="86.64%" headers="mcps1.1.3.2.1 "><p id="p15871325191513"><a name="p15871325191513"></a><a name="p15871325191513"></a><strong id="b418194015718"><a name="b418194015718"></a><a name="b418194015718"></a>2018.3</strong>开头的版本、<strong id="b45754426579"><a name="b45754426579"></a><a name="b45754426579"></a>2018.4</strong>开头的版本、<strong id="b20703184511573"><a name="b20703184511573"></a><a name="b20703184511573"></a>2019.2</strong>开头的版本、<strong id="b421564814573"><a name="b421564814573"></a><a name="b421564814573"></a>2019.4</strong>开头的版本、<strong id="b19436503571"><a name="b19436503571"></a><a name="b19436503571"></a>2020.3</strong>开头的版本、<strong id="b5168114216210"><a name="b5168114216210"></a><a name="b5168114216210"></a>2021.2</strong>开头的版本<strong id="b13168124210219"><a name="b13168124210219"></a><a name="b13168124210219"></a>，2021.3.0至2021.3.11</strong>开头的版本。若发现游戏性能无法满足需求，可尝试使用2021开头的版本，推荐版本<strong id="b17821452182015"><a name="b17821452182015"></a><a name="b17821452182015"></a>2021.3.11f1c2</strong>，2021开头的其它版本受限支持，可能不能直接转换。</p>
    </td>
    </tr>
    </tbody>
    </table>

-   若[使用快游戏开发者工具打包](第三步-打包快游戏.md#section1973035142715)快游戏，您需下载并安装最新的[快游戏开发者工具](https://developer.huawei.com/consumer/cn/doc/quickApp-Guides/quickgame-download-tool-0000001754077209)。若[使用快游戏打包工具打包](第三步-打包快游戏.md#section089016114271)快游戏，您需下载**adapter**文件夹的适配层脚本代码、**tools**文件夹的快游戏打包工具，同时前往[node官网](https://nodejs.org/en/download)下载并安装node.js，且npm版本大于9.6.1。
-   准备Android 6.0及以上版本的手机/平板设备，要求：
    -   设备已[安装快应用加载器](https://developer.huawei.com/consumer/cn/doc/Tools-Library/quickapp-ide-download-0000001101172926#section9347192715112)。
    -   设备已成功连接电脑，详细操作可参考[手机如何成功连接电脑](https://developer.huawei.com/consumer/cn/doc/quickApp-Guides/quickgame-developer-mode-0000001634026457)。

### 素材准备<a name="section162721931181311"></a>

<a name="table18794741101310"></a>
<table><thead align="left"><tr id="row1479413418131"><th class="cellrowborder" valign="top" width="30%" id="mcps1.1.3.1.1"><p id="p17941841111315"><a name="p17941841111315"></a><a name="p17941841111315"></a>准备项</p>
</th>
<th class="cellrowborder" valign="top" width="70%" id="mcps1.1.3.1.2"><p id="p107941541141310"><a name="p107941541141310"></a><a name="p107941541141310"></a>要求</p>
</th>
</tr>
</thead>
<tbody><tr id="row198981414162"><td class="cellrowborder" valign="top" width="30%" headers="mcps1.1.3.1.1 "><p id="p17941441111317"><a name="p17941441111317"></a><a name="p17941441111317"></a>签名证书文件</p>
</td>
<td class="cellrowborder" valign="top" width="70%" headers="mcps1.1.3.1.2 "><p id="p1275014120157"><a name="p1275014120157"></a><a name="p1275014120157"></a>在快游戏开发者工具中生成证书、密钥文件，详细操作请参见<a href="https://developer.huawei.com/consumer/cn/doc/quickApp-Guides/quickgame-tool-sign-0000001618643557" target="_blank" rel="noopener noreferrer">生成证书、密钥文件</a>。</p>
</td>
</tr>
<tr id="row1258024221613"><td class="cellrowborder" valign="top" width="30%" headers="mcps1.1.3.1.1 "><p id="p17200133111149"><a name="p17200133111149"></a><a name="p17200133111149"></a>快游戏图标</p>
</td>
<td class="cellrowborder" valign="top" width="70%" headers="mcps1.1.3.1.2 "><a name="ul1175435212141"></a><a name="ul1175435212141"></a><ul id="ul1175435212141"><li>分辨率216*216px，不超过2MB的PNG图片。</li><li>图标圆角大小为0。</li></ul>
</td>
</tr>
</tbody>
</table>

## 第一步：接入快游戏能力<a name="section3445102643414"></a>

Unity游戏项目使用C\#开发语言，快游戏使用JS开发语言，C\#不能直接调JS接口，因此需封装JS接口给C\#调用。为了节省开发时间，您可以在Unity IDE中导入SDK包后，直接调用对应的接口即可快速[接入快游戏能力](第一步-接入快游戏能力.md)。目前，该SDK可以实现华为帐号登录、商品支付、激励视频广告播放等能力，若想实现更多能力，您可以参考**demo**文件夹的demo进行封装js接口。

## 第二步：发布WebGL项目<a name="section863116373348"></a>

快游戏引擎采用了WebGL1.0规范，您需在Unity IDE中将游戏项目[发布WebGL项目](第二步-发布WebGL项目.md)。

## 第三步：打包快游戏<a name="section8311205093420"></a>

本地WebGL项目需使用WebGL配置方案打包快游戏，您可以[使用快游戏开发者工具打包](第三步-打包快游戏.md#section1973035142715)，或[使用快游戏打包工具打包](第三步-打包快游戏.md#section089016114271)。

## 第四步：调试与上架<a name="section6455222143620"></a>

### 本地调试<a name="section23801612224"></a>

为了保证转换后的快游戏有更好的软件性能与用户体验，您可在快游戏开发者工具中根据接入的快游戏服务逐一进行运行/调试，具体操作可参考[快游戏开发指南手册](https://developer.huawei.com/consumer/cn/doc/quickApp-Guides/quickgame-tool-debug-0000001568083488)。

### 发布上架<a name="section20355777264"></a>

前往AppGallery Connect控制台上架转换后的快游戏，具体步骤如下：

1.  在AppGallery Connect控制台[配置快游戏的基本信息](https://developer.huawei.com/consumer/cn/doc/distribution/app/agc-help-configure-appinfo-0000001100086630)。
2.  在AppGallery Connect控制台[发布快游戏](https://developer.huawei.com/consumer/cn/doc/distribution/app/agc-help--release-fastapp-0000001099836868)。
3.  提交上架申请后，请耐心等待审核。

## FAQ<a name="section8212725134119"></a>

若遇到问题，请先仔细阅读文档，若仍未解决您的问题，请前往[FAQ](FAQ.md)进行查看。

## C\# SDK API参考<a name="section13942133811414"></a>

C\# SDK的API接口详细介绍请参见[C\# SDK API参考](C-SDK-API参考.md)。

