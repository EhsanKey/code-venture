export type PushStack = (value: string) => void;
export type PopStack = () => string;
export type PeekStack = () => string;
export type IsEmptyStack = () => boolean;
export type ClearStack = () => void;
export type SizeStack = () => number;
export type PrintStack = () => void;
export type CheckEmptyStack = () => void;

export interface IStack {
  stack: string[];
  top: number;
  push: PushStack;
  pop: PopStack;
  peek: PeekStack;
  isEmpty: IsEmptyStack;
  clear: ClearStack;
  size: SizeStack;
  print: PrintStack;
}
