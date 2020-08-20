<?php 
session_start();
$_SESSION['sessionID'] = $_SESSION['userID'] . date('s');

require_once '../../../functions.php';
if(isset($_POST)){
    $_POST["sessionID"] = $_SESSION['sessionID'];
    $_POST["userID"] = $_SESSION['userID'];
    $upsertStat = upsertStat($_POST);
} 
?>