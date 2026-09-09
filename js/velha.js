// Jogo da velha

//Config de variáveis locais do jogo
let jogador1 = '';
let jogador2 = '';

let jogadorAtual = '';

let jogoAtivo = false;

//Todas as combinações de vitória possível
const combinacoesVitoria = [
    // Linhas
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    // Colunas

    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],

    // Diagonais
    [0, 4, 8],
    [2, 4, 6]
]

//Escolher emoji/personagem do jogador 1

function escolherJogador1(emoji) {
    jogador1 = emoji;

    document.getElementById('jogador1-escolhido').innerText = 'Jogador 1: ' + jogador1;
}
function escolherJogador2(emoji) {
    jogador2 = emoji;

    document.getElementById('jogador2-escolhido').innerText = 'Jogador 2: ' + jogador2;
}


function iniciarJogo() {
    //Verifica se os jogadores escolheram seus personagens.
    if (jogador1 === '' || jogador2 === '') {
        alert('Escolha os personagens dos jogadores antes de iniciar o jogo!');
        return;
    }
    if (jogador1 === jogador2) {
        alert('Os jogadores não podem escolher o mesmo personagem! Escolha outro personagem para o jogador 2.');
        return;
    }
    // Jogador 1 começa o jogo
    jogadorAtual = jogador1;

    jogoAtivo = true;

    // Atualizar mensagem na tela
    document.getElementById('jogador-atual').innerText = 'Jogador da vez: ' + jogadorAtual;

    limparTabuleiro();
}

function jogar(celula) {
    if (!jogoAtivo) {
        return;
    }
    // Verifica se a célula já foi preenchida
    if (celula.innerText !== '') {
        return
    }

    celula.innerText = jogadorAtual;

    // Verifica se houve vitória
    if (verificarVitoria()) {
        document.getElementById('jogador-atual').innerText = '🏆 Jogador ' + jogadorAtual + ' venceu! 🏆';
        jogoAtivo = false;
        return;
    }
    if (verificarEmpate()) {
        document.getElementById('jogador-atual').innerText = '👵 Deu Zenira 👵';
        jogoAtivo = false;
        return;
    }
    trocarJogador();
    // Se estiver jogo ativo o usuario não pode trocar de personagem
}

function trocarJogador() {
    jogadorAtual = (jogadorAtual === jogador1) ? jogador2 : jogador1;
    document.getElementById('jogador-atual').innerText = 'Jogador da vez: ' + jogadorAtual;
}

function verificarVitoria() {
    // Pega todas as células da classe tabuleiro da tabela
    const celulas = document.querySelectorAll('.tabuleiro td')

    // Verifica combinações
    for (let combinacao of combinacoesVitoria) {
        const primeira = celulas[combinacao[0]].innerText
        const segunda = celulas[combinacao[1]].innerText
        const terceira = celulas[combinacao[2]].innerText

        if (primeira === '') {
            continue;
        }
        if (primeira === segunda && segunda === terceira) {
            celulas[combinacao[0]].style.backgroundColor = 'lightgreen';
            celulas[combinacao[1]].style.backgroundColor = 'lightgreen';
            celulas[combinacao[2]].style.backgroundColor = 'lightgreen';
            return true;
        }
    }
    return false;
}

function verificarEmpate() {
    const celulas = document.querySelectorAll('.tabuleiro td');
    for (let celula of celulas) {
        if (celula.innerText === '') return false;
    }
    return true;
}

function limparTabuleiro() {
    const celulas = document.querySelectorAll('.tabuleiro td')
    for (let celula of celulas) {
        celula.innerText = '';
        celula.style.backgroundColor = 'white';
    }
}