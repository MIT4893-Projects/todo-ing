import { noteCardHeaderPropTypes } from "./propTypes";

NoteCardHeader.propTypes = noteCardHeaderPropTypes;

export default function NoteCardHeader({ header, className, style }) {
  return (
    <div className={className} style={style}>
      {header}
    </div>
  );
}
