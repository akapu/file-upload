export class FileUploadFormManager {
  _file = null;
  _fileLoaded = false;
  _name = "";
  _isNameValid = false;
  _isFileValid = false;
  _fileValidationErrorMessage = "";
  _submitting = false;
  _proxy = "";
  _submitted = false;
  _error = false;
  _errorText = "";
  _data = null;

  set proxy(newProxy) {
    this._proxy = newProxy;
  }

  get proxy() {
    return this._proxy;
  }

  set file(newFile) {
    this._file = newFile;
    this._fileLoaded = false;
    this._validateFile();
  }

  set name(newName) {
    this._name = newName;
    this._validateName();
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

  get isSubmitting() {
    return this._submitting;
  }

  get isSubmitted() {
    return this._submitted;
  }

  get error() {
    return this._error
  }

  get errorText() {
    return this._errorText
  }

  get data() {
    return this._data
  }

  _validateName() {
    this._isNameValid = this._name !== "";
  }

  _validateFile() {
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

  _clearResult() {
    this._submitted = false;
    this._error = false;
    this._errorText = "";
    this._data = null;
  }

  submit() {
    this._clearResult();

    this._submitting = true;

    const url = "https://file-upload-server-mc26.onrender.com/api/v1/upload";

    const formData = new FormData();
    formData.append("file", this._file);
    formData.append("name", this._name);

    const submitPromise = fetch(this._proxy + url, {
      method: "POST",
      body: formData,
    })
      .then((res) => {
        if (!res.ok) {
          this._error = true;
          this._errorText = `${res.status} ${res.statusText}`;
        }

        this._submitted = true;

        return res.json();
      })
      .then((data) => {
        this._data = data;
      })
      .catch((err) => {
        this._error = true;
        this._errorText = err.toString();
      })
      .finally(() => {
        this._submitting = false;
      });

    return submitPromise;
  }
}
