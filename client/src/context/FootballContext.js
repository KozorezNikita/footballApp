import { useState, createContext, useEffect } from "react";

export const FootballContext = createContext(null);

const FootballProvider = (props) => {
  const [auth, setAuth] = useState(false);
  const [toggle, setToggle] = useState(true);
  const [teamId, setTeamId] = useState(1);
  const [token, setToken] = useState("");

  useEffect(() => {
    const tk = localStorage.getItem("token")
    setToken(tk)
  }, []);

  return (
    <FootballContext.Provider
      value={{ auth, setAuth, toggle, setToggle, teamId, setTeamId, token, setToken }}
    >
      {props.children}
    </FootballContext.Provider>
  );
};

export default FootballProvider;
