
import express from "express";
import * as controller from "../controller/setorController.js";

const router = express.Router();

router.post("/", controller.cadastrarSetor);
router.get("/", controller.listarSetores);
router.patch("/:indice", controller.atualizarSetor);
router.delete("/:indice", controller.excluirSetor);
router.get("/:indice", controller.buscarSetor);

export default router;