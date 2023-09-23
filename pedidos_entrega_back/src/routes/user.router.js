import { Router } from "express";
import {getUser, CreateUser, IdgetUser, DeleteUserId, CountController, UpdateUser} from "../controller/users.controller";
const router = Router();

//routers
router.get('/user', getUser );
router.post('/user', CreateUser );
router.get('/user/count', CountController );
router.get('/user/:id', IdgetUser );
router.delete('/user/:id', DeleteUserId );
router.put('/user/:id', UpdateUser );

export default router;
