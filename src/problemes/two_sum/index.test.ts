import { twoSum } from ".";

describe("twoSum function", () => {
  test("returns correct indices for a valid target", () => {
    const nums = [2, 11, 15, 7];
    const target = 9;
    const result = twoSum(nums, target);
    expect(result).toEqual([0, 3]);
  });

  test("returns [0] when no valid solution exists", () => {
    const nums = [1, 2, 3];
    const target = 10;
    const result = twoSum(nums, target);
    expect(result).toEqual([0]);
  });

  test("handles arrays with negative numbers", () => {
    const nums = [-1, -2, 3, 5];
    const target = 1;
    const result = twoSum(nums, target);
    expect(result).toEqual([1, 2]);
  });

  test("handles arrays with duplicate numbers", () => {
    const nums = [3, 3, 4];
    const target = 6;
    const result = twoSum(nums, target);
    expect(result).toEqual([0, 1]);
  });
});
