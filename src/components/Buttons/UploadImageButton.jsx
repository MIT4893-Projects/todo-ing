import { pickImageFile } from "@utils/pickFileUtil";

export default function UploadImageButton() {
  return (
    <button
      className="btn"
      onClick={async () => console.log(await pickImageFile())}
    >
      Upload Image
    </button>
  );
}
