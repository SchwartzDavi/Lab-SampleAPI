const boletins = [];

export function cadastrarBoletim(boletim) {
    boletins.push(boletim);
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
