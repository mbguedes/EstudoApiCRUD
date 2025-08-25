import express from 'express';
import { getAllProducts, getProductById, createProduct, deleteProduct, updateProduct } from '../Controller/productController';

export const productRoutes = express.Router();

productRoutes.get('/', getAllProducts);
productRoutes.get('/:id', getProductById);
productRoutes.post('/', createProduct);
productRoutes.delete('/:id', deleteProduct);
productRoutes.put('/:id', updateProduct);   