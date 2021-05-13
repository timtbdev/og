import "tailwindcss/tailwind.css";
import { AppProps } from "next/app";
import { FC } from "react";

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
