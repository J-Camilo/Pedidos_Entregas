import { Router } from "express";
import {getDetailCar, CreateDetailCar, IdgetDetailCar, DeleteDetailCar, CountController, UpdateDetailCar} from "../controller/detailsCar.controller";
const router = Router();

//routers
router.get('/detailsCar', getDetailCar );
router.post('/detailsCar', CreateDetailCar );
router.get('/detailsCar/count', CountController );
router.get('/detailsCar/:id', IdgetDetailCar );
router.delete('/detailsCar/:id', DeleteDetailCar );
router.put('/detailsCar/:id', UpdateDetailCar );

export default router;  
