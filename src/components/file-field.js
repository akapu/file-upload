import { LitElement, html, css } from 'lit';
import DocsImage from '../assets/docs.svg';

class FileField extends LitElement {
  static styles = css`
  `;

  render() {
    return html`
    <object type="image/svg+xml" data="${DocsImage}"></object>
    `;
  }
}

customElements.define('file-field', FileField);