import React from 'react';
import './App.css';
import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import ImageURLForm from "./components//ImageURLForm/ImageURLForm";
import Rank from "./components/Rank/Rank";
import Particles from 'react-particles-js';
import Clarifai from "clarifai";
import FaceRecognition from "./components/FaceRecognition/FaceRecognition"

const particleParams = {
  particles: {
    number: {
      value: 75,
      density: {
        enable: true,
        value_area: 1000
      }
    },
    color: {
      value: "#fff"
    },
    opacity: {
      value: 1,
      random: false,
      anim: {
        enable: false,
        speed: 5,
        opacity_min: 1,
        sync: false
      }
    },
  }
}


const particleStyle = {
  position: "fixed",
  top: 0,
  bottom: 0,
  right: 0,
  left: 0,
  zIndex: "-1" 
}

const app = new Clarifai.App({
  apiKey: "bf7c69b8b3f14e19b07d70cfe2bddf82"
});

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userQuery: "",
      input: ""
    }
  }

  onInputHandler = (event) => {
    this.setState({input: event.target.value})
  }

  onButtonHandler = () => {
    this.setState({userQuery: this.state.input})
    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
      .then(function (response) {
        console.log(response);
    },
    function (err) { // there was an error}
        
    });
  }

  render() {
    return (
      <div className="App">
        <Particles params={particleParams} style={particleStyle}/>
        <Navigation/>
        <Logo/>
        <Rank/>
        <ImageURLForm 
          onButtonHandler={this.onButtonHandler}
          onInputHandler={this.onInputHandler}/>
        <FaceRecognition imageURL={this.state.userQuery}/>
      </div>
    )
  }
}

export default App;
