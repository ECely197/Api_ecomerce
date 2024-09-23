import express from "express";
import * as pedidocontroller from "../controllers/pedidocontroller.js";

const router = express.Router();

router.get('/api/pedido', pedidocontroller.getAll);
router.get('/api/pedido/:id', pedidocontroller.getById);
router.post('/api/pedido', pedidocontroller.create);
router.put('/api/pedido/:id', pedidocontroller.update);
router.delete('/pedido/:id', pedidocontroller.softDelete);

export default router;


