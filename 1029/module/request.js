var request = require('request');
request('http://www.baidu.com', function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  if (error) { throw error}
  	
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});
//node中回调函数必须是错误优先 这是规范，第一个参数是错误信息 
// error  取值 null   具体的错误信息

// let  err=new Error("错误信息")
// console.log(err)
// throw  err;
// throw  抛出一个错误并且终止一下代码执行
// console.log(111)