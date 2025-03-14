import { LitElement, html, css } from "lit";
import { theme } from "../theme.js";
import { createRef, ref } from "lit/directives/ref.js";
import { classMap } from "lit/directives/class-map.js";

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
    _file: { type: Object, state: true },
  };

  constructor() {
    super();

    this.disabled = false;
    this._file = null;
    this.loading = false;
    this.decreasing = false;
  }

  fileInput = createRef();
  fileStatus = createRef();

  handleFileSelect(e) {
    this.fileStatus.value.startAnimation();

    this._file = e.target.files[0];
    this.fileInput.value.value = null;

    if (this._file) {
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
      if (this._file) this.fileStatus.value.startAnimation();

      this._file = files[0];

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
      detail: { file: this._file },
      bubbles: true,
      composed: true,
    });

    this.dispatchEvent(fileSelected);
  }

  clearField() {
    this.fileInput.value.value = null;
    this._file = null;
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

  get hint() {
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

          <p class="hint font">${this.hint}</p>
        </button>

        <in-out-animated .shown=${Boolean(this._file)}>
          <file-status
            class="top-gap"
            ?disabled=${this.disabled}
            @file-remove-requested=${this.handleFileRemoveRequested}
            @animation-completed=${this.handleAnimationCompleted}
            ${ref(this.fileStatus)}
            .name=${this._file?.name}
            duration="1200"
            delay="140"
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
