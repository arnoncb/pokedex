import { useSelector } from "react-redux"
import { PokeCard } from "../PokeCard/PokeCard"

import "./favorites.css"

export function Favorites() {
  const { favoritePokemons } = useSelector(state => state.favorites)
  const { pokemons } = useSelector(state => state.pokemon)
  return (
    <div className="main-page favorites">
      {favoritePokemons.length === 0 && (
        <span id="no-favorites">Não há nenhum pokémon favoritado.</span>
      )}
      <ul id="fav-pokemons-list">
        {pokemons
          .filter(pokemon => favoritePokemons.includes(pokemon.id))
          .map(pokemon => {
            return (
              <PokeCard pokemon={pokemon} key={pokemon.id} isFavorite={true} />
            )
          })}
      </ul>
    </div>
  )
}
