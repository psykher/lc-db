// node 2703.js

function argumentsLength(...args) {
	return args.length;
}

console.log(argumentsLength([5]));
console.log(argumentsLength([{}, null, "3"]));
