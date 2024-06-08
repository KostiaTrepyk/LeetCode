import { createBinaryTree } from ".";
import { TreeNode } from "./types/TreeNode";

describe("Helper. Create binary tree", () => {
	it("should return correct value", () => {
		const test1 = {
			arr: [1, 2, 3, 4, 5, 6],
			result: new TreeNode(
				1,
				new TreeNode(2, new TreeNode(4), new TreeNode(5)),
				new TreeNode(3, new TreeNode(6))
			),
		};
		const test2 = {
			arr: [1, null, 3, 4, 5, 6],
			result: new TreeNode(
				1,
				null,
				new TreeNode(3, new TreeNode(4, new TreeNode(6)), new TreeNode(5))
			),
		};
		const test3 = {
			arr: [1, 2, null, null, 3],
			result: new TreeNode(1, new TreeNode(2, null, new TreeNode(3)), null),
		};
		const test4 = { arr: [1, null, null, null, 3], result: new TreeNode(1) };

		expect(createBinaryTree(test1.arr)).toEqual(test1.result);
		expect(createBinaryTree(test2.arr)).toEqual(test2.result);
		expect(createBinaryTree(test3.arr)).toEqual(test3.result);
		expect(createBinaryTree(test4.arr)).toEqual(test4.result);
	});
});
