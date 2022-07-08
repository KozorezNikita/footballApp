import React from "react";
import { BrowserRouter, HashRouter } from "react-router-dom";
import FootballRouter from "./components/FootballRouter";
import Navbar from "./components/UI/Navbar/Navbar";
import "./styles/App.css";
import FootballProvider from "./context/FootballContext";

function App() {
  return (
    <FootballProvider>
      <BrowserRouter>
        <Navbar />
        <FootballRouter />
      </BrowserRouter>
    </FootballProvider>
  );
}

export default App;

/*
<HashRouter basename="/">
</HashRouter>
*/
