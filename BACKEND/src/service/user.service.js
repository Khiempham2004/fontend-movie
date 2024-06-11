import userModel from "../model/user.model.js";

export const getmeService = async (req, res, next) => {
    const user = await userModel.findById(req.user.id );
    console.log("user :>>" , req.user);
    res.status(200).send(user)
}

export const getAllUserService = async (req, res, next) => {
    const users = await userModel.find({});
    res.status(200).send(users)
}