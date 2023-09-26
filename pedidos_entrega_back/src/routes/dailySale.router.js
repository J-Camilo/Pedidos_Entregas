import { Router } from "express";
import { getSales, CreateSales, IdgetSales, DeleteSalesId, CountController, UpdateSales } from "../controller/dailySale.controller";
import { verifyToken } from "../Verify/Verify.token";
const router = Router();

//routers

router.get('/sales', verifyToken, getSales);
router.post('/sales', verifyToken, CreateSales);
router.get('/sales/count', verifyToken, CountController);
router.get('/sales/:id', verifyToken, IdgetSales);
router.delete('/sales/:id', verifyToken, DeleteSalesId);
router.put('/sales/:id', verifyToken, UpdateSales);

export default router;
