import mongoose from "mongoose";

const loginData = new mongoose.Schema({
    username: {
        type: String,
        unique: true
    },
    password: {
        type: String
    }
})

export default mongoose.model("loginData", loginData)