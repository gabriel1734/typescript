function withoutReturn(...args: string[]): void {
  console.log(args.join(' '));
}

export const pessoa = {
  nome: 'João',
  sobrenome: 'Silva',
  exibirNome(): void {
    console.log(this.nome + ' ' + this.sobrenome);
  },
};

withoutReturn('Olá', 'Mundo!');
pessoa.exibirNome();
