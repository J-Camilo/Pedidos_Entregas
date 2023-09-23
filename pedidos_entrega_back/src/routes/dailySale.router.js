import { Router } from "express";
import {getSales, CreateSales, IdgetSales, DeleteSalesId, CountController, UpdateSales} from "../controller/dailySale.controller";
const router = Router();

//routers
router.get('/sales', getSales );
router.post('/sales', CreateSales );
router.get('/sales/count', CountController );
router.get('/sales/:id', IdgetSales );
router.delete('/sales/:id', DeleteSalesId );
router.put('/sales/:id', UpdateSales );

export default router;
