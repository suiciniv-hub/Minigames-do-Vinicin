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

}