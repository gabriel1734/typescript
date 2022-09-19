type HaveName = { name: string };
type HaveLastName = { lastName: string };
type HaveAge = { age: number };

type Person = HaveName & HaveLastName & HaveAge;

type AB = 'A' | 'B';
type AC = 'A' | 'C';
type AD = 'A' | 'D';
type Intersection = AB & AC & AD;

export const person: Person = {
  name: 'João',
  lastName: 'Vitor',
  age: 30,
};

export const intersection: Intersection = 'A';

console.log(person);
console.log(intersection);
