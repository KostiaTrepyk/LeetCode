type Fn<Params extends unknown[], T> = (...params: Params) => T;

export function memoize<Params extends unknown[], T>(
	fn: Fn<Params, T>
): Fn<Params, T> {
	const memoizedValues = new Map();

	return function (...params) {
		const joinedParams = JSON.stringify(params);

		if (memoizedValues.get(joinedParams)) {
			return memoizedValues.get(joinedParams);
		}

		const result = fn(...params);
		memoizedValues.set(joinedParams, result);
		return result;
	};
}
