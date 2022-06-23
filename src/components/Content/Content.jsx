import { PokeCard } from "../PokeCard/PokeCard"

import "./content.css"
import { useSelector } from "react-redux"

// const pokemonsURL = "https://pokeapi.co/api/v2/pokemon"
// const pokemonsImage = "https://pokeres.bastionbot.org/images/pokemon"

export function Content({ searchValue }) {
  const { pokemons } = useSelector(state => state.pokemon)

  const filteredPokemons = pokemons.filter(pokemon =>
    pokemon.name.toLowerCase().includes(searchValue.toLowerCase())
  )

  return (
    <div className="main-page">
      <ul className="card-list">
        {filteredPokemons.map(pokemon => {
          return (
            <PokeCard pokemon={pokemon} key={pokemon.id} isFavorite={false} />
          )
        })}
      </ul>
    </div>
  )
}
