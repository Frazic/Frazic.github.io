import { component$, useClientEffect$, useSignal, useStyles$ } from "@builder.io/qwik";
import styles from "./projectPopUp.css?inline";

export interface ProjectPopUpProps {
    store: ProjectPopUpContentStore
}

export interface ProjectPopUpContentStore {
    isActive: boolean,
    title: string,
    date: string,
    location: string
    description: string,
    imageSrc: string,
}

export const ProjectPopUp = component$<ProjectPopUpProps>((props) => {
    useStyles$(styles);

    const ref = useSignal<HTMLDivElement>();

    useClientEffect$(() => {
        const listener = (event: any) => {
            if (!ref.value || ref.value.contains(event.target)) {
                return;
            }
            props.store.isActive = false;
        }

        if (ref?.value) {
            document.addEventListener("mousedown", listener);
            document.addEventListener("touchstart", listener);
        }

        return () => {
            document.removeEventListener("mousedown", listener);
            document.removeEventListener("touchstart", listener);
        }
    });

    return (
        <div className={"popup-container" + (props.store.isActive ? " active" : "")}>
            <div ref={ref} tabIndex={0} className="popup">
                <button tabIndex={0} className="closeBtn" onClick$={() => props.store.isActive = false}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm3.707,12.293a1,1,0,1,1-1.414,1.414L12,13.414,9.707,15.707a1,1,0,0,1-1.414-1.414L10.586,12,8.293,9.707A1,1,0,0,1,9.707,8.293L12,10.586l2.293-2.293a1,1,0,0,1,1.414,1.414L13.414,12Z" /></svg>
                </button>
                <h2 className="title">{props.store.title}</h2>
                <div className="date">{props.store.date}</div>
                <div className="location">{props.store.location}</div>
                <div className="description">{props.store.description}</div>
                <img src={props.store.imageSrc} alt={props.store.imageSrc.split("/").at(-1)?.split(".").at(0)} className="popup-image" />
            </div>
        </div>
    );
});