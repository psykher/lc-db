// node 867.js

var transpose = function (matrix) {
	return matrix[0].map((_, colIndex) => matrix.map((row) => row[colIndex]));
};

console.log(
	transpose([
		[1, 2, 3],
		[4, 5, 6],
		[7, 8, 9],
	])
);
console.log(
	transpose([
		[1, 2, 3],
		[4, 5, 6],
	])
);
