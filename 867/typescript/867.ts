// tsc 867.ts
// node 867.js

function transpose(matrix: number[][]): number[][] {
	return matrix[0].map((_: number, colIndex: number) =>
		matrix.map((row: number[]) => row[colIndex])
	);
}

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
