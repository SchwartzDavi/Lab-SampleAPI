const amostras = [];

export function cadastrarAmostra(amostra) {
    amostras.push(amostra        );
}

export function listarAmostras() {
    return amostras;
}

export function deletarBoletim(indice) {
    boletins.splice(indice, 1);
}

export function atualizarBoletim(indice, boletim) {
    boletins[indice] = boletim;
}
