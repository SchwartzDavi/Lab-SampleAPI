const amostras = [];

export function cadastrarAmostra(amostra) {
    amostras.push(amostra          );
}

export function listarBoletins() {
    return boletins;
}

export function deletarBoletim(indice) {
    boletins.splice(indice, 1);
}

export function atualizarBoletim(indice, boletim) {
    boletins[indice] = boletim;
}
