import { LitElement, html, css } from "lit";
import { theme } from "../theme.js";
import { createRef, ref } from "lit/directives/ref.js";
import { classMap } from "lit/directives/class-map.js";
import { KeyframesComposer } from "../KeyframesComposer.js";

class FileField extends LitElement {
  static styles = css`
    ${theme.utility.borderBox}
    ${theme.utility.font}
    ${theme.styles.removeDefaultButton}

    :host {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
    }

    .gapless {
      display: flex;
      flex-direction: column;
      align-items: center;

      width: 100%;
    }

    .top-gap {
      margin-top: 10px;
    }

    .dropzone {
      cursor: pointer;

      height: 257px;
      width: 100%;
      border-radius: 30px;
      padding-top: 42px;
      padding-right: 27px;
      padding-bottom: 17px;
      padding-left: 27px;

      background: #ffffff66;

      border: 1px solid #a5a5a5;

      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 14px;

      transition-duration: 0.22s;
      transition-timing-function: linear;
      transition-property: width, height, border-radius, opacity;
    }

    .dropzone.decreasing {
      height: 37.5px;
      width: 40px;

      border-radius: 4.37743px;

      opacity: 0;
    }

    .dropzone:disabled {
      cursor: not-allowed;
    }

    .hint {
      padding: 0;
      margin: 0;
      color: ${theme.colors.primary};

      flex-shrink: 1;
      overflow: hidden;

      font-weight: 400;
      font-size: 14px;
      line-height: 17px;
      text-align: center;
    }

    in-out-animated {
      align-self: stretch;
    }

    input {
      display: none;
    }
  `;

  static properties = {
    loading: { type: Boolean },
    disabled: { type: Boolean, reflect: true },
    decreasing: { type: Boolean },
    file: { type: Object },
    error: { type: Boolean },
    errorMessage: { type: String },
  };

  constructor() {
    super();

    this.disabled = false;
    this.file = null;
    this.loading = false;
    this.decreasing = false;
    this.error = false;
    this.errorMessage = "";

    this._initializeAnimations();
  }

  _initializeAnimations() {
    this._fileStatusIn = new KeyframesComposer(
      theme.animationDurations.fieldEnterLeave
    );
    this._fileStatusIn.setKeyframes([
      { keyframe: { height: "0px" }, stage: 0 },
      { keyframe: { height: "45px" }, stage: 1 },
    ]);

    this._fileStatusOut = new KeyframesComposer(
      theme.animationDurations.fieldEnterLeave
    );
    this._fileStatusOut.setKeyframes([
      { keyframe: { height: "45px" }, stage: 0 },
      { keyframe: { height: "0px" }, stage: 1 },
    ]);
  }

  fileInput = createRef();
  fileStatus = createRef();

  handleFileSelect(e) {
    this.fileStatus.value.startAnimation();

    this.file = e.target.files[0];
    this.fileInput.value.value = null;

    if (this.file) {
      this.dispatchFileSelected();
    }
  }

  passClickToInput() {
    this.shadowRoot.querySelector("input").click();
  }

  drop(e) {
    e.preventDefault();

    if (this.disabled) return;

    const files = e.dataTransfer.files;
    if (files.length > 0) {
      this.fileStatus.value.startAnimation();

      this.file = files[0];

      this.dispatchFileSelected();
    }
  }

  handleFileRemoveRequested() {
    this.clearField();
  }

  dragover(e) {
    e.preventDefault();
  }

  dispatchFileSelected() {
    const fileSelected = new CustomEvent("file-selected", {
      detail: { file: this.file },
      bubbles: true,
      composed: true,
    });

    this.dispatchEvent(fileSelected);
  }

  clearField() {
    this.fileInput.value.value = null;
    this.file = null;
    this.dispatchFileSelected();
  }

  handleAnimationCompleted() {
    this.dispatchFileLoaded();
  }

  dispatchFileLoaded() {
    const fileLoaded = new CustomEvent("file-loaded", {
      bubbles: true,
      composed: true,
    });

    this.dispatchEvent(fileLoaded);
  }

  get _hint() {
    if (this.file && this.error) return this.errorMessage || "Файл не прошел валидацию";

    return this.loading
      ? "Файл загружается на сервер"
      : html`Перенесите ваш файл <br />
          в эту область`;
  }

  get dropzoneClasses() {
    return {
      decreasing: this.decreasing,
      dropzone: true,
      "border-box": true,
    };
  }

  render() {
    return html`
      <div class="gapless">
        <button
          class=${classMap(this.dropzoneClasses)}
          @click=${this.passClickToInput}
          @drop=${this.drop}
          @dragover=${this.dragover}
          ?disabled=${this.disabled}
        >
          <docs-image
            ?rainbow=${this.loading}
            ?decreasing=${this.decreasing}
          ></docs-image>

          <p class="hint font">${this._hint}</p>
        </button>

        <in-out-animated
          .shown=${Boolean(this.file)}
          .in=${this._fileStatusIn}
          .out=${this._fileStatusOut}
        >
          <file-status
            class="top-gap"
            ?disabled=${this.disabled}
            @file-remove-requested=${this.handleFileRemoveRequested}
            @animation-completed=${this.handleAnimationCompleted}
            ${ref(this.fileStatus)}
            .name=${this.file?.name}
            duration="1200"
            delay="140"
            ?decreasing=${this.decreasing}
          ></file-status>
        </in-out-animated>
      </div>

      <input
        ?disabled=${this.disabled}
        type="file"
        accept=".txt,.json,.csv"
        @change=${this.handleFileSelect}
        ${ref(this.fileInput)}
      />
    `;
  }
}

customElements.define("file-field", FileField);
