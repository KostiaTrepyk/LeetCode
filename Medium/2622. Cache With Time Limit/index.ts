interface Item {
	value: number;
	duration: number;
	timeout: NodeJS.Timeout;
}

export class TimeLimitedCache {
	private items: Map<number, Item>;

	constructor() {
		this.items = new Map();
	}

	set(key: number, value: number, duration: number): boolean {
		const isOverwrited = this.items.has(key);

		if (isOverwrited) {
			const item = this.items.get(key);

			if (item) clearTimeout(item.timeout);
		}

		const timeout = setTimeout(() => {
			this.items.delete(key);
		}, duration);

		this.items.set(key, { value, timeout, duration });

		return isOverwrited;
	}

	get(key: number): number {
		const item = this.items.get(key);

		if (!item) return -1;
		return item.value;
	}

	count(): number {
		return this.items.size;
	}
}
