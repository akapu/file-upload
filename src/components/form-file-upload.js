import { LitElement, html, css } from "lit";
import { when } from "lit/directives/when.js";
import { theme } from "../theme.js";
import { FileUploadFormManager } from "../FileUploadFormManager.js";

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
    _formManager: { type: Object, state: true },
  };

  constructor() {
    super();

    this._formManager = new FileUploadFormManager();
  }

  handleFileSelected(e) {
    this._formManager.file = e.detail.file;
    this.requestUpdate();
  }

  handleNameChanged(e) {
    this._formManager.name = e.detail.value;
    this.requestUpdate();
  }

  handleFileLoaded() {
    this._formManager.fileLoaded = true;
    this.requestUpdate();
  }

  handleSubmit() {
    this._formManager.submit();
    this.requestUpdate();
  }

  render() {
    return html`
      <form>
        <header class="font">
          <h2 class="title">Загрузочное окно</h2>

          <p class="hint">
            ${when(
              !this._formManager.isNameValid,
              () => html`Перед загрузкой дайте имя файлу`,
              () => html`Перенесите ваш файл в область ниже`
            )}
          </p>
        </header>

        ${when(
          !this._formManager.isFileFilled,
          () => html`
            <text-field
              @value-changed=${this.handleNameChanged}
              .value=${this._formManager.name}
            ></text-field>
          `
        )}

        <file-field
          @file-selected=${this.handleFileSelected}
          @file-loaded=${this.handleFileLoaded}
          ?disabled=${this._formManager.isFileFieldDisabled}
        ></file-field>

        <submit-button
          @click=${this.handleSubmit}
          ?disabled=${this._formManager.isSubmitDisabled}
        ></submit-button>
      </form>
    `;
  }
}

customElements.define("form-file-upload", FormFileUpload);
