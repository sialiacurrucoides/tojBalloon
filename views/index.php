<?php 
    if (isset($_SESSION["userID"])){
        unset($_SESSION["userID"]);
    };
    $_SESSION = array(); //destroy all of the session variables
    if (ini_get("session.use_cookies")) {
        $params = session_get_cookie_params();
        setcookie(session_name(), '', time() - 42000,
            $params["path"], $params["domain"],
            $params["secure"], $params["httponly"]
        );
    }

    include 'balloonHeader.php';   
?>

<body>
        <div id="bGameContainer" class="row justify-content-center align-items-center">
            <div id=#balloondiv>
                <div class="ballooncanvasStart" class="m-auto" style="width:300px; height:500px;">
                    <div class="row justify-items-center" style="height:70%;">
                        <div class="col align-self-center">
                            <h2 class="text-center saveThe">SAVE</h2>
                            <h2 class="text-center saveThe">THE</h2>
                            <h1 class="text-center balloonLabel">BALLOON</h1>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col align-self-center text-center">
                            <div class="btn btn-success participate"><a href="./signIn.php">PARTICIPATE</a></div>
                        </div>
                    </div>
                </div>
            </div>  
        </div>
</body>
</html>