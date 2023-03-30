import axios from 'axios'
import React from 'react'
import { useContext } from 'react'
import PokemonContext from '../state/PokemonContext'

const PokedexCard = ({pokemon}) => {
  const {dispatch} = useContext(PokemonContext)

  const handleClick = () => {
    axios.get(pokemon.url)
    .then((res) => {
      dispatch({type: "ADD_TO_TEAM", payload: res.data})
    })
  }

  return (
    <div className='card'> 
      <h3>{pokemon.name}</h3>
      <button onClick={handleClick}>Add To Team</button>
    </div>
  )
}

export default PokedexCard