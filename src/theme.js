import { css } from "lit";

export const theme = {
  styles: {
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
    font: css`
      .font {
        font-family: Inter, Arial, sans-serif;
        letter-spacing: 0.015em;

        -webkit-font-smoothing: subpixel-antialiased;
        -moz-osx-font-smoothing: grayscale;
      }
    `,
  },
  colors: {
    primary: css`#5f5cf0`,
  },
};
