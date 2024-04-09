import { useState } from "react";

import * as noteUtils from "@utils/noteUtils";

import NoteEditor from "./NoteEditor";
import NoteCardContainer from "./NoteCardContainer";
import { noteContainerPropTypes } from "./propTypes";

NoteContainer.propTypes = noteContainerPropTypes;

// TODO: Implement NoteContainer
// - set setlectedNote to clicked note card.
export default function NoteContainer() {
  const [notes, setNotes] = useState(noteUtils.getNotes());
  const [selectedNote, setSelectedNote] = useState(null);

  return (
    <div className="flex-fill p-2">
      <div className="row row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 g-2">
        <NoteCardContainer notes={notes} />
        <NoteEditor />
      </div>
    </div>
  );
}
