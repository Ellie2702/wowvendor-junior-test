<?php
    $db_host = 'localhost';
    $db_name = 'donutMaraphon';
    $db_user = 'mysql';
    $db_pass = 'mysql';
    
    $link = mysqli_connect($db_host, $db_user, $db_pass, $db_name) 
    or die('Произошла ошибка' . mysqli_error($link));
?>