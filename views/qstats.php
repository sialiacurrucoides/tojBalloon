<?php 
require_once '../../functions.php';
if(isset($_POST)){
    //$_POST['userID'] = isset($_SESSION['userID'])?$_SESSION['userID']:0; 
    $upsertStat = upsertQStat($_POST);
} 
?>