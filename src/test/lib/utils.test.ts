import { describe, it, expect } from "vitest";
import {
  cn,
  titleCase,
  getObjectKeysFromArrayOfObjects,
  replaceObjectKey,
  replaceSpaceWithUnderscore,
  replaceUnderscoreWithSpace,
  hexToRGB,
} from "../../lib/utils";

describe("Utility Functions", () => {
  describe("cn (Classname Merger)", () => {
    it("should merge classnames correctly", () => {
      expect(cn("text-red", "font-bold")).toBe("text-red font-bold");
      expect(cn("text-red", "text-blue")).toBe("text-blue");
      expect(cn()).toBe("");
    });
  });

  describe("titleCase", () => {
    it("should convert string to title case", () => {
      expect(titleCase("hello world")).toBe("Hello World");
      expect(titleCase("javascript is awesome")).toBe("Javascript Is Awesome");
      expect(titleCase("")).toBe("");
    });
  });

  describe("getObjectKeysFromArrayOfObjects", () => {
    it("should return keys from object with most keys", () => {
      const input = [{ a: 1 }, { a: 1, b: 2 }, { a: 1, c: 3 }];
      expect(getObjectKeysFromArrayOfObjects(input)).toEqual(["a", "b"]);
    });

    it("should handle empty array", () => {
      expect(getObjectKeysFromArrayOfObjects([])).toEqual([]);
    });
  });

  describe("replaceObjectKey", () => {
    it("should replace object key", () => {
      const input = { oldKey: "value", other: "data" };
      const result = replaceObjectKey(input, "oldKey", "newKey");
      expect(result).toEqual({ newKey: "value", other: "data" });
    });
  });

  describe("replaceSpaceWithUnderscore", () => {
    it("should replace spaces with underscores", () => {
      expect(replaceSpaceWithUnderscore("hello world")).toBe("hello_world");
      expect(replaceSpaceWithUnderscore("")).toBe("");
    });
  });

  describe("replaceUnderscoreWithSpace", () => {
    it("should replace underscores with spaces", () => {
      expect(replaceUnderscoreWithSpace("hello_world")).toBe("hello world");
      expect(replaceUnderscoreWithSpace("")).toBe("");
    });
  });

  describe("hexToRGB", () => {
    it("should convert hex color to RGB format", () => {
      expect(hexToRGB("#FF0000")).toBe("255, 0, 0");
      expect(hexToRGB("#00FF00")).toBe("0, 255, 0");
      expect(hexToRGB("#0000FF")).toBe("0, 0, 255");
      expect(hexToRGB("#FFFFFF")).toBe("255, 255, 255");
      expect(hexToRGB("#000000")).toBe("0, 0, 0");
    });

    it("should handle hex colors without # prefix", () => {
      expect(hexToRGB("FF0000")).toBe("255, 0, 0");
    });

    it("should return null for invalid input", () => {
      expect(hexToRGB("")).toBe(null);
      expect(hexToRGB(undefined as any)).toBe(null);
      expect(hexToRGB(null as any)).toBe(null);
    });
  });
});
