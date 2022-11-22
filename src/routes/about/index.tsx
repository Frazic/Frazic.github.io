import { $, component$, useClientEffect$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";
import p5 from "p5";

export default component$(() => {
  const myp5 = $(() => new p5((sketch) => {

    const x = 100;
    const y = 100;

    sketch.setup = () => {
      const canvas = sketch.createCanvas(200, 200);
      canvas.parent("p5sketch");
    };

    sketch.draw = () => {
      sketch.background(0);
      sketch.fill(255)
      if (sketch.mouseIsPressed) {
        sketch.fill(100, 100, 10);
      }
      sketch.rect(sketch.mouseX, sketch.mouseY, 50, 50);
      // sketch.noLoop();
    };
  }));
  useClientEffect$(() => {
    myp5();
  })
  return (
    <>
      <h1>About</h1>
      <div id="p5sketch">
      </div>
    </>
  );
});

export const head: DocumentHead = () => {
  return {
    title: "About",
  };
};
