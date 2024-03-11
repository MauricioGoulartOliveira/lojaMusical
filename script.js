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
function gerarCards() {
  const listaProdutos = document.getElementById("listaProdutos");

  for (let i = 0; i < produtos.length; i++) {
    const produto = produtos[i];
    
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

// Chamada da função para gerar os cards ao carregar a página
window.onload = gerarCards;

