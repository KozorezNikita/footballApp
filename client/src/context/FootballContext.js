import { useState, createContext, useEffect } from "react";

export const FootballContext = createContext(null);

const FootballProvider = (props) => {
  const [auth, setAuth] = useState(false);
  const [toggle, setToggle] = useState(true);
  const [teamId, setTeamId] = useState(1);

    useEffect(() => {
        if (localStorage.getItem("auth")) {
            setAuth(true)
        }
    }, [])

  return (
    <FootballContext.Provider value={{ auth, setAuth, toggle, setToggle, teamId, setTeamId }}>
      {props.children}
    </FootballContext.Provider>
  );
};

export default FootballProvider;