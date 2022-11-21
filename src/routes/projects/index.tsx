import { component$, useStyles$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";
import styles from "./projects.css?inline";

export default component$(() => {
  useStyles$(styles);

  return (
    <div>
      <h1>Projects</h1>
      <section className="card-list">
        <article className="card">
          <header className="card-header">
            <p>01 May 1996</p>
            <h2>
              <a href="projects/born">Josh was born!</a>
            </h2>
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

          <div className="tags">
            <a href="#">birth</a>
            <a href="#">lift</a>
            <a href="#">boi</a>
          </div>
        </article>

        <article className="card">
          <header className="card-header">
            <p>Some time during his life</p>
            <h2>Cool project name</h2>
          </header>

          <div className="card-author">
            <div className="author-avatar">
              <img src="/avatar.png" alt="avatar" />
            </div>
            <svg class="half-circle" viewBox="0 0 106 57">
              <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
            </svg>

            <div className="author-name">
              <div className="author-name-prefix">Naval Group</div>
              Josh Bruylant
            </div>
          </div>

          <div className="tags">
            <a href="#">learning</a>
            <a href="#">software</a>
            <a href="#">cool</a>
          </div>
        </article>

        <article className="card">
          <header className="card-header">
            <p>Some time during his life</p>
            <h2>Cool project name</h2>
          </header>

          <div className="card-author">
            <div className="author-avatar">
              <img src="/avatar.png" alt="avatar" />
            </div>
            <svg class="half-circle" viewBox="0 0 106 57">
              <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
            </svg>

            <div className="author-name">
              <div className="author-name-prefix">Naval Group</div>
              Josh Bruylant
            </div>
          </div>

          <div className="tags">
            <a href="#">learning</a>
            <a href="#">software</a>
            <a href="#">cool</a>
          </div>
        </article>

        <article className="card">
          <header className="card-header">
            <p>Some time during his life</p>
            <h2>Cool project name</h2>
          </header>

          <div className="card-author">
            <div className="author-avatar">
              <img src="/avatar.png" alt="avatar" />
            </div>
            <svg class="half-circle" viewBox="0 0 106 57">
              <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
            </svg>

            <div className="author-name">
              <div className="author-name-prefix">Naval Group</div>
              Josh Bruylant
            </div>
          </div>

          <div className="tags">
            <a href="#">learning</a>
            <a href="#">software</a>
            <a href="#">cool</a>
          </div>
        </article>

        <article className="card">
          <header className="card-header">
            <p>Some time during his life</p>
            <h2>Cool project name</h2>
          </header>

          <div className="card-author">
            <div className="author-avatar">
              <img src="/avatar.png" alt="avatar" />
            </div>
            <svg class="half-circle" viewBox="0 0 106 57">
              <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
            </svg>

            <div className="author-name">
              <div className="author-name-prefix">Naval Group</div>
              Josh Bruylant
            </div>
          </div>

          <div className="tags">
            <a href="#">learning</a>
            <a href="#">software</a>
            <a href="#">cool</a>
          </div>
        </article>

        <article className="card">
          <header className="card-header">
            <p>Some time during his life</p>
            <h2>Cool project name</h2>
          </header>

          <div className="card-author">
            <div className="author-avatar">
              <img src="/avatar.png" alt="avatar" />
            </div>
            <svg class="half-circle" viewBox="0 0 106 57">
              <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
            </svg>

            <div className="author-name">
              <div className="author-name-prefix">Naval Group</div>
              Josh Bruylant
            </div>
          </div>

          <div className="tags">
            <a href="#">learning</a>
            <a href="#">software</a>
            <a href="#">cool</a>
          </div>
        </article>
      </section>
    </div>
  );
});

export const head: DocumentHead = () => {
  return {
    title: "Projects",
  };
};
