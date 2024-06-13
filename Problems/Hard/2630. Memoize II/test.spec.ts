import { memoize } from ".";

describe("2630. Memoize II", () => {
	it("should return memoized function", () => {
		const fn = (a: number, b: number) => a + b;
		const memoizedFn = memoize(fn);

		expect(memoizedFn).toEqual(expect.any(Function));
	});

	it("should never be called twice with the same inputs.", () => {
		const mockFn = jest.fn((a, b, c) => a + b - c);
		const memoizedFn = memoize(mockFn);

		memoizedFn(1, 3, 4);
		memoizedFn(2, 3, 1);
		memoizedFn(2, 3, 1);
		memoizedFn(2, 3, 1);

		expect(mockFn).toHaveBeenCalledTimes(2);
	});

	test("Merging two empty objects will always result in an empty object. Should only be 1 call to fn().", () => {
		const mockFn: ReturnType<typeof memoize> = jest.fn(
			(a: Record<string, unknown>, b: Record<string, unknown>) => ({
				...a,
				...b,
			})
		);
		const memoizedFn = memoize(mockFn);

		memoizedFn({}, {});
		memoizedFn({}, {});
		memoizedFn({}, {});

		expect(mockFn).toHaveBeenCalledTimes(1);
	});
});
