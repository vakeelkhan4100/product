import express from "express"
import { create, getall, remove, update } from "../controllers/category.controoler.js"
const category = express.Router()
category.route("/category/create").post(create)
category.route("/category/getall").get(getall)
category.route("/category/update").put(update)
category.route("/category/remove").post(remove)
export default category