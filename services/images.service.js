import multer from "multer";
import path from "path";
console.log("image----")
const imageStorage = multer.diskStorage({
  destination: 'images',
  filename: (req, file, cb) => {

    console.log("Images-----", file)
    cb(null, file.fieldname + '_' + Date.now() + path.extname(file.originalname))
    console.log("file.fieldname----", file.fieldname)
    console.log("Date----", Date.now())
    console.log("Type----", path.extname(file.originalname))
  }
});
export const imageUpload = multer({
  storage: imageStorage,
  limits: {
    fileSize: 1000000 * 5 // 1000000 Bytes = 1 MB
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(png|jpg|jpeg|zip)$/)) {
      return cb(new Error('Please upload a Image'))
    }
    cb(undefined, true)
  }
}) 