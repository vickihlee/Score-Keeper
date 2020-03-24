// alert("connected!")

var p1Button = document.querySelector("#p1");
var p2Button = document.getElementById("p2");
var resetButton = document.getElementById("reset");
// var h1 = document.querySelector("h1");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var numInput = document.querySelector("input");
var winningScoreDisplay = document.querySelector("p span");
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;

// console.log(p1Display);

p1Button.addEventListener("click", function() {
	if (!gameOver) { // if not = 5
		p1Score++; // add 1 to score
		if (p1Score === winningScore) { // if score = 5
			gameOver = true; // true and game ends
			p1Display.classList.add("winner");
		}		
		p1Display.textContent = p1Score; // display new score
	}

});

p2Button.addEventListener("click", function() {
	if (!gameOver) {
		p2Score++;
		p2Display.textContent = p2Score;

		if (p2Score === winningScore) {
			gameOver = true;
			p2Display.classList.add("winner");
		}
		p2Display.textContent = p2Score;
	}
});

resetButton.addEventListener("click", function() {
	reset();
});

function reset() {
	p1Score = 0;
	p2Score = 0;
	p1Display.textContent = 0;
	p2Display.textContent = 0;
	gameOver = false;
	p1Display.classList.remove("winner");
	p2Display.classList.remove("winner");	
}

numInput.addEventListener("change", function() {
	winningScoreDisplay.textContent = this.value; // or numImput.value
	winningScore = Number(this.value); // or numInput.value
	reset();
})

