import { it, expect } from "vitest";
import writeData from "./io";

it("should exectute the writeFile method", async () => {
  const data = "Hello, World!";
  const filename = "test.txt";
  const result = await writeData(data, filename);
  expect(result).toBeUndefined();
});

//Same test using the promise syntax
it("should execute the writeFile method", () => {
  const data = "Hello, World!";
  const filename = "test.txt";

  return expect(writeData(data, filename)).resolves.toBeUndefined();
});
