import express from "express";
import mongoose from "mongoose";
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import morgan from 'morgan'
import md5 from "md5";
// import cors from 'cors';
import jwt from 'jsonwebtoken';
import userModel from './model/user.model.js'
dotenv.config();

const server = express();
server.use(express.json());
server.use(morgan("combined"))
const Port = process.env.PORT || 3001;

// server.use(cors({
//     origin: 'http://localhost:3000'
// }))

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

// const studentSchema = new mongoose.Schema({
//     name: String,
//     score: Number,
//     dateOfBirth: Date,
// })
// const StudentModel = mongoose.model("student", studentSchema)



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



mongoose
    .connect('mongodb://127.0.0.1:27017/fullStack')
    .then(server.listen(Port, () => {
        console.log(`server is running ${Port}`)
    }))