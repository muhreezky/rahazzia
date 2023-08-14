export function jsonize(obj: object) {
  return obj ? JSON.parse(JSON.stringify(obj)) : {};
}