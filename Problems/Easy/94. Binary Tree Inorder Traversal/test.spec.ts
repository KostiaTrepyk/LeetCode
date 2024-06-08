import { createBinaryTree } from "@helpers/createBinaryTree";
import { inorderTraversal } from ".";

describe("94. Binary Tree Inorder Traversal", () => {
	it("should return correct value", () => {
		const root1 = createBinaryTree([1, null, 2, 3]);
		const root2 = createBinaryTree([1, 2, 3, 4, 5]);

		expect(inorderTraversal(root1)).toEqual([1, 3, 2]);
		expect(inorderTraversal(root2)).toEqual([4, 2, 5, 1, 3]);
	});

	it("should return empty array if root is null", () => {
		const root = null;
		expect(inorderTraversal(root)).toEqual([]);
	});
});
