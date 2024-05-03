import { useContext } from "react";
import { SelectedNoteContext } from "../Note/context";

export default function UploadImageButton() {
  const { updateSelectedNoteImage } = useContext(SelectedNoteContext);

  return (
    <button className="btn" onClick={updateSelectedNoteImage}>
      Upload Image
    </button>
  );
}
