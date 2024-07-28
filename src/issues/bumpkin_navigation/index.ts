export const conversions: { [key: string]: number } = {
  i: 2.54,
  f: 30.48,
  y: 91.44,
  c: 1,
  m: 100,
};

export const convertToCm = (value: number, unit: string): number => {
  return value * conversions[unit];
};

export const determineTravelMethod = (b: number, d: number): string => {
  if (d > b * 1.25) return "Stilts";
  if (d > b * 1.05) return "Walk";
  if (d > b * 0.65) return "Duck";
  if (d > b * 0.4) return "Crawl";
  if (d > b * 0.25) return "Limbo";
  return "Blocked";
};

export const processBumpkins = (input: string): string => {
  const lines = input.trim().split("\n");
  const numberOfBumpkins = parseInt(lines[0], 10);
  let index = 1;
  let result = "";

  for (let i = 0; i < numberOfBumpkins; i++) {
    const [name, n, height, unit] = lines[index].trim().split(" ");
    const bumpkinHeight = convertToCm(parseFloat(height), unit);
    const numberOfDoors = parseInt(n, 10);
    result += name + "\n";
    index++;

    for (let j = 0; j < numberOfDoors; j++) {
      const [doorHeight, doorUnit] = lines[index].trim().split(" ");
      const doorHeightCm = convertToCm(parseFloat(doorHeight), doorUnit);
      const travelMethod = determineTravelMethod(bumpkinHeight, doorHeightCm);
      result += `Doorway ${j + 1}: ${travelMethod}\n`;
      index++;
    }
    result += "\n";
  }

  return result.trim();
};
