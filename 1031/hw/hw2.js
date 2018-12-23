// 打印当前目录树

const fs = require('fs');
const path = require('path');

var target = path.join(__dirname, '../');
//获取目标文件或者文件夹的绝对路径 
// __dirname  当前文件的绝对路径，   目标文件的相对路径
// console.log(__dirname);
// console.log(target);

// level  深层遍历的层级  目录的层级
function loaddir(target, level) {
   let  array=[];
   for (var i = 0; i <level; i++) {
     array.push('');
   }
   var prefix = array.join('│  ');
  // console.log(prefix)
  try{
  var dirinfo = fs.readdirSync(target);
  }
  catch(err){
     console.log(err)
  }
  // 检测try 代码的执行错误  如果出错执行catch
  // console.log(dirinfo)
   var dirs = [];
  
   var files = [];
   // 遍历区分文件或者文件夹
  dirinfo.forEach(info=> {
    var stat = fs.statSync(path.join(target, info));
    if (stat.isDirectory()) {
      dirs.push(info);
    } else {
      files.push(info);
    }
  });

  var next = level + 1;
  dirs.forEach(dir=> {
     console.log(`${prefix}├─ ${dir}`);
    loaddir(path.join(target, dir), next);
  });
  // 文件的处理
  var count = files.length - 1;
  files.forEach(file=> {
    if (count--) {
       console.log(`${prefix}├─${file}`);
    } else {
       console.log(`${prefix}└─ ${file}`);
    }
  });
}

loaddir(target, 1);

// 1. 读取要打印的目录（file，dir）
