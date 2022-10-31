import Express from "express";
import { imageUpload } from "../services/images.service.js";
import { create } from "../controllers/product.controller.js";
 export const product_data = Express.Router()
product_data.route("/product/create").post(imageUpload.array('image', 10), create)
 