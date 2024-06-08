export type UpdateMatrix = (row: number, column: number, value: number) => void;
export type GetMatrix = () => number[][];
export type PrintMatrix = () => void;
export type CheckValidRow = (row: number) => void;
export type CheckValidColumn = (column: number) => void;

export interface IMatrix {
  rows: number;
  columns: number;
  matrix: number[][];
  printMatrix: PrintMatrix;
  updateMatrix: UpdateMatrix;
  getMatrix: GetMatrix;
}
