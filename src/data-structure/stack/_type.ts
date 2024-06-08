export type Push = (value: string) => void;
export type Pop = () => string;
export type Peek = () => string;
export type IsEmpty = () => boolean;
export type Clear = () => void;
export type Size = () => number;
export type Print = () => void;
export type CheckEmpty = () => void;

export interface IStack {
  stack: string[];
  top: number;
  push: Push;
  pop: Pop;
  peek: Peek;
  isEmpty: IsEmpty;
  clear: Clear;
  size: Size;
  print: Print;
}
