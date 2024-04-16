import NoteCard from "./NoteCard";
import { noteCardContainerPropTypes } from "./propTypes";

NoteCardContainer.propTypes = noteCardContainerPropTypes;

export default function NoteCardContainer({ notes }) {
  return (
    <div className="container-fluid p-0">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-2">
        {notes.map((note) => (
          <div key={note.id} className="col">
            <NoteCard note={note} />
          </div>
        ))}
      </div>
    </div>
  );
}
