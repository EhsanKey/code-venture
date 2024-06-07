interface IMatrix {
  rows: number;
  columns: number;
  matrix: number[][];
  printMatrix(): void;
  updateMatrix(row: number, column: number, value: number): void;
  getMatrix(): number[][];
}

class BaseMatrix {
  rows: number;
  columns: number;
  matrix: number[][];

  constructor(rows: number, columns: number) {
    this.rows = rows;
    this.columns = columns;
    this.matrix = Array.from({ length: rows }, () =>
      Array.from({ length: columns }, () => 0)
    );
  }

  protected checkValidRow(row: number): void {
    if (row < 0 || row >= this.rows) {
      throw new Error("Invalid row");
    }
  }

  protected checkValidColumn(column: number): void {
    if (column < 0 || column >= this.columns) {
      throw new Error("Invalid column");
    }
  }
}

export default class Matrix extends BaseMatrix implements IMatrix {
  constructor(rows: number, columns: number) {
    super(rows, columns);
  }

  printMatrix(): void {
    console.log("\n---- start ----");
    for (let i = 0; i < this.matrix.length; i++) {
      console.log(this.matrix[i]);
    }
    console.log("---- end ----");
  }

  updateMatrix(row: number, column: number, value: number): void {
    this.checkValidRow(row);
    this.checkValidColumn(column);
    this.matrix[row][column] = value;
  }

  getMatrix(): number[][] {
    return this.matrix;
  }
}
