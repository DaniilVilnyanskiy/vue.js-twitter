<?php
$mysqli = new mysqli('localhost', 'root', '', 'twitter-bd');
$result = $mysqli->query('SELECT `avatar`, `date`, `body` FROM `tweets`');
//$rows = $result->fetch_array(MYSQLI_ASSOC);
while($rows = $result->fetch_array(MYSQLI_ASSOC)){
    $allRows[] = $rows;
}
    echo  json_encode($allRows);
//echo json_encode($rows);

//do {
//    printf('<li>
//                      <img src="%s" alt="Аватар">
//                      <span>%s</span>
//                      <div>%s</div>
//                   </li>',$rows['img'],$rows['date'], $rows['text']);
//}
//while($rows = $mysqli->fetch_array($result));


/*foreach ($rows as $item) {
    print_r($item);
}*/




/*if(!$result)
{
    print_r("error");
}
while($row = $result->fetch_assoc()) //
{
    print_r($row);// выводим данные
}*/