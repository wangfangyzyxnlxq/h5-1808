const fs=require('fs');
const path=require('path');

//思路
// 1.读取目标目录 
// 2. 输出文件的名字
// 3.文件夹循环调用
let targer=path.join(__dirname,'../','../','../')

console.log(targer)
loadDirTree(targer,1)

function loadDirTree(targer,lev){
let dirs=[]//保存文件夹
let files=[]//用来保存文件
let prefix = new Array(lev).join("│  ")//根据 目录的层级拼接字符
let level=lev+1
//读取目录
try{
  let data=fs.readdirSync(targer);  
   for (var i = 0; i < data.length; i++) {
           //console.log(path.join(targer,data[i]))
        let stat=fs.statSync(path.join(targer,data[i]));
        if (stat.isDirectory()) {
            dirs.push(data[i])
        }else{
            files.push(data[i])
        }
    }   
    // console.log(files)
       //文件夹的操作
    
    for (var i = 0; i < dirs.length; i++) { 
          console.log(`${prefix}├─${dirs[i]}`) 
       //递归调用自己     
       loadDirTree(path.join(targer,`./${dirs[i]}`),level)// 异步
       //获取新的加载路径
    }

    //文件操作
    for (var i = 0; i < files.length; i++) {
        if (i==files.length-1) {
          console.log(`${prefix}└─${files[i]}`)
        }else{
          console.log(`${prefix}├─${files[i]}`)
        }   
    }
}catch(err){
    console.log(err)
}
// fs.readdir(targer, (err,data)=>{
// 	if (err) { throw err}
// 	// console.log(data)
//     if (data.length==0) { throw new Error('文件夹为空')}
//     for (var i = 0; i < data.length; i++) {
//     	   //console.log(path.join(targer,data[i]))
//      	let stat=fs.statSync(path.join(targer,data[i]));
//      	if (stat.isDirectory()) {
//      		dirs.push(data[i])
//      	}else{
//      		files.push(data[i])
//      	}
//     } 	
//     // console.log(files)
//        //文件夹的操作
    
//     for (var i = 0; i < dirs.length; i++) { 
//     	  console.log(`${prefix}├─${dirs[i]}`) 
//        //递归调用自己  	
//        loadDirTree(path.join(targer,`./${dirs[i]}`),level)// 异步
//        //获取新的加载路径
//     }

//     //文件操作
//     for (var i = 0; i < files.length; i++) {
//     	if (i==files.length-1) {
//     	  console.log(`${prefix}└─${files[i]}`)
//     	}else{
//     	  console.log(`${prefix}├─${files[i]}`)
//     	}	
//     }

// });
}
// ├│└│


   var prefix = new Array(3).join("|  ")
  
  // console.log(prefix)