# 巴扎黑clipper功能描述
1. 自动剪辑功能，快捷键（shift+x）
    - 可以直接获取以下页面正文部分
    - 知乎专栏：http://zhuanlan.*.com/;
    - csdn：https://blog.csdn.net/*
    - 伯乐在线：http://blog.jobbole.com/*
    - 简书正文:https://www.jianshu.com/*
    - 掘金:https://juejin.im/*
    - 思否：https://segmentfault.com/*
    - cnblogs：https://www.cnblogs.com/*
    - w3cplus :https://www.w3cplus.com/*
2. 可编辑功能（利用：document.body.contentEditable = true;）
3. 剪辑功能
    - 可以选择指定的div，删除未选择的
    - 缺点：不能对选择的div进行重新调整样式
# 优势（相比于简悦）
1. 样式粗糙（哈哈哈）
2. 简悦进入沉浸式阅读，不能对文字进行删除（可能我未找到）
1. 沉浸阅读，使用如下划重点插件，报错（懒得找其他插件了）
1. 沉浸阅读，ctrl+p保存pdf，是图片-。-（可能保存方式有误）

# 说明
## 使用说明
1. 看到能自动剪辑的网站，直接点击自动剪辑，会直接形成正文
1. 可以启用编辑，对不需要的文字进行删除
2. 对于不用自动剪辑的网站，只能使用剪辑功能自己圈选内容，然后点击处理已剪辑内容
    - 可能样式会比较丑
## 文件说明
1. pop.js
    - 毋庸置疑的是弹窗js
1. autoClipper.js
    - 自动剪辑的js，如需要新的网站进行自动剪辑，直接在hostMap添加剪辑办法就行
1. main.js
    - 统一处理pop中点击事件，request.action与pop按钮的id对应；
    - 因为pop.js传递过来的是e.target.id
1. pageHelper.js
    - 主要用于处理鼠标与键盘的操作(添加到具体页面中的)
1. preProcess.js
    - pageHelper前的预处理
1. tools.js
    - 提示信息的js

# 补充
## Super Simple Highlighter
1. 为了在剪辑上方便的绘制重点,随便找了一个
2. https://chrome.google.com/webstore/detail/super-simple-highlighter/hhlhjgianpocpoppaiihmlpgcoehlhio?utm_source=chrome-ntp-icon
1. 此插件用于直接划重点，安装后，直接在选中文本后右键即可划重点
## 推荐沉浸式阅读（简悦）
1. https://chrome.google.com/webstore/detail/simpread-reader-view/ijllcpnolfcooahcekpamkbidhejabll/related
## 图标生成
1. appiconizer：https://appiconizer.com/
## 参考
1. 小茗同学的博客园：https://www.cnblogs.com/liuxianan/p/chrome-plugin-develop.html

# 版本记录
## 1.0.0
1. 初始功能
## 1.1.0
1. 主要增加快捷键支持
2. 更改pageHelper与main等调用方法