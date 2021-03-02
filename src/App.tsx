import React from "react";
import AppProvider from "./hooks/index";
import SignIn from "./pages/SignIn";
import GlobalStyle from "./styles/Global";

const App: React.FC = () => (
  <>
    <AppProvider>
      <SignIn />
    </AppProvider>
    <GlobalStyle />
  </>
);
export default App;
