<?php
 include 'connect.php';
  $sql = 'select * from list';
  $result = $conn->query($sql);
  $arr = $result->fetch_all(MYSQLI_ASSOC);
 // var_dump($arr);打印查看结果
  echo json_encode($arr,JSON_UNESCAPED_UNICODE);
     $result->close();
     $conn->close();

?>