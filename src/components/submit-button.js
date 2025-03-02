import { LitElement, html, css } from 'lit';

class SubminButton extends LitElement {
  static styles = css`
  `;

  constructor() {
    super();
  }


  render() {
    return html`
    <button>Загрузить</button>
    `;
  }
}

customElements.define('submit-button', SubminButton);

