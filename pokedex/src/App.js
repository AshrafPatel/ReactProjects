import React, {Component } from 'react';
import Card from "./CardComponent/Card"
import './App.css';
import Search from "./SearchComponent/Search"

//Redux imports
import {connect} from "react-redux"
import { getSearchRequest, requestPokemon } from './actions';

const mapStateToProps = (state) =>  {
  return {
    searchBox: state.setSearchField.searchBox,
    pokemon: state.getPokemon.pokemon,
    loaded: state.getPokemon.loaded
  }
}

const mapDispatchToProps = (dispatch) =>  {
  return {
    onSearchHandler: (event) => dispatch(getSearchRequest(event.target.value)),
    onRequestPokemon: () => requestPokemon(dispatch)
  }
}

class App extends Component{
  componentDidMount() {
    this.props.onRequestPokemon();
  }

  render() {
    const {onSearchHandler, searchBox, pokemon, loaded} = this.props
    if (!loaded) {
      return (<h2>Is loading</h2>)
    } else {
        const filteredPokemon = pokemon.filter(poke => {
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
