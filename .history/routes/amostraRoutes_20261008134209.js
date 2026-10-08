import express from "express";
import * as controller from "../controller/amostraController.js";

const router = express.Router();

router.post("/", controller.cadastrarAmostra);
router.get("/", controller.listarAmostras);
router.delete("/:indice", controller.excluirAmostra);
router.get("/:indice", controller.buscarAmostra);

export default router;