import { LitElement, html, css } from "lit";

class FileField extends LitElement {
  static styles = css`
    input {
      display: none;
    }
  `;

  handleFileSelect(e) {}

  passClickToInput() {
    this.shadowRoot.querySelector("input").click();
  }

  render() {
    return html`
      <div @click=${this.passClickToInput}>
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
