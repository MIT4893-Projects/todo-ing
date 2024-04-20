let notes = [
  {
    id: 1,
    image: "https://placebear.com/g/200/200",
    header: 'Note 1',
    content: 'Content 1'
  },
  {
    id: 2,
    header: 'Note 2',
    content: 'Content 2'
  },
  {
    id: 3,
    header: 'Note 3'
  }
]

export function getNotes () {
  return notes
}

export function saveNotes (newNotes) {
  notes = newNotes
}

export function createNote () {
  const newNote = { id: notes.length + 1, header: 'New Note' }

  saveNotes([...notes, newNote])
  return newNote;
}
