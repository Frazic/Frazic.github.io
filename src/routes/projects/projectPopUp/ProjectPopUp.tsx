import { component$, useSignal } from "@builder.io/qwik";

export interface ProjectPopUpProps {
    count
}

export const ProjectPopUp = component$<ProjectPopUpProps>((props) => {
    const count = useSignal(0);
    return (
        <div onClick$={(ev) => { }}>

        </div>
    );
});