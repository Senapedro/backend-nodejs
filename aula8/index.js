const { conta } = require("./funcoes");

const novaconta = new conta(12345, 0001, "123.456.789-10", 100);

console.log(novaconta.saldo);

novaconta.depositar(250);

console.log(novaconta.saldo);

//console.log(novaconta.sacar(100));

const message = novaconta.sacar(400);
console.log(message);