const amostras = [];

export function cadastrarAmostra(amostra) {
    amostras.push(amostra);
}

export function listarAmostras() {
    return amostras;
}

export function buscarPorIndice(indice) {
    return amostras[indice];
}

export function excluirAmostra(indice) {
    amostras.splice(indice, 1);
}
