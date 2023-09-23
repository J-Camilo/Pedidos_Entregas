import { Router } from "express";
import {getMuni, IdgetMuni, CountController} from "../controller/munipality.controller";
const router = Router();

//routers
router.get('/municipality', getMuni );
// router.post('/municipality', CreateMuni );
router.get('/municipality/count', CountController );
router.get('/municipality/:id', IdgetMuni );
// router.delete('/municipality/:id', DeleteMuniId );
// router.put('/municipality/:id', UpdateMuni );

export default router;
