//Criar um array constante com os atributos dos cards(botões)
const lista_de_personagens = [
    {id: 1, nome: "Guts", imagem: "Guts.jpg", hp: "300", stamina: "150", strenght: "80", level: '01', },
    {id: 2, nome: "Casca", imagem: "Casca.jpg", hp: "220", stamina: "200", strenght: "50", level: '01', },
    {id: 3, nome: "Judeau", imagem: "Judeau.jpg", hp: "220", stamina: "200", strenght: "50", level: '01',},
    {id: 4, nome: "Pipin", imagem: "Pipin.jpg", hp: "320", stamina: "100", strenght: "80",level: '01',},
];

const container_personagens = document.getElementById('container-personagens');

//Transformar os atributos em cards e adicionar ao container_personagens

function criar_imagens(){
    for (const personagem of lista_de_personagens) {
        const personagemDiv = document.createElement('div');
        personagemDiv.classList.add('card', 'mb-3', 'botao'); // Adicione 'botao' aqui

        personagemDiv.innerHTML = `
            <div class="row g-0">
                <div class="col-md-6">
                    <img class="foto" src="./src/imagens/${personagem.imagem}" class="img-fluid rounded-start" alt="${personagem.nome}">
                </div>
                <div class="col-md-5">
                    <div class="card-body">
                        <h5 class="nome" class="card-title">${personagem.nome}</h5>
                        <p class="card-text">${personagem.hp}<i class="bi bi-heart-fill"></i>;</p>
                        <p class="card-text">${personagem.stamina}<i class="bi bi-lightning-charge-fill"></i>;</p>
                        <p class="card-text">${personagem.strenght}🗡️;</p>
                        <p class="card-text"><small class="text-body-secondary">level ${personagem.level}</small></p>
                    </div>
                </div>
            </div>`;

        if (personagem.id === 1) {
            personagemDiv.classList.add('selecionado');
        }

        container_personagens.appendChild(personagemDiv);
    }
};
//Exibir os cards

criar_imagens();