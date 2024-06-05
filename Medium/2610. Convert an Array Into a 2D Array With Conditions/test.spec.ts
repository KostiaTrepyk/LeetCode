import { findMatrix } from ".";

describe("2610. Convert an Array Into a 2D Array With Conditions", () => {
	it("should return a 2D Array", () => {
		const nums = [1, 2, 3, 1];

		expect(findMatrix(nums)).toEqual(expect.any(Array));
		expect(findMatrix(nums)[0]).toEqual(expect.any(Array));
		expect(findMatrix(nums)[1]).toEqual(expect.any(Array));
	});

	it("should return a correct 2D Array (without sorting)", () => {
		const sortFunc = (matrix: number[][]): number[][] =>
			matrix.map((arr) => arr.sort((a, b) => a - b));

		const nums = [1, 3, 4, 1, 2, 3, 1];
		const nums2 = [1, 2, 3, 4];

		const sortedResult1 = findMatrix(nums);
		const sortedResult2 = findMatrix(nums2);

		const expectedResult1 = [[1, 3, 4, 2], [1, 3], [1]];
		const expectedResult2 = [[1, 2, 3, 4]];

		expect(sortFunc(sortedResult1)).toEqual(sortFunc(expectedResult1));
		expect(sortFunc(sortedResult2)).toEqual(sortFunc(expectedResult2));
	});
});
