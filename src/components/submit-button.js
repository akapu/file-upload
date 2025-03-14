import { LitElement, html, css } from "lit";
import { theme } from "../theme.js";
import { createRef, ref } from "lit/directives/ref.js";
import { KeyframesComposer } from "../KeyframesComposer.js";

class SubmitButton extends LitElement {
  static styles = css`
    ${theme.utility.borderBox}
    ${theme.styles.removeDefaultButton}
    ${theme.utility.font}
    
    :host {
      display: flex;
      justify-content: center;
      width: 100%;
    }

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

      transition: background-color 0.6s linear;
      transition: width, height 0.22s linear;

      overflow: hidden;
    }

    button:disabled {
      background: #bbb9d2;

      cursor: not-allowed;
    }
  `;

  static properties = {
    disabled: { type: Boolean },
    decreasing: { type: Boolean },
  };

  _button = createRef();

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
          transform: "scale(0)",
          opacity: "0",
        },
        stage: 1,
      },
    ]);

    this._button.value.animate(keyframesComposer.keyframesWithOffsets, {
      duration: keyframesComposer.totalDuration,
      fill: "forwards",
    });
  }

  constructor() {
    super();

    this.disabled = false;
    this.decreasing = false;
  }

  render() {
    return html`
      <button
        class="border-box font"
        ?disabled=${this.disabled}
        ${ref(this._button)}
      >
        Загрузить
      </button>
    `;
  }
}

customElements.define("submit-button", SubmitButton);
