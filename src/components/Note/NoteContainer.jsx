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
      <div>
        <NoteCardContainer notes={notes} setSelectedNote={setSelectedNote} />
        <NoteEditor />
      </div>
    </div>
  );
}
