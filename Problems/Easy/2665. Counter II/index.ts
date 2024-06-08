export interface ICounter {
	increment: () => number;
	decrement: () => number;
	reset: () => number;
}

export function createCounter(init: number): Counter {
	return new Counter(init);
}

export class Counter implements ICounter {
	private value: number;
	private initValue: number;

	constructor(init: number) {
		this.value = init;
		this.initValue = init;
	}

	public increment(): number {
		return ++this.value;
	}

	public decrement(): number {
		return --this.value;
	}

	public reset(): number {
		this.value = this.initValue;
		return this.value;
	}
}
