import product from "../models/product.model.js"
import ProductImage from "../models/product_image.model.js"
export const create = async (req, res) => {
     try {
        const creatpro = await product.create(req.body)
        // console.log("data-----",creatpro)
        if (creatpro) {
            req.files.forEach(async (image, key) => {
                var imageType = ''
                if (image.mimetype == 'image/png') {
                    imageType = 'png'
                } else if (image.mimetype == 'image/jpg' || image.mimetype == 'image/jpeg') {
                    imageType = 'jpg'
                }
                let imagedata = {
                    path: image.filename,
                    fullpath: "localhost:4000/" + image.path,
                    type: imageType,
                    productId: creatpro._id,
                }
                await ProductImage.create(imagedata)
                console.log(imagedata)
            });
        }
        res.send("asdas")
    } catch (error) {
        res.send({
            status: false,
            msg: "something wrong with request .",
            data: error
        })
    }
}