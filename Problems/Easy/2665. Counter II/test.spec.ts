import { Counter, createCounter } from ".";

describe("2665. Counter II", () => {
	it("should return Counter instance", () => {
		expect(createCounter(5)).toEqual(expect.any(Counter));
	});

	test("increment method should return correct value", () => {
		expect(createCounter(5).increment()).toBe(6);
		expect(createCounter(127).increment()).toBe(128);
		expect(createCounter(60).increment()).toBe(61);
	});

	test("increment method should return correct value", () => {
		expect(createCounter(5).decrement()).toBe(4);
		expect(createCounter(10).decrement()).toBe(9);
		expect(createCounter(311).decrement()).toBe(310);
	});

	test("increment method should return correct value", () => {
		const counter = createCounter(5);
		counter.increment();
		counter.increment();
		counter.increment();
		expect(counter.reset()).toBe(5);
		counter.increment();
		counter.decrement();
		counter.decrement();
		counter.decrement();
		expect(counter.reset()).toBe(5);
	});
});
