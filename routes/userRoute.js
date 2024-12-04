import { createUser,loginUser } from "../controllers/userController.js";
import express from 'express';
const routeUser=express.Router();
routeUser.post('/create',createUser);
routeUser.post('/login',loginUser);
export default routeUser;