import { $ } from "@builder.io/qwik";
import p5 from "p5";

export interface PerlinWaveProps {
    id: string,
    colour: string,
    offsetTop: number
}

export const PerlinWave = $((props: PerlinWaveProps) => {
    new p5((sketch) => {
        const parent = document.getElementById(props.id);
        if (!parent) return;

        sketch.setup = () => {
            const canvas = sketch.createCanvas(elementWidth(parent) + 20, elementHeight(parent));
            canvas.parent(props.id);
            canvas.id("canvas" + props.id)
            canvas.style("position", "");
            sketch.noiseDetail(1);
        };

        sketch.windowResized = () => {
            sketch.resizeCanvas(elementWidth(parent), elementHeight(parent));
        };

        const inc = 0.007;
        const seed = sketch.random(1, 100);

        sketch.draw = () => {
            sketch.clear()
            const start = sketch.frameCount / 500;
            let xoff = 0;
            sketch.background(0, 0, 0, 0);
            sketch.strokeWeight(2);
            sketch.fill(props.colour);

            sketch.beginShape();
            for (let x = 0; x <= sketch.width; x++) {
                let y = sketch.map(sketch.noise(xoff + seed, start + seed), 0, 1, 0 + (sketch.height * props.offsetTop), 0);

                if (x === 0 || x === sketch.width) { y = sketch.height; }

                sketch.vertex(x, y);

                xoff += inc;
            }
            sketch.endShape();
        }

        // Calculate the Width in pixels of a Dom element
        const elementWidth = (element: HTMLElement) => {
            return (
                element.clientWidth -
                parseFloat(window.getComputedStyle(element, null).getPropertyValue("padding-left")) -
                parseFloat(window.getComputedStyle(element, null).getPropertyValue("padding-right"))
            )
        }

        // Calculate the Height in pixels of a Dom element
        const elementHeight = (element: Element) => {
            return (
                element.clientHeight -
                parseFloat(window.getComputedStyle(element, null).getPropertyValue("padding-top")) -
                parseFloat(window.getComputedStyle(element, null).getPropertyValue("padding-bottom"))
            )
        }

    })
}
);