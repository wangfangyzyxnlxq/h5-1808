jQuery(function($){
         $('#pageHeader').load('./top.html ',function(){
})
    var telePhone=document.getElementById("telePhone");
    var kcode=document.getElementById("kcode");
    var btncode=document.getElementById("btncode");
    // var _kcode=kcode.value;
    // var _setmima=setmima.value;
    var setmima=document.getElementById("setmima");
    var qrmima=document.getElementById("qrmima");
    var yz=document.getElementById("yz");
    var span=document.getElementById("pd");
    var yz1=document.getElementById("yz1");
  var arr=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","Q","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","q","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
    // ****************生成四位数的随机验证码**************************//
    YZM();
    btncode.onclick=function(){
      YZM();
    }

    
  function YZM(){
       var content='';
    for(var i=0;i<4;i++){
        content+=arr[Math.ceil(Math.random()*(36-0)+0)];
        btncode.value=content;
    } 
  }
  //***光标失去时发起ajax请求,用于判断是否存在同名用户******//
 telePhone.onblur=function(){
    _telePhone=telePhone.value;
    if(!/^\b1[3-8]\d{9}\b$/g.test(telePhone.value)){
      alert("您的手机号不符合条件");
      return;
    }
    var xhr=new XMLHttpRequest();
    xhr.onreadystatechange=function(){
    var status=[200,304];
    if(xhr.readyState==4  &&  status.indexOf(xhr.status)!=-1){
    if( xhr.responseText=="yes"){
    span.innerHTML="该号已被使用";
            }
    else if(xhr.responseText=="no"){
      span.innerHTML="";
            }
            }
        }
        xhr.open("get","../api/reg.php?telePhone="+_telePhone,true);
        xhr.send(null);
    }
    qrmima.onblur=function(){
      if(qrmima.value!=setmima.value){
        yz.innerHTML="密码不一致";
      }
      else if(qrmima.value==setmima.value){
        yz.innerHTML="";
      }
    }
    setmima.onblur=function(){
      if(!/^[a-z][\w\-]{4,14}$/i.test(setmima.value)){
      yz1.innerHTML="字母开头,6-16个字符";
      return;
    }
    else if(/^[a-z][\w\-]{4,14}$/i.test(setmima.value)){
        yz1.innerHTML="";
    }
  }
   btnRegist.onclick=function(e){
      _setmima=setmima.value;
      _qrmima=qrmima.value;
      _kcode=kcode.value;
    event.preventDefault();
   
    //***************正则匹配用户名及密码相关验证******//
    if(_setmima!==_qrmima)
      {yz.innerHTML="密码输入不一致，请重新输入";}
    else if(_setmima==_qrmima){
      yz.innerHTML="";
    }
     if(!/^[a-z][\w\-]{4,14}$/i.test(_setmima)){
      alert("您的密码不符合条件");
      return;
    }
    else if(!/^\b1[3-8]\d{9}\b$/g.test(telePhone.value)){
      alert("您的手机号不符合条件");
      return;
      }
   if(_kcode!=btncode.value){
    alert("验证码输入错误")
    return;
   }
//*********点击提交后发起ajax请求*****将用户名和密码传入php//
   var xhraa =new XMLHttpRequest();
   xhraa.onreadystatechange=function(){
   var status=[200,304];
  if(xhraa.readyState==4  &&  status.indexOf(xhraa.status)!=-1) 
    {alert("注册成功");}
    }
      xhraa.open("post","../api/regist.php",true);
      xhraa.setRequestHeader('content-type','application/x-www-form-urlencoded');
      xhraa.send('telePhone='+_telePhone+'&password='+_setmima);
}
//弹出一个加载提示获取短信码
$('#getcode').click(function(){
  $(this).next().addClass("fa fa-spinner fa-pulse");
  setTimeout(function(){
    $('#getcode').next().removeClass("fa fa-spinner fa-pulse");
    $('#phover').val('6666');
  },1500);
});
})