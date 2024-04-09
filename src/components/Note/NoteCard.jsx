import NoteCardImg from "./NoteCardImg";
import NoteCardHeader from "./NoteCardHeader";
import NoteCardBody from "./NoteCardBody";
import { noteCardPropTypes } from "./propTypes";

import "./NoteCard.css";

NoteCard.propTypes = noteCardPropTypes;

export default function NoteCard({
  id,
  header,
  image = "",
  content = "",
  setSelectedNote,
}) {
  return (
    <div className="col" onClick={() => setSelectedNote(id)}>
      <div className="card rounded-3">
        <NoteCardImg image={image} />
        <div className="p-4">
          <NoteCardHeader header={header} />
          <NoteCardBody content={content} />
        </div>
      </div>
    </div>
  );
}
