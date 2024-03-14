/* eslint-disable indent */
import Head from "next/head"

export function Seo() {
  return (
    <Head>
      <meta
        content="Bienvenido a mi portafolio de programación, donde podrás encontrar proyectos desarrollados en React, Vite.js, NextJS, Tailwind CSS y otras tecnologías. ¡Mira mis trabajos y contáctame para colaborar en tu próximo proyecto!"
        name="description"
      />
      <meta
        content="portafolio, programación, React, NextJS, Vite.js, Tailwind CSS, desarrollo frontend, colaboración, proyectos"
        name="keywords"
      />
      <link href="/logo-iv-3.svg" rel="icon" type="image/svg+xml" />
      <meta content="Hulkobain | Raul Romero" name="author" />
      <meta content="width=device-width, initial-scale=1.0" name="viewport" />

      <meta
        content="Hulkobain - FullStack Developer | Portafolio de Programación"
        property="og:title"
      />
      <meta content="https://raul-romero.vercel.app/" property="og:url" />
      <meta content="website" property="og:type" />

      <title>Raul Romero Portfolio | Full-Stack</title>
    </Head>
  )
}
