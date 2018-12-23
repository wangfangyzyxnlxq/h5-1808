
  const express=require('express');
  const app=express();
  const bodyParser=require('body-parser')
  const email=require('./sendmail.js')
  const path=require('path')


  const db=require('./src/mongo/mongoose.js')
  //连接数据库
  app.use(bodyParser.urlencoded({ extended: false }))

  app.use(express.static(path.join(__dirname,'./public')))
  app.use('/admin',express.static(path.join(__dirname,'./admin')))
  //路由
  const adminRouter=require('./src/router/admin.js')
  const uploadRouter=require('./src/router/upload.js')
  const goodsRouter=require('./src/router/goods.js')

  app.use('/admin',adminRouter)
  app.use('/upload',uploadRouter)
   app.use('/goods',goodsRouter)
app.listen(3000,()=>{
	console.log('server start in port'+3000);
})
