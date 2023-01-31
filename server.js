import express from "express"
import morgan from "morgan"
import cors from "cors"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"

// read .env file
dotenv.config()

// create express object
const app = express()

// register middleware
app.use(cors()) // allow external requests
app.use(morgan("dev")) // logging
app.use(express.json()) // parse json bodies
app.use(cookieParser()) // parse cookies

// Routes and Routers

// test route
app.get("/test", (req, res) => {
    res.send("server is working")
})

// Listener -- turn on the server
const PORT = process.env.PORT || 4444

app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`)
})