export class company {
  readonly name: string;
  private readonly employees: Employer[] = [];
  protected readonly cnpj: string;

  constructor(name: string, cnpj: string) {
    this.name = name;
    this.cnpj = cnpj;
  }

  addEmployer(employer: Employer): void {
    this.employees.push(employer);
  }
  getEmployer(): Employer[] {
    return this.employees;
  }
}

export class Employer {
  constructor(public readonly name: string, public readonly lastName: string) {}
}

const company1 = new company('Udemy', '11.111.111/0001-11');

const employer1 = new Employer('João', 'Silva');
const employer2 = new Employer('Maria', 'Silva');
const employer3 = new Employer('José', 'Silva');

company1.addEmployer(employer1);
company1.addEmployer(employer2);
company1.addEmployer(employer3);

console.log(company1);
console.log(company1.getEmployer());
