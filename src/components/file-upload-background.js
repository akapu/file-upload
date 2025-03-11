import { LitElement, css, html } from "lit";
import { theme } from "../theme";

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
    }

    .form {
      background: linear-gradient(
        180deg,
        ${theme.colors.primary} 0%,
        #dddcfc 42.5%,
        #ffffff 100%
      );
    }
  `;

  render() {
    return html` <div class="form background"></div> `;
  }
}

customElements.define("file-upload-background", FileUploadBackground);
