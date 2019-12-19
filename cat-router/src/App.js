import React, { Component } from 'react';
import './App.css';
import leo from "./img/orange_tabby.jpg"
import oreo from "./img/tuxedo_cat.jpg"
import max from "./img/grey_tabby.jpg"
import { Route, Switch, Redirect } from 'react-router-dom';
import CatList from './CatList';
import CatDetails from './CatDetails';
import Navbar from "./Navbar"

class App extends Component {
  static defaultProps = {
    cats: [
      {
        name: "Leo",
        age: 5,
        src: leo,
        facts: [
          "Leo loves eating chicken.",
          "Leo doesn't like indoors.",
          "Leo wants to go outside to play"
        ]
      },
      {
        name: "Oreo",
        age: 1,
        src: oreo,
        facts: [
          "Oreo has soooo much energy!",
          "Oreo is highly intelligent.",
          "Oreo loves listening to everyones conversations"
        ]
      },
      {
        name: "Max",
        age: 4,
        src: max,
        facts: [
          "Max just hangs around the windows",
          "Max loves drinking milk",
          "Max loves going on adventures."
        ]
      }
    ]
  }
  
  render() {
    const getCat = props => {
      let name = props.match.params.name
      let currentcat = this.props.cats.find(
        cat => cat.name.toLowerCase() === name.toLowerCase()
      )
      return <CatDetails {...props} cat={currentcat}/>
    }
    return (
      <div className="App">
        <Navbar cats={this.props.cats}/>
        <Switch>
          <Route exact path="/cats" render={()=><CatList cats={this.props.cats}/>} />
          <Route exact path="/cats/:name" render={getCat}/>
          <Redirect to="/cats"/>
        </Switch>
      </div>
    );
  }
}

export default App;
