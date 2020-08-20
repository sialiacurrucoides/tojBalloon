window.onload = function () {
	let questions_eng = [
		'On a scale of 1 to 6, your brain got tired:',
		'On a scale of 1 to 6, the background was noisy:',
		'On a scale of 1 to 6, how difficult/effortful the task was:',
		'On a scale of 1 to 6, you got bored:'
	];
	let qNum = 1;
	let qResponses = [];
	let respBtns = $('.qRespBtn');
	let qCounter = $('#qNum');
	let question = $('#question');
	let field = $('#bGameContainer');
	let respMin = $('#respMin');
	let respMAx = $('#respMax');

	function sendQdata(responses) {
		let d = new Date();
		let request = $.ajax({
			type: 'POST',
			url: '../views/qstats.php',
			data: {
				userID: session_value,
				sessionID: measure_id,
				tired: responses[0],
				noise: responses[1],
				effort: responses[2],
				boredom: responses[3],
				regTime:
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
					d.getSeconds()
			}
		});
		request.done(function (msg) {
			console.log('Response: ' + msg);
		});
		request.fail(function (jqXHR, textStatus) {
			console.log('Request failed: ' + textStatus);
		});
	}

	respBtns.each(function () {
		$(this).on().click(function () {
			if (qNum <= questions_eng.length) {
				qResponses[qNum - 1] = $(this).text();
				qCounter.text(qNum + 1);
				question.text(questions_eng[qNum]);
				if (qNum === 2) {
					respMin.text('1 - Not at all');
					respMAx.text('6 - Very much');
				} else {
					respMin.text('1 - Not at all');
					respMAx.text('6 - Very');
				}
				qNum += 1;
				console.log(qResponses);
				if (qNum > questions_eng.length) {
					sendQdata(qResponses);
					field.html(
						'<div id=#balloondivStart class="balloonBackground2"><div class="row m-auto p-3 align-items-center thanksForQs"><div class="col-11 m-auto text-center"><h4 class="text-center">Thank you for the answers!</h4><br><a href="achievements.php" class="btn btn-primary">Go to Achievements!</a><br><br><a href="balloongameC.php" class="btn btn-success">Play again!!</a></div><div></div></div></div>'
					);
				}
			}
		});
	});
};
