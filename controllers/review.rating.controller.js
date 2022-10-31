import review_rating from "../models/review.rating.model.js";
export const create = async (req, res) => {
    try {
        req.body.productId = req.body.product_id
        req.body.userId = req.body.user_id
        const isratingexits = await review_rating.findOne({ productId: req.body.productId, userId: req.body.userId })
        if (isratingexits) {
            res.send({
                status: true,
                msg: " rating is already exits",
                data: {}
            })
            return
        }
        const data = await review_rating.create(req.body)
        if (data) {
            res.send({
                status: true,
                msg: "rating  given success",
                data: data
            })
            return
        }
    } catch (error) {
        res.send({
            status: false,
            msg: "something wrong with request .",
            data: error
        })
    }
}
export const get_data = async (req, res) => {
    try {
        const getting = await review_rating.find({ rating: req.body.rating }).populate("userId")
        if (getting.length > 0) {
            res.send({
                status: true,
                msg: "Rating and reviews fetch successfully.",
                data: getting
            })
            return
        } else {
            res.send({
                status: false,
                msg: "No rating and reviews found for this product.",
                data: []
            })
        }
    }
    catch (error) {
        res.send({
            status: false,
            msg: "something wrong with request .",
            data: error
        })
    }
}
