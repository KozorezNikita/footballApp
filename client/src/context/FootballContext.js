import { useState, createContext, useEffect } from "react";

export const FootballContext = createContext(null);

const FootballProvider = (props) => {
  const [auth, setAuth] = useState(false);

    useEffect(() => {
        if (localStorage.getItem("auth")) {
            setAuth(true)
        }
    }, [])

  return (
    <FootballContext.Provider value={{ auth, setAuth }}>
      {props.children}
    </FootballContext.Provider>
  );
};

export default FootballProvider;