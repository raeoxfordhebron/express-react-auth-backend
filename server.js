import express from "express"
import morgan from "morgan"
import cors from "cors"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import authRouter from "./controllers/auth.js"
import noteRouter from "./controllers/note.js"

// read .env file
dotenv.config()

// create express object
const app = express()

// register middleware
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
})) // allow external requests
app.use(morgan("dev")) // logging
app.use(express.json()) // parse json bodies
app.use(cookieParser()) // parse cookies

// Routes and Routers
app.use("/auth", authRouter)
app.use("/note", noteRouter)

// test route
app.get("/test", (req, res) => {
    res.send("server is working")
})

// Listener -- turn on the server
const PORT = process.env.PORT || 4444

app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`)
})