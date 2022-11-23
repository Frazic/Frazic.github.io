import {
  component$,
  useSignal,
  useStore,
  useStylesScoped$,
  useWatch$,
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

  const treeIsActive = (isTree1Active.value || isTree2Active.value || isTree3Active.value);

  const tooltipStore = useStore<TooltipStore>({
    text: "",
    title: "",
  });

  useWatch$(({ track }) => {
    track(() => (isTree1Active.value || isTree2Active.value || isTree3Active.value));
    if (!(isTree1Active.value || isTree2Active.value || isTree3Active.value)) {
      tooltipStore.text = "";
      tooltipStore.title = "";
    }
  })

  return (
    <>
      <style>
        {"\
@media screen and (min-width:1024px){\
footer {\
    transform: translateY(" +
          (treeIsActive
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
              Front-End
            </h2>
            <TalentColumn
              isActive={isTree1Active.value}
              items={[
                { name: "JS" },
                { name: "link" },
                { name: "React" },
                { name: "link" },
                { name: "Next" },
                { name: "link" },
                { name: "Qwik" },
              ]}
            />
            <TalentColumn
              isActive={isTree1Active.value}
              items={[
                { name: "Razor" },
                { name: "space" },
                { name: "PHP" },
                { name: "space" },
                { name: "HTML" },
                { name: "link" },
                { name: "CSS" },
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
              Back-End
            </h2>
            <TalentColumn
              isActive={isTree2Active.value}
              tooltipStore={tooltipStore}
              items={[
                { name: "Python" },
                { name: "space" },
                { name: "SQL" },
                { name: "space" },
                { name: "Bash" },
                { name: "space" },
                { name: "Java" },
              ]}
            />
            <TalentColumn
              isActive={isTree2Active.value}
              tooltipStore={tooltipStore}
              items={[
                { name: "C" },
                { name: "link" },
                { name: "C++" },
                { name: "link" },
                { name: "C#" },
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
              Extras
            </h2>
            <TalentColumn
              isActive={isTree3Active.value}
              items={[
                { name: "CAD" },
                { name: "space" },
                { name: "FPGA" },
                { name: "space" },
                { name: "Linux" },
                { name: "link" },
                { name: "RPi" },
              ]}
            />
            <TalentColumn
              isActive={isTree3Active.value}
              items={[
                { name: "Electronics" },
                { name: "link" },
                { name: "Arduino" },
                { name: "link" },
                { name: "XBee" },
                { name: "space" },
                { name: "Network" },
              ]}
            />
          </div>
        </div>
      </div>

      <h4
        className={
          "tooltip" +
          (tooltipStore.text != "" &&
            treeIsActive
            ? " active"
            : "")
        }
        style={
          treeIsActive
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
