import mongoose from "mongoose";
const schema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    number: {
        type:String,
        required: false
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: false
    },
    token: {
        type: String,
        required: false
    },
    firstname: {
        type: String,
        required: false
    },
    lastname: {
        type: String,
        required: false
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