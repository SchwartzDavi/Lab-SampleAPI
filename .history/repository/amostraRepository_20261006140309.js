const amostras = [];

export function cadastrarAmostra(amostra) {
    amostras.push(amostra);
}

export function listarAmostras() {
    return amostras;
}

export function buscarpor(indice) {
    amostras.splice(indice, 1);
}

export function atualizarAmostra(indice, amostra) {
    amostras[indice] = amostra;
}
