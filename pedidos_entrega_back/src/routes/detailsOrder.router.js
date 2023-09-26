import { Router } from "express";
import { getOrderDetail, CreateOrderDetail, IdgetOrderDetail, DeleteOrderDetail, CountController, UpdateOrderDetail } from "../controller/detailsOrder.controller";
import { verifyToken } from "../Verify/Verify.token";
const router = Router();

//routers
router.get('/orderDetail', getOrderDetail);
router.post('/orderDetail', verifyToken, CreateOrderDetail);
router.get('/orderDetail/count', CountController);
router.get('/orderDetail/:id', verifyToken, IdgetOrderDetail);
router.delete('/orderDetail/:id', verifyToken, DeleteOrderDetail);
router.put('/orderDetail/:id', verifyToken, UpdateOrderDetail);

export default router;  
    