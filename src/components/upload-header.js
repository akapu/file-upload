import { LitElement, html, css } from "lit";
import { theme } from "../theme";

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

      // 101 чтобы скролл не появлялся при пограничных значениях
      max-width: 101%;
      
      overflow: auto;

      white-space: nowrap;
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
