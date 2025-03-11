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

  windowBackgrounds: {
    form: {
      background: `linear-gradient(
        180deg,
        ${theme.colors.primary} 0%,
        #dddcfc 42.5%,
        #ffffff 100%
      );`,
    },

    resultSuccess: {
      background: `linear-gradient(
        180deg,
        ${theme.colors.primary} 0%,
        #8f8df4 100%
      );`,
    },

    intermediateSuccess: {
      background: `linear-gradient(
        180deg,
        ${theme.colors.primary} 0%,
        #DDDCFC 100%
      );`,
    },

    intermediateError: {
      background: `linear-gradient(
        180deg,
        #f05c5c 0%,
        #DDDCFC 100%
      );`,
    },

    resultError: {
      background: `linear-gradient(
        180deg,
        #f05c5c 0%,
        #8f8df4 100%
      );`,
    },
  },

  animationDurations: {
    formToResult: [0, 220, 200, 90, 200],
  },
};
