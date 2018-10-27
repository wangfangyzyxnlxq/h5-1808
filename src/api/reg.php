<?php
   include 'connect.php';
     $telePhone = isset($_GET['telePhone']) ? $_GET['telePhone'] : ""; 
    // $password = isset($_GET['password']) ? $_GET['password'] : null;
    
    // *注意:where  username='$username'****这里的单引号无论什么情况下都不能省略//  
   $sql = "select * from user where telePhone='$telePhone'";

    // 执行sql语句
    $result = $conn->query($sql);
    if($result->num_rows==0){
        echo "no";
    }
    else{
        echo "yes";
    }
$result->close();
 $conn->close();


?>