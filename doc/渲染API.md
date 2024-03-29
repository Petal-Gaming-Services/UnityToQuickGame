# 渲染API<a name="ZH-CN_TOPIC_0000001646407732"></a>

-   [接口定义](#section183503126613)
    -   [static void SetPreferredFramesPerSecond\(int fps\)](#section73161511193412)

## 接口定义<a name="section183503126613"></a>

<a name="table892310973612"></a>
<table><thead align="left"><tr id="row19232993618"><th class="cellrowborder" valign="top" width="50%" id="mcps1.1.3.1.1"><p id="p49246933615"><a name="p49246933615"></a><a name="p49246933615"></a>接口</p>
</th>
<th class="cellrowborder" valign="top" width="50%" id="mcps1.1.3.1.2"><p id="p592499133614"><a name="p592499133614"></a><a name="p592499133614"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="row19241298367"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.1 "><p id="p1051153612361"><a name="p1051153612361"></a><a name="p1051153612361"></a><a href="#section73161511193412">static void SetPreferredFramesPerSecond(int fps)</a></p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.2 "><p id="p64892036133619"><a name="p64892036133619"></a><a name="p64892036133619"></a>修改渲染帧率。</p>
</td>
</tr>
</tbody>
</table>

### static void SetPreferredFramesPerSecond\(int fps\)<a name="section73161511193412"></a>

-   描述

    修改渲染帧率。默认渲染帧率为每秒60帧，修改后帧率会发生变化。

-   请求参数

    <a name="table783417215351"></a>
    <table><thead align="left"><tr id="row583412214356"><th class="cellrowborder" valign="top" width="20%" id="mcps1.1.5.1.1"><p id="p208346218353"><a name="p208346218353"></a><a name="p208346218353"></a>参数</p>
    </th>
    <th class="cellrowborder" valign="top" width="25%" id="mcps1.1.5.1.2"><p id="p3835027351"><a name="p3835027351"></a><a name="p3835027351"></a>类型</p>
    </th>
    <th class="cellrowborder" valign="top" width="15%" id="mcps1.1.5.1.3"><p id="p3835182173518"><a name="p3835182173518"></a><a name="p3835182173518"></a>必填(M)/选填(O)</p>
    </th>
    <th class="cellrowborder" valign="top" width="40%" id="mcps1.1.5.1.4"><p id="p1283510293519"><a name="p1283510293519"></a><a name="p1283510293519"></a>说明</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row0835202183513"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.5.1.1 "><p id="p1241917520352"><a name="p1241917520352"></a><a name="p1241917520352"></a>fps</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.2 "><p id="p1041810516357"><a name="p1041810516357"></a><a name="p1041810516357"></a>int</p>
    </td>
    <td class="cellrowborder" valign="top" width="15%" headers="mcps1.1.5.1.3 "><p id="p134181550357"><a name="p134181550357"></a><a name="p134181550357"></a>M</p>
    </td>
    <td class="cellrowborder" valign="top" width="40%" headers="mcps1.1.5.1.4 "><p id="p64176573515"><a name="p64176573515"></a><a name="p64176573515"></a>有效值范围1~60。</p>
    </td>
    </tr>
    </tbody>
    </table>

-   示例代码

    ```
    public void SetPreferredFramesPerSecond()
    {
        int fps = 55;
        Debug.Log("SetPreferredFramesPerSecond success fps: " + fps);
        QG.SetPreferredFramesPerSecond(fps);
    }
    ```

