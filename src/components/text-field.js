import { LitElement, html, css } from "lit-element";
import { theme } from "../theme.js";
import { classMap } from "lit/directives/class-map.js";

class TextField extends LitElement {
  static styles = css`
    ${theme.styles.font}
    ${theme.utility.borderBox}
    ${theme.styles.removeDefaultButton}

    .text-field {
      position: relative;
    }

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

      color: ${theme.colors.primary};
      background: #f1f1f1;

      border: 1px solid #a5a5a5;
    }

    input::placeholder {
      color: #a5a5a5;
    }

    .clear-button {
      width: 16px;
      height: 16px;
      position: absolute;
      top: 9.5px;
      right: 9px;
      color: #a5a5a5;
      cursor: not-allowed;
    }

    .clear-button.active {
      color: ${theme.colors.primary};
      cursor: pointer;
    }
  `;

  static properties = {
    disabled: { type: Boolean },
    _active: { type: Boolean, state: true },
    _value: { type: String, state: true },
  };

  constructor() {
    super();
    this.disabled = false;
    this._active = false;
    this._value = "";
  }

  dispatchChangeEvent(newValue) {
    const changeEvent = new CustomEvent("value-changed", {
      detail: { value: newValue },
      bubbles: true,
      composed: true,
    });

    this.dispatchEvent(changeEvent);
  }

  handleChange(e) {
    const newValue = e.target.value;
    this.setValue(newValue);
  }

  setValue(value) {
    this.dispatchChangeEvent(value);
    this._active = Boolean(value);
    this._value = value;
  }

  clearValue() {
    this.setValue("");
  }

  render() {
    return html`
      <div class="text-field">
        <input
          .value=${this._value}
          class="border-box"
          type="text"
          placeholder="Название файла"
          ?disabled=${this.disabled}
          @input=${this.handleChange}
        />

        <button
          ?disabled=${!this._active}
          class=${classMap({ "clear-button": true, active: this._active })}
          @click=${this.clearValue}
        >
          <cross-icon></cross-icon>
        </button>
      </div>
    `;
  }
}

customElements.define("text-field", TextField);
