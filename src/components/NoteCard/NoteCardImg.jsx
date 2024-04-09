import { noteCardImgPropTypes } from "./propTypes";

NoteCardImg.propTypes = noteCardImgPropTypes;

export default function NoteCardImg({ image }) {
  return image ? <img src={image} style={{ height: "200px" }} /> : null;
}
