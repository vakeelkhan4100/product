import { signup, login, resendotp, insertbulkusers } from "../controllers/user.controller.js";
import Express from "express";
export const user = Express.Router()
user.route("/user/signup").post(signup);
user.route("/user/login").get(login);
user.route("/user/resendotp").post(resendotp);
user.route("/user/import").post(insertbulkusers) 

