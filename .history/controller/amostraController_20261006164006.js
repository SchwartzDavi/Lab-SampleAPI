import * as repository from '../repository/amostraRepository.js';

export function cadastrarAmostra(req, res) {
    const amostra = req.body;
    repository.cadastrarAmostra(amostra);
    res.status(201).json({ mensagem: 'Amostra criada!' });
}

export function listarAmostras(req, res) {
    const amostras = repository.listarAmostras();
    res.json(amostras);
}

export function buscarAmostra(req, res) {
    const { indice } = req.params;
    const amostra = repository.buscarPorIndice(indice); 
    
    if (!amostra) {
        return res.status(404).json({ mensagem: 'Amostra não encontrada!' });
    }
    
    res.json(amostra);
}

export function excluirAmostra(req, res) {
    const { indice } = req.params;
    repository.excluirAmostra(indice); // ou o nome correto da função de exclusão no seu repository
    res.json({ mensagem: 'Amostra deletada com sucesso!' });
}