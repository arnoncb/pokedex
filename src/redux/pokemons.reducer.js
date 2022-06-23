export const SAVE = "POKEMONS/SAVE"

export const savePokemons = pokemons => {
  return {
    type: SAVE,
    payload: pokemons,
  }
}

const INITIAL_STATE = {
  pokemons: [],
}

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SAVE:
      return {
        ...state,
        pokemons: action.payload,
      }

    default:
      return state
  }
}

export default reducer
