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
  },
  utility: {
    borderBox: css`
      .border-box {
        box-sizing: border-box;
      }
    `,
  },
};
