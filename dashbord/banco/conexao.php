<?php
$servername = "db-cha.cvu6kkisk5bk.sa-east-1.rds.amazonaws.com";
$username = "masterdbch";
$password = "FGsYFZEcycTUMREmrscB";
$dbname = "db-cha";

$mysqli = new mysqli($servername, $username, $password, $dbname);
if ($mysqli->connect_error) {
    die("Connection failed: " . $mysqli->connect_error);
}
?>