import { mergeSort } from ".";

describe("mergeSort function", () => {
  test("sorts an empty array", () => {
    const arr: number[] = [];
    const result = mergeSort(arr);
    expect(result).toEqual([]);
  });

  test("sorts an array with one element", () => {
    const arr: number[] = [5];
    const result = mergeSort(arr);
    expect(result).toEqual([5]);
  });

  test("sorts an already sorted array", () => {
    const arr: number[] = [1, 2, 3, 4, 5];
    const result = mergeSort(arr);
    expect(result).toEqual([1, 2, 3, 4, 5]);
  });

  test("sorts an unsorted array", () => {
    const arr: number[] = [38, 27, 43, 3, 9, 82, 10];
    const result = mergeSort(arr);
    expect(result).toEqual([3, 9, 10, 27, 38, 43, 82]);
  });

  test("sorts an array with duplicate elements", () => {
    const arr: number[] = [5, 3, 8, 3, 5];
    const result = mergeSort(arr);
    expect(result).toEqual([3, 3, 5, 5, 8]);
  });

  test("sorts an array with negative numbers", () => {
    const arr: number[] = [2, -1, 4, 3, -5];
    const result = mergeSort(arr);
    expect(result).toEqual([-5, -1, 2, 3, 4]);
  });
});
