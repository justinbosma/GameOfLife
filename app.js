var width = 20;
var height = 20;
var array = [[]];
var tempArray = [[]];
var cellSize = 20;
var currentColumn;
var statesArray = [[9, 9], [9, 8], [9, 7]];

make2DArray(array, width, height);
make2DArray(tempArray, width, height);
initialSetup(array, statesArray, currentColumn);
console.log(currentColumn);
setInterval(function(){ update(array, width, height, cellSize, currentColumn) }, 500);

//create 2d array for cells
function make2DArray(array, width, height) {
	for(var i = 0; i < width; i++) {
		array[i] = new Array(height);
		for(var j = 0; j < height; j++) {
			array[i][j] = 0;
		};

	};
};
//draw the cells and colors to the canvas
function draw() {
	var canvas = document.getElementById("myCanvas");
	var ctx = canvas.getContext("2d");
	ctx.beginPath();
	for(var i = 0; i < width; i++) {
		for(var j = 0; j < height; j++) {
			if(array[i][j] == 1) {
				
				if(i == currentColumn) {
					ctx.fillStyle = "#e5ff00"
				}
				else {
					ctx.fillStyle = "#b1ba62"
				}
				ctx.fillRect(i*cellSize, j*cellSize, cellSize, cellSize);
			}
			else {
				ctx.fillStyle = "#000000"
				ctx.fillRect(i*cellSize, j*cellSize, cellSize, cellSize);
			}
		}
	}
};

//rules for the game of life
function moveCells() {
	for(var i = 0; i < width; i++) {
		for(var j = 0; j < height; j++) {
			if(array[i][j] == 1 && getNeighbors(i, j) < 2) {
				tempArray[i][j] = 0;
			}
			else if(array[i][j] == 1 && getNeighbors(i, j) > 3) {
				tempArray[i][j] = 0;
			}
			else if(array[i][j] == 0 && getNeighbors(i, j) == 3) {
				tempArray[i][j] = 1;
			}
			else {
				tempArray[i][j] = array[i][j];
			};
		}
	}
	copyArray(array, tempArray);
};

function copyArray(copyArray, copiedArray) {
	for(var i = 0; i < width; i++) {
		for(var j = 0; j < height; j++) {
			copyArray[i][j] = copiedArray[i][j];
		}
	}
};

//checks if cell is inside board and alive
function isAlive(i, j) {
	return (array[i] && array[j] && array[i][j]);
};
//number of neighbors
//counts diagonals
function getNeighbors(i, j) {
	var neighbors = 0;
	if(isAlive(i - 1, j - 1)) { neighbors++};
	if(isAlive(i - 1, j )) { neighbors++};
	if(isAlive(i - 1, j + 1)) { neighbors++};
	if(isAlive(i, j + 1)) { neighbors++};
	if(isAlive(i + 1, j + 1)) { neighbors++};
	if(isAlive(i +1 , j)) { neighbors++};
	if(isAlive(i + 1, j - 1)) { neighbors++};
	if(isAlive(i , j - 1)) { neighbors++};

	return neighbors;
};
//make sounds
//live cells sound off
//x axis is freq (split by note in minor scale)
//y axis is amplitude
function makeSound() {
	for(var i = 0; i < height; i++) {
		if(array[currentColumn][i] == 1) {
			playSound(i);
		};
	}
};

//triggers the synth- uses the index to decide the freq
function playSound(index) {
	//playSinOSc at freqArray[index]
	//needs to turn off fairly quickly
};

function update() {
	draw(array, width, height, cellSize, currentColumn);
	if(currentColumn == width) {
		currentColumn = 0;
		moveCells();
	};
	//makeSound(array, currentColumn);
	console.log(currentColumn);
	currentColumn++;

};

function initialSetup() {
	var row = 0;
	var column = 0;
	currentColumn = 0;
	for (var i = 0; i < statesArray.length; i++) {
		row = statesArray[i][0];
		column = statesArray[i][1];
		array[row][column] = 1;
	}
};


//use setInterval to loop through the grid and play next column - each row is a note
//keep a counter that incerements each interval until == number of column, then start a new cell cycle
//need start and stop button
//on click for settning cell alive or dead.. -> is there a way to do it with the array setup, or does it need to be an object?