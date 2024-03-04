import mongoose from "mongoose";


const Schema = mongoose.Schema;

const usersLogin = new Schema({
    username: String,
    password: String,
})

const BlogModel = mongoose.model("username", usersLogin);

export default BlogModel;