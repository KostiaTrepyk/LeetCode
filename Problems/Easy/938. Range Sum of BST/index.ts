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

export function rangeSumBST(
	root: TreeNode | null,
	low: number,
	high: number
): number {
	if (!root) return 0;

	let current: number = 0;

	if (root.val >= low && root.val <= high) {
		current = root.val;
	}

	const left = rangeSumBST(root.left, low, high);
	const right = rangeSumBST(root.right, low, high);

	return [current, left, right].reduce((acc, num) => acc + num, 0);
}
