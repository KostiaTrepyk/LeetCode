import { TimeLimitedCache } from ".";

describe("TimeLimitedCache", () => {
	test("set method", () => {
		const obj = new TimeLimitedCache();

		expect(obj.set(2, 2, 1000)).toBe(false);
		expect(obj.set(1, 2, 1000)).toBe(false);
		expect(obj.set(1, 2, 1000)).toBe(true);
	});

	test("get method", () => {
		const obj = new TimeLimitedCache();

		obj.set(1, 1, 1000);
		obj.set(2, 20, 1000);
		obj.set(3, 96, 1000);

		expect(obj.get(1)).toBe(1);
		expect(obj.get(2)).toBe(20);
		expect(obj.get(3)).toBe(96);
		expect(obj.get(4)).toBe(-1);
	});

	test("count method", () => {
		const obj = new TimeLimitedCache();

		obj.set(1, 1, 1000);
		obj.set(2, 2, 1000);
		obj.set(3, 3, 1000);

		expect(obj.count()).toBe(3);

		obj.set(3, 3, 1000);

		expect(obj.count()).toBe(3);

		obj.set(4, 3, 1000);

		expect(obj.count()).toBe(4);
	});

	it("should clear value when time is expired", async () => {
		jest.useFakeTimers();
		const obj = new TimeLimitedCache();

		obj.set(1, 1, 1000);

		setTimeout(() => {
			expect(obj.get(1)).toBe(1);
		}, 0);

		setTimeout(() => {
			expect(obj.get(1)).toBe(1);
		}, 900);

		setTimeout(() => {
			expect(obj.get(1)).toBe(1);
		}, 999);

		setTimeout(() => {
			expect(obj.get(1)).toBe(-1);
		}, 1000);

		setTimeout(() => {
			expect(obj.get(1)).toBe(-1);
		}, 1100);
		jest.runAllTimers();
	});
});
