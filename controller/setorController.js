import * as repository from '../repository/setorRepository.js';

export function cadastrarSetor(req, res) {
    const setor = req.body;
    repository.cadastrarSetor(setor);
    res.status(201).json({ mensagem: 'Setor criado!' })
    
}

export function listarSetores(req, res) {
    const setores = repository.listarSetores();
    res.status(200).json(setores);
}

export function buscarSetor(req, res) {
    const { indice } = req.params;

    const setor = repository.buscarPorIndice(indice);

    if (!setor) {
        return res.status(404).json({
            mensagem: 'Setor não encontrado!'
        });
    }

    res.status(200).json(setor);
}


export function atualizarSetor(req, res) {
    const indice = Number(req.params.indice);
    const setor = repository.buscarPorIndice(indice);

    if (!setor || !Number.isInteger(indice) || indice < 0) {
        return res.status(404).json({
            mensagem: "Setor não encontrado!"
        });
    }

    const { nome, sigla, responsavel, ramal } = req.body;

    if (nome !== undefined) setor.nome = nome;
    if (sigla !== undefined) setor.sigla = sigla;
    if (responsavel !== undefined) setor.responsavel = responsavel;
    if (ramal !== undefined) setor.ramal = ramal;

    return res.status(200).json(setor);
};
   




export function excluirSetor(req, res) {
    const { indice } = req.params;
    repository.excluirSetor(indice); 
    res.status(200).json({ mensagem: 'Setor deletado com sucesso!' });
}