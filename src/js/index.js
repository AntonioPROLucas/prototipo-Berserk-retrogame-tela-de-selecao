// Quando clicar no botão personagem vai marcar o botão como selecionado
//pegar os botões no JS pra poder verificar quando o usuario clicar em cima deles
const botoes = document.querySelectorAll('.botao');

// Quando clicar no botão do personagem mostrar as informações do personagem
//pegar os personagem no JS
const personagens = document.querySelectorAll('.personagem');

botoes.forEach((botao, indice )=>{
    botao.addEventListener('mouseenter', () => {
        //verificar se ja existe um botão selecionado, e se sim, remover a classe
        const botaoSelecionado = document.querySelector(".botao.selecionado");
        botaoSelecionado.classList.remove('selecionado');

        //adcionar a classe "selecionado" para o botão que o usuário clicou
        botao.classList.add("selecionado");

        //verificar se ja existe um personagem selecionado, e se sim, remover a classe
        const personagemSelecionado = document.querySelector(".personagem.selecionado");
        personagemSelecionado.classList.remove('selecionado');
        
        //adcionar a classe "selecionado" para o botão que o usuário selecionou
        personagens[indice].classList.add('selecionado');
    });
});