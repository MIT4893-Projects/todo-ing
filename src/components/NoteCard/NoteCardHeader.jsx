import { noteCardHeaderPropTypes } from "./propTypes";

NoteCardHeader.propTypes = noteCardHeaderPropTypes;

export default function NoteCardHeader({ header, className, style }) {
  return (
    <h3 className={`h3 card-title m-0 ${className}`} style={style}>
      {header}
    </h3>
  );
}
