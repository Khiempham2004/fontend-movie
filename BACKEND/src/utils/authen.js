import jwt from "jsonwebtoken";

export const authen = async (req, res, next) => {
    // Xác thực người dùng qua token hoặc email + password ...
    const token = req.headers?.authorization?.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: "Unauthorized: Missing token" });
    }
    console.log("token :>>", token);
    // token verify
    const payload = jwt.verify(token, process.env.jwt)
    console.log("payload :>>", payload);
    // Gắn user vào request
    req.user = payload.user;
    next();
}