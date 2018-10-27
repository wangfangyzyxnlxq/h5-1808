<?php
    $goodid=isset($_GET['id']) ? $_GET['id'] : '';
    $sl=isset($_GET['sl']) ? $_GET['sl'] : '';
    $price=isset($_GET['price']) ? $_GET['price'] : '';
    $uname=isset($_GET['uname']) ? $_GET['uname'] : '';
    $img=isset($_GET['img']) ? $_GET['img'] : '';
    
    include 'connect.php';
  
        $sqls="select * from car where uid='".$goodid."' and uname='".$uname."'";//判断是否已存在该商品，若存在则修改数量，不存在，则插入
        $res=$conn->query($sqls);
        $zhi = $res->fetch_all(MYSQLI_ASSOC);

        // 查询语句变量也要扩起来，最外面是双引号，扩起来是字符串
         // echo json_encode($zhi,JSON_UNESCAPED_UNICODE);
       
            if($zhi){
                foreach($zhi as  $item) {
                   $sl+=$item["qty"];
                } 
                $sqlu="update car set qty='".$sl."' where uid=".$goodid." and uname='".$uname."'";
                $conn->query($sqlu);
                echo '1';
            }else{
                $sqli="insert into car (uid,uname,price,qty,imgurl) values('$goodid','$uname','$price','$sl','$img')";
            $conn->query($sqli);
            echo '1';
            }   
    //关闭连接数据库
    $conn->close();

    
?>