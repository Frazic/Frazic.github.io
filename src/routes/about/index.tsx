import { $, component$, useClientEffect$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";
import p5 from "p5";

export default component$(() => {
  const myp5 = $(() => new p5((sketch) => {
    let red = 0;

    sketch.setup = () => {
      const canvas = sketch.createCanvas(sketch.windowWidth, sketch.windowHeight);
      canvas.parent("p5sketch");
      canvas.position(0, 0)
      canvas.style("z-index", "-1")
    };

    sketch.windowResized = () => {
      sketch.resizeCanvas(sketch.windowWidth, sketch.windowHeight)
    }

    sketch.draw = () => {
      sketch.background(0);
      sketch.fill(red, 0, 0)
      if (sketch.mouseIsPressed) {
        sketch.fill(100, 100, 10);
      }
      sketch.rect(sketch.mouseX, sketch.mouseY, 50, 50);
      // sketch.noLoop();
    };

    sketch.mouseWheel = (event) => {
      red += event.delta;
    }
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
