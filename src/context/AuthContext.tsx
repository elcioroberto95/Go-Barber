import React, { useCallback } from 'react';
import api from '../services/api';
interface SignInCredentials {
  email:string;
  password:string;

}


interface AuthContextData {
  name:string;
  signIn(credentials:SignInCredentials):Promise<void>;
}
const AuthContext = React.createContext<AuthContextData>({} as AuthContextData);
const AuthContextProvider:React.FC = ({children}) => {

  const signIn = useCallback(async({email,password}) => {
    const response = await api.post('sessions',{
      email,
      password,
    });
    console.log(response.data);

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
