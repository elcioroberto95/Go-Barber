import React from "react";
import { ToastProvider } from "../components/TostContainer/ToastContext";
import { AuthContextProvider } from "./AuthContext";

const AppProvider: React.FC = ({ children }) => {
  return (
    <>
      <AuthContextProvider>
        <ToastProvider>{children}</ToastProvider>
      </AuthContextProvider>
    </>
  );
};
export default AppProvider;
