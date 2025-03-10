import { LitElement, html, css } from "lit";
import { theme } from "../theme.js";
import { FileUploadFormManager } from "../FileUploadFormManager.js";
import { FormResultToggleAnimationFrames } from "../FormResultToggleAnimationFrames.js";
import { ref, createRef } from "lit/directives/ref.js";

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

  static Stages = {
    UPLOAD: "upload",
    FORM_LEAVING: "form leaving",
  };

  constructor() {
    super();

    this._fileUploadFormManager = new FileUploadFormManager();
    this._stage = FileUpload.Stages.UPLOAD;
  }

  _window = createRef();
  _formResultToggleAnimationFrames = new FormResultToggleAnimationFrames([
    { keyframe: {}, stage: 0 },
    { keyframe: {}, stage: 1 },
    { keyframe: { height: "310px" }, stage: 2 },
    {
      keyframe: {
        height: "230px",
        background: "linear-gradient(180deg, red 0%, #ffffff 100%)",
      },
      stage: 3,
    },
    {
      keyframe: {
        height: "230px",
        background: `linear-gradient(180deg, red 0%, ${theme.colors.primary} 100%)`,
      },
      stage: 4,
    },
  ]);

  set proxy(newProxy) {
    this._fileUploadFormManager.proxy = newProxy;
  }

  get proxy() {
    return this._fileUploadFormManager.proxy;
  }

  openResult() {
    this._stage = FileUpload.Stages.FORM_LEAVING;

    this._window.value.animate(
      this._formResultToggleAnimationFrames.keyframesWithOffsets,
      {
        duration: this._formResultToggleAnimationFrames.totalDuration,
        fill: "forwards",
      }
    );
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

  get showForm() {
    return this._stage === FileUpload.Stages.UPLOAD;
  }

  render() {
    return html`
      <div ${ref(this._window)} class="window border-box">
        <close-button @click=${this.handleCloseButtonClick}></close-button>

        <form-file-upload
          .leaving=${this._stage === FileUpload.Stages.FORM_LEAVING}
          .fileUploadFormManager=${this._fileUploadFormManager}
          @submit=${this.handleSubmit}
        ></form-file-upload>
      </div>
    `;
  }
}

customElements.define("file-upload", FileUpload);
