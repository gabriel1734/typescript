type idade = number;
type Person = {
  name: string;
  age: idade;
  salary: number;
  favoriteColor?: string;
};

type colorRGB = 'Vermelho' | 'Verde' | 'Azul';

type colorCMYK = 'Ciano' | 'Magenta' | 'Amarelo' | 'Preto';

type favoriteColor = colorRGB | colorCMYK;

const person: Person = {
  age: 30,
  name: 'João',
  salary: 200_000,
};

export function setFavoriteColor(person: Person, color: favoriteColor): Person {
  return { ...person, favoriteColor: color };
}

console.log(setFavoriteColor(person, 'Amarelo'));

console.log(person);
