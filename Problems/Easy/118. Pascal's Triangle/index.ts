export function generate(numRows: number): number[][] {
	if (numRows < 1) return [];

	const result = [[1]];

	for (let rowIndex = 1; rowIndex < numRows; rowIndex++) {
		let row = [];
		row.push(1);

		for (let i = 1; i < (result.at(rowIndex - 1)?.length ?? 0); i++) {
			const num1 = result.at(rowIndex - 1)?.at(i - 1);
			const num2 = result.at(rowIndex - 1)?.at(i);

			if (num1 === undefined || num2 === undefined) {
				throw new Error("Invalid number");
			}

			row.push(num1 + num2);
		}

		row.push(1);
		result.push(row);
	}

	return result;
}
