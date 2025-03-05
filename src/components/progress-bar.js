import { LitElement, html, css } from "lit";
import { theme } from "../theme.js";

export class ProgressBar extends LitElement {
  static styles = css`
    ${theme.utility.borderBox}

    .progress-bar {
      width: 182px;
      height: 5px;
      border-radius: 10px;

      background: white;
    }
  `;

  static properties = {
    progress: { type: Number },
  };

  constructor() {
    super();
    this.progress = 0;
  }

  render() {
    return html`
    <div class="progress-bar"></div>
    `;
  }
}

customElements.define("progress-bar", ProgressBar);
