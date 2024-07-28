import { convertToCm, determineTravelMethod, processBumpkins } from ".";

describe("convertToCm", () => {
  it("should convert values correctly", () => {
    expect(convertToCm(1, "i")).toBeCloseTo(2.54);
    expect(convertToCm(1, "f")).toBeCloseTo(30.48);
    expect(convertToCm(1, "y")).toBeCloseTo(91.44);
    expect(convertToCm(1, "c")).toBeCloseTo(1);
    expect(convertToCm(1, "m")).toBeCloseTo(100);
  });
});

describe("determineTravelMethod", () => {
  it("should return correct travel method", () => {
    expect(determineTravelMethod(100, 130)).toBe("Stilts");
    expect(determineTravelMethod(100, 110)).toBe("Walk");
    expect(determineTravelMethod(100, 80)).toBe("Duck");
    expect(determineTravelMethod(100, 50)).toBe("Crawl");
    expect(determineTravelMethod(100, 30)).toBe("Limbo");
    expect(determineTravelMethod(100, 20)).toBe("Blocked");
  });
});

describe("processBumpkins", () => {
  it("should process input correctly", () => {
    const input = `
    2
    Mookin 3 150.4 c
    75 i
    2 f
    151 c
    Kimkin 1 67.3 i
    204.5 c
    `.trim();

    const expectedOutput = `
Mookin
Doorway 1: Stilts
Doorway 2: Crawl
Doorway 3: Duck

Kimkin
Doorway 1: Walk
`.trim();

    expect(processBumpkins(input)).toBe(expectedOutput);
  });
});

const input = `
2
Mookin 3 150.4 c
75 i
2 f
151 c
Kimkin 1 67.3 i
204.5 c
`;

console.log(processBumpkins(input));
