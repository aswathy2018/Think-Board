import Note from "../models/Note.js"


export async function getAllNotes (req, res) {
    try {

        const notes = await Note.findx()
        res.status(200).json(notes)

    } catch (error) {

        console.error("Error in getAllNotes controller", error)
        res.status(500).json({message: "Internal server error"})
    }
}


export async function createNote (req, res) {
    try {
        const {title, content} = req.body
        const newNote = new Note({title, content})

        await newNote.save()

        res.status(201).json({message: "Notes created successfully"})
    } catch (error) {
        console.error("Error in createNote controller", error)
        res.status(500).json({message: "Internal server error"})
    }
}

export function updateNote (req, res) {
    res.send(200).json({message: "Updated successfully"})
}

export function deleteNote (req, res) {
    res.send(200).json({message: "Note deleted successfully"})
}