import React from "react";
import { Provider as ReduxProvider } from "react-redux";
import { Normalize } from "styled-normalize";

import Routes from "./routes";
import store from "./store";
import GlobalStyle from "./styles/global";

const App: React.FC = () => {
  return (
    <>
      <Normalize/>

      <GlobalStyle/>

      <ReduxProvider store={store}>
        <Routes />
      </ReduxProvider>
    </>
  );
};

export default App;