<?php
    include 'connect.php';
    $currentId = isset($_GET['currentId']) ? $_GET['currentId'] : null; 
    
    $sql = "select * from sy where id='$currentId'";
    
    $result = $conn->query($sql);
    
    $data = $result->fetch_all(MYSQLI_ASSOC);
    
    echo json_encode($data,JSON_UNESCAPED_UNICODE);
    
    $result->close();
    
    $conn->close(); 
?>