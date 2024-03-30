import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt';
import _ from 'lodash';
import userModel from '../model/user.model.js';

export const register = async (req, res, next) => {
    const { username, email, password } = req.body;

    const salt = await bcrypt.genSalt(10);
    const handlePassword = await bcrypt.hash(password, salt);

    const users = await userModel.create({
        username,
        email,
        password: handlePassword,
        roles: ["users"]
    });

    res.status(200).send(users);
}

export const login = async (req, res, next) => {
    const { username, email, password } = req.body;

    const user = await userModel.findOne({
        username: username,
        email: email
    });


    const result = bcrypt.compare(password, user.password);

    if (!result) {
        throw new Error("username , email or password not correct!");
    }

    const payroad = {
        id: user._id.toString(),
        username: user.username,
        email: user.email,
        roles: user.roles,
    }

    const accessToken = jwt.sign(payroad, process.env.JWT, { expiresIn: "2m" });
    console.log("accessToken :>>", accessToken);

    const refreshToken = jwt.sign(payroad, process.env.JWT_REFRESH_TOKEN, {
        expiresIn: "1d",
    });

    res.status(200).send({ accessToken, refreshToken })
};
