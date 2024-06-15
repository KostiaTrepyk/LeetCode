import { getRow } from ".";

describe("119. Pascal's Triangle II", () => {
	it("should return corect value", () => {
		expect(getRow(0)).toEqual([1]);
		expect(getRow(1)).toEqual([1, 1]);
		expect(getRow(3)).toEqual([1, 3, 3, 1]);
		expect(getRow(7)).toEqual([1, 7, 21, 35, 35, 21, 7, 1]);
		expect(getRow(13)).toEqual([
			1, 13, 78, 286, 715, 1287, 1716, 1716, 1287, 715, 286, 78, 13, 1,
		]);
	});
});
