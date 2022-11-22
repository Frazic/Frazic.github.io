import { $, component$, useClientEffect$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";
import p5 from "p5";

export default component$(() => {
  const myp5 = $(() => new p5((sketch) => {

    sketch.setup = () => {
      const canvas = sketch.createCanvas(sketch.windowWidth, sketch.windowHeight);
      canvas.parent("p5sketch");
      canvas.position(0, 0)
      canvas.style("z-index", "-1")
      sketch.noiseDetail(1);
    };

    sketch.windowResized = () => {
      sketch.resizeCanvas(sketch.windowWidth, sketch.windowHeight)
    }

    const inc = 0.01;
    let scroll = 0;

    sketch.draw = () => {
      const start = sketch.frameCount / 200;
      sketch.background(0);
      sketch.fill(100, 100, 10);
      sketch.noStroke();
      // sketch.noFill();
      sketch.beginShape()
      let xoff = 0;
      for (let x = 0; x <= sketch.width; x++) {
        let y = sketch.map(sketch.noise(xoff, start), 0, 1, sketch.height, sketch.height / 100)
        if (x === 0 || x === sketch.width) {
          y = sketch.height
        }
        sketch.vertex(x, y);

        xoff += inc;
      }
      sketch.endShape();
    };

    sketch.mouseWheel = (event: any) => {
      scroll += event.delta;
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
