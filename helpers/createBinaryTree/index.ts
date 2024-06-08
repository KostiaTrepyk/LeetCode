import { TreeNode } from "./types/TreeNode";

export function createBinaryTree(array: (number | null)[]): TreeNode | null {
	if (array.length === 0) return null;

	const result = new TreeNode(array.shift()!);

	const arrClone = [...array].reverse();
	const stackForTreeNodes: TreeNode[] = [result];

	while (stackForTreeNodes.length > 0 && arrClone.length > 0) {
		const node = stackForTreeNodes.pop();

		const num1 = arrClone.pop();
		const num2 = arrClone.pop();

		if(!node) throw new Error("Invalid TreeNode")

		if (num1 !== undefined && num1 !== null) {
			node.left = new TreeNode(num1);
			stackForTreeNodes.unshift(node.left);
		}

		if (num2 !== undefined && num2 !== null) {
			node.right = new TreeNode(num2);
			stackForTreeNodes.unshift(node.right);
		}
	}

	return result;
}
