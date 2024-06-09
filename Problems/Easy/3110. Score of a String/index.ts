export function scoreOfString(s: string): number {
	let sum: number = 0;

	for (let i = 0, j = 1; j < s.length; i++, j++) {
		sum += Math.abs(s.charCodeAt(i) - s.charCodeAt(j))
	}
	
	return sum;
}
