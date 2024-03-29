const express=require('express');
const Router=express.Router();
//数据模型引入
const Goods=require('../mongo/model/goods.js')
//增加商品
//添加商品信息

/**
 * @api {post} /goods/addGoods/ addGoods
 * @apiName addGoods
 * @apiGroup goods
 *
 * @apiParam {String} name  商品名称
 * @apiParam {String} type 商品类型
 * @apiParam {String} desc 商品描述
 * @apiParam {String} price 商品价格
 * @apiParam {String} imgpath 图片地址
 * @apiParam {Number} stock 商品余额
 *
 * @apiSuccess {Number} err 错误码 0：ok -1 失败
 * @apiSuccess {String} msg  结果信息
 * @apiSuccess {String} data  返回数据
 */
Router.post('/addGoods',(req,res)=>{
// 1.接受数据
  let {name,type,desc,price,imgpath,stock}=req.body
 Goods.insertMany({name,type,desc,price,imgpath,stock})
 .then((data)=>{
 	res.send({err:0,msg:'插入成功',data:null})
 })
 .catch((err)=>{

 	console.log(err)
    res.send({err:-1,msg:'插入失败',data:null})
 })

})
//查询商品

/**
 * @api {post} /goods/getGoods/ getGoods
 * @apiName getGoods
 * @apiGroup goods
 *
 * @apiParam {Number} pagesize  每页数量
 * @apiParam {Number} page 当前页数
 *
 * @apiSuccess {Number} err 错误码 0：ok -1 失败
 * @apiSuccess {String} msg  结果信息
 * @apiSuccess {String} data  返回数据
 */
Router.post('/getGoods',(req,res)=>{
  // Goods.find()查询所有
  // Goods.find({tyle:‘音乐’})//分类查询
  // Goods.find().limit(5).skip(5)//分页查询
  // 1页2条
  // 2   0
  // 2   2
  // 2   4
  // let pagesize=2//每页的条数
  // let page=1//页数o
  let  {pagesize,page}=req.body
  console.log(pagesize)
  console.log(page)
  Goods.find().limit(Number(pagesize)).skip((Number(page)-1)*Number(pagesize))
  .then((data)=>{
  	res.send({err:0,msg:'查询成功',data:data})
  })
  .catch((err)=>{
  	console.log(err)
  	res.send({err:-1,msg:'查询错误',data:null})
  })

})
//修改商品

/**
 * @api {post} /goods/updateGoods/ updateGoods
 * @apiName updateGoods
 * @apiGroup goods
 *
 * @apiParam {String} id  商品的主键id
 * @apiParam {String} name  商品名称
 * @apiParam {String} type 商品类型
 * @apiParam {String} desc 商品描述
 * @apiParam {String} price 商品价格
 * @apiParam {String} imgpath 图片地址
 * @apiParam {Number} stock 商品余额
 *
 * @apiSuccess {Number} err 错误码 0：ok -1 失败
 * @apiSuccess {String} msg  结果信息
 * @apiSuccess {String} data  返回数据
 */
Router.post('/updateGoods',(req,res)=>{
  //获取商品的唯一索引 主键（_id）
  // 获取修改的值
  // 执行修改

  let id=req.body.id;
  let {name,type,desc,price,imgpath,stock}=req.body
  Goods.update({_id:id},{name,type,desc,price,imgpath,stock})
  .then((data)=>{
  	res.send({err:0,msg:'修改成功',data:null})
  })
  .catch((err)=>{
  	console.log(err)
  	res.send({err:-1,msg:'修改no成功',data:null})
  })

})
//删除商品

/**
 * @api {post} /goods/delGood/ delGood
 * @apiName delGood
 * @apiGroup goods
 *
 * @apiParam {String} id  要删除的商品的主键id
 *
 * @apiSuccess {Number} err 错误码 0：ok -1 失败
 * @apiSuccess {String} msg  结果信息
 * @apiSuccess {String} data  返回数据
 */
Router.post('/delGood',(req,res)=>{
  //获取商品的唯一索引 主键（_id）
  // 获取修改的值
  // 执行修改

  let id=req.body.id;
  Goods.remove({_id:id})
  .then((data)=>{
  	res.send({err:0,msg:'删除功',data:null})
  })
  .catch((err)=>{
  	console.log(err)
  	res.send({err:-1,msg:'删除no成功',data:null})
  })

})
module.exports=Router;