function multiplyArgs(...args: Array<number>): number {
  return args.reduce((acc, value) => acc * value, 1);
}

function concatString(...args: string[]): string {
  return args.reduce((acc, value) => acc + value);
}

function toUpperCase(...args: string[]): string {
  return args.map((value) => value.toUpperCase()).join(' ');
}

export const result = multiplyArgs(1, 2, 3);
export const concat = concatString('a', 'b', 'c');
export const upper = toUpperCase('a', 'b', 'c');

console.log(result);
console.log(concat);
console.log(upper);
