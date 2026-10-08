const amostras = [];

export function cadastrarAmostra(amostra) {
    amostras.push(amostra);
}

export function listarAmostras() {
    return amostras;
}

export function buscarpor(indice) {
    return amostras[indice];
}

export function atualizarAmostra(indice, amostra) {
    amostras[indice] = amostra;
}
