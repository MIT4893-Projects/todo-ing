import { useContext } from "react";

import NoteCardImg from "./NoteCardImg";
import NoteCardHeader from "./NoteCardHeader";
import NoteCardBody from "./NoteCardBody";
import { noteCardPropTypes } from "./propTypes";

import { SelectedNoteContext } from "./context";

import "./NoteCard.css";

NoteCard.propTypes = noteCardPropTypes;

export default function NoteCard({ note }) {
  const { setSelectedNote } = useContext(SelectedNoteContext);
  return (
    <div
      className="card rounded-3"
      onClick={() => {
        setSelectedNote(note);
      }}
    >
      <NoteCardImg image={note.image} />
      <div className="p-4">
        <NoteCardHeader header={note.header} />
        <NoteCardBody content={note.content} />
      </div>
    </div>
  );
}
