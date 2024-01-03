/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [user, setUser] = useState({});

  useEffect(() => {
    if (typeof window !== "undefined") {
      let item = localStorage.getItem("user");
      if (item) {
        setUser(() => JSON.parse(item));
      }
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
