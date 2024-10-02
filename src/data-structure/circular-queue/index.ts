import { AddCircularQueue, ICircularQueue } from "./_type";

class BaseCircularQueue {
  queue: string[];
  front: number;
  rear: number;
  maxSize: number;

  constructor(maxSize: number) {
    this.queue = new Array(maxSize).fill("");
    this.front = -1;
    this.rear = -1;
    this.maxSize = maxSize;
  }

  protected isEmpty() {
    if (this.front === -1) throw new Error("Queue is empty");
  }

  protected isFull() {
    if ((this.rear + 1) % this.maxSize === this.front) {
      throw new Error("Queue is full");
    }
  }
}

export default class CircularQueue
  extends BaseCircularQueue
  implements ICircularQueue
{
  constructor(maxSize: number) {
    super(maxSize);
  }

  add: AddCircularQueue = (value: string) => {
    this.isFull();
    if (this.front === -1) {
      this.front = 0;
    }
    this.rear = (this.rear + 1) % this.maxSize;
    this.queue[this.rear] = value;
  };

  delete() {
    this.isEmpty();
    this.queue[this.front] = "";
    if (this.front === this.rear) {
      this.front = -1;
      this.rear = -1;
    } else {
      this.front = (this.front + 1) % this.maxSize;
    }
  }

  peek() {
    this.isEmpty();
    return this.queue[this.front];
  }

  clear() {
    this.queue = new Array(this.maxSize).fill("");
    this.front = -1;
    this.rear = -1;
  }

  size() {
    if (this.front === -1) return 0;
    return ((this.rear - this.front + this.maxSize) % this.maxSize) + 1;
  }

  print() {
    if (this.front === -1) {
      console.log("");
      return;
    }
    let result = "";
    if (this.rear >= this.front) {
      for (let i = this.front; i <= this.rear; i++) {
        result += this.queue[i] + " ";
      }
    } else {
      for (let i = this.front; i < this.maxSize; i++) {
        result += this.queue[i] + " ";
      }
      for (let i = 0; i <= this.rear; i++) {
        result += this.queue[i] + " ";
      }
    }
    console.log(result.trim());
  }
}
