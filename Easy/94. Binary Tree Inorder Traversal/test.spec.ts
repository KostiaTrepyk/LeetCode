import { TreeNode, inorderTraversal } from ".";

describe("94. Binary Tree Inorder Traversal", () => {
	it("should return correct value", () => {
		const root: TreeNode = new TreeNode(
			1,
			null,
			new TreeNode(2, new TreeNode(1))
		);

		expect(inorderTraversal(root)).toEqual([1, 3, 2]);
	});

	it("should return empty array if root is null", () => {
		const root: TreeNode = null;
		expect(inorderTraversal(root)).toEqual([]);
	});
});
