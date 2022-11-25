import { component$, useStyles$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";
import style from "./about.css?inline";

export default component$(() => {
  useStyles$(style);
  return (
    <>
      <section
        className="background"
        style={{ "background-image": "url('/about-img/hebros.webp')" }}
      >
        <h1>About</h1>
      </section>
      <section
        className="background"
        style={{ "background-image": "url('/about-img/TODO_NAME.webp')" }}
      >
      </section>
      <section
        className="background"
        style={{ "background-image": "url('/about-img/Amethyst_Nations.webp')" }}
      >
      </section>
    </>
  );
});

export const head: DocumentHead = () => {
  return {
    title: "About",
  };
};
