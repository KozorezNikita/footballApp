import React from "react";
import { HashRouter } from "react-router-dom";
import FootballRouter from "./components/FootballRouter";
import Navbar from "./components/UI/Navbar/Navbar";
import "./styles/App.css";
import FootballProvider from "./context/FootballContext";




function App() {
  return (
    <FootballProvider>
    <HashRouter basename="/">
      <Navbar />
      <FootballRouter />
    </HashRouter>
    </ FootballProvider>
  );
}

export default App;
