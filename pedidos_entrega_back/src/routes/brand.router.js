import { Router } from "express";
import {getBrand, CreateBrand, IdgetBrand, DeleteBrandId, CountController, UpdateBrand} from "../controller/brand.controller";
const router = Router();

//routers
router.get('/brand', getBrand);
router.post('/brand',  CreateBrand);
router.get('/brand/count', CountController );
router.get('/brand/:id', IdgetBrand );
router.delete('/brand/:id', DeleteBrandId );
router.put('/brand/:id', UpdateBrand );
 
export default router;