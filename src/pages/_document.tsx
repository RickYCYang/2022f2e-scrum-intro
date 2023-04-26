import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <link rel='shortcut icon' href='/role/role_po.png' />
        <link
          href='https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100;300&display=swap'
          rel='stylesheet'
        />
      </Head>
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
