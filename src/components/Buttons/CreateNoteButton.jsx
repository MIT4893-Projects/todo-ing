import { useContext } from "react";
import { FiPlus } from "react-icons/fi";

import { NoteContext } from "@components/Note/context";

export default function CreateNoteButton() {
  const { createNote } = useContext(NoteContext);

  return (
    <div
      className="btn btn-primary p-0 position-absolute bottom-0 end-0"
      onClick={createNote}
      style={{
        width: "40px",
        height: "40px",
        borderRadius: "100%",
        zIndex: 1,
      }}
    >
      <FiPlus
        style={{
          marginTop: "12.5%",
          marginBottom: "12.5%",
          height: "75%",
          width: "75%",
        }}
      />
    </div>
  );
}
