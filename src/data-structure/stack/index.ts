import {
  CheckEmptyStack,
  PushStack,
  ClearStack,
  IStack,
  IsEmptyStack,
  PeekStack,
  PopStack,
  PrintStack,
  SizeStack,
} from "./_type";

class BaseStack {
  stack: string[] = [];
  top = -1;

  constructor(value?: string) {
    if (value) {
      this.stack[++this.top] = value;
    }
  }

  protected checkEmpty: CheckEmptyStack = () => {
    if (this.top === -1) {
      throw new Error("Stack is empty");
    }
  };
}

export default class Stack extends BaseStack implements IStack {
  constructor(value?: string) {
    super(value);
  }

  push: PushStack = (value: string) => {
    this.stack[++this.top] = value;
  };

  pop: PopStack = () => {
    this.checkEmpty();
    return this.stack[this.top--];
  };

  peek: PeekStack = () => {
    this.checkEmpty();
    return this.stack[this.top];
  };

  isEmpty: IsEmptyStack = () => {
    return this.top === -1;
  };

  clear: ClearStack = () => {
    this.top = -1;
  };

  size: SizeStack = () => {
    return this.top + 1;
  };

  print: PrintStack = () => {
    for (let i = this.top; i >= 0; i--) {
      console.log(this.stack[i]);
    }
  };
}
