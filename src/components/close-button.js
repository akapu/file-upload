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

      cursor: pointer;

      position: relative;

      background: #ccccce47;
    }

    cross-icon {
      color: white;

      position: absolute;
      top: 9px;
      left: 9px;
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
