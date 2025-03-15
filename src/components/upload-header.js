import { LitElement, html, css } from "lit";
import { theme } from "../theme";
import { KeyframesComposer } from "../KeyframesComposer";

class UploadHeader extends LitElement {
  static styles = css`
    ${theme.utility.font}

    :host {
      width: 100%;
    }

    header {
      color: white;

      display: flex;
      flex-direction: column;
      gap: 7px;
      align-items: center;
    }

    .title {
      font-weight: 500;
      font-size: 20px;
      line-height: 24px;
      padding: 0;
      margin: 0;
    }

    .hint {
      font-weight: 200;
      font-size: 14px;
      line-height: 17px;
      padding: 0;
      margin: 0;

      /* 101 чтобы не появлялся скролл при пограничных значениях */
      max-width: 101%;

      overflow: auto;

      white-space: nowrap;
    }
  `;

  static properties = {
    leaving: { type: Boolean },
  };

  constructor() {
    super();
    this.leaving = false;
  }

  updated(changedProperties) {
    if (changedProperties.has("leaving") && this.leaving) {
      this._startLeaving();
    }
  }

  _startLeaving() {
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
      <header class="font">
        <h2 class="title"><slot name="title"></slot></h2>

        <p class="hint"><slot name="hint"></slot></p>
      </header>
    `;
  }
}

customElements.define("upload-header", UploadHeader);
