import { css } from "lit";

export const theme = {
  styles: {
    font: css`
      :host {
        font-family: Inter, Arial, sans-serif;

        -webkit-font-smoothing: subpixel-antialiased;
        -moz-osx-font-smoothing: grayscale;
      }
    `,
    removeDefaultButton: css`
      button {
        background: none;
        border: none;
        padding: 0;
        margin: 0;
      }
    `,
  },
  utility: {
    borderBox: css`
      .border-box {
        box-sizing: border-box;
      }
    `,
  },
  colors: {
    primary: css`#5f5cf0`,
  }
};
