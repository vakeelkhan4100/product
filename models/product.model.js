import mongoose from "mongoose";
const prodect = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId, ref: 'users'
    },
    is_popular: {
        type: Boolean,
        default: 0
    },
    description: {
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
const Product = mongoose.model("product", prodect);
export default Product;