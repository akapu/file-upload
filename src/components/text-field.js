import { LitElement, html } from "lit-element";

class TextField extends LitElement {
  static properties = {
    disabled: { type: Boolean },
    value: {
      type: String,
      reflect: true,
    },
  };

  constructor() {
    super();
    this.value = "";
    this.disabled = false;
  }

  changeValue(e) {
    const newValue = e.target.value;
    this.value = newValue;

    const changeEvent = new CustomEvent("value-changed", {
      detail: { value: this.value },
      bubbles: true,
      composed: true,
    });

    this.dispatchEvent(changeEvent);
  }

  render() {
    return html`
      <label>
        <input
          type="text"
          ?disabled=${this.disabled}
          @change=${this.changeValue}
        />
      </label>
    `;
  }
}

customElements.define("text-field", TextField);
