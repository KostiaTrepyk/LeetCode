export class TreeNode {
	val: number;
	left: TreeNode | null;
	right: TreeNode | null;
	constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
		this.val = val === undefined ? 0 : val;
		this.left = left === undefined ? null : left;
		this.right = right === undefined ? null : right;
	}
}

export function preorderTraversal(root: TreeNode | null): number[] {
	if (!root) return [];

	const left = preorderTraversal(root.left);
	const right = preorderTraversal(root.right);

	return [root.val, ...left, ...right];
}
