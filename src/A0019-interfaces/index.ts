interface Name {
  name: string;
}

interface LastName {
  lastName: string;
}

interface NameFull {
  nameFull: () => string;
}

type PersonIn = Name & LastName & NameFull;
interface PersonInterface extends Name, LastName, NameFull {}

export class Person implements PersonInterface {
  constructor(public name: string, public lastName: string) {}

  nameFull(): string {
    return `${this.name} ${this.lastName}`;
  }
}

const personOBj: PersonInterface = {
  nameFull() {
    return `${this.name} ${this.lastName}`;
  },
  name: 'João',
  lastName: 'Silva',
};

const person = new Person('João', 'Silva');
console.log(person.nameFull());
console.log(personOBj.nameFull());
