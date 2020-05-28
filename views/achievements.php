<?php 
    session_start();
    if (!isset($_SESSION["userID"])) header("Location: balloonStart.php");
    $userID = $_SESSION["userID"];
    require_once '../../functions.php';
    $longestRun = isset($_SESSION["userID"]) ? getLongestRun($userID): 'NaN';
    $bestThreshold = isset($_SESSION["userID"]) ? getSmallestThreshold($userID): 'NaN';
    $betterInarow = isset($_SESSION["userID"]) ? getBetterInaRow($userID): 'NaN';
    include 'balloonHeader.php';   
?>

<body>
    <div id="bGameContainer" class="row justify-content-center align-items-center">
        <div id=#balloondiv>
            <div class="ballooncanvasStart" class="m-auto" style="width:300px; height:500px;">
            <div class="row justify-content-center">
                <div class="col-sm-10 achievements achieveTitle">
                    <h3 class="text-center m-1">ACHIEVEMENTS</h3>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-sm-10 achieve text-center">
                    <i class="fa fa-clock-o achieveIcon"></i>
                    <p>Your longest run was <span><?php echo $longestRun; ?></span> clicks.</p>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-sm-10 achieve text-center">
                    <i class="fa fa-trophy achieveIcon"></i>
                    <p>Your smallest threshold was <span><?php echo $bestThreshold; ?></span> ms.</p>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-sm-10 achieve text-center">
                    <i class="fa fa-line-chart achieveIcon"></i>
                    <p>A better threshold than 45 ms <span><?php echo $betterInarow; ?></span> times.</p>
                </div>
            </div>  
            <div class="row justify-content-center">
                <div class="col-5 text-center ml-1 mb-3">
                    <a href="./balloongameC.php" class="btn btn-success btn-sm btn-block">PLAY AGAIN!</a>
                </div>
                <div class="col-5 text-center mr-1 mb-3">
                    <a href="./balloon.php" class="btn btn-danger btn-sm btn-block">MENU</a>
                </div>               
            </div>                      
            </div>
        </div> 
    </div>

</body>
</html>