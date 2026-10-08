import * as from './repository/amostraRepository.js';

export function cadastrarAmostra(req, res) {
  const amostra = req.body;
  amostraRepository.cadastrarAmostra(amostra);
  res.status(201).json({ mensagem: 'Amostra criada com sucesso!', amostras: amostraRepository.listarAmostras() });
}

export function listarAmostras(req, res) {
  const produtos =
}

export function buscarAmostra(req, res) {
  const { indice } = req.params;
  res.json(amostraRepository.buscarPorIndice(indice));
}

export function excluirAmostra(req, res) {
  const { indice } = req.params;
  amostraRepository.excluir(indice);
  res.json({ mensagem: 'Amostra deletada com sucesso!' });
}
