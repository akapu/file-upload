import { LitElement, css, html } from "lit";
import { theme } from "../theme";
import { KeyframesComposer } from "../KeyframesComposer.js";
import { createRef, ref } from "lit/directives/ref.js";

export class FileUploadBackground extends LitElement {
  // Для анимации бэкграундов нужно установить глобальные @property

  // @property --file-upload-background-top {
  //   syntax: "<color>";
  //   inherits: true;
  //   initial-value: transparent;
  // }

  // @property --file-upload-background-middle {
  //   syntax: "<color>";
  //   inherits: true;
  //   initial-value: transparent;
  // }

  static styles = css`
    :host {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;

      z-index: -1;
    }

    .background {
      position: absolute;
      width: 100%;
      height: 479px;

      background: linear-gradient(
        180deg,
        var(--file-upload-background-top) 0%,
        var(--file-upload-background-middle) 42.5%,
        #ffffff 100%
      );

      --file-upload-background-top: ${theme.colors.primary};
      --file-upload-background-middle: #dddcfc;
    }
  `;

  static properties = {
    state: { type: String },
    _initial: { type: Boolean, state: true },
  };

  constructor() {
    super();

    this.state = "form";
    this._initial = true;

    this._initializeAnimations();
  }

  _initializeAnimations() {
    this._formToSuccess = new KeyframesComposer(
      theme.animationDurations.formToResult
    );
    this._formToSuccess.setKeyframes([
      { keyframe: {}, stage: 0 },
      { keyframe: {}, stage: 1 },
      { keyframe: {}, stage: 2 },
      {
        keyframe: {
          "--file-upload-background-top": theme.colors.primary,
          "--file-upload-background-middle": "#dddcfc",
        },
        stage: 3,
      },
      {
        keyframe: {
          "--file-upload-background-top": theme.colors.primary,
          "--file-upload-background-middle": "#8f8df4",
        },
        stage: 4,
      },
    ]);

    this._formToError = new KeyframesComposer(
      theme.animationDurations.formToResult
    );
    this._formToError.setKeyframes([
      { keyframe: {}, stage: 0 },
      { keyframe: {}, stage: 1 },
      { keyframe: {}, stage: 2 },
      {
        keyframe: {
          "--file-upload-background-top": "#f05c5c",
          "--file-upload-background-middle": "#dddcfc",
        },
        stage: 3,
      },
      {
        keyframe: {
          "--file-upload-background-top": "#f05c5c",
          "--file-upload-background-middle": "#8f8df4",
        },
        stage: 4,
      },
    ]);

    this._toForm = new KeyframesComposer(theme.animationDurations.resultToForm);
    this._toForm.setKeyframes([
      { keyframe: {}, stage: 0 },
      {
        keyframe: {
          "--file-upload-background-top": theme.colors.primary,
          "--file-upload-background-middle": "#dddcfc",
        },
        stage: 1,
      },
    ]);
  }

  updated(changedProperties) {
    if (changedProperties.has("state") && !this._initial) {
      this.startAnimation();
    }

    if (this._initial) this._initial = false;
  }

  startAnimation() {
    const stateComposerMap = {
      success: this._formToSuccess,
      error: this._formToError,
      form: this._toForm,
    };

    const keyframesComposer = stateComposerMap[this.state];

    this._background.value.animate(keyframesComposer.keyframesWithOffsets, {
      duration: keyframesComposer.totalDuration,
      fill: "forwards",
    });
  }

  _background = createRef();

  render() {
    return html` <div class="background" ${ref(this._background)}></div> `;
  }
}

customElements.define("file-upload-background", FileUploadBackground);
