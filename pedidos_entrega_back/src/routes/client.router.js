import { Router } from "express";
import {getClient, CreateClient, IdgetClient, DeleteClientId, CountController, UpdateClient} from "../controller/client.controller";
const router = Router();

//routers
router.get('/client', getClient );
router.post('/client', CreateClient );
router.get('/client/count', CountController );
router.get('/client/:id', IdgetClient );
router.delete('/client/:id', DeleteClientId );
router.put('/client/:id', UpdateClient );

export default router;
