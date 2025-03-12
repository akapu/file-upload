import { LitElement, html, css } from "lit";
import { theme } from "../theme.js";
import { classMap } from "lit/directives/class-map.js";

/**
 * Обернут в компонент потому что <img> не отображает blur, а <object> не прокидывает наверх клики
 */
class DocsImage extends LitElement {
  static styles = css`
    svg {
      color: ${theme.colors.primary};
      width: 183px;
      height: 130px;

      transition-property: width, height;
      transition-duration: 0.22s;
      transition-timing-function: linear;
    }

    .decreasing {
      width: 0px;
      height: 0px;
    }

    @keyframes rainbow {
      0% {
        color: ${theme.colors.primary};
      }
      14% {
        color: red;
      }
      28% {
        color: orange;
      }
      42% {
        color: yellow;
      }
      57% {
        color: green;
      }
      71% {
        color: blue;
      }
      85% {
        color: indigo;
      }
      100% {
        color: ${theme.colors.primary};
      }
    }

    .rainbow {
      animation: rainbow 7s infinite;
    }
  `;

  static properties = {
    rainbow: { type: Boolean },
    decreasing: { type: Boolean },
  };

  constructor() {
    super();

    this.rainbow = false;
    this.decreasing = false;
  }

  render() {
    return html`
      <svg
        class=${classMap({
          rainbow: this.rainbow,
          decreasing: this.decreasing,
        })}
        viewBox="0 0 183 130"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.20096 17.1661C7.117 8.46057 14.1013 1.33283 22.8067 1.2399L57.6361 0.868103C62.1924 0.819465 65.9255 4.47364 65.9741 9.02993C66.0223 13.549 69.6973 17.1882 74.2167 17.1922L159.823 17.268C168.39 17.2756 175.386 24.1203 175.58 32.6858L177.31 109.092C177.51 117.922 170.422 125.196 161.59 125.224L23.9218 125.669C15.2491 125.697 8.18038 118.718 8.09674 110.046L7.20096 17.1661Z"
          fill="currentColor"
        />
        <rect
          x="103.691"
          y="26.0571"
          width="53.9171"
          height="81.7453"
          rx="3.78598"
          transform="rotate(19.8027 103.691 26.0571)"
          fill="#F1F1F1"
        />
        <rect
          x="103.231"
          y="45.3024"
          width="20.8711"
          height="3.47852"
          transform="rotate(19.8027 103.231 45.3024)"
          fill="#454559"
        />
        <rect
          x="101.167"
          y="51.0295"
          width="34.7852"
          height="3.47852"
          transform="rotate(19.8027 101.167 51.0295)"
          fill="#454559"
        />
        <rect
          x="92.6279"
          y="74.7573"
          width="34.7852"
          height="3.47852"
          transform="rotate(19.8027 92.6279 74.7573)"
          fill="#454559"
        />
        <rect
          x="99.1084"
          y="56.7579"
          width="34.7852"
          height="3.47852"
          transform="rotate(19.8027 99.1084 56.7579)"
          fill="#454559"
        />
        <rect
          x="90.5642"
          y="80.4833"
          width="40.003"
          height="3.47852"
          transform="rotate(19.8027 90.5642 80.4833)"
          fill="#454559"
        />
        <rect
          x="97.0447"
          y="62.4852"
          width="28.6978"
          height="3.47852"
          transform="rotate(19.8027 97.0447 62.4852)"
          fill="#454559"
        />
        <rect
          x="88.5029"
          y="86.2117"
          width="28.6978"
          height="3.47852"
          transform="rotate(19.8027 88.5029 86.2117)"
          fill="#454559"
        />
        <rect
          x="22.8433"
          y="37.4419"
          width="47.2491"
          height="71.6357"
          rx="3.78598"
          transform="rotate(-20.0462 22.8433 37.4419)"
          fill="#F1F1F1"
        />
        <rect
          x="33.3396"
          y="50.6478"
          width="18.29"
          height="3.04833"
          transform="rotate(-20.0462 33.3396 50.6478)"
          fill="#454559"
        />
        <rect
          x="35.1692"
          y="55.6598"
          width="30.4833"
          height="3.04833"
          transform="rotate(-20.0462 35.1692 55.6598)"
          fill="#454559"
        />
        <rect
          x="42.7454"
          y="76.4191"
          width="30.4833"
          height="3.04833"
          transform="rotate(-20.0462 42.7454 76.4191)"
          fill="#454559"
        />
        <rect
          x="36.9966"
          y="60.6703"
          width="30.4833"
          height="3.04833"
          transform="rotate(-20.0462 36.9966 60.6703)"
          fill="#454559"
        />
        <rect
          x="44.5725"
          y="81.4309"
          width="35.0558"
          height="3.04833"
          transform="rotate(-20.0462 44.5725 81.4309)"
          fill="#454559"
        />
        <rect
          x="38.8262"
          y="65.6824"
          width="25.1487"
          height="3.04833"
          transform="rotate(-20.0462 38.8262 65.6824)"
          fill="#454559"
        />
        <rect
          x="46.4023"
          y="86.4417"
          width="25.1487"
          height="3.04833"
          transform="rotate(-20.0462 46.4023 86.4417)"
          fill="#454559"
        />
        <foreignObject x="6.53854" y="43.3" width="170.88" height="82.72"
          ><div
            xmlns="http://www.w3.org/1999/xhtml"
            style="backdrop-filter:blur(1.26px);height:100%;width:100%;border-radius:18.5px"
          ></div
        ></foreignObject>
        <g filter="url(#filter0_i_299_233)" data-figma-bg-blur-radius="2.52399">
          <path
            d="M6.53854 59.2703C6.29144 50.3789 13.4404 43.0415 22.3352 43.0572L160.386 43.3008C168.931 43.3159 175.911 50.1331 176.128 58.6762L177.406 109.142C177.63 117.987 170.537 125.286 161.689 125.316L23.7824 125.779C15.2203 125.807 8.19856 119.001 7.9607 110.442L6.53854 59.2703Z"
            fill="#2C2C2C"
            fill-opacity="0.2"
          />
        </g>
        <defs>
          <filter
            id="filter0_i_299_233"
            x="4.00824"
            y="40.5331"
            width="175.927"
            height="87.7697"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="2.52399" />
            <feGaussianBlur stdDeviation="1.26199" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect1_innerShadow_299_233"
            />
          </filter>
        </defs>
      </svg>
    `;
  }
}

customElements.define("docs-image", DocsImage);
