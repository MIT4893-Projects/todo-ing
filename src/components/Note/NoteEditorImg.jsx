import { useContext } from "react";

import { SelectedNoteContext } from "./context";

export default function NoteEditorImg() {
  const { selectedNote } = useContext(SelectedNoteContext);
  return selectedNote.image ? (
    <div
      style={{
        height: "200px",
        backgroundImage: `url(${selectedNote.image})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    />
  ) : null;
}
