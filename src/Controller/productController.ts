import { Request, Response } from 'express';
import { Product, products } from '../Model/productModel';


export const getAllProducts = (req: Request, res: Response) => {
    res.json(products);
};

export const getProductById = (req: Request, res: Response) => {

        const id = Number(req.params.id);

        const FoundProduct = products.find(product => product.id === id);

        if (!FoundProduct){
        return res.status(404).json({ error: "Produto não encontrado, tente outro código." });
    } 
    res.json(FoundProduct);
}

export const createProduct = (req: Request, res: Response) => {
    const { name, price, description } = req.body;
    const id = Date.now();
    const newProduct: Product = { id, name, price, description };
    products.push(newProduct);
    res.status(201).json(newProduct);
};

export const deleteProduct = (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const FoundProduct = products.findIndex(product => product.id === id);
    
    if(FoundProduct === -1){
        return res.status(404).json({ error: "Produto não encontrado, tente outro código." });
    }
    products.splice(FoundProduct, 1);
    res.status(204).send();
}

export const updateProduct = (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const productIndex = products.findIndex(product => product.id === id);
    
    if(productIndex === -1){
        return res.status(404).json({ error: "Produto não encontrado, tente outro código." });
    }

    const { name, price, description } = req.body;
    products[productIndex] = { id, name, price, description };
    res.json(products[productIndex]);
};