const servicos = [];

export function cadastrar(servico) {
  servicos.push(servico);
}

export function listarTodos() {
  return servicos;
}

export function buscarPorIndice(indice) {
  return servicos[indice];
}

export function atualizarPorIndice(indice, novoServico) {
  if (indice >= 0 && indice < servicos.length) {
    servicos[indice] = novoServico;
  }
}

export function excluirPorIndice(indice) {
  if (indice >= 0 && indice < servicos.length) {
    servicos.splice(indice, 1);
  }
}
