export function fib(n: number): number {
	if (n <= 0) return 0;
	if (n === 1 || n === 2) return 1;

	let num1 = 1;
	let num2 = 1;

	while (n > 3) {
		const temp = num2;
		num2 = num1 + num2;
		num1 = temp;
		n--;
	}

	return num1 + num2;
}
