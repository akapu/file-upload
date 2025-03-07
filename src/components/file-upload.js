import { LitElement, html, css } from "lit";
import { theme } from "../theme.js";
import { FileUploadFormManager } from "../FileUploadFormManager.js";

class FileUpload extends LitElement {
  static styles = css`
    ${theme.utility.borderBox}

    .window {
      position: relative;
      width: 302px;
      height: 479px;
      border-radius: 22px;
      padding-top: 42px;
      padding-right: 13px;
      padding-bottom: 12px;
      padding-left: 13px;

      background: linear-gradient(
        180deg,
        ${theme.colors.primary} 0%,
        #dddcfc 42.5%,
        #ffffff 100%
      );

      display: flex;
      align-items: center;
    }

    form-file-upload {
      flex-grow: 1 1 auto;
      min-width: 0;
    }

    close-button {
      position: absolute;
      top: 11px;
      right: 12px;
    }
  `;

  static properties = {
    // сначала с предоставленного эдпоинта в браузере нельзя было прочитать ответ из-за CORS
    // использование прокси решало проблему, сейчас неактуально
    proxy: { type: String },

    _fileUploadFormManager: { type: Object, state: true },
    _stage: { type: String, state: true },
  };

  constructor() {
    super();

    this._fileUploadFormManager = new FileUploadFormManager();
    this._stage = "upload";
  }

  set proxy(newProxy) {
    this._fileUploadFormManager.proxy = newProxy;
  }

  get proxy() {
    return this._fileUploadFormManager.proxy;
  }

  openResult() {
    this._stage = "form leaving";
  }

  handleSubmit(event) {
    this.requestUpdate(); // перед загрузкой файла

    event.detail.submitPromise.then(() => this.openResult()); // после загрузки файла
  }

  handleCloseButtonClick() {
    this.dispatchCloseEvent();
  }

  dispatchCloseEvent() {
    const closeEvent = new CustomEvent("close", {
      bubbles: true,
      composed: true,
    });

    this.dispatchEvent(closeEvent);
  }

  render() {
    return html`
      <div class="window border-box">
        <close-button @click=${this.handleCloseButtonClick}></close-button>

        <form-file-upload
          .leaving=${this._stage === "form leaving"}
          .fileUploadFormManager=${this._fileUploadFormManager}
          @submit=${this.handleSubmit}
        ></form-file-upload>
      </div>
    `;
  }
}

customElements.define("file-upload", FileUpload);
