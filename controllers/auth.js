import express from "express"
import User from "../models/user"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

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
    catch {
        res.status(400).json(error)
    }
})

// Login post
router.post("/login", async (req, res) => {

})

// Logout post
router.post("/logout", async (req, res) => {

})