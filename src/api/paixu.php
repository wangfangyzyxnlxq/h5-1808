<?php
        $show = isset($_GET['show']) ? $_GET['show'] : "";
        $xl= isset($_GET['xl']) ? $_GET['xl'] : "";
        include 'connect.php';
         // 查询前设置编码，防止输出乱码
        $conn->set_charset('utf8');
   
      
    if($show === "true"){
      $sql = 'select * from list order by price asc';
    }else if($show ==="false"){
      $sql = 'select * from list order by price desc';
      }
      if($xl === "true"){
      $sql = 'select * from list order by xl asc';
    }else if($xl ==="false"){
      $sql = 'select * from list order by xl desc';
      }
     $result = $conn->query($sql);
     $arr = $result->fetch_all(MYSQLI_ASSOC);
     echo json_encode($arr,JSON_UNESCAPED_UNICODE);
      $result->close();
     $conn->close();
  ?>