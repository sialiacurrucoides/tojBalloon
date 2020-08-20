<div class="signOut"
style="padding: 6px;
	color: #ddd;
	position: fixed;
	top: 0;
	right: 0;
	background: #aaa;"
><i class="fa fa-sign-out" style="font-size:36px"></i></div>   

<script>
    var signOut = document.getElementsByClassName('signOut');
    signOut[0].addEventListener('click', function () {
        console.log('I was clicked!');
        window.location.href = './';
    });
</script>