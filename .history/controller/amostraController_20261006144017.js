import * as from './repository/amostraRepository.js';

export function cadastrarAmostra(req, res) {
  const amostra = req.body;
  amostraRepository.cadastrarAmostra(amostra);
  res.status(201).json({ mensagem: 'Amostra criada com sucesso!', amostras: amostraRepository.listarAmostras() });
}

export function listarAmostras(req, res) {
  const produtos = amostraRepository.listarAmostras();
  res.json(produtos);
