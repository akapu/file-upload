import { LitElement, html, css } from "lit";
import { theme } from "../theme.js";

class CloseButton extends LitElement {
  static styles = css`
    ${theme.utility.borderBox}
    ${theme.styles.removeDefaultButton}

    .circle {
      width: 34px;
      height: 34px;
      border-radius: 17px;

      display: flex;
      justify-content: center;
      align-items: center;

      cursor: pointer;
    }

    cross-icon {
      color: white;
    }
  `;

  render() {
    return html`
      <button class="circle border-box">
        <cross-icon width="16" height="16"></cross-icon>
      </button>
    `;
  }
}

customElements.define("close-button", CloseButton);
