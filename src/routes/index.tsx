import { component$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div className="home-page-layout">
      <div className="container-centered">
        <div className="hero-title">
          {"joshua".split("").map((char, idx) => {
            return (
              <span
                className="staggered-character top"
                style={{ "--order": idx }}
              >
                {char}
              </span>
            );
          })}
          <br />
          {"bruylant".split("").map((char, idx) => {
            return (
              <span
                className="staggered-character bot"
                style={{ "--order": idx }}
              >
                {char}
              </span>
            );
          })}
        </div>

        <div className="text-centered">
          <li className="descriptors">
            <ul style={"--order: 1"}>
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
              <span>Curious</span>
            </ul>
            <ul style={"--order: 2"}>
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
              <span>Ingenious</span>
            </ul>
            <ul style={"--order: 3"}>
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
              <span>Creative</span>
            </ul>
          </li>
        </div>
      </div>

      <img
        className="home-page-photo"
        src="josh-photo.webp"
        alt="Picture of Joshua Bruylant"
      // loading="lazy"
      />
    </div>
  );
});

export const head: DocumentHead = () => {
  return {
    title: "Joshua Bruylant",
  };
};
