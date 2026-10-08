import * as repository  from './repository/amostraRepository.js'

export function cadastrarAmostra(req, res) {
    c
}


export function listarAmostras(req, res) {
  const produtos = repository.listarAmostras();
  res.json(produtos);
}
