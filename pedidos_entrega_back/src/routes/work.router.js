import { Router } from "express";
import {getWorkers, CreateWorkers, IdgetWorkers, DeleteWorkersId, CountController, UpdateWorkers} from "../controller/work.controller";
const router = Router();

//routers
router.get('/work/workers', getWorkers);
router.post('/work/workers',  CreateWorkers);
router.get('/work/workers/count', CountController );
router.get('/work/workers/:id', IdgetWorkers );
router.delete('/work/workers/:id', DeleteWorkersId );
router.put('/work/workers/:id', UpdateWorkers );
 
export default router;