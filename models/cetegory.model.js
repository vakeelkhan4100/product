import mongoose from "mongoose";
const cotegory = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ["Active", "Deactive"],
        default: "Active"
    },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
}) 

const cetUser = mongoose.model("cotegiry", cotegory)
export default cetUser