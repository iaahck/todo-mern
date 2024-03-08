import mongoose from "mongoose"

const dbConnect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB_URI)
	console.log("db conected");
    } catch (error) {
        console.log(error)
    }
}

export default dbConnect;