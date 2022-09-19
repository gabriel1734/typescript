function sumOrConcat(a: number | string, b: number | string) {
  if (typeof a === 'string' || typeof b === 'string') {
    return `${a}${b}`;
  }
  return a + b;
}

console.log(sumOrConcat(1, 2));
console.log(sumOrConcat('1', '2'));
console.log(sumOrConcat('1', 2));
