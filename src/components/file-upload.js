import { LitElement, html, css } from "lit";
import { theme } from "../theme.js";
import { FileUploadFormManager } from "../FileUploadFormManager.js";

class FileUpload extends LitElement {
  static styles = css`
    ${theme.utility.borderBox}

    .window {
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
    }
  `;

  static properties = {
    // сначала с предоставленного эдпоинта в браузере нельзя было прочитать ответ из-за CORS
    // использование прокси решало проблему, сейчас неактуально
    proxy: { type: String },
    _fileUploadFormManager: { type: Object, state: true },
  };

  constructor() {
    super();

    this._fileUploadFormManager = new FileUploadFormManager();
  }

  set proxy(newProxy) {
    this._fileUploadFormManager.proxy = newProxy;
  }

  get proxy() {
    return this._fileUploadFormManager.proxy;
  }

  handleSubmit(event) {
    this.requestUpdate(); // перед загрузкой файла
    
    event.details.submitPromise.then(() => this.requestUpdate()); // после загрузки файла
  }

  render() {
    return html`
      <div class="window border-box">
        <form-file-upload
          .fileUploadFormManager=${this._fileUploadFormManager}
          @submit=${this.handleSubmit}
        ></form-file-upload>
      </div>
    `;
  }
}

customElements.define("file-upload", FileUpload);
