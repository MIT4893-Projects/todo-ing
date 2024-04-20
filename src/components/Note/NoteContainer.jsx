import { useState, useEffect } from "react";

import * as noteUtils from "@utils/noteUtils";

import NoteEditor from "./NoteEditor";
import NoteCardContainer from "./NoteCardContainer";
import { noteContainerPropTypes } from "./propTypes";
import { NoteContext, SelectedNoteContext } from "./context";
import CreateNoteButton from "../Buttons/CreateNoteButton";

NoteContainer.propTypes = noteContainerPropTypes;

export default function NoteContainer() {
  const [notes, setNotes] = useState(noteUtils.getNotes());
  const [selectedNote, setSelectedNote] = useState(null);

  const updateNotes = () => {
    if (!selectedNote) return;

    setNotes((notes) =>
      notes.map((note) => (note.id === selectedNote.id ? selectedNote : note)),
    );
  };

  const createNote = () => {
    const newNote = noteUtils.createNote();
    setNotes(noteUtils.getNotes());
    setSelectedNote(newNote);
  };

  useEffect(updateNotes, [selectedNote]);
  useEffect(() => {
    noteUtils.saveNotes(notes);
  }, [notes]);

  return (
    <div className="flex-fill py-2">
      <div className="container-fluid p-0 h-100">
        <div className="row m-0 gx-2 px-1 h-100">
          <NoteContext.Provider value={{ notes, createNote }}>
            <SelectedNoteContext.Provider
              value={{ selectedNote, setSelectedNote }}
            >
              <div className="col-6 col-md-8 col-lg-9 position-relative">
                <CreateNoteButton />
                <NoteCardContainer notes={notes} />
              </div>
              <div className="col-6 col-md-4 col-lg-3">
                <NoteEditor />
              </div>
            </SelectedNoteContext.Provider>
          </NoteContext.Provider>
        </div>
      </div>
    </div>
  );
}
