import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="ja">
      <Head>
        {/* Google Tag Manager */}

        {/* google Font */}
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&family=Roboto:wght@400;700&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Allura&display=swap" rel="stylesheet"></link>
      

        {/* faviconたち */}
      </Head>
      <body className="font-NotoSans">
        {/* Google Tag Manager */}

        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
