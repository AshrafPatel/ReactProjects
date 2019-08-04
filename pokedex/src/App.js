/* eslint-disable no-loop-func */
import React, {Component } from 'react';
import Card from "./CardComponent/Card"
import './App.css';
import Search from "./SearchComponent/Search"

//Redux imports
import {connect} from "react-redux"
import { getSearchRequest } from './actions';

//https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png
//https://pokeapi.co/api/v2/pokemon/1

const mapStateToProps = (state) =>  {
  return {
    searchBox: state.setSearchField.searchBox
  }
}

const mapDispatchToProps = (dispatch) =>  {
  return {
    onSearchHandler: (event) => dispatch(getSearchRequest(event.target.value))
  }
}

class App extends Component{
  constructor() {
    super();
    this.state = {
      pokemon: [],
      isLoaded: false
    }
  }

  componentDidMount() {
    let arr = []
    let loaded = false
    for (let i = 1; i < 808; i++) {
      fetch("https://pokeapi.co/api/v2/pokemon/" + i)//+ char + ".png")
      .then(result => result.json())
      .then(data => {
        let char = i;
        if (i < 10) {
          char = "00" + i;
        } else if (i > 9 && i < 100) {
          char = "0" + i;
        }
        let obj = {
          name: data.name,
          image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/" + char + ".png",
          exp: data.base_experience,
          types: data.types
        }
        arr.push(obj)
        if (i === 807) { 
          loaded = true
        }
        this.setState({
          pokemon: [...arr],
          isLoaded: loaded
        });
      })
    }
  }

  render() {
    const {onSearchHandler, searchBox} = this.props
    if (!this.state.isLoaded) {
      return (<h2>Is loading</h2>)
    } else {
        const filteredPokemon = this.state.pokemon.filter(poke => {
          return poke.name.toLowerCase().includes(searchBox.toLowerCase())
        })
        let show = filteredPokemon.map(obj => {
          let color = [];
          let types = obj.types.map((typ, index) => {
            if (typ.type.name === "poison") {color.push("#A040A0");}
            else if (typ.type.name === "fire") {color.push("#F08030");}
            else if (typ.type.name === "flying") {color.push("#A890F0");}
            else if (typ.type.name === "normal") {color.push("#A8A878");}
            else if (typ.type.name === "ground") {color.push("#E0C068");}
            else if (typ.type.name === "grass") {color.push("#78C850");}
            else if (typ.type.name === "water") {color.push("#6890F0");}
            else if (typ.type.name === "psychic") {color.push("#F85888");}
            else if (typ.type.name === "fighting") {color.push("#C03028");}
            else if (typ.type.name === "bug") {color.push("#A8B820");}
            else if (typ.type.name === "electric") {color.push("#F8D030");}
            else if (typ.type.name === "rock") {color.push("#B8A038");}
            else if (typ.type.name === "steel") {color.push("#B8B8D0");}
            else if (typ.type.name === "ice") {color.push("#98D8D8");}
            else if (typ.type.name === "ghost") {color.push("#705898");}
            else if (typ.type.name === "dark") {color.push("#484038");}
            else if (typ.type.name === "dragon") {color.push("#7038F8");}
            else if (typ.type.name === "fairy") {color.push("#FF65D5");}

            if (index + 1 === 1) {
              return (<p className="card-types">Type: {typ.type.name}</p>)
            } else {
              return (<p className="card-types">Type{index+1}: {typ.type.name}</p>)
            }
          })

          return (
            <Card name={obj.name} image={obj.image} exp={obj.exp} types={types} color={color}/>
          )
      })
      
      return (
          <div className="App">
            <h1>Pokedex</h1>
            <Search searchPokemon={onSearchHandler}/>
            <div className="card-row">
              {show}
            </div>
          </div>
        )
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
