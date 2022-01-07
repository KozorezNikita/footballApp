import { useState, useContext } from "react";
import { FootballContext } from "../context/FootballContext";
import MyInput from "./UI/input/MyInput";

function Login() {
  const [info, setInfo] = useState({
    login: "example@gmail.com",
    password: "example",
  });
  const { setAuth } = useContext(FootballContext);

  const handleLogin = (e) => {
    e.preventDefault();
    setAuth(true);
    localStorage.setItem("auth", "true");
  };

  return (
    <form className="login-form" onSubmit={handleLogin}>
      <label>Login</label>
      <MyInput
        value={info.login}
        placeholder="login..."
        onChange={(e) => setInfo({ ...info, login: e.target.value })}
      />
      <label>Password</label>
      <MyInput
        type="password"
        value={info.password}
        placeholder="password..."
        onChange={(e) => setInfo({ ...info, password: e.target.value })}
      />
      <button>Login</button>
    </form>
  );
}

export default Login;
