import {
  CheckEmpty,
  Clear,
  IsEmpty,
  IStack,
  Peek,
  Pop,
  Print,
  Push,
  Size,
} from "./_type";

class BaseStack {
  stack: string[] = [];
  top = -1;

  constructor(value?: string) {
    if (value) {
      this.stack[++this.top] = value;
    }
  }

  protected checkEmpty: CheckEmpty = () => {
    if (this.top === -1) {
      throw new Error("Stack is empty");
    }
  };
}

export default class Stack extends BaseStack implements IStack {
  constructor(value?: string) {
    super(value);
  }

  push: Push = (value: string) => {
    this.stack[++this.top] = value;
  };

  pop: Pop = () => {
    this.checkEmpty();
    return this.stack[this.top--];
  };

  peek: Peek = () => {
    this.checkEmpty();
    return this.stack[this.top];
  };

  isEmpty: IsEmpty = () => {
    return this.top === -1;
  };

  clear: Clear = () => {
    this.top = -1;
  };

  size: Size = () => {
    return this.top + 1;
  };

  print: Print = () => {
    for (let i = this.top; i >= 0; i--) {
      console.log(this.stack[i]);
    }
  };
}
