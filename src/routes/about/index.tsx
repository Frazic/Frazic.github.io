import { $, component$, useStyles$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";
import style from "./about.css?inline";

export default component$(() => {
  useStyles$(style);
  const getAge = $(() => {
    return new Date().getFullYear() - 1996;
  });

  return (
    <>
      {/* ME */}
      <section
        id="me"
        className="background"
        style={{ "background-image": "url('/about-img/hebros.webp')" }}
      >
        <h1 className="box-title">About</h1>

        <div className="rpgme-background">
          <div className="rpgme-container">
            <div className="header-container">
              <span className="char-name text-xl">Frazic</span>
              <div className="class-level-container">
                <span className="class text-l">Fullstack Developer</span>
                <span className="level text-l"><span className="text-m">lvl: </span>
                  {getAge()}
                </span>
              </div>
            </div>

            <div className="image-container" />
            <div className="attributes-container">
              <span className="text-l uppercase">Attributes</span>
              <div className="attributes">
                <span className="stat-points">⚫ ⚫ ⚪ ⚪ ⚪</span>
                <span className="stat-name">🦍 Strength</span>
                <span className="stat-points">⚫ ⚫ ⚫ ⚫ ⚪</span>
                <span className="stat-name">🦅 Perception</span>
                <span className="stat-points">⚫ ⚫ ⚪ ⚪ ⚪</span>
                <span className="stat-name">🐎 Endurance</span>
                <span className="stat-points">⚫ ⚫ ⚫ ⚪ ⚪</span>
                <span className="stat-name">🦢 Charisma</span>
                <span className="stat-points">⚫ ⚫ ⚫ ⚫ ⚪</span>
                <span className="stat-name">🦉 Intelligence</span>
                <span className="stat-points">⚫ ⚫ ⚪ ⚪ ⚪</span>
                <span className="stat-name">🐆 Agility</span>
                <span className="stat-points">⚫ ⚫ ⚫ ⚫ ⚪</span>
                <span className="stat-name">🐈‍⬛ Luck</span>
              </div>
            </div>
            <div className="equipment-container">
              <span className="text-l uppercase">Equipment</span>
              <div className="equipment"></div>
            </div>
            <div className="talents-container">
              <span className="text-l uppercase">Talents</span>
              <div className="talents"></div>
            </div>
            <div className="likes-container">
              <div className="like">
                <span className="text-l uppercase">Likes</span>
                <ul className="text-l">
                  <li><span className="text-m">❤️</span> Cooking</li>
                  <li><span className="text-m">❤️</span> Capybaras</li>
                  <li><span className="text-m">❤️</span> Plants</li>
                  <li><span className="text-m">❤️</span> Accordion</li>
                  <li><span className="text-m">❤️</span> Role Playing</li>
                  <li className="text-m">😮 (I made the backgrounds!)</li>
                </ul>
              </div>
              <div className="dislike">
                <span className="text-l uppercase">Dislikes</span>
                <ul className="text-l">
                  <li><span className="text-m">💀</span> Bad listeners</li>
                  <li><span className="text-m">💀</span> Gore</li>
                  <li><span className="text-m">💀</span> Meat</li>
                  <li><span className="text-m">💀</span> Egotistics</li>
                  <li><span className="text-m">💀</span> Close-mindedness</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STUDIES */}
      <section
        id="studies"
        className="background"
        style={{ "background-image": "url('/about-img/TODO_NAME.webp')" }}
      >
        <div className="container-flex">
          <div className="text-flex">
            <h2 className="header">🧐 Studies</h2>
            <div className="text-box">
              I am grateful to have lived and studied in France, which allowed
              me to explore my needs and desires as I went through my journey to
              obtaining an Engineering Degree in Embedded Systems.
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
                      In this rare school system up until 15, I was lucky enough
                      to have half my classes in English, my mother-tongue. This
                      allowed me to grow up fully bilingual in French and
                      English
                    </span>
                  </div>
                </li>

                <li>
                  <div className="list-item-wrapper">
                    <span>
                      <u>Lycée Léonard de Vinci</u> - <i>2014</i>
                      <br />
                      Technical school which brought me to the age of 18 and
                      started my specialisation in all things software and
                      hardware. Thankfully I studied lots of mechanical and
                      physcial concepts as well which broadened my scope of
                      understanding
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
                      My first two years of University Studies were a balance
                      between concrete skills and theoretical knowledge of
                      electronics and programming, paving the way to a choice of
                      going into the working world with this two-year degree or
                      pursuing further into Engineering
                    </span>
                  </div>
                </li>

                <li>
                  <div className="list-item-wrapper">
                    <span>
                      <u>ENSTA Bretagne</u> - <i>2019</i>
                      <br />
                      Upon deciding to go further, I went to the end of the
                      world (Brest) and embarked in a 3 year trip through the
                      world of Embedded Systems Engineering. Luckily, I had the
                      opportunity to do this as an employed apprentice engineer
                      for half the time, directly applying what I was learning.
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

      {/* WORK */}
      <section
        id="work"
        className="background"
        style={{
          "background-image": "url('/about-img/Amethyst_Nations.webp')",
        }}
      >
        <div className="work-grid-container">
          <h2 className="title">🚀 Work</h2>

          {/* COLUMN 1 */}
          <div className="col col-1">
            {/* SIGMA INTEGRALE */}
            <div className="item">
              <div
                className="company-logo"
                style={{
                  "--background-img": "url(/about-img/work-logos/sigma.webp)",
                }}
              ></div>
              <div className="text-container">
                <div className="company-name">Sigma Integrale</div>
                <div className="role">Software Engineer Intern - 2015</div>
                <ul>
                  <li>Connect racing game to dashboard</li>
                  <li>Recreate proprietary software</li>
                  <li>Work remote with USA</li>
                </ul>
              </div>
            </div>

            {/* NAVAL GROUP */}
            <div className="item">
              <div
                className="company-logo"
                style={{
                  "--background-img": "url(/about-img/work-logos/ng.webp)",
                }}
              ></div>
              <div className="text-container">
                <div className="company-name">Naval Group</div>
                <div className="role">Engineer Apprentice - 2016-19</div>
                <ul>
                  <li>
                    Test navy ship's{" "}
                    <span className="tooltip" title="Operating System">
                      OS
                    </span>
                  </li>
                  <li>Automate tests</li>
                  <li>Virtualise systems</li>
                </ul>
              </div>
            </div>

            {/* ÅLAND */}
            <div className="item">
              <div
                className="company-logo"
                style={{
                  "--background-img": "url(/about-img/work-logos/aland.webp)",
                }}
              ></div>
              <div className="text-container">
                <div className="company-name">Åland Sailing Robots</div>
                <div className="role">Engineer Intern - 2018</div>
                <ul>
                  <li>Track live sailboat position</li>
                  <li>3D print new parts</li>
                  <li>Endurance test boat</li>
                </ul>
              </div>
            </div>
          </div>

          {/* COLUMN 2 */}
          <div className="col col-2">
            {/* IMDS */}
            <div className="item">
              <div
                className="company-logo"
                style={{
                  "--background-img": "url(/about-img/work-logos/imds.webp)",
                }}
              ></div>
              <div className="text-container">
                <div className="company-name">IMDS Montreal</div>
                <div className="role">Software Engineer - 2019-20</div>
                <ul>
                  <li>
                    Improve{" "}
                    <span
                      className="tooltip"
                      title="Optical Character Recognition"
                    >
                      OCR
                    </span>{" "}
                    software
                  </li>
                  <li>Interface software with databases</li>
                  <li>Integrate new camera drivers</li>
                </ul>
              </div>
            </div>

            {/* SOTON */}
            <div className="item">
              <div
                className="company-logo"
                style={{
                  "--background-img": "url(/about-img/work-logos/soton.webp)",
                }}
              ></div>
              <div className="text-container">
                <div className="company-name">University of Southampton</div>
                <div className="role">Softawre Engineer - 2021-22</div>
                <ul>
                  <li>
                    Interface Teams and{" "}
                    <span className="tooltip" title="Online education platform">
                      Blackboard
                    </span>
                  </li>
                  <li>Develop websites for our apps</li>
                  <li>Automate tasks for my team</li>
                </ul>
              </div>
            </div>

            {/* YOU */}
            <div className="item">
              <div
                className="company-logo"
                style={{
                  "--background-img": "url(/about-img/work-logos/eyes.webp)",
                }}
              ></div>
              <div className="text-container">
                <div className="company-name">You, maybe?</div>
                <div className="role">
                  Webdev / Software Engineer - Whenever
                </div>
                <ul>
                  <li>Do some cool tricks</li>
                  <li>Make a fancy website</li>
                  <li>Get along well</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
});

export const head: DocumentHead = {
  title: "Frazic - About",
  links: [{ rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Patrick+Hand&display=swap" }]
};