import { useState } from 'react'
import { useLiveQuery } from 'dexie-react-hooks'

import { pickImageFile } from '@utils/pickFileUtil'

import { db } from '@utils/db'

function useNotes () {
  const dbTable = db.notes

  const [selectedNote, setSelectedNote] = useState(null)
  const notes = useLiveQuery(() => dbTable.toArray(), [selectedNote])

  const createNotes = async () => {
    const newNote = {
      id: notes.length + 1,
      image: '',
      header: '',
      content: ''
    }

    await dbTable.put(newNote)
    setSelectedNote(newNote)
  }

  const updateSelectedNoteFields = async (updatedFields) => {
    const updatedNote = {
      id: selectedNote.id,
      ...selectedNote,
      ...updatedFields
    }

    await dbTable.put(updatedNote)
    setSelectedNote(updatedNote)
  }

  const updateSelectedNoteImage = async () => {
    let imageFile

    try {
      imageFile = await pickImageFile()
    } catch (error) {
      if (error instanceof DOMException) return
    }

    updateSelectedNoteFields({
      image: imageFile
    })
  }

  return {
    notes,
    createNotes,
    selectedNote,
    setSelectedNote,
    updateSelectedNoteFields,
    updateSelectedNoteImage
  }
}

export default useNotes
