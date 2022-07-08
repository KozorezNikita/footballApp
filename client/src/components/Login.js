import axios from "axios";
import { useState, useContext, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { FootballContext } from "../context/FootballContext";
import MyInput from "./UI/input/MyInput";
import { useHistory } from "react-router-dom";

function Login() {
  const [register, setRegister] = useState({
    nickname: "",
    login: "",
    password: "",
    confirmedPassword: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [toggle, setToggle] = useState(false);
  const { token, setToken } = useContext(FootballContext);
  const history = useHistory();

  async function login(e) {
    e.preventDefault();
    await axios
      .post(`${process.env.REACT_APP_BASE_URL}/auth/login`, register)
      .then((response) => {
        if (response.status === 200) {
          setToken(response.data.token);
          localStorage.setItem("token", response.data.token);
          history.push("/footballApp/squad");
        }
      })
      .catch((error) => {
        if (error.response) {
          setErrorMessage(error.response.data.message);
        }
      });
  }

  async function registration(e) {
    e.preventDefault();
    await axios
      .post(`${process.env.REACT_APP_BASE_URL}/auth/registration`, register)
      .then((response) => {
        if (response.data !== null) {
          setErrorMessage("");
          setSuccessMessage("User was created!");
          setTimeout(() => {
            setToggle(true);
            setSuccessMessage("");
          }, 2000);
        }
      })
      .catch((error) => {
        if (error.response) {
          setErrorMessage(error.response.data.message);
        }
      });
  }

  return (
    <>
      {toggle ? (
        <form className="login-form" onSubmit={login}>
          <h1>Log into your account</h1>
          {errorMessage ? (
            <p className="error" onClick={() => setErrorMessage("")}>
              {errorMessage}
            </p>
          ) : null}
          <label>Login</label>
          <MyInput
            value={register.login}
            placeholder="example@gmail.com"
            onChange={(e) =>
              setRegister({ ...register, login: e.target.value })
            }
          />
          <label>Password</label>
          <MyInput
            type="password"
            value={register.password}
            placeholder="password"
            onChange={(e) =>
              setRegister({ ...register, password: e.target.value })
            }
          />
          <button>Login</button>
          <p onClick={() => setToggle(false)}>Have not got an account?</p>
        </form>
      ) : (
        <form className="login-form" onSubmit={registration}>
          <h1>Pass a registration</h1>
          {errorMessage ? (
            <p className="error" onClick={() => setErrorMessage("")}>
              {errorMessage}
            </p>
          ) : null}
          {successMessage !== "" ? (
            <p className="success">{successMessage}</p>
          ) : null}
          <label>Nickname</label>
          <MyInput
            value={register.nickname}
            placeholder="Les Gones"
            onChange={(e) =>
              setRegister({ ...register, nickname: e.target.value })
            }
          />
          <label>Login</label>
          <MyInput
            value={register.login}
            placeholder="example@gmail.com"
            onChange={(e) =>
              setRegister({ ...register, login: e.target.value })
            }
          />
          <label>Password</label>
          <MyInput
            type="password"
            value={register.password}
            placeholder="password"
            onChange={(e) =>
              setRegister({ ...register, password: e.target.value })
            }
          />
          <label>Confirm password</label>
          <MyInput
            type="password"
            value={register.confirmedPassword}
            placeholder="confirm password"
            onChange={(e) =>
              setRegister({ ...register, confirmedPassword: e.target.value })
            }
          />
          <button
            disabled={
              Object.values(register).some((val) => val === "") ||
              register.password !== register.confirmedPassword
            }
          >
            Create account
          </button>
          <p onClick={() => setToggle(true)}>Already have an account?</p>
        </form>
      )}
    </>
  );
}

export default Login;

/*
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



































{ toggle } ? 
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
    <p onClick={() => setToggle(!toggle)}>Have no account?</p>
    </form>  
    
    : 
    
    <form className="login-form" onSubmit={handleLogin}>
    <label>Nickname</label>  
    <MyInput
      value={info.nickname}
      placeholder="nickname..."
      onChange={(e) => setInfo({ ...info, nickname: e.target.value })}
    />
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
    <button>Create account</button>
    </form> 
*/
