export function smallerNumbersThanCurrent(nums: number[]): number[] {
	const result: number[] = [];

	for (const num of nums) {
		let counter = 0;
		for (const num2 of nums) {
			if (num > num2) counter++;
		}

		result.push(counter);
	}

	return result
}
