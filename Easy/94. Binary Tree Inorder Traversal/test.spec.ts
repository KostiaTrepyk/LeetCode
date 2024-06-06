import { TreeNode, inorderTraversal } from ".";

describe("94. Binary Tree Inorder Traversal", () => {
	it("should return correct value", () => {
		const root: TreeNode = new TreeNode(
			1,
			null,
			new TreeNode(2, null, new TreeNode(3))
		);

		expect(inorderTraversal(root)).toEqual([1, 3, 2]);
	});
});
