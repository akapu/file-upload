import { LitElement, html } from "lit";

class CrossIcon extends LitElement {
  static properties = {
    width: { type: Number },
    height: { type: Number },
  };

  constructor() {
    super();
    this.width = 16;
    this.height = 16;
  }

  render() {
    return html`
      <svg
        width=${this.width}
        height=${this.height}
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.07102 15.5711C0.408315 14.9084 0.408313 13.8339 1.07102 13.1712L12.8133 1.42898C13.476 0.766269 14.5504 0.76627 15.2132 1.42898C15.8759 2.09169 15.8759 3.16615 15.2132 3.82885L3.4709 15.5711C2.80819 16.2338 1.73373 16.2338 1.07102 15.5711ZM1.07102 3.82886C0.408314 3.16615 0.408314 2.09169 1.07102 1.42898C1.73373 0.76627 2.80819 0.76627 3.4709 1.42898L15.2132 13.1712C15.8759 13.8339 15.8759 14.9084 15.2132 15.5711C14.5504 16.2338 13.476 16.2338 12.8133 15.5711L1.07102 3.82886Z"
          fill="currentColor"
        />
      </svg>
    `;
  }
}

customElements.define("cross-icon", CrossIcon);
