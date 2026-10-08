import * as repository  from './repository/amostraRepository.js'

export function cadastrarAmostra(req, res) {
    const amostra = req.body;
    amostras.push(amostra);
    res.status(201).json({mensagem: 'amostra criada!'})
}


export function listarAmostras(req, res) {
  const produtos = repository.listarAmostras();
  res.json(produtos);
}

export function buscarAmostra(req, res){
    
}