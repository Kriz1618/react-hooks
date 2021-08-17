import React, { useState } from "react";

export const AuthContext = React.createContext({
  isAuth: false,
  logIn: () => {},
  logOut: () => {},
});

const AuthContextProvider = (props) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const logInHandler = () => {
    setIsAuthenticated(true);
  };

  const logOutHandler = () => {
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuth: isAuthenticated,
        logIn: logInHandler,
        logOut: logOutHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
