import { simplifyPath } from ".";

describe("71. Simplify Path", () => {
	test("The trailing slash should be removed.", () => {
		expect(simplifyPath("/home/")).toBe("/home");
		expect(simplifyPath("/home/foo/")).toBe("/home/foo");
	});

	test("Multiple consecutive slashes are replaced by a single one.", () => {
		expect(simplifyPath("/home//foo/")).toBe("/home/foo");
		expect(simplifyPath("/home//foo//bar/")).toBe("/home/foo/bar");
		expect(simplifyPath("/home///foo////bar/")).toBe("/home/foo/bar");
	});

	test("Going one level up from the root directory.", () => {
		expect(simplifyPath("/home/user/Documents/../Pictures")).toBe(
			"/home/user/Pictures"
		);
		expect(simplifyPath("/a/../../b/../c//.//")).toBe("/c");
		expect(simplifyPath("/../")).toBe("/");
	});

	test("'...'' is a valid name for a directory", () => {
		expect(simplifyPath("/.../a/../b/c/../d/./")).toBe("/.../b/d");
	});
});
