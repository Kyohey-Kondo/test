import { Provider } from "react-redux";
import { useStore } from "~/store";
import GeneralHeadSettings from "~/components/head/GeneralHeadSettings";
import Header from "~/components/Header";
import "~/styles/globals.scss";
import { AppProps } from "next/app";

// 適切な設定がわからず、anyを使ってしまっております
const App: any = ({ Component, pageProps }: AppProps) => {
  const store = useStore(pageProps.initialReduxState);

  return (
    <Provider store={store}>
      <GeneralHeadSettings />
      <Header />
      <Component {...pageProps} />
    </Provider>
  );
};

export default App;
