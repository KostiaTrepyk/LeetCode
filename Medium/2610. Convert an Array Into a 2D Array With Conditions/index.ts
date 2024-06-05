export function findMatrix(nums: number[]): number[][] {
	const result: number[][] = [];

	for (const num of nums) {
		let arrIndex: number = 0;

		while (true) {
			if (typeof result[arrIndex] === "undefined") {
				result[arrIndex] = [];
			}

			if (result[arrIndex].includes(num)) {
				arrIndex++;
				continue;
			}

			break;
		}

		result[arrIndex].push(num);
	}

	return result;
}
