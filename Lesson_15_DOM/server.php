<?php

//sleep(5);

$db = new mysqli('localhost','root','','jquery');
if ($mysqli->connect_error) {
    die('Ошибка подключения (' . $mysqli->connect_errno . ') '
            . $mysqli->connect_error);
}

if($_SERVER['REQUEST_METHOD'] == 'POST') {
	
	$data = $_POST;
	
	$sql = "INSERT INTO `messages` (`name`,`email`,`subject`,`message`) VALUES ('".$data['name']."','".$data['email']."','".$data['subject']."','".$data['text']."')";
	$db->query($sql);
	
	if($data['name'] == 'Ben') {
		$data['action'] = TRUE;
	}
	
	echo json_encode($data);
	//echo "<script>alert('text')</script>";
	///echo "alert('text')";
	exit();
}
else {
	echo json_encode($_GET);
	
	//echo "alert('text')";
	exit();
}


