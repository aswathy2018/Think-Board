export function getAllNotes (req, res) {
    res.status(200).send("You have fetched the notes correctly.")
}

export function createNote (req, res) {
    res.status(201).json({message: "Notes created successfully"})
}

export function updateNote (req, res) {
    res.send(200).json({message: "Updated successfully"})
}

export function deleteNote (req, res) {
    res.send(200).json({message: "Note deleted successfully"})
}