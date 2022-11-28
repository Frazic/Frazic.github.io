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

  const treeIsActive =
    isTree1Active.value || isTree2Active.value || isTree3Active.value;

  const tooltipStore = useStore<TooltipStore>({
    text: "",
    title: "",
  });

  useWatch$(({ track }) => {
    track(
      () => isTree1Active.value || isTree2Active.value || isTree3Active.value
    );
    if (!(isTree1Active.value || isTree2Active.value || isTree3Active.value)) {
      tooltipStore.text = "";
      tooltipStore.title = "";
    }
  });

  return (
    <>
      <style>
        {"\
@media screen and (min-width:1024px){\
footer {\
    transform: translateY(" +
          (treeIsActive ? "0" : "-15em") +
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
              tabIndex={0}
              className="talent-header"
              onKeyPress$={(e) => {
                if (e.key === "Enter" || e.key === " ")
                  isTree1Active.value = !isTree1Active.value;
              }}
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
                {
                  name: "JavaScript",
                  tooltip:
                    "Main programming language used to control client side webpage behaviour. I was first introduced to JS through P5js and The Coding Train.",
                  iconSrc: "/icons/javascript.png",
                  background: "#20182E",
                },
                { name: "link" },
                {
                  name: "React",
                  tooltip:
                    "JS framework built around client-side components. This is what opened my eyes to the world of possibilities in web development.",
                  iconSrc: "/icons/react.png",
                  background: "#2B1B46",
                },
                { name: "link" },
                {
                  name: "Next",
                  tooltip:
                    "Framework built on top of React to allow server-side rendering of webpages before serving them to the client. Very useful to reduce load on the client where possible.",
                  iconSrc: "/icons/next-js.png",
                  background: "#28114F",
                },
                { name: "link" },
                {
                  name: "Qwik",
                  tooltip:
                    "Next generation of JS framework built upon the concept of resumability. This allows O(₁) loading times since the javascript is only loaded on the client when it is interacted with.",
                  iconSrc: "/icons/qwik.svg",
                  background: "#320F6C",
                },
              ]}
            />
            <TalentColumn
              isActive={isTree1Active.value}
              tooltipStore={tooltipStore}
              items={[
                {
                  name: "ASP.NET",
                  tooltip:
                    "Microsoft framework for creating dynamic web pages built on C#. This was my main tool for working at the University of Southampton.",
                  iconSrc: "/icons/asp-net.png",
                  background: "#32182B",
                },
                { name: "space" },
                {
                  name: "PHP",
                  tooltip:
                    "Scripting language oriented towards web development. I used this to work on the University of Southampton's major update to their website.",
                  iconSrc: "/icons/php.png",
                  background: "#4C193E",
                },
                { name: "space" },
                {
                  name: "HTML",
                  tooltip:
                    "Standard markup language for web pages, used to design the layout and ways of interacting with the page.",
                  iconSrc: "/icons/html.png",
                  background: "#570B42",
                },
                { name: "link" },
                {
                  name: "CSS",
                  tooltip:
                    "Styling language for webpages, allows them to look good.",
                  iconSrc: "/icons/css.png",
                  background: "#770658",
                },
              ]}
            />
          </div>
        </div>
        <div
          className={isTree2Active.value ? "tree tree-2-active" : "tree tree-2"}
        >
          <div className="talent-grid">
            <h2
              tabIndex={0}
              className="talent-header"
              onKeyPress$={(e) => {
                if (e.key === "Enter" || e.key === " ")
                  isTree2Active.value = !isTree2Active.value;
              }}
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
                {
                  name: "Python",
                  tooltip:
                    "Scripting programming language and my first programming love. Python has a special place in my heart for its ease of access, although it comes at the cost of performance.",
                  iconSrc: "/icons/python.png",
                  background: "#442B20",
                },
                { name: "space" },
                {
                  name: "SQL",
                  tooltip:
                    "Query language used in interacting with databases. This is crucial for any commercial website as it allows optimised storage and retrieval of data.",
                  iconSrc: "/icons/sql.png",
                  background: "#663721",
                },
                { name: "space" },
                {
                  name: "Bash",
                  tooltip:
                    "Unix scripting language, useful for all sorts of automation and tasks.",
                  iconSrc: "/icons/bash.png",
                  background: "#742E0F",
                },
                { name: "space" },
                {
                  name: "Java",
                  tooltip:
                    "Object-oriented programming language that has the advantage of being built once and is executable anywhere thanks to the Java Virtual Machine.",
                  iconSrc: "/icons/java.png",
                  background: "#9F3708",
                },
              ]}
            />
            <TalentColumn
              isActive={isTree2Active.value}
              tooltipStore={tooltipStore}
              items={[
                {
                  name: "C",
                  tooltip:
                    "An absolute unit of a standard programming language that pretty much everything else seems to be built on. Essential to understand how machines work on a low-level and still the go-to for embedded systems.",
                  iconSrc: "/icons/c.png",
                  background: "#443A20",
                },
                { name: "link" },
                {
                  name: "C++",
                  tooltip:
                    "An evolution of C which includes object-orientation. One of the most common languages for backend-only applications",
                  iconSrc: "/icons/c++.png",
                  background: "#665421",
                },
                { name: "link" },
                {
                  name: "C#",
                  tooltip:
                    "Pronounced C-Sharp, this general purpose language was designed to be simple, modern and encompass important software-engineering concepts not present in C/C++.",
                  iconSrc: "/icons/csharp.png",
                  background: "#745A0F",
                },
              ]}
            />
          </div>
        </div>
        <div
          className={isTree3Active.value ? "tree tree-3-active" : "tree tree-3"}
        >
          <div className="talent-grid">
            <h2
              tabIndex={0}
              className="talent-header"
              onKeyPress$={(e) => {
                if (e.key === "Enter" || e.key === " ")
                  isTree3Active.value = !isTree3Active.value;
              }}
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
                {
                  name: "CAD",
                  tooltip:
                    "Computer-Aided Design is used to create simulations of objects, parts or systems. It has been a useful skill of mine here and there throughout my studies and internships.",
                  iconSrc: "/icons/solidworks.png",
                  background: "#3B411F",
                },
                { name: "space" },
                {
                  name: "Linux",
                  tooltip:
                    "This operating system used to be scary but by working with Linux, it has quickly become my favourite OS for its capabilities and non-constraining freedom of use. I pretty much only have Windows for games nowadays.",
                  iconSrc: "/icons/linux.png",
                  background: "#576320",
                },
                { name: "link" },
                {
                  name: "Git",
                  tooltip:
                    "Essential tool for keeping track of your code. This allows good control of code evolutions as well as allowing multiple people to work together on the same software.",
                  iconSrc: "/icons/github.png",
                  background: "#5F700F",
                },
                { name: "link" },
                {
                  name: "RPi",
                  tooltip:
                    "Raspberry Pi is a small Linux computer designed to be an easy way of creating custom embedded systems. I have used these a lot and are always my favourite starting point for any personal projects.",
                  iconSrc: "/icons/raspberry-pi.png",
                  background: "#809907",
                },
              ]}
            />
            <TalentColumn
              isActive={isTree3Active.value}
              tooltipStore={tooltipStore}
              items={[
                {
                  name: "Electronics",
                  tooltip:
                    "Thanks to my studies I am comfortable dealing with designing, assembling and handling electronic components. Mostly useful for personal projects at the moment.",
                  iconSrc: "/icons/electronics.png",
                  background: "#15232B",
                },
                { name: "link" },
                {
                  name: "Arduino",
                  tooltip:
                    "This microcontroller was my gate-opening to the world of embedded systems as a hobby. Thanks to its accessibility, the Arduinos allow for a very easy way of getting any small project going.",
                  iconSrc: "/icons/arduino.png",
                  background: "#173241",
                },
                { name: "link" },
                {
                  name: "Radio",
                  tooltip:
                    "With the Arduino and the RPi came the desire to learn how to communicate between two separate systems. I first built a custom FM Radio emitter and then used XBee chips for medium-range interaction in my projects.",
                  iconSrc: "/icons/radio.png",
                  background: "#0D354A",
                },
                { name: "space" },
                {
                  name: "Network",
                  tooltip:
                    "All throughout my studies and work it has been very useful to have an understanding of how networks function. Local or worldwide, this knowledge is always handy.",
                  iconSrc: "/icons/network.png",
                  background: "#0A4565",
                },
              ]}
            />
          </div>
        </div>
      </div>

      <h4
        className={
          "tooltip" +
          (tooltipStore.title != "" && treeIsActive ? " active" : "")
        }
        style={treeIsActive ? {} : { opacity: "0" }}
      >
        <span
          className={
            "tooltip-text" + (tooltipStore.text != "" ? " active" : "")
          }
        >
          <u>
            <b>{tooltipStore.title != "" ? tooltipStore.title + ":" : ""}</b>
          </u>{" "}
          {tooltipStore.text}
        </span>
      </h4>
    </>
  );
});

export const head: DocumentHead = () => {
  return {
    title: "Frazic - Skills",
  };
};
