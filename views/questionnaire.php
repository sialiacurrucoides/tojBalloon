<?php 
    session_start();
    if (!isset($_SESSION["userID"])) header("Location: balloonStart.php");
    include 'balloonHeader.php';   
?>

<body>
        <div id="bGameContainer" class="row justify-content-center align-items-center">
            <div id=#balloondivStart class="balloonBackground2">
                <div id="backArrow" class="hidden" style="margin-bottom:0;">
                        <i class="fa fa-arrow-circle-left"></i>
                </div>
            <div class="row justify-content-center">
                <div class="col-sm-9 question text-center">
                    <p>1 / <span id="qNum">1</span> </p>
                    <h4 id="question">On a scale of 1 to 6, your brain got tired:</h4>
                    <p id="respMin">1 - Not at all</p>
                    <p id="respMax">6 - Very</p>
                </div>
            </div>
            <div class="row scale justify-content-around">
                <div class="col-1 qRespBtn s1">1</div>
                <div class="col-1 qRespBtn s2">2</div>
                <div class="col-1 qRespBtn s3">3</div>
                <div class="col-1 qRespBtn s4">4</div>
                <div class="col-1 qRespBtn s5">5</div>
                <div class="col-1 qRespBtn s5">6</div>
            </div>
            </div>  
        </div>
        <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
        <script src="../js/userInteractions.js" type="text/javascript"></script>
        <?php
            $session_value=(isset($_SESSION['userID']))?$_SESSION['userID']:'777'; 
            $measure_id = (isset($_SESSION['sessionID']))?$_SESSION['sessionID']:'888';
        ?>
        <script>
            var session_value = '<?php echo $session_value;?>';
            var measure_id = '<?php echo $measure_id; ?>';
        </script>
        <script src="../js/questionnaire.js" type="text/javascript"></script>
</body>
</html>


