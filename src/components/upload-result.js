import { LitElement, html, css } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { repeat } from "lit/directives/repeat.js";
import { when } from "lit/directives/when.js";

class UploadResult extends LitElement {
  static styles = css`
    :host {
      height: 176px;
      width: 100%;

      display: flex;
    }

    .text-center {
      text-align: center;
    }
  `;

  static properties = {
    error: { type: Boolean },
    errorStatus: { type: Number },
    errorText: { type: String },
    data: { type: Object },
  };

  constructor() {
    super();

    this.error = false;
    this.errorStatus = 0;
    this.errorText = "";
    this.data = null;
  }

  get _title() {
    return this.error ? "Ошибка в загрузке файла" : "Файл успешно загружен";
  }

  get _errorMessage() {
    if (!this.data) return html``;

    return html`<br />"${this.data.error}"`;
  }

  get _errorHeader() {
    const statusMessages = {
      400: "Bad Request",
      401: "Unauthorized",
      403: "Forbidden",
      404: "Not Found",
      500: "Internal Server Error",
    };

    let statusMessage =
      this.errorText || statusMessages[this.errorStatus] || "";

    return html`${this.errorStatus} ${statusMessage}`;
  }

  get _renderData() {
    if (!this.data) return html``;

    return html`${repeat(
      Object.entries(this.data),
      ([field]) => field,
      ([field, value]) => {
        let renderValue = value;
        if (field === "timestamp")
          renderValue = new Date(value).toLocaleTimeString('ru-RU');

        return html`${field}: ${renderValue}<br />`;
      }
    )}`;
  }

  render() {
    return html`
      <upload-header>
        <span slot="title">${this._title}</span>

        <div slot="hint" class=${classMap({ "text-center": this.error })}>
          ${when(
            this.error,
            () => html`Error: ${this._errorHeader}${this._errorMessage}`,
            () => html`${this._renderData}`
          )}
        </div>
      </upload-header>
    `;
  }
}

customElements.define("upload-result", UploadResult);
