<?php
	/*
		连接数据库
			* 配置参数
			* 创建连接（实例化）
		php操作数据库
			* 增
			* 删
			* 改
			* 查
	 */
	
	// 配置参数
	$servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = 'mysql2';



    // 创建连接（实例化）
    $conn = new mysqli($servername, $username, $password, $dbname);
    // 防止输出出现中文不出来或者乱码//
   $conn->set_charset('utf8');


     // 检测连接
    if ($conn->connect_error) {
    	// 输出信息并结束连接
        die("连接失败: " . $conn->connect_error);
    }


?>