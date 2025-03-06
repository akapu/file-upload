import { LitElement, html, css } from "lit";
import { theme } from "../theme.js";

class SubmitButton extends LitElement {
  static styles = css`
    ${theme.utility.borderBox}
    ${theme.styles.removeDefaultButton}
    ${theme.utility.font}

    button {
      cursor: pointer;

      background: ${theme.colors.primary};

      color: white;
      font-weight: 400;
      font-size: 20px;
      line-height: 24px;

      width: 100%;
      height: 56px;
      border-radius: 30px;

      padding-top: 16px;
      padding-right: 86px;
      padding-bottom: 16px;
      padding-left: 86px;
    }

    button:disabled {
      background: #ccccce47;

      cursor: not-allowed;
    }
  `;

  static properties = {
    disabled: { type: Boolean },
  };

  constructor() {
    super();

    this.disabled = false;
  }

  render() {
    return html`
      <button class="border-box font" ?disabled=${this.disabled}>
        Загрузить
      </button>
    `;
  }
}

customElements.define("submit-button", SubmitButton);
