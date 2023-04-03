# 第二步：发布WebGL项目<a name="ZH-CN_TOPIC_0000001475897765"></a>

1.  在Unity界面的顶部菜单选择“File \> Build Settings”。
2.  在弹出的“Build Settings”窗口配置参数，完成后点击左下角“Player Settings”。

    ![](figures/步骤1.png)

3.  在弹出的“Project Settings”窗口中进行如下配置：
    -   在“Resolution and Presentation”区域下，“WebGL Template”选择“Default”。

        ![](figures/2-1.png)

    -   在“Other Settings”区域下配置参数：

        ![](figures/步骤3-1-plus.png)

    -   在“Publishing Settings”区域下，“Compression Format”选择“Disabled”，同时勾选“Data caching”。

        ![](figures/2-3.png)

4.  关闭“Project Settings”弹窗。
5.  确认Unity游戏项目的修改点均已保存后，点击“Build Settings”弹窗右下角“Build”开始构建并导出WebGL项目。若“Build”置灰，请先点击“Switch Platform”再构建WebGL项目。

