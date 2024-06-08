import { inorderTraversal } from ".";

describe("2649. Nested Array Generator", () => {
	it("should return 'generator' function", () => {
		function* testGenerator() {}
		expect(inorderTraversal.constructor).toEqual(testGenerator.constructor);
	});

	it("should return correct value", () => {
		const g1 = inorderTraversal([[[6]], [1, 3], []]);

		expect(g1.next().value).toBe(6);
		expect(g1.next().value).toBe(1);
		expect(g1.next().value).toBe(3);
		expect(g1.next().done).toBe(true);

		const g2 = inorderTraversal([]);

		expect(g2.next().done).toBe(true);

		const g3 = inorderTraversal([1, [0, 3]]);

		expect(g3.next().value).toBe(1);
		expect(g3.next().value).toBe(0);
		expect(g3.next().value).toBe(3);
		expect(g3.next().done).toBe(true);
	});
});
