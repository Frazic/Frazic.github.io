import { component$ } from "@builder.io/qwik";
import { useDocumentHead, useLocation } from "@builder.io/qwik-city";

/**
 * The RouterHead component is placed inside of the document `<head>` element.
 */
export const RouterHead = component$(() => {
  const head = useDocumentHead();
  const loc = useLocation();

  return (
    <>
      <title>{head.title}</title>

      <link rel="canonical" href={loc.href} />
      <link rel="icon" type="image/png" href="/favicon.ico" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Signika:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
      />

      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="Cache-control" content="no-cache"></meta>
      <meta charSet="UTF-8" />

      {/* <!-- Primary Meta Tags --> */}
      <meta name="title" content="Frazic - Portfolio" />
      <meta name="description" content="Skills, projects and a bit about himself" />
      <meta name="author" content="Frazic" />
      <meta name="robots" content="index, follow" />

      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="frazic.github.io" />
      <meta property="og:title" content="Frazic - Portfolio" />
      <meta property="og:description" content="Skills, projects and a bit about himself" />
      <meta property="og:image" content="https://frazic.github.io/josh-photo.webp" />

      {/* <!-- Twitter --> */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="frazic.github.io" />
      <meta property="twitter:title" content="Frazic - Portfolio" />
      <meta property="twitter:description" content="Skills, projects and a bit about himself" />
      <meta property="twitter:image" content="https://frazic.github.io/josh-photo.webp" />

      {/* FACEBOOK */}
      {/* <meta property="og:title" content="Frazic - Portfolio" />
      <meta property="og:image" content="/josh-photo.webp" />
      <meta property="og:description" content="Skills, projects and a bit about himself" /> */}


      {/* TWITTER */}
      {/* <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@frazicdev" />
      <meta name="twitter:creator" content="@frazicdev" />
      <meta name="twitter:title" content="Frazic - Portfolio" />
      <meta name="twitter:description" content="Skills, projects and a bit about himself" />
      <meta name="twitter:image" content="/josh-photo.webp" /> */}

      {/* <meta property="og:site_name" content="Frazic's Portfolio" /> */}
      {/* <meta name="twitter:site" content="@Frazic" /> */}
      {/* <meta name="twitter:title" content="Frazic" /> */}

      {head.meta.map((m) => (
        <meta {...m} />
      ))}

      {head.links.map((l) => (
        <link {...l} />
      ))}

      {head.styles.map((s) => (
        <style {...s.props} dangerouslySetInnerHTML={s.style} />
      ))}
    </>
  );
});
