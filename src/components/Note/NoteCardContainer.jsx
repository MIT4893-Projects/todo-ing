import NoteCard from "./NoteCard";
import { noteCardContainerPropTypes } from "./propTypes";

NoteCardContainer.propTypes = noteCardContainerPropTypes;

export default function NoteCardContainer({
  notes,
  setSelectedNote,
  className = "",
}) {
  return (
    <div className={className}>
      {notes.map((note) => (
        <NoteCard
          id={note.id}
          key={note.id}
          image={note.image}
          header={note.header}
          content={note.content}
          setSelectedNote={setSelectedNote}
        />
      ))}
    </div>
  );
}
