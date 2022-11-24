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
        <br />
        <div className="contact-links">
          <a href="https://github.com/Frazic" target="_blank"><img src="icons/github.png" alt="github" /></a>
          <a href="https://www.linkedin.com/in/joshua-bruylant-8a1216204/" target="_blank"><img src="icons/linkedin.png" alt="linkedin" /></a>
          <a href="mailto:frazic.dev@gmail.com" target="_blank"><img src="icons/mail.png" alt="mail" /></a>
          <a href="https://open.spotify.com/user/frazic51?si=927b1b6275004fc5" target="_blank"><img src="icons/spotify.png" alt="spotify" /></a>
          <a href="https://twitter.com/Sir_Frazic" target="_blank"><img src="icons/twitter.png" alt="twitter" /></a>
        </div>
      </footer>
    </>
  );
});
