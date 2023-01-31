import express from "express"
import User from "../models/user"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import dotenv from "dotenv"

// create the router 

const router = express.Router()

// Routes //
// Signup post
router.post("/signup", async (req, res) => {
    try {
    req.body.password = await bcrypt.hash(req.body.password, await bcrypt.genSalt(10))

    // generate user
    const user = await User.create(req.body)

    // response
    res.json({status: "User Created"})
    } 
    catch(error) {
        res.status(400).json(error)
    }
})

// Login post
router.post("/login", async (req, res) => {
    try {
    const {username, password} = req.body
    // get the user
    const user = await User.find({username})

    if (user) {
        const passwordCheck = await bcrypt.compare(password, user.password)
        if (password) {
            const payload = {username}
            const token = jwt.sign(payload, process.env.SECRET)
            res.cookie("token", token, {httpOnly: true}).json({payload, status: "logged in"})
        } else {
            res.status(400).json({error:"Password does not match"})
        }
    } else {
        res.status(400).json({error: "User does not exist"})
    }
} catch(error) {
    res.status(400).json(error)
}
})

// Logout post
router.post("/logout", async (req, res) => {
    res.clearCookie("token").json({response: "You are logged out"})
})