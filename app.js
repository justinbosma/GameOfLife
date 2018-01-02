var width = 100;
var height = 100;
var array = [[]];
var cellSize = 10;
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
}
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
}
//make sounds
//live cells sound off
//x axis is freq (split by note in minor scale)
//y axis is amplitude
function makeSound() {

};

function move(game) {

};

make2DArray(array, width, height);
draw(array, width, height, cellSize);
console.log(array.length);