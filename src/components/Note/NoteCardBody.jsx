import { noteCardBodyPropTypes } from "./propTypes";

NoteCardBody.propTypes = noteCardBodyPropTypes;

export default function NoteCardBody({ content }) {
  return content ? <p className="mb-0 mt-2">{content}</p> : null;
}
