
const celulasEditaveis = document.querySelectorAll('.table-sudoku td[contenteditable="true"]');

//Percorrer todas as celulas
for (let celula of celulasEditaveis) {
    celula.addEventListener('input',
        function () {
            let valor = celula.innerText;

            if (valor !== '1' && valor !== '2' && valor !== '3' && valor !== '4' && valor !== '5' && valor !== '6' && valor !== '7' && valor !== '8' && valor !== '9') {
                celula.innerText = '';
                celula.backgroundColor = 'white';
                return;
            }
            validarCelula(celula);
        });
}

function validarCelula(celula) {
    let temErro = false;
    if (verificarLinha(celula)) {
        temErro = true;
    }
    if (verificarColuna(celula)) {
        temErro = true;
    }
    if (verificarBloco(celula)) {
        temErro = true;
    }
    if (temErro) {
        celula.style.backgroundColor = 'red';
    } else celula.style.backgroundColor = 'white';
}

function verificarLinha(celula) {
    let linha = celula.parentElement;
    let celulasLinha = linha.querySelectorAll('td');
    let valor = celula.innerText;
    let quantidade = 0;
    for (let outraCelula of celulasLinha) {
        if (outraCelula.innerText === valor) {
            quantidade++;
        }
    }
    if (quantidade > 1) return true;
    return false;
}

function verificarColuna(celula) {
    let coluna = celula.cellIndex;
    let linhas = document.querySelectorAll('.table-sudoku tr');
    let valor = celula.innerText;
    let quantidade = 0;
    for (let linha of linhas) {
        let celulaColuna = linha.cells[coluna];
        if (celulaColuna.innerText === valor) {
            quantidade++;
        }
        if (quantidade > 1)
            return true;
        return false;
    }
}

function verificarBloco(celula){
    let linha=
    celula.parentElement.rowIndex;

    let coluna= celula.cellIndex;

    let inicioLinha=
    Math.floor(linha/3)*3;

    let inicioColuna=
    Math.floor(coluna/3)*3;
    
    let valor = celula.innerText;

    let quantidade = 0;

    let linhas =
        document.querySelectorAll('.table-sudoku tr');

        for(let l = inicioLinha; l<inicioLinha+3;l++){
            for(let c=inicioColuna; c < inicioColuna+3; c++){
                if(linhas[l].cells[c].innerText === valor){
                    quantidade++;
                }
            }
        }
        if(quantidade > 1){
            return true;
        }
        return false;
}