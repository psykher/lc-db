// tsc 2160.ts
// node 2160.js

function minimumSum(num: number): number {
	const digits: string[] = String(num).split("").sort();
	
	return Number(digits[0] + digits[3]) + Number(digits[1] + digits[2]);
}

console.log(minimumSum(2932));
console.log(minimumSum(4009));
