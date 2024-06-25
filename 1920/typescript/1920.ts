// tsc 1920.ts
// node 1920.js

function buildArray(nums: number[]): number[] {
	return nums.map((num: number) => nums[num]);
}

console.log(buildArray([0, 2, 1, 5, 3, 4]));
