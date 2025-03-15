import { LitElement, html, css } from "lit";
import { theme } from "../theme.js";
import { FileUploadFormManager } from "../FileUploadFormManager.js";
import { KeyframesComposer } from "../KeyframesComposer.js";
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

      display: flex;
      align-items: center;
      justify-content: center;

      overflow: hidden;
    }

    .content {
      flex-grow: 1 1 auto;
      min-width: 0;
    }

    .close-button {
      position: absolute;
      top: 11px;
      right: 12px;
    }
  `;

  static properties = {
    // решает проблему с cors
    proxy: { type: String },

    _fileUploadFormManager: { type: Object, state: true },
    _stage: { type: String, state: true },
    _animationEnabled: { type: Boolean, state: true },
  };

  static Stages = {
    UPLOAD: "upload",
    FORM_LEAVING: "form leaving",
    RESULT_ENTERING: "result entering",
    RESULT_LEAVING: "result leaving",
  };

  constructor() {
    super();

    this._fileUploadFormManager = new FileUploadFormManager();
    this._fileUploadFormManager.proxy = this.proxy;
    this._stage = FileUpload.Stages.UPLOAD;
    this._animationEnabled = false;

    this._initializeAnimations();
  }

  _initializeAnimations() {
    this._windowBeforeResult = new KeyframesComposer(
      theme.animationDurations.formToResult
    );
    this._windowBeforeResult.setKeyframes([
      { keyframe: {}, stage: 0 },
      { keyframe: {}, stage: 1 },
      { keyframe: { height: "310px" }, stage: 2 },
    ]);

    this._windowAfterResult = new KeyframesComposer(
      theme.animationDurations.formToResult
    );
    this._windowAfterResult.setKeyframes([
      {
        keyframe: {
          height: "230px",
        },
        stage: 3,
      },
    ]);

    this._windowBeforeForm = new KeyframesComposer(
      theme.animationDurations.resultToForm
    );
    this._windowBeforeForm.setKeyframes([
      { keyframe: {}, stage: 0 },
      { keyframe: {}, stage: 1 },
      { keyframe: { height: "310px" }, stage: 2 },
    ]);

    this._windowAfterForm = new KeyframesComposer(
      theme.animationDurations.resultToForm
    );
    this._windowAfterForm.setKeyframes([
      { keyframe: { height: "479px" }, stage: 3 },
    ]);

    this._closeButtonLeaving = new KeyframesComposer(
      theme.animationDurations.formToResult
    );
    this._closeButtonLeaving.setKeyframes([
      { keyframe: {}, stage: 0 },
      {
        keyframe: {
          transform: "translateY(100px)",
          opacity: "0",
        },
        stage: 1,
      },
    ]);

    const resultInDurations = [
      0,
      ...theme.animationDurations.formToResult.slice(3),
    ];

    this._closeButtonIn = new KeyframesComposer(resultInDurations);
    this._closeButtonIn.setKeyframes([
      {
        keyframe: {
          transform: "translateY(100px)",
          opacity: "0",
        },
        stage: 0,
      },
      {
        keyframe: {
          transform: "translateY(70px)",
          opacity: "0.3",
        },
        stage: 1,
      },
      {
        keyframe: {
          transform: "translateY(0px)",
          opacity: "1",
        },
        stage: 2,
      },
    ]);

    this._resultIn = new KeyframesComposer(resultInDurations);
    this._resultIn.setKeyframes([
      {
        keyframe: {
          opacity: 0,
          transform: "scale(0)",
        },
        stage: 0,
      },
      {
        keyframe: {
          opacity: "0.3",
          transform: "scale(0.3)",
        },
        stage: 1,
      },
      {
        keyframe: {
          opacity: "1",
          transform: "scale(1)",
        },
        stage: 2,
      },
    ]);

    this._resultOut = new KeyframesComposer(
      theme.animationDurations.resultToForm
    );
    this._resultOut.setKeyframes([
      {
        keyframe: {},
        stage: 0,
      },
      {
        keyframe: {
          opacity: "0.3",
          transform: "scale(0.3)",
        },
        stage: 1,
      },
      {
        keyframe: {
          opacity: 0,
          transform: "scale(0)",
        },
        stage: 2,
      },
    ]);

    this._formOut = new KeyframesComposer([]);

    const formInDurations = [
      0,
      ...theme.animationDurations.resultToForm.slice(3),
    ];

    this._formIn = new KeyframesComposer(formInDurations);
    this._formIn.setKeyframes([
      {
        keyframe: { opacity: 0, transform: "scale(0)" },
        stage: 0,
      },
      {
        keyframe: {
          opacity: "0.5",
          transform: "scale(0.5)",
        },
        stage: 1,
      },
      {
        keyframe: {
          opacity: 1,
          transform: "scale(1)",
        },
        stage: 2,
      },
    ]);
  }

  firstUpdated() {
    this._animationEnabled = true;
  }

  _window = createRef();
  _closeButton = createRef();

  set proxy(newProxy) {
    this._fileUploadFormManager.proxy = newProxy;
  }

  async _openResult() {
    this._stage = FileUpload.Stages.FORM_LEAVING;

    await this._window.value.animate(
      this._windowBeforeResult.keyframesWithOffsets,
      {
        duration: this._windowBeforeResult.totalDuration,
        fill: "forwards",
      }
    ).finished;

    if (!this._fileUploadFormManager.error)
      this._fileUploadFormManager.clearFields();

    this._stage = FileUpload.Stages.RESULT_ENTERING;

    await this._window.value.animate(
      this._windowAfterResult.keyframesWithOffsets,
      {
        duration: this._windowAfterResult.totalDuration,
        fill: "forwards",
      }
    ).finished;
  }

  async _openForm() {
    this._stage = FileUpload.Stages.RESULT_LEAVING;

    await this._window.value.animate(
      this._windowBeforeResult.keyframesWithOffsets,
      { duration: this._windowBeforeResult.totalDuration, fill: "forwards" }
    ).finished;

    this._stage = FileUpload.Stages.UPLOAD;

    await this._window.value.animate(
      this._windowAfterForm.keyframesWithOffsets,
      { duration: this._windowAfterForm.totalDuration, fill: "forwards" }
    ).finished;
  }

  _handleSubmit(event) {
    this.requestUpdate(); // перед загрузкой файла

    event.detail.submitPromise.then(() => this._openResult()); // после загрузки файла
  }

  _handleCloseButtonClick() {
    if (this._stage === FileUpload.Stages.UPLOAD) {
      this._dispatchCloseEvent();
    }

    if (this._stage === FileUpload.Stages.RESULT_ENTERING) {
      this._openForm();
    }
  }

  _dispatchCloseEvent() {
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

  get _showResult() {
    const stagesToShowResult = [FileUpload.Stages.RESULT_ENTERING];

    return stagesToShowResult.includes(this._stage);
  }

  get _showCloseButton() {
    const stagesToShowCloseButton = [
      FileUpload.Stages.RESULT_ENTERING,
      FileUpload.Stages.UPLOAD,
    ];

    return stagesToShowCloseButton.includes(this._stage);
  }

  get _backgroundState() {
    if (this._stage === FileUpload.Stages.UPLOAD) {
      return "form";
    }

    if (this._fileUploadFormManager.error) return "error";

    return "success";
  }

  render() {
    return html`
      <div ${ref(this._window)} class="window border-box">
        <file-upload-background
          .state=${this._backgroundState}
        ></file-upload-background>

        <in-out-animated
          .shown=${this._showCloseButton}
          .out=${this._closeButtonLeaving}
          .in=${this._closeButtonIn}
          .animationEnabled=${this._animationEnabled}
          class="close-button"
        >
          <close-button @click=${this._handleCloseButtonClick}></close-button>
        </in-out-animated>

        <div class="content">
          <in-out-animated
            .shown=${this._showForm}
            .in=${this._formIn}
            .out=${this._formOut}
            .animationEnabled=${this._animationEnabled}
          >
            <form-file-upload
              .leaving=${this._stage === FileUpload.Stages.FORM_LEAVING}
              .formManager=${this._fileUploadFormManager}
              @submit=${this._handleSubmit}
            ></form-file-upload>
          </in-out-animated>

          <in-out-animated
            .shown=${this._showResult}
            .in=${this._resultIn}
            .out=${this._resultOut}
          >
            <upload-result
              .error=${this._fileUploadFormManager.error}
              .errorStatus=${this._fileUploadFormManager.errorStatus}
              .errorText=${this._fileUploadFormManager.errorText}
              .data=${this._fileUploadFormManager.data}
            ></upload-result>
          </in-out-animated>
        </div>
      </div>
    `;
  }
}

customElements.define("file-upload", FileUpload);
