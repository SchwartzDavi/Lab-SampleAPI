const amostras = [];

export function cadastrarAmostra(amostra) {
    amostras.push(amostra);
}

export function listarAmostras() {
    return amostras;
}

export function buscarporindice(indice) {
    return amostras[indice];
}

export function excl(indice, amostra) {
    amostras[indice] = amostra;
}
