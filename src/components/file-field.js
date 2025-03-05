import { LitElement, html, css } from "lit";
import { theme } from "../theme.js";

class FileField extends LitElement {
  static styles = css`
    ${theme.styles.font}
    ${theme.utility.borderBox}
    ${theme.styles.removeDefaultButton}

    .dropzone {
      cursor: pointer;

      height: 257;
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

  render() {
    return html`
      <button
        class="dropzone"
        @click=${this.passClickToInput}
        @drop=${this.drop}
        @dragover=${this.dragover}
        ?disabled=${this.disabled}
      >
        <docs-image></docs-image>
      </button>

      <input
        ?disabled=${this.disabled}
        type="file"
        accept=".txt,.json,.csv"
        @change=${this.handleFileSelect}
      />
    `;
  }
}

customElements.define("file-field", FileField);
