// Array de objetos contendo os dados dos projetos
const meusProjetos = [
    {
        titulo: "Sistema de Gestão Agrícola",
        descricao: "Plataforma desenvolvida em Django para gerenciamento de cafezais e logística de pequenos produtores.",
        link: "https://github.com/seu-usuario/gestao-agricola"
    },
    {
        titulo: "Análise de Dados ENEM",
        descricao: "Processamento de grandes volumes de dados do ENEM utilizando ecossistema Hadoop e Apache Pig.",
        link: "https://github.com/seu-usuario/analise-enem"
    },
    {
        titulo: "Portfolio Web Dinâmico",
        descricao: "Este próprio site, construído com HTML5 semântico, CSS Grid e manipulação de DOM via JS.",
        link: "https://github.com/seu-usuario/portfolio"
    }
];

// Função para renderizar os cards no HTML
function carregarProjetos() {
    const container = document.getElementById('container-projetos');

    // Limpa o container antes de renderizar (boa prática)
    container.innerHTML = "";

    meusProjetos.forEach(projeto => {
        // Criação da estrutura do card usando Template Literals
        const cardHTML = `
            <article class="card-projeto">
                <div>
                    <h3>${projeto.titulo}</h3>
                    <p>${projeto.descricao}</p>
                </div>
                <a href="${projeto.link}" target="_blank" class="btn-github">
                    Ver no GitHub
                </a>
            </article>
        `;

        // Adiciona o card ao container
        container.innerHTML += cardHTML;
    });
}

// Executa a função quando o documento estiver pronto
document.addEventListener('DOMContentLoaded', carregarProjetos);
