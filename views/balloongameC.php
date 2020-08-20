<?php 
    session_start();
    if (!isset($_SESSION["userID"])) {
        header("Location: ./balloonStart.php");
        $_SESSION["userID"] = time();
    };
    include 'balloonHeader.php';   
?>

<body>
        <div id="bGameContainer" class="row justify-content-center align-items-center">
            <div id=#balloondiv>
                <div id="feedBack" class="hidden">
                    <div class="row align-items-center justify-content-center">
                        <div class="col text-center bg-white p-3 fbBox">
                            <h5 id="feedbackMsg">Current threshold</h5>
                            <a class="btn btn-success btn-block m-auto" href="./questionnaire.php">Please answer a few, short questions</a>
<!--                             <div class="col-12 mb-2">
                                <a class="btn btn-success btn-block m-auto" href="./questionnaire.php">Please answer a few questions for us!</a>
                            </div>
                            <div class="col-12">
                                <a class="btn btn-danger btn-block m-auto" href="./balloongameC.php">I skip the questions and play again.</a>
                            </div> -->
                        </div>
                    </div>
                </div>
                <canvas id="ballooncanvas" width="300px" height="500px" class="m-auto">
                </canvas>
            </div>  

        </div>

        <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
        <?php
            $session_value=(isset($_SESSION['userID']))?$_SESSION['userID']:'888'; 
        ?>
        <script>
            var session_value = '<?php echo $session_value;?>'; 
        </script>
        <script src="../js/script.js"></script>
        <?php include 'signOut.php' ?>
        
</body>
</html>