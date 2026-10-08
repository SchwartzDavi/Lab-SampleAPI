const amostras = [];

export function cadastrarAmostra(req, res) {
  const amostra = req.body;
  amostras.push(amostra);
  res.status(201).json({ mensagem: 'Amostra criada com sucesso!', amostras });
}

export function listarAmostras(req, res) {
  res.json(amostras);
}

export function atualizarAmostra(req, res) {
  const { indice } = req.params;
  amostras[indice] = req.body;
  res.json({ mensagem: 'Amostra atualizada com sucesso!' });
}

export function deletarAmostra(req, res) {
  const { indice } = req.params;
  amostras.splice(indice, 1);
  res.json({ mensagem: 'Amostra deletada com sucesso!' });
}
