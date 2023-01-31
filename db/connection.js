import dotenv from "dotenv"
import mongoose from "mongoose"

dotenv.config()

const DATABASE_URL = process.env.DATABASE_URL

mongoose.connect(DATABASE_URL) // connec to database

// connection messages

mongoose.connection
.on("open", () => console.log("Mongo is connected"))
.on("close", () => console.log("Mongo is disconnected"))
.on("error", (error) => console.log(error))

export default mongoose