import { noteCardHeaderPropTypes } from "./propTypes";

NoteCardHeader.propTypes = noteCardHeaderPropTypes;

export default function NoteCardHeader({ header }) {
  return <h3 className="h3 card-title m-0">{header}</h3>;
}
