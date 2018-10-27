<?php
    $admin = isset($_GET['admin'])? $_GET['admin'] :"";
    $id =  isset($_GET['id'])? $_GET['id'] :"";
    $qty =  isset($_GET['qty'])? $_GET['qty'] :"";
    $img =  isset($_GET['img'])? $_GET['img'] :"";
    $wenzi =  isset($_GET['wenzi'])? $_GET['wenzi'] :"";
    $subtit =  isset($_GET['subtit'])? $_GET['subtit'] :"";
    $price =  isset($_GET['price'])? $_GET['price'] :"";
    $linePrice =  isset($_GET['linePrice'])? $_GET['linePrice'] :"";
    $purchased =  isset($_GET['purchased'])? $_GET['purchased'] :"";
    $timer =  isset($_GET['timer'])? $_GET['timer'] :"";


    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = 'h5-1806';

    // 1.创建连接,生成了conn对象
    $conn = new mysqli($servername, $username, $password, $dbname);
    // 2.0 查询前设置编码，防止输出乱码
    $conn->set_charset('utf8');

    $hhh = "SELECT * FROM car WHERE id='".$id."' and admin='".$admin."'";
    $resu = $conn->query($hhh);
    $zhi = $resu->fetch_all(MYSQLI_ASSOC);
    $resu->close();  
    if($zhi){
        //若是有同样的商品，则qty+$qty
        foreach($zhi as  $item) {
               $qty+=$item["qty"];
            }  
        $xiugai = "update car set qty='".$qty."' where id=".$id;
        $ccc = $conn->query($xiugai); 
         if ($ccc) {
            echo true;
        } else {
            echo "Error: " . $xiugai . "<br>" . $conn->error;
        } 
    }else{
         //插入
        $sql = 'insert into car (admin,id,qty,img,wenzi,subtit,price,linePrice,purchased,timer)
        values ("'.$admin.'","'.$id.'","'.$qty.'","'.$img.'","'.$wenzi.'","'.$subtit.'","'.$price.'","'.$linePrice.'","'.$purchased.'","'.$timer.'")'; 
        $res = $conn->query($sql);

        if($res){
            echo true;
        }else{
            echo "Error: " . $sql . "<br>" . $conn->error;;
        }
    }
    $conn->close();

    
?>