import React, { Component } from "react";
import "./App.css";
import Hangman from "./Hangman";
import GameOver from "./GameOver";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameState: "playing"
    }
    this.updateGameState = this.updateGameState.bind(this);
  }

  updateGameState(newGameState) {
    this.setState({
      gameState: newGameState
    })
  }

  render() {
    const game = (this.state.gameState === "playing") ?
      <Hangman gameState={this.updateGameState}/> :
      <GameOver 
        message={this.state.gameState}
        gameState={this.updateGameState}/>
    return (
      <div className="App">
        {game}
      </div>
    );
  }
}

export default App;
