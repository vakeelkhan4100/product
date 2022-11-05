import { signup, login, resendotp } from "../controllers/user.controller.js";
import Express from "express";
export const user = Express.Router()
user.route("/user/signup").post(signup);
user.route("/user/login").get(login);
user.route("/user/resendotp").post(resendotp);
