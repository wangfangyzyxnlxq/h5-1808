// 1.下载网页源码
// 2.分析网页
// 3.获取数据
 const http=require('https');
 const cheerio=require("cheerio")
 const fs=require('fs');
 const path=require('path')
 // let url='https://www.baidu.com'
 let url='https://www.baidu.com/img/bd_logo1.png'
	http.get(url, (res) => {
	  const { statusCode } = res;//获得请求的状态码   404  403  200
	  const contentType = res.headers['content-type'];// 获取回复的头文件信息
	  console.log(statusCode)
	  console.log(contentType)
	  // 返回数据格式判定
	  let error;
	  if (statusCode !== 200) {
	    error = new Error('Request Failed.\n' +
	                      `Status Code: ${statusCode}`);
	  } 

	  if (error) {
	    console.error(error.message);
	    // consume response data to free up memory
	    res.resume();// 清除数据缓存
	    return;
	  }

	  // res.setEncoding('utf8');//设置编码格式
	  res.setEncoding('binary');// 图片的格式为二进制数据
	  let rawData = '';//用于保存流数据
	  res.on('data', (chunk) => { rawData += chunk
	  	console.log('触发data')
	  }); 
	  // 流式数据传输触发data事件
	  // 数据传输结束触发end事件
	  res.on('end', () => {
	  	// console.log(rawData)
	  	console.log('触发end')
	
	    fs.writeFile('./hehe.png', rawData, 'binary', (err)=>{
	    	console.log(err);
	    });
	  });
	}).on('error', (e) => {
		// 请求错误处理
	  console.error(`Got error: ${e.message}`);
	});

	// express  koa