const fs=require("fs")
function readdir(){
  return  new Promise((resolve,reject)=>{
     	fs.readdir("./", (err,data)=>{
     		if (err) { 
     		reject("失败1")
     		 //出现错误
     		}
     	     resolve('成功1')
     	});  
   })
}

function readdir2(){
  return  new Promise((resolve,reject)=>{
     	fs.readdir("./", (err,data)=>{
     		if (err) { 
     		reject('失败2')
     		 //出现错误
     		}
     	     resolve('成功2')
     	});  
   })
}
//resolve 成功处理   reject 失败的而处理

readdir()
.then((resolve)=>{
	console.log(11)
	console.log(resolve)
	//readdir 已经ok 可以执行readdir2
	return readdir2()
})
.then((resolve)=>{
	console.log(22)
	console.log(resolve)
})
.catch((err)=>{
	console.log(333)
	console.log(err)
})