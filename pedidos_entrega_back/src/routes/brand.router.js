import { verifyToken } from "../Verify/Verify.token";
import { Router } from "express";
import {getBrand, CreateBrand, IdgetBrand, DeleteBrandId, CountController, UpdateBrand} from "../controller/brand.controller";
const router = Router();

//routers
router.get('/brand', getBrand);
router.post('/brand', verifyToken, CreateBrand);
router.get('/brand/count', CountController );
router.get('/brand/:id', IdgetBrand );
router.delete('/brand/:id',verifyToken, DeleteBrandId );
router.put('/brand/:id',verifyToken, UpdateBrand );
 
export default router;