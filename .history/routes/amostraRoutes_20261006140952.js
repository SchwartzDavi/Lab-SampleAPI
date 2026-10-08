import express from 'express';
import { criarProduto } from '../controller/produtoController.js';

const router = express.Router();

router.post('/', cadastrarAmostra);

export default router;
