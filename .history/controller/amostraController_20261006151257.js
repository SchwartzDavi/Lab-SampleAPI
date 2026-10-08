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
    const { indice } = req.params;
    if ""
}

export function excluirAmostra(req, res){
const { indice } = req.params;
  amostras.splice(indice, 1);
  res.json({ mensagem: 'Amostra deletado com sucesso!' });

}