import * as repository  from './repository/amostraRepository.js'


export function listarAmostras(req, res) {
  const produtos = amostraRepository.listarAmostras();
  res.json(produtos);
