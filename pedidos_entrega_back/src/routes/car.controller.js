import { Router } from "express";
import {getCar, CreateCar, IdgetCar, DeleteCarId, CountController, UpdateCar} from "../controller/car.controller";
const router = Router();

//routers
router.get('/car', getCar );
router.post('/car', CreateCar );
router.get('/car/count', CountController );
router.get('/car/:id', IdgetCar );
router.delete('/car/:id', DeleteCarId );
router.put('/car/:id', UpdateCar );

export default router;
