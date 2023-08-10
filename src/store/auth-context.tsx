import React, { useState } from "react";

//in interface or type definition dont use curly braces for function
export interface IAuthCtx {
  token: string | null;
  userId: string | null;
  userName: string | null;
  userRole: string[] | null;
  isLoggedIn: boolean;
  //in interface only signature of function declared
  login: (
    token: string,
    userId: string,
    userName: string,
    userRole: string[]
  ) => void;
  logout: () => void;
}
// after react 18 , component automatically dont provide typing of children props
// and it is not merged with component props
interface AuthContextProviderProps {
  children?: React.ReactNode;
}
//initialization only for better autocompletion, can be used(provided) without decalration
const AuthContext = React.createContext<IAuthCtx>({
  token: "",
  userId: null,
  userName: null,
  userRole: null,
  isLoggedIn: false,
  //defining only empty fuction as starter
  login: (
    token: string,
    userId: string,
    userName: string,
    userRole: string[]
  ) => {},
  logout: () => {},
});

export const AuthContextProvider: React.FC<AuthContextProviderProps> = (
  props
) => {
  const [token, setToken] = useState<string | null>(null);
  const [userId, setUserId] = useState<string | null>(null);
  const [userName, setUserName] = useState<string | null>(null);
  const [userRole, setUserRole] = useState<string[] | null>(null);

  const userIsLoggedIn = !!token;

  const loginHandler = (
    token: string,
    userId: string,
    userName: string,
    userRole: string[]
  ) => {
    console.log(token);
    setToken(token);
    setUserId(userId);
    setUserName(userName);
    setUserRole(userRole);
  };

  const logoutHandler = () => {
    setToken(null);
    setUserId(null);
    setUserName(null);
    setUserRole(null);
  };

  const contextValue: IAuthCtx = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    userId: userId,
    userName: userName,
    userRole: userRole,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
