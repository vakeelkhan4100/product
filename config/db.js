import mongoose from "mongoose"
const hostconnect = async () => {
    const conn = await mongoose.connect("mongodb://localhost:27017/deshwali")
    console.log("host-----", conn.connection.host)
}
export default hostconnect;