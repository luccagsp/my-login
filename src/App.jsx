import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom"; // Importa BrowserRouter y Route
import Login from "./Login";

function App() {
  return (
    <div>
      <h1>funca</h1>
      <Routes>
       <Route path="/" element={<Login></Login>}/>
      </Routes>
    </div>
  );
}

export default App;
