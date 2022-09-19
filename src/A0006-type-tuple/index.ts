const dataClient: readonly [number, string] = [1, 'joão'];
const dataClient2: [number, string, string] = [1, 'joão', 'silva'];
const dataClient3: [number, string, string?] = [1, 'joão'];
const dataClient4: [number, string, ...string[]] = [
  1,
  'joão',
  'silva',
  'santos',
];

// dataClient[0] = 100;
// dataClient[1] = 'Maria';
// dataClient.pop();

console.log(dataClient);
console.log(dataClient2);
console.log(dataClient3);

const array: readonly string[] = ['João', 'Maria'];
const array2: ReadonlyArray<string> = ['João', 'Maria'];

console.log(array);
console.log(array2);
