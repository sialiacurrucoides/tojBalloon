<?php 
require_once '../../../functions.php';
if(isset($_POST['email'],$_POST['password'])){
    $signedIn = loginUser($_POST['email'],$_POST['password']);
    if ($signedIn != false){
        session_start();
        $_SESSION['userID'] = $signedIn;
        echo '<script>window.location.href = "./balloon.php";</script>';
    } else {
        echo "<script>alert('A bejelentkezés nem sikerült.')</script>";
    }
} 
include 'balloonHeader.php';
?>

<body>
        <div id="bGameContainer" class="row justify-content-center align-items-center">
            <div id=#balloondiv>
                <div class="ballooncanvasStart" class="m-auto" style="width:300px; height:500px;">
                    <div class="row signInForm py-auto align-items-center">
                        <div class="col align-self-center">
                            <form method="POST" enctype="multipart/form-data">
                                <div class="form-group">
                                    <input type="email" class="form-control" id="username" placeholder="Email*" name="email" required>
                                </div>
                                <div class="form-group">
                                    <input type="password" class="form-control" id="passwordIn" placeholder="Password*" name="password" required>
                                </div>
                                <button type="submit" class="btn btn-success btn-block signInBtn">SIGN IN</button>
                                <a href="../../../register.php" class="btn btn-warning btn-block registerBtn">REGISTER</a>
                            </form>
                        </div>
                    </div>
                </div>
            </div>  
        </div>
</body>
</html>