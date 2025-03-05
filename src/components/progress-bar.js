import { LitElement, html, css } from "lit";
import { theme } from "../theme.js";
import { classMap } from "lit/directives/class-map.js";
import { styleMap } from "lit/directives/style-map.js";

export class ProgressBar extends LitElement {
  static styles = css`
    ${theme.utility.borderBox}

    .progress-bar {
      width: 100%;
      height: 5px;
      border-radius: 10px;
      padding: 0.5px 1px;

      background: white;
    }

    .visual-progress {
      background: ${theme.colors.primary};

      height: 4px;
      border-radius: 10px;
    }

    .initial {
      width: 3px;
    }

    .final {
      width: 100%;
    }

    .transition {
      transition-property: width;
      transition-timing-function: linear;
    }
  `;

  static properties = {
    duration: { type: Number },
    delay: { type: Number },
    _started: { type: Boolean, state: true },
  };

  constructor() {
    super();

    this.duration = 1000;
    this.delay = 0;
    this._started = false;
  }

  connectedCallback() {
    super.connectedCallback();

    setTimeout(() => {
      this.startAnimation();
    }, this.delay);
  }

  startAnimation() {
    this._started = true;
  }

  get durationStyles() {
    return { "transition-duration": this.duration + "ms" };
  }

  get visualProgressClasses() {
    return {
      "visual-progress": true,

      initial: !this._started,
      final: this._started,
      transition: this._started,
    };
  }

  render() {
    return html`
      <div class="progress-bar border-box">
        <div
          class=${classMap(this.visualProgressClasses)}
          style=${styleMap(this.durationStyles)}
        ></div>
      </div>
    `;
  }
}

customElements.define("progress-bar", ProgressBar);
