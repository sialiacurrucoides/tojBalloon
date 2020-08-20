<?php 
    session_start();
    if (!isset($_SESSION["userID"])) {header("Location: ./balloonStart.php");};
    include 'balloonHeader.php';   
?>

<body>
        <div id="bGameContainer" class="row justify-content-center align-items-center">
            <div class="row align-items-center justify-content-center">
                <div id=balloondivStart class="balloonBackground2">
                    <div class="col-10 m-auto p-3 text-center">
                        <h5 class="mt-5">Left-to-right (<i class="fa fa-caret-left"></i>) OR right-to-left (<i class="fa fa-caret-right"></i>)?</h5>
                    </div>
                    <div class="col-10 m-auto text-center" id="feedbackSigns">
                        <div class="trySample bg-light p-3 m-auto text-center">PLAY TEST TRIAL</div>
                        <div class="row justify-content-center">
                            <div class="col-5 rightAns bg-success hidden2 text-center mt-2"><div><i class="fa fa-check"></i></div></div>
                            <div class="col-5 wrongAns bg-danger hidden2 text-center mt-2"><div><i class="fa fa-close"></i></div></div>
                        </div>
                    </div>
                    <div class="col-10 m-auto text-center">
                        <div><a class="btn btn-success btn-block" href="./balloongameC.php"><strong>START THE GAME</strong></a></div>
                    </div>
                </div>
            </div>
        </div>
        <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
        <script src="../js/practice.js"></script>
        <?php include 'signOut.php' ?>

</body>
</html>