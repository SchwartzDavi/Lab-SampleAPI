export const setores = [];

export function cadastrarSetor(setor) {
    setores.push(setor);
}

export function listarSetores() {
    return setores;
}

export function buscarPorIndice(indice) {
    return setores[indice];
}

export function atualizar(indice, setor) {
    setores[indice] = setor;
}

export function excluir(indice) {
    setores.splice(indice, 1);
}