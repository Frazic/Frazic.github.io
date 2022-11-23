import { component$, useClientEffect$, useStyles$, $ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";
import { PerlinWave } from "./perlinWave";
import style from "./about.css?inline"

export default component$(() => {
  // if (shapeNumber === 1) sketch.fill("#260443")
  // if (shapeNumber === 2) sketch.fill("#CB0343")
  // if (shapeNumber === 3) sketch.fill("#FF6A2A")
  useStyles$(style);

  const FixTopSections$ = $((wrapperDiv: HTMLDivElement) => {
    const sections = [...wrapperDiv.querySelectorAll("section")];
    const scrollY = window.scrollY;

    // All sections above the scrollY limit, the last one is the current section
    const aboveSections = sections.filter((section) => section.offsetTop <= scrollY);
    aboveSections.map((section) => { section.classList.add("fixed") });

    const belowSections = sections.filter((section) => section.offsetTop > scrollY);
    belowSections.map((section) => { section.classList.remove("fixed") });
  })

  useClientEffect$(() => {
    PerlinWave({ id: "perlin1", colour: "#260443", offsetTop: 1 / 3 })
    PerlinWave({ id: "perlin2", colour: "#CB0343", offsetTop: 1 / 2 })
  })
  return (
    <>
      <h1>About</h1>
      <div className="wrapper" document:onScroll$={(_, el: HTMLDivElement) => FixTopSections$(el)}>
        <section id="perlin1" className="about" style={{ "width": "100vw", "height": "100vh" }} />
        <section id="perlin2" className="about" style={{ "width": "100vw", "height": "100vh" }} />
      </div>
    </>
  );
});

export const head: DocumentHead = () => {
  return {
    title: "About",
  };
};
