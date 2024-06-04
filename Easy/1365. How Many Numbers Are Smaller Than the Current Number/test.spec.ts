import { smallerNumbersThanCurrent } from ".";

describe("1365. How Many Numbers Are Smaller Than the Current Number", () => {
	it("should return array", () => {
		expect(smallerNumbersThanCurrent([1, 2, 3])).toEqual(expect.any(Array));
	});

	it("should return correct result", () => {
		const arr = [1, 2, 3, 4];
		const arr2 = [0, 0, 0, 3, 5, 1, 0];

		expect(smallerNumbersThanCurrent(arr)).toEqual([0, 1, 2, 3]);
		expect(smallerNumbersThanCurrent(arr2)).toEqual([0, 0, 0, 5, 6, 4, 0]);
	});
});
