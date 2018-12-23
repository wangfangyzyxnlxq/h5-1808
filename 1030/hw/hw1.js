// 作业1  创建一个服务器 实现用户的登录 ->进阶  结合文件系统 实现注册和登录
// 作业2  通过文件系统实现bug日记->进阶创建一个自定义模块 可以实现bug日记的更能
// 作业3  预习明天内容  文件目录的操作  -> 创建一个文件夹并且在内部创建n个文件

const http = require('http');
const url=require('url');//node内置对url的解析
// 引入内置模块
//创建服务器 
const server = http.createServer((req, res) => {
  //requset  response
  
   if (req.url=='/favicon.ico') { return res.end()}// 处理favicon.ico
  
   	  let {us,ps}=url.parse(req.url,true).query
   	  //通过es6的结构对象获取us和ps
   	   res.writeHead(200, { 'Content-Type': 'text/plain;charset=utf8' });
   	  if (us=="hehe"&&ps=='123') {
   	  		res.write('<div>你好呀</div>')
   	  }else{
   	  		 res.write('<div>用户名错误</div>')
   	  }
  
  
   res.end();
});

server.listen(3000, () => {
  console.log('server start listen in port：'+3000)
  })

/*
/?us=wangyi&ps=456
split()
{us:wangy,ps=456}

*/ 

