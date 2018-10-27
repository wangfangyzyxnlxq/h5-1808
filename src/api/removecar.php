
<?php
    // $admin= isset($_GET['admin'])? $_GET['admin'] :"";
    $id= isset($_GET['id'])? $_GET['id'] :"";
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = 'mysql2';

    // 1.创建连接,生成了conn对象
    $conn = new mysqli($servername, $username, $password, $dbname);
    // 2.0 查询前设置编码，防止输出乱码
    $conn->set_charset('utf8');
     $remove =" delete from car where uid='".$id."' ";
    $_remove = $conn->query($remove);
    echo "true";       
    $conn->close();

   
?>