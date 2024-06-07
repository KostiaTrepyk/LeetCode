Array.prototype.snail = function (
	rowsCount: number,
	colsCount: number
): number[][] {
	if (!Array.isArray(this) || !(this as []).every(Number))
		throw new TypeError("this must be an array of numbers");

	if (rowsCount * colsCount !== (this as []).length) return [];

	const nums: number[] = this;
	const result: number[][] = new Array(rowsCount).fill([]).map((i) => []);

	let colsI = 0;
	let direction: -1 | 1 = 1;
	for (let i = 0; i < nums.length; i++) {
		const num = nums[i];

		result[colsI].push(num);

		const isEndOfColumns = Boolean(colsI === rowsCount - 1 && direction === 1);
		const isStartOfColumns = Boolean(colsI === 0 && direction === -1);

		if (isEndOfColumns || isStartOfColumns) {
			direction *= -1;
		} else {
			colsI += direction;
		}
	}

	return result;
};
