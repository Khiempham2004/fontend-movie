import  Express  from "express";
import * as RegisterComponent from '../Components/Register'
import * as authService from '../services/auth.js'
const router = Express.Router();

router.post("/Register" , RegisterComponent.register)

export default router;