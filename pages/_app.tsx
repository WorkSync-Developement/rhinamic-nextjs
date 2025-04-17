import "../styles/globals.css";
import Head from "next/head";
import { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main>
      <Head>
        <title>Rhinamic Landscape Design | San Antonio, TX</title>
        <meta
          name="description"
          content="Transform your outdoor space with Rhinamic, San Antonio's premier landscaping service. Professional landscape design, maintenance, and installation."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </Head>
      <Component {...pageProps} />
    </main>
  );
}
