import { useState } from "react";
import { accounts as data } from "./accounts.js";

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  function loginRequest() {
    
  } 
  return (
    <>
      <div className="container">
        <div className="titulo">Bienvenido</div>
        <form className="loginForm" onSubmit={c}>
          <input
            type="text"
            placeholder="Usuario"
            required
            onChange={(e) => setUserName(e.target.value)}
          />
          <input
            type="password"
            placeholder="Contraseña"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="sumbit">Login</button>
        </form>
      </div>
    </>
  );
}

export default Login;
