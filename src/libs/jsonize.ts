export default function jsonize(obj: object) {
  return JSON.parse(JSON.stringify(obj));
}