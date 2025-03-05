import { LitElement, html, css } from "lit";
import { theme } from "../theme.js";

export class ProgressBar extends LitElement {
  static styles = css`
    ${theme.utility.borderBox}

    .progress-bar {
      width: 100%;
      height: 6px;
      border-radius: 10px;

      background: white;
    }
  `;

  static properties = {
    duration: { type: Number },
    delay: { type: Number },
  };

  constructor() {
    super();

    this.duration = 1000;
    this.delay = 0;
  }

  render() {
    return html`
    <div class="progress-bar"></div>
    `;
  }
}

customElements.define("progress-bar", ProgressBar);
