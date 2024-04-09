import NoteCardImg from "./NoteCardImg";
import NoteCardHeader from "./NoteCardHeader";
import NoteCardBody from "./NoteCardBody";
import { noteCardPropTypes } from "./propTypes";

import "./NoteCard.css";

NoteCard.propTypes = noteCardPropTypes;

export default function NoteCard({
  header,
  image = "",
  content = "",
  className = "",
  style = {},
}) {
  return (
    <div className="col">
      <div className={`card rounded-3 ${className}`} style={style}>
        <NoteCardImg image={image} />
        <div className="p-4">
          <NoteCardHeader header={header} />
          <NoteCardBody content={content} />
        </div>
      </div>
    </div>
  );
}
