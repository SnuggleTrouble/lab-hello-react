import React from "react";
import icon1 from "../src/images/icon1.png";
import icon2 from "../src/images/icon2.png";
import icon3 from "../src/images/icon3.png";
import icon4 from "../src/images/icon4.png";
import ironLogo from "../src/images/ironhack-logo-xs.png";
import ironMenu from "../src/images/menu-top-xs.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="top">
          <img className="ironHack" src={ironLogo} alt="Ironhack logo" />
          <img className="ironMenu" src={ironMenu} alt="Ironhack menu" />
        </div>
        <h1>
          Say hello to
          <br /> ReactJS
        </h1>
        <p>
          You will learn how to use
          <br /> the most popular frontend library,
          <br /> and become a super Ninja developer.
        </p>
        <button>Awesome</button>
      </header>
      <div className="icons">
        <div className="icon">
          <img src={icon1} alt="Easy to create interactive UIs icon"/>
          <h2>Declarative</h2>
          <p>React makes it painless to create interactive UIs.</p>
        </div>
        <div className="icon">
          <img src={icon2} alt="Build encapsulated components icon"/>
          <h2>Components</h2>
          <p>Build encapsulated components that manage their state.</p>
        </div>
        <div className="icon">
          <img src={icon3} alt="Immutable values passed to component icon"/>
          <h2>Single-Way</h2>
          <p>A set of immutable values are passed to the component's.</p>
        </div>
        <div className="icon">
          <img src={icon4} alt="JSX runs on modern browsers icon"/>
          <h2>JSX</h2>
          <p>Statically-typed, designed to run on modern browsers.</p>
        </div>
      </div>
    </div>
  );
}
export default App;
