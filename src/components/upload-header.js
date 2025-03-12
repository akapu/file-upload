import { LitElement, html, css } from "lit";
import { theme } from "../theme";

class UploadHeader extends LitElement {
  static styles = css`
    ${theme.utility.font}

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
    }
  `;

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
