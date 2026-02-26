// Tudo exposto no escopo global

let itens = [];
let total = 0;

function adicionar(item) {
  itens.push(item);
  calcularTotal();
}

function remover(nome) {
  itens = itens.filter(item => item.nome !== nome);
  calcularTotal();
}

function calcularTotal() {
  total = itens.reduce((soma, item) => soma + item.preco, 0);
}

function verTotal() {
  return total;
}

function listarItens() {
  return itens;
}

adicionar({ nome: "Camisa", preco: 50 });
adicionar({ nome: "Tênis", preco: 200 });

console.log(listarItens());
console.log("Total:", verTotal());


// Teste alteração das váriaveis.
itens = "bagunça total";
total = -9999;

console.log(listarItens());
console.log("Total:", verTotal());