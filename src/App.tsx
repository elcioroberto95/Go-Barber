import React from "react";
import { AuthContextProvider } from './context/AuthContext';
import SignIn from "./pages/SignIn";
import GlobalStyle from "./styles/Global";

const App:React.FC = () => (
  <>
  <AuthContextProvider>
  <SignIn />
  </AuthContextProvider>
    <GlobalStyle />
  </>
);
export default App;
