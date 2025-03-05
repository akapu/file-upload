import { LitElement, html, css } from "lit";
import { theme } from "../theme.js";

class FileStatus extends LitElement {
  static styles = css`
    ${theme.utility.borderBox}
    ${theme.styles.removeDefaultButton}
    ${theme.utility.font}

    .outline {
      width: 100%;
      height: 35px;
      border-radius: 10px;
      padding: 3px;
      padding-right: 13px;

      background: #f1f1f1;

      border: 1px solid #a5a5a5;

      display: flex;
      align-items: center;
      justify-content: space-evenly;
      gap: 14px;
    }

    button {
      cursor: pointer;
      color: ${theme.colors.primary};

      padding-top: 2px;
    }

    .info {
      flex-grow: 1;

      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    .text-info {
      color: ${theme.colors.primary};

      display: flex;
      justify-content: space-between;

      font-size: 10px;
      line-height: 12px;
    }

    .name-text-info {
      font-weight: 500;
    }

    .progress-text-info {
      font-weight: 400;
    }

    .indicator {
      width: 37px;
      height: 28px;
      border-radius: 10px;

      background: ${theme.colors.primary};
    }
  `;

  static properties = {
    name: { type: String },
    delay: { type: Number },
    duration: { type: Number },
    _progress: { type: Number, state: true },
  };

  constructor() {
    super();

    this._progress = 0;
    this.delay = 0;
    this.duration = 1000;
    this.name = "";
  }

  connectedCallback() {
    super.connectedCallback();

    setTimeout(() => {
      this.startAnimation();
    }, this.delay);
  }

  startAnimation() {
    const delayBetweenFrames = this.duration / 100;

    const interval = setInterval(() => {
      if (this._progress >= 100) {
        clearInterval(interval);
        return;
      }

      this._progress += 1;
    }, delayBetweenFrames);
  }

  render() {
    return html`
      <div class="outline border-box font">
        <div class="indicator"></div>

        <div class="info">
          <div class="text-info font">
            <span class="name-text-info"> ${this.name} </span>

            <span class="progress-text-info"> ${this._progress}% </span>
          </div>

          <div class="progress-bar"></div>
        </div>

        <button><cross-icon width="13" height="13"></cross-icon></button>
      </div>
    `;
  }
}

customElements.define("file-status", FileStatus);
