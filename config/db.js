import mongoose from "mongoose"
const hostconnect = async () => {
    const conn = await mongoose.connect("mongodb+srv://vakeel:vakeel@pixel.rjqqvvg.mongodb.net/?retryWrites=true&w=majority")
    console.log("host-----", conn.connection.host)
}
export default hostconnect;