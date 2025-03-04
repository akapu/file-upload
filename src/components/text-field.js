import { LitElement, html, css } from "lit-element";
import { theme } from "../theme.js";

class TextField extends LitElement {
  static styles = css`
    ${theme.styles.font}
    ${theme.utility.borderBox}

    input {
      width: 277px;
      height: 35px;
      border-radius: 10px;
      padding-top: 6px;
      padding-right: 9px;
      padding-bottom: 6px;
      padding-left: 9px;

      font-family: inherit;
      font-weight: 400;
      font-size: 17.5px;
      line-height: 21px;
      letter-spacing: 0%;

      color: #5f5cf0;
      background: #f1f1f1;

      border: 1px solid #a5a5a5;
    }

    input::placeholder {
      color: #a5a5a5;
    }
  `;

  static properties = {
    disabled: { type: Boolean },
  };

  constructor() {
    super();
    this.disabled = false;
  }

  changeValue(e) {
    const newValue = e.target.value;

    const changeEvent = new CustomEvent("value-changed", {
      detail: { value: newValue },
      bubbles: true,
      composed: true,
    });

    this.dispatchEvent(changeEvent);
  }

  render() {
    return html`
      <label>
        <input
          class="border-box"
          type="text"
          placeholder="Название файла"
          ?disabled=${this.disabled}
          @change=${this.changeValue}
        />
      </label>
    `;
  }
}

customElements.define("text-field", TextField);
