import { component$, useStyles$, useStore } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";
import { ProjectPopUp, ProjectPopUpContentStore } from "./projectPopUp/ProjectPopUp";
import styles from "./projects.css?inline";

export default component$(() => {
  useStyles$(styles);


  const popUpContentStore = useStore<ProjectPopUpContentStore>({
    isActive: false,
    title: "",
    date: "",
    location: "",
    description: "",
    imageSrc: ""
  });

  return (
    <div>
      <ProjectPopUp store={popUpContentStore} />

      <h1>Projects</h1>
      <section className="card-list">
        <article className="card" onClick$={() => {
          popUpContentStore.isActive = true;
          popUpContentStore.title = "Project Title";
          popUpContentStore.date = "01 May 1996";
          popUpContentStore.location = "Versailles";
          popUpContentStore.description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          popUpContentStore.imageSrc = "/josh-photo.webp"
        }}>
          <header className="card-header">
            <p>01 May 1996</p>
            <h2>Josh was born!</h2>
          </header>

          <div className="card-author">
            <div className="author-avatar">
              <img src="/avatar.png" alt="avatar" />
            </div>
            <svg class="half-circle" viewBox="0 0 106 57">
              <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
            </svg>

            <div className="author-name">
              <div className="author-name-prefix">Dr.</div>
              Frazic
            </div>
          </div>
          <ul className="tags">
            <li>birth</li>
            <li>lift</li>
            <li>boi</li>
          </ul>
        </article>

        <article className="card" onClick$={() => {
          popUpContentStore.isActive = true;
          popUpContentStore.title = "Project Title";
          popUpContentStore.date = "01 May 1996";
          popUpContentStore.location = "Versailles";
          popUpContentStore.description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          popUpContentStore.imageSrc = "/josh-photo.webp"
        }}>
          <header className="card-header">
            <p>01 May 1996</p>
            <h2>Josh was born!</h2>
          </header>

          <div className="card-author">
            <div className="author-avatar">
              <img src="/avatar.png" alt="avatar" />
            </div>
            <svg class="half-circle" viewBox="0 0 106 57">
              <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
            </svg>

            <div className="author-name">
              <div className="author-name-prefix">Dr.</div>
              Frazic
            </div>
          </div>
          <ul className="tags">
            <li>birth</li>
            <li>lift</li>
            <li>boi</li>
          </ul>
        </article>

        <article className="card" onClick$={() => {
          popUpContentStore.isActive = true;
          popUpContentStore.title = "Project Title";
          popUpContentStore.date = "01 May 1996";
          popUpContentStore.location = "Versailles";
          popUpContentStore.description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          popUpContentStore.imageSrc = "/josh-photo.webp"
        }}>
          <header className="card-header">
            <p>01 May 1996</p>
            <h2>Josh was born!</h2>
          </header>

          <div className="card-author">
            <div className="author-avatar">
              <img src="/avatar.png" alt="avatar" />
            </div>
            <svg class="half-circle" viewBox="0 0 106 57">
              <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
            </svg>

            <div className="author-name">
              <div className="author-name-prefix">Dr.</div>
              Frazic
            </div>
          </div>
          <ul className="tags">
            <li>birth</li>
            <li>lift</li>
            <li>boi</li>
          </ul>
        </article>

        <article className="card" onClick$={() => {
          popUpContentStore.isActive = true;
          popUpContentStore.title = "Project Title";
          popUpContentStore.date = "01 May 1996";
          popUpContentStore.location = "Versailles";
          popUpContentStore.description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          popUpContentStore.imageSrc = "/josh-photo.webp"
        }}>
          <header className="card-header">
            <p>01 May 1996</p>
            <h2>Josh was born!</h2>
          </header>

          <div className="card-author">
            <div className="author-avatar">
              <img src="/avatar.png" alt="avatar" />
            </div>
            <svg class="half-circle" viewBox="0 0 106 57">
              <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
            </svg>

            <div className="author-name">
              <div className="author-name-prefix">Dr.</div>
              Frazic
            </div>
          </div>
          <ul className="tags">
            <li>birth</li>
            <li>lift</li>
            <li>boi</li>
          </ul>
        </article>

        <article className="card" onClick$={() => {
          popUpContentStore.isActive = true;
          popUpContentStore.title = "Project Title";
          popUpContentStore.date = "01 May 1996";
          popUpContentStore.location = "Versailles";
          popUpContentStore.description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          popUpContentStore.imageSrc = "/josh-photo.webp"
        }}>
          <header className="card-header">
            <p>01 May 1996</p>
            <h2>Josh was born!</h2>
          </header>

          <div className="card-author">
            <div className="author-avatar">
              <img src="/avatar.png" alt="avatar" />
            </div>
            <svg class="half-circle" viewBox="0 0 106 57">
              <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
            </svg>

            <div className="author-name">
              <div className="author-name-prefix">Dr.</div>
              Frazic
            </div>
          </div>
          <ul className="tags">
            <li>birth</li>
            <li>lift</li>
            <li>boi</li>
          </ul>
        </article>

        <article className="card" onClick$={() => {
          popUpContentStore.isActive = true;
          popUpContentStore.title = "Project Title";
          popUpContentStore.date = "01 May 1996";
          popUpContentStore.location = "Versailles";
          popUpContentStore.description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          popUpContentStore.imageSrc = "/josh-photo.webp"
        }}>
          <header className="card-header">
            <p>01 May 1996</p>
            <h2>Josh was born!</h2>
          </header>

          <div className="card-author">
            <div className="author-avatar">
              <img src="/avatar.png" alt="avatar" />
            </div>
            <svg class="half-circle" viewBox="0 0 106 57">
              <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
            </svg>

            <div className="author-name">
              <div className="author-name-prefix">Dr.</div>
              Frazic
            </div>
          </div>
          <ul className="tags">
            <li>birth</li>
            <li>lift</li>
            <li>boi</li>
          </ul>
        </article>
      </section>
    </div>
  );
});

export const head: DocumentHead = () => {
  return {
    title: "Frazic - Projects",
    links: [{ rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inconsolata&display=swap" }]
  };
};
