import { useState, useEffect } from "react";

import * as noteUtils from "@utils/noteUtils";

import NoteEditor from "./NoteEditor";
import NoteCardContainer from "./NoteCardContainer";
import { noteContainerPropTypes } from "./propTypes";
import { NoteContext, SelectedNoteContext } from "./context";

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

  useEffect(updateNotes, [selectedNote]);

  return (
    <div className="flex-fill p-2">
      <div className="container-fluid p-0 h-100">
        <div className="row m-0 gx-3 h-100">
          <NoteContext.Provider value={{ notes, setNotes }}>
            <SelectedNoteContext.Provider
              value={{ selectedNote, setSelectedNote }}
            >
              <NoteCardContainer
                notes={notes}
                className="col-6 col-md-8 col-lg-9 ps-0"
              />
              <NoteEditor
                className="col-6 col-md-4 col-lg-3"
                note={selectedNote}
              />
            </SelectedNoteContext.Provider>
          </NoteContext.Provider>
        </div>
      </div>
    </div>
  );
}
