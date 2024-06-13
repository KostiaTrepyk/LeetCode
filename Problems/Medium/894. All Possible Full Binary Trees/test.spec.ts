import { createBinaryTree } from "@helpers/createBinaryTree";
import { allPossibleFBT } from ".";
import { TreeNode } from "@helpers/createBinaryTree/types/TreeNode";

describe("894. All Possible Full Binary Trees", () => {
	it("should return correct value", () => {
		const result1 = [
			createBinaryTree([0, 0, 0, null, null, 0, 0, null, null, 0, 0]),
			createBinaryTree([0, 0, 0, null, null, 0, 0, 0, 0]),
			createBinaryTree([0, 0, 0, 0, 0, 0, 0]),
			createBinaryTree([0, 0, 0, 0, 0, null, null, null, null, 0, 0]),
			createBinaryTree([0, 0, 0, 0, 0, null, null, 0, 0]),
		];
		const result2 = [createBinaryTree([0, 0, 0])];
		const result3: TreeNode[] = [];

		expect(allPossibleFBT(7)).toEqual(result1);
		expect(allPossibleFBT(3)).toEqual(result2);
		expect(allPossibleFBT(4)).toEqual(result3);
	});
});
