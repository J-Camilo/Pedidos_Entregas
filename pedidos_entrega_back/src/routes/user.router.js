import { Router } from "express";
import {getUser, CreateUser, IdgetUser, DeleteUserId, CountController, UpdateUser} from "../controller/users.controller";
import { verifyToken } from "../Verify/Verify.token";
const router = Router();

//routers
router.get('/user', verifyToken,getUser );
router.post('/user',verifyToken, CreateUser );
router.get('/user/count',verifyToken, CountController );
router.get('/user/:id',verifyToken, IdgetUser );
router.delete('/user/:id',verifyToken, DeleteUserId );
router.put('/user/:id',verifyToken, UpdateUser );

export default router;
