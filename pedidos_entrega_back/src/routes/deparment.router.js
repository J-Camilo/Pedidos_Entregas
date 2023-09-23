import { Router } from "express";
import {getDep, IdgetDep, CountController} from "../controller/deparment.controller";
const router = Router();

//routers
router.get('/deparment', getDep );
// router.post('/deparment', CreateDep );
router.get('/deparment/count', CountController );
router.get('/deparment/:id', IdgetDep );
// router.delete('/deparment/:id', DeleteDepId );
// router.put('/deparment/:id', UpdateDep );

export default router;
