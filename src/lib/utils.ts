import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function titleCase(str: string) {
  return str.replace(/\b\w/g, (char) => char.toUpperCase());
}

export function getObjectKeysFromArrayOfObjects(obj: any[]): string[] {
  // get object which has more keys
  const objectWithMoreKeys = obj.reduce(
    (acc, item) =>
      Object.keys(item).length > Object.keys(acc).length ? item : acc,
    {}
  );

  return Object.keys(objectWithMoreKeys);
}

export function replaceObjectKey(obj: any, oldKey: string, newKey: string) {
  const newObj = { ...obj };

  delete newObj[oldKey];

  newObj[newKey] = obj[oldKey];

  return newObj;
}

export function replaceSpaceWithUnderscore(str: string) {
  if (!str) {
    return str;
  }

  return str.replace(/\s/g, "_");
}

export function replaceUnderscoreWithSpace(str: string) {
  if (!str) {
    return str;
  }

  return str.replace(/_/g, " ");
}

export function hexToRGB(hex: string) {
  if (!hex) {
    return null;
  }

  const newHex = hex.replace(/^#/, "");

  const bigint = parseInt(hex, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;

  return `${r}, ${g}, ${b}`;
}
