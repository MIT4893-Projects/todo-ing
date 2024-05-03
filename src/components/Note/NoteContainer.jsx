import NoteEditor from "./NoteEditor";
import NoteCardContainer from "./NoteCardContainer";
import CreateNoteButton from "../Buttons/CreateNoteButton";
import { SelectedNoteContext } from "./context";
import { noteContainerPropTypes } from "./propTypes";

import useNotes from "@hooks/useNotes";

NoteContainer.propTypes = noteContainerPropTypes;

export default function NoteContainer() {
  const {
    notes,
    createNotes,
    selectedNote,
    setSelectedNote,
    updateSelectedNoteFields,
    updateSelectedNoteImage,
  } = useNotes();

  return (
    <div className="flex-fill py-2">
      <div className="container-fluid p-0 h-100">
        <div className="row m-0 gx-2 px-1 h-100">
          <SelectedNoteContext.Provider
            value={{
              selectedNote,
              setSelectedNote,
              updateSelectedNoteFields,
              updateSelectedNoteImage,
            }}
          >
            <div className="col-6 col-md-8 col-lg-9 position-relative">
              <CreateNoteButton onClick={createNotes} />
              <NoteCardContainer notes={notes} />
            </div>
            <div className="col-6 col-md-4 col-lg-3">
              <NoteEditor />
            </div>
          </SelectedNoteContext.Provider>
        </div>
      </div>
    </div>
  );
}
