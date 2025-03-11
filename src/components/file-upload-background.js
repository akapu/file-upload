import { LitElement, css, html } from "lit";
import { windowBackgrounds } from "../theme";
import { repeat } from "lit/directives/repeat.js";
import { styleMap } from "lit/directives/style-map.js";

export class FileUploadBackground extends LitElement {
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
      width: 100%;
      height: 100%;

      transition-property: opacity;
      transition-timing-function: linear;

      opacity: 0;
    }
  `;

  static properties = {
    background: { type: String },
    duration: { type: Number },
  };

  render() {
    return html` ${repeat(
      Object.entries(windowBackgrounds),
      ([background]) => background,
      ([background, styles]) =>
        html`
          <div
            class="background"
            style=${styleMap({
              ...styles,
              opacity: this.background === background ? 1 : 0,
              "transition-duration": this.duration + "ms",
            })}
          ></div>
        `
    )}`;
  }
}

customElements.define("file-upload-background", FileUploadBackground);
