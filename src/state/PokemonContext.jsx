import { createContext, useReducer } from "react";

let initialState = {
  team: [],
  pokedex: []
}

const PokemonContext = createContext()

const PokemonContextProvider = (props) => {
  const reducer = (state, action) => {
    switch(action.type) {
      case "SAVE_POKEDEX":
        return {...state, pokedex: action.payload}
      case "ADD_TO_TEAM":
        if(state.team.length === 6) return state
        return {...state, team: [...state.team, action.payload]}
      default:
        return state
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <PokemonContext.Provider value={{state, dispatch}}>
      {props.children}
    </PokemonContext.Provider>
  )
}

export {PokemonContextProvider}
export default PokemonContext