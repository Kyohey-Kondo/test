import Head from "next/head";

const HeadTitle: React.FC = (props) => {
  return (
    <Head>
      <title>{props.children} - materix | あなた専用の問題集</title>
    </Head>
  );
};

export default HeadTitle;
