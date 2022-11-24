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
              tooltipStore={tooltipStore}
              items={[
                { name: "JavaScript", tooltip: "", iconSrc: "icons/javascript.png", background: "#20182E" },
                { name: "link" },
                { name: "React", tooltip: "", iconSrc: "icons/react.png", background: "#2B1B46" },
                { name: "link" },
                { name: "Next", tooltip: "", iconSrc: "icons/next-js.png", background: "#28114F" },
                { name: "link" },
                { name: "Qwik", tooltip: "", iconSrc: "icons/qwik.svg", background: "#320F6C" },
              ]}
            />
            <TalentColumn
              isActive={isTree1Active.value}
              tooltipStore={tooltipStore}
              items={[
                { name: "ASP.NET", tooltip: "", iconSrc: "icons/asp-net.png", background: "#32182B" },
                { name: "space" },
                { name: "PHP", tooltip: "", iconSrc: "icons/php.png", background: "#4C193E" },
                { name: "space" },
                { name: "HTML", tooltip: "", iconSrc: "icons/html.png", background: "#570B42" },
                { name: "link" },
                { name: "CSS", tooltip: "", iconSrc: "icons/css.png", background: "#770658" },
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
                { name: "Python", tooltip: "", iconSrc: "icons/python.png", background: "#442B20" },
                { name: "space" },
                { name: "SQL", tooltip: "", iconSrc: "icons/sql.png", background: "#663721" },
                { name: "space" },
                { name: "Bash", tooltip: "", iconSrc: "icons/bash.png", background: "#742E0F" },
                { name: "space" },
                { name: "Java", tooltip: "", iconSrc: "icons/java.png", background: "#9F3708" },
              ]}
            />
            <TalentColumn
              isActive={isTree2Active.value}
              tooltipStore={tooltipStore}
              items={[
                { name: "C", tooltip: "", iconSrc: "icons/c.png", background: "#443A20" },
                { name: "link" },
                { name: "C++", tooltip: "", iconSrc: "icons/c++.png", background: "#665421" },
                { name: "link" },
                { name: "C#", tooltip: "", iconSrc: "icons/csharp.png", background: "#745A0F" },
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
              tooltipStore={tooltipStore}
              items={[
                { name: "CAD", tooltip: "", iconSrc: "icons/solidworks.png", background: "#3B411F" },
                { name: "space" },
                { name: "Linux", tooltip: "", iconSrc: "icons/linux.png", background: "#576320" },
                { name: "link" },
                { name: "Git", tooltip: "", iconSrc: "icons/github.png", background: "#5F700F" },
                { name: "link" },
                { name: "RPi", tooltip: "", iconSrc: "icons/raspberry-pi.png", background: "#809907" },
              ]}
            />
            <TalentColumn
              isActive={isTree3Active.value}
              tooltipStore={tooltipStore}
              items={[
                { name: "Electronics", tooltip: "", iconSrc: "icons/electronics.png", background: "#15232B" },
                { name: "link" },
                { name: "Arduino", tooltip: "", iconSrc: "icons/arduino.png", background: "#173241" },
                { name: "link" },
                { name: "Radio", tooltip: "", iconSrc: "icons/radio.png", background: "#0D354A" },
                { name: "space" },
                { name: "Network", tooltip: "", iconSrc: "icons/network.png", background: "#0A4565" },
              ]}
            />
          </div>
        </div>
      </div>

      <h4
        className={
          "tooltip" +
          (tooltipStore.title != "" &&
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
