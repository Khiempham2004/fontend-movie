import express from "express";
import { asyncCatch } from "../utils/trycacth.js";
import {
    validateLogin,
    validateRegister
} from "../validation/auth.validation.js";
import { register, login } from "../service/auth.service.js";


const authController = express.Router();

authController.post("/register", asyncCatch(validateRegister), asyncCatch(register));

authController.post("/login", asyncCatch(validateLogin), asyncCatch(login));




export default authController;