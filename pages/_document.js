import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#111111" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
