export class FileUploadFormManager {
  _file = null;
  _fileLoaded = false;
  _name = "";
  _isNameValid = false;
  _isFileValid = false;
  _fileValidationErrorMessage = "";
  _submitting = false;
  _proxy = ""

  set proxy(newProxy) {
    this._proxy = newProxy;
  }

  get proxy() {
    return this._proxy;
  }

  set file(newFile) {
    this._file = newFile;
    this._fileLoaded = false;
    this.#validateFile();
  }

  set name(newName) {
    this._name = newName;
    this.#validateName();
  }

  get name() {
    return this._name;
  }

  set fileLoaded(newFileLoaded) {
    this._fileLoaded = newFileLoaded;
  }

  get isSubmitDisabled() {
    return (
      !this._isNameValid ||
      this._isFileValid ||
      !this._file ||
      !this._fileLoaded ||
      this._submitting
    );
  }

  get isFileFieldDisabled() {
    return !this._isNameValid || this._submitting;
  }

  get isNameValid() {
    return this._isNameValid;
  }

  get isFileFilled() {
    return Boolean(this._file);
  }

  #validateName() {
    this._isNameValid = this._name !== "";
  }

  #validateFile() {
    if (!this._file) {
      this._fileLoaded = false;
      this._isFileValid = false;
      this._fileValidationErrorMessage = "";
      return;
    }

    if (this._file.size > 1024) {
      this._isFileValid = true;
      this._fileValidationErrorMessage = "Максимальный размер файла 1 КиБ";
      return;
    }

    const allowedExtensions = ["csv", "json", "txt"];
    const fileExtension = this._file.name.split(".").pop().toLowerCase();
    if (!allowedExtensions.includes(fileExtension)) {
      this._isFileValid = true;
      this._fileValidationErrorMessage = "Только csv, json, txt";
      return;
    }

    this._isFileValid = false;
    this._fileValidationErrorMessage = "";
  }

  submit() {
    this._submitting = true;

    const url = "https://file-upload-server-mc26.onrender.com/api/v1/upload";

    const formData = new FormData();
    formData.append("file", this._file);
    formData.append("name", this._name);

    const submitPromise = fetch(this._proxy + url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.error(err))
      .finally(() => {
        this._submitting = false;
      });

    return submitPromise;
  }
}
