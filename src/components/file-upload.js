import { LitElement, html, css } from "lit";
import { theme } from "../theme.js";
import { FileUploadFormManager } from "../FileUploadFormManager.js";
import { KeyframesComposer } from "../KeyframesComposer.js";
import { ref, createRef } from "lit/directives/ref.js";
import { when } from "lit/directives/when.js";

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

      display: flex;
      align-items: center;

      overflow: hidden;
    }

    .content {
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

    _backgroundState: { type: String, state: true },
  };

  static Stages = {
    UPLOAD: "upload",
    FORM_LEAVING: "form leaving",
    RESULT_ENTERING: "result entering",
  };

  constructor() {
    super();

    this._fileUploadFormManager = new FileUploadFormManager();
    this._stage = FileUpload.Stages.UPLOAD;

    this._backgroundState = "form";

    this.initializeAnimations();
  }

  initializeAnimations() {
    this._formToResultBeforeResult = new KeyframesComposer(
      theme.animationDurations.formToResult
    );
    this._formToResultBeforeResult.setKeyframes([
      { keyframe: {}, stage: 0 },
      { keyframe: {}, stage: 1 },
      { keyframe: { height: "310px" }, stage: 2 },
    ]);

    this._formToResultAfterResult = new KeyframesComposer(
      theme.animationDurations.formToResult
    );
    this._formToResultAfterResult.setKeyframes([
      {
        keyframe: {
          height: "230px",
        },
        stage: 3,
      },
    ]);
  }

  _window = createRef();

  set proxy(newProxy) {
    this._fileUploadFormManager.proxy = newProxy;
  }

  get proxy() {
    return this._fileUploadFormManager.proxy;
  }

  async openResult() {
    this._stage = FileUpload.Stages.FORM_LEAVING;
    this._backgroundState = "error";

    await this._window.value.animate(
      this._formToResultBeforeResult.keyframesWithOffsets,
      {
        duration: this._formToResultBeforeResult.totalDuration,
        fill: "forwards",
      }
    ).finished;

    this._stage = FileUpload.Stages.RESULT_ENTERING;

    await this._window.value.animate(
      this._formToResultAfterResult.keyframesWithOffsets,
      {
        duration: this._formToResultAfterResult.totalDuration,
        fill: "forwards",
      }
    ).finished;
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

  get _showForm() {
    const stagesToShowForm = [
      FileUpload.Stages.UPLOAD,
      FileUpload.Stages.FORM_LEAVING,
    ];

    return stagesToShowForm.includes(this._stage);
  }

  render() {
    return html`
      <div ${ref(this._window)} class="window border-box">
        <file-upload-background
          .state=${this._backgroundState}
        ></file-upload-background>

        <close-button @click=${this.handleCloseButtonClick}></close-button>
        <div class="content">
          ${when(
            this._showForm,
            () => {
              return html`
                <form-file-upload
                  .leaving=${this._stage === FileUpload.Stages.FORM_LEAVING}
                  .formManager=${this._fileUploadFormManager}
                  @submit=${this.handleSubmit}
                ></form-file-upload>
              `;
            },
            () => {
              return html`
                <upload-result
                  .error=${this._fileUploadFormManager.error}
                  .errorText=${this._fileUploadFormManager.errorText}
                  .data=${this._fileUploadFormManager.data}
                ></upload-result>
              `;
            }
          )}
        </div>
      </div>
    `;
  }
}

customElements.define("file-upload", FileUpload);
