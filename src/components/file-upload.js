import { LitElement, html, css } from "lit";
import { when } from "lit/directives/when.js";

class FileUpload extends LitElement {
  static properties = {
    _file: { state: true },
    _name: { state: true },
    _isNameEmpty: { state: true },
    _clientValidationError: { state: true },
    _clientValidationErrorMessage: { state: true },
  };

  constructor() {
    super();

    this._file = null;
    this._name = "";
    this._isNameEmpty = true;
    this._clientValidationError = false;
    this._clientValidationErrorMessage = "";
  }

  static styles = css``;

  handleFileSelected(e) {
    this._file = e.detail.file;
    this.validateFile();
  }

  handleNameChanged(e) {
    this._name = e.detail.value;
    this.validateName();
  }

  validateName() {
    if (this._name === "") {
      this._isNameEmpty = true;
    }
  }

  validateFile() {
    if (this._file.size > 1024) {
      this._clientValidationError = true;
      this._clientValidationErrorMessage = "Максимальный размер файла 1 КиБ";
      return;
    }

    const allowedExtensions = ["csv", "json", "txt"];
    const fileExtension = this._file.name.split(".").pop().toLowerCase();
    if (!allowedExtensions.includes(fileExtension)) {
      this._clientValidationError = true;
      this._clientValidationErrorMessage = "Только csv, json, txt";
      return;
    }

    this._clientValidationError = false;
    this._clientValidationErrorMessage = "";
  }

  renderFileState() {
    if (this._clientValidationError) {
      return html` <p>${this._clientValidationErrorMessage}</p> `;
    } else {
      return html` <p>Файл загружен</p> `;
    }
  }

  submit() {
    const proxy = 'https://corsproxy.io/?url='
    const url = "https://file-upload-server-mc26.onrender.com/api/v1/upload";
    const formData = new FormData();
    formData.append("file", this._file);
    formData.append("name", this._name);

    fetch(proxy + url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.error(err));
  }

  render() {
    return html`
      <text-field @value-changed=${this.handleNameChanged}></text-field>
      <file-field @file-selected=${this.handleFileSelected}></file-field>
      ${when(this._file, () => this.renderFileState())}
      <submit-button @click=${this.submit}></submit-button>
    `;
  }
}

customElements.define("file-upload", FileUpload);
