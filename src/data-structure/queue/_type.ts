export type AddQueue = (value: string) => void;

export interface IQueue {
  add: AddQueue;
  delete(): void;
  peek(): string;
  clear(): void;
  size(): number;
  print(): void;
}
