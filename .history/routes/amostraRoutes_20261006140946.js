
import express from 'express';
import { criarProduto } from '../controller/produtoController.js';

const router = express.Router();

router.post('/', criarProduto);

export default router;
