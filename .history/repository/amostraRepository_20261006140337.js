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

export function ex(indice, amostra) {
    amostras[indice] = amostra;
}
