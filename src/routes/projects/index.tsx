import { component$, useStyles$, $, JSXNode, useStore, useSignal, useClientEffect$, useWatch$, JSXChildren } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";
import styles from "./projects.css?inline";

export default component$(() => {
  useStyles$(styles);

  const popUpContentRef = useSignal<HTMLDivElement>();
  const setPopUpContent$ = $((content: string) => {
    if (popUpContentRef.value) {
      popUpContentRef.value.innerHTML = content;
    }
  })

  return (
    <div>
      <div ref={popUpContentRef} />
      <h1>Projects</h1>
      <section className="card-list">
        <article className="card" onClick$={() => setPopUpContent$("<div>Hello there!</div>")}>
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
    title: "Frazic - Projects",
  };
};
