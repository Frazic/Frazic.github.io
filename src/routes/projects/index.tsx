import {
  component$,
  useStyles$,
  useStore,
  useClientEffect$,
} from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";
import {
  ProjectPopUp,
  ProjectPopUpContentStore,
} from "./projectPopUp/ProjectPopUp";
import styles from "./projects.css?inline";

export default component$(() => {
  useStyles$(styles);

  const popUpContentStore = useStore<ProjectPopUpContentStore>({
    isActive: false,
    title: "",
    url: "",
    date: "",
    location: "",
    description: "",
    imageSrc: "",
    footnote: "",
    scrollY: 0,
  });

  // Disables body scroll when a popup is open
  useClientEffect$(({ track }) => {
    track(popUpContentStore);
    document.body.style.overflowY = popUpContentStore.isActive
      ? "hidden"
      : "auto";
    document.body.ariaHidden = popUpContentStore.isActive ? "true" : "false";
    if (popUpContentStore.isActive) document.getElementById("popup")?.focus();
  });

  const scrollBtnAmount = 500;

  return (
    <div>
      <ProjectPopUp store={popUpContentStore} />

      <h1>Projects</h1>

      <h2>Software</h2>
      <div className="card-list-container">
        <section id="card-list-software" className="card-list">
          {/* Aspire tracking website */}
          <article
            className="card"
            tabIndex={0}
            onClick$={() => {
              popUpContentStore.isActive = true;
              popUpContentStore.title = "GPS Tracking website";
              popUpContentStore.url = "";
              popUpContentStore.date = "Summer 2018";
              popUpContentStore.location = "Åland";
              popUpContentStore.description =
                "To follow our autonomous sailboat I was tasked with processing the live data we were receiving from it and displaying it on a map. For this I used the Google Maps API to display all the available relevant information.";
              popUpContentStore.imageSrc =
                "/projects/aspire_live_tracking.webm";
              popUpContentStore.footnote =
                "The site requires admin access so I can't give you a link :c";
              popUpContentStore.scrollY = window.scrollY;
            }}
          >
            <header className="card-header">
              <p>Summer 2018</p>
              <h2>GPS Tracking website</h2>
            </header>
            <div className="card-author">
              <div className="author-avatar">
                <img src="/avatar.png" alt="avatar" />
              </div>
              <svg class="half-circle" viewBox="0 0 106 57">
                <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
              </svg>
              <div className="author-name">Frazic</div>
            </div>
            <ul className="tags">
              <li>JavaScript</li>
              <li>PHP</li>
              <li>Maps API</li>
            </ul>
          </article>
          {/* Sound Circle */}
          <article
            className="card"
            tabIndex={0}
            onClick$={() => {
              popUpContentStore.isActive = true;
              popUpContentStore.title = "Sound Circle";
              popUpContentStore.url = "https://frazic.github.io/Sound_Circle/";
              popUpContentStore.date = "Summer 2020";
              popUpContentStore.location = "Montreal";
              popUpContentStore.description =
                "I wanted to show sound in a creative way so I decided to give it a go like this! This work was done in collaboration with a marine mammal acoustician from NOAA.";
              popUpContentStore.imageSrc = "/projects/sound_circle.webp";
              popUpContentStore.footnote = "";
              popUpContentStore.scrollY = window.scrollY;
            }}
          >
            <header className="card-header">
              <p>Summer 2020</p>
              <h2>Sound Circle</h2>
            </header>
            <div className="card-author">
              <div className="author-avatar">
                <img src="/avatar.png" alt="avatar" />
              </div>
              <svg class="half-circle" viewBox="0 0 106 57">
                <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
              </svg>
              <div className="author-name">Frazic</div>
            </div>
            <ul className="tags">
              <li>JS</li>
              <li>P5js</li>
              <li>Spectrogram</li>
            </ul>
          </article>
          {/* Blog */}
          <article
            className="card"
            tabIndex={0}
            onClick$={() => {
              popUpContentStore.isActive = true;
              popUpContentStore.title = "NextJS Blog";
              popUpContentStore.url = ""; // TODO
              popUpContentStore.date = "September 2022";
              popUpContentStore.location = "France";
              popUpContentStore.description =
                "Wanting to learn NextJS I followed a course that lead to the creation of this blog. It was fun to learn all these new and promising skills, and as I usually do once I had finished, I challenged myself to go further than the course and apply what I had learned in doing something extra. In this case it was the theme changer.";
              popUpContentStore.imageSrc = "/projects/nextjs_blog.webp";
              popUpContentStore.footnote = "";
              popUpContentStore.scrollY = window.scrollY;
            }}
          >
            <header className="card-header">
              <p>September 2022</p>
              <h2>NextJS Blog</h2>
            </header>
            <div className="card-author">
              <div className="author-avatar">
                <img src="/avatar.png" alt="avatar" />
              </div>
              <svg class="half-circle" viewBox="0 0 106 57">
                <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
              </svg>
              <div className="author-name">Frazic</div>
            </div>
            <ul className="tags">
              <li>NextJS</li>
              <li>Firebase</li>
              <li>Auth</li>
            </ul>
          </article>
          {/* Crypto bot */}
          <article
            className="card"
            tabIndex={0}
            onClick$={() => {
              popUpContentStore.isActive = true;
              popUpContentStore.title = "Crypto Bot";
              popUpContentStore.url = "";
              popUpContentStore.date = "Summer 2021";
              popUpContentStore.location = "UK";
              popUpContentStore.description =
                "For a while I was interested in crypto currencies, and my mind just wouldn't stop gnawing at me with the idea that trading could be automated. So that's exactly what I set out to do. Spoiler alert: I didn't make any money as that was not the goal. Nevertheless it was a fascinating experience to delve into the maths of financial analysis and code a Python bot to interact with trading platform APIs.";
              popUpContentStore.imageSrc = "/projects/tradingview.webp";
              popUpContentStore.footnote = "";
              popUpContentStore.scrollY = window.scrollY;
            }}
          >
            <header className="card-header">
              <p>Summer 2021</p>
              <h2>Crypto Bot</h2>
            </header>
            <div className="card-author">
              <div className="author-avatar">
                <img src="/avatar.png" alt="avatar" />
              </div>
              <svg class="half-circle" viewBox="0 0 106 57">
                <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
              </svg>
              <div className="author-name">Frazic</div>
            </div>
            <ul className="tags">
              <li>Python</li>
              <li>API</li>
              <li>Crypto</li>
            </ul>
          </article>
          {/* Genetic Algorithms */}
          <article
            className="card"
            tabIndex={0}
            onClick$={() => {
              popUpContentStore.isActive = true;
              popUpContentStore.title = "Genetic Algorithm";
              popUpContentStore.url = "";
              popUpContentStore.date = "Summer 2022";
              popUpContentStore.location = "France";
              popUpContentStore.description =
                "The one annoying thing with my crypto bot was that the parameters had to be found manually by blindly testing. I wanted to automate that part of the process as well, and that's how I got into genetic algorithms to iteratively learn by the process of natural selection. It's a fascinating subject and surprisingly easy to get started!";
              popUpContentStore.imageSrc = "";
              popUpContentStore.footnote =
                "I don't really have a picture for this one as it's just a script";
              popUpContentStore.scrollY = window.scrollY;
            }}
          >
            <header className="card-header">
              <p>Summer 2022</p>
              <h2>Genetic Algorithm</h2>
            </header>
            <div className="card-author">
              <div className="author-avatar">
                <img src="/avatar.png" alt="avatar" />
              </div>
              <svg class="half-circle" viewBox="0 0 106 57">
                <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
              </svg>
              <div className="author-name">Frazic</div>
            </div>
            <ul className="tags">
              <li>Python</li>
              <li>ML</li>
              <li>Genetics</li>
            </ul>
          </article>
          {/* Test automation */}
          <article
            className="card"
            tabIndex={0}
            onClick$={() => {
              popUpContentStore.isActive = true;
              popUpContentStore.title = "Test Automation";
              popUpContentStore.url = "";
              popUpContentStore.date = "2018";
              popUpContentStore.location = "France";
              popUpContentStore.description =
                "Whilst working for Naval Group, I was tasked with automating a lot of the repetitive regression tests for the ship's OS. This task was excellent for me as I thoroughly enjoy finding ways of having a computer do the work for me.";
              popUpContentStore.imageSrc = "";
              popUpContentStore.footnote = "No pictures allowed!";
              popUpContentStore.scrollY = window.scrollY;
            }}
          >
            <header className="card-header">
              <p>2018</p>
              <h2>Test Automation</h2>
            </header>
            <div className="card-author">
              <div className="author-avatar">
                <img src="/avatar.png" alt="avatar" />
              </div>
              <svg class="half-circle" viewBox="0 0 106 57">
                <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
              </svg>
              <div className="author-name">Frazic</div>
            </div>
            <ul className="tags">
              <li>Testing</li>
              <li>EggPlant</li>
              <li>Automation</li>
            </ul>
          </article>
          {/* Virtualisation */}
          <article
            className="card"
            tabIndex={0}
            onClick$={() => {
              popUpContentStore.isActive = true;
              popUpContentStore.title = "Virtualisation";
              popUpContentStore.url = "";
              popUpContentStore.date = "2019";
              popUpContentStore.location = "France";
              popUpContentStore.description =
                "The machines used for testing at Naval Group were critical, yet getting older. My mission was to make them run virtually on a server in order to replace the physical simulation computers. This ensured backups, amongst other benefits!";
              popUpContentStore.imageSrc = "";
              popUpContentStore.footnote = "No pictures allowed!";
              popUpContentStore.scrollY = window.scrollY;
            }}
          >
            <header className="card-header">
              <p>2019</p>
              <h2>Virtualisation</h2>
            </header>
            <div className="card-author">
              <div className="author-avatar">
                <img src="/avatar.png" alt="avatar" />
              </div>
              <svg class="half-circle" viewBox="0 0 106 57">
                <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
              </svg>
              <div className="author-name">Frazic</div>
            </div>
            <ul className="tags">
              <li>VMWare</li>
              <li>Testing</li>
              <li>Virtualisation</li>
            </ul>
          </article>
        </section>

        {/* Scroll Buttons */}
        <button
          className="scrollBtn left"
          role={"button"}
          onClick$={() => {
            document
              .getElementById("card-list-software")
              ?.scrollBy({ left: -scrollBtnAmount, behavior: "smooth" });
          }}
        >
          {"<"}
        </button>
        <button
          className="scrollBtn right"
          role={"button"}
          onClick$={() => {
            document
              .getElementById("card-list-software")
              ?.scrollBy({ left: scrollBtnAmount, behavior: "smooth" });
          }}
        >
          {">"}
        </button>
      </div>

      <h2>Others</h2>
      <div className="card-list-container">
        <section id="card-list-others" className="card-list">
          {/* Tracking solar panel */}
          <article
            className="card"
            tabIndex={0}
            onClick$={() => {
              popUpContentStore.isActive = true;
              popUpContentStore.title = "Tracking Solar Panel";
              popUpContentStore.url = "";
              popUpContentStore.date = "2014";
              popUpContentStore.location = "France";
              popUpContentStore.description =
                "One of my very first projects at school was to build a solar panel that could track the sun, to optimise its energy output. We went for a very simple approach of setting angles throughout the year. If I were to do it again I would use a brightness difference detector to automatically point the solar panel in the right direction.";
              popUpContentStore.imageSrc = "";
              popUpContentStore.footnote = "";
              popUpContentStore.scrollY = window.scrollY;
            }}
          >
            <header className="card-header">
              <p>2014</p>
              <h2>Tracking Solar Panel</h2>
            </header>
            <div className="card-author">
              <div className="author-avatar">
                <img src="/avatar.png" alt="avatar" />
              </div>
              <svg class="half-circle" viewBox="0 0 106 57">
                <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
              </svg>
              <div className="author-name">Frazic</div>
            </div>
            <ul className="tags">
              <li>Solar</li>
              <li>Machining</li>
              <li>Tracking</li>
            </ul>
          </article>
          {/* Radio emitter */}
          <article
            className="card"
            tabIndex={0}
            onClick$={() => {
              popUpContentStore.isActive = true;
              popUpContentStore.title = "Radio Emitter";
              popUpContentStore.url = "";
              popUpContentStore.date = "2015";
              popUpContentStore.location = "France";
              popUpContentStore.description =
                "At university I was able to build a radio emitter from scratch with only basic electronic components. It didn't work well enough to be of any legal concern but we could hear our own music on the radio!";
              popUpContentStore.imageSrc = "";
              popUpContentStore.footnote = "";
              popUpContentStore.scrollY = window.scrollY;
            }}
          >
            <header className="card-header">
              <p>2015</p>
              <h2>Radio Emitter</h2>
            </header>
            <div className="card-author">
              <div className="author-avatar">
                <img src="/avatar.png" alt="avatar" />
              </div>
              <svg class="half-circle" viewBox="0 0 106 57">
                <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
              </svg>
              <div className="author-name">Frazic</div>
            </div>
            <ul className="tags">
              <li>Radio Frequencies</li>
              <li>Electronics</li>
              <li>Sound</li>
            </ul>
          </article>
          {/* Bracelight */}
          <article
            className="card"
            tabIndex={0}
            onClick$={() => {
              popUpContentStore.isActive = true;
              popUpContentStore.title = "Bracelight";
              popUpContentStore.url = "";
              popUpContentStore.date = "2015";
              popUpContentStore.location = "France";
              popUpContentStore.description =
                "This was an original idea from my teammate: in music festivals it is quite common to lose your friends. What if each member of the group had a bracelet that lit up the closer you get to your friends? You'd be able to easily find them after a small game of 'hot or cold'!";
              popUpContentStore.imageSrc = "/projects/bracelight.webp";
              popUpContentStore.footnote = "";
              popUpContentStore.scrollY = window.scrollY;
            }}
          >
            <header className="card-header">
              <p>2015</p>
              <h2>Bracelight</h2>
            </header>
            <div className="card-author">
              <div className="author-avatar">
                <img src="/avatar.png" alt="avatar" />
              </div>
              <svg class="half-circle" viewBox="0 0 106 57">
                <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
              </svg>
              <div className="author-name">Frazic</div>
            </div>
            <ul className="tags">
              <li>Arduino</li>
              <li>XBee</li>
              <li>Radio Frequencies</li>
            </ul>
          </article>
          {/* Speedometer */}
          <article
            className="card"
            tabIndex={0}
            onClick$={() => {
              popUpContentStore.isActive = true;
              popUpContentStore.title = "Speedometer";
              popUpContentStore.url = "";
              popUpContentStore.date = "2016";
              popUpContentStore.location = "France";
              popUpContentStore.description =
                "In this really fun internship I had the opportunity of connecting a racing video game with a physical car speedometer. It was as difficult as it was rewarding!";
              popUpContentStore.imageSrc = "/projects/ac_betweeno.webm";
              popUpContentStore.footnote = "Yay for shaky cam!";
              popUpContentStore.scrollY = window.scrollY;
            }}
          >
            <header className="card-header">
              <p>2016</p>
              <h2>Speedometer</h2>
            </header>
            <div className="card-author">
              <div className="author-avatar">
                <img src="/avatar.png" alt="avatar" />
              </div>
              <svg class="half-circle" viewBox="0 0 106 57">
                <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
              </svg>
              <div className="author-name">Frazic</div>
            </div>
            <ul className="tags">
              <li>Arduino</li>
              <li>RS232</li>
              <li>Serial Comms</li>
            </ul>
          </article>
          {/* Decomatisateur */}
          <article
            className="card"
            tabIndex={0}
            onClick$={() => {
              popUpContentStore.isActive = true;
              popUpContentStore.title = "Decomatiser";
              popUpContentStore.url = "";
              popUpContentStore.date = "2019";
              popUpContentStore.location = "France";
              popUpContentStore.description =
                "For my annual LARP where I play the Dr. Frazic, I built myself a steampunk defibrillator as a prop!";
              popUpContentStore.imageSrc = "/projects/decomatisateur.webm";
              popUpContentStore.footnote = "Thanks Bastien for the demo c:";
              popUpContentStore.scrollY = window.scrollY;
            }}
          >
            <header className="card-header">
              <p>2019</p>
              <h2>Decomatiser</h2>
            </header>
            <div className="card-author">
              <div className="author-avatar">
                <img src="/avatar.png" alt="avatar" />
              </div>
              <svg class="half-circle" viewBox="0 0 106 57">
                <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
              </svg>
              <div className="author-name">Frazic</div>
            </div>
            <ul className="tags">
              <li>Role Playing</li>
              <li>Electronics</li>
              <li>Steampunk</li>
            </ul>
          </article>
          {/* Car radar */}
          <article
            className="card"
            tabIndex={0}
            onClick$={() => {
              popUpContentStore.isActive = true;
              popUpContentStore.title = "Car Radar";
              popUpContentStore.url = "";
              popUpContentStore.date = "2019";
              popUpContentStore.location = "France";
              popUpContentStore.description =
                "My class and I were tasked with connecting a commercial distance radar with a Raspberry Pi, as they had not done this and needed someone to get them started on it. I lead the team and we managed to build a driver in Python that allowed communication between the RPi and the Radar!";
              popUpContentStore.imageSrc = "";
              popUpContentStore.footnote = "";
              popUpContentStore.scrollY = window.scrollY;
            }}
          >
            <header className="card-header">
              <p>2019</p>
              <h2>Car Radar</h2>
            </header>
            <div className="card-author">
              <div className="author-avatar">
                <img src="/avatar.png" alt="avatar" />
              </div>
              <svg class="half-circle" viewBox="0 0 106 57">
                <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
              </svg>
              <div className="author-name">Frazic</div>
            </div>
            <ul className="tags">
              <li>Radar</li>
              <li>Raspberry Pi</li>
              <li>Driver</li>
            </ul>
          </article>
        </section>

        {/* Scroll Buttons */}
        <button
          className="scrollBtn left"
          role={"button"}
          onClick$={() => {
            document
              .getElementById("card-list-others")
              ?.scrollBy({ left: -scrollBtnAmount, behavior: "smooth" });
          }}
        >
          {"<"}
        </button>
        <button
          className="scrollBtn right"
          role={"button"}
          onClick$={() => {
            document
              .getElementById("card-list-others")
              ?.scrollBy({ left: scrollBtnAmount, behavior: "smooth" });
          }}
        >
          {">"}
        </button>
      </div>
    </div>
  );
});

export const head: DocumentHead = () => {
  return {
    title: "Frazic - Projects",
    links: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inconsolata&display=swap",
      },
    ],
  };
};
