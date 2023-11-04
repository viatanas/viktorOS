import "../styles/globals.css";

import { Toaster } from "react-hot-toast";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Toaster position="bottom-right" />
      <Component {...pageProps} />
    </>
  );
};

export default App;
