
<?php
  include 'connect.php';
  $sql = 'select * from sy';
  
  $result = $conn->query($sql);
  

  $arr = $result->fetch_all(MYSQLI_ASSOC);
  
  echo json_encode($arr,JSON_UNESCAPED_UNICODE);
  
  $result->close();
   
    $conn->close();
?>







