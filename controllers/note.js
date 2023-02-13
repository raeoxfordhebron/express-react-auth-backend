import express from 'express'
import Note from "../models/notes.js"
import isLoggedIn from '../utils/isLoggedIn.js'

const router = express.Router()

// Index Route
router.get("/", async (req, res)=> {
    try{ 

    } catch(error) {
        res.status(400).json(error)
    }
})

// Show Route
router.get("/id", async (req,res) => {
    try{

    } catch(error) {
        res.status(400).json(error)
    }
})

// Create Route
router.post("/", async (req, res) => {
    try{

    } catch(error) {
        res.status(400).json(error)
    }
})



export default router