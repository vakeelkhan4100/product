import mongoose from "mongoose";
const schema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    number: {
        type:String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    token: {
        type: String,
        required: false
    },
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email_varified:{
       type:Boolean,
       required:false,
       default:false
    },
    number_verified:{
        type:Boolean,
        required:false,
        default:false
    },
    otp:{
        type:Number,
        required:false
    }

})
const user = mongoose.model("user", schema)
export default user