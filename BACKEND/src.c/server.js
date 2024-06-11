import express from "express";
import mongoose from "mongoose";
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import morgan from 'morgan'
import md5 from "md5"
import cors from 'cors'
dotenv.config();

const server = express();
server.use(express.json());
server.use(morgan("combined"))
const Port = process.env.PORT || 3001;

server.use(cors({
    origin: 'http://localhost:3000'
}))

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const studentSchema = new mongoose.Schema({
    name: String,
    score: Number,
    dateOfBirth: Date,
})
const StudentModel = mongoose.model("student", studentSchema)

const userSchema = new Schema({
    email: String,
    username: String,
    password: String,
})

const registerSchema = mongoose.model("registers", userSchema)

const logins = new Schema({
    username: String,
    password: String,
})
const loginSchema = mongoose.model("logins", logins)

server.post("/student", async (req, res) => {
    const { skip, limit } = req.body;
    const size = 10; // Page size
    try {
        const totalStudent = await StudentModel.aggregate([
            { $match: { score: { $gt: 0 } } },
            { $count: "totalCount" }
        ]);
        const students = await StudentModel.find({
            score: {
                $gt: 30,
            }
        }).sort({ score: -1, name: -1, dateOfBirth: -1 }).skip(skip * size).limit(10)
        console.log("🚀 ~ server.post ~ students:", students)

        const totalPages = Math.ceil(totalStudent[0].totalCount / size)
        // find 10 thang co diem > 20
        // tinh duoc tong co bao nhieu thang cos diem > 20 ==> moi trang 10 thang (page - size)
        res.json({
            data: students,
            code: 200,
            messaege: "success",
            totalPages,
        })
    } catch (error) {
        console.log(error)
        res.json({
            code: 404,
            message: "success"
        })
    }
})

server.use(express.json())

server.post("/registers", async (req, res) => {
    try {
        const { email, username, password } = req.body;
        if (!email) throw new Error("email is required")
        if (!username) throw new Error("username is required")
        if (!password) throw new Error("password is required")

        // md5 : ma hoa mat khau
        const passWordMd5 = md5(password);
        console.log(passWordMd5);
        const newUser = await registerSchema.create({
            email,
            username,
            password: passWordMd5
        })

        await newUser.save()
        return res.status(200).send("Register successfully!")
    } catch (error) {
        console.log("error :>>", error);
        res.status(404).send(error.message)
    }
})

server.use(express.json())
server.post("/logins", async (req, res) => {
    try {
        const username = req.body.username;
        let password = req.body.password;

        if (username == "" || password == "") {
            res.json({
                code: 400,
                message: "tai khoan hoac mat khau chua dien"
            })
        }

        const passwordSchema = md5(password);
        console.log(passwordSchema);
        const currentEmailLogin = await loginSchema.findOne({ username: username, password: passwordSchema });
        if (currentEmailLogin == null) {
            res.json({
                code: 400,
                message: "email hoac mat khau khong hop le"
            })
        } else {
            res.json({
                code: 200,
                message: "dang nhap thanh cong"
            })
        }

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
    .then(server.listen(Port, () => {
        console.log(`server is running ${Port}`)
    }))