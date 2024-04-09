import NoteCard from "./NoteCard";
import { noteCardContainerPropTypes } from "./propTypes";

NoteCardContainer.propTypes = noteCardContainerPropTypes;

export default function NoteCardContainer({ notes }) {
  return (
    <div>
      {notes.map((note) => (
        <NoteCard
          key={note.id}
          image={note.image}
          header={note.header}
          content={note.content}
        />
      ))}
    </div>
  );
}
