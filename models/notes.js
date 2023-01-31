import mongoose from "../db/connection.js"

const {Schema, model} = mongoose

const noteSchema = new Schema({
    title: String,
    message: String,
    username: String
})

const Note = model("Note", noteSchema)

export default Note