var width = 100;
var height = 100;
var array = [[]];
var cellSize = 5;
//create 2d array for cells
function make2DArray(array, width, height) {
	for(int i = 0; i < width; i++) {
		array[i] = new Array(height);
		for(int j = 0; j < height; j++) {
			array[i][j] = 0;
		};

	};
};
//draw the cells and colors to the canvas
function draw() {

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