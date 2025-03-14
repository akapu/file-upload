import { LitElement, html } from "lit";

export class InOutAnimated extends LitElement {
  static properties = {
    animationEnabled: { type: Boolean },
    shown: { type: Boolean },
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

    await this._playAnimation([
      { height: "45px", offset: 0.0 },
      { height: "0px", offset: 1.0 },
    ]);

    this.style.overflow = "visible";
    this.style.display = "none";
  }

  async _show() {
    this.style.display = "block";
    this.style.overflow = "hidden";

    await this._playAnimation([
      { height: "0px", offset: 0.0 },
      { height: "45px", offset: 1.0 },
    ]);

    this.style.overflow = "visible";
  }

  async _playAnimation(keyframes) {
    if (!this.animationEnabled) return;

    return await this.animate(keyframes, { duration: 140 }).finished;
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
