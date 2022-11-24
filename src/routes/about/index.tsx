import { component$, useStyles$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";
import style from "./about.css?inline";

export default component$(() => {
  useStyles$(style);
  return (
    <>
      <section
        className="background"
        style={{ "background-image": "url('/about-img/mountains.webp')" }}
      >
        <h1>About</h1>
        <div className="photo-credit">
          Photo by{" "}
          <a href="https://unsplash.com/@8moments?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            Simon Berger
          </a>
        </div>
      </section>
      <section
        className="background"
        style={{ "background-image": "url('/about-img/dog.webp')" }}
      >
        <div className="photo-credit">
          Photo by{" "}
          <a href="https://unsplash.com/@jamie452?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            Jamie Street
          </a>
        </div>
      </section>
      <section
        className="background"
        style={{ "background-image": "url('/about-img/night-mountain.webp')" }}
      >
        <div className="photo-credit">
          Photo by{" "}
          <a href="https://unsplash.com/@r3dmax?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            Jonatan Pie
          </a>
        </div>
      </section>
    </>
  );
});

export const head: DocumentHead = () => {
  return {
    title: "About",
  };
};
