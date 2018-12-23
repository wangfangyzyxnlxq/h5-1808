const path=require('path');
const fs=require('fs');


let target=path.join(__dirname,'../')
loaddir(target,1)

function loaddir(target,deep){
	let deepstring=new Array(deep).join("│ ")
	let all=[];
  try{
  	  all=fs.readdirSync(target);
  	}
  catch(err){
  	console.log(err);
  }
  let dirs=[]//保存目录
  let files=[]// 保存文件
  for (var i = 0; i < all.length; i++) {
  	let stat=fs.statSync(path.join(target,all[i]));
  	if (stat.isDirectory()) {
  		dirs.push(all[i])
  	}else{
  		files.push(all[i])
  	}
  } // console.log(dirs)
  // console.log(files)
 
  //文件夹的处理
  for (var i = 0; i < dirs.length; i++) {
  	 console.log(`${deepstring}├─${dirs[i]}`);
  	 //递归处理本身
  	 deep++
  	 loaddir(path.join(target,dirs[i]),deep)
  }
   //文件的处理
  for (var i = 0; i < files.length; i++) {
  	if (i==files.length-1) {
  		console.log(`${deepstring}└─${files[i]}`);
  	}else
  	 {
  	 	console.log(`${deepstring}├─${files[i]}`);
  	 }
  }
}

// ├└│─