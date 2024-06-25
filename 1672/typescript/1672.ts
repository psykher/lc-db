// tsc 1672.ts
// node 1672.js

function maximumWealth(accounts: number[][]): number {
	let maxWealth: number = 0;

	for (const customer of accounts) {
		let currentWealth: number = 0;

		currentWealth = customer.reduce((sum, balance) => sum + balance, 0);
		maxWealth = Math.max(maxWealth, currentWealth);
	}

	return maxWealth;
}

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
