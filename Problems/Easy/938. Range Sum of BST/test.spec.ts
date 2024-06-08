import { TreeNode, rangeSumBST } from ".";

describe("938. Range Sum of BST", () => {
	it("should return correct value", () => {
		const root: TreeNode = new TreeNode(
			10,
			new TreeNode(5, new TreeNode(3), new TreeNode(7)),
			new TreeNode(15, undefined, new TreeNode(18))
		);
		const low = 7;
		const high = 15;

		expect(rangeSumBST(root, low, high)).toBe(32);
	});
});
