import { noteCardBodyPropTypes } from "./propTypes";

NoteCardBody.propTypes = noteCardBodyPropTypes;

export default function NoteCardBody({ content, className, style }) {
  return (
    <p className={className} style={style}>
      {content}
    </p>
  );
}
