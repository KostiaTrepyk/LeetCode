import { TreeNode, postorderTraversal } from ".";

describe("145. Binary Tree Postorder Traversals", () => {
	it("should return correct value", () => {
		const root: TreeNode = new TreeNode(
			1,
			null,
			new TreeNode(2, new TreeNode(3))
		);

		expect(postorderTraversal(root)).toEqual([3, 2, 1]);
	});

	it("should return empty array if root is null", () => {
		const root: TreeNode = null;
		expect(postorderTraversal(root)).toEqual([]);
	});
});
