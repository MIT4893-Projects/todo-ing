import { noteCardBodyPropTypes } from "./propTypes";

NoteCardBody.propTypes = noteCardBodyPropTypes;

export default function NoteCardBody({ content, className = "", style = {} }) {
  return content ? (
    <p className={`mb-0 mt-2 ${className}`} style={style}>
      {content}
    </p>
  ) : null;
}
