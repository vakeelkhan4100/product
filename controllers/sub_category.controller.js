import row from "../models/sub_cate.model.js";
export const create = async (req, res) => {
    try {
        const data = await row.findOne({ name: req.body.name })
        if (data) {
            res.send({
                status: false,
                msg: "name is already exits",
                data: {}
            })
            return
        }
        else {
            const tata = await row.create(req.body)
            if (tata) {
                res.send({
                    status: true,
                    msg: "signup is success",
                    data: tata
                })
                return
            } else {
                res.send({
                    status: false,
                    msg: "signup is not success",
                    data: {}
                })
            }
        }
    } catch (error) {
        res.send({
            status: false,
            msg: "intenal error",
            data: error
        })
    }
}
export const getall = async (req, res) => {
    try {
        const data = await row.find({ status: "Active" }).populate("createdBy").populate("cateId")
        console.log(data)

        if (data.length > 0) {
            res.send({
                status: true,
                msg: "fetch is success",
                data: data
            })
            return
        } else {
            res.send({
                status: false,
                msg: "data not found",
                data: {}
            })
        }
    } catch (error) {
        res.send({
            status: false,
            msg: "internal error",
            data: error
        })
    }
}
export const update = async (req, res) => {
    try {
        const rata = await row.findByIdAndUpdate({ _id: req.body.id }, req.body)
        if (rata) {
            res.send({
                status: true,
                msg: "update is success ",
                data: rata
            })
            return
        }
        else {
            res.send({
                status: false,
                msg: "update is not success ",
                data: {}
            })
            return
        }
    } catch (error) {
        res.send({
            status: false,
            msg: "internal error",
            data: {}
        })
    }
}
export const remove = async (req, res) => {
    try {
        const cap = await row.findByIdAndDelete({ _id: req.body.id })
        if (cap) {
            res.send({
                status: true,
                msg: "remove is success",
                data: cap
            })
            return
        } else {
            res.send({
                status: false,
                msg: "remove is unsuccesss",
                data: {}
            })
        }
    } catch (error) {
        res.send({
            status: false,
            msg: "internal error",
            data: error
        })
    }
}