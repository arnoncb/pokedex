export const ADD_ITEM = "FAVORITEPOKEMONS/ADD_ITEM"
export const REMOVE_ITEM = "FAVORITEPOKEMONS/REMOVE_ITEM"

export const saveFavoritePokemon = favoritePokemon => {
  return {
    type: ADD_ITEM,
    newItem: favoritePokemon,
  }
}

export const removeFavoritePokemon = favoritePokemon => {
  return {
    type: REMOVE_ITEM,
    newItem: favoritePokemon,
  }
}

const INITIAL_STATE = {
  favoritePokemons: [],
}

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        favoritePokemons: [...state.favoritePokemons, action.newItem],
      }

    case REMOVE_ITEM:
      return {
        ...state,
        favoritePokemons: state.favoritePokemons.filter(
          item => item !== action.newItem
        ),
      }

    default:
      return state
  }
}

export default reducer
