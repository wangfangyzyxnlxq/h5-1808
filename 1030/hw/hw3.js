//创建一个文件夹 并且在下方创建多个文件  

//1.创建文件夹  检测文件夹是否存在
const  fs=require('fs')
function craeteDir(path,dirname,num){
   fs.stat(path+dirname,(err,stat)=>{
   	if (!err) { throw new Error('文件夹已存在') }
   	 fs.mkdir(path+dirname, (err)=>{
   	 	if (err) { throw err}
   	 		for (var i = 0; i <num; i++) {
   	 			fs.writeFileSync(`${path}${dirname}/${i}.txt`, i)
   	 		}  	 	
   	 });
   })
}

craeteDir('./','test',5)

//作业2 删除一个不为空的文件夹