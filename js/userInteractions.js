window.onload = function() {
	var page1elems = document.getElementsByClassName('page1');
	var page2elems = document.getElementsByClassName('page2');
	var page3elems = document.getElementsByClassName('page3');
	var backArrow = document.getElementById('backArrow');
	// var aboutUs = document.getElementById('aboutUs');
	var instructions1 = document.getElementById('instructions1');
	var signOut = document.getElementsByClassName('signOut');
	var instPage1 =
		'<p>Press <i class="fa fa-caret-left"></i> when you hear the sound propagating from left to right.</p>' +
		'<p>Press <i class="fa fa-caret-right"></i> when you hear the sound propagating from right to left.</p>';

	document.getElementsByClassName('instructions')[0].addEventListener('click', function(event) {
		//console.log('page1elems');
		var forwardInst = document.getElementById('forwardInst');
		var backInst = document.getElementById('backInst');
		var pageC = document.getElementById('pageC');
		var dir = document.getElementById('directions');
		dir.classList.remove('hidden2');

		forwardInst.addEventListener('click', function() {
			instructions1.innerHTML =
				'<p>One round is over after 8 errors.</p>' +
				'<p>You can start the game by clicking the balloon in the middle of the screen.</p><p class="text-center"><img src="../img/juli_jatek_lufi_GO.png"></p>';
			backInst.classList.remove('hidden2');
			forwardInst.classList.add('hidden2');
			pageC.innerHTML = ' 2';
		});
		backInst.addEventListener('click', function() {
			console.log('I was clicked!');
			instructions1.innerHTML = instPage1;
			forwardInst.classList.remove('hidden2');
			backInst.classList.add('hidden2');
			pageC.innerHTML = ' 1';
		});

		for (var i = 0; i < page1elems.length; i++) {
			page1elems[i].classList.add('hidden');
		}
		for (var j = 0; j < page2elems.length; j++) {
			page2elems[j].classList.remove('hidden');
		}
		backArrow.classList.remove('hidden');
	});

	document.getElementsByClassName('play')[0].addEventListener('click', function(event) {
		for (var i = 0; i < page1elems.length; i++) {
			page1elems[i].classList.add('hidden');
		}
	});

	backArrow.addEventListener('click', function(event) {
		for (var j = 0; j < page2elems.length; j++) {
			page2elems[j].classList.add('hidden');
		}
		for (var j = 0; j < page3elems.length; j++) {
			page3elems[j].classList.add('hidden');
		}
		for (var i = 0; i < page1elems.length; i++) {
			page1elems[i].classList.remove('hidden');
		}
		instructions1.innerHTML = instPage1;
		var dir = document.getElementById('directions');
		dir.classList.add('hidden2');
		backArrow.classList.add('hidden');
	});

	signOut[0].addEventListener('click', function() {
		console.log('I was clicked!');
		window.location.href = './balloonStart.php';
	});

	/*     aboutUs.addEventListener('click',function(){
        for (var i = 0; i <page1elems.length; i++){
            page1elems[i].classList.add("hidden");
        }
        for (var j = 0; j < page3elems.length; j++){
            page3elems[j].classList.remove("hidden");
        }
        backArrow.classList.remove("hidden");
    }); */
};
