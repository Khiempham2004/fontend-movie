import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import morgan from 'morgan';


import userController from './controler/user.controler.js';
import { asyncCatch } from './utils/trycacth.js';
import { authen } from './utils/authen.js'
import authController from './controler/auth.controller.js';

dotenv.config();

const app = express();
const PORT = process.env.Port || 3001;
app.use(express.json());
app.use(morgan('combined')); // loger 

app.use("/users" , userController);
app.use("/auth" , authController)


app.use("/index" , (req, res) => {
    res.status(200).send("I want to Learn web programming at Mindx! ")
})

mongoose
    .connect('mongodb://127.0.0.1:27017/fullStack')
    .then(app.listen(PORT, () => { console.log(`server is running ${PORT}`) }));
