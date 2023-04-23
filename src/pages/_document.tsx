import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>{/* <link rel="icon" href="/favicon.ico" /> */}</Head>
      <body>
        <Main />
        <NextScript />
        {/**
         * Empty script tag is for chrome bug fix,
         * see https://stackoverflow.com/a/42969608/943337
         */}
        <script> </script>
      </body>
    </Html>
  );
}
