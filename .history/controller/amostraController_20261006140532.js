const amostras = [];

export function ccadastrarAmostra(req, res) {
  const produto = req.body;
  produtos.push(produto);
  res.status(201).json({ mensagem: 'Produto criado com sucesso!', produtos });
}

export function listarProdutos(req, res) {
  res.json(produtos);
}

export function atualizarProduto(req, res) {
  const { indice } = req.params;
  produtos[indice] = req.body;
  res.json({ mensagem: 'Produto atualizado com sucesso!' });
}

export function deletarProduto(req, res) {
  const { indice } = req.params;
  produtos.splice(indice, 1);
  res.json({ mensagem: 'Produto deletado com sucesso!' });
}
