export async function pickImageFile () {
  const pickerOpts = {
    types: [
      {
        description: 'Images',
        accept: {
          'image/*': ['.png', '.gif', '.jpeg', '.jpg']
        }
      }
    ]
  }
  const [fileHandle] = await window.showOpenFilePicker(pickerOpts)
  const fileData = await fileHandle.getFile()
  return fileData
}
