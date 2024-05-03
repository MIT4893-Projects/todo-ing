import { noteCardImgPropTypes } from "./propTypes";

NoteCardImg.propTypes = noteCardImgPropTypes;

export default function NoteCardImg({ image }) {
  return image ? (
    <div
      style={{
        height: "200px",
        backgroundImage: `url(${URL.createObjectURL(image)})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    />
  ) : null;
}
