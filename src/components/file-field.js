import { LitElement, html, css } from "lit";

class FileField extends LitElement {
  static styles = css`
    .dropzone {
      cursor: pointer;
    }

    input {
      display: none;
    }
  `;

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
      <div
        class="dropzone"
        @click=${this.passClickToInput}
        @drop=${this.drop}
        @dragover=${this.dragover}
      >
        <docs-image></docs-image>
      </div>

      <input
        type="file"
        accept=".txt,.json,.csv"
        @change=${this.handleFileSelect}
      />
    `;
  }
}

customElements.define("file-field", FileField);
