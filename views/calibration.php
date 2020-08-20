<?php 
    include 'balloonHeader.php';   
?>

<body>
        <div id="bGameContainer" class="row justify-content-center align-items-center">
            <div id=#balloondivStart class="balloonBackground2">
                <div id="backArrow" class="hidden" style="margin-bottom:0;">
                        <i class="fa fa-arrow-circle-left"></i>
                </div>
                <div class="row justify-content-center">
                    <div class="col-10 calibTitle">
                        Before you start
                    </div>
                </div> 
                <div class="row justify-content-center">   
                    <div class="col-10 calibInst">
                        <p>You have to calibrate the sound level to get more reliable measures.</p>
                        <p>Rub your palms together quickly and firmly and set the 
                        loudness level of your headphone to a level so the sample sound
                        matches the loudness of the sound of your hands.</p>
                        <div class="row justify-content-around">
                            <div class="col-3" id="calib" style="cursor:pointer;"><img src="../img/rub-hands.jpg" alt="palms sound to calibrate" style="height:40px;"></div>
                            <div class="col-9">
                                <p>Click to the hands for to the reference sound!</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-6 m-auto">
                        <a href="./practice.php" class="btn btn-danger btn-block">READY</a>
                    </div>
                </div>
            </div>  
        </div>
        <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
        <script>
            window.onload = function(){
                var calib = $('#calib');
                var aud = new Audio;
                calib.click(function(){
                aud.src = "./rubbing_hands_sample.wav";
                aud.loop = false;
                aud.play();
            });
            }
        </script>
        <?php include 'signOut.php' ?>
        
</body>
</html>
