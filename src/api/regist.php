<?php
    // 引入connect.php
    include 'connect.php';
    $conn->set_charset('utf8');
    /*
        接口功能：用户注册
            * 写入数据库
        所需参数：
            * username
            * password
     */
    
    $telePhone = isset($_POST['telePhone']) ? $_POST['telePhone'] : null; 
    $password = isset($_POST['password']) ? $_POST['password'] : null; 


    // 将用户名和密码插入数据库
    $sql = "insert into user (telePhone,password) values('$telePhone','$password')";
    // 执行sql语句
    $result = $conn->query($sql);
    
    if($result){
        echo "success";
    }
    else{
        echo "fail";
    }
    $conn -> close();
?>