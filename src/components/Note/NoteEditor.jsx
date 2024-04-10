import { useContext } from "react";

import NoteEditorImg from "./NoteEditorImg";
import NoteEditorHeader from "./NoteEditorHeader";
import NoteEditorBody from "./NoteEditorBody";
import { noteEditorPropTypes } from "./propTypes";

import { SelectedNoteContext } from "./context";

NoteEditor.propTypes = noteEditorPropTypes;

// TODO: Implement NoteEditor
// - Auto collapse NoteEditor when no note selected or selected note is deleted.
export default function NoteEditor({ className = "" }) {
  const { selectedNote } = useContext(SelectedNoteContext);
  return selectedNote ? (
    <div className={`bg-white rounded-3 card p-0 ${className}`}>
      <NoteEditorImg />
      <div className="p-4">
        <NoteEditorHeader />
        <NoteEditorBody />
      </div>
    </div>
  ) : null;
}
