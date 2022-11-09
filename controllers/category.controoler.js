import jwt from "jsonwebtoken"
 import cetUser from "../models/cetegory.model.js"
export const create = async (req, res) => {
    // try {
        const exits = await  cetUser.findOne({ name: req.body.name })
        res.send("he")
    //     if (exits) {
    //         res.send("name is alerdy exits")
    //     }
    //     else {
    //         var a = await cetUser.create(req.body)
    //         a.token = await jwt.sign({ time: Date(), userId: a.id }, "jamana")
    //         res.send({
    //             status: true,
    //             msg: "signup is success",
    //             data: a
    //         })
    //         res.send({
    //             status: false,
    //             msg: "signup is not success",
    //             data: {}
    //         })
    //     }
    // } catch (err) {
    //     res.send({
    //         status: false,
    //         msg: "internal error",
    //         data: err
    //     })
    // }
}
export const getall = async (req, res) => {
    try {
        const haha = await  cetUser.find({ status: "Active" })
        if (haha) {
            res.send({
                status: true,
                msg: "login is success",
                data: haha
            })
        }
        else {
            res.send({
                status: false,
                msg: "login is not success",
                data: []
            })
        }
    } catch (error) {
        res.status(500).send({
            status: false,
            msg: "internal error",
            data: error
        })
    }
}
export const update = async (req, res) => {
    try {
        const lol = await cetUser.findByIdAndUpdate({ _id: req.body.id }, req.body)
        if (lol) {
            res.send({
                status: true,
                msg: "your fetch succesfully",
                data: lol
            })
            return;
        }
        else {
            res.send({
                status: false,
                msg: "data is not found",
                data: {}
            })
            return;
        }
    } catch (error) {
        res.send({
            status: false,
            msg: "internal err",
            data: err
        })
    }
}
export const remove = async (req, res) => {
    try {
        const fun = await cetUser.findByIdAndDelete({ _id: req.body.id })
        if (fun) {
            res.send({
                status: true,
                msg: "delete succesfully",
                data: fun
            })
            return;
        }
        else {
            res.send({
                status: true,
                msg: "data not found",
                data: {}
            })
        }
    } catch (error) {
        res.send({
            status: false,
            msg: "internal err",
            data: err
        })
    }
}