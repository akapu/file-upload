import { LitElement, html } from "lit";

class UploadResult extends LitElement {
  static properties = {
    error: { type: Boolean },
    errorText: { type: String },
    data: { type: Object },
  };

  get _title() {
    return this.error ? "Ошибка в загрузке файла" : "Файл успешно загружен";
  }

  render() {
    return html`
      <upload-header>
        <span slot="title">${this._title}</span>

        <span slot="hint"></span>
      </upload-header>
    `;
  }
}

customElements.define("upload-result", UploadResult);
