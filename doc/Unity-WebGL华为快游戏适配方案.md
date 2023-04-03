# Unity WebGL华为快游戏适配方案<a name="ZH-CN_TOPIC_0000001287414992"></a>

-   [主要优势](#section1221810561334)
-   [工作原理](#section19868189193414)
-   [转换案例](#section19703164714290)
-   [准备工作](#section1081804723120)
-   [第一步：封装JS接口](#section3445102643414)
-   [第二步：发布WebGL项目](#section863116373348)
-   [第三步：打包快游戏](#section8311205093420)
-   [调试与上架](#section6455222143620)
-   [技术支持](#section1215932993610)

欢迎使用Unity游戏转华为快游戏的转换方案，本方案设计的目的是降低游戏转换的开发成本，即您无需更换Unity引擎、无需重写核心代码的情况下将原有的Unity游戏项目转换到快游戏。

## 主要优势<a name="section1221810561334"></a>

-   对比H5快游戏方案，性能有明显提升。
-   无需重写核心代码，降低转换成本。
-   转换工具支持打包快游戏RPK包。

## 工作原理<a name="section19868189193414"></a>

Unity游戏是使用C\#语言开发的游戏，而华为快游戏的运行环境却是使用V8引擎和JS Framework解析执行。从c\#到js，我们采用的方案是使用WebGL作为桥梁进行跨端合并。

-   Unity游戏提供了发布成WebGL项目的能力，详情见[Unity官网介绍](https://docs.unity3d.com/cn/2020.3/Manual/webgl-technical-overview.html)。
-   华为快游戏引擎采用了WebGL1.0规范，使用adapter层模拟实现了Unity游戏发布WebGL项目后所依赖的WEB API。
-   使用华为提供的WebGL配置方案，将Unity游戏原生WebGL项目打包成快游戏。

## 转换案例<a name="section19703164714290"></a>

<a name="simpletable17169195151016"></a>
<table id="simpletable17169195151016"><tr id="strow2017045113106"><td valign="top" id="stentry1317020517103"><p id="p3170185191012"><a name="p3170185191012"></a><a name="p3170185191012"></a>百变化妆大师</p>
</td>
<td valign="top" id="stentry9170195115106"><p id="p3170145141013"><a name="p3170145141013"></a><a name="p3170145141013"></a>合合美美</p>
</td>
<td valign="top" id="stentry1417055114107"><p id="p2170851191015"><a name="p2170851191015"></a><a name="p2170851191015"></a>装扮小屋</p>
</td>
</tr>
<tr id="strow17170205118104"><td valign="top" id="stentry6170195171014"><p id="p017010513105"><a name="p017010513105"></a><a name="p017010513105"></a>一款以化妆为背景的模拟体验游戏，系统会根据玩家的选择与场景的适配性为玩家打分，让每个玩家都能描绘出属于自己的靓丽美貌。</p>
</td>
<td valign="top" id="stentry17170135117107"><p id="p1917035115104"><a name="p1917035115104"></a><a name="p1917035115104"></a>一款简单的合成消除游戏，融合经营，消除，合成元素，在现有的棋盘上，找到相同的物品，拖拽合并，便可轻松完成搭配收集的任务，简单易上手的操作。</p>
</td>
<td valign="top" id="stentry12170155118102"><p id="p2170551161010"><a name="p2170551161010"></a><a name="p2170551161010"></a>一款模拟装修的游戏,玩家在里面可以对房屋进行装扮,完成任务获得更多的家具,能够自由的摆放家具,按照自己的喜好装扮不同风格的小屋。</p>
</td>
</tr>
<tr id="strow1817012515108"><td valign="top" id="stentry81701951181010"><p id="p166802121565"><a name="p166802121565"></a><a name="p166802121565"></a><a name="image868071215616"></a><a name="image868071215616"></a><span><img id="image868071215616" src="figures/百变化妆大师.png"></span></p>
</td>
<td valign="top" id="stentry417012513103"><p id="p65022308562"><a name="p65022308562"></a><a name="p65022308562"></a><a name="image12501113075620"></a><a name="image12501113075620"></a><span><img id="image12501113075620" src="figures/合合美美2.png"></span></p>
</td>
<td valign="top" id="stentry4170951131016"><p id="p293333865619"><a name="p293333865619"></a><a name="p293333865619"></a><a name="image1793253845616"></a><a name="image1793253845616"></a><span><img id="image1793253845616" src="figures/装扮小屋2.png"></span></p>
</td>
</tr>
</table>

## 准备工作<a name="section1081804723120"></a>

-   您已在华为开发者联盟官网[注册开发者帐号](https://developer.huawei.com/consumer/cn/doc/start/registration-and-verification-0000001053628148)，且已[实名认证](https://developer.huawei.com/consumer/cn/doc/start/ht-edrna-0000001154848578)。
-   您已在华为AppGallery Connect控制台[创建项目](https://developer.huawei.com/consumer/cn/doc/distribution/app/agc-help-createproject-0000001100334664)并[在项目下添加快游戏](https://developer.huawei.com/consumer/cn/doc/distribution/app/agc-help-createapp-0000001146718717#section15155122514817)。
-   快游戏已在华为AppGallery Connect控制台[打开游戏服务API开关](https://developer.huawei.com/consumer/cn/doc/development/quickApp-Guides/quickgame-enable-game-kit-0000001113292730#section1724214523574)与[打开华为帐号服务API开关](https://developer.huawei.com/consumer/cn/doc/development/quickApp-Guides/quickgame-enable-account-kit-0000001159772367#section1468372716348)。

    >![](public_sys-resources/icon-note.gif) **说明：** 
    >[其它API开关](https://developer.huawei.com/consumer/cn/doc/development/quickApp-Guides/quickgame-enable-iap-kit-0000001113292560)请根据您接入的快游戏服务进行配置。

-   您已[下载并安装Unity](https://unity.cn/releases/lts/2021)，请按实际情况选择Unity版本号：

    <a name="table2075815414498"></a>
    <table><tbody><tr id="row575874144915"><th class="firstcol" valign="top" width="13.36%" id="mcps1.1.3.1.1"><p id="p1375864117491"><a name="p1375864117491"></a><a name="p1375864117491"></a>推荐Unity版本</p>
    </th>
    <td class="cellrowborder" valign="top" width="86.64%" headers="mcps1.1.3.1.1 "><p id="p20609825121510"><a name="p20609825121510"></a><a name="p20609825121510"></a>2020.3开头的版本。</p>
    </td>
    </tr>
    <tr id="row9758204114911"><th class="firstcol" valign="top" width="13.36%" id="mcps1.1.3.2.1"><p id="p19758154113496"><a name="p19758154113496"></a><a name="p19758154113496"></a>已支持Unity版本</p>
    </th>
    <td class="cellrowborder" valign="top" width="86.64%" headers="mcps1.1.3.2.1 "><p id="p15871325191513"><a name="p15871325191513"></a><a name="p15871325191513"></a>2018.3、2018.4、2019.2、2019.4、2020.3、2021.3开头的版本。若发现游戏性能无法满足需求，可以尝试使用2021版本，2021开头的版本受限支持，推荐版本<strong id="b17821452182015"><a name="b17821452182015"></a><a name="b17821452182015"></a>2021.3.11f1c2</strong>，其它2021开头的版本可能不能直接转换。</p>
    </td>
    </tr>
    </tbody>
    </table>

-   您已下载**适配层代码**和**快游戏打包工具**。
-   您已前往[node官网](https://nodejs.org/en/download)下载并安装node.js，且npm版本大于9.6.1。
-   您的测试设备已[安装快应用加载器](https://developer.huawei.com/consumer/cn/doc/development/quickApp-Guides/quickgame-installtool-0000001166035569#section20867195051318)。
-   您已提前准备如下素材内容。

    <a name="table17287102162315"></a>
    <table><thead align="left"><tr id="row728814212234"><th class="cellrowborder" valign="top" width="25.94%" id="mcps1.1.3.1.1"><p id="p328819213234"><a name="p328819213234"></a><a name="p328819213234"></a>准备项</p>
    </th>
    <th class="cellrowborder" valign="top" width="74.06%" id="mcps1.1.3.1.2"><p id="p1128815222320"><a name="p1128815222320"></a><a name="p1128815222320"></a>说明</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row132883252311"><td class="cellrowborder" valign="top" width="25.94%" headers="mcps1.1.3.1.1 "><p id="p610175162913"><a name="p610175162913"></a><a name="p610175162913"></a>原始代码包</p>
    </td>
    <td class="cellrowborder" valign="top" width="74.06%" headers="mcps1.1.3.1.2 "><p id="p2037810019214"><a name="p2037810019214"></a><a name="p2037810019214"></a>将在Unity中导出成WebGL项目。建议较大的Unity游戏项目提前进行<a href="https://docs.unity3d.com/cn/2020.3/Manual/AssetBundles-Workflow.html" target="_blank" rel="noopener noreferrer">分包处理</a>。</p>
    </td>
    </tr>
    <tr id="row32886232317"><td class="cellrowborder" valign="top" width="25.94%" headers="mcps1.1.3.1.1 "><p id="p92880222310"><a name="p92880222310"></a><a name="p92880222310"></a>证书指纹</p>
    </td>
    <td class="cellrowborder" valign="top" width="74.06%" headers="mcps1.1.3.1.2 "><p id="p10288824237"><a name="p10288824237"></a><a name="p10288824237"></a>操作详情可参见<a href="https://developer.huawei.com/consumer/cn/doc/development/quickApp-Guides/quickgame-generate-fingerprint-0000001113452452#section15374115218356" target="_blank" rel="noopener noreferrer">生成证书指纹</a>。</p>
    </td>
    </tr>
    <tr id="row32884212313"><td class="cellrowborder" valign="top" width="25.94%" headers="mcps1.1.3.1.1 "><p id="p0288162112312"><a name="p0288162112312"></a><a name="p0288162112312"></a>快游戏图标</p>
    </td>
    <td class="cellrowborder" valign="top" width="74.06%" headers="mcps1.1.3.1.2 "><a name="ul1445873435215"></a><a name="ul1445873435215"></a><ul id="ul1445873435215"><li>分辨率216*216px，不超过2MB的PNG图片。</li><li>图标圆角大小为0。</li></ul>
    </td>
    </tr>
    </tbody>
    </table>


## 第一步：封装JS接口<a name="section3445102643414"></a>

开发Unity游戏项目使用C\#语言，开发华为快游戏使用JS语言，C\#不能直接调JS接口，需在jslib库中[封装JS接口](第一步-封装JS接口.md)给C\#调用，就能使用华为快游戏丰富的能力，例如帐号、广告、支付等，

## 第二步：发布WebGL项目<a name="section863116373348"></a>

华为快游戏引擎采用了WebGL1.0规范，您需将Unity游戏项目[发布WebGL项目](第二步-发布WebGL项目.md)。

## 第三步：打包快游戏<a name="section8311205093420"></a>

导出的WebGL项目需使用华为提供的WebGL配置方案才能[打包快游戏](第三步-打包快游戏.md)。

## 调试与上架<a name="section6455222143620"></a>

为了保证华为快游戏有更好的软件性能与用户体验，您可针对接入的快游戏服务进行逐一[测试](调试与上架.md#section11883103019469)后，再在华为AppGallery Connect控制台[发布上架](调试与上架.md#section1122693616465)。

## 技术支持<a name="section1215932993610"></a>

1.  请先仔细阅读文档，部分功能对设备和系统有限制。
2.  查看[FAQ](FAQ.md)。
3.  通过[智能客服](https://developer.huawei.com/consumer/cn/customerService/#/bot-dev-top/faq-top/faq-talk-top)查找问题解决方案。
4.  登录[华为开发者论坛](https://developer.huawei.com/consumer/cn/forum/block/ag-connect)和[Stack Overflow社区](https://stackoverflow.com/questions/tagged/appgallery-connect)参与问题讨论。
5.  如果以上方法仍未解决您的问题，可以通过[在线工单系统](https://developer.huawei.com/consumer/cn/support/feedback/#/add/89?level2=201653621232848259)与我们进行联系。提交后的工单可在开发者联盟“管理中心”的“开发者中心 \> 我的客服”页面查看工单处理进展。

