window.onload = function() {
	let audio = new Audio();
	let correctAns = 3;
	let sample = document.getElementsByClassName('trySample')[0];
	let rightAns = document.getElementsByClassName('rightAns')[0];
	let wrongAns = document.getElementsByClassName('wrongAns')[0];
	let mycounter = document.getElementById('counter');

	evalChange = function(myans) {
		if (myans === correctAns) {
			rightAns.classList.remove('hidden2');
			wrongAns.classList.add('hidden2');
		} else {
			rightAns.classList.add('hidden2');
			wrongAns.classList.remove('hidden2');
		}
	};
	sample.addEventListener('click', function() {
		rightAns.classList.add('hidden2');
		wrongAns.classList.add('hidden2');
		correctAns = Math.round(Math.random());
		if (correctAns == 0) {
			audio.src = '../mtojsounds/soundLR_ISI150.wav';
		} else {
			audio.src = '../mtojsounds/soundRL_ISI150.wav';
		}
		audio.loop = false;
		audio.play();
	});
	document.addEventListener('keydown', function(event) {
		key_press = String.fromCharCode(event.keyCode);
		//alert(event.keyCode +" " +key_press); //37 <-, 39 ->
		if (event.keyCode == 37) {
			evalChange(0);
		} else if (event.keyCode == 39) {
			evalChange(1);
		}
	});
};
