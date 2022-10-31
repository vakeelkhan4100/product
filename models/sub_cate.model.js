import mongoose from "mongoose";
const sub = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    u: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users"
    },
    cateId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "cotegiris"
    },
    status: {
        type: String,
        enum: ["Active", "deActive"],
        default: "Active"
    },
    createAt: { type: Date, default: Date.now },
    updateAt: { type: Date, default: Date.now }
})
const row = mongoose.model("sub_cate", sub)
export default row