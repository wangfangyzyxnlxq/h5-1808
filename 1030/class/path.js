const path=require('path')
// console.log(__dirname)
//__dirname 获取当前文件所在的物理路径 绝对路径
// let file=path.basename('/foo/bar/baz/asdf/quux.html');
// let file=path.basename('/foo/bar/baz/asdf/quux.html','x.html');
// console.log(file)
// 获取路径中的文件名
// console.log(process.env.path)
//获取系统路径的环境变量
// console.log(process.env.path.split(path.delimiter))
//适配不同系统的环境分割
// console.log(path.delimiter)
// 获取目录结构
// console.log(path.dirname('/foo/bar/baz/asdf/quux.html'))
//获取后缀名
// let name='t.e.st.html';
// console.log(name.split('.')[name.split('.').length-1])
// console.log(path.extname(name));

//path.join() 智能拼接 
// 在node 中设计到文件操作全部用绝对路径
// console.log(path.join(__dirname,'./hehe/index.js'))
console.log(path.join(__dirname,'./hehe','./','index.js'))