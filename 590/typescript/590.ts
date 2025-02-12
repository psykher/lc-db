// tsc 590.ts
// node 590.js

class TreeNode {
	val: number;
	children: TreeNode[] | null;
	
	constructor(val?: number, children?: TreeNode[] | null) {
		this.val = val === undefined ? 0 : val;
		this.children = children === undefined ? null : children;
	}
}

var postorder = (root: TreeNode | null): number[] => {
	var result: number[] = [];
  
	if (!root) {
		return [];
	}
  
	for (var child of root.children) {
		result.push(...postorder(child));
	}
  
	result.push(root.val);
  
	return result;
};

// root = [1,null,3,2,4,null,5,6]
const root1: TreeNode = {
	val: 1,
	children: [
		{ val: 3, children: [{ val: 5, children: [] }, { val: 6, children: [] }] },
		{ val: 2, children: [] },
		{ val: 4, children: [] },
	],
};
console.log(postorder(root1));
// Output: [5,6,3,2,4,1]

// root = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]
const root2: TreeNode = {
	val: 1,
	children: [
		{ val: 2, children: [] },
		{ val: 3, children: [{ val: 6, children: [] }, { val: 7, children: [{ val: 11, children: [{ val: 14, children: [] }] }] }] },
		{ val: 4, children: [{ val: 8, children: [{ val: 12, children: [] }] }] },
		{ val: 5, children: [{ val: 9, children: [{ val: 13, children: [] }] }, { val: 10, children: [] }] },
	],
};
console.log(postorder(root2));
// Output: [2,6,14,11,7,3,12,8,4,13,9,10,5,1]