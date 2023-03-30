import React from 'react'

const TeamCard = (props) => {
  
  return (
    <div className='team-card card'>
      <img src={props.pokemon.sprites.other["official-artwork"]?.front_default} className="team-image"/>
      <h4>{props.pokemon.name}</h4>
    </div>
  )
}

export default TeamCard