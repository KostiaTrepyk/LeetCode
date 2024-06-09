import { scoreOfString } from ".";

describe("3110. Score of a String", () => {
	it("should return correct value", () => {
		expect(scoreOfString("")).toBe(0);
		expect(scoreOfString("hello")).toBe(13);
		expect(scoreOfString("zaz")).toBe(50);
		expect(scoreOfString("qwerty")).toBe(44);
	});
});
