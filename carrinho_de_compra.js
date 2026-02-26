const Carrinho = (function() {

  // 🔒 DADOS PRIVADOS
  let itens = [];
  let total = 0;

  // 🔒 FUNÇÃO PRIVADA
  function calcularTotal() {
    total = itens.reduce((soma, item) => soma + item.preco, 0);
  }

  // 🌎 API PÚBLICA
  return {
    adicionar(item) {
      itens.push(item);
      calcularTotal();
    },

    remover(nome) {
      itens = itens.filter(item => item.nome !== nome);
      calcularTotal();
    },

    verTotal() {
      return total;
    },

    listarItens() {
      return itens;
    }
  };

})();


//Exemplos de uso
Carrinho.adicionar({ nome: "Camisa", preco: 50 });
Carrinho.adicionar({ nome: "Tênis", preco: 200 });

console.log(Carrinho.listarItens());
console.log("Total:", Carrinho.verTotal());