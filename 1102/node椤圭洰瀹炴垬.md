# Node服务器端开发第五天 nodejs 项目实战
实战要求通过node+express 框架 搭建一套后端管理系统

## 项目功能分析
1. 用户注册登录
2. 获取信息列表
3. 添加信息
4. 删除信息
5. 修改信息

## 框架搭建 

1. 服务器搭建
2. 路由分发
3. 相关第三方插件引入
4. 通过mongoose 连接mongodb 数据库
   [官网文档:](https://mongoosejs.com/docs/connections.html)

   安装 mongoose  npm install mongoose

   连接数据库
   
   ```js
	const mongoose = require('mongoose');
    mongoose.connect('mongodb://127.0.0.1:27017/demo',{ useNewUrlParser: true });
	let  db = mongoose.connection;
	db.on("error", function (error) {
	    console.log("Database connection failure：" + error);
	});

	db.on("open", function () {
	    console.log("数据库连接成功");
	})

	db.on('disconnected', function () {
	    console.log('数据库连接断开');
	})
   ```

   创建schema model 对象

   ```js
   	const mongoose=require('mongoose');
	const Schema=mongoose.Schema;

	let  userSchema=new Schema({
		us:{type:String,required:true},
		ps:{type:String,required:true},
	})

	let userModel=mongoose.model('user',userSchema)
	module.exports=userModel
   ```

   路由里使用数据模型

   ```javascript
   	const express= require("express")
    const Router=express.Router();
    const userModel=require("../models/user.js")
	let  data=[];
	Router.post("/reg",(req,res)=>{
		data.push(1)
		console.log(data)
		userModel.find()
		.then((data)=>{
			res.send(data)
		})
		.catch((err)=>{
			console.log(err)
		})
		
	})
	Router.post("/login",(req,res)=>{
		res.send("注册ok")
	})

	module.exports=Router
   ```
5. API文档生成工具使用

   [ApiDoc官方文档](http://apidocjs.com/)

   [ApiDoc官方文档(翻译)](https://www.jianshu.com/p/9353d5cc1ef8)

    全局安装 `npm install apidoc -g`

    配置apidoc.json文件

    ```javascript
    	{
		  "name": "example",
		  "version": "0.1.0",
		  "description": "apiDoc basic example",
		  "title": "Custom apiDoc browser title",
		  "url" : "https://api.github.com/v1"
		}
    ```

    添加注释

	```javascript
		/*
		  @api {get} /user/:id 登录	  
		  @apiGroup User	 
		  @apiParam {Number} id Users unique ID.	 
		  @apiSuccess {String} firstname Firstname of the User.
		  @apiSuccess {String} lastname  Lastname of the User.
        */
	```

    生成api文档

    ```bash
       apidoc -i '输入目录' -o '导出目录'
    ```
6. 邮箱模块使用

	[官方文档](https://nodemailer.com/about/)

	案例代码

	```javascript 
	'use strict';
	const nodemailer = require('nodemailer');
	let transporter = nodemailer.createTransport({
	  // host: 'smtp.ethereal.email',
	  service: 'qq', // 使用了内置传输发送邮件 查看支持列表：https://nodemailer.com/smtp/well-known/
	  port: 465, // SMTP 端口
	  secureConnection: true, // 使用了 SSL
	  auth: {
	    user: '352186537@qq.com',
	    // 这里密码不是qq密码，是你设置的smtp授权码
	    pass: 'XXXXXX',
	  }
	});
	let mailOptions = {
	  from: '"JavaScript之禅" <352186537@qq.com>', // sender address
	  to: 'huangjunjian@h5edu.cn', // list of receivers
	  subject: 'Hello', // Subject line
	  // 发送text或者html格式
	  // text: 'Hello world?', // plain text body
	  html: '<b>Hello world?</b>' // html body
	};
	// send mail with defined transport object
	transporter.sendMail(mailOptions, (error, info) => {
	  if (error) {
	    return console.log(error);
	  }
	  console.log('Message sent: %s', info.messageId);
	  // Message sent: <04ec7731-cc68-1ef6-303c-61b0f796b78f@qq.com>
	});
	```

 7.文件上传

   前端demo
   ```html
    <!DOCTYPE html>
	<html lang="en">
	<head>
		<meta charset="UTF-8">
		<title>Document</title>
		<script src="./node_modules/jquery/dist/jquery.min.js"></script>
	</head>
	<body>
		<form enctype="multipart/form-data" method="post">
			<input type="file" name='image' id="imagelist">
			
		</form>
		<button onclick="Req_ajax()"> 上传</button>
	<script>
		var OL_Action_Root = "http://127.0.0.1:3000";
	function Req_ajax()
	{           
		console.log(111)
		console.log($("#imagelist")[0].files)
	    var formData = new FormData()
	    formData.append("test",$("#imagelist")[0].files[0])    
	    $.ajax({
	        url: OL_Action_Root+'/uploadImage',
	        type: 'POST',
	        data: formData,
	        cache: false,
	        contentType: false,
	        processData: false,
	        success: function(data){
	            var res = data;
	            if(res[0] == 'success')
	            {
	                document.getElementById("status").innerHTML = "<span style='color:green'>文件上传成功！<br>文件名为："+res[1].filename+"</span>";
	            }
	            else
	            {
	                document.getElementById("status").innerHTML = "<span style='color:#EF0000'>文件上传失败！<br>原因是："+res[1].msg+"</span>";
	            }
	        },
	        error: function(jqXHR, textStatus, errorThrown){
	            document.getElementById("status").innerHTML = "<span style='color:#EF0000'>连接不到服务器，请检查网络！</span>";
	        }
	    });
	}
 
	</script>
	</body>
	</html>
   ```

   node demo
   ```javascript  
	const express =require('express');
	const multer=require('multer')
	const router=express.Router();
	const fs=require('fs')
	const path=require('path')

	router.post('/uploadfile',multer({ dest: '/tmp/' }).single('test'),(req,res)=>{
	  console.log(req.file)
	  var filename=new Date().getTime()+parseInt(Math.random()*99999)+'.'+req.file.mimetype.split('/')[1]
	  let dir='../public/img/'
	   fs.readFile( req.file.path, function (err, data) {
	        fs.writeFile(path.join(__dirname,dir,filename), data, function (err) {
	        	console.log(err)
	            if (err) {return res.send('失败')}

	             res.send('ok')
	        })
	     })
	})

	module.exports =router;
   ```