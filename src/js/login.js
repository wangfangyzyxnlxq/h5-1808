jQuery(function($){
         $('#pageHeader').load('./top.html ',function(){
})
    //*****点击登录按钮时发送请求判断是否是数据库中的值*********//
  var btn=document.getElementsByClassName("btn")[0];
  var telePhone=document.getElementById("telePhone");
  var password=document.getElementById("password");
  var pd1=document.getElementById("pd1");
  telePhone.onblur=function(){
    _telePhone=telePhone.value;
    if(!/^\b1[3-8]\d{9}\b$/g.test(telePhone.value)){
      pd1.innerHTML="请输入11位有效手机号";
      return;
    }
    else if(/^\b1[3-8]\d{9}\b$/g.test(telePhone.value)){
      pd1.innerHTML="";
    }
  }
  btn.onclick=function(){
  var _telePhone=telePhone.value;
  var _password=password.value;

  // event.preventDefault();
    var xhrbb =new XMLHttpRequest();
        xhrbb.onreadystatechange=function(){
        var status=[200,304];
        if(xhrbb.readyState==4  &&  status.indexOf(xhrbb.status)!=-1){
        if(xhrbb.responseText=="can"){

          // console.log(666);
    //************登陆成功后跳转到其他页面*****//
       location.href="../index.html";
              }
              else if(xhrbb.responseText=="no")
               {  alert("电话号码或者密码输入错误");
               }
              }
            }
  
    xhrbb.open("post","../api/login.php",true);
    xhrbb.setRequestHeader('content-type','application/x-www-form-urlencoded');
    xhrbb.send('telePhone='+_telePhone+'&password='+_password);
  
  }     
             
})