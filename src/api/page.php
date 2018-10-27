<?php
  $currentPage = isset($_GET["currentPage"])? $_GET["currentPage"]:1;
    $qty = isset($_GET["qty"])? $_GET["qty"]:20;
  include 'connect.php';
  $sql = 'select * from list';
  $result = $conn->query($sql);
  $arr = $result->fetch_all(MYSQLI_ASSOC);
   $result->close();
     $conn->close();
  $len = count($arr);
 $dataArr = array_slice($arr,($currentPage-1)*$qty,$qty);
 $resArr = array(
        "data" => $dataArr,
        "len" => $len,
        "currentPage" => $currentPage,
        "qty" => $qty
        );

    echo json_encode($resArr,JSON_UNESCAPED_UNICODE);


 // var_dump($arr);打印查看结果
 




?>