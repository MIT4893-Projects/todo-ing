import { useState } from 'react'

function useNotes () {
  const [notes, setNotes] = useState([])
  const [selectedNote, setSelectedNote] = useState(null)

  const createNotes = () => {
    const newNotes = {
      id: notes.length + 1,
      image: '',
      header: '',
      content: ''
    }
    setNotes([...notes, newNotes])
    setSelectedNote(newNotes)
  }

  const updateSelectedNoteFields = (updatedFields) => {
    const updatedNote = {
      id: selectedNote.id,
      ...selectedNote,
      ...updatedFields
    }

    setSelectedNote(updatedNote)

    setNotes((notes) =>
      notes.map((note) => (note.id !== selectedNote.id ? note : updatedNote))
    )
  }

  return {
    notes,
    setNotes,
    createNotes,
    selectedNote,
    setSelectedNote,
    updateSelectedNoteFields
  }
}

export default useNotes
