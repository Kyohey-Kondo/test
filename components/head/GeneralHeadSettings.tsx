import Head from "next/head";

const GeneralHeadSettings: React.FC = () => {
  return (
    <Head>
      <meta charSet="utf-8" />
      <link rel="icon" href="/logo.svg" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#0C3BB4" />
      <meta
        name="description"
        content="materixはあなた専用の問題集です。多くの問題から好きなものを選び、身につくまで繰り返せます。"
      />
      <meta property="og:url" content="https://materix.jp" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="materix | あなた専用の問題集" />
      <meta
        property="og:description"
        content="materixはあなた専用の問題集です。多くの問題から好きなものを選び、身につくまで繰り返せます。"
      />
      <meta property="og:site_name" content="materix | あなた専用の問題集" />
      <meta property="og:image" content="/ogimage.png" />
      <link rel="apple-touch-icon" href="/logo.svg" />
      <title>materix | あなた専用の問題集</title>
    </Head>
  );
};

export default GeneralHeadSettings;
