import "./index";

describe("Array.prototype.snail", () => {
	it("should return empty array if input is invalid", () => {
		const nums = [1, 2];

		expect(nums.snail(2, 2)).toEqual([]);
		expect(nums.snail(2, 2)).toEqual([]);
	});

	it("should return valid 2D array", () => {
		const nums1 = [1, 2, 3, 4];
		const nums2 = [1, 2, 3, 4];

		expect(nums1.snail(4, 1)).toEqual([[1], [2], [3], [4]]);
		expect(nums1.snail(2, 2)).toEqual([
			[1, 4],
			[2, 3],
		]);
		expect(nums2.snail(1, 4)).toEqual([[1, 2, 3, 4]]);
	});

	it("should throw an error if input is invalid", () => {
		const invalidInput = [1, "2", undefined];

		expect(()=>{invalidInput.snail(1, 3)}).toThrow(TypeError);
	});
});
