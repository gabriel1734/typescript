/* eslint-disable */
let nome: string = 'João';
let idade: number = 0b1010;
let adulto: boolean = true;
let simbolo: symbol = Symbol('qualquer-symbol');
// let big : bigint = 10n;

let arrayDeNumeros: Array<number> = [1, 2, 3];
let arrayDeNumeros2: number[] = [1, 2, 3];
let arrayDeStrings: Array<string> = ['a', 'b', 'c'];
let arrayDeStrings2: string[] = ['a', 'b', 'c'];

let pessoa: { nome: string; idade: number; adulto?: boolean } = {
  nome: 'João',
  idade: 27,
};


function soma(x: number, y: number): number {
  return x + y;
}

const soma2: (x: number, y: number) => number = (x, y) => x + y;
