import { Router } from "express";
import {CreateCategory, getCategory, IdgetCategory, DeleteCategoryId, CountController, UpdateCategory} from "../controller/category.controller";
const router = Router();

//routers
router.get('/category', getCategory );
router.post('/category',  CreateCategory);
router.get('/category/count', CountController );
router.get('/category/:id', IdgetCategory );
router.delete('/category/:id', DeleteCategoryId );
router.put('/category/:id', UpdateCategory );

export default router;