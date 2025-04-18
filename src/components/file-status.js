import { LitElement, html, css } from "lit";
import { theme } from "../theme.js";
import { createRef, ref } from "lit/directives/ref.js";
import { KeyframesComposer } from "../KeyframesComposer.js";

class FileStatus extends LitElement {
  static styles = css`
    ${theme.utility.borderBox}
    ${theme.styles.removeDefaultButton}

    :host {
      display: block;
    }

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

      flex-shrink: 0;

      transition: color 0.14s linear;
    }

    button:disabled {
      cursor: not-allowed;

      color: #a5a5a5;
    }

    animated-progress {
      flex: 1 1 auto;
      min-width: 0;

      height: 100%;
    }

    .indicator {
      width: 37px;
      height: 28px;
      border-radius: 10px;

      background: ${theme.colors.primary};

      flex-shrink: 0;
    }
  `;

  static properties = {
    name: { type: String },
    delay: { type: Number },
    duration: { type: Number },
    disabled: { type: Boolean },
    decreasing: { type: Boolean },
  };

  constructor() {
    super();

    this.delay = 0;
    this.duration = 1000;
    this.name = "";
    this.disabled = false;
    this.deacreasing = false;
  }

  animatedProgress = createRef();

  startAnimation() {
    this.animatedProgress.value.startAnimation();
  }

  dispatchFileRemoveRequest() {
    const fileRemoveRequested = new CustomEvent("file-remove-requested", {
      bubbles: true,
      composed: true,
    });

    this.dispatchEvent(fileRemoveRequested);
  }

  dispatchAnimationCompleted() {
    const animationCompleted = new CustomEvent("animation-completed", {});
    this.dispatchEvent(animationCompleted);
  }

  updated(changedProperties) {
    if (changedProperties.has("decreasing") && this.decreasing) {
      this._startDecreasing();
    }
  }

  _startDecreasing() {
    const keyframesComposer = new KeyframesComposer(
      theme.animationDurations.formToResult
    );
    keyframesComposer.setKeyframes([
      { keyframe: {}, stage: 0 },
      {
        keyframe: {
          opacity: "0.5",
        },
        stage: 1,
      },
      {
        keyframe: {
          transform: "scale(0)",
          opacity: "0",
        },
        stage: 2,
      },
    ]);

    this.animate(keyframesComposer.keyframesWithOffsets, {
      duration: keyframesComposer.totalDuration,
      fill: "backwards",
    });
  }

  render() {
    return html`
      <div class="outline border-box">
        <div class="indicator"></div>

        <animated-progress
          ${ref(this.animatedProgress)}
          .name=${this.name}
          .duration=${this.duration}
          .delay=${this.delay}
          @animation-completed=${this.dispatchAnimationCompleted}
        ></animated-progress>

        <button
          @click=${this.dispatchFileRemoveRequest}
          ?disabled=${this.disabled}
        >
          <cross-icon width="13" height="13"></cross-icon>
        </button>
      </div>
    `;
  }
}

customElements.define("file-status", FileStatus);
