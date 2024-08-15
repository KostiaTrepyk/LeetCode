export type Fn = (...args: number[]) => void;

export function debounce(fn: Fn, time: number): Fn {
	let timeout: NodeJS.Timeout | null = null;
	return function (...args) {
		if (timeout) {
			clearTimeout(timeout);
		}
        
		timeout = setTimeout(() => {
			fn(...args);
		}, time);
	};
}

/**
 * const log = debounce(console.log, 100);
 * log('Hello'); // cancelled
 * log('Hello'); // cancelled
 * log('Hello'); // Logged at t=100ms
 */
