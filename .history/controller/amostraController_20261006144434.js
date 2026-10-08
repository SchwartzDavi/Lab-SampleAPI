import * as repository  from './repository/amostraRepository.js'

export function cadastrarAmostra(req, res) {
    const amostra = req.body;
    amostras.push(amostra);
    
}


export function listarAmostras(req, res) {
  const produtos = repository.listarAmostras();
  res.json(produtos);
}
