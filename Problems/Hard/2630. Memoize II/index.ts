type Fn = (...params: any) => any;

export function memoize(fn: Fn): Fn {
	const memoizedValues = new Map();

	return function (...params) {
		const joinedParams = JSON.stringify(params)

		if (memoizedValues.get(joinedParams)) {
			return memoizedValues.get(joinedParams);
		}

		const result = fn(...params);
		memoizedValues.set(joinedParams, result);
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
