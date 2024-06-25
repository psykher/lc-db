// node 1929.js

var getConcatenation = function (nums) {
	return [...nums, ...nums];
};

console.log(getConcatenation([1, 2, 1]));
