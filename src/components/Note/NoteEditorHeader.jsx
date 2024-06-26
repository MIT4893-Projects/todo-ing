import { useContext } from "react";

import { SelectedNoteContext } from "./context";

export default function NoteEditorHeader() {
  const { selectedNote, updateSelectedNoteFields } =
    useContext(SelectedNoteContext);

  const updateHeader = (e) => {
    updateSelectedNoteFields({ header: e.target.value });
  };

  return (
    <input
      className="h3 w-100 border-0 border-bottom"
      style={{ outline: "0" }}
      onChange={updateHeader}
      value={selectedNote.header}
    />
  );
}
