import { Fn, memoize } from ".";

describe("Memoise", () => {
	it("should return a memoised function", () => {
		const fn: Fn = () => 1;
		expect(memoize(fn)).toEqual(expect.any(Function));
	});

	test("if a memoized function is never called twice with the same inputs", () => {
		const mockedFn = jest.fn((a: number, b: number) => 1);

		const memoizedFn = memoize(mockedFn);

		memoizedFn(1);
		memoizedFn(1, 1);
		memoizedFn(1);
		memoizedFn(1);
		expect(mockedFn).toHaveBeenCalledTimes(2);
	});

	it("should return correct value", () => {
		const sum: Fn = (...args) => args.reduce((acc, val) => acc + val);
		const multiply: Fn = (...args) => args.reduce((acc, val) => acc * val);
		const memoizedSum = memoize(sum);
		const memoizedMultiply = memoize(multiply);

		expect(memoizedSum(1, 1)).toBe(2);
		expect(memoizedSum(1, 1)).toBe(2);
		expect(memoizedSum(2)).toBe(2);
		expect(memoizedSum(2, 5)).toBe(7);

		expect(memoizedMultiply(2, 5)).toBe(10);
		expect(memoizedMultiply(2, 5)).toBe(10);
		expect(memoizedMultiply(5, 5)).toBe(25);
	});
});
