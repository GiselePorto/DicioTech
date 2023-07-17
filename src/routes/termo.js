import express from "express";
import TermoController from "../controllers/termoControllers.js";

// importando Dependências
const router = express.Router();

router
  .get("/", TermoController.getAllTermos)
  .post("/", TermoController.createTermos)
  .put("/:id", TermoController.updateTermos)
  .delete("/:id", TermoController.deleteTermos)
  .delete("/",TermoController.deleteAllTermos)
  .get("/:id", TermoController.getByIdTermos)
  .get("/area/:area", TermoController.getTermosByArea)
  .get("/inicial/:inicial", TermoController.getTermosByInicial);

export default router;
