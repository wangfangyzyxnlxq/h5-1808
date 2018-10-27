jQuery(function($){
        
    $('#pageHeader').load('./top.html ',function(){
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
    })

    $.ajax({
        type : "get",
        datatype : "json",
        // data : {admin :admin},
        url : "../api/car.php",
        success : function(data){
            if(data != "[]"){
                var Ydata = JSON.parse(data);
                console.log(Ydata)
               Ydata.forEach(function(item){
                var js=0;
                js+=qty1;
                var qty1=item.qty-0;
                                    // console.log(item);
        let xiaoji = (item.price-0)*(item.qty-0);
        let hhh = `<tr data-id="${item.uid}">
                    <td><input type="checkbox" name="check" checked></td>
                    <td><img src="${item.imgurl}"/></td>
                    <td>${item.uname}</td>
                    <td class="jiaGe">${item.price}</td>
                    <td id="goodsNumber"><div class="box"> 
                         <a href="javascript:;" id="lessBtn" class="hh">-</a> 
                         <input class="l" id="goodsNumberInput" type="text" value="${item.qty}" /> 
                         <a href="javascript:;" id="addBtn" class="">+</a> 
                        </div>
                    </td>
                    <td>￥<span class="XIAOJI">${xiaoji}</td>
                    <td><span class="tong">&times;</span></td>
                </tr>`;

           $("#gouwu tbody").prepend(hhh);
            $("#tb").html(js);

            
                
            // ==========功能========================================
                let shulian = 0;
                let li = $("#gouwu tbody tr");
                for(let i=0;i<li.length-2;i++){
                    let nnn = $(li[i]).find("#goodsNumberInput").val();
                    shulian += (nnn-0);
                    let nmm = $(li[i]).find("#goodsNumber .box #lessBtn").next().val();
                    if(nmm <= 1){
                        $(li[i]).find("#goodsNumber .box #lessBtn").addClass("limit");
                    }else{
                        $(li[i]).find("#goodsNumber .box #lessBtn").removeClass("limit");
                    }
                    //点击增减,并更新数据库
                    $(li[i]).find("#goodsNumber .box").unbind('click').bind("click",function(e){
                        let Num;
                        if(e.target.className == "hh"){
                            Num = $(e.target).next().val();
                            if(Num < 3){
                                $(e.target).addClass("limit");
                            }
                            Num--;
                            $(e.target).next().attr("value",""+Num+"");


                            let ID = $(e.target).closest("tr").attr("data-id");
                            // let admin = Cookie.getCookie('admin');
                            $.ajax({
                                type : "GET",
                                url : "../api/gengxincar.php",
                                data : {id:ID,qty:Num},
                                success :function(data){
                                    console.log(data);
                                      // all();
                                }
                            })
                        }
                        if(e.target.className == ""){
                            Num = $(e.target).prev().val();
                            if(Num >= 1){
                                $(li[i]).find("#goodsNumber .box #lessBtn").removeClass("limit");
                            }
                            Num++;
                            $(e.target).prev().attr("value",""+Num+"");

                            let ID = $(e.target).closest("tr").attr("data-id");
                            // let admin = Cookie.getCookie('admin');
                            $.ajax({
                                type : "GET",
                                url : "../api/gengxincar.php",
                                data : {id:ID,qty:Num},
                                success :function(data){
                                    console.log(data);
                                      // all();
                                }
                            })
                        }


 //Num为undefined时不要渲染
                            if(typeof(Num)=="number"){
                                $(li[i]).find(".XIAOJI").html("");
                                let oo = $(li[i]).find(".jiaGe").html();
                                let hhhhhhh = Num * (oo-0);
                                $(li[i]).find(".XIAOJI").html(hhhhhhh);
                            }
                            panduan2();
                        })
                        //内容改变时,更新数据库
                        $(li[i]).find("#goodsNumberInput").unbind('change').bind("change",function(){
                            let oo = $(this).closest("tr").find(".jiaGe").html();
                            let rr = $(this).val();
                            let or = (oo-0)*(rr-0);
                            if(rr>0){
                                $(this).closest("tr").find(".XIAOJI").html("");
                                $(this).closest("tr").find(".XIAOJI").html(or);
                            }
                            
                            panduan2();
                            let ID = $(this).closest("tr").attr("data-id");
                            // let admin = Cookie.getCookie('admin');
                            $.ajax({
                                type : "GET",
                                url : "../api/gengxincar.php",
                                data : {id:ID,qty:rr},
                                success :function(data){
                                    console.log(data);
                                }
                            })


                        })
                        //全选
                        var $yiInput = $(":checkbox").filter(".all");
                        var $waiInput = $(":checkbox").not(".all");
                        $yiInput.unbind('click').bind("click",function(){
                            let zoNg = 0;
                            let zShu = 0;
                            $yiInput.prop("checked",this.checked);
                            $waiInput.prop("checked",this.checked);
                            if(this.checked){
                                $waiInput.each(function(idx,item){
                                    var zonG = $(item).closest("tr").find(".XIAOJI").html();
                                    zoNg += (zonG-0);
                                    var zshU = $(item).closest("tr").find("#goodsNumberInput").val();
                                    zShu+= (zshU-0);

                                })
                            }
                            $(".bb span").html("");
                            $(".bb span").html(zoNg);
                            $(".bbbb span").html("");
                            $(".bbbb span").html(zoNg);
                            $(".cccc span").html("");
                            $(".cccc span").html(zShu);

                        })
                        //判断是否选中
                        function panduan(){
                            var len = $waiInput.length;
                            var checkedLen = $waiInput.filter(":checked").length;
                            if(len == checkedLen){
                                $yiInput.prop("checked",true);
                            }else{
                                $yiInput.prop("checked",false);

                            }
                        }
                        panduan2();
                        //渲染选中的商品的数量总价
                        function panduan2(){
                            let zoNg2 = 0;
                            let zShu2 = 0;
                            for(let i=0;i<$waiInput.filter(":checked").length;i++){
                                var jdong = $waiInput.filter(":checked")[i];
                                var zongG2 = $(jdong).closest("tr").find(".XIAOJI").html();
                                var zongS2 = $(jdong).closest("tr").find("#goodsNumberInput").val();
                                zoNg2 += (zongG2-0);
                                zShu2+= (zongS2-0);
                            }
                            $(".bb span").html("");
                            $(".bb span").html(zoNg2);
                            $(".bbbb span").html("");
                            $(".bbbb span").html(zoNg2);
                            $(".cccc span").html("");
                            $(".cccc span").html(zShu2);
                        }

                     //点击判断
                            $waiInput.unbind('click').bind("click",function(){
                                
                                panduan2();
                                panduan();
                            })
                            //删除
                            $(".datalist").unbind('click').bind("click",function(e){
                                
                                if(e.target.className == "tong"){
                                    let ID = $(e.target).closest("tr").attr("data-id");
                                    // let admin = Cookie.getCookie('admin');
                                    $.ajax({
                                        type : "GET",
                                        url : "../api/removecar.php",
                                        data : {id:ID},
                                        success :function(data){
                                            var res=confirm('您确定要删除该商品吗？');
                                            if(res){
                                            // $(this).parent().remove();
                                            location.href="./car.html";
                                              // all();
                                            // 
                                            }       
                                        }
                                    })

                                }
                                if(e.target.className == "sahnchu1"){
                                    // let admin = Cookie.getCookie('admin');
                                    $.ajax({
                                        type : "GET",
                                        url : "../api/removeall.php",
                                        success :function(data){
                                            var res=confirm('您确定要删除所有商品吗？');
                                            if(res){
                                            // $(this).parent().remove();
                                            location.href="./car.html";
                                              // all();
                                            // 
                                            }       
                                            
                                        }
                                    })
                                }
                            })
              
                        }
                        $("#cart_num_2").html(shulian);
                        $("#genxin").on("click",function(){
                            location.href="./jieshuanye.html";
                        })

                    })
}
                else{
                    $("#gouwu h2").css("display","block");
                    $("#gouwu h2").html("亲,去淘点宝贝吧~~~");
                }
                //一开始先判断一次判断
                var $yiInput = $(":checkbox").filter(".all");
                var $waiInput = $(":checkbox").not(".all");
                var len = $waiInput.length;
                var checkedLen = $waiInput.filter(":checked").length;
                if(len == checkedLen){
                    $yiInput.prop("checked",true);
                }else{
                    $yiInput.prop("checked",false);

                }

            }
 })
  // 括号
})

      











