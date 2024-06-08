import Matrix from ".";

describe("Matrix", () => {
  let matrix: Matrix;

  beforeEach(() => {
    matrix = new Matrix(2, 3);
  });

  test("should create a matrix with correct dimensions", () => {
    expect(matrix.rows).toBe(2);
    expect(matrix.columns).toBe(3);
    expect(matrix.getMatrix().length).toBe(2);
    expect(matrix.getMatrix()[0].length).toBe(3);
  });

  test("should initialize matrix with zeros", () => {
    const expectedMatrix = [
      [0, 0, 0],
      [0, 0, 0],
    ];
    expect(matrix.getMatrix()).toEqual(expectedMatrix);
  });

  test("should update matrix at specified position", () => {
    matrix.updateMatrix(0, 1, 5);
    expect(matrix.getMatrix()[0][1]).toBe(5);
  });

  test("should throw an error when updating invalid row", () => {
    expect(() => matrix.updateMatrix(-1, 1, 2)).toThrow("Invalid row");
    expect(() => matrix.updateMatrix(2, 1, 2)).toThrow("Invalid row");
  });

  test("should throw an error when updating invalid column", () => {
    expect(() => matrix.updateMatrix(0, -1, 2)).toThrow("Invalid column");
    expect(() => matrix.updateMatrix(0, 3, 2)).toThrow("Invalid column");
  });

  test("should print matrix correctly", () => {
    console.log = jest.fn();
    matrix.printMatrix();
    expect(console.log).toHaveBeenCalledWith("\n---- start ----");
    expect(console.log).toHaveBeenCalledWith([0, 0, 0]);
    expect(console.log).toHaveBeenCalledWith([0, 0, 0]);
    expect(console.log).toHaveBeenCalledWith("---- end ----");
  });
});
