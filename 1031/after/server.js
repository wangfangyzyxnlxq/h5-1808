const express=require('express');
const app=express();
const cors=require('cors')
const bodyParser=require('body-parser')
const path=require('path')
//解析post请求的第三方工具
const  utils=require('./utils.js')//封装的工具模块 实现返回数据的格式化

//静态资源目录的使用
// app.use(express.static(path.join(__dirname,'./public')))
 app.use('/img',express.static(path.join(__dirname,'./public')))
app.use(cors())// 插件解决跨域
// 通过bodyparser 解析post请求中的 x-www-formurlendcolde
// app.use(bodyParser.urlencoded({ extended: false }))
 
// 通过bodyparser 解析post请求中的 json格式
app.use(bodyParser.json())
//对所有请求的拦截处理
// app.all("*",function(req,res,next){
//     //设置允许跨域的域名，*代表允许任意域名跨域
//     res.header("Access-Control-Allow-Origin","*");
//     console.log('拦截处理')
//     // 可以用作拦截器做拦截处理
//     next()//是否执行继续
// })

// app.get("/user/login",(req,res)=>{
// 	console.log('/user/login')
// 	//express 中通过req.query 获取get参数
// 	let {us,ps}=req.query
// 	if (us=='wangyi'&&ps==123) {
// 		return res.send(utils.sendData(0,'请求ok',null))	
// 	}

// 	  res.send(utils.sendData(-1,'请求nook',null))

// })

// app.post("/user/reg",(req,res)=>{
//      let {us,ps}=req.body// 获取post方式的请求数据

// })

const adminrouter=require('./router/admin.js')
app.use('/test',adminrouter)
// 路由
// app.get('/test',(req,res)=>{
// 	console.log(11111)
// })
app.listen(3000,()=>{
	console.log('server start in port'+3000);
})
//api接口   协议//主机:端口号/path
//有2套api  一套给  admin   admin/login
//          一套给   home    home/login

//nodemailer返送邮件插件