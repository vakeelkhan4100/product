import Express from "express";
import { create, getall, remove, update } from "../controllers/sub_category.controller.js";
const sub_cate = Express.Router()
sub_cate.route("/sub_cate/create").post(create)
sub_cate.route("/sub_cate/get-all").get(getall)
sub_cate.route("/sub_cate/update").put(update)
sub_cate.route("/sub_cate/remove").post(remove)
export default sub_cate