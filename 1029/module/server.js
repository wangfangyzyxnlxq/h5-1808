const http = require('http');
// 引入内置模块
//创建服务器 
const server = http.createServer((req, res) => {
  //requset  response
   console.log(req.url)
   res.writeHead(200, { 'Content-Type': 'text/plain;charset=utf8' });
   // 设置回复格式
  res.write('<div>你好呀</div>')
   res.end();
  // 请求报文回复结束
});

server.listen(3000, () => {
  console.log('server start listen in port：'+3000)
  })

//内置模块第三方模块  require('模块名')
//自定义模块  require(“引入的文件路径”)
// 第三方模块需要下载 