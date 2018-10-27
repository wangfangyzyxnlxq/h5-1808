jQuery(function($){
         $('#pageHeader').load('./top.html ',function(){

       
           // ****************获取传参数**********************//
      // var photo =document.getElementsByClassName("pic")[0];
      var currentId= decodeURI(location.search).slice(1);
      // console.log(currentId)
      var jq=document.getElementById("jq");
      var xl=document.getElementById("xl");
      var _jq=jq.innerHTML;
       var total=document.getElementsByClassName("total")[0];
               var output=document.getElementById("output");               
                var jian=total.children[0];
                var qty=total.children[1];
                var jia=total.children[2];
                var uname=document.getElementsByClassName("uname")[0];
                var price=document.getElementsByClassName("price")[0];
                var photo=document.getElementsByClassName("photo")[0];
      var xhr=new XMLHttpRequest();
      var status=[200,304];
      var data;
      xhr.onreadystatechange=function(){
          if(xhr.readyState==4&&status.indexOf(xhr.status)!=-1){
            var data=JSON.parse(xhr.responseText);   
           jq.innerHTML=data[0].price;
           xl.innerHTML=data[0].xl;
         
            //这里得到的data是数组//
// ***************对应的商品名及其图片显示********************//
           // 通过jquery去添加图片属性   
           $(".imgdet .bigpic img").attr('src',data[0].imgurl);
           $(".imgdet .imglist img").attr('src',data[0].imgurl);
           $(".imgdet .imglist img").attr('src',data[0].imgurl);
           $(".imgdet .imglist img").attr('src',data[0].imgurl);
           $(".imgdet .imglist img").attr('src',data[0].imgurl);
           $(".imgdet .pic img").attr('src',data[0].imgurl);
   
 // 通过加减获取到数量将数量追加到数据库中或着将该商品所有信息插入数据库
           
                var sl=0;
                var str;
                var total=document.getElementsByClassName("total")[0];
                var jian=total.children[0];
                var qty=total.children[1];
                var jia=total.children[2];

                total.onclick=function(e){
                    if(e.target.className.toLowerCase()=="jia"){
                       sl=qty.innerHTML++;
                        if(sl>=10){
                         qty.innerHTML=10;
                        }
                    }
                    else if(e.target.className.toLowerCase()=="jian"){
                        sl=qty.innerHTML--;
                        if(sl<=1){
                         qty.innerHTML=1;
                        }
                        }
                       
                       // 打印查看数量
                    }
                     
                      var sl;
                    $(".add").on("click",()=>{
                        sl=qty.innerHTML;
                        sl = (sl-0);
                        // console.log(sl);

                      $.ajax({
                        url: '../api/goodlist.php',
                        type: 'get',
                        dataType:'json',
                        data:{sl:sl,price:data[0].price,id:data[0].id,uname:data[0].uname,img:data[0].imgurl},
                        success:function(data){
                            $.ajax({
                              url: '../api/car.php',
                              type: 'get',
                              dataType:'json',
                              success:function(data){
                                console.log(data);
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
                            }
                          })

                         
})

              
              




}
}


 

       xhr.open('get','../api/chcan1.php?'+currentId);
       xhr.send();  
      
       // xhr.open('get','../api/sychcan.php?'+currentId);
       // xhr.send();  

})
})

     




    

 

     
  

