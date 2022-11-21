import { component$, Slot } from "@builder.io/qwik";
import Header from "../components/header/header";
import NavbarLeft from "../components/navbarLeft/navbarLeft";

export default component$(() => {
  return (
    <>
      <main>
        <Header />
        <NavbarLeft />
        <section>
          <Slot />
        </section>
      </main>
      <footer>
        Made with ❤️ by Joshua Bruylant using{" "}
        <a href="https://qwik.builder.io/" target="_blank">
          Qwik
        </a>
      </footer>
    </>
  );
});
