import { LitElement, html, css } from "lit";
import { theme } from "../theme.js";
import { createRef, ref } from "lit/directives/ref.js";

class FileField extends LitElement {
  static styles = css`
    ${theme.utility.borderBox}
    ${theme.utility.font}
    ${theme.styles.removeDefaultButton}

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
    }

    .dropzone:disabled {
      cursor: not-allowed;
    }

    .hint {
      padding: 0;
      margin: 0;
      color: ${theme.colors.primary};

      font-weight: 400;
      font-size: 14px;
      line-height: 17px;
      text-align: center;
    }

    input {
      display: none;
    }
  `;

  static properties = {
    disabled: { type: Boolean, reflect: true },
  };

  constructor() {
    super();

    this.disabled = false;
  }

  fileInput = createRef();

  handleFileSelect(e) {
    const file = e.target.files[0];
    if (file) {
      this.dispatchFileSelected(file);
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
      this.dispatchFileSelected(files[0]);
    }
  }

  dragover(e) {
    e.preventDefault();
  }

  dispatchFileSelected(file) {
    const fileSelected = new CustomEvent("file-selected", {
      detail: { file },
      bubbles: true,
      composed: true,
    });

    this.dispatchEvent(fileSelected);
  }

  dispatchFieldCleared() {
    const fieldCleared = new CustomEvent("field-cleared", {
      bubbles: true,
      composed: true,
    });

    this.dispatchEvent(fieldCleared);
  }

  clearField() {
    this.fileInput.value.value = null;
    this.dispatchFieldCleared();
  }

  render() {
    return html`
      <button
        class="dropzone border-box"
        @click=${this.passClickToInput}
        @drop=${this.drop}
        @dragover=${this.dragover}
        ?disabled=${this.disabled}
      >
        <docs-image></docs-image>

        <p class="hint font">
          Перенесите ваш файл <br />
          в эту область
        </p>
      </button>

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
