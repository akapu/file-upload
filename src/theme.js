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

  animationDurations: {
    formToResult: [0, 220, 200, 90, 200],
  },
};

export const windowBackgrounds = {
  form: {
    "--file-upload-background-top": theme.colors.primary,
    "--file-upload-background-middle": "#dddcfc",
  },

  resultSuccess: {
    "--file-upload-background-top": theme.colors.primary,
    "--file-upload-background-middle": "#8f8df4",
  },

  intermediateSuccess: {
    "--file-upload-background-top": theme.colors.primary,
    "--file-upload-background-middle": "#dddcfc",
  },

  intermediateError: {
    "--file-upload-background-top": "#f05c5c",
    "--file-upload-background-middle": "#dddcfc",
  },

  resultError: {
    "--file-upload-background-top": "#f05c5c",
    "--file-upload-background-middle": "#8f8df4",
  },
};
