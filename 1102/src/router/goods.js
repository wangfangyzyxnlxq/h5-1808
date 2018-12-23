const express=require('express');
const Router=express.Router();
//数据模型引入
const goods=require('../mongo/model/goods.js')
//增加商品
Router.post('/add',(req,res)=>{

 let {name,type,desc,price,imgpath,stock}=req.body;//接受参数
	//入库goods
	goods.insertMany( {name,type,desc,price,imgpath,stock})//添加到数据库
	.then((data)=>{
		res.send('ok')
	})
	.catch((err)=>{
		console.log(err)
		res.send('nook')
	})

})
//查询商品
//修改商品
//删除商品
module.exports=Router;