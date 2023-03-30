import { useState, useEffect, useContext } from 'react';
import './App.css';
import Header from './components/Header';
import Team from './components/Team';
import Pokedex from './components/Pokedex';
import axios from 'axios';
import PokemonContext from './state/PokemonContext';

function App() {
  const {dispatch} = useContext(PokemonContext)

  const getPokemon = () => {
    axios
      .get('https://pokeapi.co/api/v2/pokemon?limit=1000')
      .then((res) => {
        console.log(res)
        dispatch({type: "SAVE_POKEDEX", payload: res.data.results})
      })
      .catch((err) => {
        console.error(err)
      })
  }

  useEffect(() => {
    getPokemon()
  },[])

  return (
    <div className="App">
      <Header />
      <Team />
      <Pokedex />
    </div>
  );
}

export default App;
