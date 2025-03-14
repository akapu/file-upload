import { LitElement, css, html } from "lit";
import { KeyframesComposer } from "../KeyframesComposer";

export class InOutAnimated extends LitElement {
  static styles = css`
    :host {
      display: none;
    }
  `;
  static properties = {
    animationEnabled: { type: Boolean },
    shown: { type: Boolean },
    in: { type: KeyframesComposer },
    out: { type: KeyframesComposer },
  };

  constructor() {
    super();
    this.animationEnabled = true;
    this.shown = true;
  }

  updated(changedProperties) {
    if (changedProperties.has("shown")) {
      this._handleShownToggle();
    }
  }

  async _hide() {
    this.style.overflow = "hidden";

    await this._playAnimation(this.out);

    this.style.overflow = "visible";
    this.style.display = "none";
  }

  async _show() {
    this.style.display = "block";
    this.style.overflow = "hidden";

    await this._playAnimation(this.in);

    this.style.overflow = "visible";
  }

  async _playAnimation(keyframesComposer) {
    if (!this.animationEnabled) return;

    return await this.animate(keyframesComposer.keyframesWithOffsets, {
      duration: keyframesComposer.totalDuration,
      fill: "forwards",
    }).finished;
  }

  _handleShownToggle() {
    if (this.shown) {
      this._show();
    } else {
      this._hide();
    }
  }

  render() {
    return html` <slot></slot> `;
  }
}

customElements.define("in-out-animated", InOutAnimated);
