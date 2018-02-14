// ==============================< variables >============================================= //
var stacks = 0;
var guessesRemaining = 0;
var maxGuesses = 0;
var needleNbr = 0;
var wins = 0;
var losses = 0;
var stackImg = ('<img src="./assets/images/haystack.png" class="img-fluid stack">');
var needleImg = ('<img src="./assets/images/needle.png" class="img-fluid hidden" id="needle">');



// ==============================< functions >============================================= //
function newGame() {


	stacks = Math.floor(Math.random() * ((7 - 2) + 1) + 2);

	maxGuesses = (Math.floor(stacks / 2));

	guessesRemaining = maxGuesses;
	$("#guessesRemaining").text(guessesRemaining);

	$("#player-wins").text(wins);
	$("#player-losses").text(losses);

	needleNbr = Math.floor(Math.random() * ((stacks - 2) + 1) + 1);

	$(".jumbotron").append('<h1 class="display-4 text-center hidden" id="you-won-msg">You Won !</h1>');
	$(".jumbotron").append('<h1 class="display-4 text-center hidden" id="you-lost-msg">You Lose !</h1>');

	for (var i = 0; i < stacks; i++) {

		$("#haystacks").append(stackImg);
		var stackNbr = i + 1;

		if (stackNbr === needleNbr) {
			$("#haystacks").append(needleImg);
		}
	}

	$("img").each(function (index) {
		var imgId = $(this).attr("id");
		if (imgId !== "needle") {
			var idxOffset = index + 1;
			$(this).attr("id", idxOffset);
		}
	});
}

// ==============================< main process >========================================== // 


$(document).ready(function () {

	newGame();

	$('img').click(function () {

		var stackIdNbr = parseInt($(this).attr("id"));

		if (stackIdNbr === needleNbr) {

			$(this).fadeOut(function () {
				$(this).hide(1000);
				$("#needle").removeClass("hidden", function () {
					$("#needle").show();
				});
			});
			$("#game-title").fadeOut(function () {
				$("#game-title").hide(1000);
				$("#you-won-msg").removeClass("hidden");
			});
			wins++;
			$("#player-wins").text(wins);
		} else {
			$(this).hide(1000);
			guessesRemaining--;
			if (guessesRemaining === 0) {
				$("#game-title").fadeOut(function () {
					$("#game-title").hide(1000);
					$("#you-lost-msg").removeClass("hidden");
					losses++;
					$("#player-losses").text(losses);
				});
			}
		}

		$("#guessesRemaining").text(guessesRemaining);
		$("#player-wins").text(wins);
		$("#player-losses").text(losses);

	});
});
