<?php
    $admin = isset($_GET['admin'])? $_GET['admin'] :"";
    
   include 'connect.php';
    if($admin){
        $hhh = "SELECT * FROM car WHERE admin='".$admin."'";
        $resu = $conn->query($hhh);
        $zhi = $resu->fetch_all(MYSQLI_ASSOC);
        $resu->close();
        echo json_encode($zhi,JSON_UNESCAPED_UNICODE);
    }
    $conn->close();
    
?>