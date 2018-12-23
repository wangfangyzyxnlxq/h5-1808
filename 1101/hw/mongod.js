
// mongod  终端开启mongodb指令    
// mongo   终端里连接mongodb 数据库的指令
// mongodb 数据库名   node 用的插件
// mongoose  node 用的插件 比mongodb 好用
// 建立链接获取数据对象
// 写查询语句

var MongoClient = require('mongodb').MongoClient;
//结尾是选择数据库名
var ObjectId = require('mongodb').ObjectId;
 //创建 objid 的对象
var DB_CONN_STR = 'mongodb://localhost:27017/';
MongoClient.connect(DB_CONN_STR, { useNewUrlParser: true }, function(err, client) {
	if (err) { throw err}
    console.log("连接成功！");
    let db=client.db("hehe");
    // 基本查询
    // db.collection('user').find().toArray((err,data)=>{
    // 	console.log(data)
    // })
    // //固值查询
    // db.collection('user').find({ps:7}).toArray((err,data)=>{
    // 	console.log(data)
    // })
     //固值查询
    // db.collection('user').find().skip(2).limit(2).toArray((err,data)=>{
    // 	console.log(data)
    // })

    //插入操作
     //固值查询
    // db.collection('user').insert({us:'你好',ps:123},(err,data)=>{
    // 	console.log(err)
    // 	console.log(data)
    // })
    //  db.collection('user').insert([{us:'你好',ps:123},{name:'hehe',age:16}],(err,data)=>{
    // 	console.log(err)
    // 	console.log(data)
    // })
    // 删除
      //  let _id = ObjectId("5bdaaaf7f3c6f82060ccebb7");
      //  // 将一个字符串转化为objectiD
      // db.collection('user').remove({_id:_id},(err,data)=>{
      // 	console.log(err)
      // 	console.log(data.result)
      // })
     //更新
     // db.collection('user').update({ps:4},{$set:{us:'呵呵'}},(err,data)=>{
     // 	console.log(err)
     // 	console.log(data.result)
     // })
     // phone :15652650890   ps:123456  注册的接口 回调地狱
     db.collection('user').find({phone}).toArray((err,data)=>{
      
        if (data.length==0) {
        	//插入数据库
        	db.collection('user').insert({ps,us},(err,data)=>{

        	})
        }else{
        	//返回错误
        }
     })
});
//非阻塞i/o->回调函数-》回调地狱-》promise
