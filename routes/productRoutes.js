import express from 'express';
import * as productController from '../controllers/productController.js';

const router = express.Router();

router.get('/api/product', productController.getAll);
router.get('/api/product/:id', productController.getById);
router.post('/api/product', productController.create);
router.patch('/api/product/:id', productController.update);
router.delete('/api/product/:id', productController.destroy);

export default router;
