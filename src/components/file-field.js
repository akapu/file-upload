import { LitElement, html, css } from "lit";
import DocsImage from "../assets/docs.svg";

class FileField extends LitElement {
  static styles = css`
    input {
      display: none;
    }
  `;

  handleFileSelect(e) {}

  render() {
    return html`
      <object type="image/svg+xml" data="${DocsImage}"></object>
      <input
        type="file"
        accept=".txt,.json,.csv"
        @change=${this.handleFileSelect}
      />
    `;
  }
}

customElements.define("file-field", FileField);
