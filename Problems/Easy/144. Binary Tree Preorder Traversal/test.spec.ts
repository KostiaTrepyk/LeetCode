import { createBinaryTree } from "@helpers/createBinaryTree";
import { preorderTraversal } from ".";

describe("144. Binary Tree Preorder Traversal", () => {
	it("should return correct value", () => {
		const root1 = createBinaryTree([1, null, 2, 3]);
		const root2 = createBinaryTree([1, 2, 3, 4, 5]);

		expect(preorderTraversal(root1)).toEqual([1, 2, 3]);
		expect(preorderTraversal(root2)).toEqual([1, 2, 4, 5, 3]);
	});

	it("should return empty array if root is null", () => {
		const root = null;
		expect(preorderTraversal(root)).toEqual([]);
	});
});
