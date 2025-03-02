import { LitElement, html } from "lit-element";

class TextField extends LitElement {
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
      detail: { value: newValue},
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
