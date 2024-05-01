import { useContext } from "react";

import { SelectedNoteContext } from "./context";

export default function NoteEditorBody() {
  const { selectedNote, updateSelectedNoteFields } =
    useContext(SelectedNoteContext);

  const updateContent = (e) => {
    updateSelectedNoteFields({ content: e.target.value });
  };

  return (
    <textarea
      className="w-100 h-100 border-0"
      style={{ outline: "0", resize: "none", overflow: "auto" }}
      onChange={updateContent}
      value={selectedNote.content ? selectedNote.content : ""}
    />
  );
}
