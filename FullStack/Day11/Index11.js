import express from "express";
import mongoose, { connect } from "mongoose";
import bcrypt from 'bcrypt';
import bodyPaser from 'body-parser';
import dotenv from 'dotenv';

dotenv.config();

const server = express();
server.use(express.json());
// server.use(morgan("combined"))

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

const userModel = mongoose.model("register", userSchema)

const loginSchema = new Schema({
    email: String,
    password: String,
})

const loginModel = mongoose.model("login", loginSchema)

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

const saltRounds = 10;
server.use(express.json())

server.post("/register", async (req, res) => {
    try {
        const { email, username, password } = req.body;
        console.log(username);
        if (!username) throw new Error("username is required")
        if (!password) throw new Error("password is required")
        if (!email) throw new Error("email is required")


        // Hasing
        const saltRounds = 10;
        const salt = await bcrypt.genSalt(saltRounds);
        const handlePassword = await bcrypt.hash(password, salt)

        const newUser = await userModel.create({ email, username, password: handlePassword })

        await newUser.save()
        return res.status(200).send("Register successfully!")
    } catch (error) {
        console.log("error :>>", error);
        res.status(404).send(error.message)
    }
})

server.use(express.json())
server.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log(req.body);
        if (!email || !password) {
            throw new Error("Email & password is required!")
        }

        const currentEmailLogin = await loginModel.findOne({ email: email });
        console.log(currentEmailLogin);

        if (!currentEmailLogin) throw new Error("email is required");

        const saltRounds = 10;
        const salt = bcrypt.genSaltSync(saltRounds);
        const hash = bcrypt.hashSync(password, salt);
        const userLogin = await bcrypt.compare(currentEmailLogin.password, hash, function (err, result) {
            // result == true 
            if (!err) throw new Error("error comparing password")
            // console.log("result :>>", result);
            if (!result) throw new Error("result is required!")
        });

        return res.status(200).send("Login succesfully")


    } catch (error) {
        console.log("error :>>", error);
        res.json({
            code: 500,
            message: "success"
        })
    }
})

server.post("/upload", async (req, res) => {
    const [skip , limit] = req.body;
    try {
        const size = 10;
        const uploadImage = await studentSchema.find({
            
        })
    } catch (error) {

    }
})

mongoose
    .connect('mongodb://127.0.0.1:27017/fullStack')
    .then(server.listen(3002, () => { console.log("server is running") }));