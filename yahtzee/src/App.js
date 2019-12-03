import React, { Component } from "react";
import Game from "./Game";
import "./App.css";
import "@fortawesome/fontawesome-free/css/all.css"

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Game />
      </div>
    );
  }
}

export default App;
