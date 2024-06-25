// node 1920.js

var buildArray = function (nums) {
	return nums.map((num) => nums[num]);
};

console.log(buildArray([0, 2, 1, 5, 3, 4]));
