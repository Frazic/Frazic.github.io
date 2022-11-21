import { component$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div>
      <h1>About</h1>

      <p>Each little about section will be a full screen page</p>
      <p>
        Effects: parallax and some css animating when coming onto the page
        (staggered)
      </p>
    </div>
  );
});

export const head: DocumentHead = () => {
  return {
    title: "About",
  };
};
