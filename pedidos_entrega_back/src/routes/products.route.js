import { Router } from "express";
import { verifyToken } from "../Verify/Verify.token";
import { CreateProducts, getProducts, IdgetProducts, DeleteProductId, CountController, UpdateProduct } from "../controller/products.controller";
const router = Router();

//routers
router.get('/products', getProducts);
router.post('/products', verifyToken, CreateProducts);
router.get('/products/count', CountController);
router.get('/products/:id', IdgetProducts);
router.delete('/products/:id', verifyToken, DeleteProductId);
router.put('/products/:id', verifyToken, UpdateProduct); 

export default router;
