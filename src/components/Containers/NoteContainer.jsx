import { noteContainerPropTypes } from "./propTypes";

NoteContainer.propTypes = noteContainerPropTypes;

export default function NoteContainer({ children }) {
  return (
    <div className="note-container container-fluid p-2">
      <div className="row row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 g-2">
        {children}
      </div>
    </div>
  );
}
