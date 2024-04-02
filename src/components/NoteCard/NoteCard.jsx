import NoteCardImg from "./NoteCardImg";
import NoteCardHeader from "./NoteCardHeader";
import NoteCardBody from "./NoteCardBody";
import { noteCardPropTypes } from "./propTypes";

NoteCard.propTypes = noteCardPropTypes;

export default function NoteCard({ image, header, content, className, style }) {
  return (
    <div className="col">
      <div className={`card ${className}`} style={style}>
        <NoteCardImg image={image} />
        <NoteCardHeader header={header} />
        <NoteCardBody content={content} />
      </div>
    </div>
  );
}
