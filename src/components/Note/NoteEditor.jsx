import { useContext } from "react";

import NoteEditorImg from "./NoteEditorImg";
import NoteEditorHeader from "./NoteEditorHeader";
import NoteEditorBody from "./NoteEditorBody";
import { noteEditorPropTypes } from "./propTypes";

import { SelectedNoteContext } from "./context";
import UploadImageButton from "../Buttons/UploadImageButton";

NoteEditor.propTypes = noteEditorPropTypes;

// TODO: Implement NoteEditor
// - Auto collapse NoteEditor when no note selected or selected note is deleted.
export default function NoteEditor() {
  const { selectedNote } = useContext(SelectedNoteContext);

  return selectedNote ? (
    <div className="bg-white rounded-3 card p-0 h-100">
      <NoteEditorImg />
      <div className="p-4 h-100 d-flex flex-column">
        <NoteEditorHeader />
        <NoteEditorBody />
        <UploadImageButton />
      </div>
    </div>
  ) : null;
}
