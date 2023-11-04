import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta name="og:url" content="https://viktoratanasov.com" />
          <meta name="og:type" content="website" />
          <meta name="og:title" content="Viktor Atanasov" />
          <meta name="og:image" content="/img/og.png" />
          <meta name="og:description" content="A space to share thoughts and learnings." />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
