import { LitElement, html, css } from "lit";

class FileUpload extends LitElement {
  static styles = css``;

  render() {
    return html` <file-field></file-field> `;
  }
}

customElements.define("file-upload", FileUpload);
