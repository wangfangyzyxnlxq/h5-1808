//服务器代理 服务器请求没有跨域
// 1. 前端发起请求  http.creatserver
// 2. 发起向其他服务器请求
// 服务器传输为流式

const http=require('http')

// httpget((res)=>{
// 	console.log(res)
// })
function httpget(callback){
	let api='http://api.douban.com/v2/movie/top250?start=25&count=1'
	http.get(api, (res) => {
	  const { statusCode } = res;//获得请求的状态码   404  403  200
	  const contentType = res.headers['content-type'];// 获取回复的头文件信息
	  console.log(statusCode)
	  console.log(contentType)
	  // 返回数据格式判定
	  let error;
	  if (statusCode !== 200) {
	    error = new Error('Request Failed.\n' +
	                      `Status Code: ${statusCode}`);
	  } else if (!/^application\/json/.test(contentType)) {
	    error = new Error('Invalid content-type.\n' +
	                      `Expected application/json but received ${contentType}`);
	  }
	  if (error) {
	    console.error(error.message);
	    // consume response data to free up memory
	    res.resume();// 清除数据缓存
	    return;
	  }

	  res.setEncoding('utf8');//设置编码格式
	  let rawData = '';//用于保存流数据
	  res.on('data', (chunk) => { rawData += chunk
	  	console.log('触发data')
	  });
	  // 流式数据传输触发data事件
	  // 数据传输结束触发end事件
	  res.on('end', () => {
	  	console.log('触发end')
        
	     callback(rawData);
	  });
	}).on('error', (e) => {
		// 请求错误处理
	  console.error(`Got error: ${e.message}`);
	});	
}

//搭建我方服务器

const url=require('url');//node内置对url的解析
// 引入内置模块
//创建服务器 
const server = http.createServer((req, res) => {
  //requset  response
  
   if (req.url=='/favicon.ico') { return res.end()}// 处理favicon.ico
  
   	   res.writeHead(200, { 'Content-Type': 'text/plain;charset=utf8' });

      if(req.url=='/getcode'){
      	//向目标服务器发起请求
      	httpget((data)=>{
	        // console.log(res)
	        res.end(data);
        })

      

      }
   
});

server.listen(3000, () => {
  console.log('server start listen in port：'+3000)
  })