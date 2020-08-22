# 前端开发的概念

## Q1

名词解释，前端开发的语境中，这些东西都是什么？

越精简越好，用一两句话你表现出的理解，例如：`Node.js 是 JS 的一个 runtime`  
（不了解的可以跳过）

请在下面的表格中作答：

| 名词           | 是什么               |
| :------------- | :------------------- |
| Node.js        | 是 JS 的一个 runtime |
| npm            | 是nodejs的包管理工具                |
| npx            | 是 npm v5.2.0引入的一条命令                |
| nvm            | 是 一个nodejs的版本管理工具                |
| nrm            | 是 npm的镜像源管理工具                |
| yarn           | 是 Facebook 贡献的 Javascript 包管理器                |
| React          | 是 一个用于构建用户界面的 JAVASCRIPT 库                |
| Vue            | 是 一套用于构建用户界面的渐进式JavaScript框架                |
| Flux           | 是 Facebook用户建立客户端Web应用的前端架构                |
| Mobx           | 是 一种简单、可扩展的状态管理                |
| MVVM           | 是 MVVM 是Model-View-ViewModel 的缩写，它是一种基于前端开发的架构模式，其核心是提供对View 和 ViewModel 的双向数据绑定，这使得ViewModel 的状态改变可以自动传递给 View，即所谓的数据双向绑定。                |
| TDD            | 是 TDD（Test-Driven Development）是敏捷开发中的一项核心实践和技术，也是一种设计方法论，其基本思想是：在明确要开发某个功能后，在开发功能代码之前，先编写测试代码，然后编写功能代码并用测试代码进行验证，如此循环直到完成全部功能的开发。                |
| Jest/Mocha     | 是 前端测试工具|
| node_modules   | 是 安装node后用来存放用包管理工具下载安装的包的文件夹              |
| package.json   | 是 定义了这个项目所需要的各种模块                |
| ECMAScript     | 是 一种由Ecma国际（前身为欧洲计算机制造商协会,英文名称是European Computer Manufacturers Association）通过ECMA-262标准化的脚本程序设计语言。               |
| Electron       | 是 是由 Github开发的开源框架                |
| Babel          | 是 Babel是一个广泛使用的转码器，可以将ES6代码转为ES5代码，从而在现有环境执行执行。
这意味着，你可以现在就用 ES6 编写程序，而不用担心现有环境是否支持。                |
| Webpack        | 是 webpack可以看做是模块打包机：它做的事情是，分析你的项目结构，找到JavaScript模块以及其它的一些浏览器不能直接运行的拓展语言（Scss，TypeScript等），并将其打包为合适的格式以供浏览器使用。                |
| SSR            | 是 服务器将组件和获取到的数据解析生成html字符串，发送给客户端。过程同之前的php、java等的全栈开发，使用模板引擎，获取数据后解析为html字符串后，发到客户端展现。
服务器渲染的 Vue.js 应用程序，可以同时在服务器和客户端上运行。                |
| BFF            | 是 BFF是（Backends For Frontends）单词的缩写，主要是用于服务前端的后台应用程序，来解决多访问终端业务耦合问题。                |
| Serverless     | 是 第一种：狭义serverless（最常见） = serverless computing架构 = Faas架构 = Trigger(事件驱动) + Faas（函数即服务）+ Baas（后端即服务，持久化或第三方服务）= Faas + Baas
第二种：广义serverless = 服务端免运维 = 具备serverless的特性的云服务                |
| PWA            | 是 progressive web app： 渐进式网页应用             |
| V8             | 是 V8是JavaScript渲染引擎，第一个版本随着Chrome的发布而发布(具体时间为2008年9月2日)。在运行JavaScript之前，相比其它的JavaScript的引擎转换成字节码或解释执行，V8将其编译成原生机器码（IA-32, x86-64, ARM, or MIPS CPUs），并且使用了如内联缓存（inline caching）等方法来提高性能。V8可以独立运行，也可以嵌入到C++应用程序中运行。                |
| libuv          | 是 Node.js中的异步事件处理框架。它来源于libev，然而libev只能运行于Unix-like系统上。为了能够使Node.js运行在Windows/Unix-like系统上，libuv因此产生了。                |
| Stack Overflow | 是 每当java程序启动一个新的线程时，java虚拟机会为他分配一个栈，java栈以帧为单位保持线程运行状态；当线程调用一个方法是，jvm压入一个新的栈帧到这个线程的栈中，只要这个方法还没返回，这个栈帧就存在。 
如果方法的嵌套调用层次太多(如递归调用),随着java栈中的帧的增多，最终导致这个线程的栈中的所有栈帧的大小的总和大于-Xss设置的值，而产生生StackOverflowError溢出异常。                |
| Deno           | 是 deno是一个基于v8、rust和Tokio的Javascript/Typescript的安全运行时。它在内部嵌入了一个typescript的编译器。可以将typescript编译成js然后运行在v8上，并通过c++ libdeno实现js与rust的通信交互，当然deno也可以直接运行Javascript代码               |

## Q2

你平时从哪里了解前端的技术生态？
只需列出 3~10 条即可

例如：

> - Youtube 的几个频道: Fireship、Traversy Media、DesignCourse …
> - 掘金、知乎

答：腾讯课堂，CSND，慕课网，编程狮,W3C博客，技术对应的相应网站
