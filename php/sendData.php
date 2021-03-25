<?php
    include('./config.php');

    $data = json_decode(file_get_contents('php://input'), true);

    $query = mysqli_prepare($link,'INSERT INTO `donutmaraphon`.`maraphon`
        (`ROCK_POSITION`, `JUMP_POSITION`, `ROCK_SIZE`, `IS_WIN`, `RUN_TIME`)
        VALUES (?, ?, ?, ?, ?);
    ');
    mysqli_stmt_bind_param($query, "iiiii", $data['rPos'], $data['jumpPos'], $data['rSize'], $data['isWin'], $data['time']);
    mysqli_stmt_execute($query) or die("Ошибка" . mysqli_error($link));
    mysqli_stmt_close($query);
    
    mysqli_close($link);
?>