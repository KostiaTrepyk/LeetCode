import { debounce, Fn } from ".";

jest.useFakeTimers();

describe("debounce", () => {
	let mockFn: jest.MockedFunction<Fn>;

	beforeEach(() => {
		mockFn = jest.fn();
	});

	test("should call the function after the specified delay", () => {
		const debouncedFn = debounce(mockFn, 200);

		debouncedFn(1, 2); // Call the debounced function

		// Fast-forward time and check if the function is called after the delay
		expect(mockFn).not.toHaveBeenCalled(); // Should not be called immediately

		jest.advanceTimersByTime(200); // Move time by 200ms

		expect(mockFn).toHaveBeenCalledWith(1, 2); // Should be called with the correct arguments
	});

	test("should only call the function once if invoked multiple times within the delay period", () => {
		const debouncedFn = debounce(mockFn, 200);

		debouncedFn(1, 2);
		debouncedFn(3, 4);
		debouncedFn(5, 6);

		jest.advanceTimersByTime(200); // Move time by 200ms

		// Expect the function to be called only once, with the last arguments
		expect(mockFn).toHaveBeenCalledTimes(1);
		expect(mockFn).toHaveBeenCalledWith(5, 6);
	});

	test("should reset the timer if the function is called again before the delay", () => {
		const debouncedFn = debounce(mockFn, 200);

		debouncedFn(1, 2);

		jest.advanceTimersByTime(100); // Move time by 100ms

		debouncedFn(3, 4); // Call the function again

		jest.advanceTimersByTime(100); // Move time by 100ms

		expect(mockFn).not.toHaveBeenCalled(); // Should not be called yet

		jest.advanceTimersByTime(100); // Move time by another 100ms

		expect(mockFn).toHaveBeenCalledWith(3, 4); // Should be called with the correct arguments
	});

	test("should not call the function if the delay is not completed", () => {
		const debouncedFn = debounce(mockFn, 200);

		debouncedFn(1, 2);

		jest.advanceTimersByTime(100); // Move time by 100ms

		expect(mockFn).not.toHaveBeenCalled(); // Should not be called yet

		debouncedFn(3, 4); // Call the function again within the delay

		jest.advanceTimersByTime(50); // Move time by 50ms

		expect(mockFn).not.toHaveBeenCalled(); // Still should not be called

		jest.advanceTimersByTime(150); // Move time by 150ms (Total 200ms from the last call)

		expect(mockFn).toHaveBeenCalledWith(3, 4); // Should be called with the last arguments
	});
});
