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
        <h1 className="box-title">About</h1>
        <div className="container-flex">
          <div className="text-flex">
            <h2 className="header">🚀 Journey</h2>
            <div className="text-box">
              <h3>🧐 <b>Studies</b></h3>
              I am grateful to have lived and studied in France, which allowed me to explore my needs and desires as I went through my journey to obtaining an Engineering Degree in Embedded Systems.
              <br />
              <br />
              Here is how it went:
              <ul className="list-no-bullet">

                <li>
                  <div className="list-item-wrapper">
                    <div className="icon">🇪🇺</div>
                    <span>
                      <u>Lycée International</u> - <i>2011</i>
                      <br />
                      In this rare school system up until 15, I was lucky enough to have half my classes in English, my mother-tongue. This allowed me to grow up fully bilingual in French and English
                    </span>
                  </div>
                </li>

                <li>
                  <div className="list-item-wrapper">
                    <span>
                      <u>Lycée Léonard de Vinci</u> - <i>2014</i>
                      <br />
                      Technical school which brought me to the age of 18 and started my specialisation in all things software and hardware. Thankfully I studied lots of mechanical and physcial concepts as well which broadened my scope of understanding
                    </span>
                    <div className="icon">📐</div>
                  </div>
                </li>

                <li>
                  <div className="list-item-wrapper">
                    <div className="icon">⚡</div>
                    <span>
                      <u>IUT Angers</u> - <i>2016</i>
                      <br />
                      My first two years of University Studies were a balance between concrete skills and theoretical knowledge of electronics and programming, paving the way to a choice of going into the working world with this two-year degree or pursuing further into Engineering
                    </span>
                  </div>
                </li>

                <li>
                  <div className="list-item-wrapper">
                    <span>
                      <u>ENSTA Bretagne</u> - <i>2019</i>
                      <br />
                      Upon deciding to go further, I went to the end of the world (Brest) and embarked in a 3 year trip through the world of Embedded Systems Engineering. Luckily, I had the opportunity to do this as an employed apprentice engineer for half the time, directly applying what I was learning.
                    </span>
                    <div className="icon">🎓</div>
                  </div>
                </li>

              </ul>
            </div>
          </div>
          <img className="img-shadow" src="/about-img/mountains.webp" alt="" />
        </div>
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
