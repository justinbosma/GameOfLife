var width = 20;
var height = 20;
var array = [[]];
var cellSize = 20;
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
function draw(array, width, height, cellSize) {
	var canvas = document.getElementById("myCanvas");
	var ctx = canvas.getContext("2d");
	for(var i = 0; i < width; i++) {
		for(var j = 0; j < height; j++) {
			if(array[i][j] == 1) {
				ctx.beginPath();
				ctx.fillStyle = "#004DFF"
				ctx.fillRect(i*cellSize, j*cellSize, cellSize, cellSize);
			}
			else {
				ctx.beginPath();
				ctx.strokeStyle = "#FF0000"
				ctx.rect(i*cellSize, j*cellSize, cellSize, cellSize);
				ctx.stroke();	
			}
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
function makeSound(activeColumn) {
	for(int i = 0; i < numRows; i++) {
		if(array[activeColumn][i] == 1) {
			playSound(i);
		}
	}
};

//triggers the synth- uses the index to decide the freq
function playSound(index) {
	//playSinOSc at freqArray[index]
	//needs to turn off fairly quickly
};

function update() {
	if(gameCounter == numColumns) {
		gameCounter = 0;
		moveCells();
	}
	highLightCurrent(gameCounter);
	makeSound(activeColumn);

};

function highLightCurrent(currentColumn) {
	//brighten up current column
};
//rules for the game of life
function moveCells(game) {
	for(int i = 0; i < numColumns; i++) {
		for(int j = 0; j < numRows; j++) {
			if(array[i][j] == 1 && getNeighbors(i, j) < 2) {
				array[i][j] = 0;
			}
			else if(array[i][j] == 1 && getNeighbors(i, j) > 3) {
				array[i][j] = 0;
			}
			else if(array[i][j] == 0 && getNeighbors(i, j) == 3) {
				array[i][j] = 1;
			}
		};
	};
};



make2DArray(array, width, height);
draw(array, width, height, cellSize);
console.log(array.length);

//use setInterval to loop through the grid and play next column - each row is a note
//keep a counter that incerements each interval until == number of column, then start a new cell cycle
//need start and stop button
//on click for settning cell alive or dead.. -> is there a way to do it with the array setup, or does it need to be an object?