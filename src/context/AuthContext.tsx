import React, { useCallback } from 'react';
interface AuthContextData {
  name:string;
  signIn():void;
}
const AuthContext = React.createContext<AuthContextData>({} as AuthContextData);
const AuthContextProvider:React.FC = ({children}) => {

  const signIn = useCallback(() => {
    console.log('oi')
  },[])
  return (
      <AuthContext.Provider value={{name:'Elcio',signIn}}>
        {children}
      </AuthContext.Provider>
    )
}

export {
  AuthContext,
  AuthContextProvider
};
