import { LitElement, html } from "lit";

class UploadResult extends LitElement {
  static properties = {
    error: { type: Boolean },
    errorText: { type: String },
    data: { type: Object },
  };

  render() {
    return html``;
  }
}

customElements.define("upload-result", UploadResult);
