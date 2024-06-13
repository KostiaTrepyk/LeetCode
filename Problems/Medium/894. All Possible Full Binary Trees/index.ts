class TreeNode {
	val: number;
	left: TreeNode | null;
	right: TreeNode | null;
	constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
		this.val = val === undefined ? 0 : val;
		this.left = left === undefined ? null : left;
		this.right = right === undefined ? null : right;
	}
}

export function allPossibleFBT(n: number): Array<TreeNode | null> {
	if (n % 2 === 0) return [];
	if (n === 1) return [new TreeNode()];

	const result: TreeNode[] = [];

	for (let i = 1; i < n; i += 2) {
		const left = allPossibleFBT(i);
		const right = allPossibleFBT(n - i - 1);

		for (const l of left) {
			for (const r of right) {
				const root = new TreeNode(0, l, r);
				result.push(root);
			}
		}
	}

	return result;
}
