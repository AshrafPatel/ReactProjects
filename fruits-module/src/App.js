import React from 'react';
import './App.css';
import {choice, remove} from "./helpers"

function App() {
  let fruit = choice()
  let decision;
  return (
    <div className="App">
      <header className="App-header">
        <p>I would like one {fruit} please!</p>
        <p>Here you go: {fruit}</p>
        {remove(fruit)}
        <p>Delicious may I have another?</p>
        {decision = remove(fruit)}
        {decision === undefined ? <p>Sorry we are all out</p> : <p>Here you go: {fruit}</p>}

      </header>
    </div>
  );
}

export default App;
