export type MultidimensionalArray = (MultidimensionalArray | number)[];

export function* inorderTraversal(
	arr: MultidimensionalArray
): Generator<number, void, unknown> {
	const stack = structuredClone(arr);

	while (stack.length > 0) {
		const el = stack.shift();
		if (el === undefined) break;

		if (typeof el === "number") {
			yield el;
		} else if (Array.isArray(el)) {
			stack.unshift(...el);
		}
	}
}
