import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt';
import _ from 'lodash';
import userModel from '../model/user.model.js';
import md5 from 'md5';

export const registers = async (req, res) => {
    try {
        const { email, username, password } = req.body;
        if (!email) throw new Error("email is required")
        if (!username) throw new Error("username is required")
        if (!password) throw new Error("password is required")

        // md5 : ma hoa mat khau
        const passWordMd5 = md5(password);
        console.log(passWordMd5);
        const newUser = await userModel.create({
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
}
export const login = async (req, res) => {
    const { username, password } = req.body;

    try {
        const userName = await userModel.findOne({ username: username });
        const passWord = await userModel.findOne({ password: password });

        const userLogin = userName || passWord;

        if (!userLogin) {
            return res.status(404).send("Email or phone is not correct!");
        }

        const passwordMatch = await bcrypt.compare(password, userLogin.password);
        if (!passwordMatch) {
            return res.status(401).send("Email or phone is not correct!");
        }

        const payload = {
            id: userLogin._id.toString(),
            namePlayer: userLogin.namePlayer,
            email: userLogin.email,
            phone: userLogin.phone,
            roles: userLogin.roles,
        }

        const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_TOKEN, {
            expiresIn: "1h",
        });

        const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_TOKEN, {
            expiresIn: "1d",
        });

        res.status(200).json({ accessToken, refreshToken });
    } catch (error) {
        console.error("Error during login:", error);
        res.status(500).send("An error occurred during login.");
    }
}
