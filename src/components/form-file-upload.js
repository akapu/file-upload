import { LitElement, html, css } from "lit";
import { when } from "lit/directives/when.js";
import { theme } from "../theme.js";

class FormFileUpload extends LitElement {
  static styles = css`
    ${theme.utility.font}

    form {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    header {
      color: white;

      display: flex;
      flex-direction: column;
      gap: 7px;
      align-items: center;
    }

    .title {
      font-weight: 500;
      font-size: 20px;
      line-height: 24px;
      padding: 0;
      margin: 0;
    }

    .hint {
      font-weight: 200;
      font-size: 14px;
      line-height: 17px;
      padding: 0;
      margin: 0;
    }
  `;

  static properties = {
    _file: { state: true },
    _fileLoaded: { type: Boolean, state: true },
    _name: { state: true },
    _isNameEmpty: { state: true },
    _clientValidationError: { state: true },
    _clientValidationErrorMessage: { state: true },
    _submitting: { state: true },
  };

  constructor() {
    super();

    this._file = null;
    this._fileLoaded = false;
    this._name = "";
    this._isNameEmpty = true;
    this._clientValidationError = false;
    this._clientValidationErrorMessage = "";
  }

  handleFileSelected(e) {
    this._file = e.detail.file;
    this._fileLoaded = false;
    this.validateFile();
  }

  handleNameChanged(e) {
    this._name = e.detail.value;
    this.validateName();
  }

  handleFileFieldCleared() {
    this._file = null;
    this._fileLoaded = false;
    this._clientValidationError = false;
    this._clientValidationErrorMessage = "";
  }

  handleFileLoaded() {
    this._fileLoaded = true;
  }

  validateName() {
    this._isNameEmpty = this._name === "";
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

  submit() {
    this._submitting = true;

    const proxy = "https://corsproxy.io/?url=";
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
      .catch((err) => console.error(err))
      .then(() => (this._submitting = false));
  }

  get submitDisabled() {
    return (
      this._isNameEmpty ||
      this._clientValidationError ||
      !this._file ||
      !this._fileLoaded ||
      this._submitting
    );
  }

  get fileFieldDisabled() {
    return this._isNameEmpty || this._submitting;
  }

  render() {
    return html`
      <form>
        <header class="font">
          <h2 class="title">Загрузочное окно</h2>

          <p class="hint">
            ${when(
              this._isNameEmpty,
              () => html`Перед загрузкой дайте имя файлу`,
              () => html`Перенесите ваш файл в область ниже`
            )}
          </p>
        </header>

        ${when(
          !this._file,
          () => html`
            <text-field
              @value-changed=${this.handleNameChanged}
              .value=${this._name}
            ></text-field>
          `
        )}

        <file-field
          @file-selected=${this.handleFileSelected}
          @field-cleared=${this.handleFileFieldCleared}
          @file-loaded=${this.handleFileLoaded}
          ?disabled=${this.fileFieldDisabled}
        ></file-field>

        <submit-button
          @click=${this.submit}
          ?disabled=${this.submitDisabled}
        ></submit-button>
      </form>
    `;
  }
}

customElements.define("form-file-upload", FormFileUpload);
