import { component$, useClientEffect$, useStyles$, $ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";
import { PerlinWave } from "./perlinWave";
import style from "./about.css?inline"

export default component$(() => {
  // if (shapeNumber === 1) sketch.fill("#260443")
  // if (shapeNumber === 2) sketch.fill("#CB0343")
  // if (shapeNumber === 3) sketch.fill("#FF6A2A")
  useStyles$(style);

  const FixSection$ = $((section: HTMLTableSectionElement) => {
    if (section.offsetTop <= window.scrollY) {
      section.classList.add("fixed");
    } else {
      section.classList.remove("fixed");
    }
  })

  useClientEffect$(() => {
    PerlinWave({ id: "perlin1", colour: "#260443", offsetTop: 0.15 })
    PerlinWave({ id: "perlin2", colour: "#CB0343", offsetTop: 0.3 })
    PerlinWave({ id: "perlin3", colour: "#FF6A2A", offsetTop: 0.5 })
  }, { eagerness: "load" })
  return (
    <>
      <h1>About</h1>
      <div className="wrapper" >
        <section id="perlin1" className="about" document:onScroll$={(_, el: HTMLTableSectionElement) => FixSection$(el)}><p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam aliquam officia quis est repudiandae maiores provident eos nihil vitae ratione in, quam, quidem ipsum quae. Voluptatum quis sed quam consequuntur sunt commodi officia obcaecati magnam nostrum enim nemo est adipisci voluptate nisi debitis saepe repellendus, repellat, architecto incidunt deleniti voluptatem. Nobis, perferendis quidem numquam aperiam sed est ullam a minus. At eum reprehenderit minus. Odit nulla alias nostrum sint voluptate maxime, consequatur amet iusto earum molestias commodi illum cupiditate illo quae culpa, inventore, facilis nesciunt a laudantium modi doloribus! Dignissimos quibusdam eum modi fugiat ipsum temporibus debitis voluptas itaque, iste mollitia omnis officiis voluptatem ipsa doloremque architecto ducimus dolorem incidunt dolor sint cum libero numquam. Repellat exercitationem ratione fugit iure perspiciatis animi. Illo eaque ullam quaerat a atque ad pariatur deserunt magnam quod, iste magni aliquid dolor voluptatum perferendis enim ex, libero veritatis necessitatibus ea vitae iusto omnis qui. Dolor maxime possimus magnam facere sequi sapiente modi corrupti quae doloribus consequuntur praesentium, nam in? Inventore iste, architecto repellendus beatae illo, libero ipsa, consequatur aperiam reprehenderit consequuntur tempore quae incidunt aliquam iusto sit. Inventore tempore praesentium at error minima, eveniet velit ut nam aliquid perferendis natus fugiat iure quos asperiores atque rem, sed quibusdam nesciunt repudiandae magnam! At praesentium recusandae excepturi! Consequuntur dolorum maxime recusandae aut soluta vero cumque, laudantium, illum nisi iure commodi quos! Ad porro nobis neque illo, omnis, animi tempore est esse saepe voluptas odio magni obcaecati error quos quaerat repellat nulla maxime aliquid, consequuntur voluptatem. Nam, esse?</p></section>
        <section id="perlin2" className="about" document:onScroll$={(_, el: HTMLTableSectionElement) => FixSection$(el)}><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur aliquid possimus, amet nostrum atque eligendi?</p></section>
        <section id="perlin3" className="about" document:onScroll$={(_, el: HTMLTableSectionElement) => FixSection$(el)} />
      </div>
    </>
  );
});

export const head: DocumentHead = () => {
  return {
    title: "About",
  };
};
