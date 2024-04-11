import { noteCardBodyPropTypes } from "./propTypes";

NoteCardBody.propTypes = noteCardBodyPropTypes;

export default function NoteCardBody({ content }) {
  return content ? (
    <p
      className="mb-0 mt-2"
      style={{
        overflow: "hidden",
        wordWrap: "break-word",
        overflowWrap: "break-word",
        whiteSpace: "pre-line",
        maxHeight: "100px",
      }}
    >
      {content}
    </p>
  ) : null;
}
