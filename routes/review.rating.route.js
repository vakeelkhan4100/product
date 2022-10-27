import Express from "express";
import { create, get_data } from "../controllers/review.rating.controller.js";
export const reviewrating = Express.Router()
reviewrating.route("/review-rating/create").post(create)
reviewrating.route("/review-rating/get").get(get_data)

