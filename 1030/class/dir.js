const fs=require('fs');

// curd 增删改查
//创建文件夹
//1. 不能重复创建
//2. 不能嵌套创建
// fs.mkdir('./age/test', (err)=>{
// 	if (err) { throw err}
// 	console.log('ok')
// });
// fs.mkdirSync(path, mode);

//修改文件夹和文件名字
// fs.rename(oldPath, newPath, callback);
// fs.rename('./test', './hehe',(err)=>{
// 	if (err) { throw err}
// 	console.log('ok')
// 
// fs.rename('./test.js', './hehe.txt',(err)=>{
// 	if (err) { throw err}
// 	console.log('ok')
// });
// fs.renameSync(oldPath, newPath);
//读取文件夹操作  获取文件内部内容
//fs.readdir(path, options, callback);
// fs.readdir('./',(err,dirs)=>{
// 	if (err) { throw err}
//  	console.log(dirs)
// })
// 打印当前目录树

//删除文件夹. 只能删除空文件夹
// fs.rmdir('./heheh', (err)=>{
// 	if (err) { throw err}
//  	console.log('del ok')
// });
// fs.rmdirSync(path);