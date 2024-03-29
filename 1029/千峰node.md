
# Node服务器端开发第一天

> Node简介及配置、快速上手、核心特点、模块化

## Node简介

### 客户端的JavaScript是怎样的

- 什么是 JavaScript？
  +是一个脚本语言
  +运行在浏览器（浏览器的js解析内核  v8）
  +实现用户的交互 （interactive）
  + 变量  赋值   循环 逻辑 判断 分支 对象   函数。。。。
  + dom 操作
  + bom 操作
  + ajax 
- JavaScript 的运行环境？
  +浏览器内核解析内核   es6  

- 浏览器中的 JavaScript 可以做什么？


- 浏览器中的 JavaScript 不可以做什么？（不安全）
  +访问数据库
  +不能对文件进行操作    
  +对os 进行操作
  +原因 是不安全  和浏览器运行机制有关
- 在开发人员能力相同的情况下编程语言的能力取决于什么？

  +cordova hbuilder    平台  platform
  +java   java虚拟机        （运行平台）
  +php    php虚拟机
  +c#     .net framework   mono
  +js     解析内核  chrome v8 
- JavaScript 只可以运行在浏览器中吗？
  +不是



### 什么是Node
    +node.js   一个框架   一个库     一门语言
    +node 是一个平台 赋予js以服务器功能
### 为什么是JavaScript
    +node js 不是因为js 产生的
    +node 选择了js
    +Ryan dahl
    +2009  2 月份 node有想法
    +2009  5 月份 githup 开源
    +2009  11月份  jsconf  讲解推广node  ruby
    +2010年底    被joycode公司收购
    +2018  发布有重大bug
    +npm   node  package   manage
    +githup 世界上最大的同性交友网站   码云  
    
    
### Node在当下Web开发领域的应用
    + 优势 高并发处理，  单线程  
    + ruby  python

### 哪些公司在用
    +脉脉
    +lindin  node 领英
    +天猫    node +java+传统
    +网易   游戏服务器 node
### 重点理解

- Node是一个JavaScript的运行环境（平台），不是一门语言，也不是JavaScript的框架；
- Node的实现结构；
- Node可以用来开发服务端应用程序，Web系统；
- 基于Node的前端工具集

### node 简介
Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行环境。 
Node.js 使用了一个事件驱动、非阻塞式 I/O 的模型，使其轻量又高效。 
Node.js 的包管理器 npm，是全球最大的开源库生态系统。
官网 http://nodejs.cn/
npm  插件官网：https://www.npmjs.com/
*****

## 环境配置

### 安装包的方式安装

- 安装包下载链接：
  + Mac OSX： [darwin](http://npm.taobao.org/mirrors/node/v5.7.0/node-v5.7.0.pkg)
  + Windows：
    * [x64](http://npm.taobao.org/mirrors/node/v5.7.0/node-v5.7.0-x64.msi)
    * [x86](http://npm.taobao.org/mirrors/node/v5.7.0/node-v5.7.0-x86.msi)
- 安装操作：
  + 一路*Next*
  

### 相关版本

- node版本常识  
  + 偶数版本为稳定版  （0.6.x ，0.8.x ，0.10.x）
  + 奇数版本为非稳定版（0.7.x ，0.9.x ，0.11.x）
  + LTS（Long Term Support）
  + [LTS和Current区别](https://blog.csdn.net/u012532033/article/details/73332099)
  + 1.不兼容更新 2.兼容更新 3. 小更新  文档bug
- 操作方式：
  + 重新下载最新的安装包；
  + 覆盖安装即可；
- 问题：
  + 以前版本安装的很多全局的工具包需要重新安装
  + 无法回滚到之前的版本
  + 无法在多个版本之间切换（很多时候我们要使用特定版本）



### NVM工具的使用

> Node Version Manager（Node版本管理工具）

由于以后的开发工作可能会在多个Node版本中测试，而且Node的版本也比较多，所以需要这么款工具来管理


#### 安装操作步骤

1. 下载：[nvm-windows](https://github.com/coreybutler/nvm-windows/releases/download/1.1.0/nvm-noinstall.zip)
2. 解压到一个全英文路径
3. 编辑解压目录下的`settings.txt`文件（不存在则新建）

  + `root 配置为当前 nvm.exe 所在目录`
  + `path 配置为 node 快捷方式所在的目录`
  + `arch 配置为当前操作系统的位数（32/64）`
  + `proxy 不用配置`

4. 配置环境变量 可以通过 window+r  : sysdm.cpl

  + `NVM_HOME = 当前 nvm.exe 所在目录`
  + `NVM_SYMLINK = node 快捷方式所在的目录`
  + `PATH += %NVM_HOME%;%NVM_SYMLINK%;` 切记加分号
  + 打开CMD通过`set [name]`命令查看环境变量是否配置成功
  + PowerShell中是通过`dir env:[name]`命令

5. NVM使用说明：

  + https://github.com/coreybutler/nvm-windows/

6. NPM的目录之后使用再配置

7. nvm常用命令
   nvm   查看帮助  命令信息
   nvm   ls     查看当前控制的node版本列表
   nvm   use    切换某一个版本
   nvm   install   版本号    下载node
   nvm   uninstall  版本号    卸载node

### 配置Python环境

> Node中有些第三方的包是以C/C++源码的方式发布的，需要安装后编译
> 确保全局环境中可以使用python命令
> 需要安装python  2.7 




### 环境变量的概念

> 环境变量就是操作系统提供的系统级别用于存储变量的地方

- Windows中环境变量分为系统变量和用户变量
- 环境变量的变量名是不区分大小写的
- 特殊值：
  + PATH 变量：只要添加到 PATH 变量中的路径，都可以在任何目录下搜索



### Windows下常用的命令行操作

- 切换当前目录（change directory）：cd
- 创建目录（make directory）：mkdir
- 查看当前目录列表（directory）：dir
  + 别名：ls（list）
- 清空当前控制台：cls
  + 别名：clear
- 删除文件：del
  + 别名：rm

> 注意：所有别名必须在新版本的 PowerShell 中使用

###npm 使用入门

 官网:[https://www.npmjs.com/](https://www.npmjs.com/)

 安装：无需安装

 查看当前版本：

 ```
 $ npm -v
 ```

 更新：

 ```
 $ npm install npm@latest -g

 ```
 初始化工程

 ```
 $ npm init

 $ npm init --yes 默认配置
 ```

 安装包

 使用npm install会读取package.json文件来安装模块。安装的模块分为两类
 dependencies和devDependencies，分别对应生产环境需要的安装包和开发环境需要的安装包。

 ```
 $ npm install

 $ npm install <package_name> 

 $ npm install <package_name> --save

 $ npm install <package_name> --save-dev
 ```
 更新模块
 
 ```
 $ npm update
 ```
 卸载模块

 ```
 $ npm uninstall <package_name>

 $ npm uninstall --save lodash
 ```

配置npm源

* 临时使用, 安装包的时候通过--registry参数即可

  	$ npm install express --registry https://registry.npm.taobao.org

* 全局使用
	```
	  $ npm config set registry https://registry.npm.taobao.org
	  // 配置后可通过下面方式来验证是否成功
	  npm config get registry
	  // 或
	  npm info express
	```

* cnpm 使用
    ```
    	 // 安装cnpm
		  npm install -g cnpm --registry=https://registry.npm.taobao.org

		  // 使用cnpm安装包
		  cnpm install express
    ```
##模块,包 commonjs

### commonjs规范

前端模块化：AMD,CMD,Commonjs
前端自动化工具：gulp grunt  webpack

Node 应用由模块组成，采用 CommonJS 模块规范。

##### 定义module

每个文件就是一个模块，有自己的作用域。在一个文件里面定义的变量、函数、类，都是私有的，对其他文件不可见。

##### 暴露接口

 CommonJS规范规定，每个模块内部，module变量代表当前模块。这个变量是一个对象，它的exports属性（即module.exports）是对外的接口。加载某个模块，其实是加载该模块的module.exports属性。

 ```javascript
 	var x = 5;
	var addX = function (value) {
	  return value + x;
	};
	module.exports.x = x;
	module.exports.addX = addX;
 ```
##### 引用

 require方法用于加载模块。

 ```
 	var example = require('./example.js');
	console.log(example.x); // 5
	console.log(example.addX(1)); // 6
 ```
### 模块的分类

* 内置模块
```
	const process = require('process')
	const path = require('path')
	console.log(process.version)
	console.log(path.resolve('../'))
```
* 第三方模块
```
    const request=require("request");
	console.log(request)
	request.get('http://api.douban.com/v2/movie/in_theaters', (err, response, body) => {
	  if (!err) {
	    // console.log(body);
	    console.log(JSON.parse(body))
	  } else {
	    console.log(err);
	  }
	})
```
* 自定义模块

#### node REPL 环境
r read  e  event   P  print   l LOOP
#### sublime node执行环境配置 
1.安装插件包管理中心
  ctrl+shift+p 
  install  package
2.搜索相关包   
  nodejs
3. 检测安装ok
  工具栏  tools-> buildsystem ->nodejs
  ctrl+b
不能输出中文

preferences-》bower packages->NODEJS ->Nodejs.sublime-build

将 "encoding"改为 "utf-8",

#### 前端自动化构建

grunt   gulp  webpack



















































































































