import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <div className="container">
      <div className="titulo">
        Bienvenido
      </div>
      <form className="loginForm">
        <input type="text" placeholder="Usuario" required/>
        <input type="password" placeholder="Contraseña" required/>
        <button type="sumbit">Login</button>
      </form>
    </div>
    </>
  );
}

export default App;
