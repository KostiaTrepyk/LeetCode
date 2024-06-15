export function getRow(rowIndex: number): number[] {
	if (rowIndex < 0) return [];
	if (rowIndex === 0) return [1];

	let prevRow = [1];

	for (let rowI = 0; rowI < rowIndex; rowI++) {
		const row = [];

		row.push(1);

		for (let i = 0; i < prevRow.length - 1; i++) {
			const num1 = prevRow[i];
			const num2 = prevRow[i + 1];

			row.push(num1 + num2);
		}

		row.push(1);
		prevRow = row;
	}

	return prevRow;
}
