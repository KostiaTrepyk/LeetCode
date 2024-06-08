import { createBinaryTree } from "@helpers/createBinaryTree";
import { postorderTraversal } from ".";

describe("145. Binary Tree Postorder Traversals", () => {
	it("should return correct value", () => {
		const root1 = createBinaryTree([1, null, 2, 3]);
		const root2 = createBinaryTree([1, 2, 3, 4, 5]);

		expect(postorderTraversal(root1)).toEqual([3, 2, 1]);
		expect(postorderTraversal(root2)).toEqual([4, 5, 2, 3, 1]);
	});

	it("should return empty array if root is null", () => {
		const root = null;
		expect(postorderTraversal(root)).toEqual([]);
	});
});
