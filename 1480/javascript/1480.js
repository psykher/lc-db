// node 1480.js

var runningSum = function (nums) {
	const result = [];

	for (let i = 0, sum = 0; i < nums.length; i++) {
		sum += nums[i];
		result.push(sum);
	}

	return result;
};

console.log(runningSum([1, 2, 3, 4]));
