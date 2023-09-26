import { Router } from "express";
import {getWorkers, CreateWorkers, IdgetWorkers, DeleteWorkersId, CountController, UpdateWorkers} from "../controller/work.controller";
import { verifyToken } from "../Verify/Verify.token";
const router = Router();

//routers
router.get('/work/workers', verifyToken, getWorkers);
router.post('/work/workers', verifyToken, CreateWorkers);
router.get('/work/workers/count',verifyToken, CountController );
router.get('/work/workers/:id',verifyToken, IdgetWorkers );
router.delete('/work/workers/:id',verifyToken, DeleteWorkersId );
router.put('/work/workers/:id',verifyToken, UpdateWorkers );
 
export default router; 