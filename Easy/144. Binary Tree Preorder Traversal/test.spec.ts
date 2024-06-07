import { TreeNode, preorderTraversal } from ".";

describe("144. Binary Tree Preorder Traversal", () => {
	it("should return correct value", () => {
		const root: TreeNode = new TreeNode(
			1,
			null,
			new TreeNode(2, new TreeNode(3))
		);

		expect(preorderTraversal(root)).toEqual([1, 2, 3]);
	});

	it("should return empty array if root is null", () => {
		const root: TreeNode = null;
		expect(preorderTraversal(root)).toEqual([]);
	});
});
