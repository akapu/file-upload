import { LitElement, html, css } from "lit";
import { when } from "lit/directives/when.js";
import { classMap } from "lit/directives/class-map.js";
import { theme } from "../theme.js";

export class AnimatedProgress extends LitElement {
  static styles = css`
    ${theme.utility.font}

    :host {
      display: flex;
      align-items: center;
    }

    .info {
      flex-grow: 1;

      display: flex;
      flex-direction: column;
      gap: 7px;
    }

    .initial-info {
      height: 100%;
    }

    .finish-info {
      height: 19px;
    }

    .text-info {
      color: ${theme.colors.primary};

      display: flex;
      justify-content: space-between;
      gap: 10px;

      font-size: 10px;
      line-height: 12px;
    }

    .transition {
      transition-duration: 0.6s;
      transition-timing-function: linear;
    }

    .info-transition {
      transition-property: height;
    }

    .text-info-transition {
      transition-property: font-size, line-height;
    }

    .name-text-info {
      font-weight: 500;

      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      flex: 1 1 auto;
      min-width: 0;
    }

    .finish-name-text-info {
      font-size: 15.5333px;
      line-height: 19px;
    }

    .progress-text-info {
      font-weight: 400;
      flex-shrink: 0;
    }

    .finish-progress-text-info {
      font-size: 13.8462px;
      line-height: 17px;
    }
  `;

  static properties = {
    name: { type: String },
    delay: { type: Number },
    duration: { type: Number },
    _progress: { type: Number, state: true },
    _animationInterval: { type: Number, state: true },
  };

  constructor() {
    super();

    this._progress = 0;
    this.delay = 0;
    this.duration = 1000;
    this.name = "";
    this._animationInterval = 0;
  }

  connectedCallback() {
    super.connectedCallback();

    setTimeout(() => {
      this.startAnimation();
    }, this.delay);
  }

  startAnimation() {
    const delayBetweenFrames = this.duration / 100;
    this._progress = 0;
    clearInterval(this._animationInterval);

    this._animationInterval = setInterval(() => {
      if (this.progressCompleted) {
        clearInterval(this._animationInterval);
        return;
      }

      this._progress += 1;
    }, delayBetweenFrames);
  }

  get progressCompleted() {
    return this._progress === 100;
  }

  get infoClasses() {
    return {
      transition: this.progressCompleted,
      "info-transition": this.progressCompleted,
      info: true,
      "initial-info": !this.progressCompleted,
      "finish-info": this.progressCompleted,
    };
  }

  get nameTextInfoClasses() {
    return {
      transition: this.progressCompleted,
      "text-info-transition": this.progressCompleted,
      "name-text-info": true,
      "finish-name-text-info": this.progressCompleted,
    };
  }

  get progressTextInfoClasses() {
    return {
      transition: this.progressCompleted,
      "text-info-transition": this.progressCompleted,
      "progress-text-info": true,
      "finish-progress-text-info": this.progressCompleted,
    };
  }

  render() {
    return html`
      <div class=${classMap(this.infoClasses)}>
        <div class="text-info font">
          <span class=${classMap(this.nameTextInfoClasses)}>
            ${this.name}
          </span>

          <span class=${classMap(this.progressTextInfoClasses)}>
            ${this._progress}%
          </span>
        </div>

        ${when(
          !this.progressCompleted,
          () => html`
            <progress-bar
              .duration=${this.duration}
              .delay=${this.delay}
            ></progress-bar>
          `
        )}
      </div>
    `;
  }
}

customElements.define("animated-progress", AnimatedProgress);
