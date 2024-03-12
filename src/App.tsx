import React from "react";
import logo from "./logo.svg";
import pepper from "./img/pepper.png";
import doughnut from "./img/doughnut.jpg";

import "./output.css";
import { Button } from "./components/button";
import NavBar from "./components/navbar";
import CardDemo from "./components/productCard";
import Test from "./components/test";
import Hero from "./components/hero";

function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <div className="m-h-full -z-10 min-w-full bg-[url('./img/doughnut.jpg')] pt-10"></div>

      {/* <p className="z-10">hello</p> */}
    </div>
  );
}

export default App;
