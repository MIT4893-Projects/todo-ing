import { noteContainerPropTypes } from "./propTypes";

NoteContainer.propTypes = noteContainerPropTypes;

export default function NoteContainer({ children }) {
  return (
    <div className="note-container container-fluid">
      <div className="row row-cols-3 g-2">{children}</div>
    </div>
  );
}