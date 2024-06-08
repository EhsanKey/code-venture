import Stack from ".";

describe("Stack", () => {
  let stack: Stack;

  beforeEach(() => {
    stack = new Stack();
  });

  test("should create an empty stack", () => {
    expect(stack.size()).toBe(0);
    expect(stack.isEmpty()).toBeTruthy();
  });

  test("should push elements to the stack", () => {
    stack.push("a");
    stack.push("b");
    stack.push("c");
    expect(stack.size()).toBe(3);
    expect(stack.isEmpty()).toBeFalsy();
  });

  test("should pop elements from the stack", () => {
    stack.push("a");
    stack.push("b");
    stack.push("c");
    expect(stack.pop()).toBe("c");
    expect(stack.pop()).toBe("b");
    expect(stack.pop()).toBe("a");
    expect(stack.size()).toBe(0);
    expect(stack.isEmpty()).toBeTruthy();
  });

  test("should peek the top element of the stack", () => {
    stack.push("a");
    stack.push("b");
    stack.push("c");
    expect(stack.peek()).toBe("c");
    stack.pop();
    expect(stack.peek()).toBe("b");
  });

  test("should clear the stack", () => {
    stack.push("a");
    stack.push("b");
    stack.push("c");
    stack.clear();
    expect(stack.size()).toBe(0);
    expect(stack.isEmpty()).toBeTruthy();
  });

  test("should throw an error when popping from an empty stack", () => {
    expect(() => stack.pop()).toThrow("Stack is empty");
  });

  test("should throw an error when peeking from an empty stack", () => {
    expect(() => stack.peek()).toThrow("Stack is empty");
  });

  test("should print the stack correctly", () => {
    console.log = jest.fn();
    stack.push("a");
    stack.push("b");
    stack.push("c");
    stack.print();
    expect(console.log).toHaveBeenCalledWith("c");
    expect(console.log).toHaveBeenCalledWith("b");
    expect(console.log).toHaveBeenCalledWith("a");
  });
});
