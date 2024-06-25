// node 1672.js

var maximumWealth = function (accounts) {
	let maxWealth = 0;

	for (const customer of accounts) {
		let currentWealth = 0;

		currentWealth = customer.reduce((sum, balance) => sum + balance, 0);
		maxWealth = Math.max(maxWealth, currentWealth);
	}

	return maxWealth;
};

console.log(
	maximumWealth([
		[1, 2, 3],
		[3, 2, 1],
	])
);

console.log(
	maximumWealth([
		[1, 5],
		[7, 3],
		[3, 5],
	])
);
