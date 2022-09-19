const objectA: {
  readonly chaveA: string;
  chaveB: string;
  chaveC?: string;
  [key: string]: unknown;
} = {
  chaveA: 'Valor A',
  chaveB: 'Valor B',
};

// objectA.chaveA = 'Outro valor A';
objectA.chaveC = 'Valor C';
objectA.chaveD = 'Valor D';

console.log(objectA);
