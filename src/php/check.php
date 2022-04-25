<?php

$inputJSON = json_decode(file_get_contents("php://input"), TRUE);

$id = $inputJSON['id'];
$avatar = $inputJSON['avatar'];
$body = $inputJSON['body'];
$date = $inputJSON['date'];


$mysql = new mysqli('localhost', 'root', '', 'twitter-bd');
$mysql->query("INSERT INTO `tweets` (`idTweet`,`date`, `text`, `img`)
VALUES('$id','$date', '$body', '$avatar')");

$mysql->close();

header('Location: /');

