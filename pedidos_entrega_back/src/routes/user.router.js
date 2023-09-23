import { Router } from "express";
import {CreateProducts, getProducts, IdgetProducts, DeleteProductId, CountController, UpdateProduct} from "../controller/products.controller";
const router = Router();

//routers
router.get('/products', getProducts );
router.post('/products', CreateProducts );
router.get('/products/count', CountController );
router.get('/products/:id', IdgetProducts );
router.delete('/products/:id', DeleteProductId );
router.put('/products/:id', UpdateProduct );

export default router;
