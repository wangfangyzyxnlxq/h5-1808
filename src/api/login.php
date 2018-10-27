<?php
    // 引入connect.php
    include 'connect.php';

    /*
        接口功能：用户注册
            * 写入数据库
        所需参数：
            * username
            * password
     */
    
    $telePhone = isset($_POST['telePhone']) ? $_POST['telePhone'] : null; 
    $password = isset($_POST['password']) ? $_POST['password'] : null; 


    // 查找数据库中是否存在同名用户
   $sql = "select * from user where telePhone='$telePhone'and password='$password'";
    $result = $conn->query($sql);
  if($result->num_rows != 0){
        echo "can";
    }
  else if($result->num_rows == 0){
    echo "no";
  }
  
    $result->close();
    $conn->close();
 
  