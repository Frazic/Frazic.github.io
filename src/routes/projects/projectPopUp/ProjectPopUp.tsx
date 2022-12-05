import {
  component$,
  useClientEffect$,
  useSignal,
  useStyles$,
} from "@builder.io/qwik";
import styles from "./projectPopUp.css?inline";

export interface ProjectPopUpProps {
  store: ProjectPopUpContentStore;
}

export interface ProjectPopUpContentStore {
  isActive: boolean;
  title: string;
  url?: string;
  date: string;
  location: string;
  description: string;
  imageSrc: string;
  footnote?: string;
  scrollY: number;
}

export const ProjectPopUp = component$<ProjectPopUpProps>((props) => {
  useStyles$(styles);

  const ref = useSignal<HTMLDivElement>();

  // Closes popup if clicked outside
  useClientEffect$(() => {
    const listener = (event: any) => {
      if (!ref.value || ref.value.contains(event.target)) {
        return;
      }
      props.store.isActive = false;
      props.store.title = "";
      props.store.url = "";
      props.store.date = "";
      props.store.location = "";
      props.store.description = "";
      props.store.imageSrc = "";
      props.store.footnote = "";
      props.store.scrollY = 0;
    };

    if (ref?.value) {
      document.addEventListener("mousedown", listener);
      document.addEventListener("touchstart", listener);
    }

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  });

  return (
    <div
      tabIndex={0}
      id="popup-container"
      className={"popup-container" + (props.store.isActive ? " active" : "")}
      style={{ "--scroll-y": props.store.scrollY + "px" }}
      document:onKeyUp$={(ev) => { if (ev.key === "Escape") props.store.isActive = false; }}
    >
      <div id="popup" ref={ref} tabIndex={0} className="popup">
        <button
          tabIndex={0}
          className="closeBtn"
          onClick$={() => (props.store.isActive = false)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm3.707,12.293a1,1,0,1,1-1.414,1.414L12,13.414,9.707,15.707a1,1,0,0,1-1.414-1.414L10.586,12,8.293,9.707A1,1,0,0,1,9.707,8.293L12,10.586l2.293-2.293a1,1,0,0,1,1.414,1.414L13.414,12Z" />
          </svg>
        </button>
        {props.store.url != "" && (
          <a href={props.store.url} target="_blank">
            <h2 className="title">
              {props.store.title} <span className="text-s">🔗</span>
            </h2>
          </a>
        )}
        {props.store.url == "" && (
          <h2 className="title">{props.store.title}</h2>
        )}
        <div className="date-location">
          <div className="date">{props.store.date}</div>
          <div className="location">{props.store.location}</div>
        </div>
        <br />
        <div className="description-container">
          <div className="description">{props.store.description}</div>
        </div>
        {props.store.imageSrc.split(".").at(-1) === "webp" && (
          <img
            src={props.store.imageSrc}
            loading="lazy"
            alt={props.store.imageSrc.split("/").at(-1)?.split(".").at(0)}
            className="image"
          />
        )}

        {props.store.imageSrc.split(".").at(-1) === "webm" && (
          <video className="image" loop muted autoPlay playsInline>
            <source type="video/webm" src={props.store.imageSrc} />
          </video>
        )}
        {props.store.footnote != "" && (
          <div className="footnote">{props.store.footnote}</div>
        )}
      </div>
    </div>
  );
});
