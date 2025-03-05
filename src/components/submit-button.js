import { LitElement, html, css } from 'lit';

class SubmitButton extends LitElement {
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

customElements.define('submit-button', SubmitButton);

