import { Router } from "express";
import {getOrderDetail, CreateOrderDetail, IdgetOrderDetail, DeleteOrderDetail, CountController, UpdateOrderDetail} from "../controller/detailsOrder.controller";
const router = Router();

//routers
router.get('/orderDetail', getOrderDetail );
router.post('/orderDetail', CreateOrderDetail );
router.get('/orderDetail/count', CountController );
router.get('/orderDetail/:id', IdgetOrderDetail );
router.delete('/orderDetail/:id', DeleteOrderDetail );
router.put('/orderDetail/:id', UpdateOrderDetail );

export default router;  
