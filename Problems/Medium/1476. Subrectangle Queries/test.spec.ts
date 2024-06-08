import { SubrectangleQueries } from ".";

describe("1476. Subrectangle Queries", () => {
	test("getValue should return value", () => {
		const a = new SubrectangleQueries([
			[1, 2, 3],
			[4, 5, 6],
		]);

		expect(a.getValue(0, 0)).toBe(1);
		expect(a.getValue(0, 2)).toBe(3);
		expect(a.getValue(1, 1)).toBe(5);
		expect(a.getValue(1, 2)).toBe(6);
	});

	test("getValue should return value", () => {
		const obj1 = new SubrectangleQueries([
			[1, 2, 3],
			[4, 5, 6],
			[7, 8, 9],
		]);

		obj1.updateSubrectangle(1, 1, 2, 2, 0);

		expect(obj1.getValue(2, 2)).toBe(0);
		expect(obj1.getValue(1, 1)).toBe(0);
		expect(obj1.getValue(1, 2)).toBe(0);
		expect(obj1.getValue(2, 1)).toBe(0);

		expect(obj1.getValue(0, 0)).toBe(1);
		expect(obj1.getValue(0, 2)).toBe(3);
		expect(obj1.getValue(2, 0)).toBe(7);

		const obj2 = new SubrectangleQueries([
			[1, 2, 3],
			[4, 5, 6],
			[7, 8, 9],
			[10, 11, 12],
			[13, 14, 15],
		]);

		obj2.updateSubrectangle(1, 1, 3, 1, 0);

		expect(obj2.getValue(1, 1)).toBe(0);
		expect(obj2.getValue(2, 1)).toBe(0);
		expect(obj2.getValue(3, 1)).toBe(0);

		expect(obj2.getValue(0, 0)).toBe(1);
		expect(obj2.getValue(0, 2)).toBe(3);
		expect(obj2.getValue(2, 0)).toBe(7);
	});
});
