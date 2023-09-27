import { Router } from "express";
import {getClient, CreateClient, IdgetClient, DeleteClientId, CountController, UpdateClient} from "../controller/client.controller";
import { verifyToken } from "../Verify/Verify.token";
const router = Router();

//routers
router.get('/client', verifyToken, getClient );
router.post('/client', verifyToken, CreateClient );
router.get('/client/count', CountController );
router.get('/client/:id',verifyToken, IdgetClient );
router.delete('/client/:id',verifyToken, DeleteClientId );
router.put('/client/:id',verifyToken, UpdateClient );

export default router;
 