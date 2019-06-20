import React from 'react';
import './App.css';
import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import ImageURLForm from "./components//ImageURLForm/ImageURLForm";
import Rank from "./components/Rank/Rank";
import Particles from 'react-particles-js';
import Clarifai from "clarifai";
import FaceRecognition from "./components/FaceRecognition/FaceRecognition"
import SignIn from "./components/SignIn/SignIn"
import Register from "./components/Register/Register"

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
      input: "",
      boundingBox: {
        
      },
      route: "signin",
      isSignedIn: false
    }
  }

  onRouteChange = (newRoute) => {
    newRoute === "home" ? this.setState({isSignedIn: true}) : this.setState({isSignedIn: false})
    this.setState({route: newRoute})
  }

  calculateFaces = (data) => {
    const calarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById("inputImage");  //used to calculate width and height
    const height = Number(image.height)
    const width = Number(image.width)
    return {
      leftCol: calarifaiFace.left_col * width,
      rightCol: width - (calarifaiFace.right_col * width),
      topRow: calarifaiFace.top_row * height,
      bottomRow: height-(calarifaiFace.bottom_row*height)
    }
  }

  displayFaces = (boundingBox) => {
    this.setState({boundingBox: boundingBox})
  }

  onInputHandler = (event) => {
    this.setState({input: event.target.value})
  }

  onButtonHandler = () => {
    this.setState({userQuery: this.state.input})
    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
      .then(response => this.displayFaces(this.calculateFaces(response)))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="App">
        <Particles params={particleParams} style={particleStyle}/>
        <Navigation onRouteChange={this.onRouteChange} isSignedIn={this.state.isSignedIn}/>
        {this.state.route === "home"
          ? <div>
              <Logo/>
              <Rank/>
              <ImageURLForm 
                onButtonHandler={this.onButtonHandler}
                onInputHandler={this.onInputHandler}/>
              <FaceRecognition boundingBox={this.state.boundingBox} imageURL={this.state.userQuery}/>
            </div>
          : (this.state.route === "signin" 
            ? <SignIn onRouteChange={this.onRouteChange}/>
            : <Register onRouteChange={this.onRouteChange}/>)
        } 
        </div>
    )
  }
}

export default App;
