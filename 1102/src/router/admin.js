const express=require('express');
const Router=express.Router();
//数据模型引入
const User=require('../mongo/model/user.js')
/**
 * @api {get} /admin/login/ login
 * @apiName login
 * @apiGroup admin
 *
 * @apiParam {Number} id Users unique ID.
 *
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 */
Router.get('/login',(req,res)=>{
     
	res.send('ok')
})
/**
 * @api {post} /admin/getUserInfo/ getUserInfo
 * @apiName getUserInfo
 * @apiGroup admin
 *
 * @apiParam {Number} id Users unique ID.
 *
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 */
Router.post('/getUserInfo',(req,res)=>{
     User.find()
     .then((data)=>{
     	res.send(data)
     })
	 .catch((err)=>{
	 	console.log(err);
	 	res.send('失败')
	 })
})
 //  let check={}
 //  //获取验证码
 //  app.post("/getCode",(req,res)=>{
 //  	// console.log(req.body)
 //  	let mail=req.body.mail
	// if (!mail) {return res.send('参数错误')}
 //  	let code=parseInt(Math.random(0,1)*1000)
 //  	check[mail]=code
 //  	//发送邮件是异步操作
 //  	 email.sendMail(mail,code,(state)=>{
 //  	  	    if (state) {
 //  	  	    	res.send('验证码发送nook')
 //  	  	    }else{
 //  	  	       res.send('验证码发送ok')
 //  	  	    }
  	  		
 //  	  })

 //  })
 // // 验证码注册
 // app.post("/reg",(req,res)=>{
 //   let {ps,mail,code}=req.body
 //   console.log({ps,mail,code})
 //   console.log(check)
 //   if (check[mail]==code) {
 //       //插入数据库
 //       res.send('注册ok')
 //   }else{
 //   	  res.send('验证码错误')
 //   }

 // })
module.exports=Router;