import {
  CheckValidColumnMatrix,
  CheckValidRowMatrix,
  GetMatrix,
  IMatrix,
  PrintMatrix,
  UpdateMatrix,
} from "./_type";

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

  protected checkValidRow: CheckValidRowMatrix = (row) => {
    if (row < 0 || row >= this.rows) {
      throw new Error("Invalid row");
    }
  };

  protected checkValidColumn: CheckValidColumnMatrix = (column) => {
    if (column < 0 || column >= this.columns) {
      throw new Error("Invalid column");
    }
  };
}

export default class Matrix extends BaseMatrix implements IMatrix {
  constructor(rows: number, columns: number) {
    super(rows, columns);
  }

  printMatrix: PrintMatrix = () => {
    console.log("\n---- start ----");
    for (let i = 0; i < this.matrix.length; i++) {
      console.log(this.matrix[i]);
    }
    console.log("---- end ----");
  };

  updateMatrix: UpdateMatrix = (row, column, value) => {
    this.checkValidRow(row);
    this.checkValidColumn(column);
    this.matrix[row][column] = value;
  };

  getMatrix: GetMatrix = () => {
    return this.matrix;
  };
}
