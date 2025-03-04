import { LitElement, html, css } from "lit";
import { when } from "lit/directives/when.js";
import { theme } from "../theme.js";

class FileUpload extends LitElement {
  static styles = css`
    ${theme.styles.font}
    ${theme.utility.borderBox}

    .window {
      width: 302px;
      height: 479px;
      border-radius: 22px;
      padding-top: 31px;
      padding-right: 13px;
      padding-bottom: 12px;
      padding-left: 13px;
      background: linear-gradient(
        180deg,
        ${theme.colors.primary} 0%,
        #dddcfc 42.5%,
        #ffffff 100%
      );
    }

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
      letter-spacing: 0%;
      padding: 0;
      margin: 0;
    }

    .hint {
      font-weight: 200;
      font-size: 14px;
      line-height: 17px;
      letter-spacing: 0%;
      padding: 0;
      margin: 0;
    }
  `;

  static properties = {
    _state: { state: true },
    _file: { state: true },
    _name: { state: true },
    _isNameEmpty: { state: true },
    _clientValidationError: { state: true },
    _clientValidationErrorMessage: { state: true },
  };

  stateRenderFunctionMap = {
    initial: () => this.renderInitialState(),
  };

  constructor() {
    super();

    this._state = "initial";
    this._file = null;
    this._name = "";
    this._isNameEmpty = true;
    this._clientValidationError = false;
    this._clientValidationErrorMessage = "";
  }

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
      .catch((err) => console.error(err));
  }

  renderInitialState() {
    return html`
      <div class="window border-box">
        <form>
          <header>
            <h2 class="title">Загрузочное окно</h2>
            <p class="hint">Перед загрузкой дайте имя файлу</p>
          </header>
          <text-field @value-changed=${this.handleNameChanged}></text-field>
          <file-field @file-selected=${this.handleFileSelected}></file-field>
          ${when(this._file, () => this.renderFileState())}
          <submit-button @click=${this.submit}></submit-button>
        </form>
      </div>
    `;
  }

  get currentRenderFunction() {
    return this.stateRenderFunctionMap[this._state];
  }

  render() {
    return this.currentRenderFunction();
  }
}

customElements.define("file-upload", FileUpload);
