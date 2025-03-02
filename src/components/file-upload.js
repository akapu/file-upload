import { LitElement, html, css } from "lit";
import { when } from "lit/directives/when.js";

class FileUpload extends LitElement {
  static properties = {
    _file: { state: true },
    _clientValidationError: { state: true },
    _clientValidationErrorMessage: { state: true },
  };

  constructor() {
    super();

    this._file = null;
    this._clientValidationError = false;
    this._clientValidationErrorMessage = "";
  }

  static styles = css``;

  handleFileSelected(e) {
    this._file = e.detail.file;
    this.validateFile();
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
  }

  renderFileState() {
    if (this._clientValidationError) {
      return html` <p>${this._clientValidationErrorMessage}</p> `;
    } else {
      return html` <p>Файл загружен</p> `;
    }
  }

  render() {
    return html`
      <file-field @file-selected=${this.handleFileSelected}></file-field>
      ${when(this._file, () => this.renderFileState())}
    `;
  }
}

customElements.define("file-upload", FileUpload);
