import * as repository  from './repository/amostraRepository.js'


export function listarAmostras(req, res) {
  const produtos = repository.listarAmostras();
  res.json(produtos);
}