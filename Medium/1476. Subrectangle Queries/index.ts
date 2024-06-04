export class SubrectangleQueries {
	private matrix: number[][];

	constructor(rectangle: number[][]) {
		this.matrix = rectangle;
	}

	updateSubrectangle(
		row1: number,
		col1: number,
		row2: number,
		col2: number,
		newValue: number
	): void {
		for (let j = row1; j < row2 + 1; j++) {
			for (let i = col1; i < col2 + 1; i++) {
				this.matrix[j][i] = newValue;
			}
		}
	}

	getValue(row: number, col: number): number {
		return this.matrix[row][col];
	}
}

/**
 * Your SubrectangleQueries object will be instantiated and called as such:
 * var obj = new SubrectangleQueries(rectangle)
 * obj.updateSubrectangle(row1,col1,row2,col2,newValue)
 * var param_2 = obj.getValue(row,col)
 */
