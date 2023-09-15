function Funcionario(nome, salario) {
  this.nome = nome;
  this.salario = salario;
}

function FrontEnd(nome, salario) {
  Funcionario.call(this, nome, salario);
}

function BacktEnd(nome, salario) {
  Funcionario.call(this, nome, salario);
}

function FullStack(nome, salario) {
  Funcionario.call(this, nome, salario);
}

const pesssoaFrontEnd = new FrontEnd("pedro", 5000);
const pesssoaBackEnd = new BacktEnd("bruno", 7500);
const pesssoaFullStack = new FullStack("luiz", 10000);
