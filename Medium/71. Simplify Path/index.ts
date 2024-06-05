export function simplifyPath(path: string): string {
	let splitedPath = path.split("/");
	let result: string[] = [""];

	for (const str of splitedPath) {
		switch (str) {
			case "":
				break;
			case ".":
				break;
			case "..":
				if (result.length > 1) result.pop();
				break;
			default:
				result.push(str);
		}
	}

	if (result.length === 1) return "/";
	return result.join("/");
}
