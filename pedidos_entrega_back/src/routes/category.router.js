import { Router } from "express";
import { verifyToken } from "../Verify/Verify.token";
import {CreateCategory, getCategory, IdgetCategory, DeleteCategoryId, CountController, UpdateCategory} from "../controller/category.controller";
const router = Router();

//routers
router.get('/category', getCategory );
router.post('/category', verifyToken, CreateCategory);
router.get('/category/count', CountController );
router.get('/category/:id', IdgetCategory );
router.delete('/category/:id',verifyToken, DeleteCategoryId );
router.put('/category/:id',verifyToken, UpdateCategory );

export default router;