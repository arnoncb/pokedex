import { combineReducers } from "redux"

import pokemonsReducer from "./pokemons.reducer"
import favoritePokemons from "./favoritePokemons.reducer"
import toggleModal from "./modal.reducer"

const rootReducer = combineReducers({
  pokemon: pokemonsReducer,
  favorites: favoritePokemons,
  modal: toggleModal,
})

export default rootReducer
