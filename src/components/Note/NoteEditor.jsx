import { noteEditorPropTypes } from "./propTypes";

NoteEditor.propTypes = noteEditorPropTypes;

// TODO: Implement NoteEditor
// - Implement form to edit selected note.
// - Binding selected note to form.
// - Auto collapse NoteEditor when no note selected or selected note is deleted.
export default function NoteEditor({ className = "", note = {} }) {
  return <div className={`bg-white rounded-3 ${className}`}></div>;
}
