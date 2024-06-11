import mongoose from "mongoose";

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const userSchema = new Schema({
    id: ObjectId,
    username: String,
    email: String,
    password: String,
    roles: [String]
})

const userModel = mongoose.model("user", userSchema);

export default userModel;