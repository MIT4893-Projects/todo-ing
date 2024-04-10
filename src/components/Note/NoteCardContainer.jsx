import NoteCard from "./NoteCard";
import { noteCardContainerPropTypes } from "./propTypes";

NoteCardContainer.propTypes = noteCardContainerPropTypes;

export default function NoteCardContainer({ notes, className = "" }) {
  return (
    <div className={className}>
      {notes.map((note) => (
        <NoteCard key={note.id} note={note} />
      ))}
    </div>
  );
}
