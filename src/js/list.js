jQuery(function($){
$('#pageHeader').load('./top.html .topbar',function(){
               // var output=document.getElementById("output");               
                             $.ajax({
                              url: '../api/car.php',
                              type: 'get',
                              dataType:'json',
                              success:function(data){
                                // console.log(data);
                                var toall=0;
                                var js=0;
                                var str=$.map(data,function(item){
                                  var qty1=item.qty-0;
                                  var price1=item.price-0;
                                  var all=qty1*price1;
                                  toall+=all;
                                  js+=qty1;
                                  return `<li date-id="${item.id}">
                                            <img src="${item.imgurl}"/>
                                            <span>￥<span>${item.price}</span></span>
                                            <span>${item.qty}<i>件<i></span>
                                            <span><i>￥</i>${all}</span>
                                          </li> `
                                }).join("");
                                output.innerHTML=str;
                                $("#all").html(toall);
                               $("#tb").html(js);
                               
                               
                                           

                                
                               
                                }
                              })
  })
     // //list列表清单//
      var list=document.getElementsByClassName("list")[0];
     
       var page = document.querySelector(".page");
            var currentPage = 1;
            var qty =20;
            var status = [200,304];

            //1.将当前页及每页应该显示的数量，通过ajax传送给后端
            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function(){
                if(xhr.readyState ==4 && status.indexOf(xhr.status) != -1){
                    var res=JSON.parse(xhr.responseText);
                  list.innerHTML=res.data.map(function(item){
                 var {id,uname,price,imgurl,xl,time}=item;
                 return  `<li data-id="${id}">
                       <a>
                        <img src="${imgurl}" class="btn"/><br>
                        <b>${uname}</b>
                        <p>￥<span>${price}</span></p>
                        <h4>销量<span>${xl}</span></h4>
                        </a>
                    </li>`
                }).join("");
                 
                    var total = (res.len/res.qty);
                    page.innerHTML = "";
                    for(var i=1;i<=total;i++){
                        var span = document.createElement("span");
                        span.innerHTML = i;
                        if(i == res.currentPage){
                            span.classList.add("active");
                        }
                        page.appendChild(span);
                    }
                }
            }
            xhr.open("get","../api/page.php?currentPage="+currentPage+"&qty="+qty,true);
            xhr.send(null);
            //3.点击事件委托给page
            page.onclick = function(e){
                if(e.target.tagName.toLowerCase() == "span"){
                    currentPage = e.target.innerHTML;
                    xhr.open("get","../api/page.php?currentPage="+currentPage+"&qty="+qty,true);
                    xhr.send(null);

                }
            }

        
       list.onclick = function(e){
            if(e.target.className == "btn"){
                var currentId = e.target.parentElement.parentElement.dataset.id;
                console.log(e.target.parentElement)

                xhr.onreadystatechange = function(){
                    var status = [200,304];
                    if(xhr.readyState == 4 && status.indexOf(xhr.status) != -1){
                  var re=JSON.parse(xhr.responseText);
                location.href="goods.html?currentId="+currentId;  
                    }
                }
            }  
                xhr.open("get","../api/chcan1.php?"+currentId,true);
                xhr.send(null);
            }
    

    
//*************** 排序**************// 
       // var xhr=new XMLHttpRequest(); 
        var Yprice=document.getElementById("Yprice");
        var Yxl=document.getElementById("Yxl");
        var xl=true;
         var show = true;
        // 价格排序//
        Yprice.onclick=function(){
        this.classList.add("gl");
        if(show){
    xhr.onreadystatechange=function(){
    var status=[200,304];
    if(xhr.readyState==4&&status.indexOf(xhr.status)!=-1)
       {render1();}
}
    xhr.open("get","../api/paixu.php?show="+true,true);
    xhr.send(null);
}
     if(!show){
    xhr.onreadystatechange=function(){
    var status=[200,304];
    if(xhr.readyState==4&&status.indexOf(xhr.status)!=-1)
        {render1();}
    
}
    xhr.open("get","../api/paixu.php?show="+false,true);
    xhr.send(null);
    }
   show=!show;
    }   
  // 销量排序//
    Yxl.onclick=function(){
    this.classList.add("gl1");
        if(xl){
    xhr.onreadystatechange=function(){
    var status=[200,304];
    if(xhr.readyState==4&&status.indexOf(xhr.status)!=-1)
       {render1();}
}
    xhr.open("get","../api/paixu.php?xl=true",true);
    xhr.send(null);
}
     if(!xl){
    xhr.onreadystatechange=function(){
    var status=[200,304];
    if(xhr.readyState==4&&status.indexOf(xhr.status)!=-1)
        {render1();}
    
}
    xhr.open("get","../api/paixu.php?xl=false",true);
    xhr.send(null);
    }
  xl=!xl;
    }   
  function render1(){
     var res=JSON.parse(xhr.responseText);
     list.innerHTML=res.map(function(item){
     var {id,uname,price,imgurl,xl,time}=item;
            return  `<li data-id="${id}">
                       <a>
                        <img src="${imgurl}" class="btn"/><br>
                        <b>${uname}</b>
                        <p>￥<span>${price}</span></p>
                        <h4>销量<span>${xl}</span></h4>
                        </a>
                    </li>`
                }).join("");
}       


})