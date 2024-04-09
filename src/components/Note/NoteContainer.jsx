import NoteEditor from "./NoteEditor";
import NoteCardContainer from "./NoteCardContainer";
import { noteContainerPropTypes } from "./propTypes";

NoteContainer.propTypes = noteContainerPropTypes;

// TODO: Implement NoteContainer
export default function NoteContainer() {
  return (
    <div className="flex-fill p-2">
      <div className="row row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 g-2">
        <NoteCardContainer />
        <NoteEditor />
      </div>
    </div>
  );
}
