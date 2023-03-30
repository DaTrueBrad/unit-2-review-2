import axios from 'axios'
import React, {useState, useContext} from 'react'
import PokemonContext from '../state/PokemonContext'
import { useEffect } from 'react'
import PokedexCard from './PokedexCard'

const Pokedex = (props) => {
  const {state} = useContext(PokemonContext)
  
  const pokedexDisplay = state.pokedex.map((poke, index) => <PokedexCard addToTeam={props.addToTeam} pokemon={poke} key={poke.name}/>)
  return (
    <div className='col-container pokedex'>
      {pokedexDisplay}
    </div>
  )
}

export default Pokedex