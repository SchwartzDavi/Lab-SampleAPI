const amostras = [];

export function cadastrarAmostra(req, res) {
  const amostra = req.body;
  amostras.push(amostra);
  res.status(201).json({ mensagem: 'Amostra criada com sucesso!', amostras });
}

export function listarAmostras(req, res) {
  res.json(amostras);
}

export function buscarAmostra(req, res) {
  const { indice } = req.params;
  res.json(amostras[indice]);
}

export function excluirAmostra(req, res) {
  const { indice } = req.params;
  amostras.splice(indice, 1);
  res.json({ mensagem: 'Amostra deletada com sucesso!' });
}
