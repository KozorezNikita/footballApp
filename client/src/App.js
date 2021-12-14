import React from "react";
import { HashRouter } from "react-router-dom";
import FootballRouter from "./components/FootballRouter";
import Navbar from "./components/UI/Navbar/Navbar";
import "./styles/App.css";

function App() {
  return (
    <HashRouter basename="/">
      <Navbar />
      <FootballRouter />
    </HashRouter>
  );
}

export default App;
