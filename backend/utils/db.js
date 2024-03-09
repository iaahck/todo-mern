import mongoose from "mongoose"

const dbConnect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
	console.log("db conected");
    } catch (error) {
        console.log(error)
    }
}

export default dbConnect;
//, { useNewUrlParser: true, useUnifiedTopology: true }