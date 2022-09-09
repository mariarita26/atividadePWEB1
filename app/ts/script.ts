const c1 = new Conta('1', 100);
const c2 = new Conta('2');


console.log(c1.numero);
const contaController = new ContaController();
contaController.adicionarConta(c1);
contaController.adicionarConta(c2);
contaController.listar();

const contaBonificada = new ContaBonificada('10', 100);
contaBonificada.creditar(10);
console.log(contaBonificada.getSaldo());

const p1 = new Pessoa('Maria', '20', new Date('07/26/2001'));
const p2 = new PessoaFisica('Joicy', '21',new Date('07/28/2001'), '112.865.954-98');
const p3 = new PessoaJuridica('Siri Cascudo', '25', new Date('10/05/1997'), '1234567899');
//console.log(p1);
//console.log(p2.toString());
//console.log(p3.toString());

console.log("\nAtributos Pessoa")
console.log(p1.nome);
console.log(p1.idade);
console.log(p1.dataNascimento);

console.log("\nAtributos Pessoa Física")
console.log(p2.nome);
console.log(p2.idade);
console.log(p2.dataNascimento);
console.log(p2.cpf);


console.log("\nAtributos Pessoa Jurídica")
console.log(p3.nome);
console.log(p3.idade);
console.log(p3.dataNascimento);
console.log(p3.cnpj);
// const repContas = new RepositorioContas();
//
// const c1 = new Conta('1', 100);
// const c2 = new Conta('2');
//
// repContas.adicionar(c1);
// repContas.adicionar(c2);
//
// repContas.getContas().forEach(conta => console.log(conta.numero))

// console.log(c1.saldo)
// console.log(c2.saldo)
//
// c1.saldo = 200;
//
// c1.debitar(50);
// c2.creditar(1000);
// console.log(c1.saldo)
// console.log(c2.saldo)
//
// c2.transferir(c1, 500);
// console.log(c1.saldo)
// console.log(c2.saldo)
