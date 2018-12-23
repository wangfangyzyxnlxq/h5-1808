/*
文件相关
fs.readfile
fs.writefile
fs.appendfile
fs.unlik
文件夹相关
fs.mkdir
fs.readdir
fs.rmdir
fs.rename
*/
//读取文件
const fs=require('fs');
//引入内置的文件模块
// console.log(111)
// 非阻塞io操作  异步
// fs.readFile('./log.txt',(err,data)=>{
// 	if (err) { console.log(err)}
// 	console.log(data.toString())
//     console.log(333)
// });
//阻塞io操作
// console.log(fs.readFileSync("./log.txt", 'utf8'));
// console.log(222)
// fs.readFile('./log.txt','utf8',(err,data)=>{
// 	if (err) { console.log(err)}
	
// });
//读取文件 获得buffer 类型  设置 option  utf8  或者  buffer.toString()
//io操作一般是阻塞的 也就是   阻塞i/o
//在node 中i/o可以是不阻塞的  这就是  非阻塞i/o  表面上是通过 异步回调实现

// 写文件
// fs.writeFile('./test/log2.txt', '你好11121', (err)=>{
// 	if (err) { return console.log(err)}
// 	console.log('写入ok')
// });
// 如果文件没有会创建一个文件，但是不会创建文件夹
// try{
//  fs.writeFileSync('./log2.txt', '222');	
// }
// catch(err){
// 	console.log(err)
// }
// console.log(111)
// 同步操作需要用try catch 捕获错误

//文件追加写入
// fs.appendFile('./log.txt', "\ntest", (err)=>{
// 	if (err) { return  console.log(err)}
// 	 console.log('写入ok')
// });
// fs.appendFileSync(path, data, options);

//文件的删除操作
fs.unlink('./log.txt', (err)=>{
	if (err) { return console.log(err)}
	console.log('删除ok')
});
// fs.unlinkSync(path);
//获取文件信息
fs.stat('./log1.txt', (err,stat)=>{
	if (err) { return console.log(err)}
	// console.log(stat.isFile())//判断是否为一个文件  isDerectory() 是否为文件夹
   console.log(stat)
})
// fs.statSync(path);

// 作业1  创建一个服务器 实现用户的登录 ->进阶  结合文件系统 实现注册和登录
// 作业2  通过文件系统实现bug日记->进阶创建一个自定义模块 可以实现bug日记的更能
// 作业3  预习明天内容  文件目录的操作  -> 创建一个文件夹并且在内部创建n个文件