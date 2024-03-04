import express from 'express'
import mongoose from 'mongoose'
import bcrypt, { hash } from 'bcrypt'
import dotenv from 'dotenv'
const app = express();
import BlogModel from './user.model.js';

dotenv.config();
app.use(express.json());
app.post("/registers", async (req, res) => {
    try {

        const { username, password } = req.body;
        console.log(username);
        if (!username) throw new Error("username is required")
        if (!password) throw new Error("password is required")

        // Hasing
        const saltRounds = 10;
        const salt = await bcrypt.genSalt(saltRounds);
        const handlePassword = await bcrypt.hash(password, salt)

        const newUser = await BlogModel({ username, password: handlePassword })

        await newUser.save()
        return res.status(200).send("Register successfully!")
    } catch (error) {
        console.log("error :>>", error);
        res.status(404).send(error.message)
    }
})

app.post("/logins", async (req, res) => {
    try {
        // Validation
        const { username, password } = req.body;
        if (!username) throw new Error("Username is required!");
        if (!password) throw new Error("Password is required!");

        // Hashing + compare
        const user = await BlogModel.findOne({ username });
        const result = await bcrypt.compare(password, user.password);
        if (!result) {
            throw new Error("Username or password not correct!");
        }

        return res.status(200).send("Login successfully!");
    } catch (error) {
        console.log("error :>>", error);
        res.json({
            code: 500,
            message: "success"
        })
    }
})

mongoose
    .connect('mongodb://127.0.0.1:27017/fullStack')
    .then((app.listen(3000, () => {
        console.log("Server is running!");
    }))
    );


