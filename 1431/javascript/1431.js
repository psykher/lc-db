// node 1431.js

var kidsWithCandies = function (candies, extraCandies) {
	const maxCandy = Math.max(...candies);
	return candies.map((candy) => candy + extraCandies >= maxCandy);
};

console.log(kidsWithCandies([2, 3, 5, 1, 3], 3));
console.log(kidsWithCandies([4, 2, 1, 1, 2], 1));
console.log(kidsWithCandies([12, 1, 12], 10));
