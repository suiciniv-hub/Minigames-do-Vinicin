// Jogo da velha

//Config de variáveis locais do jogo
let jogador1= '';
let jogador2= '';

let jogadorAtual='';

let jogoAtivo= false;

//Todas as combinações de vitória possível
const combinacoesVitoria = [
    // Linhas
    [0,1,2],
    [3,4,5],
    [6,7,8],

    // Colunas

    [0,3,6],
    [1,4,7],
    [2,5,8],

    // Diagonais
    [0,4,8],
    [2,4,6]
]

//Escolher emoji/personagem do jogador 1

function escolherJogador1(emoji){
    jogador1= emoji;

    document.getElementById('jogador1-escolhido').innerText= 'Jogador 1: '+jogador1;
}
function escolherJogador2(emoji){
    jogador2= emoji;

    document.getElementById('jogador2-escolhido').innerText= 'Jogador 2: '+jogador2;
}

function iniciarJogo(){
    //Verifica se os jogadores escolheram seus personagens.
    if(jogador1 === '' || jogador2 === ''){
        alert('Escolha os personagens dos jogadores antes de iniciar o jogo!');
        return;
    }
    if(jogador1 === jogador2){
        alert('Os jogadores não podem escolher o mesmo personagem! Escolha outro personagem para o jogador 2.');
        return;
    }
    // Jogador 1 começa o jogo
    jogadorAtual= jogador1;
    
    jogoAtivo= true;

    // Atualizar mensagem na tela
    document.getElementById('jogador-atual').innerText= 'Jogador da vez: '+jogadorAtual;

    limparTabuleiro();
}

function jogar(celula){
    if(!jogoAtivo){
        return;
    }
    // Verifica se a célula já foi preenchida
    if(celula.innerText !== ''){
        return
    }

    celular.innerText= jogadorAtual;

    // Verifica se houve vitória
    if(verificarVitoria()){
        document.getElementById('jogador-atual').innerText= '🏆 Jogador '+jogadorAtual+' venceu! 🏆';
        jogoAtivo= false;
        return;
    }
    if(verificarEmpate()){
        document.getElementById('jogador-atual').innerText= '👵 Deu Zenira 👵';
        jogoAtivo= false;
        trocarJogador();
    }
    // Se estiver jogo ativo o usuario não pode trocar de jogador

}