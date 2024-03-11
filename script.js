// Array de produtos
const produtos = [
  {
    nome: "Corda Earneball",
    imagem: "corda1.jpeg",
    descricao: "Corda para baixo elétrico de alta qualidade."
  },
  {
    nome: "Amplificador Marshall",
    imagem: "amp.JPEG",
    descricao: "Amplificador de guitarra Marshall, perfeito para performances ao vivo."
  }
];

// Função para gerar os cards dos produtos
function gerarCards(produtosFiltrados) {
  const listaProdutos = document.getElementById("listaProdutos");
  listaProdutos.innerHTML = ''; // Limpa a lista de produtos antes de adicionar os novos cards

  for (let i = 0; i < produtosFiltrados.length; i++) {
    const produto = produtosFiltrados[i];
    
    const card = document.createElement("div");
    card.classList.add("card-produto");

    const imagem = document.createElement("img");
    imagem.src = produto.imagem;
    imagem.alt = produto.nome;

    const nome = document.createElement("p");
    nome.textContent = produto.nome;

    card.appendChild(imagem);
    card.appendChild(nome);

    // Adiciona um event listener para exibir informações adicionais ao clicar no card
    card.addEventListener("click", function() {
        alert(produto.descricao); // Exibe a descrição do produto
    });

    listaProdutos.appendChild(card);
  }
}

// Chamada da função para gerar os cards ao carregar a página com todos os produtos
window.onload = function() {
  gerarCards(produtos);
};

// Função para filtrar os produtos com base na pesquisa
function filtrarProdutos() {
  const textoPesquisa = document.getElementById("campoPesquisa").value.toLowerCase();
  const produtosFiltrados = produtos.filter(produto => produto.nome.toLowerCase().includes(textoPesquisa));
  gerarCards(produtosFiltrados); // Atualiza os cards com os produtos filtrados
}

// Adiciona o event listener ao botão de pesquisar
const botaoPesquisar = document.getElementById("botaoPesquisar");
botaoPesquisar.addEventListener("click", filtrarProdutos);


