import {
  component$,
  useSignal,
  useStore,
  useStylesScoped$,
} from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";
import styles from "./skills.css?inline";
import { TalentColumn } from "./talentColumn";

export interface TooltipStore {
  text: string;
  title: string;
}

export default component$(() => {
  useStylesScoped$(styles);

  const isTree1Active = useSignal(true);
  const isTree2Active = useSignal(true);
  const isTree3Active = useSignal(true);

  const tooltipStore = useStore<TooltipStore>({
    text: "",
    title: "",
  });

  return (
    <>
      <style>
        {"\
@media screen and (min-width:1024px){\
footer {\
    transform: translateY(" +
          (isTree1Active.value || isTree2Active.value || isTree3Active.value
            ? "0"
            : "-15em") +
          ");\
    transition: transform 300ms ease;\
}}"}
      </style>
      <h1>Skills</h1>
      <div className="tree-grid">
        <div
          className={isTree1Active.value ? "tree tree-1-active" : "tree tree-1"}
        >
          <div className="talent-grid">
            <h2
              className="talent-header"
              onClick$={() => {
                isTree1Active.value = !isTree1Active.value;
              }}
            >
              Tree 1
            </h2>
            <TalentColumn
              isActive={isTree1Active.value}
              items={[
                { name: "Talent 1", iconClass: "fa-solid fa-camera" },
                { name: "Talent 2", iconClass: "fa-solid fa-camera" },
                { name: "Talent 3", iconClass: "fa-solid fa-camera" },
              ]}
            />
            <TalentColumn
              isActive={isTree1Active.value}
              items={[
                { name: "Talent 1", iconClass: "fa-solid fa-camera" },
                { name: "Talent 2", iconClass: "fa-solid fa-camera" },
                { name: "Talent 3", iconClass: "fa-solid fa-camera" },
              ]}
            />
          </div>
        </div>
        <div
          className={isTree2Active.value ? "tree tree-2-active" : "tree tree-2"}
        >
          <div className="talent-grid">
            <h2
              className="talent-header"
              onClick$={() => {
                isTree2Active.value = !isTree2Active.value;
              }}
            >
              Tree 2
            </h2>
            <TalentColumn
              isActive={isTree2Active.value}
              tooltipStore={tooltipStore}
              items={[
                {
                  name: "Talent 1",
                  iconClass: "fa-solid fa-camera",
                  tooltip: "Description of talent 1",
                },
                { name: "link" },
                {
                  name: "Talent 2",
                  iconClass: "fa-solid fa-camera",
                  tooltip: "Longer description of talent 2",
                },
                { name: "space" },
                {
                  name: "Talent 3",
                  iconClass: "fa-solid fa-camera",
                  tooltip:
                    "Much much longer description of talent 3 that goes into too much details to fit into a reasonable tooltip that is easy to understand",
                },
              ]}
            />
            <TalentColumn
              isActive={isTree2Active.value}
              tooltipStore={tooltipStore}
              items={[
                { name: "Talent 1", iconClass: "fa-solid fa-camera" },
                { name: "empty" },
                { name: "Talent 2", iconClass: "fa-solid fa-camera" },
                { name: "link" },
                { name: "Talent 3", iconClass: "fa-solid fa-camera" },
              ]}
            />
          </div>
        </div>
        <div
          className={isTree3Active.value ? "tree tree-3-active" : "tree tree-3"}
        >
          <div className="talent-grid">
            <h2
              className="talent-header"
              onClick$={() => {
                isTree3Active.value = !isTree3Active.value;
              }}
            >
              Tree 3
            </h2>
            <TalentColumn
              isActive={isTree3Active.value}
              items={[
                { name: "Talent 1", iconClass: "fa-solid fa-camera" },
                { name: "Talent 2", iconClass: "fa-solid fa-camera" },
                { name: "Talent 3", iconClass: "fa-solid fa-camera" },
              ]}
            />
            <TalentColumn
              isActive={isTree3Active.value}
              items={[
                { name: "Talent 1", iconClass: "fa-solid fa-camera" },
                { name: "Talent 2", iconClass: "fa-solid fa-camera" },
                { name: "Talent 3", iconClass: "fa-solid fa-camera" },
              ]}
            />
          </div>
        </div>
      </div>

      <h4
        className={
          "tooltip" +
          (tooltipStore.text != "" &&
            (isTree1Active.value || isTree2Active.value || isTree3Active.value)
            ? " active"
            : "")
        }
        style={
          isTree1Active.value || isTree2Active.value || isTree3Active.value
            ? {}
            : { opacity: "0" }
        }
      >
        <span
          className={
            "tooltip-text" + (tooltipStore.text != "" ? " active" : "")
          }
        >
          <b>{tooltipStore.title != "" ? tooltipStore.title + ":" : ""}</b>{" "}
          {tooltipStore.text}
        </span>
      </h4>
    </>
  );
});

export const head: DocumentHead = () => {
  return {
    title: "Skills",
  };
};
