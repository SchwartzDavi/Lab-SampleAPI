import express from 'express';
import { criarAmostra } from '../controller/amostraController.js';

const router = express.Router();

router.post('/', cadastrarAmostra);

export default router;
