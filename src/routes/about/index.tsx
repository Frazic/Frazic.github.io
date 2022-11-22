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

    const inc = 0.007;
    let scroll = 0;

    sketch.draw = () => {
      const start = sketch.frameCount / 200;
      sketch.background(0);
      sketch.strokeWeight(2);
      for (let shapeNumber = 1; shapeNumber < 4; shapeNumber++) {
        if (shapeNumber === 1) sketch.fill("#260443")
        if (shapeNumber === 2) sketch.fill("#CB0343")
        if (shapeNumber === 3) sketch.fill("#FF6A2A")
        sketch.beginShape()

        // This determines their starting position and allows waves to scroll up
        const yOffset = sketch.min(((sketch.height / 2) - scroll) - (shapeNumber * (sketch.height) - sketch.height * 0.5), sketch.height / (1.3 * shapeNumber))

        // Draw shape, y being a factor of x and noise
        let xoff = 0;
        for (let x = 0; x <= sketch.width; x++) {
          let y = sketch.map(sketch.noise(xoff + 10 * shapeNumber, start), 0, 1, sketch.height, sketch.height / 2) - yOffset

          // This clamps the start and end position to have a uniform fill
          if (x === 0 || x === sketch.width) {
            y = sketch.height
          }
          sketch.vertex(x, y);

          xoff += inc;
        }
        sketch.endShape();
      }
    };

    sketch.mouseWheel = (event: any) => {
      scroll -= event.delta * 1;

      // Clamp scroll so we can't go below initial position
      if (scroll >= 0) scroll = 0;
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
