let x = 10;

x = 0b1010;

const y = 20;
const a = 100;

const person = {
  name: 'João' as const,
  lastName: 'Vitor',
};

console.log(person.name);
console.log(x, y, a);

function selectColor(color: 'Vermelho' | 'Amarelo' | 'Azul'): string {
  return color;
}

console.log(selectColor('Azul'));

export default 1;
