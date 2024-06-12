import Queue from ".";

describe("Queue", () => {
  let queue: Queue;

  beforeEach(() => {
    queue = new Queue(5);
  });

  test("should create a queue with correct maxSize", () => {
    expect(queue.maxSize).toBe(5);
  });

  test("should add elements to the queue", () => {
    queue.add("first");
    queue.add("second");
    queue.add("third");
    expect(queue.size()).toBe(3);
  });

  test("should delete elements from the queue", () => {
    queue.add("first");
    queue.add("second");
    queue.add("third");
    queue.delete();
    expect(queue.size()).toBe(2);
  });

  test("should peek the first element from the queue", () => {
    queue.add("first");
    queue.add("second");
    queue.add("third");
    expect(queue.peek()).toBe("first");
  });

  test("should clear the queue", () => {
    queue.add("first");
    queue.add("second");
    queue.add("third");
    queue.clear();
    expect(queue.size()).toBe(0);
  });

  test("should throw an error when queue is empty", () => {
    expect(() => queue.delete()).toThrow("Queue is empty");
    expect(() => queue.peek()).toThrow("Queue is empty");
  });

  test("should throw an error when queue is full", () => {
    queue.add("first");
    queue.add("second");
    queue.add("third");
    queue.add("fourth");
    queue.add("fifth");
    expect(() => queue.add("sixth")).toThrow("Queue is full");
  });

  test("should print the queue correctly", () => {
    console.log = jest.fn();
    queue.add("first");
    queue.add("second");
    queue.add("third");
    queue.print();
    expect(console.log).toHaveBeenCalledWith("first second third ");
  });

  test("should throw an error when peeking from an empty queue", () => {
    expect(() => queue.peek()).toThrow("Queue is empty");
  });

  test("should throw an error when deleting from an empty queue", () => {
    expect(() => queue.delete()).toThrow("Queue is empty");
  });

  test("should throw an error when adding to a full queue", () => {
    queue.add("first");
    queue.add("second");
    queue.add("third");
    queue.add("fourth");
    queue.add("fifth");
    expect(() => queue.add("sixth")).toThrow("Queue is full");
  });
});
