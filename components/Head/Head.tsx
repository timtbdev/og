import NextHead from "next/head";

export default function Head() {
  return (
    <>
      <NextHead>
        <meta key="charSet" charSet="UTF-8" />
        <meta
          key="viewport"
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <meta key="httpEquiv" httpEquiv="x-ua-compatible" content="ie=edge" />

        <link rel="stylesheet" href="https://rsms.me/inter/inter.css"></link>
      </NextHead>
    </>
  );
}
