jQuery (function($){
            all();
        function all (){$.ajax({
              url: '../api/car.php',
              type: 'get',
              dataType:'json',
              success:function(data){
                // console.log(data);
                var toall=0;
                var sl=0;
                var str=$.map(data,function(item){
                  var qty1=item.qty-0;
                  var price1=item.price-0;
                  var all=qty1*price1;
                  toall+=all;
                  sl+=qty1;
                  return `<li date-id="${item.id}">
                            <img src="${item.imgurl}"/>
                            <span>￥<span>${item.price}</span></span>
                            <span>${item.qty}<i>件<i></span>
                            <span><i>￥</i>${all}</span>
                          </li> `
                }).join("");
                $("#output").html(str);
                $("#all").html(toall);
                $("#tb").html(sl);
                                
               }                
                                           

                                
                               
                                })
                              }




    var countDown = document.getElementsByClassName("countDown")[0];
        // var btnBuy = document.getElementById("btnBuy");
        //1.设置结束时间
        var endDate = new Date("2018/11/2 16:25:00");
        daojishi();
        //2.定时器开启，获取当前时间。
        this.timer = setInterval(daojishi,1000)
        function daojishi(){
          
            var nowDate= new Date();
            var offset = parseInt((endDate.getTime() - nowDate.getTime())/1000);
            //3.当毫秒差值为0，清除定时器，换图片，隐藏countDown
            if(offset <= 0){
                clearInterval(this.timer);
                // btn_buy.jpgbtnBuy.src = "../images/btn_buy.jpg";
                // countDown.style.display = "none";
            }
            //  * 结束时间-当前时间（毫秒数差值）
            //  * 在countDown：**天**时**分**秒
            var second = offset%60;
            var minute = parseInt(offset/60)%60;
            var hour = parseInt(offset/60/60)%24;
            var day = parseInt(offset/60/60/24);
            //补0
            second = second<10? "0"+second : second;
            minute = minute<10? "0"+minute : minute;
            hour = hour<10? "0"+hour : hour;
            day = day<10? "0"+day : day;

            var str =day+"天"+hour+"小时"+minute+"分钟"+second+"秒";
            countDown.innerHTML = str;
   }

/******************轮播图显示****************/

            let focus = document.querySelector(".focus");
            let ul = document.querySelector(".focus .u2");
            let cloneLi = ul.children[0].cloneNode(true);
            ul.appendChild(cloneLi);
            let len = ul.children.length;
            let firstImg = ul.children[0].children[0];
            let imgWidth;
            let idx = 0;
            let zjt=document.querySelector(".zjt");
            let yjt=document.querySelector(".yjt");
            // 1.等待图片加载完毕后，获取图片宽度。focus的宽度是一张图片的宽度，ul是所有图片总宽度（图片宽度*图片的数量）.
            // 2.复制索引为0的图片，放在最后面。记住在获取轮播图图片数量前复制。
            // 3.当索引为长度的时候，其实是索引为1。
            // 4.生成页码，小圆点，小圆点个数为len-1
            // 5.根据轮播图滚动，对应页码高亮
            // 6.鼠标移入停止轮播，鼠标移出重新开始
            // 7.点击页码小圆点，通过改变idx，切换图片及对应的小圆点
            firstImg.onload = function(){
                imgWidth = firstImg.offsetWidth;
                focus.style.width = imgWidth + 'px';
                ul.style.width = imgWidth * len + 'px';
            };
            let page = createPage();
            let timer = autoplay();
            focus.onmouseover = function(){
                clearInterval(timer);
            }
            focus.onmouseout = function(){
                timer = autoplay();
            }
            page.onclick = function(e){
                if(e.target.tagName.toLowerCase() != "span"){
                    return;
                }
                idx = e.target.innerHTML-1;
                showPic();
            }
            zjt.onclick=function(){
                    idx++;
                    if(idx>=len){
                        ul.style.left = 0;
                        idx = 1;
                    }
                    showPic();
               
            }
            
            yjt.onclick=function(){
                idx--;
                if(idx<1){
                     ul.style.left = 0;
                       idx=3;
                }
                showPic();
            }
            function createPage(){
                var page = document.createElement("div");
                page.classList.add("page");
                for(var i=1;i<=len-1;i++){
                    let span = document.createElement("span");
                    span.innerHTML = i;
                    page.appendChild(span);
                }
                page.children[0].classList.add("active");
                focus.appendChild(page);
                return page;
            }
            function autoplay(){
                var timer = setInterval(function(){
                    idx++;
                    // len为4
                    if(idx >= len-1){
                        ul.style.left = 0;
                        idx = 1;
                    }
                    showPic();
                },1000);
                return timer;
            }
            // 不管索引，只管显示。
            function showPic(){
                for(var i=0;i<len-1;i++){
                    page.children[i].classList.remove("active");
                }
                if(idx<len-1){
                    page.children[idx].classList.add("active");
                }else if(idx == len-1){
                    page.children[0].classList.add("active");
                }
                animate(ul,{left:-imgWidth*idx},10);
            }
    //购物车
    $(".mycart").on("mouseover",function(){
        $(".mycart .cart-bag").addClass("active");
        $(".mycart .cart-info").css("display","block");
    })
    $(".mycart").on("mouseout",function(){
        $(".mycart .cart-bag").removeClass("active");
        $(".mycart .cart-info").css("display","none");
    })
    // 切换抢购区渲染
     var list=document.getElementsByClassName("list")[0];
     $.ajax({
         url: '../api/sy.php',
         type: 'get',
         dataType: 'json',
         // data: {param1: 'value1'},
         success:function(data){
        // console.log(data);
         render(data);
        }
     })
    //****************************//
    function render(data){
    list.innerHTML=data.map(function(item){
     var {id,uname,price,dz,qg,imgurl}=item;
            return  `<li data-id="${id}">
                        <a href="html/goods.html">
                        <img src="${imgurl}" class="btn"/><br>
                        <b>${uname}</b>
                        <span>${price}</span>
                        <font>${dz}</font>
                        <strong>${qg}</strong>
                        </a>
                    </li>`
                }).join("");
}

// 传对应的id到详情页
  
       // list.onclick = function(e){
       //      if(e.target.className == "btn"){
       //          var currentId = e.target.parentElement.parentElement.dataset.id;
       //          console.log(e.target.parentElement)
       //          var xhr=new XMLHttpRequest();
       //          xhr.onreadystatechange = function(){
       //              var status = [200,304];
       //              if(xhr.readyState == 4 && status.indexOf(xhr.status) != -1){
       //            var re=JSON.parse(xhr.responseText);
       //          location.href="html/goods.html?currentId="+currentId;  
       //              }
       //          }
       //      }  
       //          xhr.open("get","../api/sychcan.php?"+currentId,true);
       //          xhr.send(null);
       //      }
    



})
