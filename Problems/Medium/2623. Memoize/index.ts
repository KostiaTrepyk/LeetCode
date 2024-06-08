export type Fn = (...params: number[]) => number;

export function memoize(fn: Fn): Fn {
	const memoized = new Map<string, number>();

	return function (...args) {
		const joinedArgs = args.join(",");
		if (memoized.has(joinedArgs)) return memoized.get(joinedArgs)!;

		const result = fn(...args);
		memoized.set(joinedArgs, result);
		return result;
	};
}

/**
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1
 */
