import { Router } from "express";
import {getOrder, CreateOrder, IdgetOrder, DeleteOrder, CountController} from "../controller/order.controller";
import { verifyToken } from "../Verify/Verify.token";
const router = Router();

//routers
router.get('/order', verifyToken, getOrder );
router.post('/order', verifyToken, CreateOrder );
router.get('/order/count', CountController );
router.get('/order/:id', IdgetOrder );
router.delete('/order/:id', DeleteOrder );
// router.put('/order/:id', UpdateOrder ); AFK

export default router;  
 