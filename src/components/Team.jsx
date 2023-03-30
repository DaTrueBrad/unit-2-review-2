import React from 'react'
import { useContext } from 'react'
import PokemonContext from '../state/PokemonContext'
import TeamCard from './TeamCard'

const Team = () => {
  const {state} = useContext(PokemonContext)

  const teamDisplay = state.team.map((pokemon) => <TeamCard pokemon={pokemon} />)
  
  return (
    <div>
      <h2>Here is your team</h2>
      <div className='team-container'>
        {teamDisplay.length !== 0 ? teamDisplay : <h3>Add someone to your team!</h3>}
      </div>
    </div>
  )
}

export default Team