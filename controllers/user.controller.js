import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import User from "../models/user.model.js"
import user from "../models/user.model.js";
export const signup = async (req, res) => {
   try {
      const IsEmailExist = await User.findOne({ email: req.body.email })
      const IsnumberExist = await User.findOne({ number: req.body.number })
      if (IsEmailExist) {
         res.send({
            status: false,
            msg: "Email already exist.",
            data: {}
         });
         return;
      } else if (IsnumberExist) {
         res.send({
            status: false,
            msg: "Mobile already exist.",
            data: {}
         });
         return;
      }
      else {
         const passwordHash = await bcrypt.hash(req.body.password, 10)
         req.body.password = passwordHash
         var user = await User.create(req.body);
         if (user) {
            user.token = await jwt.sign({ time: Date(), userId: user._id }, "deshwali")
            res.send({
               status: true,
               msg: "Signup Successfully.",
               data: user
            });
         }
         // user.token = token
      }
   }
   catch (err) {
      res.status(500).send({
         status: false,
         msg: "Something wrong with request.",
         data: err
      })
   }
}
export const login = async (req, res) => {
   var getUserData = await User.findOne({ email: req.body.email });
   if (getUserData) {
      let checkPass = await bcrypt.compare(req.body.password, getUserData.password)
      if (checkPass) {
         getUserData.token = await jwt.sign({ time: Date(), userId: getUserData._id }, "coaching")
         res.send({
            status: true,
            msg: "Login Succesfully",
            data: getUserData
         })
      } else {
         res.send({
            status: false,
            msg: "Invalid Password given.",
            data: {}
         })
      }
   } else {
      res.send({
         status: false,
         msg: "Email not found",
         data: {}
      })
   }
}

export const resendotp = async (req, res) => {
   try {
      var otp = 1234  // Math.floor(1000 + Math.random() * 9000);
      req.body.otp = otp
      var update = await user.findByIdAndUpdate({ _id:req.body.id},req.body)
      if(update){
         res.send({
            status:true,
            msg:"otp send success",
            data:update
         })
      }else{
         res.send({
            status:false,
            msg:"otp send unsuccess",
            data:{}
         })
      }
   } catch (error) {
      res.send({
         status:false,
         msg:"internal error",
         data:error
      })
   }
}