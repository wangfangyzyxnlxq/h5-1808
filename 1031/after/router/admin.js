//处理管理的api

const express=require('express');

const router=express.Router()//创建路由对象


router.get("/login",(req,res)=>{
	console.log('amin 的 login')
})

module.exports=router;