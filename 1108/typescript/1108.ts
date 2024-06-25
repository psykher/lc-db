// tsc 1108.ts
// node 1108.js

function defangIPaddr(address: string): string {
	return address.split(".").join("[.]");
}

console.log(defangIPaddr("1.1.1.1"));
console.log(defangIPaddr("255.100.50.0"));
