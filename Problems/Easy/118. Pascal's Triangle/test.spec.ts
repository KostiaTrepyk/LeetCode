import { generate } from ".";

describe("118. Pascal's Triangle", () => {
	it("should", () => {
		const tests: { arg: number; result: number[][] }[] = [
			{
				arg: 5,
				result: [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]],
			},
			{
				arg: 1,
				result: [[1]],
			},
			{
				arg: 7,
				result: [
					[1],
					[1, 1],
					[1, 2, 1],
					[1, 3, 3, 1],
					[1, 4, 6, 4, 1],
					[1, 5, 10, 10, 5, 1],
					[1, 6, 15, 20, 15, 6, 1],
				],
			},
		];

		tests.forEach((test) => {
			expect(generate(test.arg)).toEqual(test.result);
		});
	});
});
