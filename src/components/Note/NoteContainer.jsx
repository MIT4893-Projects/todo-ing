import { useState } from "react";

import * as noteUtils from "@utils/noteUtils";

import NoteEditor from "./NoteEditor";
import NoteCardContainer from "./NoteCardContainer";
import { noteContainerPropTypes } from "./propTypes";

NoteContainer.propTypes = noteContainerPropTypes;

// TODO: Layout NoteContainer
// - Implement NoteEditor layout on the right side.
export default function NoteContainer() {
  const [notes, setNotes] = useState(noteUtils.getNotes());
  const [selectedNote, setSelectedNote] = useState(null);

  return (
    <div className="flex-fill p-2">
      <div className="container-fluid p-0 h-100">
        <div className="row m-0 gx-3">
          <NoteCardContainer
            notes={notes}
            setSelectedNote={setSelectedNote}
            className="col col-sm-7 col-lg-9 ps-0"
          />
          <NoteEditor
            className="col col-sm-5 col-lg-3"
            note={notes.find((note) => note.id === selectedNote)}
          />
        </div>
      </div>
    </div>
  );
}
