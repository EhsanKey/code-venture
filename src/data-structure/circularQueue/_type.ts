export type AddCircularQueue = (value: string) => void;

export interface ICircularQueue {
  add: AddCircularQueue;
  delete(): void;
  peek(): string;
  clear(): void;
  size(): number;
  print(): void;
}
