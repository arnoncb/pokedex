import "./pokeCard.css"
import { InfoIcon } from "../Icons/InfoIcon"
import { AddFavIcon } from "../Icons/AddFavIcon"
import { RemoveFavIcon } from "../Icons/RemoveFavIcon"
import {
  saveFavoritePokemon,
  removeFavoritePokemon,
} from "../../redux/favoritePokemons.reducer"
import { useDispatch, useSelector } from "react-redux"
import { toggleModal } from "../../redux/modal.reducer"

export function PokeCard(props) {
  const dispatch = useDispatch()
  const { favoritePokemons } = useSelector(state => state.favorites)

  function handleFavorite() {
    if (!favoritePokemons.find(id => id === props.pokemon.id)) {
      dispatch(saveFavoritePokemon(props.pokemon.id))
    } else {
      dispatch(removeFavoritePokemon(props.pokemon.id))
    }
  }

  function handleModal() {
    dispatch(toggleModal(true, props.pokemon.id))
  }

  return (
    <li className="card">
      <div className="poke-info">
        <span>{props.pokemon.name}</span>
        <img
          className="poke-sprite"
          src={props.pokemon.image}
          alt="Imagem do Pokémon"
        />
        <div className="poke-type">{props.pokemon.type}</div>
      </div>
      <div className="buttons">
        <button onClick={handleModal}>
          <InfoIcon />
        </button>
        <button onClick={handleFavorite}>
          {props.isFavorite ? <RemoveFavIcon /> : <AddFavIcon />}
        </button>
      </div>
    </li>
  )
}
