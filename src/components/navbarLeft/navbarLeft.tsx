import { component$, useStyles$ } from "@builder.io/qwik";
import styles from "./navbarLeft.css?inline";

export default component$(() => {
  useStyles$(styles);

  return (
    <nav class="navbar">
      <ul class="navbar-nav">

        {/* LOGO */}
        <li class="logo" role="button">
          <div class="nav-link">
            <a href="/" className="nav-link">
              <span class="link-text logo-text">Josh</span>
            </a>
            <svg
              aria-hidden="true"
              focusable="true"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <g>
                <path
                  fill="currentColor"
                  d="M224 273L88.37 409a23.78 23.78 0 0 1-33.8 0L32 386.36a23.94 23.94 0 0 1 0-33.89l96.13-96.37L32 159.73a23.94 23.94 0 0 1 0-33.89l22.44-22.79a23.78 23.78 0 0 1 33.8 0L223.88 239a23.94 23.94 0 0 1 .1 34z"
                  class="svg-colour-secondary"
                ></path>
                <path
                  fill="currentColor"
                  d="M415.89 273L280.34 409a23.77 23.77 0 0 1-33.79 0L224 386.26a23.94 23.94 0 0 1 0-33.89L320.11 256l-96-96.47a23.94 23.94 0 0 1 0-33.89l22.52-22.59a23.77 23.77 0 0 1 33.79 0L416 239a24 24 0 0 1-.11 34z"
                  class="svg-colour-primary"
                ></path>
              </g>
            </svg>
          </div>
        </li>

        {/* PROJECTS */}
        <li class="nav-item" role="button">
          <a href="/projects" class="nav-link">
            <svg
              aria-hidden="true"
              focusable="true"
              role="img"
              viewBox="0 0 48 48"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <path
                  fill="currentColor"
                  className="svg-colour-secondary"
                  style="stroke-width:0.0639315"
                  d="m 18.946974,36.953925 c -0.03173,-1.84982 -0.08006,-2.175637 -0.468408,-3.157627 -0.345584,-0.873859 -0.681651,-1.352595 -1.713462,-2.440871 -0.883454,-0.931802 -1.459501,-1.740652 -1.939136,-2.722825 -0.448267,-0.917941 -0.715445,-1.702734 -0.911954,-2.67872 -0.207791,-1.032026 -0.207122,-2.895313 0.0014,-3.94164 0.828158,-4.155212 3.979527,-7.394584 8.058977,-8.284026 1.86284,-0.406155 3.783761,-0.284221 5.612194,0.356244 3.535569,1.238443 6.143294,4.315646 6.839346,8.070656 0.180421,0.973323 0.167337,2.831739 -0.02674,3.798766 -0.196806,0.980609 -0.463894,1.764296 -0.912929,2.67872 -0.486451,0.990615 -1.061532,1.798712 -1.937697,2.722825 -1.031123,1.087549 -1.29816,1.46537 -1.691228,2.392846 -0.39759,0.938145 -0.45579,1.319325 -0.489451,3.205652 l -0.03062,1.715571 h -5.180494 -5.180443 z"
                  id="path281"
                />
              </g>
              <g>
                <path
                  fill="currentColor"
                  class="svg-colour-primary"
                  d="M29,40H19a2,2,0,0,1-2-2V35.6a4.07,4.07,0,0,0-1.28-2.92A11.89,11.89,0,0,1,12,24h2a9.9,9.9,0,0,0,3.1,7.23A6.06,6.06,0,0,1,19,35.6V38H29V35.6a6.06,6.06,0,0,1,1.9-4.37A9.9,9.9,0,0,0,34,24h2a11.89,11.89,0,0,1-3.72,8.68A4.07,4.07,0,0,0,31,35.6V38A2,2,0,0,1,29,40Z"
                  id="path18"
                />
                <path
                  fill="currentColor"
                  class="svg-colour-primary"
                  d="M36,24H34a10,10,0,0,0-20,0H12a12,12,0,0,1,24,0Z"
                  id="path20"
                />
                <rect
                  fill="currentColor"
                  class="svg-colour-primary"
                  x="19"
                  y="46"
                  width="10"
                  height="2"
                  id="rect24"
                />
                <rect
                  fill="currentColor"
                  class="svg-colour-primary"
                  x="18"
                  y="42"
                  width="12"
                  height="2"
                  id="rect26"
                />
                <rect
                  fill="currentColor"
                  class="svg-colour-tertiary"
                  x="40"
                  y="23"
                  width="8"
                  height="2"
                  id="rect32"
                />
                <rect
                  fill="currentColor"
                  class="svg-colour-tertiary"
                  y="23"
                  width="8"
                  height="2"
                  id="rect34"
                />
                <rect
                  fill="currentColor"
                  class="svg-colour-tertiary"
                  x="34.76"
                  y="8"
                  width="8.49"
                  height="2"
                  transform="translate(5.06 30.21) rotate(-45)"
                  id="rect36"
                />
                <rect
                  fill="currentColor"
                  class="svg-colour-tertiary"
                  x="8"
                  y="4.76"
                  width="2"
                  height="8.49"
                  transform="translate(-3.73 9) rotate(-45)"
                  id="rect38"
                />
                <rect
                  fill="currentColor"
                  class="svg-colour-tertiary"
                  x="4.76"
                  y="38"
                  width="8.49"
                  height="2"
                  transform="translate(-24.94 17.79) rotate(-45)"
                  id="rect40"
                />
                <rect
                  fill="currentColor"
                  class="svg-colour-tertiary"
                  x="38"
                  y="34.76"
                  width="2"
                  height="8.49"
                  transform="translate(-16.15 39) rotate(-45)"
                  id="rect42"
                />
                <rect
                  fill="currentColor"
                  class="svg-colour-tertiary"
                  x="23"
                  width="2"
                  height="8"
                  id="rect44"
                />
              </g>
            </svg>

            {/* <svg
                            aria-hidden="true"
                            focusable="true"
                            data-prefix="lgtb"
                            data-icon="lightbulb"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 48 48"
                        >
                            <g class="fa-group">
                                <path fill="currentColor" class="svg-colour-primary" d="M29,40H19a2,2,0,0,1-2-2V35.6a4.07,4.07,0,0,0-1.28-2.92A11.89,11.89,0,0,1,12,24h2a9.9,9.9,0,0,0,3.1,7.23A6.06,6.06,0,0,1,19,35.6V38H29V35.6a6.06,6.06,0,0,1,1.9-4.37A9.9,9.9,0,0,0,34,24h2a11.89,11.89,0,0,1-3.72,8.68A4.07,4.07,0,0,0,31,35.6V38A2,2,0,0,1,29,40Z" />
                                <path fill="currentColor" class="svg-colour-primary" d="M36,24H34a10,10,0,0,0-20,0H12a12,12,0,0,1,24,0Z" />
                                <path fill="currentColor" class="svg-colour-secondary" d="M31,24H29a5,5,0,0,0-5-5V17A7,7,0,0,1,31,24Z" />
                                <rect fill="currentColor" class="svg-colour-primary" x="19" y="46" width="10" height="2" />
                                <rect fill="currentColor" class="svg-colour-primary" x="18" y="42" width="12" height="2" />
                                <rect fill="currentColor" class="svg-colour-primary" x="23" y="30" width="2" height="9" />
                                <path fill="currentColor" class="svg-colour-primary" d="M24,31a1,1,0,0,1-.45-.11l-4-2,.9-1.78L24,28.88l3.55-1.77.9,1.78-4,2A1,1,0,0,1,24,31Z" />
                                <rect fill="currentColor" class="svg-colour-tertiary" x="40" y="23" width="8" height="2" />
                                <rect fill="currentColor" class="svg-colour-tertiary" y="23" width="8" height="2" />
                                <rect fill="currentColor" class="svg-colour-tertiary" x="34.76" y="8" width="8.49" height="2" transform="translate(5.06 30.21) rotate(-45)" />
                                <rect fill="currentColor" class="svg-colour-tertiary" x="8" y="4.76" width="2" height="8.49" transform="translate(-3.73 9) rotate(-45)" />
                                <rect fill="currentColor" class="svg-colour-tertiary" x="4.76" y="38" width="8.49" height="2" transform="translate(-24.94 17.79) rotate(-45)" />
                                <rect fill="currentColor" class="svg-colour-tertiary" x="38" y="34.76" width="2" height="8.49" transform="translate(-16.15 39) rotate(-45)" />
                                <rect fill="currentColor" class="svg-colour-tertiary" x="23" width="2" height="8" />
                            </g>
                        </svg> */}
            <span class="link-text">Projects</span>
          </a>
        </li>

        {/* SKILLS */}
        <li class="nav-item" role="button">
          <a href="/skills" class="nav-link">
            <svg
              aria-hidden="true"
              focusable="true"
              role="img"
              viewBox="0 0 6.7835102 7.7526722"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Stick */}
              <g
                id="g519"
                transform="matrix(1.5141977,0,0,1.5141977,-1.7767109,-1.2921203)"
              >
                <path
                  fill="currentColor"
                  className="svg-colour-primary"
                  d="M 3.59102,3.17311 C 3.6268389,3.1285588 3.6197602,3.063393 3.575205,3.027575 3.5306538,2.9917561 3.465488,2.9988348 3.42967,3.043386 L 1.19621,5.804946 C 1.160391,5.849497 1.16747,5.914663 1.212025,5.950481 1.256576,5.9863 1.321742,5.979221 1.35756,5.93467 Z"
                  id="path517"
                />
              </g>

              {/* Star */}
              <g
                id="g523"
                transform="matrix(1.5141977,0,0,1.5141977,-1.7767109,-1.2921203)"
              >
                <polygon
                  fill="currentColor"
                  className="svg-colour-secondary"
                  points="3.965,4.06487 3.87904,3.86069 3.53367,3.04034 2.70052,2.90562 2.48129,2.87018 2.64903,2.72522 3.32263,2.14313 3.19326,1.30894 3.15926,1.08961 3.34894,1.20434 4.11073,1.66512 4.86404,1.28435 5.06216,1.18421 5.01161,1.4003 4.8088,2.26716 5.40362,2.86585 5.56022,3.02348 5.33876,3.0422 4.45174,3.11718 4.06633,3.86758 "
                  id="polygon521"
                />
              </g>

              {/* Shine */}
              <g
                id="g533"
                transform="matrix(1.5141977,0,0,1.5141977,-1.7767109,-1.2921203)"
              >
                <path
                  fill="currentColor"
                  className="svg-colour-tertiary"
                  d="M 2.54832,1.90476 C 2.522753,1.89893 2.497292,1.914925 2.491462,1.940496 2.485632,1.966063 2.501627,1.991524 2.527198,1.997354 L 3.105245,2.130476 C 3.130812,2.136306 3.156273,2.120311 3.162103,2.09474 3.167933,2.069173 3.151938,2.043716 3.126367,2.037882 Z"
                  id="path525"
                />
                <path
                  fill="currentColor"
                  className="svg-colour-tertiary"
                  d="M 4.09856,1.48974 C 4.09691,1.515913 4.11678,1.538476 4.142954,1.54013 4.169127,1.54179 4.19169,1.521909 4.193344,1.49574 L 4.2320325,0.903823 C 4.23369,0.8776498 4.213816,0.8550868 4.1876427,0.8534332 4.1614695,0.85177572 4.1389065,0.8716497 4.137249,0.897823 Z"
                  id="path527"
                />
                <path
                  fill="currentColor"
                  className="svg-colour-tertiary"
                  d="M 5.01067,2.19241 C 4.984552,2.1948 4.96532,2.217918 4.967717,2.244032 4.970117,2.27015 4.993229,2.289382 5.019343,2.286985 L 5.610154,2.23402 C 5.636268,2.23162 5.6555,2.208508 5.653103,2.182394 5.650713,2.15628 5.627591,2.137048 5.601477,2.139445 Z"
                  id="path529"
                />
                <path
                  fill="currentColor"
                  className="svg-colour-tertiary"
                  d="m 4.60334,3.89829 c 0.00489,0.025768 0.029732,0.042697 0.0555,0.037815 0.025764,-0.00489 0.042697,-0.029736 0.037811,-0.0555 L 4.587391,3.297574 C 4.582511,3.27181 4.557659,3.254877 4.531891,3.259763 4.506127,3.264643 4.489194,3.289495 4.49408,3.315259 Z"
                  id="path531"
                />
              </g>
            </svg>
            <span class="link-text">Skills</span>
          </a>
        </li>

        {/* ABOUT */}
        <li class="nav-item" role="button">
          <a href="/about" class="nav-link">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fad"
              data-icon="scroll"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 511.999 511.999"
            >
              {/* <!-- Fills --> */}
              <g>
                {/* <!-- Top-left shadow fill --> */}
                <path
                  fill="currentColor"
                  className="svg-colour-primary"
                  d="M23.533,167.823h96.194V7.5H55.598c-17.709,0-32.065,14.356-32.065,32.065  C23.533,39.565,23.533,167.823,23.533,167.823z"
                />
                {/* <!-- Main fill --> */}
                <path
                  fill="currentColor"
                  className="svg-colour-secondary"
                  d="M424.34,39.565c0-17.709-14.356-32.065-32.065-32.065H55.598c17.709,0,32.065,14.356,32.065,32.065  V167.82l16.032,24.051l-16.032,24.048v256.516c0,17.709,14.356,32.065,32.065,32.065h304.613V392.277l-16.032-24.051l16.032-24.045  V39.565H424.34z"
                />
                {/* <!-- Bottom fill --> */}
                <path
                  fill="currentColor"
                  className="svg-colour-tertiary"
                  d="M151.791,440.371v32.065c0,17.708-14.356,32.065-32.065,32.065h336.677  c17.709,0,32.065-14.356,32.065-32.065v-32.065H151.791z"
                />
              </g>

              {/* <!-- Outlines --> */}
              <g>
                <path d="M488.469,432.871H151.792c-4.142,0-7.5,3.358-7.5,7.5v32.064c0,13.545-11.02,24.564-24.565,24.564  s-24.564-11.02-24.564-24.564V367.709h8.532c4.142,0,7.5-3.358,7.5-7.5s-3.358-7.5-7.5-7.5h-8.532v-17.064h24.564  c4.142,0,7.5-3.358,7.5-7.5s-3.358-7.5-7.5-7.5H95.162V218.19l14.772-22.159c1.68-2.519,1.68-5.801,0-8.32L95.162,165.55V39.564  c0-9.276-3.218-17.811-8.584-24.564h305.697c13.545,0,24.564,11.02,24.564,24.564v24.564h-24.564c-4.142,0-7.5,3.358-7.5,7.5  s3.358,7.5,7.5,7.5h24.564v17.064h-8.532c-4.142,0-7.5,3.358-7.5,7.5s3.358,7.5,7.5,7.5h8.532V341.91l-14.772,22.155  c-1.68,2.519-1.68,5.801,0,8.32l14.773,22.162v13.759c0,4.142,3.358,7.5,7.5,7.5s7.5-3.358,7.5-7.5v-16.03  c0-1.48-0.438-2.928-1.259-4.16l-13.259-19.891l13.258-19.885c0.821-1.232,1.26-2.68,1.26-4.161V39.564  C431.84,17.749,414.091,0,392.275,0H55.598C33.782,0,16.033,17.749,16.033,39.564v128.258c0,4.142,3.358,7.5,7.5,7.5h32.064  c4.142,0,7.5-3.358,7.5-7.5s-3.358-7.5-7.5-7.5H31.033V39.564C31.033,26.02,42.053,15,55.598,15s24.564,11.02,24.564,24.564V167.82  c0,1.48,0.438,2.928,1.259,4.16l13.259,19.891l-13.259,19.888c-0.821,1.232-1.26,2.68-1.26,4.16v256.516  c0,21.816,17.749,39.564,39.564,39.564l0,0h336.677c21.816,0,39.564-17.749,39.564-39.564v-32.064  C495.969,436.229,492.611,432.871,488.469,432.871z M480.969,472.436c0,13.545-11.02,24.564-24.564,24.564H150.722  c5.362-6.752,8.57-15.292,8.57-24.564v-24.564h321.677V472.436z" />
                <path d="M360.21,208.419h-32.063c-4.142,0-7.5,3.358-7.5,7.5s3.358,7.5,7.5,7.5h32.063c4.142,0,7.5-3.358,7.5-7.5  S364.353,208.419,360.21,208.419z" />
                <path d="M303.584,215.919c0-4.142-3.358-7.5-7.5-7.5h-96.196c-4.142,0-7.5,3.358-7.5,7.5s3.358,7.5,7.5,7.5h96.196  C300.226,223.419,303.584,220.062,303.584,215.919z" />
                <path d="M151.792,223.419h16.03c4.142,0,7.5-3.358,7.5-7.5s-3.358-7.5-7.5-7.5h-16.03c-4.142,0-7.5,3.358-7.5,7.5  S147.649,223.419,151.792,223.419z" />
                <path d="M360.21,176.355h-96.193c-4.142,0-7.5,3.358-7.5,7.5s3.358,7.5,7.5,7.5h96.193c4.142,0,7.5-3.358,7.5-7.5  S364.353,176.355,360.21,176.355z" />
                <path d="M151.792,191.355h80.161c4.142,0,7.5-3.358,7.5-7.5s-3.358-7.5-7.5-7.5h-80.161c-4.142,0-7.5,3.358-7.5,7.5  S147.649,191.355,151.792,191.355z" />
                <path d="M360.21,144.291h-16.032c-4.142,0-7.5,3.358-7.5,7.5s3.358,7.5,7.5,7.5h16.032c4.142,0,7.5-3.358,7.5-7.5  S364.353,144.291,360.21,144.291z" />
                <path d="M208.421,151.791c0,4.142,3.358,7.5,7.5,7.5h96.193c4.142,0,7.5-3.358,7.5-7.5s-3.358-7.5-7.5-7.5h-96.193  C211.779,144.291,208.421,147.648,208.421,151.791z" />
                <path d="M151.792,159.291h32.066c4.142,0,7.5-3.358,7.5-7.5s-3.358-7.5-7.5-7.5h-32.066c-4.142,0-7.5,3.358-7.5,7.5  S147.649,159.291,151.792,159.291z" />
                <path d="M296.082,96.193h-80.161c-4.142,0-7.5,3.358-7.5,7.5s3.358,7.5,7.5,7.5h80.161c4.142,0,7.5-3.358,7.5-7.5  S300.224,96.193,296.082,96.193z" />
                <path d="M367.71,247.984c0-4.142-3.358-7.5-7.5-7.5h-64.127c-4.142,0-7.5,3.358-7.5,7.5s3.358,7.5,7.5,7.5h64.127  C364.353,255.484,367.71,252.126,367.71,247.984z" />
                <path d="M231.956,240.484c-4.142,0-7.5,3.358-7.5,7.5s3.358,7.5,7.5,7.5h32.064c4.142,0,7.5-3.358,7.5-7.5s-3.358-7.5-7.5-7.5  H231.956z" />
                <path d="M151.792,255.484h48.093c4.142,0,7.5-3.358,7.5-7.5s-3.358-7.5-7.5-7.5h-48.093c-4.142,0-7.5,3.358-7.5,7.5  S147.649,255.484,151.792,255.484z" />
                <path d="M319.614,328.145c0-4.142-3.358-7.5-7.5-7.5H199.888c-4.142,0-7.5,3.358-7.5,7.5s3.358,7.5,7.5,7.5h112.226  C316.256,335.645,319.614,332.287,319.614,328.145z" />
                <path d="M215.92,352.709c-4.142,0-7.5,3.358-7.5,7.5s3.358,7.5,7.5,7.5h80.161c4.142,0,7.5-3.358,7.5-7.5s-3.358-7.5-7.5-7.5H215.92  z" />
              </g>
            </svg>
            <span class="link-text">About</span>
          </a>
        </li>
      </ul>
    </nav>
  );
});
