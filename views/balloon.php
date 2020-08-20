<?php 
    session_start();
    if (!isset($_SESSION["userID"])) header("Location: index.php");
    include 'balloonHeader.php';   
?>

<body>
        <div id="bGameContainer" class="row justify-content-center align-items-center">
            <div id=#balloondivStart class="balloonBackground2 px-3">
                <div id="backArrow" class="hidden">
                       <p> <i class="fa fa-arrow-circle-left"></i> <strong>Menu</strong></p> 
                </div>
                <a href="calibration.php" style="text-decoration: none;"><div class="play page1"><p>PLAY</p></div></a>
                <div class="instructions page1"><p>INSTRUCTIONS</p></div>
                <div class="page1 achievements"><a href="achievements.php"><p>ACHIEVEMENTS</p></a> </div>
                <div class="aboutUs page1"><a href="about.php"><p>ABOUT US</p></a></div>
                <div class="signOut page1"><p>SIGN OUT</p></div>
                <div class="myLogo"></div>
                <section id="instPage">
                    <div class="instructionsTitle page2 hidden"><p>INSTRUCTIONS</p></div>
                    <div class="instructionsContent page2 hidden" id="instructions1">
                        <p >Press <i class="fa fa-caret-left"></i> when you hear the sound propagating from left to right.</p>
                        <p >Press <i class="fa fa-caret-right"></i> when you hear the sound propagating from right to left.</p>
                    </div>
                    <div class="hidden2 text-center" id="directions">
                    <p class="pt-3"><i class="fa fa-arrow-circle-left myBackBtn hidden2" id="backInst"></i><strong>1 /<span id="pageC"> 1</span></strong><i class="fa fa-arrow-circle-right myForwardBtn" id="forwardInst"></i></p>
                    </div>
                </section>
                <div class="aboutTitle page3 hidden"><p style="font-size: 20px;">ABOUT US</p></div>
                <div class="instructionsContent page3 hidden" style="font-size: 20px;">
                    <p>We are a group of curious cognitive scientists who are interested in the gamification of science.</p>
                    <p>If you are interested in our work, visit <a href="independentlab.eu">independentlab.eu</a> .</p>
                </div>

            </div>  
        </div>
        <script src="../js/userInteractions.js" type="text/javascript"></script>
</body>
</html>
