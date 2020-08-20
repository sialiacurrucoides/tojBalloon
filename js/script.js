function sendStats(threshold, gameTime, numClicks, regTime) {
	let request = $.ajax({
		type: 'POST',
		url: '../views/stats.php',
		data: {
			currThreshold: threshold,
			gameDuration: gameTime,
			numClicks: numClicks,
			regTime: regTime
		}
	});
	request.done(function (msg) {
		console.log('Response: ' + msg);
	});
	request.fail(function (jqXHR, textStatus) {
		console.log('Request failed: ' + textStatus);
	});
}

// save the canvas offset in global variables

function playGame(balloon, minballoon) {
	//sound
	const sampleNameLR = 'soundLR_ISI';
	const sampleNameRL = 'soundRL_ISI';
	let audio = new Audio();
	//left and right buttons
	const btnH = 65;
	const btnW = 35;
	const btnColInit = 0.7; //initial transparency of the side buttons
	let sideA = 0;
	//balloon
	const blnW = 50;
	const minBalloonH = 20;
	//canvas
	const canvW = 300;
	const canvH = 500;
	const fontSz = 30;
	let mouseX, mouseY, r, key_press, i, playNextSound, correctAns, currentIsiInx, evalChange;
	//game logic parameters, ISI = distance between two sounds, that shortens after three correct responses
	const initIsi = 120;
	let currentIsi = initIsi;
	const initStep = 4;
	const minStep = 1; //corresponding to 5 ms
	let currentStep = initStep;
	let thresholds = [];
	let threshold = 0;
	let turnNr = 0;
	const maxTurnNr = 8;
	let corrInaRow = 1; //count how many correct responses happened in a row
	let myIsis = [];
	let clickNr = 0;
	let startTime = 0;
	let currSum = 0;
	let finished = 0;
	let msg_th = ''; //the variable that is going to contain the result -> the latest TOJ threshold

	for (i = 0; i < 41; i++) {
		myIsis.push(i * 5);
	}
	let maxIsiInx = myIsis.length - 1;
	function isMyElement(element) {
		return element == currentIsi;
	}
	currentIsiInx = myIsis.findIndex(isMyElement);

	//calculate the hight of the balloon based on the actual ISI between the sounds
	let balloonH = canvH / myIsis.length * currentIsiInx - blnW;

	//find context that will contain the elements
	let ctx = document.getElementById('ballooncanvas').getContext('2d');
	let BB = document.getElementById('ballooncanvas').getBoundingClientRect();
	let BBoffsetX = BB.left;
	let BBoffsetY = BB.top;

	//functions

	playSound = function (correct, whichSample) {
		correctAns = correct;
		audio.src = '../mtojsounds/' + whichSample + myIsis[currentIsiInx] + '.wav';
		audio.loop = false;
		audio.play();
	};
	//play the next sound sample as a function of the actual ISI step
	playNextSound = function () {
		r = Math.round(Math.random());
		if (r == 0) {
			playSound(1, sampleNameLR);
		} else if (r == 1) {
			playSound(2, sampleNameRL);
		}
	};
	//evaluate the last order judgment of the participant
	evalChange = function (myans) {
		++clickNr;
		if (startTime === 0) {
			var d = new Date();
			startTime = d.getTime();
		}
		//if it was the third correct response the ISI between the sounds (step) should decrease
		if (correctAns === myans) {
			if (corrInaRow < 3) {
				corrInaRow++;
			} else {
				if (currentStep > 1 && currentIsiInx > 0) {
					currentStep--;
				}
				currentIsiInx = currentIsiInx - currentStep;
				corrInaRow = 1;
			}
		} else {
			turnNr++; // turn == error
			thresholds.push(myIsis[currentIsiInx]);
			corrInaRow = 1;
			if (currentStep > minStep) {
				currentStep--;
			}
			if (currentIsiInx < maxIsiInx + currentStep) {
				currentIsiInx = currentIsiInx + currentStep;
			}
			//after 8 errors display results and send the data
			if (turnNr == maxTurnNr) {
				finished = 1;
				currSum = 0;
				//the last six error counts as the first two might be unrelated to the physiological threshold
				for (i = 2; i < thresholds.length; i++) {
					currSum += thresholds[i];
				}
				threshold = currSum / (thresholds.length - 2);
				var d = new Date();
				let cTime = d.getTime();
				//current time formatted
				let cTimeF =
					d.getDate() +
					'/' +
					d.getMonth() +
					'/' +
					d.getFullYear() +
					'/' +
					d.getHours() +
					':' +
					d.getMinutes() +
					':' +
					d.getSeconds();
				msg_th = msg_th + threshold.toFixed(2) + ' ms ';
				sendStats(threshold, cTime - startTime, clickNr, cTimeF);
				$('#feedbackMsg').text('Your threshold was: ' + msg_th);
				$('#feedBack').removeClass('hidden');
			}
		}
	};

	function drawElements() {
		ctx.clearRect(0, 0, canvW, canvH);
		ctx.fillStyle = 'rgba(0,0,0,' + btnColInit + ')';
		ctx.fillStyle = 'rgba(0,0,0,' + btnColInit + ')';
		ctx.fillRect(0, canvH - btnH, btnW, btnH);
		ctx.fillStyle = 'rgba(0,0,0,' + btnColInit + ')';
		ctx.fillRect(canvW - btnW, canvH - btnH, btnW, btnH);
		ctx.font = 'bold 30px Arial, sans-serif';
		ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
		ctx.strokeText('<', btnW / 2 - fontSz / 2 + 5, canvH - btnH / 2 + fontSz / 2);
		ctx.strokeText('>', canvW - btnW / 2 - fontSz / 2 + 5, canvH - btnH / 2 + fontSz / 2);
		//starter balloon
		if (clickNr == 0) {
			ctx.strokeStyle = 'rgba(50, 50, 50, 0.8)';
			ctx.strokeText('Click GO!', canvW / 2 - fontSz * 2, canvH / 2 - fontSz / 2);
			ctx.drawImage(balloon, canvW / 2 - blnW / 2, balloonH, blnW, blnW);
		}
		//mini balloons showing the remaining "lives"
		for (i = turnNr + 1; i <= 8; i++) {
			ctx.drawImage(minballoon, btnW + i * 23, canvH - btnH / 2, minBalloonH, minBalloonH);
		}
	}

	//animate the side button corresponding to user response
	function drawBtnFrame(whichBtn) {
		ctx.strokeStyle = 'rgba(0,0,0,' + 1 + ')';
		ctx.strokeWidth = 1;
		if (whichBtn == 1) {
			ctx.strokeRect(0, canvH - btnH, btnW, btnH);
		} else if (whichBtn == 2) {
			ctx.strokeRect(canvW - btnW, canvH - btnH, btnW, btnH);
		}
		function reFrame() {
			ctx.strokeStyle = 'rgba(0,0,0,' + btnColInit + ')';
			if (whichBtn == 1) {
				ctx.strokeRect(0, canvH - btnH, btnW, btnH);
			} else if (whichBtn == 2) {
				ctx.strokeRect(canvW - btnW, canvH - btnH, btnW, btnH);
			}
		}
		setTimeout(reFrame, 120);
	}
	//interpret the keypress of the user and play the next sample after a random delay
	function interpretUserResponse(userResponse) {
		sideA = userResponse;
		evalChange(userResponse);
		r = Math.random() * 300;
		if (finished === 0) {
			setTimeout(playNextSound, 600 + r);
		}
	}
	// the game starts by a click on the GO balloon
	ctx.canvas.addEventListener('click', function (event) {
		mouseX = event.clientX - BBoffsetX;
		mouseY = event.clientY - BBoffsetY;
		//after the first click the balloon loses its 'GO' label
		balloon.src = '../img/juli_jatek_lufi.png';
		//if the user clicked the balloon play the next sound sample
		if (
			mouseX < canvW / 2 + blnW / 2 &&
			mouseX > canvW / 2 - blnW / 2 &&
			mouseY > balloonH &&
			mouseY < balloonH + blnW
		) {
			finished = 0;
			// random selection of left-to-right or right-to-left sounds
			r = Math.round(Math.random());
			if (r < 1) {
				audio.src = '../mtojsounds/soundRL_ISI120.wav';
				correctAns = 2;
			} else {
				audio.src = '../mtojsounds/soundLR_ISI120.wav';
				correctAns = 1;
			}
			audio.loop = false;
			if (clickNr == 0) {
				audio.play();
			}
		}
	});

	document.addEventListener('keydown', function (event) {
		key_press = String.fromCharCode(event.keyCode);
		//alert(event.keyCode +" " +key_press); //37 <-, 39 ->
		if (finished == 0) {
			if (event.keyCode == 37) {
				interpretUserResponse(1);
			} else if (event.keyCode == 39) {
				interpretUserResponse(2);
			}
			balloonH = canvH / myIsis.length * currentIsiInx - blnW;
			drawElements();
			drawBtnFrame(sideA);
			drawElements();
			document.getElementById('ballooncanvas').style.background = "url('../img/juli_jatek_hatter.png')";
			ctx.drawImage(balloon, canvW / 2 - blnW / 2, balloonH, blnW, blnW);
		}
	});
	drawElements();
}

//graphical elements must be loaded before the game is invoked

window.onload = () => {
	let balloon = new Image();
	balloon.src = '../img/juli_jatek_lufi_GO.png';
	let minballoon = new Image();
	minballoon.src = '../img/juli_jatek_lufi.png';
	minballoon.onload = () => {
		playGame(balloon, minballoon);
	};
};
