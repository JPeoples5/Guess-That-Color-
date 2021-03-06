var numSquares = 6;                                 //game begins on hard mode with 6 squares
var colors = generateRandomColors(numSquares);      // key for switching to easy to hard
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor(); 
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBTN = document.querySelector("#easyBTN");
var hardBTN = document.querySelector("#hardBTN");
colorDisplay.textContent = pickedColor;
var modeButtons = document.querySelectorAll(".mode");

for(var i = 0; i < modeButtons.length; i++){
	modeButtons[i].addEventListener("click", function(){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selcted");
		this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
		// if condition....?('then')....result.......:else this result
		/* ^ simplifying using the ternary operator
		if(this.textContent === "Easy"){
		numSquares = 3;
		} else{
		numSquares = 6;
			}
		reset();
		*/
	});
}

function reset(){
	colors = generateRandomColors(numSquares);
	// pick new rand color from arr
	pickedColor = pickColor();
	// change colors of squares on the page
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "NEW COLORS"
	messageDisplay.textContent = ""	
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = "steelblue";
	
}

//Easy Mode
easyBTN.addEventListener("click", function(){
    messageDisplay.textContent = ""
    hardBTN.classList.remove("selected");
	easyBTN.classList.add("selected");
	numSquares = 3;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.background = colors[i];
		} else{
			squares[i].style.display = "none";
		}		
	}
});

//Hard Mode
hardBTN.addEventListener("click", function(){
    messageDisplay.textContent = ""
	hardBTN.classList.add("selected");
	easyBTN.classList.remove("selected");
	numSquares = 6;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++){
		squares[i].style.background = colors[i];
		squares[i].style.display = "block";
	}
});

//Reset game with new colors 
resetButton.addEventListener("click", function(){
	//gen all new colors
	colors = generateRandomColors(numSquares);
	// pick new rand color from arr
	pickedColor = pickColor();
	// change colors of squares on the page
	colorDisplay.textContent = pickedColor;
	this.textContent = "NEW COLORS"
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = "steelblue";
	messageDisplay.textContent = ""
	
});

//Win case
for(var i = 0; i < squares.length; i++){
	squares[i].style.backgroundColor = colors[i];
        squares[i].addEventListener("click", function(){
        	//get color of clicked square
        	var clickedColor = this.style.backgroundColor;
            	// compare that color to pickedColor
            	if(clickedColor === pickedColor){
                	messageDisplay.textContent = "Correct!";
			resetButton.textContent = "Play Again";
                	changeColors(clickedColor);
			h1.style.backgroundColor = clickedColor;
              } else{
                	this.style.backgroundColor = "#232323";
                	messageDisplay.textContent = "Try again"
		}
	});
}

function changeColors(color){
        //loop through all colors 
        for(var i =0; i < squares.length; i++){
            squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
        var random = Math.floor(Math.random() * colors.length); // colors length is the array length plus one, so floor function works
        return colors[random];
}

//push in 'num' amount of colors into randomColor() into empty array
function generateRandomColors(num){
	var arr = [];
	for(var i = 0; i < num; i ++){
		arr.push(randomColor());
	}
	return arr;
}

//generates and displays random RGB values in the header
function randomColor(){
	//pick a rand  r g and b from 0-255
	let r = Math.floor(Math.random() * 256);
	let g = Math.floor(Math.random() * 256);	
	let b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}
