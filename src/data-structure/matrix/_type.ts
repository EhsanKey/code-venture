export type UpdateMatrix = (row: number, column: number, value: number) => void;
export type GetMatrix = () => number[][];
export type PrintMatrix = () => void;
export type CheckValidRowMatrix = (row: number) => void;
export type CheckValidColumnMatrix = (column: number) => void;

export interface IMatrix {
  rows: number;
  columns: number;
  matrix: number[][];
  printMatrix: PrintMatrix;
  updateMatrix: UpdateMatrix;
  getMatrix: GetMatrix;
}
