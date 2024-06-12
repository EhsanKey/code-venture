import { AddQueue, IQueue } from "./_type";

class BaseQueue {
  queue: string[];
  front: number;
  rear: number;
  maxSize: number;

  constructor(maxSize: number) {
    this.queue = [];
    this.front = -1;
    this.rear = -1;
    this.maxSize = maxSize;
  }

  protected isEmpty() {
    if (this.front === this.rear) throw new Error("Queue is empty");
  }

  protected isFull() {
    if (this.rear === this.maxSize - 1) throw new Error("Queue is full");
  }
}

export default class Queue extends BaseQueue implements IQueue {
  constructor(maxSize: number) {
    super(maxSize);
  }

  add: AddQueue = (value: string) => {
    this.isFull();
    this.queue[++this.rear] = value;
  };

  delete() {
    this.isEmpty();
    this.queue[++this.front] = "";
  }

  peek() {
    this.isEmpty();
    return this.queue[this.front + 1];
  }

  clear() {
    this.queue = [];
    this.front = -1;
    this.rear = -1;
  }

  size() {
    return this.rear - this.front;
  }

  print() {
    let result = "";
    for (let i = this.front + 1; i <= this.rear; i++) {
      result += this.queue[i] + " ";
    }
    console.log(result);
  }
}
